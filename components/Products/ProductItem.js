import React from "react";
import "./ProductItem.css";
import "antd/dist/antd.css";
import Fade from "react-reveal/Fade";
import { GrFavorite } from "react-icons/gr";
import { formatNumber } from "../../shared/hooks/useGlobleFunction";
import Link from "next/link";

const ProductItem = (props) => {
  return (
    <Fade>
      <div className="column-image">
        <div className="product-media">
          <Link
            href={{
              pathname: "/productDetails",
              query: {
                productId: `${props.product_id}`,
              },
            }}
            as={`/${props.product_seo_url}`}
          >
            <div className="product-thumbnail">
              <img
                alt={props.pname}
                src={`${props.pathImage + props.image}`}
                className="img-style"
              />
            </div>
          </Link>
          <div className="product-body">
            <div className="row-color-icon">
              <p className="title-image">{props.total_color} Colors</p>
              <p className="a">
                <GrFavorite className="icon" />
              </p>
            </div>
            <p className="title-p">{props.pname}</p>
            <div className="product-List">
              <span id="product-total">
                US {formatNumber(props.price, true)}
              </span>
              {props.discount != null && (
                <React.Fragment>
                  <span id="price-discount-list">{props.discount}%Off</span>
                  <span id="price-after-discount-list">
                    US {formatNumber(props.price_discount, true)}
                  </span>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProductItem;
