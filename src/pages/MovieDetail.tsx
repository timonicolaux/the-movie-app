import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../types/types";
import styles from "../styles/MovieDetail.module.css";

const MovieDetail = () => {
  const [movieInfo, setMovieInfo] = useState<MovieDetails>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  const getMovieInfo = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
    );
    console.log(res.data);
    setMovieInfo(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <div>
      {!isLoading && (
        <>
          <div
            style={{
              position: "absolute",
              backgroundImage: `url(
            https://image.tmdb.org/t/p/original${movieInfo?.backdrop_path}
          )`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "500px",
              opacity: 0.2,
            }}
          ></div>

          <div className={styles.movieContainer}>
            <div className={styles.moviePosterContainer}>
              <img
                src={`https://image.tmdb.org/t/p/original${movieInfo?.poster_path}`}
                width="300px"
                height="420px"
                alt="movie-poster"
              />
            </div>
            <div className={styles.movieInfoContainer}>
              <div className={styles.movieTitleContainer}>
                <h1 className={styles.movieTitle}>{movieInfo?.title}</h1>
                <h1 className={styles.movieTitle}>
                  ({movieInfo?.release_date.slice(0, 4)})
                </h1>
              </div>
              <div className={styles.movieTitleContainer}>
                <h3 className={styles.runtime}>{movieInfo?.runtime} min</h3>
                <div className={styles.genreContainer}>
                  {movieInfo?.genres.map((elt) => (
                    <h3 className={styles.genre}>{elt.name}</h3>
                  ))}
                </div>
              </div>
              <div className={styles.movieOverviewContainer}>
                <h2 className={styles.subtitle}>Synopsis</h2>
                <p>{movieInfo?.overview}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
