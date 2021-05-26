import React from "react";
import BottomNav2 from "../components/BottomNav2";
import Footer from "../components/Footer";
import MainHeader from "../components/headers/MainHeader";
import ProfileLeft from "../components/ProfileLeft";
import ProfileRight from "../components/ProfileRight";
import MobileProfile from "../components/MobileProfile";

const MenuProfile = () => {
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
								<ProfileRight />
							</div>
						</div>
					</div>
				</div>
				{/* BODY END */}
				<Footer />
			</div>
			{/* DESKTOP END */}

			{/* MOBILE START */}
			<div className="d-block d-lg-none">
				<MobileProfile />
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

export default MenuProfile;
