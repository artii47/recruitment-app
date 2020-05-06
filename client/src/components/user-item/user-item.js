import React from "react";
import { Link } from "react-router-dom";
import "./user-item.css";

const UserItem = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.lastName}</td>
      <td>{props.country}</td>
      <td>{props.city}</td>
      <td>{props.email}</td>
      <td>
        <Link to={`/user/edit/${props.id}`} className="btn">
          EDIT
        </Link>
      </td>
      <td>
        <Link to={`/user/delete/${props.id}`} className="btn">
          DELETE
        </Link>
      </td>
    </tr>
  );
};

export default UserItem;
