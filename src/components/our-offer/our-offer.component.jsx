import React from "react";

import {
  OurOfferCards,
  OurOfferContainer,
  OurOfferTitle,
  OurOfferWrapper,
  BenefitsCircle1,
  BenefitsCircle2,
  BenefitsCircle3,
  BenefitsCircle4,
} from "./our-offer.styles";

import OUR_OFFER_CARDS_DATA from "./our-offer.data";
import OurOfferCard from "../our-offer-card/our-offer-card.component";

const OurOffer = () => {
  return (
    <OurOfferWrapper>
      <OurOfferContainer>
        <OurOfferTitle>Nasza Oferta</OurOfferTitle>
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
