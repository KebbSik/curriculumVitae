import React from "react";

interface Props {
  isReversed?: boolean;
}

const AboutCard = ({ isReversed }: Props) => {
  return (
    <div className="about_card">
      <div
        className={
          isReversed ? "about_container card_reverse" : "about_container"
        }
      >
        <div className="card_left">
          {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
        </div>
        <div className="card_right">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            ratione et in similique harum ab! Expedita beatae ipsa natus odit
            fugit ut, harum tempora? Ex ipsum praesentium quisquam non commodi
            cupiditate consequuntur voluptatibus blanditiis aspernatur modi
            corrupti, incidunt recusandae optio?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
