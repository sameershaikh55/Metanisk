import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../assets/logo.svg";
import category from "../assets/categoryIcon.svg";
import add from "../assets/addIcon.svg";
import heart from "../assets/heartIcon.svg";
import banner from "../assets/homeBanner.svg";
import hamburger from "../assets/hamburger.svg";
import placeholder from "../assets/placeholderPerson.svg";
import { AiOutlineUser, AiOutlineStar, AiOutlineShop } from "react-icons/ai";
import { BiMessageDetail, BiBell, BiSliderAlt } from "react-icons/bi";
import { MdViewDay } from "react-icons/md";
import { BsFillMicFill, BsSearch } from "react-icons/bs";
import CategoriesList from "./CategoriesList";

const MainHeader = () => {
	const [user, setUser] = useState(false);
	const [categories, setCategories] = useState(false);
	let history = useHistory();
	// FOR NAVBAR SCROLLING EFFECT START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".NavbarContainer");
		header.classList.toggle("sticky", window.scrollY > 1);
	});
	// FOR NAVBAR SCROLLING EFFECT END

	return (
		<>
			{/* UPPER HEADER START */}
			<div className="upperHeader_container d-none d-lg-block">
				<div className="inner_container">
					<div className="container-fluid">
						<div className="row justify-content-center">
							<div className="col-6 text-left h4 pt-2 text-white">Contact</div>
							<div className="col-6 text-right h4 pt-2 text-white">
								Se Connecter / S’enregistrer
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
								<img src={Logo} alt="logo" />
							</div>
							<button
								onClick={() => setCategories(!categories)}
								className="headerCategory d-flex align-items-center justify-content-center"
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
									aria-label="Amount (to the nearest dollar)"
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
									onClick={() => setUser(!user)}
									src={placeholder}
									alt="placeholder"
									style={{ cursor: "pointer" }}
								/>
								{user && (
									<div className="userInfoDD">
										<ul className="list-unstyled mb-0">
											<li
												onClick={() => history.push("/menuprofile")}
												className="d-flex align-items-center"
											>
												<AiOutlineUser className="mr-2" /> Profile
											</li>
											<li className="d-flex align-items-center">
												<BiMessageDetail className="mr-2" />
												Messages
											</li>
											<li className="d-flex align-items-center">
												<AiOutlineStar className="mr-2" />
												Favoris
											</li>
											<li className="d-flex align-items-center">
												<BiBell className="mr-2" />
												Notifications
											</li>
											<li className="d-flex align-items-center">
												<MdViewDay className="mr-2" />
												Mes Annonces
											</li>
											<li className="d-flex align-items-center">
												<AiOutlineShop className="mr-2" />
												Ma Boutique
											</li>
											<li className="d-flex align-items-center">
												<BiSliderAlt className="mr-2" />
												Paramètres
											</li>
											<li className="d-flex justify-content-center align-items-center">
												Se deconnecter
											</li>
										</ul>
									</div>
								)}
							</div>
						</div>
					</div>
					{categories && <CategoriesList />}
				</div>
			</div>
			{/* <!-- ======== NAVBAR END =========== --> */}

			{/* MOBILE START */}
		</>
	);
};

export default MainHeader;
