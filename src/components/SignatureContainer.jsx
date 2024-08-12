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
    <a href="https://www.fiverr.com/mohamad_alomgir/create-clickable-html-email-signature" data-bs-target="blank" className={`signatureImage ${className}`}>
      <img
        data-aos="zoom-in"
        src={img}
        alt="card"
      />
    </a>
  );
};

export default SignatureContainer;
