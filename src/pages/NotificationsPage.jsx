import React from "react";
import Footer from "../components/Footer";
import MainHeader from "../components/headers/MainHeader";
import ProfileLeft from "../components/ProfileLeft";
import Notifications from "../components/Notifications";
import BottomNav from "../components/BottomNav";

const NotificationsPage = () => {
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
								<Notifications />
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
				<Notifications mobile />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<BottomNav />
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default NotificationsPage;
