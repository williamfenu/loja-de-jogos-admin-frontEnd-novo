const initialState = {};

const jogoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_JOGOS_SUCCESS":
      return [...action.payload.data];

    case "SAVE_JOGO_SUCCESS":
      return { ...state };

    default:
      return state;
  }
};

export default jogoReducer;
