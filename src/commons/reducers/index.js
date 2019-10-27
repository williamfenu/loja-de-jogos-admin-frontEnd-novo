import { combineReducers } from "redux";
import menuState from "./menuReducer";
import jogos from "./jogoReducer";
import fileInputComponents from "./fileInputComponentReducer";
import produtoras from "./produtoraReducer";

export default combineReducers({
  menuState,
  jogos,
  fileInputComponents,
  produtoras
});
