import React from "react";
import Benefits from "../../components/benefits/benefits.component";
import WHY_DATA from "../../components/benefits/why.data";
import Contact from "../../components/contact/contact.component";
import HeroOffer from "../../components/hero-offer/hero-offer.component";
import OurOffer from "../../components/our-offer/our-offer.component";
import Platforms from "../../components/platforms/platforms.component";
import { benefitsSizes } from "../../components/styleVars";

const Offer = () => {
  return (
    <>
      <HeroOffer />
      <OurOffer title={"Nasza Oferta"} />
      <Benefits
        size={benefitsSizes.small}
        data={WHY_DATA}
        title={"Dlaczego Dacar Partner?"}
      />
      <Contact title={"Skontaktuj się"} />
      <Platforms />
    </>
  );
};

export default Offer;
