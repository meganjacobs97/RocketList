const ShowCats = (state = false, action) => {
  switch (action.type) {
    case "SHOW_CATS":
      return !state;
    case "RESET":
      return (state = false);
    default:
      return state;
  }
};

export default ShowCats;
