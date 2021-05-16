import React from "react";
import heart from "../assets/heartIcon.svg";
import music from "../assets/music.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const AnnoncesCard = ({ prev }) => {
	let history = useHistory();

	return (
		<>
			<div onClick={() => history.push("/adDetails")} className="annoncesCard">
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
						<img src={music} alt="music" />
					</div>
				</div>

				<div className="pt-3">
					<h3 className="mb-0 font-weight-bold px-3">800 000 FG</h3>
					<h5 className="mb-1 font-weight-bold px-3">
						Chaussure Nike a vendre
					</h5>
					<h5 className="px-3">Aujourd’hui - 12:00</h5>
					<div className="cardBtns d-flex mt-4">
						<button className="d-flex align-items-center justify-content-center w-100 text-white py-3">
							<FaPhoneAlt className="mr-2" />
							Appeler
						</button>
						<button className="d-flex align-items-center justify-content-center w-100 text-white py-3">
							<FaPhoneAlt className="mr-2" />
							Appeler
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default AnnoncesCard;
