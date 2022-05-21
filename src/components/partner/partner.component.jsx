import React from "react";
import Commission from "../commission/commission.component";

import {
  BenefitsCircle3,
  BenefitsCircle4,
  PartnerContainer,
  PartnerContent,
  PartnerDescrs,
  PartnerDescr,
  PartnerTitle,
  PartnerWrapper,
  PartnerContentInner,
  PartnerButton,
} from "./partner.styles";

import logo from "../../assets/logoGreen.png";

const Partner = ({ data }) => {
  const { title, descr } = data;
  return (
    <PartnerWrapper>
      <PartnerContainer>
        <PartnerTitle>{title}</PartnerTitle>

        <PartnerContent>
          <PartnerDescrs>
            {descr.map((descrItem, index) => (
              <PartnerDescr key={index}>{descrItem}</PartnerDescr>
            ))}
          </PartnerDescrs>
          <PartnerContentInner>
            <Commission />

            <PartnerButton>
              ZAREJESTRUJ SIĘ
              <div>
                <img src={logo} alt="Logo" />
              </div>
            </PartnerButton>
          </PartnerContentInner>
        </PartnerContent>

        <BenefitsCircle3 />
        <BenefitsCircle4 />
      </PartnerContainer>
    </PartnerWrapper>
  );
};

export default Partner;
