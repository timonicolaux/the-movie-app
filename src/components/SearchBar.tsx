import React from "react";
import styles from "../styles/Searchbar.module.css";

const SearchBar = () => {
  return (
    <div>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="search"></input>
        <button className={styles.button}>Rechercher</button>
      </div>
    </div>
  );
};

export default SearchBar;
