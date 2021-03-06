import React from "react";
import Benefits from "../../components/benefits/benefits.component";
import BENEFITS_DATA from "../../components/benefits/benefits.data";
import Contact from "../../components/contact/contact.component";
import HeroWork from "../../components/hero-work/hero-work.component";
import { benefitsSizes } from "../../components/styleVars";
import Works from "../../components/works/works.component";

const Work = () => {
  return (
    <>
      <HeroWork />
      <Works title={"Praca"} />
      <Benefits
        size={benefitsSizes.big}
        data={BENEFITS_DATA}
        title={"Korzyści ze Współpracy"}
      />
      <Contact title={"Skontaktuj się"} />
    </>
  );
};

export default Work;
