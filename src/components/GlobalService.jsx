import styled from "styled-components";
import {Link} from "react-router-dom"
import Button from "./Button";

import { Tilt } from "react-tilt";
import CustomThemeButton from "./CustomThemeButton";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35,
  scale: 1.0, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  speed: 800, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Service = ({ className = "", icon, title, des, services,state="",children}) => {
  console.log("alomgir",services)
  return (
    <Tilt options={defaultOptions}>
      <ServiceWrapper
        id="service"
        className={className}
        data-aos="zoom-in-down"
      >
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="service-body">
          <h2>{title}</h2>
          <p>{des}</p>
          {children}
        </div>
      </ServiceWrapper>
    </Tilt>
  );
};
const ServiceWrapper = styled.div`
  border-radius: 20px;
  border-top: 4px solid ${({ theme }) => theme.colors.borderColorPrimary};
  background-image: linear-gradient(
    #130428 7%,
    #251043 34%,
    #38126d 57%,
    #261045,
    85%,
    #190634 100%
  );
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  .icon {
    width: 40%;
  }
  .service-body {
    width: 60%;
    line-height: 1.3;
    h2 {
      font-size: 1rem;
      margin-bottom: 10px;
      font-weight: 900;
      color: white;
    }
    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 12px;
      font-weight: normal;
      margin-bottom: 15px;
    }
  }
  @media (max-width: 570px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 0 2rem 1rem;
    .icon {
      max-width: 100%;
      align-self: center;
    }
    .service-body {
      h2 {
        font-size: 20px;
      }
      p {
        font-size: 18px;
        margin-bottom: 40px;
        display: inline-block;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    .icon {
      max-width: 50%;
    }
    .service-body {
      gap: 1rem;
      h2 {
        font-size: 17px;
        text-align: left;
        margin-bottom: 15px;
      }
      p {
        font-size: 18px;
        margin-bottom: 40px;
        display: none;
      }
    }
  }
  @media (max-width: 930px) {
    /* align-items: flex-start; */
    padding: 2rem 0 2rem 1rem !important;
    .icon {
      max-width: 100%;
      /* align-self: center; */
    }
    .service-body {
      h2 {
        font-size: 17px;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;
export default Service;
