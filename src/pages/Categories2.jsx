import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import category10 from "../assets/category10.svg";
import category11 from "../assets/category11.svg";
import category12 from "../assets/category12.svg";
import category13 from "../assets/category13.svg";
import mobileCategoryIcon from "../assets/mobileCategoryIcon.svg";

const Categories2 = () => {
	let history = useHistory();

	const data2 = [
		{
			img: mobileCategoryIcon,
			title: "Voir toutes les annonces de la catégories",
			desc: "10.6K Annonces",
		},
		{
			img: category10,
			title: "Smartphones, Tablettes, Objets Intelligents",
			desc: "7 586 Annonces",
		},
		{
			img: category11,
			title: "Ordinateurs",
			desc: "2 566 Annonces",
		},
		{
			img: category12,
			title: "Multimedia",
			desc: "1 200 Annonces",
		},
		{
			img: category13,
			title: "Jeux Vidéo",
			desc: "150 Annonces",
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
						Electroniques et Informatique
					</h2>
				</div>
			</div>

			<div className="container-fluid mt-5">
				<div className="row">
					{data2.map((prev, i) => {
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

export default Categories2;
