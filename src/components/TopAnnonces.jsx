import React from "react";
import annonces1 from "../assets/annonces1.svg";
import annonces2 from "../assets/annonces2.svg";
import annonces3 from "../assets/annonces3.svg";
import annonces4 from "../assets/annonces4.svg";
import heart from "../assets/heartIcon.svg";
import music from "../assets/music.svg";
import { FaPhoneAlt } from "react-icons/fa";
import AnnoncesCard from "./AnnoncesCard";

const TopAnnonces = () => {
	const data = [
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
		<div className="container-fluid">
			<h1 className="font-weight-bold mb-3">Top Annonces</h1>
			<div className="row">
				{data.map((prev, i) => {
					return (
						<div key={i} className="col-3 mb-4">
							<AnnoncesCard prev={prev} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TopAnnonces;
