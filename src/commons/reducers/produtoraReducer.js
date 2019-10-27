const produtoraReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUTORA_SUCCESS":
      return [...action.payload.data];

    case "SAVE_PRODUTORA_SUCCESS":
      return { ...state };

    default:
      return state;
  }
};

export default produtoraReducer;
