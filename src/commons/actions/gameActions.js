export const types = {
  GET_GAMES: "GET_GAMES",
  SAVE_GAMES: "SAVE_GAMES"
};

export const getGames = () => ({
  type: types.GET_GAMES
});

export const saveGame = games => {
  console.log("entrou aqui");
  return {
    type: types.SAVE_GAMES,
    games
  };
};
