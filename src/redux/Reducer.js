const initial_state = {
  count: 0,
  loader: false,
};
export const reducer = (state = initial_state, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1, loader: true };
  } 
  else if (action.type === "LOADING_STATUS") {
    return { ...state, loader: false };
  } 
  else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
      loader: true,
    };
  }
   else {
    return state;
  }
};
