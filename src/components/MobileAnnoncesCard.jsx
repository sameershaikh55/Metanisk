import React, { useState } from "react";
import heart from "../assets/heartIcon.svg";
import music from "../assets/music.svg";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import CallModal from "./modals/CallModal";
import MessageModal from "./modals/MessageModal";

const MobileAnnoncesCard = ({ prev }) => {
	const [messageModal, setMessageModal] = useState(false);
	const [callModal, setCallModal] = useState(false);

	const handleClickOpenMessage = () => {
		setMessageModal(true);
	};

	const handleClickOpenCall = () => {
		setCallModal(true);
	};

	let history = useHistory();

	return (
		<>
			{/* MODALS START */}
			<MessageModal
				messageModal={messageModal}
				setMessageModal={setMessageModal}
			/>
			<CallModal callModal={callModal} setCallModal={setCallModal} />
			{/* MODALS EMD */}

			<div className="annoncesCardMobile">
				<div className="imgContainer">
					<img
						onClick={() => history.push("/adDetails")}
						style={{ width: "100%" }}
						className="productImg"
						src={prev}
						alt={prev}
					/>
					<div className="heartOnImg text-center">
						<img style={{ width: "75%" }} src={heart} alt="heart" />
					</div>
					<div className="titleOnImg text-center">
						<h4 className="text-white m-0">Conakry</h4>
					</div>
					<div className="musicOnImg text-center">
						<img src={music} alt="heart" />
					</div>
				</div>

				<div className="pt-3">
					<h3 className="mb-0 font-weight-bold px-3">800 000 FG</h3>
					<h5 className="mb-1 font-weight-bold px-3 themeColor">
						Chaussure Nike a vendre
					</h5>
					<h5 className="px-3">Aujourd’hui - 12:00</h5>
					<div className="cardBtns d-flex mt-4">
						<button
							onClick={handleClickOpenCall}
							className="d-flex align-items-center justify-content-center w-100 text-white py-3"
						>
							<FaPhoneAlt className="mr-2" />
							Appeler
						</button>
						<button
							onClick={handleClickOpenMessage}
							className="d-flex align-items-center justify-content-center w-100 text-white py-3"
						>
							<FaTelegramPlane className="mr-2" fontSize="1.8rem" />
							Ecrire
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileAnnoncesCard;
