import { types } from "../actions/uploadActions";

const initialState = {};

const uploadReducer = (state = initialState, action) => {
  if (action.type === types.UPLOAD_SUCCESS) {
    return action.payload.url;
  }
  return state;
};

export default uploadReducer;
