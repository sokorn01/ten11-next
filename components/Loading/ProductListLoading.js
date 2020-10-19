import React, { useState } from "react";
import "./ProductListLoading.css";
import HeaderLoading from "./HeaderLoading";
import Container from "../Containers/Container";
import Footer from "../Footers/Footer";
import { Skeleton } from "antd";

const ProductListLoading = () => {
  const [state, setState] = useState({
    active: true,
    size: "small",
    avatarShape: "circle",
  });

  let dataLoadinglenght = 18;
  let dataLoading = [];
  for (var i = 0; i < dataLoadinglenght; i++) {
    dataLoading.push(i);
  }

  return (
    <React.Fragment>
      <Container>
        <HeaderLoading />
        <div className="product-list-loading">
          <div className="sidebar-loading">
            <Skeleton.Button active={state.size} size={state.size} />
          </div>
          <div className="product-list-loading-content">
            <div className="loading-content">
              {dataLoading.map((loading, index) => (
                <div className="loading-content-item" key={index}>
                  <Skeleton.Button active={state.size} size={state.size} />
                  <div className="content-bottom">
                    <div className="content-bottom-side">
                      <Skeleton.Button
                        active={state.size}
                        size={state.size}
                        className="content-bottom-header"
                      />
                      <Skeleton.Button
                        active={state.size}
                        size={state.size}
                        className="content-bottom-title"
                      />
                    </div>
                    <Skeleton.Button
                      active={state.size}
                      size={state.size}
                      shape={"circle"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default ProductListLoading;
