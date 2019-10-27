import request from "../http/request";

const _URL = "http://localhost:8080/lojadejogos/produtoras";

export default {
  buscar: () =>
    new Promise(async (resolve, reject) => {
      try {
        resolve(request.get(_URL));
      } catch (error) {
        reject(error);
      }
    }),

  cadastrar: produtora => {
    new Promise(async (resolve, reject) => {
      try {
        resolve(request.post(_URL, produtora));
      } catch (error) {
        reject(error);
      }
    });
  }
};
