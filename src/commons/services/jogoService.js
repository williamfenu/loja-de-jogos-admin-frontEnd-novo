import request from "../http/request";

const _URL = "http://localhost:8080/lojadejogos/jogos";

export default {
  buscar: () =>
    new Promise(async (resolve, reject) => {
      try {
        resolve(request.get(_URL));
      } catch (error) {
        reject(error);
      }
    }),

  cadastrar: jogo => {
    new Promise(async (resolve, reject) => {
      try {
        resolve(request.post(_URL, jogo));
      } catch (error) {
        reject(error);
      }
    });
  }
};
