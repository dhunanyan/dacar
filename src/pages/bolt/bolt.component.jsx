import React from "react";
import HeroBolt from "../../components/hero-bolt/hero-bolt.component";
import Partner from "../../components/partner/partner.component";
import PARTNER_DATA from "../../components/partner/partner.data";
import CONDITIONS_DATA from "../../components/conditions/conditions.data";
import Conditions from "../../components/conditions/conditions.component";
import HOW_DATA from "../../components/how/how.data";
import How from "../../components/how/how.component";
import Cooperation from "../../components/cooperation/cooperation.component";
import COOPERATION_DATA from "../../components/cooperation/cooperation.data";

const Bolt = () => {
  return (
    <>
      <HeroBolt />
      <Partner data={PARTNER_DATA["bolt"]} />
      <Conditions data={CONDITIONS_DATA["bolt"]} />
      <How data={HOW_DATA["bolt"]} />
      <Cooperation data={COOPERATION_DATA["bolt"]} />
    </>
  );
};

export default Bolt;
