import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Project from "./Project";
import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";

const WebsiteCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (
    <WebsiteCategoryWrapper>
      <div className="container">
        <button
          onClick={() => navigate("/")}
          className="themeButton"
          style={{ display: "inline-block", marginBottom: "3rem" }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <IoIosArrowRoundBack style={{ fontSize: "2rem" }} /> Back
          </span>{" "}
        </button>
        <div className="projects-cards">
          {Array.isArray(state) && state.length !== 0 ? (
            state.map((website, index) => (
              <Project
                key={index}
                title={website.title}
                img={website.img}
                path={website.liveLink}
              />
            ))
          ) : (
            <p>No websites available</p>
          )}
        </div>
      </div>
    </WebsiteCategoryWrapper>
  );
};
const WebsiteCategoryWrapper = styled.div`
  padding-top: 8rem;
  .projects-cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        /* padding: 20px; */
        justify-content: space-between;
        align-items: center;
        /* row-gap: 3rem; */
        justify-items: center;
        align-content: space-between;
    
      
      }
  @media (max-width: 570px){
    .projects-cards{
      grid-template-columns: repeat(1,1fr);
    }
  }

`;
export default WebsiteCategory;
