import React from "react";
import Benefits from "../../components/benefits/benefits.component";
import HeroHome from "../../components/hero-home/hero-home.component";

import BENEFITS_DATA from "../../components/benefits/benefits.data";

const Home = () => {
  return (
    <>
      <HeroHome />
      <Benefits data={BENEFITS_DATA} title={"Korzyści ze Współpracy"} />
    </>
  );
};

export default Home;
