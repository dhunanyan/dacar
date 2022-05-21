import React from "react";
import Conditions from "../../components/conditions/conditions.component";
import CONDITIONS_DATA from "../../components/conditions/conditions.data";
import HeroFreeNow from "../../components/hero-free-now/hero-free-now.component";
import Partner from "../../components/partner/partner.component";
import PARTNER_DATA from "../../components/partner/partner.data";
const FreeNow = () => {
  return (
    <>
      <HeroFreeNow />
      <Partner data={PARTNER_DATA["free-now"]} />
      <Conditions data={CONDITIONS_DATA["free-now"]} />
    </>
  );
};

export default FreeNow;
