import React from "react";
import AnnoncesCard from "./AnnoncesCard";
import annonces1 from "../assets/annonces1.svg";
import annonces2 from "../assets/annonces2.svg";
import annonces3 from "../assets/annonces3.svg";
import annonces4 from "../assets/annonces4.svg";

const AnnoncesTab = () => {
	const data = [
		annonces1,
		annonces2,
		annonces3,
		annonces4,
		annonces1,
		annonces2,
	];
	return (
		<div className="container-fluid my-4">
			<h1 className="font-weight-bold">Total: 8 annonces</h1>
			<div className="row">
				{data.map((prev, i) => {
					return (
						<div className="col-4 my-4">
							<AnnoncesCard key={i} prev={prev} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AnnoncesTab;
