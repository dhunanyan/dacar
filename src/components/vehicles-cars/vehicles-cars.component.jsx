import React from "react";
import BenefitsCard from "../home-benefits-card/home-benefits-card.component";

import BenefitsCardData from "./home-benefits.data";
import {
  BenefitsCards,
  BenefitsContainer,
  BenefitsWrapper,
} from "./home-benefits.styles";

const Cars = () => {
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
    </BenefitsWrapper>
  );
};

export default Cars;
