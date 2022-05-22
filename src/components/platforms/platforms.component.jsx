import React from "react";

import PLATFORMS_DATA from "./platforms.data";
import {
  PlatformsCards,
  PlatformsContainer,
  PlatformsTitle,
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
      <PlatformsTitle>{PLATFORMS_DATA.title}</PlatformsTitle>

      <PlatformsContainer>
        <PlatformsCards>
          {PLATFORMS_DATA.map((Platforms, index) => (
            <PlatformsDescr
              key={index}
              Platforms={Platforms}
              PlatformsIndex={index}
            />
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
