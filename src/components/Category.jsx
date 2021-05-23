import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import Slider from "@material-ui/core/Slider";
import filledStar from "../assets/filledStar.svg";
import unFilledStar from "../assets/unFilledStar.svg";

function valuetext(value) {
	return `${value}°C`;
}

const Category = () => {
	const [value, setValue] = React.useState([20, 70]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

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
						<li className="h5 mt-2 font-weight-bold">Transport</li>
						<li className="h5 mt-2 font-weight-bold">immobiliers</li>
						<li className="h5 mt-2 font-weight-bold">Vêtements</li>
						<li className="h5 mt-2 font-weight-bold">Aliments</li>
						<li className="h5 mt-2 font-weight-bold">Électroménagers</li>
						<li className="h5 mt-2 font-weight-bold">Emplois</li>
						<li className="h5 mt-2 font-weight-bold">Services</li>
						<li className="h5 mt-2 font-weight-bold">Divers</li>
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
				<div className="w-100 mb-2">
					<Slider
						value={value}
						onChange={handleChange}
						valueLabelDisplay="auto"
						aria-labelledby="range-slider"
						getAriaValueText={valuetext}
					/>
				</div>
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
					<div className="vendeurBtn">
						<label
							htmlFor="Individu"
							className="containerRadio d-flex align-items-center h4"
						>
							<input
								type="radio"
								id="Individu"
								name="Vendeur"
								className="mr-2"
							/>
							Individu
							<span className="checkmark"></span>
						</label>
						<label
							htmlFor="Boutique"
							className="containerRadio d-flex align-items-center h4"
						>
							<input
								type="radio"
								name="Vendeur"
								id="Boutique"
								className="mr-2"
							/>
							Boutique
							<span className="checkmark"></span>
						</label>
					</div>
				</div>
				<br />
				<hr />
				<div>
					<div className="d-flex justify-content-between align-items-center">
						<h3 className="font-weight-bold">Classement</h3>
						<IoIosArrowUp fontSize="2rem" color="#067AC2" />
					</div>
					<div className="classementBtn">
						<label className="containerSelect d-flex align-items-center h4">
							<input type="checkbox" className="mr-2" />
							<img src={filledStar} alt="star" />
							<img src={filledStar} alt="star" />
							<img src={filledStar} alt="star" />
							<img src={filledStar} alt="star" />
							<img src={filledStar} alt="star" />
							<span className="checkmark"></span>
						</label>
						<label className="containerSelect d-flex align-items-center h4">
							<input type="checkbox" className="mr-2" />
							<img src={filledStar} alt="star" />
							<img src={filledStar} alt="star" />
							<img src={filledStar} alt="star" />
							<img src={filledStar} alt="star" />
							<img src={unFilledStar} alt="star" />
							<span className="checkmark"></span>
						</label>
						<label className="containerSelect d-flex align-items-center h4">
							<input type="checkbox" className="mr-2" />
							<img src={filledStar} alt="star" />
							<img src={filledStar} alt="star" />
							<img src={filledStar} alt="star" />
							<img src={unFilledStar} alt="star" />
							<img src={unFilledStar} alt="star" />
							<span className="checkmark"></span>
						</label>
						<label className="containerSelect d-flex align-items-center h4">
							<input type="checkbox" className="mr-2" />
							<img src={filledStar} alt="star" />
							<img src={filledStar} alt="star" />
							<img src={unFilledStar} alt="star" />
							<img src={unFilledStar} alt="star" />
							<img src={unFilledStar} alt="star" />
							<span className="checkmark"></span>
						</label>
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
