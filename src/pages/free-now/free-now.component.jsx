import React from "react";
import Conditions from "../../components/conditions/conditions.component";
import CONDITIONS_DATA from "../../components/conditions/conditions.data";
import Contact from "../../components/contact/contact.component";
import Cooperation from "../../components/cooperation/cooperation.component";
import COOPERATION_DATA from "../../components/cooperation/cooperation.data";
import HeroFreeNow from "../../components/hero-free-now/hero-free-now.component";
import How from "../../components/how/how.component";
import HOW_DATA from "../../components/how/how.data";
import Partner from "../../components/partner/partner.component";
import PARTNER_DATA from "../../components/partner/partner.data";
import { benefitsSizes } from "../../components/styleVars";
const FreeNow = ({ contactRef }) => {
  return (
    <>
      <HeroFreeNow />
      <Partner data={PARTNER_DATA["free-now"]} />
      <Conditions data={CONDITIONS_DATA["free-now"]} />
      <How data={HOW_DATA["free-now"]} />
      <Cooperation
        size={benefitsSizes.big}
        data={COOPERATION_DATA["free-now"]}
      />
      <Contact title={"Skontaktuj się"} />
    </>
  );
};

export default FreeNow;
