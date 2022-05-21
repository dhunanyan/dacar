import React, { useState } from "react";
import WorksWork from "../works-work/works-work.component";

import WORKS_DATA from "./works.data";
import {
  WorksCards,
  WorksContainer,
  WorksTitle,
  WorksWrapper,
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
      </WorksContainer>
    </WorksWrapper>
  );
};

export default Works;
