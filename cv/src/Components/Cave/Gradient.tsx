import React from "react";

interface Props {
  reversed?: boolean;
}

const Gradient = ({ reversed }: Props) => {
  return (
    <div className="gradient_container">
      <div
        className={
          reversed ? "absolute_gradient reversed" : "absolute_gradient"
        }
      />
    </div>
  );
};

export default Gradient;
