import React from "react";
import { HeroContainer, HeroWrapper } from "./hero-bolt.styles";

import heroImage from "../../assets/heroBolt.png";
import HeroBox from "../hero-box/hero-box.component";

import HERO_BOLT_DATA from "./hero-bolt.data";

const HeroBolt = () => {
  return (
    <HeroWrapper imageUrl={heroImage}>
      <HeroContainer>
        <HeroBox
          descrMap={HERO_BOLT_DATA.descr}
          title={HERO_BOLT_DATA.title}
          buttonText={HERO_BOLT_DATA.button}
        />
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroBolt;
