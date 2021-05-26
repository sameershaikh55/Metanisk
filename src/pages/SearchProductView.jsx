import React from "react";
import BottomNav2 from "../components/BottomNav2";
import SearchMapHeader from "../components/headers/SearchMapHeader";

const SearchProductView = () => {
	return (
		<>
			{/* MOBILE START */}
			<div className="home_container searchProductViewCont d-block d-lg-none">
				<div className="position-relative">
					<SearchMapHeader link="/searchPrice" />
					<BottomNav2 product />
				</div>
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default SearchProductView;
