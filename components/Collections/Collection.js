import React, { useEffect } from "react";
import "./Collection.css";
import Container from "../Containers/Container";
import CollectionItem from "./CollectionItem";
import sal from "sal.js";

const Collection = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <Container>
      <div className="collection_container">
        <div
          data-sal-duration="1200"
          data-sal="slide-up"
          data-sal-delay={200}
          data-sal-easing="ease-out-bounce"
        >
          <CollectionItem
            collectionName="Men's collection"
            image={`${process.env.REACT_APP_API_URL_IMAGE}full-size-1080px/VC_Z3132.jpg`}
          />
        </div>
        <div
          data-sal-duration="1200"
          data-sal="slide-down"
          data-sal-delay={500}
          data-sal-easing="ease-out-bounce"
        >
          <CollectionItem
            collectionName="Women's collection"
            image={`${process.env.REACT_APP_API_URL_IMAGE}full-size-1080px/VC_Z2977.jpg`}
          />
        </div>
      </div>
    </Container>
  );
};

export default Collection;
