import "./Banner.css";
import src from "../assets/refer.jpg";
const Banner = ({ handleOpen }) => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-content">
          <h2>Let's Learn & Earn</h2>
          <p>Get a chance to win up to Rs. 15,000</p>
          <button className="refer-btn" onClick={handleOpen}>
            Refer Now
          </button>
        </div>
        <div className="banner-image">
          <img src={src} alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
