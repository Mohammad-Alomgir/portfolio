import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

const SignatureContainer = ({ className, img }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      once: true,
      offset: 150// Whether animation should happen only once
    });
  }, []);
  return (
    <img
      data-aos="zoom-in"
      className={`signatureImage ${className}`}
      src={img}
      alt="card"
    />
  );
};

export default SignatureContainer;
