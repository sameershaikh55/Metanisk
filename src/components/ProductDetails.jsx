import React from "react";
import map2 from "../assets/map2.svg";

const ProductDetails = () => {
	const data = [
		{ left: "Condition", right: "Nouveau" },
		{ left: "Pointure", right: "43" },
		{ left: "Couleur", right: "Noire" },
		{ left: "Marque", right: "Nike" },
		{ left: "Autres", right: "......" },
	];

	return (
		<div>
			{/* IMAGES SECTION START */}
			<div>
				<div className="mt-2 bg-white w-100" style={{ height: "450px" }}></div>
				<div className="mt-5 bg-white p-4 rounded">
					<h2 className="font-weight-bold">Description</h2>
					<h3>
						La première Air Max lifestyle de Nike vous offre style et confort à
						travers la Nike Air Max 270. Ce modèle s'inspire des chaussures Air
						Max emblématiques en intégrant les meilleures innovations de Nike,
						avec sa grande fenêtre et une nouvelle gamme de couleurs.
					</h3>
				</div>
				<div className="mt-5 bg-white p-4 rounded">
					<h2 className="font-weight-bold">Information Additionnelle</h2>
					<ul className="h4 infoList">
						{data.map((prev, i) => {
							const { left, right } = prev;
							return (
								<li
									key={i}
									className="d-flex justify-content-between align-items-center py-3 px-3"
								>
									<span> {left} </span>
									<span className="font-weight-bold"> {right} </span>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="bg-white mt-5 p-4 rounded">
					<h2 className="font-weight-bold">Emplacement</h2>
					<img className="w-100" src={map2} alt="map" />
				</div>
			</div>

			{/* IMAGES SECTION END */}
		</div>
	);
};

export default ProductDetails;
