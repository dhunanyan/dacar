import React from "react";
import Benefits from "../../components/benefits/benefits.component";
import BENEFITS_DATA from "../../components/benefits/benefits.data";
import Cars from "../../components/cars/cars.component";
import Contact from "../../components/contact/contact.component";
import HeroVehicles from "../../components/hero-vehicles/hero-vehicles.component";
import { benefitsSizes } from "../../components/styleVars";

const Vehicles = () => {
  return (
    <>
      <HeroVehicles />
      <Cars title={"Kolekcja"} />
      <Benefits
        size={benefitsSizes.big}
        data={BENEFITS_DATA}
        title={"Korzyści ze Współpracy"}
      />
      <Contact title={"Skontaktuj się"} />
    </>
  );
};

export default Vehicles;
