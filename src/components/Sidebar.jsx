import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import hamburger from "../assets/hamburger.svg";

// IMPORTING REACT icons
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const useStyles = makeStyles({
	list: {
		width: 320,
	},
	fullList: {
		width: "auto",
	},
});

function Sidebar() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list)}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ImCross className="crossISidebar" style={{ fontSize: "4.5rem" }} />
				<ListItem button>
					<ListItemText>About</ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemText>Experience</ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemText>My Projects</ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemText>Contact</ListItemText>
				</ListItem>
			</List>
		</div>
	);

	return (
		<div>
			{["left"].map((anchor) => (
				<React.Fragment key={anchor}>
					<img
						src={hamburger}
						alt="hamburger"
						onClick={toggleDrawer(anchor, true)}
					/>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}

export default Sidebar;
