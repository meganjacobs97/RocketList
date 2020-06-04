const ShowSubCats = (state = false, action) => {
  switch (action.type) {
    case "SHOW_SUB_CATS":
      return !state;
    default:
      return state;
  }
};

export default ShowSubCats;
