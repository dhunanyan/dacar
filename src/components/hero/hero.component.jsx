import React from "react";
import {
  HeroButton,
  HeroContainer,
  HeroContent,
  HeroDescr,
  HeroTitle,
  HeroWrapper,
} from "./hero.styles";

import heroImage from "../../assets/hero.jpg";
import logo from "../../assets/logoGreen.png";

const Hero = () => {
  return (
    <HeroWrapper imageUrl={heroImage}>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            Czym jest <span>Dacar</span> Partner?
          </HeroTitle>

          <HeroDescr>
            <span>Zajmujemy</span> się pośredniczeniem w kilku popularnych
            firmach, które umożliwiają pracę oraz rozliczanie przez aplikacje
            mobilne, takie jak Uber, Bolt, FreeNow i inne.
          </HeroDescr>

          <HeroDescr>
            <span>Niezależnie</span> od tego, jakie aplikacje wybierzesz,
            zapewniamy rzetelne rozliczenie, terminowe przelewy oraz niskie
            prowizje za nasze usługi.
          </HeroDescr>

          <HeroDescr>
            <span>Sprawdź</span> jakie korzyści niesie współpraca z partnerem
            rozliczeniowym Dacar Partner i załóż konto już dziś
          </HeroDescr>

          <HeroButton>
            ZAREJESTRUJ SIĘ{" "}
            <div>
              <img src={logo} alt="Logo" />
            </div>
          </HeroButton>
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
