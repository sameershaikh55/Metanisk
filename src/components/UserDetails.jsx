import React, { useState } from "react";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import placeholderPerson from "../assets/placeholderPerson.svg";
import badge from "../assets/badge.svg";
import ratingStar from "../assets/ratingStar.svg";
import addUser from "../assets/addUser.svg";
import share from "../assets/share.svg";
import fb2 from "../assets/fb2.svg";
import insta2 from "../assets/insta2.webp";
import twit2 from "../assets/twit2.svg";
import eye from "../assets/eye.svg";
import flag from "../assets/flag.svg";
import message from "../assets/message2.svg";
import UserModal from "../components/modals/UserModal";
import MessageModal from "../components/modals/MessageModal";
import CallModal from "../components/modals/CallModal";
import CommentModal from "../components/modals/CommentModal";

const UserDetails = () => {
	const [userModal, setUserModal] = useState(false);
	const [messageModal, setMessageModal] = useState(false);
	const [callModal, setCallModal] = useState(false);
	const [commentModal, setCommentModal] = useState(false);

	const handleClickOpenUser = () => {
		setUserModal(true);
	};

	const handleClickOpenMessage = () => {
		setMessageModal(true);
	};

	const handleClickOpenCall = () => {
		setCallModal(true);
	};

	const handleClickOpenComment = () => {
		setCommentModal(true);
	};

	return (
		<>
			{/* MODALS START */}
			<UserModal userModal={userModal} setUserModal={setUserModal} />
			<MessageModal
				messageModal={messageModal}
				setMessageModal={setMessageModal}
			/>
			<CallModal callModal={callModal} setCallModal={setCallModal} />
			<CommentModal
				commentModal={commentModal}
				setCommentModal={setCommentModal}
			/>
			{/* MODALS EMD */}

			<div className="bg-white p-4">
				<div className="text-center mb-5">
					<h2 className="font-weight-bold text-uppercase">
						ContacteR <br /> Le vendeur
					</h2>
				</div>

				<div className="userBtn d-flex flex-column">
					<button
						onClick={handleClickOpenMessage}
						className="text-white py-2 mb-3 d-flex justify-content-center align-items-center"
					>
						<FaPhoneAlt className="mr-2" />
						Appeler
					</button>
					<button
						onClick={handleClickOpenCall}
						className="text-white py-2 d-flex justify-content-center align-items-center"
					>
						<FaTelegramPlane className="mr-2" fontSize="1.8rem" />
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
						<h3 className="d-flex justify-content-center align-items-center font-weight-bold">
							Ernest Peguita
							<img src={badge} alt="badge" className="ml-2" />
						</h3>
						<h4>Sur Makiti+ depuis Avril 2020</h4>
						<div className="d-flex justify-content-center align-items-center my-3">
							<h2 className="font-weight-bold mr-2 mb-0">5</h2>
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
							<button
								onClick={handleClickOpenUser}
								className="themeBtn p-2 px-3 d-flex align-items-center h4"
							>
								<img src={addUser} alt="addUser" className="mr-2" />
								S’abonner
							</button>
						</div>
						<div className="mt-3">
							<h2 className="font-weight-bold">Partager</h2>
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
				<span className="font-weight-bold">№ 1874353645</span>
				<span className="d-flex align-items-center">
					<img src={eye} alt="eye" />
					1000
				</span>
			</div>
			<button
				onClick={handleClickOpenComment}
				className="themeBtn py-2 px-0 w-100 h4"
			>
				<img src={flag} alt="flag" className="mr-2" />
				Signaler cette annonce
			</button>
			<button className="themeBtn3 py-3 px-0 mt-3 w-100 h4 mb-0">
				<img src={message} alt="flag" className="mr-2" />
				Laisser un commentaire
			</button>
			<div style={{ height: "68.8rem" }} className="w-100 bg-white mt-5"></div>
		</>
	);
};

export default UserDetails;
