import React from "react";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import ProfileLeft from "../components/ProfileLeft";
import MesAnnonces from "../components/MesAnnonces";
import BottomNav from "../components/BottomNav";
import MobileMesAnnonces from "../components/MobileMesAnnonces";

const MesAnnoncesPage = () => {
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
								<MesAnnonces />
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
				<MobileMesAnnonces />
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default MesAnnoncesPage;
