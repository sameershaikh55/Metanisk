import React from "react";
import annonces1 from "../assets/annonces1.svg";
import annonces2 from "../assets/annonces2.svg";
import annonces3 from "../assets/annonces3.svg";
import annonces4 from "../assets/annonces4.svg";
import heart from "../assets/heartIcon.svg";
import music from "../assets/music.svg";
import { FaPhoneAlt } from "react-icons/fa";

const TopAnnonces = () => {
	const data = [
		annonces1,
		annonces2,
		annonces3,
		annonces4,
		annonces1,
		annonces2,
		annonces3,
		annonces4,
	];

	return (
		<div>
			<h1 className="font-weight-bold mb-3">Top Annonces</h1>
			<div className="row">
				{data.map((prev, i) => {
					return (
						<div key={i} className="col-3 mb-4">
							<div className="annoncesCard">
								<div className="imgContainer">
									<img
										style={{ width: "100%" }}
										className="productImg"
										src={prev}
										alt={prev}
									/>
									<div className="heartOnImg text-center">
										<img style={{ width: "75%" }} src={heart} alt="heart" />
									</div>
									<div className="titleOnImg text-center">
										<h4 className="text-white m-0">Conakry</h4>
									</div>
									<div className="musicOnImg text-center">
										<img src={music} alt="heart" />
									</div>
								</div>

								<div className="pt-3">
									<h3 className="mb-0 font-weight-bold px-3">800 000 FG</h3>
									<h5 className="mb-1 font-weight-bold px-3">
										Chaussure Nike a vendre
									</h5>
									<h5 className="px-3">Aujourd’hui - 12:00</h5>
									<div className="cardBtns d-flex mt-4">
										<button className="w-100 text-white py-3">
											<FaPhoneAlt className="mr-2" />
											Appeler
										</button>
										<button className="w-100 text-white py-3">
											<FaPhoneAlt className="mr-2" />
											Appeler
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TopAnnonces;
