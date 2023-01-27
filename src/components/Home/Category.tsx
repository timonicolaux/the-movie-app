import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieDetails, Categories } from "../../types/types";
import styles from "../../styles/Category.module.css";
import { Link } from "react-router-dom";
import CategoryLoaderDesktop from "../Loaders/CategoryLoaderDesktop";
import CategoryLoaderMobile from "../Loaders/CategoryLoaderMobile";

const Category: React.FC<Categories> = ({ category, title }) => {
  const [movieList, setMovieList] = useState<MovieDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovieList = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
      );
      setMovieList(res.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      getMovieList();
    }, 1000);
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryTitleContainer}>
          <h1 className={styles.categoryTitle}>{title}</h1>
        </div>

        <div className={styles.moviesContainer}>
          {isLoading && window.innerWidth > 500 && (
            <div className={styles.movieContainer}>
              <CategoryLoaderDesktop />
            </div>
          )}
          {isLoading && window.innerWidth <= 500 && (
            <div className={styles.movieContainer}>
              <CategoryLoaderMobile />
            </div>
          )}
          {!isLoading &&
            movieList.map((elt, index) => (
              <div key={index} className={styles.movieContainer}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/movie/${elt.id}`}
                >
                  <div className={styles.moviePoster}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${elt.poster_path}`}
                      width="155px"
                      height="220px"
                      alt="movie-poster"
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
