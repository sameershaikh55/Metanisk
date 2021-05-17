import React from "react";
import userBg from "../assets/userBg.svg";
import addIcon from "../assets/addIcon.svg";
import placeholderPerson from "../assets/placeholderPerson.svg";
import { NavLink } from "react-router-dom";
import States from "./States";
import location from "../assets/location.svg";

const BoutiqueBody = () => {
	const data2 = [
		{ title: "Nom de la boutique", desc: "Ernest" },
		{ title: "Secteur d’activité", desc: "" },
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
										<h5 className="themeColor font-weight-bold">
											{i === 1 && (
												<svg
													width="25"
													height="25"
													viewBox="0 0 25 25"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M4.0625 6.875C4.4769 6.875 4.87433 6.71038 5.16735 6.41735C5.46038 6.12433 5.625 5.7269 5.625 5.3125C5.625 4.8981 5.46038 4.50067 5.16735 4.20765C4.87433 3.91462 4.4769 3.75 4.0625 3.75C3.6481 3.75 3.25067 3.91462 2.95765 4.20765C2.66462 4.50067 2.5 4.8981 2.5 5.3125C2.5 5.7269 2.66462 6.12433 2.95765 6.41735C3.25067 6.71038 3.6481 6.875 4.0625 6.875Z"
														fill="#1B8ACC"
													/>
													<path
														d="M8.75 5.3125C8.75 5.06386 8.84877 4.8254 9.02459 4.64959C9.2004 4.47377 9.43886 4.375 9.6875 4.375H21.5625C21.8111 4.375 22.0496 4.47377 22.2254 4.64959C22.4012 4.8254 22.5 5.06386 22.5 5.3125C22.5 5.56114 22.4012 5.7996 22.2254 5.97541C22.0496 6.15123 21.8111 6.25 21.5625 6.25H9.6875C9.43886 6.25 9.2004 6.15123 9.02459 5.97541C8.84877 5.7996 8.75 5.56114 8.75 5.3125Z"
														fill="#1B8ACC"
													/>
													<path
														d="M8.75 10.9375C8.75 10.6889 8.84877 10.4504 9.02459 10.2746C9.2004 10.0988 9.43886 10 9.6875 10H21.5625C21.8111 10 22.0496 10.0988 22.2254 10.2746C22.4012 10.4504 22.5 10.6889 22.5 10.9375C22.5 11.1861 22.4012 11.4246 22.2254 11.6004C22.0496 11.7762 21.8111 11.875 21.5625 11.875H9.6875C9.43886 11.875 9.2004 11.7762 9.02459 11.6004C8.84877 11.4246 8.75 11.1861 8.75 10.9375Z"
														fill="#1B8ACC"
													/>
													<path
														d="M9.6875 15.625C9.43886 15.625 9.2004 15.7238 9.02459 15.8996C8.84877 16.0754 8.75 16.3139 8.75 16.5625C8.75 16.8111 8.84877 17.0496 9.02459 17.2254C9.2004 17.4012 9.43886 17.5 9.6875 17.5H11.2775C11.3354 16.8573 11.4839 16.226 11.7188 15.625H9.6875Z"
														fill="#1B8ACC"
													/>
													<path
														d="M4.0625 12.5C4.4769 12.5 4.87433 12.3354 5.16735 12.0424C5.46038 11.7493 5.625 11.3519 5.625 10.9375C5.625 10.5231 5.46038 10.1257 5.16735 9.83265C4.87433 9.53962 4.4769 9.375 4.0625 9.375C3.6481 9.375 3.25067 9.53962 2.95765 9.83265C2.66462 10.1257 2.5 10.5231 2.5 10.9375C2.5 11.3519 2.66462 11.7493 2.95765 12.0424C3.25067 12.3354 3.6481 12.5 4.0625 12.5Z"
														fill="#1B8ACC"
													/>
													<path
														d="M4.0625 18.125C4.4769 18.125 4.87433 17.9604 5.16735 17.6674C5.46038 17.3743 5.625 16.9769 5.625 16.5625C5.625 16.1481 5.46038 15.7507 5.16735 15.4576C4.87433 15.1646 4.4769 15 4.0625 15C3.6481 15 3.25067 15.1646 2.95765 15.4576C2.66462 15.7507 2.5 16.1481 2.5 16.5625C2.5 16.9769 2.66462 17.3743 2.95765 17.6674C3.25067 17.9604 3.6481 18.125 4.0625 18.125Z"
														fill="#1B8ACC"
													/>
													<path
														d="M23.75 18.125C23.75 19.6168 23.1574 21.0476 22.1025 22.1025C21.0476 23.1574 19.6168 23.75 18.125 23.75C16.6332 23.75 15.2024 23.1574 14.1475 22.1025C13.0926 21.0476 12.5 19.6168 12.5 18.125C12.5 16.6332 13.0926 15.2024 14.1475 14.1475C15.2024 13.0926 16.6332 12.5 18.125 12.5C19.6168 12.5 21.0476 13.0926 22.1025 14.1475C23.1574 15.2024 23.75 16.6332 23.75 18.125ZM18.75 15.625C18.75 15.4592 18.6842 15.3003 18.5669 15.1831C18.4497 15.0658 18.2908 15 18.125 15C17.9592 15 17.8003 15.0658 17.6831 15.1831C17.5658 15.3003 17.5 15.4592 17.5 15.625V17.5H15.625C15.4592 17.5 15.3003 17.5658 15.1831 17.6831C15.0658 17.8003 15 17.9592 15 18.125C15 18.2908 15.0658 18.4497 15.1831 18.5669C15.3003 18.6842 15.4592 18.75 15.625 18.75H17.5V20.625C17.5 20.7908 17.5658 20.9497 17.6831 21.0669C17.8003 21.1842 17.9592 21.25 18.125 21.25C18.2908 21.25 18.4497 21.1842 18.5669 21.0669C18.6842 20.9497 18.75 20.7908 18.75 20.625V18.75H20.625C20.7908 18.75 20.9497 18.6842 21.0669 18.5669C21.1842 18.4497 21.25 18.2908 21.25 18.125C21.25 17.9592 21.1842 17.8003 21.0669 17.6831C20.9497 17.5658 20.7908 17.5 20.625 17.5H18.75V15.625Z"
														fill="#1B8ACC"
													/>
												</svg>
											)}{" "}
											{title}
										</h5>
										<h4>
											{i === 1 && (
												<>
													<div className="infoSelectBox position-relative">
														<select className="font-weight-bold pb-1">
															<option value="Electronique">Electronique</option>
															<option value="Electronique">Electronique</option>
															<option value="Electronique">Electronique</option>
															<option value="Electronique">Electronique</option>
														</select>{" "}
														<svg
															className="selectIcon"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fill-rule="evenodd"
																clip-rule="evenodd"
																d="M5 8L12 16L19 8H5Z"
																fill="#22A1DC"
															/>
														</svg>
													</div>
												</>
											)}{" "}
											{desc}{" "}
										</h4>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			{/* PROFILE (INFORMATION) END */}

			{/* EMPLACEMENT MAP START */}
			<div className="bg-white mt-5 p-3">
				<h2 className="d-flex align-items-center font-weight-bold themeColor">
					<img width="2%" src={location} alt="location" className="mr-2" />
					Emplacement
				</h2>
				<h4 className="text-secondary">Entrer l’emplacement</h4>
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

			<div className="mt-5">
				<h3 className="font-weight-bold">Top Avis et Commentaires</h3>
				{[1, 1].map((prev, i) => {
					return (
						<div
							key={i}
							className="topAvisContainer mt-4 d-flex justify-content-between"
						>
							<div className="d-flex align-items-center">
								<img src={placeholderPerson} alt="person" />
								<h5 className="ml-4 mb-0 w-75 font-weight-bold">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</h5>
							</div>
							<h6 className="m-0 themeColor pr-2 pt-2">12:00</h6>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BoutiqueBody;
