export const types = {
  GET_PRODUTORAS_REQUEST: "GET_PRODUTORA_REQUEST",
  GET_PRODUTORAS_SUCCESS: "GET_PRODUTORA_SUCCESS",
  SAVE_PRODUTORA_REQUEST: "SAVE_PRODUTORA_REQUEST"
};

export const getProdutoras = () => ({
  type: types.GET_PRODUTORAS_REQUEST
});

export const saveProdutora = produtora => ({
  type: types.SAVE_PRODUTORA_REQUEST,
  produtora: produtora
});
