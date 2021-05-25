import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import {
	category14,
	category2,
	category4,
	category5,
	category6,
	category7,
	category8,
	category9,
	category1,
} from "../assets/base64";

const Categories1 = () => {
	let history = useHistory();
	const data = [
		{
			img: category14,
			title: "Electroniques et Informatique",
			desc: "10.6K Annonces",
		},
		{
			img: category1,
			title: "Transport",
			desc: "10.6K Annonces",
		},
		{
			img: category2,
			title: "Immobiliers",
			desc: "10.6K Annonces",
		},
		{
			img: category4,
			title: "Vêtements",
			desc: "10.6K Annonces",
		},
		{
			img: category5,
			title: "Aliments",
			desc: "10.6K Annonces",
		},
		{
			img: category6,
			title: "Electromenagers",
			desc: "10.6K Annonces",
		},
		{
			img: category7,
			title: "Emplois",
			desc: "10.6K Annonces",
		},
		{
			img: category8,
			title: "Services",
			desc: "10.6K Annonces",
		},
		{
			img: category9,
			title: "Divers",
			desc: "10.6K Annonces",
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
					<h2 className="font-weight-bold text-center mt-3">Catégories</h2>
				</div>
			</div>

			<div className="container-fluid mt-5">
				<div className="row">
					{data.map((prev, i) => {
						return (
							<div key={i} className="col-12 mb-4">
								<div className="categoryCard shadow borderRounded d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center">
										<img src={prev.img} alt="category1" className="mr-3" />
										<h4 className="text-dark font-weight-bold h3 m-0">
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

export default Categories1;
