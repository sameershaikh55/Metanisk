import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const RecherchesTab = () => {
	return (
		<div className="container-fluid my-4">
			<div className="d-flex justify-content-between align-items-center">
				<h1 className="font-weight-bold">Total: 80 recherches</h1>
				<div>pagination</div>
			</div>
			<div className="row px-4">
				{[1, 1, 1, 1, 1].map((prev, i) => {
					return (
						<div
							key={i}
							className="col-12 d-flex borderRounded justify-content-between align-items-center shadow bg-white px-3 py-3 my-2"
						>
							<div>
								<h4 className="font-weight-bold mb-1">Chaussures Nike</h4>
								<h6 className="h5">
									Conakry, Prix: 100 000 FG - 3 000 000 FG, Nouveau
								</h6>
							</div>
							<div>
								<BsThreeDotsVertical fontSize="1.5rem" className="themeColor" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RecherchesTab;
