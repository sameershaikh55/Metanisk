import React from "react";
import Footer from "../components/Footer";
import MainHeader from "../components/headers/MainHeader";
import ProfileLeft from "../components/ProfileLeft";
import Favoris from "../components/Favoris";
import BottomNav2 from "../components/BottomNav2";
import MobileFavoris from "../components/MobileFavoris";

const FavorisPage = () => {
	return (
		<>
			{/* DESKTOP START */}
			<div className="home_container d-none d-lg-block">
				<MainHeader />
				{/* BODY START */}
				<div className="mainBody withPadding d-none d-lg-block">
					<div className="container-fluid">
						<div className="row mt-5">
							<div className="col-3">
								<ProfileLeft />
							</div>
							<div className="col-9">
								<Favoris />
							</div>
						</div>
					</div>
				</div>
				{/* BODY END */}
				<Footer />
			</div>
			{/* DESKTOP END */}

			{/* MOBILE START */}
			<div className="mobile_container2 d-block d-lg-none">
				<MobileFavoris />
				<br />
				<br />
				<br />
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

export default FavorisPage;
