import React from "react";
import { FaCamera } from "react-icons/fa";
import userBg from "../assets/userBg.webp";
import placeholderPerson from "../assets/placeholderPerson.webp";
import badge from "../assets/badge.svg";
import filledStar from "../assets/filledStar.svg";
import { AiOutlineShop, AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { BiBell, BiMessageDetail, BiSliderAlt } from "react-icons/bi";
import { MdViewDay } from "react-icons/md";
import { Badge } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const ProfileLeft = () => {
	return (
		<div>
			{/* PROFILE TITLE START */}
			<div className="userCard bg-white">
				<div className="userBg">
					<img width="100%" src={userBg} alt="userImage" />
					<span className="cameraDiv">
						<FaCamera />
					</span>
					<div className="userImage">
						<img src={placeholderPerson} alt="placeholder" />
						<span className="cameraDiv2">
							<FaCamera />
						</span>
					</div>
				</div>
				<div className="d-flex justify-content-end">
					<div className="py-3">
						<h3 className="d-flex align-items-center h4 ml-5 font-weight-bold">
							Ernest Peguita <img src={badge} alt="badge" className="ml-2" />
						</h3>
						<h5 className="px-2">Sur Makiti+ depuis Avril 2020</h5>
						<div className="d-flex justify-content-around align-items-center">
							<h4 className="d-flex align-items-center font-weight-bold">
								5 <img src={filledStar} alt="filledStar" className="ml-1" />
							</h4>
							<h4 className="h5 mb-0 themeColor">12 publications</h4>
						</div>
					</div>
				</div>
			</div>
			{/* PROFILE TITLE END */}
			<br />
			{/* PROFILE TITLE END */}
			<div className="userInfoDD2 bg-white py-4">
				<ul className="list-unstyled mb-0">
					<NavLink activeClassName="active" to="/profile">
						<li className="d-flex align-items-center font-weight-bold py-3 px-5 h4">
							<AiOutlineUser className="mr-2" /> Profile
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/message">
						<li className="d-flex align-items-center font-weight-bold py-3 px-5 h4">
							<BiMessageDetail className="mr-2" />
							<Badge badgeContent={2} color="error">
								Messages
							</Badge>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/favoris">
						<li className="d-flex align-items-center font-weight-bold py-3 px-5 h4">
							<AiOutlineStar className="mr-2" />
							Favoris
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/notifications">
						<li className="d-flex align-items-center font-weight-bold py-3 px-5 h4">
							<BiBell className="mr-2" />
							Notifications
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/mesAnnonces">
						<li className="d-flex align-items-center font-weight-bold py-3 px-5 h4">
							<MdViewDay className="mr-2" />
							Mes Annonces
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/maBoutique">
						<li className="d-flex align-items-center font-weight-bold py-3 px-5 h4">
							<AiOutlineShop className="mr-2" />
							Ma Boutique
						</li>
					</NavLink>
					<NavLink exact to="/">
						<li className="d-flex align-items-center font-weight-bold py-3 px-5 h4">
							<BiSliderAlt className="mr-2" />
							Paramètres
						</li>
					</NavLink>
				</ul>
			</div>
			{/* PROFILE TITLE END */}
		</div>
	);
};

export default ProfileLeft;
