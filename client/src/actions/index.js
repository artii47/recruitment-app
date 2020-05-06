import users from "../apis/users";
import faker from "faker";
import { ADD_USERS, EDIT_USER, FETCH_USER, DELETE_USER } from "./types";

export const addUsers = () => async (dispatch) => {
  //first we're getting data from local server to see if any users exist
  const response = await users.get("/users");

  //check if users are in database
  if (response.data.length <= 0) {
    //if no users, we're creating an array and adding data to it from faker
    let usersData = [];
    for (let id = 1; id <= 10; id++) {
      let name = faker.name.firstName();
      let lastName = faker.name.lastName();
      let email = faker.internet.email();
      let city = faker.address.city();
      let country = faker.address.country();
      // pictures provided by faker (lorempixels) doestn work atm
      let picture = "https://picsum.photos/200/300";
      usersData.push({
        id: id,
        name: name,
        lastName: lastName,
        email: email,
        city: city,
        country: country,
        picture: {
          thumbnail: picture,
        },
      });
      //adding users one by one to omit creating another array in an array in our db
      await users.post("/users", {
        name,
        lastName,
        email,
        city,
        country,
        picture: {
          thumbnail: picture,
        },
      });
    }
    //calling action to save our data in our app
    dispatch({ type: ADD_USERS, payload: usersData });
    return;
  }
  //if users were found just add them to our apps store
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
