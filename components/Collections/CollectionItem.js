import React from "react";
import "./CollectionItem.css";

const CollectionItem = ({ collectionName, image }) => {
  return (
    <div className="collect_content">
      <img src={image} className="img_collection" />
      <h2>{collectionName}</h2>
    </div>
  );
};

export default CollectionItem;
