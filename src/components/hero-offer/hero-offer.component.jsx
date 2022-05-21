import React from "react";
import { HeroContainer, HeroWrapper } from "./hero-offer.styles";

import heroImage from "../../assets/heroOffer.jpg";
import HeroBox from "../hero-box/hero-box.component";

import HERO_OFFER_DATA from "./hero-offer.data";

const HeroOffer = () => {
  return (
    <HeroWrapper imageUrl={heroImage}>
      <HeroContainer>
        <HeroBox
          descrMap={HERO_OFFER_DATA.descr}
          title={HERO_OFFER_DATA.title}
          buttonText={HERO_OFFER_DATA.button}
        />
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroOffer;
