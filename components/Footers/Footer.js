import React from "react";
import "./Footer.css";
import AboutUs from "./AboutUs";
import FollowUs from "./FollowUs";
import CustomerService from "./CustomerService";
import Container from "../Containers/Container";

const Footer = () => {
  return (
    <div className="footer_container">
      <Container>
        <div className="footer_content">
          <AboutUs />
          <FollowUs />
          <CustomerService />
        </div>
      </Container>
      <div className="footer_bottom">
        <span>&copy; Copyright 2020 TEN11. All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
