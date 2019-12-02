import { combineReducers } from "redux";
import menuState from "./menuReducer";
import games from "./gameReducer";
import fileInputComponents from "./fileInputComponentReducer";
import developers from "./developerReducer";
import imageUrl from "./uploadReducer";

export default combineReducers({
  menuState,
  games,
  fileInputComponents,
  developers,
  imageUrl
});
