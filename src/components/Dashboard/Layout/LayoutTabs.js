import React from "react";
import navItems from "./NavItems";
import styles from "./LayoutTabs.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/authSlice";

const LayoutTabs = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.tabs_wrap}>
      <ul className={styles.nav_items}>
        <div className={styles.nav_items_header}>
          <span class="icon_wrap" onClick={handleLogout}>
            <i class="bx bx-log-out" style={{ color: "#fff" }}></i>
          </span>
        </div>
        {navItems.map((item) => {
          return (
            <li key={item.name}>
              <NavLink
                activeClassName={styles.active}
                to={item.link}
                className={`${styles.nav_item} layout_menu_item`}
              >
                <span>{item.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LayoutTabs;
