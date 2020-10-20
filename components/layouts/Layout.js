import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import Header from "../Headers/HeaderSide";
import Footer from "../Footers/Footer";
import useSticky from "../../shared/hooks/useSticky";

const Layout = (props) => {
  const { isSticky, element, hideNav, } = useSticky();

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
