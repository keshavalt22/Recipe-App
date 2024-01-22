import About1 from "../assets/images/About1.jpg";
import About2 from "../assets/images/About2.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about" id="about">
      <p>Special Moments</p>
      <h2>About Us</h2>
      <p className="dull">Unveiling the art of home cooking, where each recipe tells a story.</p>
      <div className="about-box">
        <div className="box">
          <img src={About1} alt="food img" />
        </div>
        <div className="box about-text">
          <div>
            <p>taste perception</p>
            <h3>TRADITINAL <br />& <br /> MODERN</h3>
            <p className="dull">Where old flavors find new expressions, and tradition meets a fresh culinary vibe</p>
            <Link to="/about">
              <button className="about-btn">READ MORE</button>
            </Link>
          </div>
        </div>
        <div className="box">
          <img src={About2} alt="food img" />
        </div>
      </div>
    </section>
  )
}

export default About;