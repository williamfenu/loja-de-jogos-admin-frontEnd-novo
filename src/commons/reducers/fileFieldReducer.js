const initialState = [{ id: 0, label: "screenshot", filename: "" }];

const fileFieldReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_SCREENSHOTS":
      return [...actions.fileFields];
    case "CLEAN_FIELDS":
      return [...initialState];
    default:
      return state;
  }
};

export default fileFieldReducer;
