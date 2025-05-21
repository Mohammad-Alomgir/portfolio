import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

const SignatureContainer = ({ className, img }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      once: true,
      offset: 150, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <a
        href="https://www.fiverr.com/expert_cms"
        data-bs-target="blank"
        target="_blank"
        className={`signatureImage ${className}`}
      >
        <img data-aos="zoom-in" src={img} alt="card" />
        <div className="findMeHere">
          <a href="https://www.fiverr.com/users/expert_cms" target="_blank">
            <img src="/assets/images/fiver.png" alt="fiverlogo" />
            <span style={{display: "block"}} className="themeButton">Fiverr</span>
          </a>
          {/* <a href="#" target="_blank">
            <img src="/assets/images/upwork.png" alt="upworklogo" />
            <span className="themeButton">Upwork</span>
          </a> */}
        </div>
      </a>
    </>
  );
};

export default SignatureContainer;
