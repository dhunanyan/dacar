import React from "react";
import { BenefitsTitle } from "../benefits/benefits.styles";

import PLATFORMS_DATA from "./platforms.data";
import {
  PlatformsCards,
  PlatformsContainer,
  PlatformsDescr,
  PlatformsWrapper,
  PlatformsCircle1,
  PlatformsCircle2,
  PlatformsCircle3,
  PlatformsCircle4,
} from "./platforms.styles";

const Platforms = () => {
  return (
    <PlatformsWrapper>
      <PlatformsContainer>
        <BenefitsTitle>{PLATFORMS_DATA.title}</BenefitsTitle>

        <PlatformsCards>
          {PLATFORMS_DATA.descr.map((platformsDescr, index) => (
            <PlatformsDescr key={index}>{platformsDescr}</PlatformsDescr>
          ))}
        </PlatformsCards>

        <PlatformsCircle1 />
        <PlatformsCircle2 />
        <PlatformsCircle3 />
        <PlatformsCircle4 />
      </PlatformsContainer>
    </PlatformsWrapper>
  );
};

export default Platforms;
