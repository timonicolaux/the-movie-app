import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { CastDetails, CrewDetails, MovieDetails } from "../types/types";
import styles from "../styles/MovieDetail.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const MovieDetail = () => {
  const [movieInfo, setMovieInfo] = useState<MovieDetails>();
  const [movieCast, setMovieCast] = useState<CastDetails[]>([]);
  const [movieDirector, setMovieDirector] = useState<CrewDetails>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const getMovieInfo = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
      );
      setMovieInfo(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieCredits = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
      );
      setMovieCast(res.data.cast);
      setMovieDirector(res.data.crew.filter((elt) => elt.job === "Director"));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieInfo();
    getMovieCredits();
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        <Header />
        {!isLoading && movieInfo ? (
          <div className={styles.movieMainContainer}>
            <div
              style={{
                backgroundImage: `url(
            https://image.tmdb.org/t/p/original${movieInfo?.backdrop_path}
          )`,
                height: window.innerWidth < 900 ? "500px" : "700px",
              }}
              className={styles.movieBackground}
            ></div>

            <div className={styles.movieContainer}>
              <div className={styles.moviePosterContainer}>
                <img
                  src={
                    movieInfo?.poster_path
                      ? `https://image.tmdb.org/t/p/original${movieInfo?.poster_path}`
                      : `https://fxpanel.net/images/no-poster.jpg`
                  }
                  width="300px"
                  height="420px"
                  alt="movie-poster"
                  style={{ borderRadius: "10px", zIndex: 20 }}
                />
              </div>
              <div className={styles.movieInfoContainer}>
                <div className={styles.movieTitleContainer}>
                  <h1 className={styles.movieTitle}>{movieInfo?.title}</h1>
                  <h1 className={styles.movieDate}>
                    ({movieInfo?.release_date.slice(0, 4)})
                  </h1>
                </div>
                <div className={styles.movieTitleContainer2}>
                  <h3 className={styles.runtime}>{movieInfo?.runtime} min</h3>
                  <div className={styles.genreContainer}>
                    {movieInfo?.genres.map((elt, index) => (
                      <h3 key={index} className={styles.genre}>
                        {movieInfo.genres.length - 1 === index
                          ? `${elt.name}`
                          : `${elt.name} -`}
                      </h3>
                    ))}
                  </div>
                </div>
                <div className={styles.movieOverviewContainer}>
                  <h2 className={styles.subtitle}>Synopsis</h2>
                  <p className={styles.movieInfo}>{movieInfo?.overview}</p>
                </div>
                <div>
                  <h2 className={styles.subtitle}>Réalisateur</h2>
                  {movieDirector && (
                    <h2 className={styles.director}>{movieDirector[0].name}</h2>
                  )}
                </div>
                {window.innerWidth < 900 && movieCast?.length !== 0 && (
                  <div className={styles.actorsMainContainer}>
                    <h1>Têtes d'affiche</h1>
                    <div className={styles.actorsContainer}>
                      {movieCast
                        ?.map((elt, index) => (
                          <div
                            className={styles.actorContainer}
                            key={index}
                            onClick={() => {
                              navigate(`/person/${elt.id}`);
                            }}
                          >
                            <img
                              src={
                                elt?.profile_path
                                  ? `https://image.tmdb.org/t/p/original${elt?.profile_path}`
                                  : `https://fxpanel.net/images/no-poster.jpg`
                              }
                              width="150px"
                              height="220px"
                              alt="movie-poster"
                            />
                            <div className={styles.actorInfo}>
                              <h2>{elt.name}</h2>
                              <h3>{elt.character}</h3>
                            </div>
                          </div>
                        ))
                        .slice(0, 10)}
                    </div>
                  </div>
                )}
              </div>

              {window.innerWidth <= 900 && (
                <div className={styles.buttonContainerMobile}>
                  <button
                    className={styles.button}
                    onClick={() => {
                      if (!search) {
                        navigate(`/`);
                      } else {
                        navigate(`/search-results/?search=${search}`);
                      }
                    }}
                  >
                    Retour
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "grey",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: window.innerWidth < 900 ? "500px" : "650px",
              opacity: 0.2,
            }}
          ></div>
        )}
        {window.innerWidth >= 900 && (
          <div className={styles.actorsMainContainer}>
            <h1>Têtes d'affiche</h1>
            <div className={styles.actorsContainer}>
              {movieCast
                .map((elt, index) => (
                  <div
                    className={styles.actorContainer}
                    key={index}
                    onClick={() => {
                      navigate(`/person/${elt.id}`);
                    }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${elt?.profile_path}`}
                      width="150px"
                      height="220px"
                      alt="movie-poster"
                    />
                    <div className={styles.actorInfo}>
                      <h2>{elt.name}</h2>
                      <h3>{elt.character}</h3>
                    </div>
                  </div>
                ))
                .slice(0, 10)}
            </div>
          </div>
        )}
      </div>

      {window.innerWidth > 900 && (
        <div className={styles.buttonContainerDesktop}>
          <button
            className={styles.button}
            onClick={() => {
              if (!search) {
                navigate(`/`);
              } else {
                navigate(`/search-results/?search=${search}`);
              }
            }}
          >
            Retour
          </button>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
