export const types = {
  ADD_SCREENSHOTS: "ADD_SCREENSHOTS"
};

export const addScreenshots = fileField => ({
  types: types.ADD_SCREENSHOTS,
  fileField
});
