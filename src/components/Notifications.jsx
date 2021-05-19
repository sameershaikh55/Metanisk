import React from "react";
import placeholderPerson from "../assets/placeholderPerson.svg";
import annonces3 from "../assets/annonces3.svg";
import bellIcon from "../assets/bellIcon.svg";
import { IoPersonAddOutline } from "react-icons/io5";
import { FiMessageSquare, FiSettings } from "react-icons/fi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useHistory } from "react-router-dom";


const Notifications = ({mobile}) => {
	let history = useHistory();

	const data = [
		{
			img: placeholderPerson,
			icons: <IoPersonAddOutline />,
		},
		{
			img: placeholderPerson,
			icons: <IoPersonAddOutline />,
		},
		{
			img: annonces3,
			img2: placeholderPerson,
			icons: <FiMessageSquare />,
		},
		{
			img: bellIcon,
			icons: <FiSettings />,
		},
		{
			img: placeholderPerson,
			icons: <IoPersonAddOutline />,
		},
		{
			img: bellIcon,
			icons: <FiSettings />,
		},
	];
	return (
		<>
	{!mobile && 
		<div className="container-fluid px-3 my-4">
			<div>
			<h1 className="font-weight-bold">Mes Annonces</h1>
		</div>
			<div className="row px-4">
				{data.map((prev, i) => {
					return (
						<div
							key={i}
							className="col-12 notificationContainer borderRounded position-relative shadow bg-white px-3 py-3 my-2"
						>
							<div className="d-flex align-items-center">
								<div className="position-relative mr-3">
									<div className="imgContainer">
										<img src={prev.img} alt="" />
									</div>
									<div className="img2Container">
										{prev.img2 && <img src={prev.img2} alt="" />}
									</div>
								</div>
								<div>
									<h3 className="m-0 mb-1">Vous avez un nouvel abonné</h3>
									<h4 className="m-0 mb-1 text-secondary">
										Ali Camara s’est abonné à votre boutique
									</h4>
									<h5 className="themeColor font-weight-bold">
										Aujourd’hui - 12:00
									</h5>
								</div>
							</div>
							<div className="notificationIcon">{prev.icons}</div>
						</div>
					);
				})}
			</div>
		</div>
||
		<div>
			<div className="d-flex justify-content-between align-items-center position-relative shadow bg-white pr-3 py-3">
				<RiArrowLeftSLine
					onClick={() => history.goBack()}
					fontSize="3.8rem"
					color="#067AC2"
				/>
				<div className="heading">
					<h2 className="font-weight-bold text-center mt-3">Messages</h2>	
				</div>
				<div>
					<BsThreeDotsVertical fontSize="2.4rem" />
				</div>
			</div>

			<div className="container-fluid mt-4">
				<div className="row px-3">
				{data.map((prev, i) => {
					return (
						<div
							key={i}
							className="col-12 notificationContainer borderRounded position-relative shadow bg-white px-3 py-3 my-2"
						>
							<div className="d-flex align-items-center">
								<div className="position-relative mr-3">
									<div className="imgContainer">
										<img src={prev.img} alt="" />
									</div>
									<div className="img2Container">
										{prev.img2 && <img src={prev.img2} alt="" />}	
									</div>
								</div>
								<div>
									<h3 className="m-0 mb-1">Vous avez un nouvel abonné</h3>
									<h4 className="m-0 mb-1 text-secondary">
										Ali Camara s’est abonné à votre boutique
									</h4>
									<h5 className="themeColor font-weight-bold">
										Aujourd’hui - 12:00
									</h5>
								</div>
							</div>
							<div className="notificationIcon">{prev.icons}</div>
						</div>
					);
				})}
			</div>
</div>
		</div>}
		</>
	);
};

export default Notifications;
