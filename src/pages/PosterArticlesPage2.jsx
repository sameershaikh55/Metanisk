import React from "react";
import Footer from "../components/Footer";
import MainHeader from "../components/headers/MainHeader";
import PosterArticles2 from "../components/PosterArticles2";
import ProfileLeft from "../components/ProfileLeft";

const PosterArticlesPage2 = () => {
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
								<PosterArticles2 />
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
				{/* <MobileProfile />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <BottomNav /> */}
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default PosterArticlesPage2;
