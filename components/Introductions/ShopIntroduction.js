import React from "react";
import "./ShopIntroduction.css";
import ButtonItem from "../../shared/components/UIElements/Buttons/ButtonItem";
import Container from "../Containers/Container";
// import { useHistory } from "react-router-dom";

const ShopIntroduction = () => {
  //   var history = useHistory();

  const shopHandlerWomen = (e) => {
    // history.push({
    //   pathname: "/product/women",
    //   state: { id: "" },
    // });
  };
  const shopHandlerMen = (e) => {
    // history.push({
    //   pathname: "/product/men",
    //   state: { id: "" },
    // });
  };

  return (
    <Container>
      <div className="shop_container">
        <h2>A Perfect Outfits</h2>
        <span>
          Checks, pleats and delicate details: this season, you're spoilt fir
          choice. Meet the syles of the season
        </span>
        <div className="shop_button_container">
          <ButtonItem
            className="button_women"
            label="SHOP WOMEN"
            onClick={shopHandlerWomen}
          />
          <ButtonItem
            className="button_men"
            label="SHOP MEN"
            onClick={shopHandlerMen}
          />
        </div>
      </div>
    </Container>
  );
};

export default ShopIntroduction;
