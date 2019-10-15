const initialState = {
  openedMenu: true
};

const menuReducer = (state = initialState, action) => {
  if (action.type === "TOGGLE_MENU") {
    const newState = { openedMenu: !state.openedMenu };
    return newState;
  }
  return state;
};

export default menuReducer;
