import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import annonces1 from "../../assets/annonces1.webp";
import { ImCamera, ImCross } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";
import { HiEmojiHappy } from "react-icons/hi";
import { BsFillMicFill } from "react-icons/bs";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const MessageModal = ({ messageModal, setMessageModal }) => {
	const handleClose = () => {
		setMessageModal(false);
	};
	return (
		<div>
			<Dialog
				open={messageModal}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<div className="userModalContainer position-relative my-4">
					{/* MODAL HEADER START */}
					<div className="text-center">
						<h2 className="font-weight-bold m-0">Marie Bah</h2>
						<h5 className="font-weight-bold">En ligne il y a 4 heures</h5>
					</div>
					<div className="productImgContainer2 my-4 d-flex justify-content-center align-items-center">
						<img src={annonces1} alt="product" />
						<div className="innerText pt-2 px-3">
							<h4 className="font-weight-bold">800 000 FG</h4>
							<h5 className="themeColor font-weight-bold">
								Chaussure Nike a vendre
							</h5>
						</div>
					</div>
					{/* MODAL HEADER END */}

					<hr />

					{/* MODAL BODY END */}
					<div className="messageList"></div>
					<div className="messageModalContainer">
						<div className="btnContainer d-flex justify-content-between align-items-center">
							<button>Ou est situe votre boutique?</button>
							<button>Quand puis passer voir ?</button>
							<button>L’article est toujours disponible</button>
						</div>
						<hr />
						<div className="sendContainer d-flex justify-content-between align-items-center px-3">
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
					</div>
					{/* MODAL BODY END */}

					<div onClick={handleClose} className="modalCloseIcon pointer">
						<ImCross />
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default MessageModal;
