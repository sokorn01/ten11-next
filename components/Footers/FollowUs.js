import React from "react";
import HeaderFooter from "./HeaderFooter";
import IconWithText from "../../shared/components/UIElements/Lists/IconWithText";
import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri";

const FollowUs = () => {
  return (
    <div>
      <HeaderFooter headerText="Follow us" />
      <IconWithText
        Icon={<RiFacebookCircleLine style={{ color: "#fff" }} />}
        Text="Facebook"
        className="icon_text"
      />
      <IconWithText
        Icon={<RiInstagramLine style={{ color: "#fff" }} />}
        Text="Instagram"
        className="icon_text"
      />
    </div>
  );
};

export default FollowUs;
