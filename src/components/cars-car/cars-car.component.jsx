import React from "react";

import { MdEventAvailable as Available } from "react-icons/md";
import { FaCalendarTimes as NotAvailable } from "react-icons/fa";
import {
  CarBottom,
  CarButton,
  CarContainer,
  CarContent,
  CarDescr,
  CarIcon,
  CarImgContainer,
  CarTitle,
  CarWrapper,
} from "./cars-car.styles";

const Car = ({ car, carIndex, setSelectedCarIndex, setIsCarDetailsShown }) => {
  const { brand, cost, isAvailable, imageUrl } = car;

  const onDetailsClick = () => {
    setSelectedCarIndex(carIndex);
    setIsCarDetailsShown(true);
  };

  return (
    <CarWrapper>
      <CarImgContainer imageUrl={imageUrl}></CarImgContainer>
      <CarIcon isAvailable={isAvailable}>
        {isAvailable ? <Available /> : <NotAvailable />}
      </CarIcon>
      <CarContainer>
        <CarContent>
          <CarTitle>{brand}</CarTitle>
          <CarBottom onClick={onDetailsClick}>
            <CarDescr>koszt: {cost}</CarDescr>
            <CarButton>Szczegóły</CarButton>
          </CarBottom>
        </CarContent>
      </CarContainer>
    </CarWrapper>
  );
};

export default Car;
