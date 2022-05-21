import React from "react";
import { HeroContainer, HeroWrapper } from "./hero-uber.styles";

import heroImage from "../../assets/heroUber.jpg";
import HeroBox from "../hero-box/hero-box.component";

import HERO_UBER_DATA from "./hero-uber.data";

const HeroUber = () => {
  return (
    <HeroWrapper imageUrl={heroImage}>
      <HeroContainer>
        <HeroBox
          descrMap={HERO_UBER_DATA.descr}
          title={HERO_UBER_DATA.title}
          buttonText={HERO_UBER_DATA.button}
        />
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroUber;
