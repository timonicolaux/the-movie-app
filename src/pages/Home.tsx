import React from "react";
import Category from "../components/Home/Category";
import styles from "../styles/Home.module.css";
import { Categories } from "../types/types";
import Header from "../components/Header";

const Home = () => {
  const categories: Categories[] = [
    { category: "top_rated", title: "Films les mieux notés" },
    { category: "popular", title: "Films populaires" },
    { category: "upcoming", title: "Prochainement" },
  ];

  return (
    <>
      <div className={styles.mainContainer}>
        <Header />

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
