import React from "react";
import { HeroContainer, HeroWrapper } from "./hero-free-now.styles";

import heroImage from "../../assets/heroFreeNow.jpg";
import HeroBox from "../hero-box/hero-box.component";

import HERO_FREENOW_DATA from "./hero-free-now.data";

const HeroFreeNow = () => {
  return (
    <HeroWrapper imageUrl={heroImage}>
      <HeroContainer>
        <HeroBox
          descrMap={HERO_FREENOW_DATA.descr}
          title={HERO_FREENOW_DATA.title}
          buttonText={HERO_FREENOW_DATA.button}
        />
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroFreeNow;
