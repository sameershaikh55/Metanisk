import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import ProfileLeft from "../components/ProfileLeft";
import ProfileRight from "../components/ProfileRight";
import Messages from "../components/Messages";
import Favoris from "../components/Favoris";
import Notifications from "../components/Notifications";
import MesAnnonces from "../components/MesAnnonces";
import MobileProfile from "../components/MobileProfile";

const MenuProfile = () => {
	const [profile, setProfile] = useState(true);
	const [message, setMessage] = useState(false);
	const [favoris, setFavoris] = useState(false);
	const [notification, setNotification] = useState(false);
	const [mesAnnonces, setMesAnnonces] = useState(false);
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
									notification={notification}
									mesAnnonces={mesAnnonces}
									setProfile={setProfile}
									setMessage={setMessage}
									setFavoris={setFavoris}
									setNotification={setNotification}
									setMesAnnonces={setMesAnnonces}
								/>
							</div>
							<div className="col-9">
								{profile && <ProfileRight />}
								{message && <Messages />}
								{favoris && <Favoris />}
								{notification && <Notifications />}
								{mesAnnonces && <MesAnnonces />}
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
				<BottomNav />
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default MenuProfile;
