import React from "react";
import BenefitsCard from "../benefits-card/benefits-card.component";

import {
  CooperationCards,
  CooperationCircle1,
  CooperationCircle2,
  CooperationCircle3,
  CooperationCircle4,
  CooperationContainer,
  CooperationTitle,
  CooperationWrapper,
} from "./cooperation.styles";

const Cooperation = ({ data }) => {
  const { title, cardsList } = data;
  return (
    <CooperationWrapper>
      <CooperationContainer>
        <CooperationTitle>{title}</CooperationTitle>
        <CooperationCards>
          {cardsList.map((card, index) => (
            <BenefitsCard
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
