import React from "react";
import BenefitsCard from "../benefits-card/benefits-card.component";
import { BenefitsTitle } from "../benefits/benefits.styles";

import {
  CooperationCards,
  CooperationCircle1,
  CooperationCircle3,
  CooperationCircle4,
  CooperationContainer,
  CooperationWrapper,
} from "./cooperation.styles";

const Cooperation = ({ data, size }) => {
  const { title, cardsList } = data;
  return (
    <CooperationWrapper>
      <CooperationContainer>
        <BenefitsTitle>{title}</BenefitsTitle>
        <CooperationCards>
          {cardsList.map((card, index) => (
            <BenefitsCard
              size={size}
              key={index}
              title={card.title}
              descr={card.descr}
              icon={card.icon}
            />
          ))}
        </CooperationCards>

        <CooperationCircle1 />
        <CooperationCircle3 />
        <CooperationCircle4 />
      </CooperationContainer>
    </CooperationWrapper>
  );
};

export default Cooperation;
