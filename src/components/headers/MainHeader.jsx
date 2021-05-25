import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import Logo from "../../assets/logo.svg";
import category from "../../assets/categoryIcon.svg";
import banner from "../../assets/homeBanner.webp";
import add from "../../assets/addIcon.svg";
import heart from "../../assets/heartIcon.svg";
import placeholder from "../../assets/placeholderPerson.svg";
import { AiOutlineUser, AiOutlineStar, AiOutlineShop } from "react-icons/ai";
import { BiMessageDetail, BiBell, BiSliderAlt } from "react-icons/bi";
import { MdViewDay } from "react-icons/md";
import { RiMicLine } from "react-icons/ri";
import { BsFillMicFill, BsSearch } from "react-icons/bs";
import CategoriesList from "../CategoriesList";
import Connector from "../Connector";
import RegisterModal from "../modals/RegisterModal";
import Sidebar from "./Sidebar";
import { logo } from "../../assets/base64";
import { motion } from "framer-motion";

const MainHeader = () => {
	const [user, setUser] = useState(false);
	const [categories, setCategories] = useState(false);
	const [openConnector, setOpenConnector] = useState(false);
	const [openRegister, setOpenRegister] = useState(false);
	let history = useHistory();
	// FOR NAVBAR SCROLLING EFFECT START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".NavbarContainer");
		header.classList.toggle("sticky", window.scrollY > 1);
	});
	// FOR NAVBAR SCROLLING EFFECT END

	const handleClickOpenConnector = () => {
		setOpenConnector(true);
	};
	const handleClickOpenRegister = () => {
		setOpenRegister(true);
	};

	const handleClickCategories = () => {
		setCategories(!categories);
		setUser(false);
	};
	const handleClickUser = () => {
		setUser(!user);
		setCategories(false);
	};

	return (
		<>
			{/* MODALS START */}
			<Connector
				openConnector={openConnector}
				setOpenConnector={setOpenConnector}
			/>
			<RegisterModal
				openRegister={openRegister}
				setOpenRegister={setOpenRegister}
			/>
			{/* MODALS END */}

			{/* UPPER HEADER START */}
			<div className="upperHeader_container d-none d-lg-block">
				<div className="inner_container">
					<div className="container-fluid">
						<div className="row justify-content-center">
							<div className="col-6 text-left h4 pt-2 text-white">Contact</div>
							<div className="col-6 text-right h4 pt-2 text-white">
								<span className="pointer" onClick={handleClickOpenConnector}>
									Se Connecter
								</span>
								&nbsp; / &nbsp;
								<span className="pointer" onClick={handleClickOpenRegister}>
									S’enregistrer
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* UPPER HEADER END */}

			{/* <!-- ======== NAVBAR START =========== --> */}
			<div className="NavbarContainer d-none d-lg-block">
				<div className="innerNavbar">
					<div className="container-fluid d-flex">
						<div className="column1 d-flex mr-2">
							<div
								className="logo_container mr-2 mr-lg-4"
								onClick={() => history.push("/")}
							>
								<img src={logo} alt="logo" />
							</div>
							<button
								onClick={handleClickCategories}
								className="headerCategory d-flex align-items-center justify-content-center border-0"
							>
								<img
									style={{ width: "18%" }}
									src={category}
									className="mr-2"
									alt="category"
								/>
								Catégories
							</button>
						</div>

						<div className="column2 d-flex justify-content-center mx-2 mx-lg-3">
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<BsSearch fontSize="20px" />
									</span>
								</div>
								<input
									type="text"
									className="form-control"
									placeholder="Chercher"
								/>
								<div className="input-group-append">
									<span className="input-group-text px-3">
										<BsFillMicFill fontSize="20px" color="white" />
									</span>
								</div>
							</div>
						</div>
						<div className="column3 d-flex justify-content-end">
							<button className="headerPoster d-flex align-items-center justify-content-center mr-1 mr-lg-3">
								<img
									style={{ width: "12%" }}
									src={add}
									className="mr-2"
									alt="category"
								/>
								Poster une annonce
							</button>
							<button className="headerHeart d-flex align-items-center justify-content-center mr-1 mr-lg-3">
								<img
									style={{ width: "20%" }}
									src={heart}
									className="mr-2"
									alt="category"
								/>
								Favoris
							</button>
							<div className="placeholderImg position-relative">
								<img
									onClick={handleClickUser}
									src={placeholder}
									alt="placeholder"
									style={{ cursor: "pointer" }}
								/>
								{user && (
									<motion.div
										animate={{ height: user ? 264 : 0 }}
										transition={{ duration: 0.1 }}
										className="userInfoDD"
									>
										<motion.ul
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.1 }}
											className="list-unstyled mb-0"
										>
											<NavLink activeClassName="active" to="/profile">
												<li className="d-flex align-items-center">
													<AiOutlineUser className="mr-2" /> Profile
												</li>
											</NavLink>
											<NavLink activeClassName="active" to="/message">
												<li className="d-flex align-items-center">
													<BiMessageDetail className="mr-2" />
													Messages
												</li>
											</NavLink>
											<NavLink activeClassName="active" to="/favoris">
												<li className="d-flex align-items-center">
													<AiOutlineStar className="mr-2" />
													Favoris
												</li>
											</NavLink>
											<NavLink activeClassName="active" to="/notifications">
												<li className="d-flex align-items-center">
													<BiBell className="mr-2" />
													Notifications
												</li>
											</NavLink>
											<NavLink activeClassName="active" to="/mesAnnonces">
												<li className="d-flex align-items-center">
													<MdViewDay className="mr-2" />
													Mes Annonces
												</li>
											</NavLink>
											<NavLink activeClassName="active" to="/maBoutique">
												<li className="d-flex align-items-center">
													<AiOutlineShop className="mr-2" />
													Ma Boutique
												</li>
											</NavLink>
											<li className="d-flex align-items-center">
												<BiSliderAlt className="mr-2" />
												Paramètres
											</li>
											<li className="deconnector d-flex justify-content-center align-items-center">
												Se deconnecter
											</li>
										</motion.ul>
									</motion.div>
								)}
							</div>
						</div>
					</div>
					{categories && <CategoriesList categories={categories} />}
				</div>
			</div>
			{/* <!-- ======== NAVBAR END =========== --> */}

			{/* MOBILE START */}
			<div className="mobileNavbar_container d-block d-lg-none">
				<div className="d-flex justify-content-between align-items-center">
					<div className="mr-2">
						<Sidebar />
					</div>
					<div className="logoContainer mx-2">
						<img src={logo} alt="logo" />
					</div>
					<div className="ml-2">
						<img src={placeholder} alt="person" />
					</div>
				</div>
			</div>

			<div className="searchField d-block d-lg-none">
				<div className="d-flex justify-content-center mx-lg-3">
					<div className="input-group">
						<div className="input-group-prepend">
							<span className="input-group-text">
								<BsSearch fontSize="20px" />
							</span>
						</div>
						<input
							type="text"
							className="form-control"
							placeholder="Chercher"
						/>
						<div className="input-group-append">
							<span className="input-group-text px-3">
								<RiMicLine fontSize="3rem" color="white" />
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="banner_container d-block d-lg-none">
				<img style={{ width: "100%" }} src={banner} alt="banner" />
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default MainHeader;
