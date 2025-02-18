import React from "react";

interface Props {
  cardNumber: number;
}

export const Card = ({ cardNumber }: Props) => {
  return (
    <div className="swiper-slide card">
      <div className="cardContent">
        <div className="image">
          <div>IMAGE {cardNumber}</div>
        </div>

        <div className="socialMedia">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-github"></i>
        </div>

        <div className="nameProfession">
          <span className="name">Project Name</span>
          <span className="profession">Project type</span>
        </div>

        <div className="rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>

        <div className="button">
          <button className="aboutMe">About</button>
          <button className="hireMe">Try it</button>
        </div>
      </div>
    </div>
  );
};
