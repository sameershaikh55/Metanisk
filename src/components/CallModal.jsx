import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import annonces1 from "../assets/annonces1.svg";
import flag from "../assets/flag.svg";
import { ImCross } from "react-icons/im";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const CallModal = ({ callModal, setCallModal }) => {
	const handleClose = () => {
		setCallModal(false);
	};
	return (
		<div>
			<Dialog
				open={callModal}
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
					<div className="callModalBody">
						<div className="btnContainer d-flex justify-content-center align-items-center">
							<button className="mr-1">Français</button>
							<button className="mx-2">Sousou</button>
							<button className="mx-2">Poular</button>
							<button className="mx-2">Kpelle</button>
							<button className="ml-1">Malinke</button>
						</div>

						<h1 className="numberHead mt-5 py-5 text-center font-weight-bold">
							+224 666 66 66 66
						</h1>

						<div className="text-center my-5">
							<h1 className="font-weight-bold">Conseils de sécurité</h1>
							<div className="my-3">
								<h4 className="font-weight-bold m-0 mb-1">
									* Ne payez pas d'avance si vous n'êtes pas sûr du vendeur
								</h4>
								<h4 className="font-weight-bold m-0 mb-1">
									* Ne communiquez jamais vos informations personnelles
								</h4>
								<h4 className="font-weight-bold m-0 mb-1">
									* Ignorer les liens de paiement que la personne vous envoie
								</h4>
								<h4 className="font-weight-bold m-0 mb-1">
									* Rencontrez le dans un endroit public
								</h4>
							</div>
						</div>

						<div className="text-center mt-5">
							<button className="themeBtn h4 px-4 py-2">
								<img width="20%" src={flag} alt="flag" className="mr-2" />
								Signaler un abus
							</button>
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

export default CallModal;
