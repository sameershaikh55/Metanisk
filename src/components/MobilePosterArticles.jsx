import React from "react";
import { useHistory } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import poster1 from "../assets/poster1.svg";
import poster2 from "../assets/poster2.svg";
import poster3 from "../assets/poster3.svg";
import poster4 from "../assets/poster4.svg";
import selectTick from "../assets/selectTick.svg";
import location from "../assets/location.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const MobilePosterArticles = () => {
	let history = useHistory();

	return (
		<div>
			{/* HEADER START */}
			<div className="mobilMessageHeader">
				<div className="position-relative shadow bg-white pl-1 pr-4 pt-3 pb-1">
					<RiArrowLeftSLine
						className="position-absolute"
						onClick={() => history.goBack()}
						fontSize="3.8rem"
						color="#067AC2"
					/>
					<div className="text-center">
						<h2 className="font-weight-bold mt-3 mb-4">Details de l’annonce</h2>
					</div>
				</div>
			</div>
			<div className="container-fluid mt-5">
				<div className="row">
					<div className="col-12 px-3">
						<div className="bg-white borderRounded shadow p-3">
							<h4 className="themeColor font-weight-bold">
								<img src={poster1} alt="poster1" className="mr-2" />
								Ajouter les photos <small>(2 minimum)</small>
							</h4>
						</div>
					</div>
					<div className="col-12 px-3 mt-4">
						<div className="bg-white borderRounded shadow px-3 py-3">
							<h4 className="themeColor font-weight-bold">
								<img src={poster2} alt="poster2" className="mr-2" />
								Enregistrer la description audio
							</h4>
							<h1 className="text-center my-3">Recording</h1>
							<div
								style={{
									padding: "0.9rem 0rem 0.1rem 0rem",
								}}
								className="text-center themeBtn px-0 pl-3 "
							>
								<div className="w-100 posterLabelCheck">
									<label className="container">
										<input type="checkbox" />
										<span className="checkmark"></span>
										Utiliser la signature vocale
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 px-3 mt-4">
						<div className="bg-white borderRounded shadow p-3">
							<h4 className="themeColor font-weight-bold">
								<img src={poster3} alt="poster3" className="mr-2" />
								Infos
							</h4>
							<div className="row mt-4 inpContainerPosterMobile">
								<div className="col-12">
									<input
										className="w-100 pl-3 py-2 h4"
										type="text"
										placeholder="Nom de l’article"
									/>
								</div>
								<div className="col-6 mt-3">
									<input
										className="w-100 pl-3 py-2 h4"
										type="text"
										placeholder="Prix"
									/>
								</div>
								<div className="col-6 mt-4 negotiableLabelMobile">
									<label className="container themeColor font-weight-bold">
										<input type="checkbox" />
										<span className="checkmark"></span>
										Négotiable
									</label>
								</div>
								<div className="col-12 mt-3">
									<textarea
										name=""
										id=""
										rows="6"
										placeholder="Description (2500 charactères maximum)"
										className="w-100 pl-3 py-2 h4"
									></textarea>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 px-3 mt-4">
						<div className="bg-white borderRounded shadow p-3 ">
							<h4 className="themeColor font-weight-bold">
								<img src={poster4} alt="poster" /> Informations Suplémentaires
							</h4>
							<div className="d-flex flex-column">
								{[1, 1, 1, 1].map((prev, i) => {
									return (
										<div
											key={i}
											className="posterSelectContainer w-100 d-flex justify-content-between my-4"
										>
											<div className="posterInpContainer d-flex justify-content-between">
												<h4 className="mb-0 font-weight-bold">Etat</h4>
												<div className="selectContainer position-relative d-flex justify-content-end">
													<select className="font-weight-bold pb-1 font-weight-light">
														<option value="Electronique">Non endommagé</option>
														<option value="Electronique">Non endommagé</option>
														<option value="Electronique">Non endommagé</option>
														<option value="Electronique">Non endommagé</option>
													</select>
													<img
														src={selectTick}
														alt="selectTick"
														className="selectIcon"
													/>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					<div className="col-12 px-3 mt-4">
						<div className="bg-white borderRounded shadow p-3 ">
							<h4 className="themeColor font-weight-bold">
								<FaPhoneAlt color="#1B8ACC" className="mr-2" /> Contact
							</h4>
							<div className="my-4">
								<div className="negotiableLabel">
									<label className="container pl-5 font-weight-bold">
										<input type="checkbox" />
										<span className="checkmark"></span>
										+224 666 66 66 66
									</label>
								</div>
								<div className="negotiableLabel">
									<label className="container pl-5 font-weight-bold">
										<input type="checkbox" />
										<span className="checkmark"></span>
										+224 666 66 66 66
									</label>
								</div>
							</div>
							<div
								style={{
									padding: "0.9rem 0rem 0.1rem 0rem",
								}}
								className="text-center themeBtn px-0 pl-3"
							>
								<div className="posterLabelCheck">
									<label className="container">
										<input type="checkbox" />
										<span className="checkmark"></span>
										Utiliser la signature vocale
									</label>
								</div>
							</div>
						</div>
					</div>

					{/* EMPLACEMENT MAP START */}
					<div className="col-12 mt-5 px-3">
						<div className="bg-white shadow borderRounded border-gray py-4 px-4">
							<h2 className="d-flex align-items-center font-weight-bold themeColor">
								<img
									width="4%"
									src={location}
									alt="location"
									className="mr-2"
								/>
								Emplacement
							</h2>
							<h4 className="text-secondary mt-3 h3">Entrer l’emplacement</h4>
							<div>
								<iframe
									title="map"
									width="100%"
									height="260"
									frameBorder="0"
									scrolling="no"
									marginHeight="0"
									marginWidth="0"
									src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
								></iframe>
							</div>
						</div>
					</div>
					{/* EMPLACEMENT MAP END */}

					<div className="col-12 position-relative mb-5 mt-5">
						<button className="themeBtn w-100 h2">Continue</button>
						<IoIosArrowForward
							className="position-absolute"
							style={{ right: "5%", top: "16%" }}
							fontSize="2.5rem"
							color="#fff"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobilePosterArticles;
