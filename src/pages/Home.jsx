import React from "react";
import FeatureSection from "../components/FeatureSection";
import MainHeader from "../components/MainHeader";
import banner from "../assets/mainBodyImg.svg";
import TopAnnonces from "../components/TopAnnonces";
import AnnoncesRecentes from "../components/AnnoncesRecentes";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div className="home_container">
			<MainHeader />
			<FeatureSection />
			{/* BODY START */}
			<div className="mainBody d-none d-lg-block">
				<div className="container-fluid">
					<div className="row">
						<div style={{ marginTop: "4rem" }} className="col-3">
							<img src={banner} alt="banner" />
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
	);
};

export default Home;
