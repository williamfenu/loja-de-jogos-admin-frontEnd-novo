const initialState = {
  openedMenu: true
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { openedMenu: !state.openedMenu };

    default:
      return state;
  }
};

export default menuReducer;
