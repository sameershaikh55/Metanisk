import React from "react";
import { FaSortAmountDown } from "react-icons/fa";
import annonces1 from "../assets/annonces1.svg";
import annonces2 from "../assets/annonces2.svg";
import annonces3 from "../assets/annonces3.svg";
import annonces4 from "../assets/annonces4.svg";
import MobileAnnoncesCard from "./MobileAnnoncesCard";

const SearchListBodyMobile = () => {
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
		<div className="container-fluid d-block d-lg-none">
			<div className="d-flex justify-content-between align-items-center my-4">
				<h3 className="font-weight-bold m-0">560 annonces trouvées</h3>
				<button className="themeBtn2 font-weight-bold px-4">
					Classer par <FaSortAmountDown />
				</button>
			</div>
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

export default SearchListBodyMobile;
