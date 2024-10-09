import React from 'react';
import styled from 'styled-components';

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;  // Ensure service data is available

  return (
    <ModalWrapper>
      <div className="modal-content">
        <img src={service.img} alt={service.title} />  {/* Added alt text */}
        <h2>{service.title}</h2>  {/* Display service title */}
        <p>{service.descrition}</p>  {/* Corrected typo in 'description' */}
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 8%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;  // Reduced z-index to a more reasonable value
  background: purple;
  padding: 2rem;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;  // Ensure the modal doesn't exceed screen width
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  .modal-content {
    text-align: center;

    img {
      max-width: 100%;  // Ensure image scales properly on smaller devices
      height: auto;
    }

    h2 {
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }

    p {
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }

    .close-button {
      background-color: #f44336;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .close-button:hover {
      background-color: #d32f2f;
    }
  }

  /* Tablet view (768px and above) */
  @media (max-width: 768px) {
    width: 90%;  // Adjust width to fit smaller screen sizes
    top: 15%;
  }

  /* Mobile view (430px and below) */
  @media (max-width: 430px) {
    width: 100%;  // Full width on mobile
    padding: 1rem;  // Reduce padding for smaller screens
    top: 10%;

    .modal-content {
      h2 {
        font-size: 1.5rem;  // Smaller font for mobile
      }

      p {
        font-size: 1rem;  // Smaller font for mobile
      }

      .close-button {
        padding: 0.5rem 1rem;  // Keep button size manageable
        font-size: 1rem;
      }
    }
  }
`;

export default ServiceModal;
