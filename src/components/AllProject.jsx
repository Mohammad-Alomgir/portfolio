import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SignatureContainer from "./SignatureContainer";
import Project from "./Project";

const AllProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <AllProjectWrapper>
      <Link
        to={navigate(-1)}
        className="themeButton"
        style={{ display: "inline-block" }}
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
      </Link>
      <div className="project-field">
        {location &&
          location.state.map((project, index) =>
            project.category === "emailsignature" ? (
              project.emailSignatures.map((emailSignature, sigIndex) => (
                <SignatureContainer
                  key={sigIndex}
                  img={emailSignature.img}
                  className={emailSignature.className}
                />
              ))
            ) : (
              <Project
                key={index}
                img={project.img}
                title={project.title}
                description={project.description}
                className="project-item"
              />
            )
          )}
      </div>
    </AllProjectWrapper>
  );
};

const AllProjectWrapper = styled.div`
  padding: 4rem 3rem;
  .project-field {
    padding-top: 3rem;
    margin: 0 auto;
    max-width: 1100px;
    display: grid;
    gap: 3px;

    /* Define a general grid layout */
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    justify-content: center;
    justify-items: center;

    /* Project components will span the full width */
   
    .project-item {
      grid-column: 1 / -1;
      margin-bottom: 4rem;
    }

    /* Signature components will take up 1/3 of the row */
    .signature-item {
      width: 100%;
      object-fit: cover;
      gap: 3px;
    }
  }
`;

export default AllProject;
