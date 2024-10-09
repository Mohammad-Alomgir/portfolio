import React from 'react';
import styled from 'styled-components';

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;  // Ensure service data is available

  return (
    <ModalWrapper>
      <div className="modal-content">
        <img src={service.img} alt={service.title} />  {/* Added alt text */}
        <h2>{service.title}</h2>  {/* Display service title */}
        <p>{service.description}</p>  {/* Corrected typo in 'description' */}
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 100000009;  // Ensure modal is on top
  background: purple;
  padding: 2rem;
  border-radius: 8px;
  width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  .modal-content {
    text-align: center;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 2rem;
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
`;

export default ServiceModal;
