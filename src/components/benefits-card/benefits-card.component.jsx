import React from "react";
import {
  BenefitsCardContainer,
  BenefitsCardDescr,
  BenefitsCardIcon,
  BenefitsCardTitle,
} from "./benefits-card.styles";

const BenefitsCard = ({ title, descr, icon, size }) => {
  return (
    <BenefitsCardContainer size={size}>
      <BenefitsCardIcon>{icon}</BenefitsCardIcon>
      <BenefitsCardTitle>{title}</BenefitsCardTitle>
      <BenefitsCardDescr>{descr}</BenefitsCardDescr>
    </BenefitsCardContainer>
  );
};

export default BenefitsCard;
