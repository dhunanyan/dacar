import React from "react";
import Benefits from "../../components/benefits/benefits.component";
import HeroHome from "../../components/hero-home/hero-home.component";

import BENEFITS_DATA from "../../components/benefits/benefits.data";
import Contact from "../../components/contact/contact.component";

const Home = () => {
  return (
    <>
      <HeroHome />
      <Benefits data={BENEFITS_DATA} title={"Korzyści ze Współpracy"} />
      <Contact title="Contact" />
    </>
  );
};

export default Home;
