import React, {FC} from "react";

import styles from "./styles.module.scss";
import Header from "../Header";

const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default MainLayout;
