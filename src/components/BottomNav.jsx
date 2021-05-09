import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { VscKey } from "react-icons/vsc";
import { IoConstructOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { GoPlus } from "react-icons/go";

const BottomNav = () => {
	return (
		<>
			<div className="bottomNav_container">
				<div className="main_container">
					<div className="main_div">
						<NavLink exact activeClassName="active" to="/">
							<div className="each_navigation">
								<AiOutlineHome className="NavIcon" />
								<h6>Home</h6>
							</div>
						</NavLink>
						<NavLink exact activeClassName="active" to="/property">
							<div className="each_navigation">
								<VscKey className="NavIcon" />
								<h6>Property</h6>
							</div>
						</NavLink>
						<NavLink exact activeClassName="active" to="/">
							<div className="each_navigation">
								<IoConstructOutline className="NavIcon" />
								<h6>Search</h6>
							</div>
						</NavLink>
						<NavLink exact activeClassName="active" to="/filter/buy">
							<div className="each_navigation">
								<BsSearch className="NavIcon" />
								<h6>Search</h6>
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
