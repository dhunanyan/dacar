import React from "react";

import HeroUber from "../../components/hero-uber/hero-uber.component";
import Partner from "../../components/partner/partner.component";
import Conditions from "../../components/conditions/conditions.component";

import How from "../../components/how/how.component";

import PARTNER_DATA from "../../components/partner/partner.data";
import CONDITIONS_DATA from "../../components/conditions/conditions.data";
import HOW_DATA from "../../components/how/how.data";

const Uber = () => {
  return (
    <>
      <HeroUber />
      <Partner data={PARTNER_DATA["uber"]} />
      <Conditions data={CONDITIONS_DATA["uber"]} />
      <How data={HOW_DATA["uber"]} />
    </>
  );
};

export default Uber;
