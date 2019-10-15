export const types = {
  GET_JOGOS_REQUEST: "GET_JOGOS_REQUEST",
  SAVE_JOGO_REQUEST: "SAVE_JOGO_REQUEST",
  GET_JOGOS_SUCCESS: "GET_JOGOS_SUCCESS"
};

export const getJogos = () => ({
  type: types.GET_JOGOS_REQUEST
});

export const saveJogo = jogo => ({
  type: types.SAVE_JOGO_REQUEST,
  jogo: jogo
});
