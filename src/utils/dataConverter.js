export const dataConverter = {
  toJson: data => {
    if (data) {
      const [year, day, month] = data.split("-");
      return { year, day, month };
    }
  }
};
