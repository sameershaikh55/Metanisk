import React, { useState } from "react";
import logo from "../assets/logo.svg";
import fb from "../assets/fb.svg";
import yt from "../assets/yt.svg";
import twit from "../assets/twit.svg";
import insta from "../assets/insta.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import message from "../assets/message.svg";
import appStore from "../assets/appStore.svg";
import playStore from "../assets/playStore.svg";
import { useHistory } from "react-router-dom";
import Connector from "./Connector";
import RegisterModal from "./modals/RegisterModal";

const Footer = () => {
	// MODALS DETAILS START
	const [user, setUser] = useState(false);
	const [categories, setCategories] = useState(false);
	const [openConnector, setOpenConnector] = useState(false);
	const [openRegister, setOpenRegister] = useState(false);
	let history = useHistory();

	const handleClickOpenConnector = () => {
		setOpenConnector(true);
	};
	const handleClickOpenRegister = () => {
		setOpenRegister(true);
	};

	// MODALS DETAILS END

	// STYLING START
	const fullWidth = {
		width: "9%",
		marginRight: "6px",
	};
	const socialWidth = {
		width: "80%",
	};
	// STYLING END

	return (
		<>
			{/* MODALS START */}
			<Connector
				openConnector={openConnector}
				setOpenConnector={setOpenConnector}
			/>
			<RegisterModal
				openRegister={openRegister}
				setOpenRegister={setOpenRegister}
			/>
			{/* MODALS END */}
			<div className="footer_container d-none d-lg-block">
				<div className="innerFooter">
					<div className="container-fluid">
						<div className="row">
							<div className="col-3">
								<img style={{ width: "90%" }} src={logo} alt="logo" />
								<h4 className="mt-3">
									Le plus grand marché publique en ligne de Guinée
								</h4>
							</div>
							<div className="col-9">
								<div className="row">
									<div className="col-4">
										<h3 className="mb-3 font-weight-bold">Contact</h3>
										<div className="d-flex align-items-center mb-4">
											<img style={fullWidth} src={location} alt="location" />
											<h4 className="m-0">
												République de Guinée Conakry, Yattaya-Fossidet
											</h4>
										</div>
										<div className="mb-4">
											<a
												className="text-decoration-none d-flex align-items-center text-dark pointer"
												href="tel:+224 666 66 66 66"
											>
												<img style={fullWidth} src={phone} alt="location" />
												<h4 className="m-0">+224 666 66 66 66</h4>
											</a>
										</div>
										<div>
											<a
												className="text-decoration-none d-flex align-items-center text-dark"
												href="mailto:support@makitiplus.com"
											>
												<img style={fullWidth} src={message} alt="location" />
												<h4 className="m-0">support@makitiplus.com</h4>
											</a>
										</div>
									</div>
									<div className="col-3">
										<h3 className="mb-4 font-weight-bold">Services</h3>
										<h4 className="mb-3">Aide et Support</h4>
										<h4 className="mb-3">Politique de confidentialité</h4>
										<h4 className="mb-3">
											Conditions Générales d’Utilisations
										</h4>
									</div>
									<div className="col-2">
										<h3 className="mb-4 font-weight-bold">Liens rapides</h3>
										<h4
											onClick={handleClickOpenConnector}
											className="mb-3 pointer"
										>
											Se connecter
										</h4>
										<h4
											onClick={handleClickOpenRegister}
											className="mb-3 pointer"
										>
											S’enregistrer
										</h4>
										<h4
											onClick={() => history.push("/profile")}
											className="mb-3 pointer"
										>
											Mon Profile
										</h4>
										<h4
											onClick={() => history.push("/maBoutique")}
											className="mb-3 pointer"
										>
											Ma Boutique
										</h4>
										<h4
											onClick={() => history.push("/mesAnnonces")}
											className="mb-3 pointer"
										>
											Mes annonces
										</h4>
									</div>
									<div className="col-3 text-center">
										<h3 className="mb-4 font-weight-bold">
											L’Application Makiti+
										</h3>
										<img className="w-75 mb-3" src={appStore} alt="appStore" />
										<img className="w-75" src={playStore} alt="playStore" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="innerFooter container-fluid d-flex">
					<a href="https://youtube.com/">
						<img style={socialWidth} src={yt} alt="yt" />
					</a>
					<a href="http://facebook.com/">
						<img style={socialWidth} src={fb} alt="fb" />
					</a>
					<a href="https://twitter.com/">
						<img style={socialWidth} src={twit} alt="twit" />
					</a>
					<a href="https://www.instagram.com/">
						<img style={socialWidth} src={insta} alt="ints" />
					</a>
				</div>
				<hr className="mx-5" />
				<br />
				<div className="footerText">
					<div className="container-fluid">
						<h4 className="themeColor2">
							© 2021 Makitiplus SAS. Tous droits réservés.
						</h4>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
