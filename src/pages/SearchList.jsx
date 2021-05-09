import React from "react";
import MainHeader from "../components/MainHeader";

const SearchList = () => {
	return (
		<>
			{/* DESKTOP START */}
			<div className="home_container d-none d-lg-block">
				<MainHeader />
			</div>
			{/* DESKTOP END */}

			{/* MOBILE START */}
			<div className="home_container d-block d-lg-none">
				<MainHeader />
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default SearchList;
