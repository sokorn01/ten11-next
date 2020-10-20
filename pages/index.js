import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cookies from "cookies";
import cookieCutter from "cookie-cutter";
import { useSelector, useDispatch } from "react-redux";
import { initializeStore } from "../store";
import Layout from "../components/layouts/Layout";
import NewIn from "../components/NewIn/NewIn";
import Collection from "../components/Collections/Collection";
import ShopIntroduction from "../components/Introductions/ShopIntroduction";
import SwipperSlider from "../components/BannerSlide/SwipperSlider";
import SaleIntroduction from "../components/Introductions/SaleIntroduction";
import { serviceApiFormData } from "../shared/hooks/seviceApi";
import { useRouter } from "next/router";
import { getMetaData } from "../store/actions/metaDataAction";
import { fetchMenu, saveMenu } from "../store/actions/menuAction";

const images = [
  {
    id: 0,
    image: `${process.env.REACT_APP_API_URL_IMAGE}/slide-2500px/VC_Z2739.jpg`,
  },
  {
    id: 1,
    image: `${process.env.REACT_APP_API_URL_IMAGE}/banner (1).jpg`,
  },
  {
    id: 2,
    image: `${process.env.REACT_APP_API_URL_IMAGE}/banner (3).jpg`,
  },
];

const Home = (props) => {
  console.log(props);
  const globalState = useSelector((state) => state.metadata.d);
  const dispatch = useDispatch();
  console.log(props);
  const router = useRouter();

  useEffect(() => {
    props.getMetaData({
      meta_title: "TEN11 - Retail store in Phnom Penh & Siem Reap, Cambodia",
      meta_description:
        "We are a retail clothing store offering various brands of original product. Located in Phnom Penh and Siem Reap, Cambodia.",
      meta_keyword:
        "Clothes Shop, Factory outlet, Zando Brand,  Scottmo Brand, Men Shop, Women Shop, Kids Shop, Accessory Shop,  Phnom Penh, Siem Reap, The Heritage Walk, Angkor Wat, Siem Reap Airport, Preah Ang Chek Preah Ang Chom, The Park Community Mall, TK Avenue, Zaman University, Aeon Mall, City Mall, Olympic Stadium, Shopping Mall, Cambodia",
    });
    props.saveMenu(props.menu.menu);
  }, []);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout menu={props.menu.menu} pathImage={props.pathImage}>
      <div>{globalState}</div>
      <SaleIntroduction />
      {/* <SwipperSlider images={images} /> */}
      <ShopIntroduction />
      <Collection pathImage={props.pathImage} />
      <NewIn pathImage={props.pathImage} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  console.log(process.env.REACT_APP_API_URL_IMAGE);
  const api = serviceApiFormData();
  const res = await api.post("MenuApp/getMenu");
  const menu = res.data;
  return {
    props: {
      menu,
      pathImage: process.env.REACT_APP_API_URL_IMAGE,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMetaData: (param) => dispatch(getMetaData(param)),
    saveMenu: (param) => dispatch(saveMenu(param)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
