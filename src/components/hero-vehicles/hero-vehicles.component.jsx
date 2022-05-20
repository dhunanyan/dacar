import React from "react";
import { HeroContainer, HeroWrapper } from "./hero-vehicles.styles";

import heroImage from "../../assets/heroVehicles.jpg";
import HeroBox from "../hero-box/hero-box.component";

import HERO_VEHICLES_DATA from "./hero-vehicles.data";

const HeroVehicles = () => {
  return (
    <HeroWrapper imageUrl={heroImage}>
      <HeroContainer>
        <HeroBox
          descrMap={HERO_VEHICLES_DATA.descr}
          title={HERO_VEHICLES_DATA.title}
          buttonText={HERO_VEHICLES_DATA.button}
        />
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroVehicles;
