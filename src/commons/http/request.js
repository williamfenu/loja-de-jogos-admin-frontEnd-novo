export default {
  get: url =>
    new Promise(async (resolve, reject) => {
      try {
        const resp = await fetch(url)
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
