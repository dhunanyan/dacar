import React from "react";
import BenefitsCard from "../home-benefits-card/home-benefits-card.component";

import BenefitsCardData from "./home-benefits.data";
import {
  BenefitsCards,
  BenefitsCircle1,
  BenefitsCircle2,
  BenefitsCircle3,
  BenefitsCircle4,
  BenefitsContainer,
  BenefitsWrapper,
} from "./home-benefits.styles";

const Benefits = () => {
  return (
    <BenefitsWrapper>
      <BenefitsContainer>
        <BenefitsCards>
          {BenefitsCardData.map((card) => (
            <BenefitsCard
              title={card.title}
              descr={card.descr}
              icon={card.icon}
              key={card.id}
            />
          ))}
        </BenefitsCards>
      </BenefitsContainer>

      <BenefitsCircle1 />
      <BenefitsCircle2 />
      <BenefitsCircle3 />
      <BenefitsCircle4 />
    </BenefitsWrapper>
  );
};

export default Benefits;
