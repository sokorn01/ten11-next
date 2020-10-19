import React from "react";
import "./NewInItem.module.css";

const NewInItem = (props) => {
  //   var history = useHistory();
  const productDetailHandler = () => {
    // history.push("/product-details");
  };
  return (
    <div className="new_in_item" onClick={productDetailHandler}>
      <img src={`${props.imagUrl}`} className="new_image" />
      <div className="new_item_label">
        <span>NEW IN / Hand-picked</span>
      </div>
    </div>
  );
};

export default NewInItem;
