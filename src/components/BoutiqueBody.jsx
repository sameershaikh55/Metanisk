import React from "react";
import userBg from "../assets/userBg.svg";
import addIcon from "../assets/addIcon.svg";
import placeholderPerson from "../assets/placeholderPerson.svg";
import { NavLink } from "react-router-dom";
import States from "./States";

const BoutiqueBody = () => {
	const data2 = [
		{ title: "Nom de la boutique", desc: "Ernest" },
		{ title: "Secteur d’activité", desc: "Peguita" },
		{ title: "Numero de telephone", desc: "+224 666 66 66 66" },
		{ title: "E-mail", desc: "nom@makitiplus.com" },
	];
	return (
		<div className="maBoutiqueContainer">
			<h1 className="font-weight-bold mb-4">Ma Boutique</h1>
			{/* PROFILE TITLE START */}
			<div className="maBoutiqueUser">
				<div className="userBg">
					<img className="bgImg" src={userBg} alt="userImage" />
					<button className="themeBtn">Modifier les informations</button>
					<div className="userImage">
						<img src={placeholderPerson} alt="placeholder" />
					</div>
				</div>
				<div className="d-flex justify-content-end">
					<div
						style={{ width: "640px" }}
						className="d-flex justify-content-between align-items-center mt-3"
					>
						<h1 className="d-flex align-items-center font-weight-bold themeColor">
							MY MAKITI SHOP
						</h1>
						<h4 className="d-flex align-items-center">
							<svg
								className="mr-2"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7.9995 12L4.9545 7.7C4.45609 7.11153 4.13512 6.39358 4.02897 5.62975C3.92283 4.86591 4.03588 4.08764 4.35495 3.38558C4.67402 2.68351 5.18599 2.08654 5.83123 1.6642C6.47646 1.24185 7.22841 1.01151 7.9995 1C9.06837 1.01056 10.0895 1.4443 10.8392 2.20621C11.5889 2.96812 12.0062 3.9961 11.9995 5.065C11.9999 5.99747 11.6824 6.90222 11.0995 7.63L7.9995 12ZM7.9995 2C7.19542 2.00923 6.42788 2.33719 5.8654 2.91185C5.30293 3.48652 4.9915 4.26091 4.9995 5.065C5.00285 5.79891 5.26689 6.50775 5.7445 7.065L7.9995 10.26L10.3145 7C10.7545 6.45072 10.9959 5.7688 10.9995 5.065C11.0075 4.26091 10.6961 3.48652 10.1336 2.91185C9.57111 2.33719 8.80357 2.00923 7.9995 2Z"
									fill="#353535"
								/>
								<path
									d="M8 5.5C8.55228 5.5 9 5.05228 9 4.5C9 3.94772 8.55228 3.5 8 3.5C7.44772 3.5 7 3.94772 7 4.5C7 5.05228 7.44772 5.5 8 5.5Z"
									fill="#353535"
								/>
								<path
									d="M14 6H13V7H14V14H2V7H3V6H2C1.73478 6 1.48043 6.10536 1.29289 6.29289C1.10536 6.48043 1 6.73478 1 7V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V7C15 6.73478 14.8946 6.48043 14.7071 6.29289C14.5196 6.10536 14.2652 6 14 6Z"
									fill="#353535"
								/>
							</svg>
							Conakry, Bambetto Marché
						</h4>
					</div>
				</div>
			</div>
			{/* PROFILE TITLE END */}

			{/* NAVIGATION START */}
			<div className="navContainer borderRounded d-flex justify-content-between align-items-center mt-4 bg-white">
				<div className="innerNav">
					<ul className="list-unstyled d-flex justify-content-between m-0">
						<NavLink
							activeClassName="active"
							to="/maBoutique"
							className="text-decoration-none"
						>
							<li className="mt-3 px-5 h4 m-0">Information</li>
						</NavLink>
						<NavLink
							activeClassName="active"
							to="/non"
							className="text-decoration-none"
						>
							<li className="mt-3 px-5 h4 m-0">Mes Articles</li>
						</NavLink>
					</ul>
				</div>
				<div>
					<button className="themeBtn d-flex align-items-center justify-content-center h4 m-0 px-4">
						<img src={addIcon} alt="addIcon" width="15%" className="mr-2" />
						Poster un article
					</button>
				</div>
			</div>
			{/* NAVIGATION END */}

			{/* STATES START */}
			<div className="mt-4">
				<h2 className="font-weight-bold mb-3">Statistiques</h2>
				<States />
			</div>
			{/* STATES END */}

			{/* RECORDING START */}
			<div className="mt-5">
				<h2 className="font-weight-bold mb-3">
					Signature vocale de la boutique
				</h2>
				<div className="bg-white borderRounded h1 p-4">Recording</div>
			</div>
			{/* RECORDING END */}

			{/* PROFILE (INFORMATION) START */}
			<div className="mt-5">
				<div className="bg-white px-4 py-4 borderRounded">
					<div className="d-flex justify-content-between align-items-center">
						<h3 className="font-weight-bold">Informations de la boutique</h3>
						<button className="themeBtn py-2 px-5">Modifier</button>
					</div>
					<div className="container-fluid px-0 mt-3">
						<div className="row">
							{data2.map((prev, i) => {
								const { title, desc } = prev;
								return (
									<div key={i} className="col-6 mt-3">
										<h5 className="themeColor font-weight-bold"> {title} </h5>
										<h4> {desc} </h4>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			{/* PROFILE (INFORMATION) END */}
		</div>
	);
};

export default BoutiqueBody;
