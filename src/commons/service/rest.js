import request from "../http/request";

const _URL_BASE = "http://localhost:8080/lojadejogos/";

const rest = resource => {
  return {
    get: async (id = "") => {
      try {
        const resp = await request.get(
          `${_URL_BASE}${resource}${id ? "/" + id : ""}`
        );
        return resp.json();
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
    },

    put: async data => {
      try {
        const resp = await request.post(`${_URL_BASE}${resource}`, data);
        return resp;
      } catch (error) {
        console.log("Erro ao realizar a gravação", error);
      }
    },

    delete: async id => {
      try {
        const resp = await request.delete(`${_URL_BASE}${resource}/${id}`);
        return resp;
      } catch (error) {
        console.log("Erro ao deletar", error);
      }
    }
  };
};

export default rest;
