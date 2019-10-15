import { combineReducers } from "redux";
import menuState from "./menuReducer";
import jogos from "./jogoReducer";

export default combineReducers({
  menuState,
  jogos
});
