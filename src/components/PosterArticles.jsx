import React from "react";
import poster1 from "../assets/poster1.svg";
import poster2 from "../assets/poster2.svg";
import poster3 from "../assets/poster3.svg";
import poster4 from "../assets/poster4.svg";
import location from "../assets/location.svg";
import selectTick from "../assets/selectTick.svg";
import { BiChevronRight } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const PosterArticles = () => {
	let history = useHistory();

	return (
		<>
			<h1 className="pl-0">Poster un article</h1>
			<div className="container-fluid">
				<div className="row">
					{/* SECTION 1 START */}
					<div className="col-8 px-0 pr-4">
						<div className="bg-white borderRounded shadow p-3">
							<h4 className="themeColor font-weight-bold">
								<img src={poster1} alt="poster1" className="mr-2" />
								Ajouter les photos <small>(2 minimum)</small>
							</h4>
						</div>
					</div>
					<div className="col-4 bg-white borderRounded shadow p-3">
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
								<label class="container">
									<input type="checkbox" />
									<span class="checkmark"></span>
									Utiliser la signature vocale
								</label>
							</div>
						</div>
					</div>
					{/* SECTION 1 END */}

					{/* SECTION 2 START */}
					<div className="col-12 px-0 pt-4">
						<div className="bg-white borderRounded shadow p-3 ">
							<h4 className="themeColor font-weight-bold">
								<img src={poster3} alt="poster3" className="mr-2" />
								Infos
							</h4>
							<div className="row mt-4 inpContainerPoster">
								<div className="col-5">
									<input
										className="w-100 pl-3 py-2 h4"
										type="text"
										placeholder="Nom de l’article"
									/>
								</div>
								<div className="col-5">
									<input
										className="w-100 pl-3 py-2 h4"
										type="text"
										placeholder="Prix"
									/>
								</div>
								<div className="col-2 negotiableLabel">
									<label className="container themeColor font-weight-bold">
										<input type="checkbox" />
										<span class="checkmark"></span>
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
					{/* SECTION 2 END */}

					{/* SECTION 3 START */}
					<div className="col-12 px-0 pt-4">
						<div className="bg-white borderRounded shadow p-3 ">
							<h4 className="themeColor font-weight-bold">
								<img src={poster4} alt="poster" /> Informations Suplémentaires
							</h4>
							<div className="d-flex justify-content-between flex-wrap">
								{[1, 1, 1, 1].map((prev, i) => {
									return (
										<div className="posterSelectContainer d-flex justify-content-between my-4">
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
					{/* SECTION 3 END */}

					{/* SECTION 4 START */}
					<div className="col-12 px-0 pt-4">
						<div className="bg-white borderRounded shadow p-3 ">
							<h4 className="themeColor font-weight-bold">Contact</h4>
							<div className="my-4">
								<div className="negotiableLabel">
									<label className="container pl-5 font-weight-bold">
										<input type="checkbox" />
										<span class="checkmark"></span>
										+224 666 66 66 66
									</label>
								</div>
								<div className="negotiableLabel">
									<label className="container pl-5 font-weight-bold">
										<input type="checkbox" />
										<span class="checkmark"></span>
										+224 666 66 66 66
									</label>
								</div>
							</div>
							<div
								style={{
									padding: "0.9rem 0rem 0.1rem 0rem",
									width: "220px",
								}}
								className="text-center themeBtn px-0 pl-3 "
							>
								<div className="posterLabelCheck">
									<label class="container">
										<input type="checkbox" />
										<span class="checkmark"></span>
										Utiliser la signature vocale
									</label>
								</div>
							</div>
						</div>
					</div>
					{/* SECTION 4 END */}

					{/* SECTION 5 START */}
					<div className="col-12 bg-white shadow borderRounded mt-5 p-3">
						<h2 className="d-flex align-items-center font-weight-bold themeColor">
							<img width="2%" src={location} alt="location" className="mr-2" />
							Emplacement
						</h2>
						<h4 className="text-secondary">Entrer l’emplacement</h4>
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
					{/* SECTION 5 END */}

					{/* SECTION 6 START */}
					<div className="col-12 px-0 text-right mt-4">
						<button
							onClick={() => history.push("/articles2")}
							className="themeBtn"
						>
							Continuer <BiChevronRight fontSize="2.2rem" />
						</button>
					</div>
					{/* SECTION 6 END */}
				</div>
			</div>
		</>
	);
};

export default PosterArticles;
