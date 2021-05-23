import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { CgHome } from "react-icons/cg";

const BottomNav = () => {
	return (
		<>
			<div className="bottomNav_container">
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
					<div className="addBtn">
						<span>
							<GoPlus />
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default BottomNav;
