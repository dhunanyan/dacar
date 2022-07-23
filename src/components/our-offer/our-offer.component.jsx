import React from "react";

import {
  OurOfferCards,
  OurOfferContainer,
  OurOfferWrapper,
  BenefitsCircle1,
  BenefitsCircle2,
  BenefitsCircle3,
} from "./our-offer.styles";

import OUR_OFFER_CARDS_DATA from "./our-offer.data";
import OurOfferCard from "../our-offer-card/our-offer-card.component";
import { BenefitsTitle } from "../benefits/benefits.styles";

const OurOffer = ({ title }) => {
  return (
    <OurOfferWrapper>
      <OurOfferContainer>
        <BenefitsTitle>{title}</BenefitsTitle>
        <OurOfferCards>
          {OUR_OFFER_CARDS_DATA.map((card, index) => (
            <OurOfferCard
              key={index}
              title={card.title}
              descr={card.descr}
              url={card.url}
              imageUrl={card.imageUrl}
              carIndex={index}
            />
          ))}
        </OurOfferCards>

        <BenefitsCircle1 />
        <BenefitsCircle2 />
        <BenefitsCircle3 />
      </OurOfferContainer>
    </OurOfferWrapper>
  );
};

export default OurOffer;
