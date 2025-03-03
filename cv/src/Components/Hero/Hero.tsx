import profilePhoto from "../../assets/profilePhoto.jpg";
import portrait from "../../assets/stickers/portrait.png";
import icon1 from "../../assets/backendIcon.png";
import icon2 from "../../assets/stepIcon.png";
import sticker2 from "../../assets/stickers/sticker2.png";

const Hero = () => {
  return (
    <main>
      <section>
        <div className="hero_wrapper">
          <div className="hero">
            <div className="left">
              <div className="info">
                <p className="message">Welcome to My portfolio</p>
                <p className="title">
                  Hello my <br /> name is <span>Kevin.</span>{" "}
                </p>
                <p className="description">
                  I'm FullStack Developer from Poland. <br /> Creating
                  responsive, interactive websites <br /> and applications{" "}
                </p>
              </div>
              <div className="btns">
                <a href="#" className="download-btn">
                  Download CV
                </a>
                <a href="" className="see-work-btn">
                  See My work
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            <div className="right">
              <div className="responsiveStickerWrapper">
                <img className="responsiveSticker" src={sticker2} alt="image" />
              </div>

              <div className="borders">
                <div className="img-wrapper">
                  {/* <img src={profilePhoto} alt="image" /> */}
                  <img src={portrait} alt="image" />
                </div>
              </div>
              {/* <img src={icon1} alt="icon1" className="prism" /> */}
              {/* <img src={icon2} alt="icon2" className="spiral" /> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
