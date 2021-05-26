import React from "react";
import MainHeader from "../components/headers/MainHeader";
// import searchBanner from "../assets/searchBanner.webp";
// import searchBanner1 from "../assets/searchBanner1.webp";
import Category from "../components/Category";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import BottomNav2 from "../components/BottomNav2";
import SearchHeaderMobile from "../components/headers/SearchHeaderMobile";
import SearchListBodyMobile from "../components/SearchListBodyMobile";
import { searchBanner, searchBanner1 } from "../assets/base64";

const SearchList = () => {
	return (
		<>
			{/* DESKTOP START */}
			<div className="home_container d-none d-lg-block">
				<MainHeader />
				<div className="searchBanner_container">
					<img src={searchBanner} alt="banner" />
				</div>

				{/* BODY START */}
				<div className="mainBody d-none d-lg-block">
					<div className="container-fluid">
						<div className="row mt-5">
							<div className="col-3">
								<Category />
								<div className="mt-5">
									<img
										style={{ width: "100%" }}
										src={searchBanner1}
										alt="banner"
									/>
								</div>
							</div>
							<div className="col-9">
								<ProductList />
							</div>
						</div>
					</div>
				</div>
				{/* BODY END */}
				<Footer />
			</div>
			{/* DESKTOP END */}

			{/* MOBILE START */}
			<div className="home_container d-block d-lg-none">
				<SearchHeaderMobile />
				<SearchListBodyMobile />
				<br />
				<br />
				<br />
				<br />
				<br />
				<BottomNav2 />
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default SearchList;
