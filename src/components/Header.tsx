import React from "react";
import SearchBar from "./Home/SearchBar";
import styles from "../styles/Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}></div>
      <SearchBar />
    </div>
  );
};

export default Header;
