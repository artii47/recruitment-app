import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, fetchUser } from "../../actions/index";
import { useParams } from "react-router-dom";
import Form from "../form/form";

const UserEdit = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const user = useSelector((state) => state.users[params.id]);
  useEffect(() => {
    if (!user) {
      dispatch(fetchUser(params.id));
    }
  }, [dispatch, params.id]);
  const onSubmit = useCallback(
    (formValues) => {
      dispatch(editUser(params.id, formValues));
    },
    [params.id, dispatch]
  );

  if (!user) {
    return "LOADING";
  }

  return (
    <div>
      <Form onSubmitEvent={onSubmit} user={user} />
    </div>
  );
};

export default UserEdit;
