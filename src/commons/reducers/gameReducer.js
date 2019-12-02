const initialState = {};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_GAMES":
      return [...action.games];

    default:
      return state;
  }
};

export default gameReducer;
