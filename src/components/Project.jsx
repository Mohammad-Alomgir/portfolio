import styled, { keyframes } from "styled-components";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
const Project = ({ filterableProject, img, title, websites, path }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (path.startsWith("http")) {
      // If the path is an external URL
      window.open(path, "_blank", "noopener,noreferrer");
    } else {
      // For internal links, use a navigate or Link component
      navigate(path, { state: websites });
    }
  };


  return (
    <ProjectWrapper className={`project`}>
      <div className="image-container">
        <div
          className="project-card"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <div className="image-wrapper">
            <img
              src={img}
              alt={`${title} Screenshot`}
              className="project-image"
            />
          </div>
        </div>
      </div>
      <h2>{title}</h2>
    </ProjectWrapper>
  );
};
const ProjectWrapper = styled.div`
  .image-container {
    width: 100%;
    height: 500px;
    border: 1px solid #6f2bce;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    overflow: hidden;
    .project-card{
      width: 100%;
      height: 100%;
    }
  }
  h2 {
    font-size: 32px;
    margin: 13px 0;
    color: #6f2bce;
    font-weight: 900;
    border-bottom: 2px solid #6f2bce;
    display: inline-block;
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 10px;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
  }

  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;

  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* padding-bottom: 15px; */
  a {
    /* max-width: 800px; */
    width: 100%;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    img.project-image {
      background-size: cover;
      width: 100%;
      height: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    img.project-image:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
  .project-info {
    h1.title {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 15px;
      text-align: justify;
      font-family: "inter", sans-serif;
    }
    .btn-group {
      margin-bottom: 15px;
      a {
        cursor: pointer;
      }
      a:not(:first-child) {
        margin-left: 15px;
      }
    }
    .technology-used-group {
      img:not(:first-child) {
        margin-left: 15px;
      }
      img {
        width: 40px;
        height: auto;
        background-color: #2c1250;
        padding: 10px 12px;
        border-radius: 6px;
      }
    }
  }

  @media (max-width: 768px) {
    .image-container{
      height: 300px !important;
    }
    .project-info {
      width: 100%;
      h1.title {
        font-size: 1.5rem !important;
      }
      span {
        font-size: 12px !important;
      }
    }
  }
  @media (max-width: 640px) {
    .project-info {
      width: 100%;
      h1.title {
        font-size: 1rem !important;
      }
      p {
        font-size: 10px !important;
      }
    }
  }
  @media (max-width: 570px) {
    .image-container{
      width: 100%;
      height: 350px !important;
    }
    h2{
      font-size: 1.5rem;
    }
    z-index: 99;
    position: relative;
    padding-right: 0;
    flex-direction: column;
    justify-content: center;
    border: none;
    a.project-image-links {
      border-radius: 18px;
      img.project-image {
        background-size: cover;
        border-radius: 18px;
      }
    }
    .project-info {
      .project-info {
        width: 100%;
        position: absolute;
        left: 14%;
        bottom: -17%;
      }
      h1.title {
        display: none;
      }
      p {
        display: none;
      }
      .btn-group {
        opacity: 0.8;
        z-index: 99;
        position: absolute;
      }
      .technology-used-group {
        display: none;
      }
    }
  }
`;
export default Project;
