import React, { useState } from "react";
import Cars from "../../components/cars/cars.component";
import HeroVehicles from "../../components/hero-vehicles/hero-vehicles.component";

const Vehicles = () => {
  return (
    <>
      <HeroVehicles />
      <Cars />
    </>
  );
};

export default Vehicles;
