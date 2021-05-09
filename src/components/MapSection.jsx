import React from "react";
import map from "../assets/map.svg";
import cross from "../assets/cross.svg";
import location from "../assets/location2.svg";
import sort from "../assets/sort.svg";

const MapSection = () => {
	return (
		<div className="d-none d-lg-block">
			<div className="searchTags d-flex mb-3">
				<div className="position-relative mr-4">
					Prix
					<img src={cross} alt="cross" />
				</div>
				<div className="position-relative mr-4">
					Sous-Categorie
					<img src={cross} alt="cross" />
				</div>
				<div className="position-relative mr-4">
					Condition
					<img src={cross} alt="cross" />
				</div>
				<div className="position-relative mr-4">
					Classement
					<img src={cross} alt="cross" />
				</div>
				<div className="position-relative mr-4">
					Vendeur
					<img src={cross} alt="cross" />
				</div>
			</div>
			<div className="d-flex justify-content-between align-items-center">
				<div className="d-flex align-items-center">
					<h1 className="font-weight-bold mb-3 mr-4">Chaussure Nike</h1>
					<h3>1032 annonces trouvées</h3>
				</div>
				<div className="d-flex">
					<button className="themeBtn d-flex justify-content-center align-items-center py-2 px-4 mr-4">
						Mode Carte
						<img
							style={{ width: "20%" }}
							src={location}
							alt="location"
							className="ml-3"
						/>
					</button>
					<button className="themeBtn2 d-flex justify-content-center align-items-center py-2 px-4">
						Classer par
						<img
							style={{ width: "20%" }}
							src={sort}
							alt="location"
							className="ml-3"
						/>
					</button>
				</div>
			</div>
			<div className="mt-4">
				<img className="w-100" src={map} alt="map" />
			</div>
		</div>
	);
};

export default MapSection;
