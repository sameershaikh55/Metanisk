import React from "react";
import { GrMoreVertical } from "react-icons/gr";
import client from "../assets/messageImg.svg";
import { RiArrowRightSLine } from "react-icons/ri";
import { ImCamera } from "react-icons/im";
import { HiEmojiHappy } from "react-icons/hi";
import { BsFillMicFill } from "react-icons/bs";
import annonces1 from "../assets/annonces1.svg";

const Messages = () => {
	const imageStyling = {
		borderTopLeftRadius: "8px",
		borderBottomLeftRadius: "8px",
	};

	const data = [
		{ img: client, name: "Marie Bah", title: "Ou vous etes situe?" },
		{ img: client, name: "Marie Bah", title: "Ou vous etes situe?" },
		{ img: client, name: "Marie Bah", title: "Ou vous etes situe?" },
		{ img: client, name: "Marie Bah", title: "Ou vous etes situe?" },
		{ img: client, name: "Marie Bah", title: "Ou vous etes situe?" },
		{ img: client, name: "Marie Bah", title: "Ou vous etes situe?" },
	];

	const bgColor = {
		background: "#E9EAEB",
		width: "74%",
	};

	return (
		<div className="bg-white borderRounded d-flex">
			<div className="w-100 p-3">
				<div className="d-flex justify-content-between align-items-center">
					<h1 className="font-weight-bold">Messages</h1>
					<div>
						<GrMoreVertical fontSize="2rem" />
					</div>
				</div>
				<div className="container-fluid mt-3">
					<div className="row">
						{data.map((prev, i) => {
							return (
								<div
									key={i}
									className="col-12 borderRounded p-0 bg-white d-flex mt-4 shadow"
								>
									<img
										style={imageStyling}
										width="26%"
										height="auto"
										src={prev.img}
										alt="client"
									/>
									<div className="w-100">
										<div className="d-flex justify-content-between w-100 px-3 pt-2">
											<div>
												<h4 className="m-0"> {prev.name} </h4>
												<h5>{prev.title}</h5>
											</div>
											<div className="d-flex themeColor font-weight-bold">
												<h6 className="mr-1">Aujourd’hui - 12:00</h6>
												<RiArrowRightSLine fontSize="1.2rem" />
											</div>
										</div>

										<div className="productImgContainer d-flex">
											<img src={annonces1} alt="product" />
											<div className="innerText pt-2 px-3">
												<h4 className="font-weight-bold">800 000 FG</h4>
												<h5 className="themeColor font-weight-bold">
													Chaussure Nike a vendre
												</h5>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="w-100 border-left">
				<div className="d-flex justify-content-between w-100 shadow align-items-center py-4 px-3">
					<div>
						<h3 className="m-0 font-weight-bold">Marie Bah</h3>
						<h5>En ligne il y a 4 heures</h5>
					</div>
					<div>
						<div className="productImgContainer2 d-flex align-items-center">
							<img src={annonces1} alt="product" />
							<div className="innerText pt-2 px-3">
								<h4 className="font-weight-bold">800 000 FG</h4>
								<h5 className="themeColor font-weight-bold">
									Chaussure Nike a vendre
								</h5>
							</div>
						</div>
					</div>
				</div>

				<div className="messagesBody">
					<div className="d-flex align-items-stretch mt-5 pl-2">
						<img
							width="10%"
							className="mt-n5 rounded-circle"
							src={client}
							alt="client"
						/>
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 ml-3 h5 incomingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							perspiciatis quam mollitia deserunt dicta aut rerum aperiam vitae
							repellat illo.
						</div>
					</div>

					<div className="d-flex align-items-stretch justify-content-end mt-3 pr-2">
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 mr-3 h5 outGoingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							mollitia deserunt dicta aut rerum aperiam vitae
						</div>
						<img
							width="10%"
							className="mt-n5 rounded-circle"
							src={client}
							alt="client"
						/>
					</div>

					<div className="d-flex align-items-stretch pl-2 mt-3">
						<img
							width="10%"
							className="rounded-circle"
							src={client}
							alt="client"
						/>
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 ml-3 h5 incomingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
						</div>
					</div>

					<div className="d-flex align-items-stretch pl-2 mt-3">
						<img
							width="10%"
							className="rounded-circle"
							src={client}
							alt="client"
						/>
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 ml-3 h5 incomingMessage"
						>
							<div className="text-center mb-2">
								<img src={annonces1} alt="annonces1" />
							</div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
						</div>
					</div>

					<div className="d-flex align-items-stretch pl-2 mt-3">
						<img
							width="10%"
							className="rounded-circle"
							src={client}
							alt="client"
						/>
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 ml-3 h5 incomingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
						</div>
					</div>

					<div className="d-flex align-items-stretch justify-content-end mt-3 pr-2">
						<div
							style={bgColor}
							className="font-weight-bold mt-3 px-3 py-3 mr-3 h5 outGoingMessage"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							mollitia deserunt dicta aut rerum aperiam vitae
						</div>
						<img
							width="10%"
							className="mt-n5 rounded-circle"
							src={client}
							alt="client"
						/>
					</div>
				</div>

				<div className="sendMessageSec position-relative">
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
						<ImCamera className="themeColor mr-4 pointer" fontSize="2.5rem" />
						<BsFillMicFill className="themeColor pointer" fontSize="2.5rem" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;
