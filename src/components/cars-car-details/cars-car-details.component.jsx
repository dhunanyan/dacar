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

import { Grow } from "@material-ui/core";

import { FaTimes as Times } from "react-icons/fa";
import logo from "../../assets/logoGreen.png";

const CarDetails = ({
  car,
  setSelectedCarIndex,
  setIsCarDetailsShown,
  isCarDetailsShown,
}) => {
  const { brand, fuel, cost, isAvailable, imageUrl, engine, deposit } = car;

  const onDetailsClick = async () => {
    setIsCarDetailsShown(false);
  };

  return (
    <CarDetailsWrapper isActive={isCarDetailsShown}>
      <CarDetailsBackgroundGrow
        isActive={isCarDetailsShown}
        in={isCarDetailsShown}
      >
        <CarDetailsBackground
          isActive={isCarDetailsShown}
          onClick={onDetailsClick}
        />
      </CarDetailsBackgroundGrow>
      <Grow in={isCarDetailsShown}>
        <CarDetailsContainer>
          <CarDetailsTop>
            <CarDetailsCloseButton onClick={onDetailsClick}>
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
      </Grow>
    </CarDetailsWrapper>
  );
};

export default CarDetails;
