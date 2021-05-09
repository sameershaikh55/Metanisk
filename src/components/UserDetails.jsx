import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import placeholderPerson from "../assets/placeholderPerson.svg";
import badge from "../assets/badge.svg";
import ratingStar from "../assets/ratingStar.svg";
import addUser from "../assets/addUser.svg";
import share from "../assets/share.svg";
import fb2 from "../assets/fb2.svg";
import insta2 from "../assets/insta2.svg";
import twit2 from "../assets/twit2.svg";
import eye from "../assets/eye.svg";
import flag from "../assets/flag.svg";
import message from "../assets/message2.svg";

const UserDetails = () => {
	return (
		<>
			<div className="bg-white p-4">
				<div className="text-center mb-5">
					<h2 className="m-0 font-weight-bold">ContacteR</h2>
					<h2 className="font-weight-bold">Le vendeur</h2>
				</div>

				<div className="userBtn d-flex flex-column">
					<button className="text-white py-2 mb-3 d-flex justify-content-center align-items-center">
						<FaPhoneAlt className="mr-2" />
						Appeler
					</button>
					<button className="text-white py-2 d-flex justify-content-center align-items-center">
						<FaPhoneAlt className="mr-2" />
						Ecrire
					</button>
				</div>

				<div className="mt-5 text-center">
					<img
						className="w-25"
						src={placeholderPerson}
						alt="placeholderPerson"
					/>
					<div className="mt-3">
						<h3 className="d-flex justify-content-center align-items-center">
							Ernest Peguita
							<img src={badge} alt="badge" className="ml-2" />
						</h3>
						<h4>Sur Makiti+ depuis Avril 2020</h4>
						<div className="d-flex justify-content-center align-items-center">
							<h2 className="font-weight-bold mr-2">5</h2>
							<div className="d-flex align-items-center">
								<img className="w-100" src={ratingStar} alt="ratingStar" />
								<img className="w-100" src={ratingStar} alt="ratingStar" />
								<img className="w-100" src={ratingStar} alt="ratingStar" />
								<img className="w-100" src={ratingStar} alt="ratingStar" />
								<img className="w-100" src={ratingStar} alt="ratingStar" />
							</div>
						</div>
						<div className="d-flex justify-content-center align-items-center">
							<h5 className="d-flex align-items-center mr-4 font-weight-bold">
								<img src={ratingStar} alt="ratingStar" />
								56 Avis
							</h5>
							<h5 className="themeColor">12 publications</h5>
						</div>
						<div className="d-flex justify-content-center mt-3">
							<button className="themeBtn p-2 px-3 d-flex align-items-center h4">
								<img src={addUser} alt="addUser" className="mr-2" />
								S’abonner
							</button>
						</div>
						<div className="mt-3">
							<h2>Partager</h2>
							<div className="d-flex align-items-center justify-content-center">
								<img className="mr-3" src={share} alt="share" />
								<img className="mr-3" src={fb2} alt="fb" />
								<img className="mr-3" src={insta2} alt="insta" />
								<img className="mr-3" src={twit2} alt="twit" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="eyeBtn h5 d-flex justify-content-between my-4">
				<span>№ 1874353645</span>
				<span className="d-flex align-items-center">
					<img src={eye} alt="eye" />
					1000
				</span>
			</div>
			<button className="themeBtn py-2 px-0 w-100">
				<img src={flag} alt="flag" className="mr-2" />
				Signaler cette annonce
			</button>
			<button className="themeBtn3 py-3 px-0 mt-3 w-100">
				<img src={message} alt="flag" className="mr-2" />
				Laisser un commentaire
			</button>
		</>
	);
};

export default UserDetails;
