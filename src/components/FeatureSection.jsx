import React from "react";
import Slider from "react-slick";
import feature1 from "../assets/feature1.webp";
import feature2 from "../assets/feature2.webp";
import feature3 from "../assets/feature3.webp";
import feature4 from "../assets/feature4.webp";
import feature5 from "../assets/feature5.webp";
import feature6 from "../assets/feature6.webp";
import feature7 from "../assets/feature7.webp";
import feature8 from "../assets/feature8.webp";
import feature9 from "../assets/feature9.webp";
import homeSlider from "../assets/homeSlider.webp";

const FeatureSection = () => {
	const data = [
		{
			img: feature1,
			title: "Electronique et informatique",
			bg: "linear-gradient(129.88deg, #D2F6AC -0.76%, #B8F6D2 103.14%), #FFFFFF",
		},
		{
			img: feature2,
			title: "Transport",
			bg: " linear-gradient(271.66deg, #AAEEF2 7.73%, #D4F3F2 98.27%), #FFFFFF",
		},
		{
			img: feature3,
			title: "immobiliers",
			bg: " linear-gradient(96.58deg, #C2DEBF 5.17%, #E2F6DE 96.02%), #FFFFFF",
		},
		{
			img: feature4,
			title: "Vêtements",
			bg: "linear-gradient(270deg, #B3E3F1 0%, #BFEDF2 100%), #FFFFFF",
		},
		{
			img: feature5,
			title: "Aliments",
			bg: "linear-gradient(90deg, #FAECE3 0%, #FFD6BF 95.38%), #FFFFFF",
		},
		{
			img: feature6,
			title: "Électroménagers",
			bg: "linear-gradient(270deg, #BEE8E0 0%, #CFF6EF 100%), #FFFFFF",
		},
		{
			img: feature7,
			title: "Emplois",
			bg: "linear-gradient(273.26deg, #C8CDEA 2.92%, #DEE1EE 96.43%), #FFFFFF",
		},
		{
			img: feature8,
			title: "Services",
			bg: " linear-gradient(90deg, #F7E4AA 0%, #F6F3C1 100%), #FFFFFF",
		},
		{
			img: feature9,
			title: "Divers",
			bg: "linear-gradient(72.83deg, #E2DECF 11.8%, #F4EFDD 88.2%), #FFFFFF",
		},
	];

	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		speed: 800,
		autoplaySpeed: 2000,
	};
	return (
		<>
			{/* DESKTOP START */}
			<div className="feature_containerMain d-none d-lg-block">
				<div className="feature_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-6">
								<div className="row">
									{data.map((prev, i) => {
										return (
											<div key={i} className="col-4">
												<div
													className="featureCard d-flex justify-content-between align-items-center p-2 m-1"
													style={{
														background: prev.bg,
													}}
												>
													<img
														style={{ width: "45%" }}
														src={prev.img}
														alt="feature"
														className="mr-3"
													/>
													<h5 className="text-break font-weight-bold">
														{" "}
														{prev.title}{" "}
													</h5>
												</div>
											</div>
										);
									})}
								</div>
							</div>
							<div className="col-6 py-1 slider_container">
								<Slider {...settings}>
									<img src={homeSlider} alt="slider" />
									<img src={homeSlider} alt="slider" />
									<img src={homeSlider} alt="slider" />
									<img src={homeSlider} alt="slider" />
									<img src={homeSlider} alt="slider" />
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* DESKTOP END */}

			{/* MOBILE START */}
			<div className="featureMobile_container">
				<div className="container-fluid d-block d-lg-none">
					<div className="row">
						{data.map((prev, i) => {
							return (
								<div
									key={i}
									style={{
										borderLeft: (i === 6 && "none") || (i === 3 && "none"),
										borderTopRightRadius: i === 2 && "6px",
										borderTopLeftRadius: i === 0 && "6px",
										borderBottomLeftRadius: i === 6 && "6px",
										borderBottomRightRadius: i === 8 && "6px",
									}}
									className="mobileFeatureCard col-4 bg-white text-center"
								>
									<img
										style={{ width: "68%" }}
										src={prev.img}
										alt="feature"
										className="mr-2"
									/>
									<h5 className="h4 text-break">{prev.title}</h5>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{/* MOBILE END */}
		</>
	);
};

export default FeatureSection;
