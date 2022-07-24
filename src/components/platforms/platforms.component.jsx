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
  PlatformsCardsContainer,
  PlatformsImages,
  PlatformsImage,
} from "./platforms.styles";

import boltLogo from "../../assets/boltLogo.jpg";
import uberLogo from "../../assets/uberLogo.png";
import freenowLogo from "../../assets/freenowLogo.png";

const Platforms = () => {
  return (
    <PlatformsWrapper>
      <PlatformsContainer>
        <BenefitsTitle>{PLATFORMS_DATA.title}</BenefitsTitle>

        <PlatformsCards>
          <PlatformsCardsContainer>
            {PLATFORMS_DATA.descr.map((platformsDescr, index) => (
              <PlatformsDescr key={index}>{platformsDescr}</PlatformsDescr>
            ))}
          </PlatformsCardsContainer>

          <PlatformsImages>
            <PlatformsImage>
              <img src={boltLogo} alt="Bolt Logo" />
            </PlatformsImage>
            <PlatformsImage>
              <img src={uberLogo} alt="Uber Logo" />
            </PlatformsImage>
            <PlatformsImage>
              <img src={freenowLogo} alt="FreeNow Logo" />
            </PlatformsImage>
          </PlatformsImages>
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
