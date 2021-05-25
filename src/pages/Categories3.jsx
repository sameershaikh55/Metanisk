import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import mobileCategoryIcon from "../assets/mobileCategoryIcon.svg";
import { placeHolderCategory } from "../assets/base64/index";

const Categories3 = () => {
	let history = useHistory();

	const data3 = [
		{
			img: mobileCategoryIcon,
			title: "Téléphones Portables",
			desc: "5 400 Annonces",
		},
		{
			img: placeHolderCategory,
			title: "Téléphones Portables",
			desc: "5 400 Annonces",
		},
		{
			img: placeHolderCategory,
			title: "Tablettes",
			desc: "1 056 Annonces",
		},
		{
			img: placeHolderCategory,
			title: "Montres et Bracelets Intelligents",
			desc: "562 Annonces",
		},
		{
			img: placeHolderCategory,
			title: "Pieces détachées de téléphones",
			desc: "145 Annonces",
		},
		{
			img: placeHolderCategory,
			title: "Housses",
			desc: "278 Annonces",
		},
		{
			img: placeHolderCategory,
			title: "Objets connectés",
			desc: "146 Annonces",
		},
		{
			img: placeHolderCategory,
			title: "Accessoires",
			desc: "56 Annonces",
		},
	];
	return (
		<div>
			{/* HEADER START */}
			<div className="position-relative shadow bg-white pl-2 pr-4 py-3">
				<RiArrowLeftSLine
					className="position-absolute"
					onClick={() => history.goBack()}
					fontSize="3.8rem"
					color="#067AC2"
				/>
				<div>
					<h2 className="font-weight-bold text-center mt-3">
						Smartphones, Tablettes, Objets Int...
					</h2>
				</div>
			</div>

			<div className="container-fluid mt-5">
				<div className="row">
					{data3.map((prev, i) => {
						return (
							<div key={i} className="col-12 mb-4">
								<div className="categoryCard d-flex justify-content-between align-items-center shadow borderRounded">
									<div className="d-flex align-items-center">
										<img
											src={prev.img}
											alt="category1"
											width={i === 0 && "25%"}
											className={`mr-3 ${i === 0 && "px-3"}`}
										/>
										<h4 className="text-dark font-weight-bold m-0">
											{prev.title}
										</h4>
									</div>
									<div className="d-flex justify-content-between align-items-center">
										<h4 className="w-75"> {prev.desc} </h4>
										<RiArrowRightSLine fontSize="3.4rem" color="#067AC2" />
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Categories3;
