import React from "react";
import Button from "../components/Button";
import styled from "styled-components";

const About = () => {
  return (
    <AboutWrapper id="about">
      <div className="container about-container">
        <img 
          loading="lazy"
          src="/assets/images/lightVectorBg.svg"
          className="about-vector"
          alt=""
        />
        <div className="about-contents flex justify-between items-center">
          <div className="about-body">
            <h1>
              <span className="element">Let’s get know</span> about me closer
            </h1>
            <p>
              I'm Alomgir Hassan, a front end developer. I offer expert front
              end web development services, specializing in HTML, CSS,
              JavaScript, Bootstrap, React and Tailwind CSS. Building strong
              client relationships is my top priority. With transparent
              communication, timely updates, and a commitment to your project's
              success, let's collaborate to develop your front end website.
            </p>
            <Button>Discover more about me</Button>
          </div>
          <div className="about-image-section">
            <div className="image-wrapper">
              <img
               loading="lazy"
                className="about-img"
                src="/assets/images/heroImage2.png"
                alt=""
                width="100px"
              />
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  padding-top: 6rem;
  padding-inline: 1rem;
  padding-bottom: 6rem;
  .about-container {
    position: relative;
    .about-vector {
      position: absolute;
      top: 0;
      left: -30px;
      width: 800px;
      z-index: -999;
    }

    .about-contents {
      gap: 4rem;

      .about-body {
        max-width: 45%;
        line-height: 1.5;

        h1 {
          font-size: 2.7rem;
          font-weight: 900;
        }

        p {
          margin-top: 20px;
          margin-bottom: 25px;
        }
      }

      .about-image-section {
        position: relative;
        align-self: flex-end;
        justify-items: flex-end;
        max-width: 100%;
        height: 100%;

        .image-wrapper {
          position: relative;
          max-width: 100%;
          display: block;
          margin: 0 auto;

          .about-img {
            max-width: 100%;
            display: inline-block;
            width: 400px;
            border-radius: 50%;

            /* background-image: url("/assets/images/aboutImage.jpg");; */
          }

          &::after {
            position: absolute;
            content: "";
            left: 100%;
            transform: translateX(-100%);
            opacity: 0.5;
            border-radius: 50%;
            opacity: 0.5;
            top: 0;
            max-width: 400px;
            width: 100%;
            height: 400px;
            background-image: url("/assets/images/aboutImage.jpg");
            z-index: -99;
            box-shadow: 0 0 12px 1px purple;
          }
        }

        &::before {
          position: absolute;
          content: "";
          left: 100%;
          transform: translateX(-100%);
          opacity: 0.5;
          border-radius: 25px;
          top: 0;
          width: 100%;
          height: 400px;
          border-radius: 50%;
          background-image: url("/assets/images/CombinedShape.svg");
          z-index: -99;
        }
      }
    }
  }
  @media (max-width: 930px) {
    .about-container {
      .about-contents {
        .about-body {
          h1 {
            font-size: 2rem !important;
          }
          p {
            text-align: justify;
            font-size: 13px !important;
          }
        }
        .about-image-section {
          .image-wrapper {
            .about-img {
              width: 300px;
              height: 300px;
            }

            &::after {
              height: 300px;
            }
          }

          &::before {
            height: 300px;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .about-container {
      .about-vector {
        width: 250px;
        height: 500px;
        top: 244px;
        left: 95px;
      }
      .about-contents {
        /* align-items: flex-start;
      justify-content:flex-start; */
        .about-body {
          /* max-width: 100%; */
          h1 {
            font-size: 2rem;
          }
          p {
            text-align: justify;
            font-size: 14px;
          }
        }
        .about-image-section {
          .image-wrapper {
            img {
              background-image: url("/assets/images/aboutImage.jpg");
              padding: 10px;
              display: inline-block;
            }
          }
          .image-wrapper::after {
            content: "";
            background-color: red;
            width: 0px;
          }
        }
      }
    }
  }
  @media (max-width: 686px) {
    .about-container {
      .about-contents {
        .about-body {
          h1 {
            font-size: 1.5rem !important;
            /* background-color: red; */
          }
          p {
            text-align: justify;
            font-size: 10px !important;
          }
        }
      }
    }
  }
  @media (max-width: 570px) {
    .about-container {
      .about-vector {
        width: 250px;
        height: 500px;
        top: 244px;
        left: 95px;
      }
      .about-contents {
        flex-direction: column;
        /* background-color: red; */
        /* align-items: center;
        justify-content: center; */
        .about-body {
          max-width: 100%;
          h1 {
            font-size: 3rem;
          }
          p {
            text-align: justify;
          }
        }
        .about-image-section {
          align-self: center;
          .image-wrapper {
            img {
              background-image: url("/assets/images/aboutImage.jpg");
              padding: 10px;
              display: inline-block;
            }
          }
          .image-wrapper::after {
            content: "";
            background-color: red;
            width: 0px;
          }
        }
      }
    }
  }
`;

export default About;