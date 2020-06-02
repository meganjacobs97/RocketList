const MakeAPost = (state = false, action) => {
  switch (action.type) {
    case "Make_Post":
      return !state;
    default:
      return state;
  }
};

export default MakeAPost;
