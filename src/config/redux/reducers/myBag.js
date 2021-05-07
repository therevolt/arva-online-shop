const initialstate = {
  total: 0,
};

const myBag = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_TOTAL":
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

export default myBag;
