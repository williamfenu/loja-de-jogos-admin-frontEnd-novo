const initialState = {
  jogos: ""
};

const jogoReducer = (state = initialState, action) => {
  if (action.type === "GET_JOGOS_SUCCESS") {
    return { ...state, jogos: [...action.payload.data] };
  }
  if (action.type === "SAVE_JOGO_SUCCESS") {
    return { ...state };
  }
  return state;
};

export default jogoReducer;
