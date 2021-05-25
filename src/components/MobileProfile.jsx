import React from "react";
import { FaCamera } from "react-icons/fa";
import userBg from "../assets/userBg.webp";
import placeholderPerson from "../assets/placeholderPerson.webp";
import { GrMap } from "react-icons/gr";
import state1 from "../assets/state1.svg";
import state2 from "../assets/state2.svg";
import state3 from "../assets/state3.svg";
import state4 from "../assets/state4.svg";
import location from "../assets/location.svg";
import { useHistory } from "react-router-dom";

const MobileProfile = () => {
	let history = useHistory();

	const states = [
		{
			img: state1,
			num: 50,
			desc: "Articles Publiés",
			bg: "linear-gradient(90deg, #4DBCEF 0%, #1B8ACC 98.04%), #FFFFFF",
		},
		{
			img: state2,
			num: 100,
			desc: "Abonnés",
			bg: " linear-gradient(270deg, #E66F01 0%, #FF9501 100%), #C4C4C4",
		},
		{
			img: state3,
			num: 50,
			desc: "Vues",
			bg: "linear-gradient(270deg, #4BC0CF 6.67%, #56E0E0 100%), #C4C4C4",
		},
		{
			img: state4,
			num: 150,
			desc: "Commentaires",
			bg: "linear-gradient(90deg, #FFD966 0%, #E9AF00 100%), #C4C4C4",
		},
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
		<div className="mobilProfilContainer">
			{/* PROFILE TITLE START */}
			<div className="userCard bg-white">
				<div className="userBg">
					<img width="100%" src={userBg} alt="userImage" />
					<span className="cameraDiv">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.75 5H16.1875C15.875 3.5625 14.625 2.5 13.125 2.5C11.625 2.5 10.375 3.5625 10.0625 5H1.25V6.25H10.0625C10.375 7.6875 11.625 8.75 13.125 8.75C14.625 8.75 15.875 7.6875 16.1875 6.25H18.75V5ZM13.125 7.5C12.0625 7.5 11.25 6.6875 11.25 5.625C11.25 4.5625 12.0625 3.75 13.125 3.75C14.1875 3.75 15 4.5625 15 5.625C15 6.6875 14.1875 7.5 13.125 7.5Z"
								fill="#1B8ACC"
							/>
							<path
								d="M1.25 15H3.8125C4.125 16.4375 5.375 17.5 6.875 17.5C8.375 17.5 9.625 16.4375 9.9375 15H18.75V13.75H9.9375C9.625 12.3125 8.375 11.25 6.875 11.25C5.375 11.25 4.125 12.3125 3.8125 13.75H1.25V15ZM6.875 12.5C7.9375 12.5 8.75 13.3125 8.75 14.375C8.75 15.4375 7.9375 16.25 6.875 16.25C5.8125 16.25 5 15.4375 5 14.375C5 13.3125 5.8125 12.5 6.875 12.5Z"
								fill="#1B8ACC"
							/>
						</svg>
					</span>
					<span className="cameraDiv1">
						<FaCamera />
					</span>
					<div className="userImage">
						<img src={placeholderPerson} alt="placeholder" />
						<span className="cameraDiv2">
							<FaCamera />
						</span>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div className="py-2 pl-5 ml-5">
						<h1 className="themeColor font-weight-bold">Ernest Peguita</h1>
						<h4 className="d-flex align-items-center px-2">
							<GrMap className="mr-2" /> Conakry, Bambetto Marché
						</h4>
					</div>
				</div>
			</div>
			{/* PROFILE TITLE END */}

			{/* STATES START */}
			<div className="mt-4">
				<div className="d-flex justify-content-between px-4">
					<h1 className="font-weight-bold">Statistiques</h1>
					<h4>Voir tout</h4>
				</div>
				<div className="stateMobileContainer">
					<div className="d-flex mr-5">
						{states.map((prev, i) => {
							const { img, num, desc, bg } = prev;
							return (
								<div
									key={i}
									style={{ background: bg }}
									className="statesCardMobile mx-3 d-flex flex-column justify-content-around text-white"
								>
									<img width="28%" src={img} alt="state" />
									<div className="textContainer">
										<h1 className="h1 font-weight-bolder text-center m-0">
											{num}
										</h1>
										<h6 className="h5 text-center">{desc}</h6>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{/* STATES END */}

			{/* INFORMATION START */}
			<div className="mt-5 mx-3 bg-white shadow borderRounded border-gray py-4 px-4">
				<div className="d-flex justify-content-between align-items-center">
					<h2 className="font-weight-bold">Informations Personnelles</h2>
					<button className="themeBtn px-4">Modifier</button>
				</div>
				<div className="mt-3">
					<h4 className="themeColor font-weight-bold">Prenom</h4>
					<input
						type="text"
						value="Ernest"
						className="w-100 border-left-0 border-right-0 border-top-0 h3 py-2 px-0"
					/>
				</div>
				<div className="mt-4">
					<h4 className="themeColor font-weight-bold">Nom de famille</h4>
					<input
						type="text"
						value="Peguita"
						className="w-100 border-left-0 border-right-0 border-top-0 h3 py-2 px-0"
					/>
				</div>
				<div className="mt-4">
					<h4 className="themeColor font-weight-bold">E-mail</h4>
					<input
						type="text"
						value="info@makitiplus.com"
						className="w-100 border-left-0 border-right-0 border-top-0 h3 py-2 px-0"
					/>
				</div>
				<div className="mt-4">
					<h4 className="themeColor font-weight-bold">Phone Number</h4>
					<input
						type="text"
						value="+224 666 66 66 66"
						className="w-100 border-left-0 border-right-0 border-top-0 h3 py-2 px-0"
					/>
				</div>
			</div>
			{/* INFORMATION END */}

			{/* INFORMATION START */}
			<div className="mt-5 mx-3 bg-white shadow borderRounded border-gray py-4 px-4">
				<div className="d-flex justify-content-between align-items-center">
					<h2 className="font-weight-bold">Mot de passe</h2>
					<button className="themeBtn px-4">Modifier</button>
				</div>
				<div className="mt-3">
					<h4 className="themeColor mb-5 font-weight-bold">
						Actuel mot de passe
					</h4>
				</div>
				<hr />
				<div className="mt-4">
					<h4 className="themeColor mb-5 font-weight-bold">
						Nouveau mot de passe
					</h4>
				</div>
				<hr />
				<div className="mt-4">
					<h4 className="themeColor mb-5 font-weight-bold">
						Reprendre le nouveau mot de passe
					</h4>
				</div>
				<hr />
			</div>
			{/* INFORMATION END */}

			{/* EMPLACEMENT MAP START */}
			<div className="mt-5 mx-3 bg-white shadow borderRounded border-gray py-4 px-4">
				<h2 className="d-flex align-items-center font-weight-bold themeColor">
					<img width="4%" src={location} alt="location" className="mr-2" />
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

			{/* LANGUAGES START */}
			<div className="mt-5 mx-3 bg-white shadow borderRounded border-gray py-4 px-4">
				<h2 className="font-weight-bold">Langues parlees</h2>
				<div className="container-fluid px-0 mt-3">
					<div className="row languageCheckboxes">
						{data3.map((prev, i) => {
							return (
								<div key={i} className="col-6 mt-3 ">
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
			{/* LANGUAGES END */}

			<div className="text-center mt-5">
				<button
					onClick={() => history.goBack()}
					className="themeBtn4 h3 m-0 py-3"
				>
					<svg
						className="mr-2"
						width="24"
						height="24"
						viewBox="0 0 26 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.875 24.375H14.625C15.0558 24.3746 15.4689 24.2032 15.7736 23.8986C16.0782 23.5939 16.2496 23.1808 16.25 22.75V20.3125H14.625V22.75H4.875V3.25H14.625V5.6875H16.25V3.25C16.2496 2.81916 16.0782 2.40608 15.7736 2.10143C15.4689 1.79677 15.0558 1.62543 14.625 1.625H4.875C4.44416 1.62543 4.03108 1.79677 3.72643 2.10143C3.42177 2.40608 3.25043 2.81916 3.25 3.25V22.75C3.25043 23.1808 3.42177 23.5939 3.72643 23.8986C4.03108 24.2032 4.44416 24.3746 4.875 24.375Z"
							fill="white"
						/>
						<path
							d="M18.3511 16.7261L21.2648 13.8125H9.75V12.1875H21.2648L18.3511 9.27387L19.5 8.125L24.375 13L19.5 17.875L18.3511 16.7261Z"
							fill="white"
						/>
					</svg>
					Se deconnecter
				</button>
			</div>
		</div>
	);
};

export default MobileProfile;
