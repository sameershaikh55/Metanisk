import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { CgHome } from "react-icons/cg";
import { ImShare2 } from "react-icons/im";
import music from "../assets/music.svg";
import searchProduct from "../assets/searchProduct.svg";

const BottomNav2 = ({ product }) => {
	return (
		<div>
			<div className="bottomNav_container2">
				{product && (
					<div className="searchProduct">
						<img className="productImg" src={searchProduct} alt="searchMap" />
						<div className="icons">
							<ImShare2
								color="#077BC3"
								fontSize="5rem"
								className="mr-3 icon1"
							/>
							<AiOutlineHeart
								color="#FF0000"
								fontSize="5rem"
								className="icon2"
							/>
						</div>
						<div className="textContainer px-4 text-white">
							<h1 className="font-weight-bold">999 000 000 FG</h1>
							<h2>Chaussure Nike a vendre</h2>
							<h4>
								La première Air Max lifestyle de Nike vous offre style et
								confort à travers la Nike Air Max 270. Ce modèle s'inspire des
								chaussures ...
							</h4>
						</div>
						<div className="soundIcon">
							<img src={music} alt="music" />
						</div>
					</div>
				)}
				<div className="main_container">
					<div className="main_div">
						<NavLink
							className="text-decoration-none"
							exact
							activeClassName="active"
							to="/"
						>
							<div className="each_navigation">
								<CgHome className="NavIcon" />
								Accueil
							</div>
						</NavLink>
						<NavLink
							className="text-decoration-none"
							exact
							activeClassName="active"
							to="/searchMap"
						>
							<div className="each_navigation">
								<IoLocationOutline className="NavIcon" />
								Carte
							</div>
						</NavLink>
						<div className="addBtn">
							<span>
								<GoPlus />
							</span>
						</div>
						<NavLink
							className="text-decoration-none"
							exact
							activeClassName="active"
							to="/favoris"
						>
							<div className="each_navigation">
								<AiOutlineStar className="NavIcon" />
								Favoris
							</div>
						</NavLink>
						<NavLink
							className="text-decoration-none"
							exact
							activeClassName="active"
							to="/profile"
						>
							<div className="each_navigation">
								<AiOutlineUser className="NavIcon" />
								Profile
							</div>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BottomNav2;
