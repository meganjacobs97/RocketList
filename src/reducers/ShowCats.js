const ShowCats = (state = false, action) => {
  switch (action.type) {
    case "SHOW_CATS":
      return !state;
    default:
      return state;
  }
};

export default ShowCats;
