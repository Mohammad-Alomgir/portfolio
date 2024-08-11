import styled from "styled-components";
import Service from "../components/Service";

const Skills = () => {
  return (
    <SkillWrapper id="skills">
      <div className="container service-container">
        <img
          src="/assets/images/Gradient.svg"
          className="gradient-background"
          alt=""
        />
        <div className="skill-contents">
          <div className="section-heading">
            <h1 className="service-title element">Services</h1>
          </div>
          <div className="services">
            <Service
              icon="/assets/images/serviceIcon1.png"
              title="Custom Frontend Developement"
              des=" Take your client onboard seamlessly by our amazing tool of digital
          onboard process."
            />
            <Service
              icon="/assets/images/serviceIcon2.png"
              title=" React Web App developemnt "
              des=" Take your client onboard seamlessly by our amazing tool of digital
          onboard process."
            />
            <Service
              icon="./public/assets/images/serviceIcon3.png"
              title="javascript developement"
              des=" Take your client onboard seamlessly by our amazing tool of digital
          onboard process."
            />
            <Service
              icon="./public/assets/images/serviceIcon5.png"
              title="SEO friendly Code"
              des=" Take your client onboard seamlessly by our amazing tool of digital
          onboard process."
            />
            <Service
              icon="./public/assets/images/serviceIcon4.png"
              title="Email Signature design && developemet"
              des=" Take your client onboard seamlessly by our amazing tool of digital
          onboard process."
            />
          </div>
        </div>
      </div>
    </SkillWrapper>
  );
};
const SkillWrapper = styled.section`
  padding-inline: 1rem;
  padding-bottom: 4rem;
  width: 100%;
  .service-container {
    position: relative;
    img.gradient-background {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      z-index: -99;
      display: block;
      /* margin-inline: auto; */
    }
    .skill-contents {
      width: 100%;
      /* height: 900px; */
      .section-heading {
      }
      .services {
        padding-top: 4rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 2rem;
        div:nth-of-type(5) {
          gap: 1rem;
          grid-column: 1/3;
          div {
            /* flex-direction: column; */
            justify-content: center !important;
            align-items: center;
            text-align: center;
            .icon {
              place-items: center;
              max-width: 13%;
              object-fit: contain;
            }
          }
        }
      }
    }
  }
  @media (max-width: 430px) {
    .service-container {
      .skill-contents {
        .services {
          display: flex;
          flex-direction: column;
          :nth-of-type(5) {
            align-items: flex-start;
            text-align: left;
            .icon {
              max-width: 40%;
            }
          }
        }
      }
    }
  }
`;

export default Skills;
