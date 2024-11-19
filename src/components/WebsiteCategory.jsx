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
          style={{ display: "inline-block", marginBottom: "3rem"}}
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
        {Array.isArray(state) && state.length !== 0 ? (
          state.map((website, index) => (
            <div key={index} className="projects-cards">
              <Project
                title={website.title}
                img={website.img}
                path={website.liveLink}
              />
            </div>
          ))
        ) : (
          <p>No websites available</p>
        )}
      </div>
    </WebsiteCategoryWrapper>
  );
};
const WebsiteCategoryWrapper = styled.div`
  padding-top: 8rem;

`
export default WebsiteCategory;
