import React from "react";
import HeaderFooter from "./HeaderFooter";
import { GiSmartphone } from "react-icons/gi";
import IconWithText from '../../shared/components/UIElements/Lists/IconWithText'


function AboutUs() {
  return (
    <div>
      <HeaderFooter headerText="TEN11 App" />
      <IconWithText
        Icon={<GiSmartphone style={{ color: "#fff" }} />}
        Text="IOS & Android"
      />
    </div>
  );
}

export default AboutUs;
