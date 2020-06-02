const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    case "Token":
      return !state;
    default:
      return state;
  }
};

export default isLoggedIn;
