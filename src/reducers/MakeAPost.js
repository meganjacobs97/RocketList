const MakeAPost = (state = false, action) => {
  switch (action.type) {
    case "Make_Post":
      return !state;
    case "RESET":
      return (state = false);
    default:
      return state;
  }
};

export default MakeAPost;
