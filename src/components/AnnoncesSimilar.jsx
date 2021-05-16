import React from "react";
import annonces1 from "../assets/annonces1.svg";
import annonces2 from "../assets/annonces2.svg";
import annonces3 from "../assets/annonces3.svg";
import annonces4 from "../assets/annonces4.svg";
import MobileAnnoncesCard from "./MobileAnnoncesCard";

const AnnoncesSimilar = () => {
	const data = [annonces1, annonces2, annonces3, annonces4];

	return (
		<div className="container-fluid px-3">
			<h1 className="font-weight-bold mb-3">Annonces Similaires</h1>
			<div className="row px-2">
				{data.map((prev, i) => {
					return (
						<div key={i} className="col-6 col-md-4 mb-5 px-2">
							<MobileAnnoncesCard prev={prev} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AnnoncesSimilar;
