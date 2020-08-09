const fetchTech = (state = { techNew: [] }, action) => {
  switch (action.type) {
    case "FETCH_TECH":
      return {
        ...state,
        techNew: action.payload,
      };
    default:
      return state;
  }
};

export default fetchTech;
