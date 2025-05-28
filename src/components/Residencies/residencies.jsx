import React from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./residencies.css";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper 
          {...sliderSettings}
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
        >
          <SlideNextButton />
          {/* slider */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

// eslint-disable-next-line react-refresh/only-export-components
const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};