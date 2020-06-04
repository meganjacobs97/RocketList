const ShowLoginBox = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      return !state;
    case "RESET":
      return (state = false);
    default:
      return state;
  }
};

export default ShowLoginBox;
