import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./user-item.css";

const UserItem = ({ name, lastName, country, city, email, id }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{lastName}</td>
      <td>{country}</td>
      <td>{city}</td>
      <td>{email}</td>
      <td>
        <Link to={`/user/edit/${id}`} className="btn">
          EDIT
        </Link>
      </td>
      <td>
        <Link to={`/user/delete/${id}`} className="btn">
          DELETE
        </Link>
      </td>
    </tr>
  );
};

export default UserItem;

UserItem.defaultProps = {
  name: "",
  lastName: "",
  country: "",
  city: "",
};

UserItem.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  country: PropTypes.string,
  city: PropTypes.string,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
