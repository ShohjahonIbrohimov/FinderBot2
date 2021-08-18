import React from "react";
import navItems from "./NavItems";
import styles from "./LayoutTabs.module.css";
import { NavLink } from "react-router-dom";

const LayoutTabs = () => {
  return (
    <div className={styles.tabs_wrap}>
      <ul className={styles.nav_items}>
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
