import users from "../apis/users";
import faker from "faker";
import { ADD_USERS, EDIT_USER, FETCH_USER, DELETE_USER } from "./types";

export const fetchUsersFromDb = () => async (dispatch) => {
  const response = await users.get("/users");
  if (response.data.length <= 0) {
    let usersData = [];
    for (let id = 1; id <= 3; id++) {
      let name = faker.name.firstName();
      let lastName = faker.name.lastName();
      let email = faker.internet.email();
      let city = faker.address.city();
      let country = faker.address.country();
      let picture = "https://picsum.photos/200/300";
      usersData.push({
        id: id,
        name: name,
        lastName: lastName,
        email: email,
        city: city,
        country: country,
        picture: picture,
      });
      await users.post("/users", {
        name,
        lastName,
        email,
        city,
        country,
        picture,
      });
    }
    dispatch({ type: ADD_USERS, payload: usersData });
  }
  dispatch({ type: ADD_USERS, payload: response.data });
};

export const editUser = (id, formValues) => async (dispatch) => {
  const response = await users.patch(`/users/${id}`, formValues);

  dispatch({ type: EDIT_USER, payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await users.get(`/users/${id}`);

  dispatch({ type: FETCH_USER, payload: response.data });
};

export const deleteUser = (id) => async (dispatch) => {
  await users.delete(`/users/${id}`);
  dispatch({ type: DELETE_USER, payload: id });
};
