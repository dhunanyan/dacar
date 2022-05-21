import React from "react";
import { HeroContainer, HeroWrapper } from "./hero-work.styles";

import heroImage from "../../assets/heroWork.jpg";
import HeroBox from "../hero-box/hero-box.component";

import HERO_WORK_DATA from "./hero-work.data";

const HeroWork = () => {
  return (
    <HeroWrapper imageUrl={heroImage}>
      <HeroContainer>
        <HeroBox
          descrMap={HERO_WORK_DATA.descr}
          title={HERO_WORK_DATA.title}
          buttonText={HERO_WORK_DATA.button}
        />
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroWork;
