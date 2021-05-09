import React from "react";
import AnnoncesCard from "./AnnoncesCard";
import annonces1 from "../assets/annonces1.svg";
import annonces2 from "../assets/annonces2.svg";
import annonces3 from "../assets/annonces3.svg";
import annonces4 from "../assets/annonces4.svg";

const UnderProductList = () => {
	const data = [
		annonces1,
		annonces2,
		annonces3,
		annonces1,
		annonces2,
		annonces3,
		annonces4,
		annonces4,
	];
	return (
		<>
			{/* DESKTOP START */}
			<div className="d-none d-lg-block">
				<div className="row mt-5">
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

export default UnderProductList;
