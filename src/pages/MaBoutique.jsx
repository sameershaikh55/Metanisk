import React from "react";
import BoutiqueBody from "../components/BoutiqueBody";
import Footer from "../components/Footer";
import MaBoutiqueMobile from "../components/MaBoutiqueMobile";
import MainHeader from "../components/headers/MainHeader";
import ProfileLeft from "../components/ProfileLeft";

const MaBoutique = () => {
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
								<BoutiqueBody />
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
				<MaBoutiqueMobile />
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default MaBoutique;
