const developerReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DEVELOPERS":
      return [...state];

    case "SAVE_DEVELOPERS":
      return [...action.developers];

    default:
      return state;
  }
};

export default developerReducer;
