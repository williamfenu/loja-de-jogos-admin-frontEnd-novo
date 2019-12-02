import request from "../http/request";

const _URL_BASE = "http://localhost:8080/lojadejogos/";

const rest = resource => {
  return {
    get: async () => {
      try {
        const resp = await request.get(`${_URL_BASE}${resource}`);
        return resp;
      } catch (error) {
        console.log("Erro ao realizar a busca", error);
      }
    },

    post: async data => {
      try {
        const resp = await request.post(`${_URL_BASE}${resource}`, data);
        return resp;
      } catch (error) {
        console.log("Erro ao realizar a gravação", error);
      }
    }
  };
};

export default rest;
