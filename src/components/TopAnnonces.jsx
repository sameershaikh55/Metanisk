import React from "react";
import annonces1 from "../assets/annonces1.svg";
import annonces2 from "../assets/annonces2.svg";
import annonces3 from "../assets/annonces3.svg";
import annonces4 from "../assets/annonces4.svg";
import AnnoncesCard from "./AnnoncesCard";
import MobileAnnoncesCard from "./MobileAnnoncesCard";

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
	const dataM = [annonces1, annonces2, annonces3, annonces4];

	return (
		<>
			{/* DESKTOP START */}
			<div className="container-fluid d-none d-lg-block">
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
			{/* DESKTOP END */}

			{/* MOBILE START */}
			<div className="container-fluid d-block d-lg-none">
				<h1 className="font-weight-bold mb-3">Top Annonces</h1>
				<div className="row">
					{dataM.map((prev, i) => {
						return (
							<div key={i} className="col-6 col-md-4 mb-5">
								<MobileAnnoncesCard prev={prev} />
							</div>
						);
					})}
				</div>
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default TopAnnonces;
