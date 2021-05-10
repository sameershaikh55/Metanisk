import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import category1 from "../assets/category1.svg";
import category2 from "../assets/category2.svg";
import category3 from "../assets/category3.svg";
import category4 from "../assets/category4.svg";
import category5 from "../assets/category5.svg";
import category6 from "../assets/category6.svg";
import category7 from "../assets/category7.svg";
import category8 from "../assets/category8.svg";
import category9 from "../assets/category9.svg";
import category10 from "../assets/category10.svg";
import category11 from "../assets/category11.svg";
import category12 from "../assets/category12.svg";
import category13 from "../assets/category13.svg";
import categoryPlaceholder from "../assets/categoryPlaceholder.svg";

const CategoriesList = () => {
	const data = [
		{
			img: category1,
			title: "Electroniques et Informatique",
			desc: "10.6K Annonces",
		},
		{
			img: category2,
			title: "Transport",
			desc: "10.6K Annonces",
		},
		{
			img: category3,
			title: "Transport",
			desc: "10.6K Annonces",
		},
		{
			img: category4,
			title: "Immobiliers",
			desc: "10.6K Annonces",
		},
		{
			img: category5,
			title: "Vêtements",
			desc: "10.6K Annonces",
		},
		{
			img: category6,
			title: "Aliments",
			desc: "10.6K Annonces",
		},
		{
			img: category7,
			title: "Electromenagers",
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

	const data2 = [
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

	const data3 = [
		{
			img: categoryPlaceholder,
			title: "Téléphones Portables",
			desc: "5 400 Annonces",
		},
		{
			img: categoryPlaceholder,
			title: "Tablettes",
			desc: "1 056 Annonces",
		},
		{
			img: categoryPlaceholder,
			title: "Montres et Bracelets Intelligents",
			desc: "562 Annonces",
		},
		{
			img: categoryPlaceholder,
			title: "Pieces détachées de téléphones",
			desc: "145 Annonces",
		},
		{
			img: categoryPlaceholder,
			title: "Housses",
			desc: "278 Annonces",
		},
		{
			img: categoryPlaceholder,
			title: "Objets connectés",
			desc: "146 Annonces",
		},
		{
			img: categoryPlaceholder,
			title: "Accessoires",
			desc: "56 Annonces",
		},
	];

	return (
		<div className="categoriesList_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-4">
						<div className="row">
							{data.map((prev, i) => {
								return (
									<div key={i} className="col-12 mb-4">
										<div className="categoryCard d-flex justify-content-between align-items-center">
											<div className="d-flex align-items-center">
												<img src={prev.img} alt="category1" className="mr-3" />
												<h4 className="text-dark font-weight-bold">
													{prev.title}
												</h4>
											</div>
											<div className="d-flex justify-content-between align-items-center">
												<h4 className="w-75"> {prev.desc} </h4>
												<RiArrowRightSLine fontSize="2.5rem" color="#067AC2" />
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="col-4">
						<h2 className="mb-4 font-weight-bold">
							Electroniques et Informatique
						</h2>
						{data2.map((prev, i) => {
							return (
								<div key={i} className="col-12 px-0 mb-4">
									<div className="categoryCard d-flex justify-content-between align-items-center">
										<div className="d-flex align-items-center">
											<img src={prev.img} alt="category1" className="mr-3" />
											<h4 className="text-dark font-weight-bold">
												{prev.title}
											</h4>
										</div>
										<div className="d-flex justify-content-between align-items-center">
											<h4 className="w-75"> {prev.desc} </h4>
											<RiArrowRightSLine fontSize="2.5rem" color="#067AC2" />
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className="col-4">
						{data3.map((prev, i) => {
							return (
								<div key={i} className="col-12 px-0 mb-4">
									<div className="categoryCard d-flex justify-content-between align-items-center">
										<div className="d-flex align-items-center">
											<img src={prev.img} alt="category1" className="mr-3" />
											<h4 className="text-dark font-weight-bold">
												{prev.title}
											</h4>
										</div>
										<div className="d-flex justify-content-between align-items-center">
											<h4 className="w-75"> {prev.desc} </h4>
											<RiArrowRightSLine fontSize="2.5rem" color="#067AC2" />
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoriesList;
