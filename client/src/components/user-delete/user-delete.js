import React, { useEffect } from "react";
import Modal from "../modal/modal";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUser } from "../../actions";
import "./user-delete.css";

const UserDelete = () => {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchUser(params.id));
  });
  const user = useSelector((state) => state.users[params.id]);
  if (!user) {
    return "LOADING";
  }
  const actions = (
    <div>
      <Link
        onClick={() => {
          dispatch(deleteUser(params.id));
        }}
        to="/"
        className="btn btn--red"
      >
        DELETE
      </Link>
      <Link to="/" className="btn btn--green">
        CANCEl
      </Link>
    </div>
  );
  return (
    <div>
      <Modal
        header={`Are you sure u want to delete user with name ${user.name}?`}
        modalContent={actions}
      />
    </div>
  );
};

export default UserDelete;
