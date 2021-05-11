import React from "react";
import { Route, Switch } from "react-router";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import ProfileLeft from "../components/ProfileLeft";
import ProfileRight from "../components/ProfileRight";

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
								<Switch>
									<Route exact path="/menuprofile" component={ProfileRight} />
								</Switch>
							</div>
						</div>
					</div>
				</div>
				{/* BODY END */}
				<Footer />
			</div>
			{/* DESKTOP END */}

			{/* MOBILE START */}
			<div className="homeMobile_container d-block d-lg-none">
				<MainHeader />
				<BottomNav />
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default MenuProfile;
