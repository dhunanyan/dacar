import React, { useState } from "react";
import CarDetails from "../cars-car-details/cars-car-details.component";

import { AnimatePresence } from "framer-motion";
import Car from "../cars-car/cars-car.component";
import {
  CarsCards,
  CarsContainer,
  CarsTitle,
  CarsWrapper,
} from "./cars.styles";

import CARS_DATA from "./cars.data";

const Cars = () => {
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const close = () => setDetailsOpen(false);
  const open = () => setDetailsOpen(true);

  const onDetailsOpen = () => {
    if (detailsOpen) {
      close();
    } else {
      open();
    }
  };

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
              carIndex={index}
              onDetailsOpen={onDetailsOpen}
            />
          ))}
        </CarsCards>
      </CarsContainer>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {detailsOpen && (
          <CarDetails
            detailsOpen={detailsOpen}
            handleClose={close}
            car={CARS_DATA[selectedCarIndex]}
            setSelectedCarIndex={setSelectedCarIndex}
          />
        )}
      </AnimatePresence>
    </CarsWrapper>
  );
};

export default Cars;
