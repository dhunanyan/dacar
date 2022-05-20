import React from "react";
import {
  BenefitsCardContainer,
  BenefitsCardDescr,
  BenefitsCardIcon,
  BenefitsCardTitle,
} from "./home-benefits-card.styles";

const BenefitsCard = ({ title, descr, icon }) => {
  return (
    <BenefitsCardContainer>
      <BenefitsCardIcon>{icon}</BenefitsCardIcon>
      <BenefitsCardTitle>{title}</BenefitsCardTitle>
      <BenefitsCardDescr>{descr}</BenefitsCardDescr>
    </BenefitsCardContainer>
  );
};

export default BenefitsCard;
