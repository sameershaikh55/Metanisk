import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { FaPhoneAlt, FaUnlockAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import connectIcon1 from "../../assets/connectIcon1.svg";
import connectIcon2 from "../../assets/connectIcon2.svg";
import connectIcon3 from "../../assets/connectIcon3.svg";
import ReactCodeInput from "react-verification-code-input";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const RegisterModal = ({ openRegister, setOpenRegister }) => {
	const [openConnector, setOpenConnector] = useState(false);
	const [openVerification, setOpenVerification] = useState(false);

	const handleClickOpenConnector = () => {
		setOpenConnector(true);
		setOpenRegister(false);
	};

	const handleClickVerification = () => {
		setOpenVerification(true);
		setOpenRegister(false);
	};

	const handleCloseConnector = () => {
		setOpenConnector(false);
	};

	const handleCloseRegister = () => {
		setOpenRegister(false);
	};

	const handleClickRegister = () => {
		setOpenRegister(true);
		setOpenConnector(false);
	};

	const handleCloseVerification = () => {
		setOpenVerification(false);
	};

	return (
		<>
			{/* VERIFICATION MODAL START */}
			<div>
				<Dialog
					open={openVerification}
					TransitionComponent={Transition}
					keepMounted
					onClose={handleCloseVerification}
					aria-labelledby="alert-dialog-slide-title"
					aria-describedby="alert-dialog-slide-description"
				>
					<div className="container-fluid connectModal_container px-4s py-4">
						<h1 className="text-center font-weight-bold mb-4">
							Code de Vérification
						</h1>
						<div className="verificationModalBody d-flex justify-content-center align-items-center">
							<div>
								<div className="verificationCode_container">
									<ReactCodeInput className="inputContainer" fields={4} />
								</div>

								<div className="text-center mt-3">
									<button
										className="themeBtn mt-3"
										onClick={handleCloseVerification}
									>
										Valider
									</button>
								</div>
							</div>
						</div>
						<hr />
						<div className="mt-4">
							<h4 className="text-center">
								<span
									className="themeColor pointer"
									onClick={handleCloseVerification}
								>
									Annuler
								</span>
							</h4>
						</div>
					</div>
				</Dialog>
			</div>
			{/* VERIFICATION MODAL END */}

			{/* CONNECTOR MODAL START */}
			<div>
				<Dialog
					open={openConnector}
					TransitionComponent={Transition}
					keepMounted
					onClose={handleCloseConnector}
					aria-labelledby="alert-dialog-slide-title"
					aria-describedby="alert-dialog-slide-description"
				>
					<div className="container-fluid connectModal_container px-4s py-4">
						<h1 className="text-center font-weight-bold mb-4">Se connecter</h1>
						<div className="position-relative">
							<input type="text" placeholder="Numéro de téléphone" />
							<FaPhoneAlt
								className="phoneIcon"
								fontSize="1.6rem"
								color="#a2a2a2"
							/>
						</div>
						<br />
						<div className="position-relative">
							<input type="password" placeholder="Mot de passe" />
							<FaUnlockAlt
								className="lockIcon"
								fontSize="1.6rem"
								color="#a2a2a2"
							/>
							<AiFillEye
								className="eyeIcon pointer"
								fontSize="2rem"
								color="#a2a2a2"
							/>
						</div>
						<div className="d-flex justify-content-between mt-4">
							<div>
								<input
									type="checkbox"
									id="rappeler"
									name="rappeler"
									value="rappeler"
								/>
								<label className="h4 ml-2" htmlFor="rappeler">
									Se rappeler de moi
								</label>
							</div>
							<h5 className="m-0 text-secondary">Mot de passe oublié</h5>
						</div>
						<button className="themeBtn mt-3 w-100">Se connecter</button>
						<div className="mt-5 mt-4">
							<div className="text-center">
								<h4 className="text-secondary">ou se connecter avec</h4>
								<div className="modalIcons d-flex justify-content-center align-content-center">
									<div className="icon-container">
										<a
											target="_blank"
											href="http://facebook.com/"
											rel="noreferrer"
										>
											<img src={connectIcon1} alt="facebook" />
										</a>
									</div>
									<div className="icon-container2">
										<a
											target="_blank"
											href="http://google.com/"
											rel="noreferrer"
										>
											<img className="mx-3" src={connectIcon2} alt="google" />
										</a>
									</div>
									<div className="icon-container">
										<a
											target="_blank"
											href="https://twitter.com/"
											rel="noreferrer"
										>
											<img src={connectIcon3} alt="twitter" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<hr />
						<div className="mt-3">
							<h4>
								Vous n'avez pas de compte ?{" "}
								<span
									className="themeColor pointer"
									onClick={handleClickRegister}
								>
									S’enregistrer
								</span>
							</h4>
						</div>
					</div>
				</Dialog>
			</div>
			{/* CONNECTOR MODAL START */}

			{/* REGISTER MODAL START */}
			<div>
				<Dialog
					open={openRegister}
					TransitionComponent={Transition}
					keepMounted
					onClose={handleCloseRegister}
					aria-labelledby="alert-dialog-slide-title"
					aria-describedby="alert-dialog-slide-description"
				>
					<div className="container-fluid connectModal_container px-4s py-4">
						<h1 className="text-center font-weight-bold mb-4">S’enregistrer</h1>
						<div className="position-relative">
							<input type="text" placeholder="Numéro de téléphone" />
							<FaPhoneAlt
								className="phoneIcon"
								fontSize="1.6rem"
								color="#a2a2a2"
							/>
						</div>
						<br />
						<div className="position-relative">
							<input type="password" placeholder="Mot de passe" />
							<FaUnlockAlt
								className="lockIcon"
								fontSize="1.6rem"
								color="#a2a2a2"
							/>
							<AiFillEye
								className="eyeIcon pointer"
								fontSize="2rem"
								color="#a2a2a2"
							/>
						</div>
						<button
							className="themeBtn mt-4 w-100"
							onClick={handleClickVerification}
						>
							S’enregistrer
						</button>
						<div className="mt-5 mt-4">
							<h5 className="text-center h4">ou s’enregistrer avec</h5>
							<div className="modalIcons d-flex justify-content-center align-content-center">
								<div className="icon-container">
									<a
										target="_blank"
										href="http://facebook.com/"
										rel="noreferrer"
									>
										<img src={connectIcon1} alt="facebook" />
									</a>
								</div>
								<div className="icon-container2">
									<a target="_blank" href="http://google.com/" rel="noreferrer">
										<img className="mx-3" src={connectIcon2} alt="google" />
									</a>
								</div>
								<div className="icon-container">
									<a
										target="_blank"
										href="https://twitter.com/"
										rel="noreferrer"
									>
										<img src={connectIcon3} alt="twitter" />
									</a>
								</div>
							</div>
						</div>
						<hr />
						<div>
							<h4>
								Vous n'avez pas de compte ?{" "}
								<span
									className="themeColor pointer"
									onClick={handleClickOpenConnector}
								>
									Se connecter
								</span>
							</h4>
						</div>
					</div>
				</Dialog>
			</div>
			{/* REGISTER MODAL END */}
		</>
	);
};

export default RegisterModal;
