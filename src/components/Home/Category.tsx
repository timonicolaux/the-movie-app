import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieDetails, Categories } from "../../types/types";
import styles from "../../styles/Category.module.css";
import { Link } from "react-router-dom";
import ContentLoader from "react-content-loader";

const Category: React.FC<Categories> = ({ category, title }) => {
  const [movieList, setMovieList] = useState<MovieDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovieList = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
    );
    setMovieList(res.data.results);
    setIsLoading(false);
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
          {isLoading && (
            <div className={styles.movieContainer}>
              <ContentLoader
                height={340}
                width="110%"
                backgroundColor="#d9d9d9"
                animate={true}
              >
                <rect x="0" width="160px" height="220px" rx="10" ry="10" />
                <rect
                  x="0"
                  y="240"
                  width="160px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect
                  x="0"
                  y="270"
                  width="100px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect x="200" width="160px" height="220px" rx="10" ry="10" />
                <rect
                  x="200"
                  y="240"
                  width="160px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect
                  x="200"
                  y="270"
                  width="100px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect x="400" width="160px" height="220px" rx="10" ry="10" />
                <rect
                  x="400"
                  y="240"
                  width="160px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect
                  x="400"
                  y="270"
                  width="100px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect x="600" width="160px" height="220px" rx="10" ry="10" />
                <rect
                  x="600"
                  y="240"
                  width="160px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect
                  x="600"
                  y="270"
                  width="100px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect x="800" width="160px" height="220px" rx="10" ry="10" />
                <rect
                  x="800"
                  y="240"
                  width="160px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect
                  x="800"
                  y="270"
                  width="100px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect x="1000" width="160px" height="220px" rx="10" ry="10" />
                <rect
                  x="1000"
                  y="240"
                  width="160px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect
                  x="1000"
                  y="270"
                  width="100px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect x="1200" width="160px" height="220px" rx="10" ry="10" />
                <rect
                  x="1200"
                  y="240"
                  width="160px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect
                  x="1200"
                  y="270"
                  width="100px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect x="1400" width="160px" height="220px" rx="10" ry="10" />
                <rect
                  x="1400"
                  y="240"
                  width="160px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
                <rect
                  x="1400"
                  y="270"
                  width="100px"
                  height="20px"
                  rx="10"
                  ry="10"
                />
              </ContentLoader>
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
