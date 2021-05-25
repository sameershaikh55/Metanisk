import React from "react";
import state1 from "../assets/state1.svg";
import state2 from "../assets/state2.svg";
import state3 from "../assets/state3.svg";
import state4 from "../assets/state4.svg";

const States = () => {
	const data = [
		{
			img: state1,
			num: 50,
			desc: "Articles Publiés",
			bg: "linear-gradient(90deg, #4DBCEF 0%, #1B8ACC 98.04%), #FFFFFF",
		},
		{
			img: state2,
			num: 100,
			desc: "Abonnés",
			bg: " linear-gradient(270deg, #E66F01 0%, #FF9501 100%), #C4C4C4",
		},
		{
			img: state3,
			num: 50,
			desc: "Vues",
			bg: "linear-gradient(270deg, #4BC0CF 6.67%, #56E0E0 100%), #C4C4C4",
		},
		{
			img: state4,
			num: 150,
			desc: "Commentaires",
			bg: "linear-gradient(90deg, #FFD966 0%, #E9AF00 100%), #C4C4C4",
		},
	];
	return (
		<>
			{/* STATES START */}
			<div className="row px-2">
				{data.map((prev, i) => {
					const { img, num, desc, bg } = prev;
					return (
						<div key={i} className="col-3 px-3">
							<div
								style={{ background: bg }}
								className="statesCard d-flex justify-content-around align-items-center text-white px-3"
							>
								<img src={img} alt="state" className="mr-2 mt-n4" />
								<div>
									<h1 className="h1 font-weight-bolder m-0">{num}</h1>
									<h6 className="h5">{desc}</h6>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			{/* STATES END */}
		</>
	);
};

export default States;
