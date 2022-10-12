const CAKE_ORDERED = "CAKE_ORDERED";

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 10,
  };
};

const initialState = {
  numberOfCake: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
      };

    default:
      return {
        state,
      };
  }
};
