import React from "react";
import MainHeader from "../components/headers/MainHeader";
import Footer from "../components/Footer";
import searchBanner from "../assets/searchBanner.webp";
import ProductDetails from "../components/ProductDetails";
import AnnoncesRecentes from "../components/AnnoncesRecentes";
import UserDetails from "../components/UserDetails";
import filledHeart from "../assets/heartFilled.svg";
import { NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import AdDetailsMobile from "../components/AdDetailsMobile";

const AdDetails = () => {
	return (
		<>
			{/* DESKTOP START */}
			<div className="home_container d-none d-lg-block">
				<MainHeader />
				<div className="searchBanner_container">
					<img src={searchBanner} alt="banner" />
				</div>

				{/* BODY START */}
				<div className="mainBody d-none d-lg-block">
					<div className="container-fluid">
						<div className="row mt-5">
							<div className="col-7">
								{/* BREADCRUMB START */}
								<div className="d-flex align-items-center">
									<div>
										<NavLink className="h4 mr-2 text-decoration-none" to="/">
											Acceuil
										</NavLink>
									</div>
									<RiArrowRightSLine fontSize="1.7rem" />
									<div>
										<NavLink className="h4 mr-2 text-decoration-none" to="/">
											Categorie
										</NavLink>
									</div>
									<RiArrowRightSLine fontSize="1.7rem" />
									<div>
										<NavLink className="h4 mr-2 text-decoration-none" to="/">
											Sous-Categorie
										</NavLink>
									</div>
									<RiArrowRightSLine fontSize="1.7rem" />
									<div>
										<NavLink className="h4 mr-2 text-decoration-none" to="/">
											Type d’article
										</NavLink>
									</div>
								</div>
								{/* BREADCRUMB END */}

								<h1>Chaussure Nike à vendre</h1>
								<div className="d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center">
										<h4 className="themeColor">Aujourd’hui - 12:00</h4>
										<h4 className="ml-5 d-flex align-items-center">
											Ajouter aux favoris
											<img src={filledHeart} alt="heart" className="ml-1" />
										</h4>
									</div>
									<h4 className="font-weight-bold">Conakry</h4>
								</div>
							</div>
							<div className="col-3 text-center align-self-center">
								<h1 className="font-weight-bolder">1 999 000 000 FG</h1>
							</div>

							<div className="col-2"></div>

							<div className="col-7">
								<ProductDetails />
							</div>

							<div className="col-3">
								<UserDetails />
							</div>

							<div className="col-2">
								<div className="bg-white w-100 h-100"></div>
							</div>

							<div className="col-9 mt-5">
								<AnnoncesRecentes />
							</div>
							<div className="col-3 mt-5 pt-5 pb-4">
								<div className="bg-white w-100 h-100"></div>
							</div>
						</div>
					</div>
				</div>
				{/* BODY END */}
				<Footer />
			</div>
			{/* DESKTOP END */}

			{/* MOBILE START */}
			<div className="home_container d-block d-lg-none">
				<AdDetailsMobile />
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default AdDetails;
