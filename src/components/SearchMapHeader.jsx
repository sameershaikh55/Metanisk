import React from "react";
import { BsFillMicFill, BsSearch } from "react-icons/bs";
import { HiOutlineFilter } from "react-icons/hi";
import cross from "../assets/cross.svg";
import heart from "../assets/heartIcon.svg";

const SearchMapHeader = () => {
	return (
		<>
			<div className="searchHeaderContainer bg-white shadow d-flex flex-column py-3 pb-4">
				<div className="firstRow d-flex px-4">
					<div className="mapIconContainer d-flex flex-column justify-content-center align-items-center mr-4">
						<div>
							<svg
								width="19"
								height="26"
								viewBox="0 0 19 26"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect x="0.5" y="18.5" width="7" height="7" stroke="#067AC2" />
								<rect x="0.5" y="9.5" width="7" height="7" stroke="#067AC2" />
								<rect x="0.5" y="0.5" width="7" height="7" stroke="#067AC2" />
								<rect x="11.5" y="18.5" width="7" height="7" stroke="#067AC2" />
								<rect x="11.5" y="9.5" width="7" height="7" stroke="#067AC2" />
								<rect x="11.5" y="0.5" width="7" height="7" stroke="#067AC2" />
							</svg>
						</div>
						<h5 className="mt-1">Mode Liste</h5>
					</div>
					<div className="inpContainer d-flex justify-content-center mx-2 mx-lg-3">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<BsSearch fontSize="20px" />
								</span>
							</div>
							<div className="heartIcon">
								<img width="80%" src={heart} alt="heart" />
							</div>
							<input
								type="text"
								className="form-control"
								aria-label="Amount (to the nearest dollar)"
								placeholder="Chercher"
							/>
							<div className="input-group-append">
								<span className="input-group-text px-3">
									<BsFillMicFill fontSize="20px" color="white" />
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="filterBtns d-flex justify-content-between mt-4 px-4">
					<button className="themeBtn p-0">
						<HiOutlineFilter fontSize="2rem" className="mr-2" />
						Filtre
					</button>
					<div className="searchTagsMobile d-flex ml-4">
						<div className="position-relative d-flex justify-content-center align-items-center bg-white shadow mr-4 pointer">
							Prix
							<img width="15%" src={cross} alt="cross" />
						</div>
						<div className="position-relative d-flex justify-content-center align-items-center bg-white shadow mr-4 pointer">
							Sous
							<img width="15%" src={cross} alt="cross" />
						</div>
						<div className="position-relative d-flex justify-content-center align-items-center bg-white shadow mr-4 pointer">
							Condition
							<img width="16%" src={cross} alt="cross" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchMapHeader;
