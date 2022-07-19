import React from "react";
import Benefits from "../../components/benefits/benefits.component";
import WHY_DATA from "../../components/benefits/why.data";
import Contact from "../../components/contact/contact.component";
import HeroOffer from "../../components/hero-offer/hero-offer.component";
import OurOffer from "../../components/our-offer/our-offer.component";
import Platforms from "../../components/platforms/platforms.component";

const Offer = () => {
  return (
    <>
      <HeroOffer />
      <OurOffer />
      <Benefits data={WHY_DATA} title={"Dlaczego Dacar Partner?"} />
      <Platforms />
      <Contact title={"Skontaktuj się"} />
    </>
  );
};

export default Offer;
