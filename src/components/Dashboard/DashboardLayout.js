import React, { useState, useEffect } from "react";
import LayoutTabs from "./Layout/LayoutTabs";
import { DASHBOARD_ROUTES } from "../../routes/routes";
import { Route, Switch } from "react-router-dom";
import { call_center_icons, general_icons } from "../../constants/icons";
import { authMe } from "../../redux/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authSlice";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.authReducer.user[0]);
  const [visible, setvisible] = useState(false);
  const user = {};
  const handleVisibility = () => {
    setvisible(!visible);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(authMe());
  }, []);

  return (
    <>
      <LayoutTabs />
      {/* <div className="topbar d-flex">
        <div className="header_right_item">
          <div className="d-flex align-center">
            <div className="profile_img">
              <img src={call_center_icons.userIcon} alt="" />
            </div>
            <div className="profile_info">
              <p>
                <b>{user?.email}</b>
              </p>
              <p>{user?.name}</p>
            </div>
          </div>
        </div>
        <div className="header_dropdown_wrap">
          <span onClick={handleVisibility} className="dots medium">
            {general_icons.dots_vertical}
          </span>
          <div
            className={`header_dropdown ${visible ? "dropdown_visible" : ""}`}
          >
            <ul>
              <li onClick={handleLogout} className="d-flex align-center">
                {general_icons.logout} Выйти
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div
        className="container"
        style={{
          width: "75%",
          minHeight: "100vh",
          marginLeft: "25%",
          padding: "1.5rem",
          position: "relative",
        }}
      >
        <Switch>
          {DASHBOARD_ROUTES.map((route) => (
            <Route {...route} key={route.key} />
          ))}
        </Switch>
      </div>
    </>
  );
};

export default DashboardLayout;
