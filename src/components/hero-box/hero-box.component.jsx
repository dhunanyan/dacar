import React from "react";
import {
  HeroButton,
  HeroContent,
  HeroDescr,
  HeroTitle,
} from "./hero-box.styles";

import logo from "../../assets/logoGreen.png";

const HeroBox = ({ descrMap, buttonText, title }) => {
  const getTitle = (title) => {
    const firstPart = title.split("Dacar Partner")[0];
    const secondPart = title.split("Dacar Partner")[1];

    return (
      <HeroTitle>
        {firstPart} <span>Dacar</span> Partner {secondPart}
      </HeroTitle>
    );
  };

  return (
    <HeroContent>
      {getTitle(title)}

      {descrMap.map((descr) => {
        const firstWord = descr.split(" ")[0];
        const rest = descr.substring(firstWord.length + 1);

        return (
          <HeroDescr>
            <span>{firstWord}</span> {rest}
          </HeroDescr>
        );
      })}

      <HeroButton>
        {buttonText}{" "}
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </HeroButton>
    </HeroContent>
  );
};

export default HeroBox;
