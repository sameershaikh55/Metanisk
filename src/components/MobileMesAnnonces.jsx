import React from "react";
import { BiFilterAlt, BiSortDown } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import annonces1 from "../assets/annonces1.webp";

const MobileMesAnnonces = () => {
	let history = useHistory();

	return (
		<div className="mesContainer">
			{/* HEADER START */}
			<div className="position-relative shadow bg-white pl-2 py-3">
				<RiArrowLeftSLine
					className="position-absolute"
					onClick={() => history.goBack()}
					fontSize="3.8rem"
					color="#067AC2"
				/>
				<div>
					<h2 className="font-weight-bold text-center mt-3">Mes Annonces</h2>
				</div>
				<div className="d-flex mt-3 px-3">
					<button className="themeBtn px-3 mr-3">
						<BiFilterAlt fontSize="2.2rem" />
					</button>
					<div className="inpContainer">
						<input type="text" placeholder="Clossure Nike" />
						<GoSearch className="searchIcon" color="#525252" />
					</div>
					<button className="themeBtn px-3 ml-3">
						<BiSortDown fontSize="2.2rem" />
					</button>
				</div>
			</div>

			<div className="container-fluid my-3">
				<div className="row px-4 my-1">
					{[1, 1, 1, 1].map((prev, i) => {
						return (
							<div
								key={i}
								className="articles col-12 px-0 my-3 bg-white shadow-lg borderRounded"
							>
								<div className="d-flex flex-column">
									<div className="d-flex justify-content-betweens">
										<div className="topDiv1 d-flex">
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

export default MobileMesAnnonces;
