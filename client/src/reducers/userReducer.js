import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, ..._.mapKeys(action.payload, "userId") };
    default:
      return state;
  }
};
