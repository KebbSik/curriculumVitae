interface Props {
  cardNumber: number;
}

export const Card = ({ cardNumber }: Props) => {
  return (
    <div className="card_wrapper">
      <div className="cardData">
        <div className="top_wrapper">
          <div className="top">
            <div className="preview">
              <div>IMAGE {cardNumber}</div>
            </div>
          </div>
        </div>
        <div className="bottom_wrapper">
          <div className="bottom">
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ut
              atque est corrupti temporibus consequatur ipsa. Ut, perferendis.
              Molestias dolore nemo quo eius cupiditate fugiat consequuntur
              itaque tenetur dignissimos hic.
            </p>
            <div className="buttons">
              <button className="aboutMe">About Me</button>
              <button className="hireMe">Hire Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
