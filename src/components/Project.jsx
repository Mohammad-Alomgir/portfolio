import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
const Project = ({className,img, title, description,filterableProject}) => {
  return (
    <ProjectWrapper className={`project ${className}`}>
      <Link to="/allProject" state={filterableProject} className="project-image-links">
        <img src={img} alt="Project1" className="project-image" />
      </Link>
      <div className="project-info">
        <h1 className="title">{title}</h1>
        <p>{description}</p>
        <div className="btn-group">
          <Button>Get Code</Button>
          <Button>Live Demo</Button>
        </div>
        <div className="technology-used-group">{/* {technologyLogo} */}</div>
      </div>
    </ProjectWrapper>
  );
};
const ProjectWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-right: 15px;
  gap: 2rem;
  border: 1px dashed ${({ theme }) => theme.colors.borderColorPrimary};
  border-radius: 18px;
  /* padding-bottom: 15px; */
  a.project-image-links {
    /* max-width: 800px; */
    width: 100%;
    height: 250px;
    overflow: hidden;
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
    img.project-image {
      background-size: cover;
      width: 100%;
      height: 100%;
      border-top-left-radius: 18px;
      border-bottom-left-radius: 18px;
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
      button {
        cursor: pointer;
      }
      button:not(:first-child) {
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
    z-index: -9;
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
