import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../../actions";
import UserItem from "../user-item/user-item";
import "./user-list.css";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(addUsers(users));
  }, [dispatch]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Country</th>
          <th>City</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(users).map((user) => (
          <UserItem
            key={users[user].id}
            name={users[user].name}
            lastName={users[user].lastName}
            country={users[user].country}
            city={users[user].city}
            email={users[user].email}
            id={users[user].id}
            imgUrl={users[user].picutre}
          />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
