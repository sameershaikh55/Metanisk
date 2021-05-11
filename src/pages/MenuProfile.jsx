import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import ProfileLeft from "../components/ProfileLeft";
import ProfileRight from "../components/ProfileRight";
import Messages from "../components/Messages";
import Favoris from "../components/Favoris";

const MenuProfile = () => {
	const [profile, setProfile] = useState(true);
	const [message, setMessage] = useState(false);
	const [favoris, setFavoris] = useState(false);
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
								<ProfileLeft
									profile={profile}
									message={message}
									favoris={favoris}
									setProfile={setProfile}
									setMessage={setMessage}
									setFavoris={setFavoris}
								/>
							</div>
							<div className="col-9">
								{profile && <ProfileRight />}
								{message && <Messages />}
								{favoris && <Favoris />}
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
