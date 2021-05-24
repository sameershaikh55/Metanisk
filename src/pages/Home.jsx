import React from "react";
import FeatureSection from "../components/FeatureSection";
import MainHeader from "../components/headers/MainHeader";
// import banner from "../assets/mainBodyImg.webp";
import TopAnnonces from "../components/TopAnnonces";
import AnnoncesRecentes from "../components/AnnoncesRecentes";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav.jsx";
import { mainBodyImg } from "../assets/base64/index";

const Home = () => {
	return (
		<>
			{/* DESKTOP START */}
			<div className="home_container d-none d-lg-block">
				<MainHeader />
				<FeatureSection />
				{/* BODY START */}
				<div className="mainBody d-none d-lg-block">
					<div className="container-fluid">
						<div className="row">
							<div style={{ marginTop: "4rem" }} className="col-3">
								<img src={mainBodyImg} alt="banner" />
							</div>
							<div className="col-9">
								<TopAnnonces />
								<br />
								<br />
								<AnnoncesRecentes />
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
				<FeatureSection />
				<br />
				<br />
				<TopAnnonces />
				<br />
				<AnnoncesRecentes />
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

export default Home;
