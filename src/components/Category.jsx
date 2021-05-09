import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";

const Category = () => {
	return (
		<div className="searchCategory_container">
			<div>
				<div className="d-flex justify-content-between align-items-center">
					<h3 className="font-weight-bold">Categorie</h3>
					<IoIosArrowUp fontSize="2rem" color="#067AC2" />
				</div>
				<div className="inpContainer position-relative my-2">
					<input type="text" name="" id="" placeholder="Text" />
					<div className="searchIcon">
						<BsSearch fontSize="1.6rem" color="#067AC2" />
					</div>
				</div>
				<div className="mt-3">
					<h4 className="font-weight-bold">Electronique et informatique</h4>
					<ul className="list-unstyled">
						<li className="h4 mt-3">Transport</li>
						<li className="h4 mt-3">immobiliers</li>
						<li className="h4 mt-3">Vêtements</li>
						<li className="h4 mt-3">Aliments</li>
						<li className="h4 mt-3">Électroménagers</li>
						<li className="h4 mt-3">Emplois</li>
						<li className="h4 mt-3">Services</li>
						<li className="h4 mt-3">Divers</li>
					</ul>
				</div>
			</div>
			<br />
			<hr />
			<div>
				<div className="d-flex justify-content-between align-items-center">
					<h3 className="font-weight-bold">Prix</h3>
					<IoIosArrowUp fontSize="2rem" color="#067AC2" />
				</div>
				<div></div>
				<div className="d-flex rangeInp">
					<div className="w-100 mr-4">
						<h4 className="m-0">Min</h4>
						<input
							className="w-100"
							type="number"
							name=""
							id=""
							placeholder="0"
						/>
					</div>
					<div className="w-100">
						<h4 className="m-0">Max</h4>
						<input
							className="w-100"
							type="number"
							name=""
							id=""
							placeholder="000"
						/>
					</div>
				</div>
				<br />
				<hr />
				<div>
					<div className="d-flex justify-content-between align-items-center">
						<h3 className="font-weight-bold">Vendeur</h3>
						<IoIosArrowUp fontSize="2rem" color="#067AC2" />
					</div>
				</div>
				<br />
				<hr />
				<div>
					<div className="d-flex justify-content-between align-items-center">
						<h3 className="font-weight-bold">Classement</h3>
						<IoIosArrowUp fontSize="2rem" color="#067AC2" />
					</div>
				</div>
				<div className="text-center mt-4">
					<button className="themeBtn">Afficher</button>
				</div>
			</div>
		</div>
	);
};

export default Category;
