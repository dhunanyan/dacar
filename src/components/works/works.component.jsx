import React from "react";

import WorksWork from "../works-work/works-work.component";

import WORKS_DATA from "./works.data";
import {
  WorksCards,
  WorksContainer,
  WorksTitle,
  WorksWrapper,
  BenefitsCircle1,
  BenefitsCircle2,
  BenefitsCircle3,
  BenefitsCircle4,
} from "./works.styles";

const Works = () => {
  return (
    <WorksWrapper>
      <WorksContainer>
        <WorksTitle>Praca</WorksTitle>
        <WorksCards>
          {WORKS_DATA.map((work, index) => (
            <WorksWork key={index} work={work} workIndex={index} />
          ))}
        </WorksCards>

        <BenefitsCircle1 />
        <BenefitsCircle2 />
        <BenefitsCircle3 />
        <BenefitsCircle4 />
      </WorksContainer>
    </WorksWrapper>
  );
};

export default Works;
