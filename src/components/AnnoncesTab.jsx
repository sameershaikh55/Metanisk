import React from "react";
import AnnoncesCard from "./AnnoncesCard";
import annonces1 from "../assets/annonces1.webp";
import annonces2 from "../assets/annonces2.webp";
import annonces3 from "../assets/annonces3.webp";
import annonces4 from "../assets/annonces4.svg";
import MobileAnnoncesCard from "./MobileAnnoncesCard";

const AnnoncesTab = ({ mobile, favorisD }) => {
	const data = [
		annonces1,
		annonces2,
		annonces3,
		annonces4,
		annonces1,
		annonces2,
	];
	return (
		<>
			<div className="container-fluid my-4">
				{!mobile && (
					<h1 className="font-weight-bold ml-n3">Total: 8 annonces</h1>
				)}
				{/* DESKTOP START */}
				{!mobile && (
					<div className="row">
						{data.map((prev, i) => {
							return (
								<div
									key={i}
									className={`${
										(i === 0 && "pl-0 pr-5") ||
										(i === 2 && "pl-5 pr-0") ||
										(i === 3 && "pl-0 pr-5") ||
										(i === 5 && "pl-5 pr-0")
									} col-4 my-4`}
								>
									<AnnoncesCard favorisD={favorisD} prev={prev} />
								</div>
							);
						})}
					</div>
				)}
				{/* DESKTOP END */}

				{/* MOBILE START */}
				{mobile && (
					<div className="row px-2">
						{data.map((prev, i) => {
							return (
								<div key={i} className="col-6 col-md-4 mb-5 px-2">
									<MobileAnnoncesCard prev={prev} />
								</div>
							);
						})}
					</div>
				)}
				{/* MOBILE END */}
			</div>
		</>
	);
};

export default AnnoncesTab;
