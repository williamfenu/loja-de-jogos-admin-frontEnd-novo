import fetchIntercept from "fetch-intercept";
// import { Redirect } from "react-routes-dom";

fetchIntercept.register({
  request: function(url, config) {
    const token = localStorage.getItem("token");
    if (token) config.headers["Authorization"] = "Bearer " + token;
    return [url, config];
  },

  requestError: function(error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function(response) {
    if (
      response.status === 401 ||
      (window.location.pathname !== "/login" && !localStorage.getItem("token"))
    ) {
      localStorage.removeItem("token");
      window.location = "/login";
    }
    // Modify the reponse object
    return response;
  },

  responseError: function(error) {
    // Handle an fetch error
    return Promise.reject(error);
  }
});

export default {
  get: url =>
    new Promise(async (resolve, reject) => {
      try {
        const resp = await fetch(url, { headers: {} })
          .then(response => response.json())
          .then(json => json);
        resolve(resp);
      } catch (error) {
        reject(error);
      }
    }),

  post: (url, object) =>
    new Promise(async (resolve, reject) => {
      try {
        const resp = await fetch(url, {
          headers: { "Content-Type": "application/json" },
          method: "post",
          body: JSON.stringify(object)
        });
        resolve(resp);
      } catch (error) {
        reject(error);
      }
    })
};
