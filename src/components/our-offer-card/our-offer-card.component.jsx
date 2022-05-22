import React from "react";
import { WorksWorkButton } from "../works-work/works-work.styles";
import {
  OurOfferCardContainer,
  OurOfferCardContent,
  OurOfferCardDescr,
  OurOfferCardImg,
  OurOfferCardTitle,
} from "./our-offer-card.styles";

import logo from "../../assets/logoGreen.png";

const OurOfferCard = ({ title, descr, imageUrl, url }) => {
  return (
    <OurOfferCardContainer>
      <OurOfferCardImg imageUrl={imageUrl}></OurOfferCardImg>

      <OurOfferCardContent>
        <OurOfferCardTitle>{title}</OurOfferCardTitle>
        <OurOfferCardDescr>{descr}</OurOfferCardDescr>
        <WorksWorkButton to={url}>
          Sprawdź{" "}
          <div>
            <img src={logo} alt="Logo" />
          </div>
        </WorksWorkButton>
      </OurOfferCardContent>
    </OurOfferCardContainer>
  );
};

export default OurOfferCard;
