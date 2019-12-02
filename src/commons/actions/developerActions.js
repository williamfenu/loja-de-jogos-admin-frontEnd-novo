export const types = {
  GET_DEVELOPERS: "GET_DEVELOPERS",
  SAVE_DEVELOPERS: "SAVE_DEVELOPERS"
};

export const getDeveloper = () => ({
  type: types.GET_DEVELOPERS
});

export const saveDeveloper = developers => ({
  type: types.SAVE_DEVELOPERS,
  developers
});
