import React, { useState } from "react";
import {
  CardDetailsLogo,
  CarDetailsBackground,
  CarDetailsBackgroundGrow,
  CarDetailsBottom,
  CarDetailsButton,
  CarDetailsButtonContainer,
  CarDetailsCloseButton,
  CarDetailsContainer,
  CarDetailsContent,
  CarDetailsDescr,
  CarDetailsGrow,
  CarDetailsImage,
  CarDetailsTop,
  CarDetailsWrapper,
} from "./cars-car-details.styles";

import { FaTimes as Times } from "react-icons/fa";
import logo from "../../assets/logoGreen.png";
import Backdrop from "../backdrop/backdrop.components";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const CarDetails = ({ car, handleClose }) => {
  const { brand, fuel, cost, isAvailable, imageUrl, engine, deposit } = car;

  return (
    <Backdrop onClick={handleClose}>
      <CarDetailsContainer
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <CarDetailsTop>
          <CarDetailsCloseButton onClick={handleClose}>
            <Times />
          </CarDetailsCloseButton>
        </CarDetailsTop>
        <CarDetailsBottom>
          <CarDetailsImage imageUrl={imageUrl} isAvailable={isAvailable} />
          <CarDetailsContent>
            <CarDetailsDescr>
              <span>Marka:</span>
              <span>{brand}</span>
            </CarDetailsDescr>
            <CarDetailsDescr>
              <span>Paliwo:</span>
              <span>{fuel}</span>
            </CarDetailsDescr>
            <CarDetailsDescr>
              <span>Silnik:</span>
              <span>{engine}</span>
            </CarDetailsDescr>
            <CarDetailsDescr>
              <span>Koszt:</span>
              <span>{cost}</span>
            </CarDetailsDescr>
            <CarDetailsDescr>
              <span>Kaucja:</span>
              <span>{deposit}</span>
            </CarDetailsDescr>
          </CarDetailsContent>
        </CarDetailsBottom>
        <CarDetailsButtonContainer>
          <CarDetailsButton>
            <span>WYNAJMIJ</span> <CardDetailsLogo src={logo} alt="Logo" />
          </CarDetailsButton>
        </CarDetailsButtonContainer>
      </CarDetailsContainer>
    </Backdrop>
  );
};

export default CarDetails;
