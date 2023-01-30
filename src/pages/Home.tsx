import React from "react";
import styles from "../styles/Home.module.css";
import { Categories, Genres } from "../types/types";
import Header from "../components/Header";
import MovieCarousel from "../components/Home/MovieCarousel";

const Home = () => {
  const categories: Categories[] = [
    { category: "top_rated", title: "Films les mieux notés" },
    { category: "popular", title: "Films populaires" },
    { category: "upcoming", title: "Prochainement" },
  ];

  const genres: Genres[] = [
    {
      id: "28",
      name: "Action",
    },
    // {
    //   id: "12",
    //   name: "Aventure",
    // },
    {
      id: "16",
      name: "Animation",
    },
    {
      id: "35",
      name: "Comédie",
    },
    // {
    //   id: "80",
    //   name: "Crime",
    // },
    {
      id: "99",
      name: "Documentaire",
    },
    {
      id: "18",
      name: "Drame",
    },
    // {
    //   id: "10751",
    //   name: "Familial",
    // },
    {
      id: "14",
      name: "Fantastique",
    },
    {
      id: "36",
      name: "Histoire",
    },
    {
      id: "27",
      name: "Horreur",
    },
    {
      id: "10402",
      name: "Musique",
    },
    {
      id: "9648",
      name: "Mystère",
    },
    {
      id: "10749",
      name: "Romance",
    },
    {
      id: "878",
      name: "Science-Fiction",
    },
    {
      id: "10770",
      name: "Téléfilm",
    },
    {
      id: "53",
      name: "Thriller",
    },
    {
      id: "10752",
      name: "Guerre",
    },
    {
      id: "37",
      name: "Western",
    },
  ];

  return (
    <>
      <div className={styles.mainContainer}>
        <Header />

        <div className={styles.categoriesContainer}>
          {categories?.map((elt, index) => (
            <div className={styles.categoryContainer} key={index}>
              <MovieCarousel
                category={elt.category}
                title={elt.title}
                personId="none"
                genreId="none"
              />
            </div>
          ))}
          {genres?.map((elt, index) => (
            <div className={styles.categoryContainer} key={index}>
              <MovieCarousel
                category="none"
                title={elt.name}
                personId="none"
                genreId={elt.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
