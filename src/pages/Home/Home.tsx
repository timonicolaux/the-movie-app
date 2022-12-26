import React from "react";
import Category from "../../components/Category";
import styles from "../../styles/Home.module.css";
import { Categories } from "../../types/types";

const Home = () => {
  const categories: Categories[] = [
    { category: "top_rated", title: "Films les mieux notés" },
    { category: "popular", title: "Films populaires" },
    { category: "upcoming", title: "Prochainement" },
  ];

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.header}></div>
        {categories?.map((elt, index) => (
          <div key={index}>
            <Category category={elt.category} title={elt.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
