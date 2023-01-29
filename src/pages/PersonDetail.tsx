import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles/PersonDetail.module.css";
import { PersonInfo } from "../types/types";

const PersonDetail = () => {
  const [personInfo, setPersonInfo] = useState<PersonInfo>();
  const { id } = useParams();
  const navigate = useNavigate();
  const getPersonInfo = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
      );
      setPersonInfo(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPersonInfo();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.personMainContainer}>
        <div className={styles.personImageContainer}>
          <img
            src={
              personInfo?.profile_path
                ? `https://image.tmdb.org/t/p/original${personInfo?.profile_path}`
                : `https://fxpanel.net/images/no-poster.jpg`
            }
            width="300px"
            height="420px"
            alt="movie-poster"
            style={{ borderRadius: "10px", zIndex: 20 }}
          />
        </div>
        <div className={styles.personInfoContainer}>
          <h1>{personInfo?.name}</h1>
          <p>{personInfo?.biography}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => navigate(-1)}>
            Retour
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonDetail;
