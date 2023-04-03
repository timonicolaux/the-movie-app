import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Searchbar.module.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=fr&query=${searchQuery}&page=1&include_adult=false`
      );
      navigate(`/search-results/?search=${searchQuery}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={styles.inputContainer}>
        <form onSubmit={handleSubmit} acceptCharset="utf-8">
          <input
            className={styles.input}
            type="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Rechercher un film"
          ></input>
          <input type="submit" className={styles.button} value="GO !" />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
