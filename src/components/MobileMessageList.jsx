import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import client from "../assets/messageImg.webp";
import annonces1 from "../assets/annonces1.webp";
import { useHistory } from "react-router-dom";

const MobileMessageList = () => {
  let history = useHistory();

  const data = [
    { img: client, name: "Marie Bah", title: "Ou vous etes situe?" },
    { img: client, name: "Marie Bah", title: "Ou vous etes situe?" },
    { img: client, name: "Marie Bah", title: "Ou vous etes situe?" },
    { img: client, name: "Marie Bah", title: "Ou vous etes situe?" },
    { img: client, name: "Marie Bah", title: "Ou vous etes situe?" },
    { img: client, name: "Marie Bah", title: "Ou vous etes situe?" },
  ];
  const imageStyling = {
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    height: "82px",
  };
  return (
    <div className="messageContainerMobile">
      {/* HEADER START */}
      <div className="d-flex justify-content-between align-items-center position-relative shadow bg-white pr-3 py-3">
        <RiArrowLeftSLine
          onClick={() => history.goBack()}
          fontSize="3.8rem"
          color="#067AC2"
        />
        <div className="heading">
          <h2 className="font-weight-bold text-center mt-3">Messages</h2>
        </div>
        <div>
          <BsThreeDotsVertical fontSize="2.4rem" />
        </div>
      </div>

      <div className="container-fluid mt-4 ">
        <div className="row px-4">
          {data.map((prev, i) => {
            return (
              <div
                key={i}
                onClick={() => history.push("/singleMessage")}
                className="col-12 borderRounded p-0 bg-white d-flex mt-4 shadow"
              >
                <img style={imageStyling} src={prev.img} alt="client" />
                <div className="w-100">
                  <div className="d-flex justify-content-between w-100 px-3 pt-2">
                    <div>
                      <h4 className="m-0"> {prev.name} </h4>
                      <h5>{prev.title}</h5>
                    </div>
                    <div className="d-flex themeColor font-weight-bold">
                      <h6 className="mr-1">Aujourd’hui - 12:00</h6>
                      <RiArrowRightSLine fontSize="1.2rem" />
                    </div>
                  </div>

                  <div className="productImgContainer d-flex">
                    <img src={annonces1} alt="product" />
                    <div className="innerText pt-2 px-3">
                      <h4 className="font-weight-bold">800 000 FG</h4>
                      <h5 className="themeColor font-weight-bold">
                        Chaussure Nike a vendre
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileMessageList;
