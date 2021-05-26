import React from "react";
import ImageGalleryC from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import annonces1 from "../assets/annonces1.webp";
import annonces2 from "../assets/annonces2.webp";
import annonces3 from "../assets/annonces3.webp";
import music from "../assets/music.svg";

const ProductDetails = () => {
	const data = [
		{ left: "Condition", right: "Nouveau" },
		{ left: "Pointure", right: "43" },
		{ left: "Couleur", right: "Noire" },
		{ left: "Marque", right: "Nike" },
		{ left: "Autres", right: "......" },
	];

	const images = [
		{
			original: annonces1,
			thumbnail: annonces1,
		},
		{
			original: annonces2,
			thumbnail: annonces2,
		},
		{
			original: annonces3,
			thumbnail: annonces3,
		},
	];

	return (
		<>
			{/* IMAGES SECTION START */}
			<div>
				<div className="imageGalleryContainer position-relative mt-2 w-100">
					<ImageGalleryC
						autoPlay={false}
						showIndex={false}
						showPlayButton={false}
						items={images}
						allowFullScreen={true}
					/>
					<div className="imgContainer">
						<img src={music} alt="music" />
					</div>
				</div>
				<div className="mt-5 bg-white p-4 rounded">
					<h2 className="font-weight-bold">Description</h2>
					<h4 className="descriptionText">
						La première Air Max lifestyle de Nike vous offre style et confort à
						travers la Nike Air Max 270. Ce modèle s'inspire des chaussures Air
						Max emblématiques en intégrant les meilleures innovations de Nike,
						avec sa grande fenêtre et une nouvelle gamme de couleurs.
					</h4>
				</div>
				<div className="mt-5 bg-white p-4 rounded">
					<h2 className="font-weight-bold">Information Additionnelle</h2>
					<ul className="h4 infoList">
						{data.map((prev, i) => {
							const { left, right } = prev;
							return (
								<li
									key={i}
									className="d-flex justify-content-between align-items-center py-3 px-3"
								>
									<span> {left} </span>
									<span className="font-weight-bold"> {right} </span>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="bg-white mt-5 p-4 rounded">
					<h2 className="font-weight-bold">Emplacement</h2>
					<div style={{ width: "100%" }}>
						<iframe
							title="map"
							width="100%"
							height="260"
							frameBorder="0"
							scrolling="no"
							marginHeight="0"
							marginWidth="0"
							src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						></iframe>
					</div>{" "}
				</div>
			</div>

			{/* IMAGES SECTION END */}
		</>
	);
};

export default ProductDetails;
