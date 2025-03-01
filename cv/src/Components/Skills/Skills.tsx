import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  FreeMode,
  EffectFade,
} from "swiper/modules";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className="skills">
      <div className="wrapper">
        <h2>This is couple of my skills. Feel free to check them :)</h2>
        <div className="swiper_box">
          <Swiper
            effect={"coverflow"}
            // fadeEffect={{ crossFade: true }}
            // loopAdditionalSlides={1}
            watchSlidesProgress={true}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            // freeMode={true}
            speed={6000}
            // speed={0}
            spaceBetween={50}
            coverflowEffect={{
              rotate: -1,
              stretch: 20,
              depth: 150,
              modifier: 3,
              scale: 0.99,
            }}
            // pagination={true} //add pages bar
            // autoplay={{
            //   delay: 0,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }}
            modules={[
              EffectCoverflow,
              Pagination,
              Autoplay,
              // FreeMode,
              EffectFade,
            ]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SkillCard percent={77} skillName="HMTL" color="aqua" />
            </SwiperSlide>
            <SwiperSlide>
              <SkillCard percent={68} skillName="CSS" color="yellow" />
            </SwiperSlide>
            <SwiperSlide>
              <SkillCard
                percent={83}
                skillName="JavaScript"
                color="chartreuse"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SkillCard percent={57} skillName="Git" color="crimson" />
            </SwiperSlide>
            <SwiperSlide>
              <SkillCard percent={42} skillName="React" color="dodgerBlue" />
            </SwiperSlide>
            <SwiperSlide>
              <SkillCard percent={60} skillName="Java" color="lime" />
            </SwiperSlide>
            <SwiperSlide>
              <SkillCard percent={33} skillName="TypeScript" color="orange" />
            </SwiperSlide>
            {/* <SwiperSlide>
              <SkillCard percent={45} skillName="Node" color="pink" />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;
