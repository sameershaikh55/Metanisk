import React from "react";
import location from "../assets/location.svg";
import States from "./States";

const ProfileRight = () => {
	const data2 = [
		{ title: "Prenom", desc: "Ernest" },
		{ title: "Nom", desc: "Peguita" },
		{ title: "Numero de telephone", desc: "+224 666 66 66 66" },
		{ title: "E-mail", desc: "nom@makitiplus.com" },
	];
	const data3 = [
		"Français",
		"Kpelle",
		"Mano",
		"Soussou",
		"Kissi",
		"Toma",
		"Poular",
		"Malinke",
		"Autres",
	];
	return (
		<div>
			<States />

			{/* PROFILE (INFORMATION) START */}
			<div className="mt-5">
				<h1 className="font-weight-bold mb-3">Profile</h1>
				<div className="bg-white px-5 py-4 borderRounded">
					<div className="d-flex justify-content-between align-items-center">
						<h3 className="font-weight-bold">Informations Personnelles</h3>
						<button className="themeBtn py-2 px-5">Modifier</button>
					</div>
					<div className="container-fluid px-0 mt-3">
						<div className="row">
							{data2.map((prev, i) => {
								const { title, desc } = prev;
								return (
									<div key={i} className="col-6 mt-3">
										<h5 className="themeColor font-weight-bold"> {title} </h5>
										<input
											type="text"
											value={desc}
											className="w-100 border-left-0 border-right-0 border-top-0 h3 py-2 px-0"
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			{/* PROFILE (INFORMATION) END */}

			{/* LANGUAGES START */}
			<div className="mt-5">
				<div className="bg-white borderRounded px-5 py-4">
					<div className="d-flex justify-content-between align-items-center">
						<h3 className="font-weight-bold">Langues parlees</h3>
						<button className="themeBtn py-2 px-5">Modifier</button>
					</div>
					<div className="container-fluid px-0 mt-3">
						<div className="row languageCheckboxes">
							{data3.map((prev, i) => {
								return (
									<div key={i} className="col-4 mt-3 ">
										<label className="container">
											{prev}
											<input type="checkbox" />
											<span className="checkmark"></span>
										</label>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			{/* LANGUAGES END */}

			{/* EMPLACEMENT MAP START */}
			<div className="bg-white shadow borderRounded mt-5 p-3">
				<h2 className="d-flex align-items-center font-weight-bold themeColor">
					<img width="2%" src={location} alt="location" className="mr-2" />
					Emplacement
				</h2>
				<input
					type="text"
					placeholder="Entrer l’emplacement"
					className="w-50 border-left-0 border-right-0 border-top-0 h4 py-1 px-0 lightPlaceholderInp"
				/>
				<div>
					<iframe
						title="map"
						width="100%"
						height="260"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
						src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
					></iframe>
				</div>
			</div>
			{/* EMPLACEMENT MAP END */}
		</div>
	);
};

export default ProfileRight;
