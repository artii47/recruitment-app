import users from "../apis/users";

export const fetchData = () => async (dispatch) => {
  const response = await users.get("/users");
  dispatch({ type: "FETCH_DATA", payload: response.data });
};
