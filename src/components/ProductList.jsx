import React from "react";
import AnnoncesCard from "./AnnoncesCard";
import annonces1 from "../assets/annonces1.webp";
import annonces2 from "../assets/annonces2.webp";
import annonces3 from "../assets/annonces3.webp";
import annonces4 from "../assets/annonces4.svg";
import cross from "../assets/cross.svg";
import location from "../assets/location2.svg";
import sort from "../assets/sort.svg";

const ProductList = () => {
  const data = [
    annonces1,
    annonces2,
    annonces3,
    annonces4,
    annonces1,
    annonces2,
    annonces3,
    annonces4,
    annonces1,
    annonces2,
    annonces3,
    annonces4,
    annonces1,
    annonces2,
    annonces3,
    annonces4,
  ];
  return (
    <>
      {/* DESKTOP START */}
      <div className="d-none d-lg-block">
        <div className="searchTags d-flex mb-3">
          <div className="position-relative mr-4 pointer">
            Prix
            <img src={cross} alt="cross" />
          </div>
          <div className="position-relative mr-4 pointer">
            Sous-Categorie
            <img src={cross} alt="cross" />
          </div>
          <div className="position-relative mr-4 pointer">
            Condition
            <img src={cross} alt="cross" />
          </div>
          <div className="position-relative mr-4 pointer">
            Classement
            <img src={cross} alt="cross" />
          </div>
          <div className="position-relative mr-4 pointer">
            Vendeur
            <img src={cross} alt="cross" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h1 className="font-weight-bold mb-3 mr-4">Chaussure Nike</h1>
            <h3 className="font-weight-bold themeColor2">
              1032 annonces trouvées
            </h3>
          </div>
          <div className="d-flex">
            <button className="themeBtn d-flex justify-content-center align-items-center py-2 px-4 mr-4">
              Mode Carte
              <img
                style={{ width: "20%" }}
                src={location}
                alt="location"
                className="ml-3"
              />
            </button>
            <button className="themeBtn2 d-flex justify-content-center align-items-center py-2 px-4">
              Classer par
              <img
                style={{ width: "20%" }}
                src={sort}
                alt="location"
                className="ml-3"
              />
            </button>
          </div>
        </div>
        <div className="row mt-4">
          {data.map((prev, i) => {
            return (
              <div key={i} className="col-3 mb-4">
                <AnnoncesCard prev={prev} />
              </div>
            );
          })}

          <div className="col-12 text-center mt-4">
            <button className="themeBtn">Afficher plus</button>
          </div>
        </div>
      </div>
      {/* DESKTOP END */}
    </>
  );
};

export default ProductList;
