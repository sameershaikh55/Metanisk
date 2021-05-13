import React from "react";
import { FaCamera } from "react-icons/fa";
import userBg from "../assets/userBg.svg";
import placeholderPerson from "../assets/placeholderPerson.svg";
import badge from "../assets/badge.svg";
import filledStar from "../assets/filledStar.svg";
import { AiOutlineShop, AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { BiBell, BiMessageDetail, BiSliderAlt } from "react-icons/bi";
import { MdViewDay } from "react-icons/md";
import { Badge } from "@material-ui/core";

const ProfileLeft = ({
	profile,
	message,
	favoris,
	setProfile,
	setMessage,
	setFavoris,
}) => {
	const profileFunc = () => {
		setProfile(true);
		setMessage(false);
		setFavoris(false);
	};
	const messageFunc = () => {
		setMessage(true);
		setProfile(false);
		setFavoris(false);
	};
	const favorisFunc = () => {
		setFavoris(true);
		setMessage(false);
		setProfile(false);
	};

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
							Ernest Peguita <img src={badge} alt="badge" className="ml-1" />
						</h3>
						<h5 className="px-2">Sur Makiti+ depuis Avril 2020</h5>
						<div className="d-flex justify-content-around">
							<h4 className="d-flex align-items-center font-weight-bold">
								5 <img src={filledStar} alt="filledStar" className="ml-1" />
							</h4>
							<h4 className="h4 themeColor">12 publications</h4>
						</div>
					</div>
				</div>
			</div>
			{/* PROFILE TITLE END */}
			<br />
			{/* PROFILE TITLE END */}
			<div className="userInfoDD2 bg-white py-4">
				<ul className="list-unstyled mb-0">
					<li
						onClick={profileFunc}
						className={`d-flex align-items-center font-weight-bold py-3 px-5 h4 ${
							(profile && "themeColor") || ""
						}`}
					>
						<AiOutlineUser className="mr-2" /> Profile
					</li>
					<li
						onClick={messageFunc}
						className={`d-flex align-items-center font-weight-bold py-3 px-5 h4 ${
							(message && "themeColor") || ""
						}`}
					>
						<BiMessageDetail className="mr-2" />
						<Badge badgeContent={2} color="error">
							Messages
						</Badge>
					</li>
					<li
						onClick={favorisFunc}
						className={`d-flex align-items-center font-weight-bold py-3 px-5 h4 ${
							(favoris && "themeColor") || ""
						}`}
					>
						<AiOutlineStar className="mr-2" />
						Favoris
					</li>
					<li
						className={`d-flex align-items-center font-weight-bold py-3 px-5 h4`}
					>
						<BiBell className="mr-2" />
						Notifications
					</li>
					<li
						className={`d-flex align-items-center font-weight-bold py-3 px-5 h4`}
					>
						<MdViewDay className="mr-2" />
						Mes Annonces
					</li>
					<li
						className={`d-flex align-items-center font-weight-bold py-3 px-5 h4`}
					>
						<AiOutlineShop className="mr-2" />
						Ma Boutique
					</li>
					<li
						className={`d-flex align-items-center font-weight-bold py-3 px-5 h4`}
					>
						<BiSliderAlt className="mr-2" />
						Paramètres
					</li>
				</ul>
			</div>
			{/* PROFILE TITLE END */}
		</div>
	);
};

export default ProfileLeft;
