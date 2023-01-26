import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MovieDetails } from "../types/types";
import styles from "../styles/SearchResults.module.css";
import SearchBar from "../components/Home/SearchBar";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [searchData, setSearchData] = useState<MovieDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getSearchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=fr&query=${search}&page=1&include_adult=false`
      );
      setSearchData(res.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchData();
  }, [search]);

  return (
    <>
      <div className={styles.header}>
        <Link style={{ textDecoration: "none" }} to={`/`}>
          <div className={styles.logo}></div>
        </Link>
        <SearchBar />
      </div>
      <div className={styles.mainContainer}>
        {!isLoading && search.length && <h2>Résultats pour "{search}"</h2>}
        {isLoading ? (
          <h1>Chargement...</h1>
        ) : searchData.length ? (
          searchData?.map((elt, index) => (
            <div key={index} className={styles.movieContainer}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/movie/${elt.id}?search=${search}`}
              >
                <div className={styles.moviePoster}>
                  <img
                    src={
                      elt.poster_path
                        ? `https://image.tmdb.org/t/p/original${elt.poster_path}`
                        : `https://fxpanel.net/images/no-poster.jpg`
                    }
                    width="130px"
                    height="180px"
                    alt="movie-poster"
                    style={{
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                  />
                </div>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={`/movie/${elt.id}?search=${search}`}
              >
                <div className={styles.movieInfos}>
                  <h1 className={styles.movieTitle}>{elt.title}</h1>
                  <p className={styles.movieOverview}>
                    {elt.overview.length > 250 && window.innerWidth > 500
                      ? elt.overview.slice(0, 250) + "..."
                      : elt.overview.length > 70 && window.innerWidth <= 500
                      ? elt.overview.slice(0, 70) + "..."
                      : elt.overview}
                  </p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <h1>Pas de résultats</h1>
        )}
      </div>
    </>
  );
};

export default SearchResults;
