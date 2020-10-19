import React, { useEffect } from "react";
import "./NewIn.css";
import Container from "../Containers/Container";
import NewInItem from "./NewInItem";
import sal from "sal.js";

const images = [
  {
    id: 1,
    imagUrl: `${process.env.REACT_APP_API_URL_IMAGE}list-720px/VC_Z2672.jpg`,
  },
  {
    id: 2,
    imagUrl: `${process.env.REACT_APP_API_URL_IMAGE}list-720px/VC_Z2824.jpg`,
  },
  {
    id: 3,
    imagUrl: `${process.env.REACT_APP_API_URL_IMAGE}list-720px/VC_Z3196.jpg`,
  },
  {
    id: 4,
    imagUrl: `${process.env.REACT_APP_API_URL_IMAGE}list-720px/VC_Z3504.jpg`,
  },
];

const NewIn = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <Container>
      <div className="new_container">
        <div className="new_header">
          <span id={"header_bold"}>NEW IN</span>
          <span id="header_line">/</span>
          <span>Hand-pickek daily from TEN11</span>
        </div>
        <div className="new_content">
          {images.map((item, index) => (
            <div
              className="new_item"
              key={index}
              data-sal-duration="1200"
              data-sal="fade"
              data-sal-delay={`${200 * (index + 1)}`}
              data-sal-easing="ease-out-bounce"
            >
              <NewInItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NewIn;
