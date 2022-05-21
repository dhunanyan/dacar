import React from "react";
import BenefitsCard from "../benefits-card/benefits-card.component";

import BenefitsCardData from "./benefits.data";
import {
  BenefitsCards,
  BenefitsCircle1,
  BenefitsCircle2,
  BenefitsCircle3,
  BenefitsCircle4,
  BenefitsContainer,
  BenefitsTitle,
  BenefitsWrapper,
} from "./benefits.styles";

const Benefits = () => {
  return (
    <BenefitsWrapper>
      <BenefitsContainer>
        <BenefitsTitle>Korzyści ze Współpracy</BenefitsTitle>
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

        <BenefitsCircle1 />
        <BenefitsCircle2 />
        <BenefitsCircle3 />
        <BenefitsCircle4 />
      </BenefitsContainer>
    </BenefitsWrapper>
  );
};

export default Benefits;
