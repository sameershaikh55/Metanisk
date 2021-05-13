import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const Connector = ({ openConnector, setOpenConnector }) => {
	const handleClose = () => {
		setOpenConnector(false);
	};
	return (
		<div>
			<Dialog
				open={openConnector}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<div className="container-fluid">
					<h1>Se connecter</h1>
					<div className="row"></div>
				</div>
			</Dialog>
		</div>
	);
};

export default Connector;
