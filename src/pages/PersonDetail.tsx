import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PersonDetail.module.css";

const PersonDetail = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <Link style={{ textDecoration: "none" }} to={`/`}>
          <div className={styles.logo}></div>
        </Link>
      </div>
    </div>
  );
};

export default PersonDetail;
