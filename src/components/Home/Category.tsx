import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  MovieDetails,
  Categories,
  PersonMovieDetails,
} from "../../types/types";
import styles from "../../styles/Category.module.css";
import { Link } from "react-router-dom";
import CategoryLoaderDesktop from "../Loaders/CategoryLoaderDesktop";
import CategoryLoaderMobile from "../Loaders/CategoryLoaderMobile";

const Category: React.FC<Categories> = ({ category, title, personId }) => {
  const [categoryMovieList, setCategoryMovieList] = useState<MovieDetails[]>(
    []
  );
  const [personMovieList, setPersonMovieList] = useState<PersonMovieDetails[]>(
    []
  );
  const [personPopularMovies, setPersonPopularMovies] = useState<
    PersonMovieDetails[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getCategoryMovieList = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
      );
      setCategoryMovieList(res.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getPersonMovieList = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
      );
      setPersonMovieList(res.data.cast);
      setPersonPopularMovies(
        res.data.cast
          .map((elt) => elt)
          .sort((a, b) => b.popularity - a.popularity)
      );

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      if (personId === "none") {
        getCategoryMovieList();
      }
      if (category === "none") {
        getPersonMovieList();
      }
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
            personId === "none" &&
            categoryMovieList.map((elt, index) => (
              <div key={index} className={styles.movieContainer}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/movie/${elt.id}`}
                >
                  <div className={styles.moviePoster}>
                    <img
                      src={
                        elt?.poster_path
                          ? `https://image.tmdb.org/t/p/original${elt.poster_path}`
                          : `https://fxpanel.net/images/no-poster.jpg`
                      }
                      width="155px"
                      height="220px"
                      alt="movie-poster"
                    />
                  </div>
                  <h1 className={styles.movieTitle}>{elt.title}</h1>
                </Link>
              </div>
            ))}
          {!isLoading &&
            category === "none" &&
            personPopularMovies
              ?.map((elt, index) => (
                <div key={index} className={styles.movieContainer}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/movie/${elt.id}`}
                  >
                    <div className={styles.moviePoster}>
                      <img
                        src={
                          elt?.poster_path
                            ? `https://image.tmdb.org/t/p/original${elt.poster_path}`
                            : `https://fxpanel.net/images/no-poster.jpg`
                        }
                        width="155px"
                        height="220px"
                        alt="movie-poster"
                      />
                    </div>
                    <h1 className={styles.movieTitle}>{elt.title}</h1>
                  </Link>
                </div>
              ))
              .slice(0, 10)}
        </div>
      </div>
    </div>
  );
};

export default Category;
