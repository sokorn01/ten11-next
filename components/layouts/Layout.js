import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import Header from "../Headers/HeaderSide";
import Footer from "../Footers/Footer";
import useSticky from "../../shared/hooks/useSticky";
import NProgress from "nprogress";
import Router from "next/router";

NProgress.configure({
  showSpinner: false,
  easing: "ease",
  speed: 500,
  trickle: false,
});

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = (props) => {
  const { isSticky, element, hideNav } = useSticky();
  return (
    <React.Fragment>
      <Head>
        <title>
          {props.metaData.length === 0 ? "" : props.metaData.meta_title}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={
            props.metaData.length === 0 ? "" : props.metaData.meta_description
          }
        />
        <meta
          name="keywords"
          content={
            props.metaData.length === 0 ? "" : props.metaData.meta_keyword
          }
        />
        <meta
          property="og:title"
          content={
            props.metaData.length === 0 ? "" : props.metaData.meta_description
          }
        />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.REACT_APP_API_URL}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        {props.cannonical && (
          <link
            rel="cannonical"
            href={`${process.env.REACT_APP_API_URL}${props.cannonical}`}
          />
        )}
        <link rel="icon" type="image/ico" href="/static/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
        />
      </Head>
      <Header
        isSticky={isSticky}
        element={element}
        hideNav={hideNav}
        allMenu={props.menu}
        pathImage={props.pathImage}
      />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    metaData: state.metadata.metaData,
  };
};

export default connect(mapStateToProps)(Layout);
