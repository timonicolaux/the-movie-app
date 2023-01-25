import React from "react";
import Category from "../components/Home/Category";
import SearchBar from "../components/Home/SearchBar";
import styles from "../styles/Home.module.css";
import { Categories } from "../types/types";

const Home = () => {
  const categories: Categories[] = [
    { category: "top_rated", title: "Films les mieux notés" },
    { category: "popular", title: "Films populaires" },
    { category: "upcoming", title: "Prochainement" },
  ];

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <div className={styles.logo}></div>
          <SearchBar />
        </div>

        <div className={styles.categoriesContainer}>
          {categories?.map((elt, index) => (
            <div className={styles.categoryContainer} key={index}>
              <Category category={elt.category} title={elt.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
