import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ImageGalleryC from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import annonces1 from "../assets/annonces1.webp";
import annonces2 from "../assets/annonces2.webp";
import annonces3 from "../assets/annonces3.webp";
import music from "../assets/music.svg";

const PosterArticles2 = () => {
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
	const data2 = [
		{ left: "Condition", right: "Nouveau" },
		{ left: "Pointure", right: "43" },
		{ left: "Couleur", right: "Noire" },
		{ left: "Marque", right: "Nike" },
		{ left: "Autres", right: "......" },
	];
	return (
		<>
			<h1 className="font-weight-bold">Poster un article</h1>
			<div className="container-fluid">
				<div className="row bg-white borderRounded">
					<div className="poster2Header col-12 text-center py-3">
						<h2 className="text-white mb-0">Apercu de l’annonce</h2>
					</div>

					<div className="col-10 py-5 mx-auto">
						<div className="row">
							<div className="col-12">
								<div>
									<div className="d-flex justify-content-between">
										<h1 className="font-weight-bold">
											Chaussure Nike à vendre
										</h1>
										<h1 className="font-weight-bold">1 999 000 000 FG</h1>
									</div>
									<div className="d-flex justify-content-between">
										<h5 className="themeColor">Aujourd’hui - 12:00</h5>
										<h5>Conakry</h5>
									</div>
								</div>
							</div>
							{/* IMAGE SLIDER START */}
							<div className="poster2Details col-12">
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
							{/* IMAGE SLIDER END */}

							<div className="col-11 mx-auto mt-5">
								<h2 className="m-0 mb-2 font-weight-bold">Description</h2>
								<h4 className="m-0 text-justify">
									La première Air Max lifestyle de Nike vous offre style et
									confort à travers la Nike Air Max 270. Ce modèle s'inspire des
									chaussures Air Max emblématiques en intégrant les meilleures
									innovations de Nike, avec sa grande fenêtre et une nouvelle
									gamme de couleurs.
								</h4>
							</div>

							<div className="col-11 mx-auto mt-5">
								<h2 className="m-0 mb-2 font-weight-bold">
									Information Additionnelle
								</h2>
								<ul className="infoList">
									{data2.map((prev, i) => {
										const { left, right } = prev;
										return (
											<li
												key={i}
												className="d-flex justify-content-between align-items-center py-2 px-3 h3 m-0"
											>
												<span> {left} </span>
												<span className="font-weight-bold"> {right} </span>
											</li>
										);
									})}
								</ul>
							</div>

							<div className="col-11 mx-auto mt-5">
								<h2 className="font-weight-bold">Emplacement</h2>
								<iframe
									title="map"
									width="100%"
									height="250"
									frameBorder="0"
									scrolling="no"
									marginHeight="0"
									marginWidth="0"
									src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
								></iframe>
							</div>

							<div className="col-12 d-flex justify-content-between mt-5">
								<button className="themeBtn5 pl-5">
									<IoIosArrowBack fontSize="2rem" /> Retour
								</button>
								<button className="themeBtn pr-5">
									Publier l’article <IoIosArrowForward fontSize="2rem" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PosterArticles2;
