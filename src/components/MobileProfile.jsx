import React from "react";
import { FaCamera } from "react-icons/fa";
import userBg from "../assets/userBg.svg";
import placeholderPerson from "../assets/placeholderPerson.svg";
import { GrMap } from "react-icons/gr";
import state1 from "../assets/state1.svg";
import state2 from "../assets/state2.svg";
import state3 from "../assets/state3.svg";
import state4 from "../assets/state4.svg";

const MobileProfile = () => {
	const states = [
		{
			img: state1,
			num: 50,
			desc: "Articles Publiés",
			bg: "linear-gradient(90deg, #4DBCEF 0%, #1B8ACC 98.04%), #FFFFFF",
		},
		{
			img: state2,
			num: 100,
			desc: "Abonnés",
			bg: " linear-gradient(270deg, #E66F01 0%, #FF9501 100%), #C4C4C4",
		},
		{
			img: state3,
			num: 50,
			desc: "Vues",
			bg: "linear-gradient(270deg, #4BC0CF 6.67%, #56E0E0 100%), #C4C4C4",
		},
		{
			img: state4,
			num: 150,
			desc: "Commentaires",
			bg: "linear-gradient(90deg, #FFD966 0%, #E9AF00 100%), #C4C4C4",
		},
	];
	return (
		<div className="mobilProfilContainer">
			{/* PROFILE TITLE START */}
			<div className="userCard bg-white">
				<div className="userBg">
					<img width="100%" src={userBg} alt="userImage" />
					<span className="cameraDiv">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.75 5H16.1875C15.875 3.5625 14.625 2.5 13.125 2.5C11.625 2.5 10.375 3.5625 10.0625 5H1.25V6.25H10.0625C10.375 7.6875 11.625 8.75 13.125 8.75C14.625 8.75 15.875 7.6875 16.1875 6.25H18.75V5ZM13.125 7.5C12.0625 7.5 11.25 6.6875 11.25 5.625C11.25 4.5625 12.0625 3.75 13.125 3.75C14.1875 3.75 15 4.5625 15 5.625C15 6.6875 14.1875 7.5 13.125 7.5Z"
								fill="#1B8ACC"
							/>
							<path
								d="M1.25 15H3.8125C4.125 16.4375 5.375 17.5 6.875 17.5C8.375 17.5 9.625 16.4375 9.9375 15H18.75V13.75H9.9375C9.625 12.3125 8.375 11.25 6.875 11.25C5.375 11.25 4.125 12.3125 3.8125 13.75H1.25V15ZM6.875 12.5C7.9375 12.5 8.75 13.3125 8.75 14.375C8.75 15.4375 7.9375 16.25 6.875 16.25C5.8125 16.25 5 15.4375 5 14.375C5 13.3125 5.8125 12.5 6.875 12.5Z"
								fill="#1B8ACC"
							/>
						</svg>
					</span>
					<span className="cameraDiv1">
						<FaCamera />
					</span>
					<div className="userImage">
						<img src={placeholderPerson} alt="placeholder" />
						<span className="cameraDiv2">
							<FaCamera />
						</span>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div className="py-2 pl-5 ml-5">
						<h1 className="themeColor font-weight-bold">Ernest Peguita</h1>
						<h4 className="d-flex align-items-center px-2">
							<GrMap className="mr-2" /> Conakry, Bambetto Marché
						</h4>
					</div>
				</div>
			</div>
			{/* PROFILE TITLE END */}

			{/* STATES START */}
			<div>
				<div className="d-flex justify-content-between">
					<h1>Statistiques</h1>
					<h4>Voir tout</h4>
				</div>
				<div className="statesContainer d-flex mt-5">
					{states.map((prev, i) => {
						const { img, num, desc, bg } = prev;
						return (
							<div
								style={{ background: bg }}
								className="statesCardMobile mx-3 d-flex flex-column justify-content-around text-white"
							>
								<img width="28%" src={img} alt="state" />
								<div>
									<h1 className="h1 font-weight-bolder text-center   m-0">
										{num}
									</h1>
									<h6 className="h5">{desc}</h6>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			{/* STATES END */}
		</div>
	);
};

export default MobileProfile;
