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

const Car = ({ car, onDetailsOpen, setSelectedCarIndex, carIndex }) => {
  const { brand, cost, isAvailable, imageUrl } = car;

  return (
    <CarWrapper>
      <CarImgContainer imageUrl={imageUrl}></CarImgContainer>
      <CarIcon isAvailable={isAvailable}>
        {isAvailable ? <Available /> : <NotAvailable />}
      </CarIcon>
      <CarContainer>
        <CarContent>
          <CarTitle>{brand}</CarTitle>
          <CarBottom
            onClick={() => {
              onDetailsOpen();
              setSelectedCarIndex(carIndex);
            }}
          >
            <CarDescr>koszt: {cost}</CarDescr>
            <CarButton>Szczegóły</CarButton>
          </CarBottom>
        </CarContent>
      </CarContainer>
    </CarWrapper>
  );
};

export default Car;
