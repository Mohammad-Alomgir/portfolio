import { useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import ExampleComponent from "./AutoTextComplete";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import the AOS CSS
import Cevron from "./Cevron";

const Hero = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Animation duration (optional)
  //     once: true, // Whether animation should happen only once
  //   });
  // }, []);
  return (
    <HeroWrapper id="home">
      <div className="container">
        <div className="hero-contents">
          <img
            src="/assets/images/lightVectorBg.svg"
            className="hero-vector"
            alt=""
          />
          <div className="hero-body">
            <h1
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              I'm Mohammad Alomgir
            </h1>
            <ExampleComponent className="text-changer" />
            <div style={{display: "flex",gap: "1rem"}}>
            <Button className="hero-btn">
              <a href="https://drive.google.com/file/d/1RnNCUNrbtYbV-sdRZJ7-LpuJCmD5AmsF/view?usp=sharing">
                Download CV
              </a>
            </Button>
            <Button className="hero-btn">
              <a href="https://www.fiverr.com/users/mohamad_alomgir/">
                Hire ME
              </a>
            </Button>
            </div>
           
            <div id="about" className="cevron-container">
              <Cevron />
            </div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};
const HeroWrapper = styled.section`
  padding: 15rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/assets/images/heroBackground.jpg");
  z-index: 99999;

  width: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    left: 0;
    z-index: -9999999;
    top: 0;
  }
  .container {
    .hero-contents {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      img.hero-vector {
        position: absolute;
        width: 800px;
        top: -182px;
        right: 0;
        z-index: -99;
      }
      .hero-body {
        /* max-width: 40%; */
        width: 100%;
        line-height: 1.3;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-direction: column;
        h1 {
          background-image: linear-gradient(#7127ba, #843ce9, #4f228d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          /* -webkit-background-clip: text; */
          color: transparent;
          font-weight: 900;
          font-size: 5rem;
          /* background: repeating-radial-gradient(
          ellipse farthest-corner at bottom center,
          #440dcf 15%,
          #cf00b7 61%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
          animation: fadeIn 3s linear ease-in-out;
        }
        span {
          color: ${({ theme }) => theme.colors.textSecoundary};
          background-color: transparent;
          margin-top: -15px;
          font-size: 4rem;
          font-weight: 900;
          /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#fb83fa+0,e93cec+100;Pink+3D+%232 */
          background: linear-gradient(
            to bottom,
            #fb83fa 0%,
            #e93cec 100%
          ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      /* .hero-image {
      background-color: red;
      img {
        width: 100%;
      }
    } */
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: translateX(30px);
    }
    /* from{
      color: red;
      opacity: 0;
      transform: translateX(-30px);
    }to{
      color: blue;
      opacity: 1;
      transform: translateX(30px);
    } */
  }
  @media (max-width: 1070px) {
    .container {
      .hero-contents {
        .hero-body {
          h1 {
            font-size: 4rem;
            color: black;
            margin-bottom: 5px;
          }
          span {
            font-size: 3rem !important;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 10rem 0;
    .container {
      .hero-contents {
        .hero-body {
          h1 {
            font-size: 3rem;
            color: black;
            margin-bottom: 5px;
          }
          span {
            font-size: 2rem !important;
          }
        }
      }
    }
  }
  @media (max-width: 930px) {
    .container {
      .hero-contents {
        .hero-body {
          h1 {
            font-size: 3rem;
          }
          span {
            font-size: 2rem !important;
          }
        }
      }
    }
  }
  @media (max-width: 640px) {
    .container {
      .hero-contents {
        .hero-body {
          h1 {
            font-size: 2.5rem;
            color: black;
            margin-bottom: 5px;
          }
          span {
            font-size: 1rem !important;
          }
        }
      }
    }
  }
  @media (max-width: 430px) {
    padding: 8rem 0;
    .container {
      .hero-contents {
        justify-content: flex-start;
        align-items: flex-start;
        .hero-vector {
          display: none;
        }
        .hero-body {
          h1 {
            font-size: 25px !important;
            margin-bottom: 5px;
          }
          span {
            font-size: 20px !important;
          }
        }
      }
    }
  }
`;
export default Hero;
