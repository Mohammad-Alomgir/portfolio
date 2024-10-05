import styled from "styled-components";
import Service from "../components/Service";
import { useEffect, useState } from "react";
import GlobalService from "../components/GlobalService"
import CustomThemeButton from "../components/CustomThemeButton";
const Skills = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('service.json')
    .then((res) => res.json())
    .then((allServices) => {
      setServices(allServices);
    })
    .catch((err) => console.log(err.message))
  })
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
            {services.map((services,index) => <GlobalService services={services.Services} key={index} title={services.title} des={services.description} icon={services.img}>
            <CustomThemeButton src="/allservicedetails" state={services.Services}>Explore more</CustomThemeButton>
            </GlobalService>)}
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
  @media (max-width: 570px) {
    .service-container {
      .skill-contents {
        .services {
          display: flex;
          flex-direction: column;
            .icon {
              max-width: 40%;
            }
          }
        }
      }

  }
`;

export default Skills;
