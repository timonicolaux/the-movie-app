import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieDetails } from "../types/types";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [searchData, setSearchData] = useState<MovieDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getSearchData = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=fr&query=${search}&page=1&include_adult=false`
    );
    console.log(res.data);
    setSearchData(res.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getSearchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Chargement...</h1>
      ) : searchData.length ? (
        searchData?.map((elt) => <h1>{elt.title}</h1>)
      ) : (
        <h1>Pas de résultats</h1>
      )}
    </div>
  );
};

export default SearchResults;
