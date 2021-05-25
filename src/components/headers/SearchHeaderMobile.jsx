import React from "react";
import { BsSearch } from "react-icons/bs";
import { HiOutlineFilter } from "react-icons/hi";
import { RiMicLine } from "react-icons/ri";
import cross from "../../assets/cross.svg";
import heart from "../../assets/heartIcon.svg";

const SearchHeaderMobile = () => {
	return (
		<>
			<div className="searchHeaderContainer bg-white shadow d-flex flex-column py-3 pb-4">
				<div className="firstRow d-flex px-4">
					<div className="mapIconContainer d-flex flex-column justify-content-center align-items-center mr-4">
						<div>
							<svg
								width="32"
								height="25"
								viewBox="0 0 35 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7.88712 27.936C7.89481 27.9413 7.90505 27.9387 7.91273 27.9439C7.97319 27.9784 8.04079 27.9976 8.10993 27.9999C8.14801 27.9998 8.1859 27.9945 8.22261 27.9842L17.5002 25.3889L26.7777 27.9842C26.8144 27.9945 26.8523 27.9998 26.8904 27.9999C26.9594 27.9978 27.0269 27.9782 27.0868 27.943C27.0953 27.9387 27.1047 27.9404 27.1124 27.9352L34.7953 23.1227C34.8747 23.0727 34.9359 22.9976 34.9698 22.9086C35.0037 22.8197 35.0084 22.7219 34.9831 22.63L30.7285 7.31753C30.7111 7.25376 30.6797 7.19488 30.6368 7.14535C30.594 7.09582 30.5406 7.05694 30.4809 7.03165C30.4212 7.00636 30.3567 6.99532 30.2922 6.99937C30.2277 7.00342 30.165 7.02245 30.1087 7.05503L25.8729 9.49103C25.7801 9.55106 25.7134 9.64533 25.6865 9.75435C25.6596 9.86338 25.6747 9.97882 25.7285 10.0768C25.7823 10.1748 25.8708 10.2478 25.9757 10.2808C26.0806 10.3138 26.1938 10.3042 26.292 10.254L30.0558 8.0884L34.074 22.5487L27.2319 26.8353L25.6065 13.5082C25.5925 13.3929 25.5344 13.2881 25.445 13.2169C25.3555 13.1456 25.2422 13.1136 25.1297 13.128C25.0173 13.1424 24.9151 13.2019 24.8455 13.2936C24.776 13.3852 24.7448 13.5014 24.7588 13.6167L26.3868 26.9683L17.927 24.6014V22.2127C17.927 22.0966 17.882 21.9853 17.802 21.9033C17.7219 21.8212 17.6134 21.7752 17.5002 21.7752C17.387 21.7752 17.2784 21.8212 17.1984 21.9033C17.1183 21.9853 17.0733 22.0966 17.0733 22.2127V24.6014L8.61273 26.9683L10.2407 13.6167C10.2476 13.5596 10.2435 13.5017 10.2287 13.4463C10.2138 13.3908 10.1884 13.339 10.1539 13.2936C10.1195 13.2482 10.0767 13.2102 10.0279 13.1818C9.97915 13.1534 9.9254 13.1351 9.86974 13.128C9.81409 13.1208 9.7576 13.125 9.70352 13.1403C9.64944 13.1555 9.59881 13.1815 9.55454 13.2169C9.51027 13.2522 9.47322 13.2961 9.44549 13.346C9.41777 13.396 9.39993 13.4511 9.39298 13.5082L7.76846 26.8353L0.92639 22.5495L4.94456 8.09015L8.70834 10.2558C8.80652 10.306 8.91976 10.3155 9.02463 10.2826C9.12951 10.2496 9.21802 10.1765 9.27184 10.0785C9.32567 9.98057 9.3407 9.86513 9.31383 9.7561C9.28697 9.64708 9.22025 9.55281 9.12749 9.49278L4.89078 7.0559C4.83466 7.02297 4.77193 7.00365 4.7074 6.99942C4.64287 6.99519 4.57825 7.00617 4.5185 7.03151C4.45875 7.05685 4.40545 7.09589 4.3627 7.14562C4.31995 7.19535 4.28888 7.25446 4.27188 7.3184L0.0172437 22.6309C-0.00848935 22.7228 -0.00404576 22.8207 0.0298901 22.9098C0.063826 22.9988 0.125372 23.0739 0.205049 23.1235L7.88712 27.936Z"
									fill="#067AC2"
								/>
								<path
									d="M17.2106 20.447C17.289 20.5211 17.3916 20.5625 17.4982 20.563C17.6049 20.5635 17.7078 20.5231 17.7868 20.4496C18.0711 20.1845 24.7561 13.8967 24.7561 7.4375C24.7561 3.26637 21.5694 0 17.5 0C13.4306 0 10.2439 3.26637 10.2439 7.4375C10.2439 13.7847 16.9263 20.1775 17.2106 20.447ZM17.5 0.875C21.1494 0.875 23.9024 3.696 23.9024 7.4375C23.9024 12.7724 18.7865 18.2324 17.5026 19.5186C16.2212 18.2175 11.0976 12.6858 11.0976 7.4375C11.0976 3.696 13.8506 0.875 17.5 0.875Z"
									fill="#067AC2"
								/>
								<path
									d="M21.3416 7.4375C21.3416 5.26663 19.6181 3.5 17.5002 3.5C15.3822 3.5 13.6587 5.26663 13.6587 7.4375C13.6587 9.60838 15.3822 11.375 17.5002 11.375C19.6181 11.375 21.3416 9.60838 21.3416 7.4375ZM17.5002 10.5C15.8526 10.5 14.5123 9.12625 14.5123 7.4375C14.5123 5.74875 15.8526 4.375 17.5002 4.375C19.1477 4.375 20.488 5.74875 20.488 7.4375C20.488 9.12625 19.1477 10.5 17.5002 10.5Z"
									fill="#067AC2"
								/>
							</svg>
						</div>
						<h5 className="mt-1">Mode Carte</h5>
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
									<RiMicLine fontSize="3rem" color="white" />
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
						<div className="position-relative d-flex justify-content-center align-items-center bg-white shadow mr-4 pointer border">
							Prix
							<img width="15%" src={cross} alt="cross" />
						</div>
						<div className="position-relative d-flex justify-content-center align-items-center bg-white shadow mr-4 pointer border">
							Sous
							<img width="15%" src={cross} alt="cross" />
						</div>
						<div className="position-relative d-flex justify-content-center align-items-center bg-white shadow mr-4 pointer border">
							Condition
							<img width="16%" src={cross} alt="cross" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchHeaderMobile;
