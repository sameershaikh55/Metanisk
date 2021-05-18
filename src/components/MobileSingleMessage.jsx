import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { useHistory } from "react-router-dom";
import client from "../assets/messageImg.svg";
import annonces1 from "../assets/annonces1.svg";
import { ImCamera } from "react-icons/im";
import { BsFillMicFill } from "react-icons/bs";
import { HiEmojiHappy } from "react-icons/hi";

const MobileSingleMessage = () => {
	let history = useHistory();

	const bgColor = {
		background: "#E9EAEB",
		width: "84%",
	};
	return (
		<div>
			{/* HEADER START */}
			<div className="mobilMessageHeader">
				<div className="position-relative shadow bg-white pl-1 pr-4 pt-3 pb-1">
					<RiArrowLeftSLine
						className="position-absolute"
						onClick={() => history.goBack()}
						fontSize="3.8rem"
						color="#067AC2"
					/>
					<div className="text-center">
						<h2 className="font-weight-bold mt-3">Marie Bah</h2>
						<h4>En ligne il y a 4 heures</h4>
					</div>
					<div className="productImgContainer2 my-4 d-flex justify-content-center align-items-center">
						<img src={annonces1} alt="product" />
						<div className="innerText pt-2 px-3">
							<h3 className="font-weight-bold m-0">800 000 FG</h3>
							<h5 className="themeColor m-0 font-weight-bold">
								Chaussure Nike a vendre
							</h5>
							<h5 className="d-flex align-items-center">
								<MdLocationOn color="#067AC2" className="mr-1" /> Conakry,
								Dixinn
							</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="messagesBodyMobile">
				<div>
					<div className="singleMessage d-flex pl-4">
						<img
							className="userImg mt-3 rounded-circle"
							src={client}
							alt="client"
						/>
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 ml-3 h4 incomingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							perspiciatis quam mollitia deserunt dicta aut rerum aperiam vitae
							repellat illo.
						</div>
					</div>

					<div className="singleMessage d-flex justify-content-end pr-4">
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 mr-3 h4 outGoingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							mollitia deserunt dicta aut rerum aperiam vitae
						</div>
						<img
							className="userImg mt-2 rounded-circle"
							src={client}
							alt="client"
						/>
					</div>

					<div className="singleMessage d-flex pl-4">
						<img
							className="userImg mt-3 rounded-circle"
							src={client}
							alt="client"
						/>
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 ml-3 h4 incomingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
						</div>
					</div>

					<div className="singleMessage d-flex pl-4">
						<img
							className="userImg mt-3 rounded-circle"
							src={client}
							alt="client"
						/>
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 ml-3 h4 incomingMessage"
						>
							<div className="text-center mb-2">
								<img src={annonces1} alt="annonces1" />
							</div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
						</div>
					</div>

					<div className="singleMessage d-flex pl-4">
						<img
							className="userImg mt-3 rounded-circle"
							src={client}
							alt="client"
						/>
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 ml-3 h4 incomingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
						</div>
					</div>

					<div className="singleMessage d-flex justify-content-end pr-4">
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 mr-3 h4 outGoingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							mollitia deserunt dicta aut rerum aperiam vitae
						</div>
						<img
							className=" userImg mt-3 rounded-circle"
							src={client}
							alt="client"
						/>
					</div>
					<div className="singleMessage d-flex justify-content-end pr-4">
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 mr-3 h4 outGoingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							mollitia deserunt dicta aut rerum aperiam vitae
						</div>
						<img
							className=" userImg mt-3 rounded-circle"
							src={client}
							alt="client"
						/>
					</div>
					<div className="singleMessage d-flex justify-content-end pr-4">
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 mr-3 h4 outGoingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							mollitia deserunt dicta aut rerum aperiam vitae
						</div>
						<img
							className=" userImg mt-3 rounded-circle"
							src={client}
							alt="client"
						/>
					</div>
					<div className="singleMessage d-flex justify-content-end pr-4">
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 mr-3 h4 outGoingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							mollitia deserunt dicta aut rerum aperiam vitae
						</div>
						<img
							className=" userImg mt-3 rounded-circle"
							src={client}
							alt="client"
						/>
					</div>
					<div className="singleMessage d-flex pl-4">
						<img
							className="userImg mt-3 rounded-circle"
							src={client}
							alt="client"
						/>
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 ml-3 h4 incomingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
						</div>
					</div>
				</div>

				<div className="sendMessageSec">
					<div className="innerSendMessageSec position-relative">
						<div>
							<input
								type="text"
								className=""
								placeholder="Ecrivez votre message"
							/>
							<HiEmojiHappy
								className="icon themeColor pointer"
								fontSize="2.5rem"
							/>
						</div>

						<div className="pl-4 px-1 d-flex">
							<ImCamera className="themeColor mr-4 pointer" fontSize="2.8rem" />
							<BsFillMicFill className="themeColor pointer" fontSize="2.8rem" />
						</div>
					</div>
				</div>
			</div>
			{/* HEADER END */}
		</div>
	);
};

export default MobileSingleMessage;
