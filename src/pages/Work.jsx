import styled from "styled-components";
import { useEffect, useState } from "react";
import Project from "../components/Project";
import Button from "../components/Button";
import LoadMore from "../components/LoadMore";
import SignatureContainer from "../components/SignatureContainer";

const Work = ({
  showAllProjects = true,
  projectNumber,
  numberOfEmailSignature,
}) => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAvailableNumberOfProject, setIsAvailableNumberOfProject] =
    useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [
    isAvailableNumberOfEmailSignature,
    setIsAvailableNumberOfEmailSignature,
  ] = useState(false);

  useEffect(() => {
    setShowLoadMore(false);
    console.log(showLoadMore);
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  const filterableProject =
    projects && selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    // Check if we need to show "Load More" button
    if (showAllProjects && projectNumber < filterableProject.length) {
      setIsAvailableNumberOfProject(true);
    } else {
      setIsAvailableNumberOfProject(false);
    }
  }, [showAllProjects, projectNumber, filterableProject]);

  // Check whether more email signature have or not

  useEffect(() => {
    const hasMoreEmailSignatures = projects.map((project) => {
      if (
        showLoadMore &&
        project.category === "emailsignature" &&
        project.emailSignatures &&
        project.emailSignatures.length > numberOfEmailSignature
      ) {
        return true;
      } else {
        return false;
      }
    });
    console.log(showLoadMore);
    setIsAvailableNumberOfEmailSignature(hasMoreEmailSignatures);
  }, [projects, numberOfEmailSignature, showLoadMore]);

  const displayedProjects = () => {
    return showAllProjects && projectNumber < filterableProject.length
      ? filterableProject.slice(0, Number(projectNumber))
      : filterableProject;
  };
  console.log(displayedProjects());
  console.log("hello");
  return (
    <WorkWrapper id="work">
      <div className="container">
        <div className="container-contents">
          <div className="section-heading">
            <h1 className="element">Previous Project</h1>
          </div>
          <div className="projects-area">
            {isAvailableNumberOfProject && (
              <LoadMore filterableProject={filterableProject} />
            )}
            {isAvailableNumberOfEmailSignature && (
              <LoadMore filterableProject={filterableProject} />
            )}
            <div className="projects-menu-links">
              <ul>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCategory("all");
                  }}
                >
                  <a href="#">All</a>
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCategory("webapplication");
                  }}
                >
                  <a href="#">Web Application</a>
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCategory("website");
                  }}
                >
                  <a href="#">Website</a>
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCategory("emailsignature");
                    setShowLoadMore(true);
                  }}
                >
                  <a href="#">Email Signature</a>
                </li>
              </ul>
            </div>
            <div className="projects">
              {displayedProjects().length > 0 &&
                displayedProjects().map((project, index) =>
                  project.category !== "emailsignature" ? (
                    <div className="project-cards" key={index}>
                      {console.log(project.usedTecnology)}
                      <Project
                        filterableProject={filterableProject}
                        img={project.img}
                        title={project.title}
                        description={project.description}
                        technology={project.usedTecnology ? project.usedTecnology : []}
                      />
                    </div>
                  ) : (
                    <div className="for-email-signatures" key={index}>
                      {project.emailSignatures
                        .slice(
                          0,
                          project.emailSignatures.length >
                            numberOfEmailSignature
                            ? numberOfEmailSignature
                            : project.emailSignatures.length
                        )
                        .map((emailSignature, index) => (
                          <SignatureContainer
                            img={emailSignature.img}
                            key={index}
                            className={emailSignature.className}
                          />
                        ))}
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </WorkWrapper>
  );
};

const WorkWrapper = styled.section`
  .projects-area {
    margin-top: 5rem;
    border: 1px solid ${({ theme }) => theme.colors.borderColorPrimary};
    border-radius: 10px;
    padding: 40px 5rem;
    padding-bottom: 5rem;
    position: relative;
    .projects-menu-links {
      margin-bottom: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        border: 1px dashed ${({ theme }) => theme.colors.borderColorPrimary};
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        :nth-of-type(4) {
          a {
            border: none;
          }
        }
        li {
          a {
            padding: 23px 50px;
            text-align: center;
            border-right: 1px dashed
              ${({ theme }) => theme.colors.borderColorPrimary};
            display: inline-block;
            transition: 0.4s ease-in-out;
            &:hover {
              color: ${({ theme }) => theme.colors.textSecoundary};
            }
          }
        }
      }
    }
    .projects {
      display: flex;
      gap: 4rem;
      flex-direction: column;

      .project-cards {
        display: grid;
        grid-template-columns: 1fr;
      }
      .for-email-signatures {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
        gap: 3px;
      }
    }
  }
  @media (max-width: 998px) {
    .projects-area {
      padding: 1rem 1rem 5rem !important;
      .projects-menu-links {
        ul {
          li {
            a {
              padding: 13px 30px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 570px) {
    .projects-area {
      padding: 0 1rem;
      .projects-menu-links {
        margin-top: 5px;
        ul {
          flex-direction: column;
          width: 100%;
          justify-content: flex-start;
          border: none;
          li {
            width: 100%;
            margin-bottom: 10px;
            a {
              display: block;
              border-right: none;
              font-size: 18px;
              border-bottom: 1px dotted red;
              cursor: pointer;
              border-radius: 5px;
              background-color: ${({ theme }) => theme.colors.btnColorPrimary};
              &:last-child {
                border: none;
                margin: 0;
              }
            }
          }
        }
      }
      .projects {
        .project-cards {
          gap: 4rem;
        }
        .for-email-signatures {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;

export default Work;
