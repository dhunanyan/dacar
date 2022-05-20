import React from "react";
import { HeroContainer, HeroWrapper } from "./hero-home.styles";

import heroImage from "../../assets/hero.jpg";
import HeroBox from "../hero-box/hero-box.component";

import HERO_HOME_DATA from "./hero-home.data";

const HeroHome = () => {
  return (
    <HeroWrapper imageUrl={heroImage}>
      <HeroContainer>
        <HeroBox
          descrMap={HERO_HOME_DATA.descr}
          title={HERO_HOME_DATA.title}
          buttonText={HERO_HOME_DATA.button}
        />
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroHome;
