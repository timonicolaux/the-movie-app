import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [searchData, setSearchData] = useState<any>([]);

  const getSearchData = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=fr&query=${search}&page=1&include_adult=false`
    );
    console.log(res.data);
    setSearchData(res.data);
  };

  useEffect(() => {
    getSearchData();
  }, []);

  return <div>{searchData.filter((elt) => elt.title)}</div>;
};

export default SearchResults;
