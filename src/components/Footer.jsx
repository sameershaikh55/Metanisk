import React from "react";
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

const Footer = () => {
	const fullWidth = {
		width: "9%",
		marginRight: "6px",
	};
	const socialWidth = {
		width: "16%",
		marginRight: "6px",
	};
	return (
		<div className="footer_container d-none d-lg-block">
			<div className="innerFooter">
				<div className="container-fluid">
					<div className="row">
						<div className="col-3">
							<img style={{ width: "90%" }} src={logo} alt="logo" />
							<h4 className="mt-3">
								Le plus grand marché publique en ligne de Guinée
							</h4>
							<div className="d-flex justify-content-between mt-4">
								<img style={socialWidth} src={yt} alt="yt" />
								<img style={socialWidth} src={fb} alt="fb" />
								<img style={socialWidth} src={twit} alt="twit" />
								<img style={socialWidth} src={insta} alt="ints" />
							</div>
						</div>
						<div className="col-9">
							<div className="row">
								<div className="col-4">
									<h3 className="mb-3 font-weight-bold">Contact</h3>
									<div className="d-flex align-items-center mb-2">
										<img style={fullWidth} src={location} alt="location" />
										<h4 className="m-0">
											République de Guinée Conakry, Yattaya-Fossidet
										</h4>
									</div>
									<div className="d-flex align-items-center mb-3">
										<img style={fullWidth} src={phone} alt="location" />
										<h4 className="m-0">+224 666 66 66 66</h4>
									</div>
									<div className="d-flex align-items-center">
										<img style={fullWidth} src={message} alt="location" />
										<h4 className="m-0">support@makitiplus.com</h4>
									</div>
								</div>
								<div className="col-3">
									<h3 className="mb-3 font-weight-bold">Services</h3>
									<h4 className="mb-2">Aide et Support</h4>
									<h4 className="mb-2">Politique de confidentialité</h4>
									<h4 className="mb-2">Conditions Générales d’Utilisations</h4>
								</div>
								<div className="col-2">
									<h3 className="mb-3 font-weight-bold">Liens rapides</h3>
									<h4 className="mb-2">Se connecter</h4>
									<h4 className="mb-2">S’enregistrer</h4>
									<h4 className="mb-2">Mon Profile</h4>
									<h4 className="mb-2">Ma Boutique</h4>
									<h4 className="mb-2">Mes annonces</h4>
								</div>
								<div className="col-3 text-center">
									<h3 className="mb-3 font-weight-bold">
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
			<br />
			<hr className="mx-5" />
			<br />
			<div className="footerText">
				<div className="container-fluid">
					<h4 className="text-secondary">
						© 2021 Makitiplus SAS. Tous droits réservés.
					</h4>
				</div>
			</div>
		</div>
	);
};

export default Footer;
