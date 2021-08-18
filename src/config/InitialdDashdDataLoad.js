import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allThunks } from "../redux/exports";
import { useSelector } from "react-redux";

const InitialdDashdDataLoad = ({ children }) => {
  const dispatch = useDispatch();
  // const id = useSelector((state) => state.authReducer?.user[0].id);

  useEffect(() => {
    dispatch(allThunks.get_finance_all());
    dispatch(allThunks.get_users_all());
  }, []);

  return <>{children}</>;
};

export default InitialdDashdDataLoad;
