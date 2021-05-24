import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import placeholderPerson from "../../assets/placeholderPerson.svg";
import { ImCamera, ImCross } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import { HiEmojiHappy } from "react-icons/hi";
import { BsFillMicFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const CommentModal = ({ commentModal, setCommentModal }) => {
	const handleClose = () => {
		setCommentModal(false);
	};
	return (
		<div>
			<Dialog
				open={commentModal}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<div className="commentModalContainer position-relative my-4">
					{/* MODAL HEADER START */}
					<div className="headerContainer">
						<h2 className="font-weight-bold m-0 text-center">Commentaires</h2>
						<hr />
						<div className="d-flex justify-content-between shadow align-items-center px-3 pb-3">
							<div className="d-flex">
								<img className="userImg" src={placeholderPerson} alt="" />
								<div className="ml-3">
									<h2 className="font-weight-bold">Ernest Peguita</h2>
									<h4>Sur Makiti+ depuis Avril 2020</h4>
									<div className="d-flex justify-content-between align-items-center">
										<h4 className="h3 mb-0 d-flex font-weight-bold">
											5
											<AiFillStar
												className="ml-1"
												color="#FFCE31"
												fontSize="2rem"
											/>
										</h4>
										<h5 className="mb-0 themeColor">12 publications</h5>
									</div>
								</div>
							</div>
							<div>
								<h4 className="themeColor font-weight-bold">
									<AiFillStar
										color="#FFCE31"
										fontSize="2rem"
										className="mr-2"
									/>
									56 Avis
								</h4>
								<h4 className="themeColor font-weight-bold">
									<BiMessageAltDetail fontSize="2rem" /> 36 Commentaires
								</h4>
							</div>
						</div>
					</div>
					{/* MODAL HEADER END */}

					{/* MODAL BODY END */}
					<div className="commentModalBody p-4">
						{[1, 1, 1, 1].map(() => {
							return (
								<div className="cardComment borderRounded shadow px-4 pt-3 pb-1 my-4">
									<div className="d-flex justify-content-between align-items-center">
										<div className="d-flex align-items-center">
											<img
												className="commentUser"
												src={placeholderPerson}
												alt=""
											/>
											<div className="ml-3">
												<h2 className="mb-0">Ali Camara</h2>
												<h5 className="themeColor">Aujourd’hui - 12:00</h5>
											</div>
										</div>
										<h1 className="d-flex align-items-center font-weight-bold">
											4.5
											<AiFillStar
												color="#FFCE31"
												fontSize="2rem"
												className="ml-2"
											/>
										</h1>
									</div>
									<h4 className="font-weight-bold my-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</h4>
									<div className="text-right">
										<h3 className="themeColor">3 Reponses</h3>
									</div>
								</div>
							);
						})}
					</div>
					{/* MODAL BODY END */}

					<div className="sendContainer d-flex justify-content-between align-items-center px-3 pt-3">
						<div className="textField d-flex flex-column justify-content-between">
							<div>
								<input
									placeholder="write a message.."
									type="text"
									name=""
									id=""
								/>
							</div>
							<div className="d-flex justify-content-between px-1 py-1">
								<div>
									<HiEmojiHappy
										className="pointer"
										color="#067AC2"
										fontSize="2.3rem"
									/>
								</div>
								<div>
									<ImCamera
										color="#067AC2"
										fontSize="2.3rem"
										className="mr-2 pointer"
									/>
									<BsFillMicFill
										className="pointer"
										color="#067AC2"
										fontSize="2.2rem"
									/>
								</div>
							</div>
						</div>
						<div className="sendIcon">
							<FaTelegramPlane />
						</div>
					</div>

					<div onClick={handleClose} className="modalCloseIcon pointer">
						<ImCross />
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default CommentModal;
