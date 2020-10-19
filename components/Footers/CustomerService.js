import React from "react";
import HeaderFooter from "./HeaderFooter";
import IconWithText from "../../shared/components/UIElements/Lists/IconWithText";

const CustomerService = () => {
  return (
    <div>
      <HeaderFooter headerText="Customer Services" />
      <IconWithText Text="Help & Contact us" className="icon_text" />
      <IconWithText Text="Order & Shipping" className="icon_text" />
      <IconWithText Text="Terms & Conditions" className="icon_text" />
      <IconWithText Text="Privacy Policy" className="icon_text" />
    </div>
  );
};

export default CustomerService;
