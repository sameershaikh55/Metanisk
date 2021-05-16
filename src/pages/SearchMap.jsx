import React from "react";
import Category from "../components/Category";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import searchBanner1 from "../assets/searchBanner1.svg";
import searchBanner from "../assets/searchBanner.svg";
import MapSection from "../components/MapSection";
import UnderProductList from "../components/UnderProductList";
import SearchMapHeader from "../components/SearchMapHeader";
import BottomNav from "../components/BottomNav";

const SearchMap = () => {
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
								<MapSection />
								<UnderProductList />
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
				<SearchMapHeader />
				<div style={{ height: "calc(100vh - 18vh)" }}>
					<iframe
						title="map"
						width="100%"
						height="100%"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
					></iframe>
				</div>
				<BottomNav />
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default SearchMap;
