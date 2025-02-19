import { useEffect } from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Card } from "../Card/Card";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Slider = () => {
  return (
    <section className="mainContainer">
      <div className="innerBody">
        <div className="prevBtn">
          <IoIosArrowBack />
        </div>
        <div className="nextBtn">
          <IoIosArrowForward />
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          grabCursor={true}
          navigation={{ nextEl: ".nextBtn", prevEl: ".prevBtn" }}
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1 },
            760: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <Card cardNumber={1} />
          </SwiperSlide>
          <SwiperSlide>
            <Card cardNumber={2} />
          </SwiperSlide>
          <SwiperSlide>
            <Card cardNumber={3} />
          </SwiperSlide>
          <SwiperSlide>
            <Card cardNumber={4} />
          </SwiperSlide>
          <SwiperSlide>
            <Card cardNumber={5} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;

// 9:34 - deal with swiperJS
// https://www.youtube.com/watch?v=l--CeyjFsms&ab_channel=Codehal
