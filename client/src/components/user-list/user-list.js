import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../actions";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  if (!users) {
    return;
  }
  return (
    <div>
      {Object.keys(users).map((user) => (
        <li> {users[user].name} </li>
      ))}
    </div>
  );
};

export default UserList;
