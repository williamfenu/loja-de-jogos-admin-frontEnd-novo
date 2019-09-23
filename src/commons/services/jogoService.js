import request from "../http/request";

const URL = "http://localhost:8080/lojadejogos/jogos";

export default {
  buscar: () => {
    return request.get(URL);
  },

  cadastrar: jogo => {
    return request.post(URL, jogo);
  }
};
