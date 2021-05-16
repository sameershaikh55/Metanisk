import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { useHistory } from "react-router-dom";
import annonces1 from "../assets/annonces1.svg";

const EmplacementMap = () => {
	let history = useHistory();

	return (
		<div>
			{/* HEADER START */}
			<div className="position-relative shadow bg-white pl-2 pr-4 pt-3 pb-1">
				<RiArrowLeftSLine
					className="position-absolute"
					onClick={() => history.goBack()}
					fontSize="3.8rem"
					color="#067AC2"
				/>
				<div>
					<h2 className="font-weight-bold text-center mt-3">Emplacement</h2>
				</div>
				<div className="productImgContainer2 my-4 d-flex justify-content-center align-items-center">
					<img src={annonces1} alt="product" />
					<div className="innerText pt-2 px-3">
						<h3 className="font-weight-bold m-0">800 000 FG</h3>
						<h5 className="themeColor m-0 font-weight-bold">
							Chaussure Nike a vendre
						</h5>
						<h5 className="d-flex align-items-center">
							<MdLocationOn color="#067AC2" className="mr-1" /> Conakry, Dixinn
						</h5>
					</div>
				</div>
			</div>
			<div style={{ height: "calc(100vh - 13.6vh)" }}>
				<iframe
					title="map"
					width="100%"
					height="100%"
					frameborder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
					src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
				></iframe>
			</div>
			{/* HEADER END */}
		</div>
	);
};

export default EmplacementMap;
