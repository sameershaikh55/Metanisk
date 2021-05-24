import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import hamburger from "../../assets/hamburger.svg";
import person from "../../assets/placeholderPerson.svg";
import addIcon from "../../assets/addIcon.svg";
import {
	AiOutlineUser,
	AiOutlineStar,
	AiOutlineShop,
	AiOutlineContacts,
} from "react-icons/ai";
import { BiMessageDetail, BiBell, BiSliderAlt } from "react-icons/bi";
import { MdViewDay } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Sidebar() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
	});

	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
			});
		}
		// Add event listener
		window.addEventListener("resize", handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount

	const useStyles = makeStyles({
		list: {
			width: (windowSize.width < 325 && 240) || 300,
		},
		fullList: {
			width: "auto",
		},
	});

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
		<>
			<div
				className={clsx(classes.list)}
				role="presentation"
				onClick={toggleDrawer(anchor, false)}
				onKeyDown={toggleDrawer(anchor, false)}
			>
				{/* SIDEBAR CONTENT START */}
				<div className="sidebarHeadContainer">
					<img className="personImg" src={person} alt="person" />
					<h2 className="mt-3 text-white">Ernest Peguita</h2>
					<h4 className="text-white">Sur Makiti+ depuis Avril 2020</h4>
				</div>
				{/* BODY START */}
				<div className="sidebarBodyContainer d-flex justify-content-between flex-column">
					<button className="themeBtn px-0 d-flex justify-content-center align-items-center w-100 py-3 h3 m-0">
						<img width="14%" src={addIcon} alt="addIcon" className="mr-3" />
						Poster une annonce
					</button>
					<div className="userDDLSidebar mt-5">
						<ul className="list-unstyled mb-0">
							<NavLink activeClassName="active" to="/profile">
								<li className="d-flex align-items-center">
									<AiOutlineUser className="mr-4 icon" />
									<div className="DDlName">Profile</div>
								</li>
							</NavLink>
							<NavLink activeClassName="active" to="/message">
								<li className="d-flex align-items-center my-5">
									<BiMessageDetail className="mr-4 icon" />
									<div className="DDlName">Messages</div>
								</li>
							</NavLink>
							<NavLink activeClassName="active" to="/favoris">
								<li className="d-flex align-items-center my-5">
									<AiOutlineStar className="mr-4 icon" />
									<div className="DDlName">Favoris</div>
								</li>
							</NavLink>
							<NavLink activeClassName="active" to="/notifications">
								<li className="d-flex align-items-center my-5">
									<BiBell className="mr-4 icon" />
									<div className="DDlName">Notifications</div>
								</li>
							</NavLink>
							<NavLink activeClassName="active" to="/mesAnnonces">
								<li className="d-flex align-items-center my-5">
									<MdViewDay className="mr-4 icon" />
									<div className="DDlName">Mes Annonces</div>
								</li>
							</NavLink>
							<NavLink activeClassName="active" to="/maBoutique">
								<li className="d-flex align-items-center my-5">
									<AiOutlineShop className="mr-4 icon" />
									<div className="DDlName">Ma Boutique</div>
								</li>
							</NavLink>
							<li className="d-flex align-items-center my-5">
								<BiSliderAlt className="mr-4 icon" />
								<div className="DDlName">Paramètres</div>
							</li>
							<li className="d-flex align-items-center my-5">
								<AiOutlineContacts className="mr-4 icon" />
								<div className="DDlName">Contact</div>
							</li>
						</ul>
					</div>
					{/* BODY END */}

					{/* FOOTER START */}
					<div className="sidebarFooter d-flex">
						<div>
							<svg
								width="14"
								height="14"
								viewBox="0 0 10 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5 4.375C5.08288 4.375 5.16237 4.40792 5.22097 4.46653C5.27958 4.52513 5.3125 4.60462 5.3125 4.6875V6.5625C5.3125 6.64538 5.27958 6.72487 5.22097 6.78347C5.16237 6.84208 5.08288 6.875 5 6.875C4.91712 6.875 4.83763 6.84208 4.77903 6.78347C4.72042 6.72487 4.6875 6.64538 4.6875 6.5625V4.6875C4.6875 4.60462 4.72042 4.52513 4.77903 4.46653C4.83763 4.40792 4.91712 4.375 5 4.375Z"
									fill="black"
								/>
								<path
									d="M4.99999 3.90625C5.06154 3.90625 5.1225 3.89413 5.17937 3.87057C5.23624 3.84701 5.28791 3.81248 5.33144 3.76896C5.37497 3.72543 5.4095 3.67375 5.43305 3.61688C5.45661 3.56001 5.46874 3.49906 5.46874 3.4375C5.46874 3.37594 5.45661 3.31499 5.43305 3.25812C5.4095 3.20125 5.37497 3.14957 5.33144 3.10604C5.28791 3.06252 5.23624 3.02799 5.17937 3.00443C5.1225 2.98087 5.06154 2.96875 4.99999 2.96875C4.87583 2.96875 4.75676 3.01807 4.66897 3.10586C4.58118 3.19365 4.53186 3.31272 4.53186 3.43688C4.53186 3.56103 4.58118 3.6801 4.66897 3.76789C4.75676 3.85568 4.87583 3.905 4.99999 3.905V3.90625Z"
									fill="black"
								/>
								<path
									d="M1.25 5C1.25 4.50754 1.347 4.01991 1.53545 3.56494C1.72391 3.10997 2.00013 2.69657 2.34835 2.34835C2.69657 2.00013 3.10997 1.72391 3.56494 1.53545C4.01991 1.347 4.50754 1.25 5 1.25C5.49246 1.25 5.98009 1.347 6.43506 1.53545C6.89003 1.72391 7.30343 2.00013 7.65165 2.34835C7.99987 2.69657 8.27609 3.10997 8.46455 3.56494C8.653 4.01991 8.75 4.50754 8.75 5C8.75 5.99456 8.35491 6.94839 7.65165 7.65165C6.94839 8.35491 5.99456 8.75 5 8.75C4.00544 8.75 3.05161 8.35491 2.34835 7.65165C1.64509 6.94839 1.25 5.99456 1.25 5ZM5 1.875C4.1712 1.875 3.37634 2.20424 2.79029 2.79029C2.20424 3.37634 1.875 4.1712 1.875 5C1.875 5.8288 2.20424 6.62366 2.79029 7.20971C3.37634 7.79576 4.1712 8.125 5 8.125C5.8288 8.125 6.62366 7.79576 7.20971 7.20971C7.79576 6.62366 8.125 5.8288 8.125 5C8.125 4.1712 7.79576 3.37634 7.20971 2.79029C6.62366 2.20424 5.8288 1.875 5 1.875Z"
									fill="black"
								/>
							</svg>
						</div>
						<div className="h2">A propos de Makitiplus</div>
					</div>
					{/* FOOTER END */}
				</div>
				{/* SIDEBAR CONTENT END */}
			</div>
		</>
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
