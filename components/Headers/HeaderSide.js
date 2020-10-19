import React, { useEffect } from "react";
import "./HeaderSide.css";
import Link from "next/link";
import cookieCutter from "cookie-cutter";
import { connect } from "react-redux";
import { BsBag } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import Container from "../Containers/Container";
import { getMetaData } from "../../store/actions/metaDataAction";

const HeaderSide = (props) => {
  const productListHanlder = (menu) => {
    cookieCutter.set("category_seo", menu.category_seo_url);
    props.getMetaData({
      meta_title: menu.meta_title,
      meta_description: menu.meta_description,
      meta_keyword: menu.meta_keyword,
    });
  };

  return (
    <React.Fragment>
      <div className="header-wrapper">
        <div className="header-content">
          <div
            className={
              props.hideNav ? "hide-on-scoll" : "hide-on-scoll show-on-scoll"
            }
          >
            <Container>
              <div className="utili-header">
                <div className="row-container">
                  <div className="row-header">
                    <div className="col-md-6">
                      <div className="col-left">
                        <FiPhone style={{ marginRight: 4 }} />
                        <span>+855 81 999 716</span>
                        <span className="line-style">|</span>
                        <AiOutlineMail style={{ marginRight: 4 }} />
                        <span>sale@ten11kh.com</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="col-right">
                        <Link href="/account">
                          <a>
                            <span className="i-user-xs icon-user">Log in</span>
                          </a>
                        </Link>
                        <div className="cart_bag">
                          <BsBag size={20} style={{ marginRight: 3 }} />
                          <span className="cart_num">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ulity-logo" ref={props.element}>
                <Link href="/">
                  <a>
                    <img
                      src={`${process.env.REACT_APP_API_URL_IMAGE}logo/logo512.png`}
                      className="logo-style"
                    />
                  </a>
                </Link>
              </div>
              <div className="header-container menu-container">
                <div
                  className={
                    props.isSticky ? "navbar-menu navbar-sticky" : "navbar-menu"
                  }
                >
                  <nav id="navigation" role="navigation">
                    <div className="menu-content">
                      <ul className="menu-category level-1">
                        {props.allMenu.map((menu, index) => (
                          <li key={index}>
                            <Link
                              href={{
                                pathname: "product/[...slug]",
                                query: {
                                  page: "1",
                                },
                              }}
                              as={`product/${menu.category_seo_url}`}
                            >
                              <a onClick={() => productListHanlder(menu)}>
                                <span>{menu.name}</span>
                              </a>
                            </Link>
                            <div className="level-2">
                              <Container>
                                <div className="sub-menu-container">
                                  {menu.childs.map((menu1, index) => (
                                    <div className="col-md-4" key={index}>
                                      <div className="sub-menu-header">
                                        <span>{menu1.name}</span>
                                      </div>
                                      <div>
                                        <ul className="sub-header-content">
                                          {menu1.childs.map((menu2, index) => (
                                            <li key={index}>
                                              <Link
                                                href={{
                                                  pathname:
                                                    "/product/[...mainCategory]/[...slug]",
                                                  query: {
                                                    id: `${menu2.category_id}`,
                                                    page: "1",
                                                  },
                                                }}
                                                as={`/product/${menu2.name}/?id=${menu2.category_id}&&page=1`}
                                              >
                                                <a
                                                  onClick={() =>
                                                    productListHanlder(menu2)
                                                  }
                                                >
                                                  <span
                                                    id={`${
                                                      menu2.name === "Sale"
                                                        ? "color-sale"
                                                        : ""
                                                    }`}
                                                  >
                                                    {menu2.name}
                                                  </span>
                                                </a>
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </Container>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    allMenu: state.menu.menuData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMetaData: (param) => dispatch(getMetaData(param)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSide);
