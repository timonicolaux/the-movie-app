import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieDetails, Categories } from "../../types/types";
import styles from "../../styles/Category.module.css";
import { Link } from "react-router-dom";

const Category: React.FC<Categories> = ({ category, title }) => {
  const [movieList, setMovieList] = useState<MovieDetails[]>([]);

  const getMovieList = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
    );
    setMovieList(res.data.results);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryTitleContainer}>
          <h1 className={styles.categoryTitle}>{title}</h1>
        </div>
        <div className={styles.moviesContainer}>
          {movieList.map((elt, index) => (
            <div key={index} className={styles.movieContainer}>
              <Link style={{ textDecoration: "none" }} to={`/movie/${elt.id}`}>
                <div className={styles.moviePoster}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${elt.poster_path}`}
                    width="155px"
                    height="220px"
                    alt="movie-poster"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <h1 className={styles.movieTitle}>{elt.title}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
