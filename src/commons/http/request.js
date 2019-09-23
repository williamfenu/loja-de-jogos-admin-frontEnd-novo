export default {
  get: url =>
    fetch(url)
      .then(response => response.json())
      .then(json => json),

  post: (url, object) => {
    fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify(object)
    }).then(response => response);
  }
};
