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
  // console.log(showLoadMore)
  const [
    isAvailableNumberOfEmailSignature,
    setIsAvailableNumberOfEmailSignature,
  ] = useState(false);

  // console.log(isAvailableNumberOfEmailSignature);

  useEffect(() => {
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

  const hasMoreEmailSignatures = () => {
    const hasMoreEmailSignature =
      projects &&
      projects.map((project) => {
        if (
          project.category === "emailsignature" &&
          project.emailSignatures &&
          project.emailSignatures.length > numberOfEmailSignature
        ) {
          console.log(project.category);
          return true;
        } else {
          console.log(
            showLoadMore,
            project.category,
            project.emailSignatures,
            numberOfEmailSignature
          );
          return false;
        }
      });
    setIsAvailableNumberOfEmailSignature(hasMoreEmailSignature);
  };

  const displayedProjects = () => {
    return showAllProjects && projectNumber < filterableProject.length
      ? filterableProject.slice(0, Number(projectNumber))
      : filterableProject;
  };
  console.log(
    "filterable-project",
    filterableProject,
    "displayed project",
    displayedProjects
  );
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
                    hasMoreEmailSignatures();
                  }}
                >
                  <a href="#">Email Signature</a>
                </li>
              </ul>
            </div>
            <div className="projects">
              {/* Render Project Cards Only */}
              {displayedProjects().some(
                (project) => project.category !== "emailsignature"
              ) && (
                <div className="projects-cards">
                  {displayedProjects()
                    .filter((project) => project.category !== "emailsignature")
                    .map((project, index) => (
                      <div className="project-card" key={index}>
                        <Project
                          filterableProject={filterableProject}
                          img={project.img}
                          title={project.title}
                          websites={project.websites}
                          path="/websitecategory"
                        />
                      </div>
                    ))}
                </div>
              )}

              {/* Render Email Signatures Only */}
              {displayedProjects().some(
                (project) => project.category === "emailsignature"
              ) && (
                <div className="for-email-signatures">
                  {displayedProjects()
                    .filter((project) => project.category === "emailsignature")
                    .flatMap((project) =>
                      project.emailSignatures
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
                        ))
                    )}
                </div>
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
      .projects-cards {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    justify-items: center;
    align-content: space-between;
}

      .project-cards {
        width: 350px;
        border: none;
      }
      .for-email-signatures {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 3px;
      }
    }
  }
  @media (max-width: 998px) {
    .container{
      .container-contents{
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
    }
   
  }
  @media (max-width: 570px) {
    .container{
      .container-contents{
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
          grid-template-columns: 1fr !important;
        }
        .for-email-signatures {
          grid-template-columns: 1fr;
        }
      }
    }
      }
    }
    
  }
`;

export default Work;
