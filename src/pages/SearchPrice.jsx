import React from "react";
import BottomNav2 from "../components/BottomNav2";
import SearchMapHeader from "../components/headers/SearchMapHeader";

const SearchPrice = () => {
	return (
		<div>
			{/* MOBILE START */}
			<div className="home_container searchPriceCont d-block d-lg-none">
				<SearchMapHeader link="/searchProductView" />
				<BottomNav2 />
			</div>
			{/* MOBILE END */}
		</div>
	);
};

export default SearchPrice;
