import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, fetchUser } from "../../actions/index";
import { useParams } from "react-router-dom";
import Form from "../form/form";

const UserEdit = () => {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchUser(params.id));
  }, [dispatch, params.id]);
  const onSubmit = (formValues) => {
    dispatch(editUser(params.id, formValues));
  };
  const user = useSelector((state) => state.users[params.id]);
  if (!user) {
    return "LOADING";
  }
  const initialUserValues = {
    name: user.name,
    lastName: user.lastName,
    country: user.country,
    city: user.city,
    email: user.email,
  };
  return (
    <div>
      <Form onSubmitEvent={onSubmit} initialUserValues={initialUserValues} />
    </div>
  );
};

export default UserEdit;
