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
				<div style={{ width: "100%" }}>
					<iframe
						width="100%"
						height="560"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default MapSection;
