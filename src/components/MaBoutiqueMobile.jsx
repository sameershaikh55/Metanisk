import React from "react";
import { FaCamera } from "react-icons/fa";
import userBg from "../assets/userBg.svg";
import placeholderPerson from "../assets/placeholderPerson.svg";
import { GrMap } from "react-icons/gr";
import state1 from "../assets/state1.svg";
import state2 from "../assets/state2.svg";
import state3 from "../assets/state3.svg";
import state4 from "../assets/state4.svg";
import addIcon from "../assets/addIcon.svg";
import { useHistory } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiPhone, BiSortDown } from "react-icons/bi";
import { FiEdit, FiFilter } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import annonces1 from "../assets/annonces1.svg";

const MaBoutiqueMobile = () => {
	let history = useHistory();

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
		<div className="mobilBoutiqueContainer">
			{/* PROFILE TITLE START */}
			<div className="userCard bg-white">
				<div className="userBg">
					<img width="100%" src={userBg} alt="userImage" />
					<span className="cameraDiv">
						<RiArrowLeftSLine
							onClick={() => history.goBack()}
							fontSize="3.8rem"
							color="#067AC2"
						/>
					</span>
					<span className="cameraDiv1">
						<button className="themeBtn px-4">Modifier les informations</button>
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

			{/* TWO BUTTONS START */}
			<div className="d-flex w-100 px-3 mt-4 mb-5">
				<button className="themeBtn w-100 px-0 mr-2 h3 m-0">
					<img src={addIcon} alt="addIcon" className="mr-1" /> Poster un article
				</button>
				<button className="themeBtn w-100 px-0 ml-2">
					<svg
						className="mr-2"
						width="22"
						height="20"
						viewBox="0 0 22 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21.5 18.1667V15.8334H6.33333V18.1667H21.5ZM21.5 11.1667V8.83341H6.33333V11.1667H21.5ZM6.33333 4.16675H21.5V1.83341H6.33333V4.16675ZM1.66667 1.83341V4.16675H4V1.83341H1.66667ZM0.5 1.83341C0.5 1.524 0.622916 1.22725 0.841709 1.00846C1.0605 0.789665 1.35725 0.666748 1.66667 0.666748H4C4.30942 0.666748 4.60616 0.789665 4.82496 1.00846C5.04375 1.22725 5.16667 1.524 5.16667 1.83341V4.16675C5.16667 4.47617 5.04375 4.77291 4.82496 4.9917C4.60616 5.2105 4.30942 5.33341 4 5.33341H1.66667C1.35725 5.33341 1.0605 5.2105 0.841709 4.9917C0.622916 4.77291 0.5 4.47617 0.5 4.16675V1.83341ZM1.66667 8.83341V11.1667H4V8.83341H1.66667ZM0.5 8.83341C0.5 8.52399 0.622916 8.22725 0.841709 8.00846C1.0605 7.78966 1.35725 7.66675 1.66667 7.66675H4C4.30942 7.66675 4.60616 7.78966 4.82496 8.00846C5.04375 8.22725 5.16667 8.52399 5.16667 8.83341V11.1667C5.16667 11.4762 5.04375 11.7729 4.82496 11.9917C4.60616 12.2105 4.30942 12.3334 4 12.3334H1.66667C1.35725 12.3334 1.0605 12.2105 0.841709 11.9917C0.622916 11.7729 0.5 11.4762 0.5 11.1667V8.83341ZM1.66667 15.8334V18.1667H4V15.8334H1.66667ZM0.5 15.8334C0.5 15.524 0.622916 15.2272 0.841709 15.0085C1.0605 14.7897 1.35725 14.6667 1.66667 14.6667H4C4.30942 14.6667 4.60616 14.7897 4.82496 15.0085C5.04375 15.2272 5.16667 15.524 5.16667 15.8334V18.1667C5.16667 18.4762 5.04375 18.7729 4.82496 18.9917C4.60616 19.2105 4.30942 19.3334 4 19.3334H1.66667C1.35725 19.3334 1.0605 19.2105 0.841709 18.9917C0.622916 18.7729 0.5 18.4762 0.5 18.1667V15.8334Z"
							fill="white"
						/>
					</svg>
					Mes articles
				</button>
			</div>
			{/* TWO BUTTONS END */}

			{/* STATES START */}
			<div className="mt-4">
				<div className="d-flex justify-content-between px-4">
					<h1 className="font-weight-bold">Statistiques</h1>
					<h4>Voir tout</h4>
				</div>
				<div className="stateMobileContainer">
					<div className="d-flex mr-5">
						{states.map((prev, i) => {
							const { img, num, desc, bg } = prev;
							return (
								<div
									style={{ background: bg }}
									className="statesCardMobile mx-3 d-flex flex-column justify-content-around text-white"
								>
									<img width="28%" src={img} alt="state" />
									<div className="textContainer">
										<h1 className="h1 font-weight-bolder text-center m-0">
											{num}
										</h1>
										<h6 className="h5 text-center">{desc}</h6>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{/* STATES END */}

			{/* TWO BUTTONS START */}
			<div className="px-3 my-5">
				<h2 className="font-weight-bold">Signature vocale de la boutique</h2>
				<div className="p-4 bg-white shadow borderRounded mt-2">
					<h1>Recording</h1>
				</div>
			</div>
			{/* TWO BUTTONS END */}

			<div className="my-5 px-3">
				<h2 className="font-weight-bold">Top Avis et Commentaires</h2>
				{[1, 1].map((prev, i) => {
					return (
						<div
							key={i}
							className="topAvisContainer mt-4 d-flex justify-content-between"
						>
							<div className="d-flex align-items-center">
								<img src={placeholderPerson} alt="person" />
								<h5 className="ml-4 mb-0 w-75 font-weight-bold">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod
								</h5>
							</div>
							<h6 className="m-0 themeColor pr-2 pt-2">12:00</h6>
						</div>
					);
				})}
			</div>

			<div className="container-fluid my-5">
				<h2 className="font-weight-bold">Top Articles</h2>
				<div className="row px-4 my-1">
					{[1, 1, 1, 1].map((prev, i) => {
						return (
							<div className="articles col-12 px-0 my-3 bg-white shadow-lg borderRounded">
								<div className="d-flex flex-column">
									<div className="d-flex justify-content-betweens">
										<div className="d-flex">
											<img
												className="productImg"
												src={annonces1}
												alt="annonces1"
											/>
											<div className="pl-3 pt-4">
												<h3 className="themeColor font-weight-bold">
													Chaussure Nike a vendre
												</h3>
												<h2 className="font-weight-bold">800 000 FG</h2>
											</div>
										</div>
										<div className="btnContainer d-flex flex-column">
											<button className="d-flex flex-column align-items-center justify-content-center">
												<span className="mb-1">
													<svg
														width="18"
														height="18"
														viewBox="0 0 36 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M13.9285 10.828L21.0714 18.828L31.2624 7.414L35.3571 12V0H24.6428L28.7374 4.586L21.0714 13.172L13.9285 5.172L0.166016 20.586L2.69102 23.414L13.9285 10.828Z"
															fill="white"
														/>
													</svg>
												</span>
												<span>Booster</span>
											</button>
											<button className="d-flex flex-column align-items-center justify-content-center">
												<FiEdit
													color="#1B8ACC"
													fontSize="2rem"
													className="mb-1"
												/>
												<span>Modifier</span>
											</button>
										</div>
									</div>
									<div className="bottomSection py-2 d-flex justify-content-around align-items-center">
										<div className="d-flex justify-content-center align-items-center">
											<AiOutlineEye fontSize="2rem" color="#fff" />
											<h4 className="m-0 text-white ml-2">1000</h4>
										</div>
										<div className="d-flex justify-content-center align-items-center">
											<BiPhone fontSize="2rem" color="#fff" className="mr-1" />
											<h4 className="m-0 ml-2 text-white">25</h4>
										</div>
										<div className="d-flex align-items-center justify-content-center">
											<div>
												<svg
													width="20"
													height="20"
													viewBox="0 0 25 25"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M21.6487 3.35156C21.5433 3.24662 21.4101 3.17396 21.2648 3.14213C21.1194 3.1103 20.9681 3.12062 20.8284 3.17187L3.6409 9.42188C3.49267 9.4781 3.36506 9.57809 3.275 9.70856C3.18495 9.83903 3.13672 9.99381 3.13672 10.1523C3.13672 10.3109 3.18495 10.4657 3.275 10.5961C3.36506 10.7266 3.49267 10.8266 3.6409 10.8828L11.1409 13.8828L14.1409 21.3828C14.1973 21.5245 14.2939 21.6466 14.4188 21.7341C14.5438 21.8216 14.6916 21.8705 14.844 21.875C15.0019 21.8718 15.1551 21.8208 15.2834 21.7287C15.4117 21.6367 15.5091 21.5079 15.5628 21.3594L21.8128 4.17187C21.866 4.03365 21.8788 3.88315 21.8498 3.73791C21.8207 3.59267 21.751 3.45868 21.6487 3.35156ZM14.844 18.9063L12.6643 13.4375L16.4065 9.69531L15.305 8.59375L11.5315 12.3672L6.09403 10.1562L19.7893 5.21094L14.844 18.9063Z"
														fill="white"
													/>
												</svg>
											</div>
											<h4 className="m-0 ml-2 text-white">25</h4>
										</div>
										<div className="d-flex align-items-center justify-content-center">
											<div>
												<svg
													width="20"
													height="20"
													viewBox="0 0 25 25"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M16.2565 17.5347C16.1046 17.5368 15.9564 17.489 15.8343 17.3987C15.7122 17.3084 15.6231 17.1807 15.5805 17.0349C15.538 16.8892 15.5444 16.7335 15.5987 16.5918C15.6531 16.45 15.7524 16.33 15.8815 16.25C16.5134 15.8556 17.0323 15.3042 17.3878 14.6496C17.7433 13.995 17.9231 13.2595 17.9098 12.5147C17.8965 11.7699 17.6906 11.0413 17.312 10.3998C16.9334 9.7583 16.3951 9.22579 15.7495 8.85417C15.6665 8.81076 15.5932 8.751 15.5339 8.67851C15.4746 8.60601 15.4305 8.52227 15.4045 8.43232C15.3784 8.34237 15.3707 8.24807 15.382 8.15509C15.3933 8.06212 15.4233 7.97239 15.4702 7.8913C15.517 7.81021 15.5798 7.73945 15.6548 7.68326C15.7297 7.62706 15.8152 7.58661 15.9062 7.56433C15.9972 7.54204 16.0917 7.53839 16.1841 7.5536C16.2765 7.5688 16.3649 7.60253 16.444 7.65278C17.2939 8.14562 18.002 8.84974 18.4997 9.69685C18.9974 10.544 19.2678 11.5053 19.2845 12.4877C19.3013 13.47 19.0639 14.44 18.5955 15.3036C18.127 16.1672 17.4432 16.8951 16.6106 17.4167C16.5056 17.4876 16.3831 17.5284 16.2565 17.5347Z"
														fill="white"
													/>
													<path
														d="M17.7915 21.6528C17.636 21.6519 17.4853 21.5988 17.3636 21.502C17.2418 21.4053 17.1561 21.2705 17.1201 21.1192C17.084 20.9679 17.0998 20.8089 17.1649 20.6677C17.23 20.5265 17.3406 20.4112 17.479 20.3403C18.9358 19.6225 20.1608 18.5085 21.0133 17.1263C21.8659 15.744 22.3116 14.1495 22.2993 12.5255C22.287 10.9015 21.8171 9.31384 20.9437 7.94469C20.0702 6.57554 18.8285 5.48034 17.3609 4.78472C17.2763 4.74667 17.2001 4.69203 17.1369 4.62403C17.0737 4.55604 17.0248 4.47606 16.9931 4.38884C16.9613 4.30162 16.9474 4.20891 16.9521 4.11621C16.9568 4.0235 16.98 3.93268 17.0204 3.84911C17.0608 3.76553 17.1175 3.69091 17.1872 3.62964C17.257 3.56837 17.3383 3.5217 17.4263 3.49239C17.5144 3.46308 17.6075 3.45173 17.7 3.459C17.7925 3.46627 17.8827 3.49202 17.9651 3.53472C19.6697 4.33945 21.113 5.60836 22.1294 7.19589C23.1458 8.78342 23.6941 10.6253 23.7115 12.5102C23.7289 14.3952 23.2147 16.2468 22.2277 17.8529C21.2408 19.4589 19.8212 20.7542 18.1318 21.5903C18.0254 21.6395 17.9084 21.661 17.7915 21.6528Z"
														fill="white"
													/>
													<path
														d="M12.4998 22.2639C12.3165 22.264 12.135 22.2279 11.9658 22.1576C11.7965 22.0873 11.6429 21.9841 11.5137 21.8542L6.34701 16.6667H2.77756C2.4092 16.6667 2.05594 16.5203 1.79547 16.2599C1.535 15.9994 1.38867 15.6461 1.38867 15.2778V9.72222C1.38867 9.35386 1.535 9.00059 1.79547 8.74012C2.05594 8.47966 2.4092 8.33333 2.77756 8.33333H6.40256L11.4928 3.20138C11.6846 2.99948 11.9327 2.8599 12.2048 2.80075C12.4769 2.7416 12.7606 2.76562 13.0188 2.86969C13.2771 2.97376 13.4982 3.15307 13.6533 3.38435C13.8084 3.61562 13.8904 3.88819 13.8887 4.16666V20.8333C13.8887 21.1087 13.8068 21.3779 13.6535 21.6066C13.5002 21.8354 13.2823 22.0134 13.0276 22.1181C12.8631 22.2012 12.6836 22.2508 12.4998 22.2639ZM2.77756 9.72222V15.2778H6.63867C6.73055 15.2782 6.82144 15.2968 6.90608 15.3325C6.99072 15.3683 7.06741 15.4205 7.13173 15.4861L12.4998 20.875V4.16666L7.18728 9.51388C7.12297 9.5795 7.04627 9.6317 6.96163 9.66746C6.877 9.70322 6.78611 9.72184 6.69423 9.72222H2.77756Z"
														fill="white"
													/>
												</svg>
											</div>
											<h4 className="m-0 ml-2 text-white">25</h4>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MaBoutiqueMobile;
