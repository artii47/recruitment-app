import {
  ADD_USERS,
  EDIT_USER,
  FETCH_USER,
  DELETE_USER,
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_USERS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_USER:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_USER:
      return _.omit(state, action.payload);
    case EDIT_USER:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
