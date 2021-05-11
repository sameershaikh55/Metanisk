import React from "react";
import ImageGalleryC from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import annonces1 from "../assets/annonces1.svg";
import annonces2 from "../assets/annonces2.svg";
import annonces3 from "../assets/annonces3.svg";

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
		{
			original: "https://picsum.photos/id/1018/1000/600/",
			thumbnail: "https://picsum.photos/id/1018/250/150/",
		},
		{
			original: "https://picsum.photos/id/1015/1000/600/",
			thumbnail: "https://picsum.photos/id/1015/250/150/",
		},
		{
			original: "https://picsum.photos/id/1019/1000/600/",
			thumbnail: "https://picsum.photos/id/1019/250/150/",
		},
	];

	return (
		<>
			{/* IMAGES SECTION START */}
			<div>
				<div className="imageGalleryContainer mt-2 w-100">
					<ImageGalleryC
						autoPlay={false}
						showIndex={true}
						showPlayButton={false}
						items={images}
						allowFullScreen={true}
					/>
				</div>
				<div className="mt-5 bg-white p-4 rounded">
					<h2 className="font-weight-bold">Description</h2>
					<h3>
						La première Air Max lifestyle de Nike vous offre style et confort à
						travers la Nike Air Max 270. Ce modèle s'inspire des chaussures Air
						Max emblématiques en intégrant les meilleures innovations de Nike,
						avec sa grande fenêtre et une nouvelle gamme de couleurs.
					</h3>
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
							frameborder="0"
							scrolling="no"
							marginheight="0"
							marginwidth="0"
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
