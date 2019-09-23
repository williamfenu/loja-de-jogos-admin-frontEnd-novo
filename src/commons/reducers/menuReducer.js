const initialState = {
  openedMenu: true
};

const menuReducer = (state = initialState, action) => {
  if (action.type === "MENU_ACTION") {
    const newState = { openedMenu: !state.openedMenu };
    return newState;
  }
  return state;
};

export default menuReducer;
