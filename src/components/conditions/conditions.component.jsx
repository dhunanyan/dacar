import React from "react";
import Commission from "../commission/commission.component";

import {
  BenefitsCircle3,
  BenefitsCircle4,
  ConditionsContainer,
  ConditionsContent,
  ConditionsWrapper,
  ConditionsContentInner,
  ConditionsButton,
  ConditionsList,
  ConditionsItem,
  ConditionsSubtitle,
} from "./conditions.styles";

import logo from "../../assets/logoGreen.png";
import { BenefitsTitle } from "../benefits/benefits.styles";

const Conditions = ({ data }) => {
  const { title, list, subtitle, descr, url } = data;
  return (
    <ConditionsWrapper>
      <ConditionsContainer>
        <BenefitsTitle>{title}</BenefitsTitle>

        <ConditionsContent>
          <ConditionsList>
            <ConditionsSubtitle>{subtitle}</ConditionsSubtitle>
            {list.map((descrItem, index) => {
              const firstWord = descrItem.split(" ")[0];
              const rest = descrItem.substring(firstWord.length + 1);

              return (
                <ConditionsItem key={index}>
                  <span>{firstWord}</span> {rest}
                </ConditionsItem>
              );
            })}

            {descr.split("UBER_URL").length > 1 ? (
              <ConditionsSubtitle>
                {descr.split("UBER_URL")[0]}{" "}
                <a href={url} target="_blank" rel="noreferrer">
                  Tutaj
                </a>
                {descr.split("UBER_URL")[1]}
              </ConditionsSubtitle>
            ) : (
              <ConditionsSubtitle>{descr}</ConditionsSubtitle>
            )}
          </ConditionsList>
          <ConditionsContentInner>
            <Commission />

            <ConditionsButton>
              SKONTAKTUJ SIĘ
              <div>
                <img src={logo} alt="Logo" />
              </div>
            </ConditionsButton>
          </ConditionsContentInner>
        </ConditionsContent>

        <BenefitsCircle3 />
        <BenefitsCircle4 />
      </ConditionsContainer>
    </ConditionsWrapper>
  );
};

export default Conditions;
