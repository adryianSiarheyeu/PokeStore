import React, {FC} from "react";
import {NavLink} from "react-router-dom";

import {navTabs} from "./navTabs";

import styles from "./styles.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.container}>
      {navTabs.map(({ title, path }) => (
        <NavLink key={path} to={path} className={styles.navTab}>
          {title}
        </NavLink>
      ))}
    </div>
  );
};

export default React.memo(Header);
