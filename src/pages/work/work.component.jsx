import React from "react";
import Benefits from "../../components/benefits/benefits.component";
import BENEFITS_DATA from "../../components/benefits/benefits.data";
import HeroWork from "../../components/hero-work/hero-work.component";
import Works from "../../components/works/works.component";

const Work = () => {
  return (
    <>
      <HeroWork />
      <Works />
      <Benefits data={BENEFITS_DATA} title={"Korzyści ze Współpracy"} />
    </>
  );
};

export default Work;
