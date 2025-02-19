import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className="skills">
      <div className="wrapper">
        <h2>This is couple of my skills. Feel free to check them :)</h2>
        <div className="swiper_box">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
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
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;
