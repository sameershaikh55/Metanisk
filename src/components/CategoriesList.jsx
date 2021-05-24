import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
// import category1 from "../assets/category1.webp";
// import category2 from "../assets/category2.webp";
// import category3 from "../assets/category3.webp";
// import category4 from "../assets/category4.webp";
// import category5 from "../assets/category5.webp";
// import category6 from "../assets/category6.webp";
// import category7 from "../assets/category7.webp";
// import category8 from "../assets/category8.webp";
// import category9 from "../assets/category9.webp";
// import category10 from "../assets/category10.webp";
// import category11 from "../assets/category11.webp";
// import category12 from "../assets/category12.webp";
// import category13 from "../assets/category13.webp";
import {
	category14,
	category2,
	category4,
	category5,
	category6,
	category7,
	category8,
	category9,
	category10,
	category11,
	category12,
	category13,
	category1,
	placeHolderCategory,
} from "../assets/base64/index";
// import categoryPlaceholder from "../assets/categoryPlaceholder.svg";
import { motion } from "framer-motion";

const CategoriesList = ({ categories }) => {
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
		<motion.div
			animate={{ height: categories ? 710 : 0 }}
			transition={{ duration: 0.1 }}
			className="categoriesList_container"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
			>
				<div className="container-fluid">
					<div className="row">
						<div className="col-4">
							<div className="row">
								{data.map((prev, i) => {
									return (
										<div key={i} className="col-12 mb-4">
											<div className="categoryCard d-flex justify-content-between align-items-center">
												<div className="d-flex align-items-center">
													<img
														src={prev.img}
														alt="category1"
														className="mr-3"
													/>
													<h4 className="text-dark font-weight-bold">
														{prev.title}
													</h4>
												</div>
												<div className="d-flex justify-content-between align-items-center">
													<h4 className="w-75"> {prev.desc} </h4>
													<RiArrowRightSLine
														fontSize="2.5rem"
														color="#067AC2"
													/>
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
							<h2 className="mb-4 font-weight-bold">
								Smartphone, Tablettes, Objets...
							</h2>
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
			</motion.div>
		</motion.div>
	);
};

export default CategoriesList;
