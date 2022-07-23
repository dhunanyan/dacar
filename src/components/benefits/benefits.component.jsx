import React from "react";
import BenefitsCard from "../benefits-card/benefits-card.component";

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

const Benefits = ({ title, data, size }) => {
  return (
    <BenefitsWrapper>
      <BenefitsContainer>
        <BenefitsTitle>{title}</BenefitsTitle>
        <BenefitsCards>
          {data.map((card) => (
            <BenefitsCard
              size={size}
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
