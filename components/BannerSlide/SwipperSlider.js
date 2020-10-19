import React, {useEffect, useState} from "react";
import Styles from "./SwipperSlider.module.css";
import Swiper from "react-id-swiper";
import Container from "../Containers/Container";
// import 'swiper/css/swiper.css'


const getWidth = () => window.innerWidth;

const SwipperSlider = ({ images }) => {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      waitForTransition: true,
    },
    speed: 2000,
    simulateTouch: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <Container>
      <div className={Styles.swipper_slider_container}>
        <Swiper {...params} rebuildOnUpdate>
          {images.map((image, i) => (
            <div className={Styles.slide_content} key={i}>
              <img
                src={image.image}
                style={{ width: 1500, height: "100%" }}
              />
            </div>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default SwipperSlider;
