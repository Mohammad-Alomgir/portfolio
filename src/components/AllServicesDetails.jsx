import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import GlobalService from "../components/GlobalService";
import ServiceModal from "./ServiceModal";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const AllServicesDetails = () => {
  const location = useLocation();
  const services = location.state;
  const navigate = useNavigate();

  // State to handle modal visibility and selected service
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Function to handle "Learn more" click
  const handleLearnMore = (service) => {
    setSelectedService(service); // Set the clicked service
    setShowModal(true); // Open modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false); // Close modal
    setSelectedService(null); // Reset selected service
  };

  return (
    <ServiceDetailsWrapper>
      <div className="container">
        <div className="skill-contents">
          <Link
            to={navigate("/")}
            className="themeButton"
            style={{ display: "inline-block", marginBottom: "30px"}}
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
          <div className="section-heading">
            <h1 className="service-title element">Services</h1>
          </div>
          <div className="services">
            {services &&
              services.map((service, index) => (
                <GlobalService
                  key={index}
                  icon={service.img}
                  title={service.title}
                  des={service.descrition} // Fixed typo: description
                  services={service}
                >
                  <Link
                    className="themeButton"
                    onClick={() => {
                      console.log("service modal click");
                      handleLearnMore(service);
                    }}
                  >
                    Learn more
                  </Link>
                </GlobalService>
              ))}
          </div>
        </div>
      </div>
      {/* Render modal outside of the service list */}
      {showModal && (
        <ServiceModal
          service={selectedService} // Pass selected service to modal
          onClose={handleCloseModal} // Close modal handler
        />
      )}
    </ServiceDetailsWrapper>
  );
};

const ServiceDetailsWrapper = styled.div`
  padding-top: 7rem;
  padding-bottom: 4rem;
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
  @media (max-width: 430px) {
    .skill-contents {
      .services {
        display: flex !important;
        flex-direction: column;
        .icon {
          max-width: 40%;
        }
      }
    }
  }
`;
export default AllServicesDetails;
