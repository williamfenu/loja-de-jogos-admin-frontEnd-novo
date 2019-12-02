export const types = {
  UPLOAD_REQUEST: "UPLOAD_REQUEST",
  UPLOAD_SUCCESS: "UPLOAD_SUCESS"
};

export const uploadImage = file => ({
  type: types.UPLOAD_REQUEST,
  file
});
