import React, { useState } from "react";
import Car from "../cars-car/cars-car.component";
import {
  CarsCards,
  CarsContainer,
  CarsTitle,
  CarsWrapper,
} from "./cars.styles";

import CARS_DATA from "./cars.data";
import CarDetails from "../cars-car-details/cars-car-details.component";

const Cars = () => {
  const [isCarDetailsShown, setIsCarDetailsShown] = useState(false);

  const [selectedCarIndex, setSelectedCarIndex] = useState(0);

  return (
    <CarsWrapper>
      <CarsContainer>
        <CarsTitle>Kolekcja</CarsTitle>
        <CarsCards>
          {CARS_DATA.map((car, index) => (
            <Car
              key={index}
              car={car}
              setSelectedCarIndex={setSelectedCarIndex}
              setIsCarDetailsShown={setIsCarDetailsShown}
              carIndex={index}
            />
          ))}
        </CarsCards>
      </CarsContainer>

      <CarDetails
        car={CARS_DATA[selectedCarIndex]}
        setIsCarDetailsShown={setIsCarDetailsShown}
        setSelectedCarIndex={setSelectedCarIndex}
        isCarDetailsShown={isCarDetailsShown}
      />
    </CarsWrapper>
  );
};

export default Cars;
