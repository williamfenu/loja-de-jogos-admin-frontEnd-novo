import { combineReducers } from "redux";
import menuState from "./menuReducer";
import games from "./gameReducer";
import fileFields from "./fileFieldReducer";
import developers from "./developerReducer";
import imageUrl from "./uploadReducer";

export default combineReducers({
  menuState,
  games,
  fileFields,
  developers,
  imageUrl
});
