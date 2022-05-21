import React, { useState } from "react";
import Benefits from "../../components/benefits/benefits.component";
import Cars from "../../components/cars/cars.component";
import HeroVehicles from "../../components/hero-vehicles/hero-vehicles.component";

const Vehicles = () => {
  return (
    <>
      <HeroVehicles />
      <Cars />
      <Benefits />
    </>
  );
};

export default Vehicles;
