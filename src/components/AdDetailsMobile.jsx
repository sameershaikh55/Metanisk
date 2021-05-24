import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BsFillHeartFill } from "react-icons/bs";
import { ImShare2 } from "react-icons/im";
import { AiOutlineEye } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import annonces1 from "../assets/annonces1.webp";
import annonces2 from "../assets/annonces2.webp";
import annonces3 from "../assets/annonces3.webp";
import annonces4 from "../assets/annonces4.svg";
import banner from "../assets/homeBanner.webp";
import music from "../assets/music.svg";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import placeholderPerson from "../assets/placeholderPerson.svg";
import badge from "../assets/badge.svg";
import filledStar from "../assets/filledStar.svg";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AnnoncesSimilar from "./AnnoncesSimilar";
import { useHistory } from "react-router-dom";

const AdDetailsMobile = () => {
  let history = useHistory();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };

  const data = [annonces1, annonces2, annonces3, annonces4];
  const data2 = [
    { left: "Condition", right: "Nouveau" },
    { left: "Pointure", right: "43" },
    { left: "Couleur", right: "Noire" },
    { left: "Marque", right: "Nike" },
    { left: "Autres", right: "......" },
  ];
  return (
    <div className="productDetailsPage">
      {/* HEADER START */}
      <div className="d-flex justify-content-between align-items-center bg-white pl-2 pr-4 py-3">
        <RiArrowLeftSLine
          onClick={() => history.goBack()}
          fontSize="3.8rem"
          color="#067AC2"
        />
        <div>
          <BsFillHeartFill fontSize="2.8rem" className="mr-4" color="#FF0000" />
          <ImShare2 fontSize="2.5rem" color="#077BC3" />
        </div>
      </div>
      {/* HEADER END */}

      {/* IMAGE SLIDER START */}
      <div className="productImages">
        <Slider {...settings}>
          {data.map((prev, i) => {
            return <img key={i} src={prev} alt="" className="productImgs" />;
          })}
        </Slider>
      </div>
      {/* IMAGE SLIDER END */}

      {/* PRODUCT TITLE START */}
      <div className="bg-white p-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="m-0 font-weight-bold">999 000 000 FG</h1>
          <div className="musicOnImg text-center">
            <img src={music} alt="music" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h1 className="themeColor font-weight-bold">
            Chaussure Nike Original <br /> 2019 - Model
          </h1>
          <button className="themeColor borderRounded font-weight-bold border-0 h3 bg-gray py-2 px-3">
            <AiOutlineEye fontSize="2.2rem" /> 1000
          </button>
        </div>
        <div className="d-flex align-items-center h4 my-3">
          categorie <IoIosArrowForward className="mx-2" /> sous-categorie{" "}
          <IoIosArrowForward className="mx-2" /> type d’article
        </div>
        <div className="userBtn w-100 d-flex bg-white mt-4">
          <button className="text-white py-3 px-0 d-flex justify-content-center align-items-center w-100 mr-4">
            <FaPhoneAlt fontSize="2.2rem" className="mr-3" />
            <div className="h2 m-0">Appeler</div>
          </button>
          <button className="text-white py-3 px-0 d-flex justify-content-center align-items-center w-100">
            <FaTelegramPlane className="mr-3" fontSize="2.5rem" />
            <div className="h2 m-0">Ecrire</div>
          </button>
        </div>
        <div className="d-flex align-items-center my-5">
          <div className="userImage">
            <img src={placeholderPerson} alt="placeholder" />
          </div>
          <div className="ml-4">
            <h2 className="d-flex align-items-center h2 ml-2 font-weight-bold">
              Ernest Peguita <img src={badge} alt="badge" className="ml-1" />
            </h2>
            <h4 className="ml-2">Sur Makiti+ depuis Avril 2020</h4>
            <div className="d-flex ml-2">
              <h4 className="d-flex align-items-center font-weight-bold">
                5 <img src={filledStar} alt="filledStar" className="ml-1" />
              </h4>
              <h4 className="h4 themeColor ml-4">12 publications</h4>
            </div>
          </div>
        </div>
        <div>
          <h2 className="m-0 mb-2 font-weight-bold">Description</h2>
          <h3 className="m-0">
            La première Air Max lifestyle de Nike vous offre style et confort à
            travers la Nike Air Max 270. Ce modèle s'inspire des chaussures Air
            Max emblématiques en intégrant les meilleures innovations de Nike,
            avec sa grande fenêtre et une nouvelle gamme de couleurs.
          </h3>
        </div>
        <div className="mt-5">
          <h2 className="m-0 mb-2 font-weight-bold">
            Information Additionnelle
          </h2>
          <ul className="infoList">
            {data2.map((prev, i) => {
              const { left, right } = prev;
              return (
                <li
                  key={i}
                  className="d-flex justify-content-between align-items-center py-3 px-3 h3 m-0"
                >
                  <span> {left} </span>
                  <span className="font-weight-bold"> {right} </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div onClick={() => history.push("/emplacement")} className="mt-5">
          <h2 className="m-0 mb-2 font-weight-bold">Emplacement</h2>
          <div>
            <iframe
              title="map"
              width="100%"
              height="150"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
        <div className="accordianContainer mt-5">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Avis et Commentaires</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Signaler cette annonce</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="mt-5">
          <img style={{ width: "100%" }} src={banner} alt="banner" />
        </div>
        <div className="mt-5">
          <AnnoncesSimilar />
        </div>
      </div>
      {/* PRODUCT TITLE END */}
    </div>
  );
};

export default AdDetailsMobile;
