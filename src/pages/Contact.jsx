import styled from "styled-components";
import Button from "../components/Button";
import emailjs from "emailjs-com";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaBlenderPhone } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Add loading state

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.to_name) formErrors.to_name = "Name is required";
    if (!formData.from_name) formErrors.from_name = "Email is required";
    else if (!validateEmail(formData.from_name))
      formErrors.from_name = "Email is invalid";
    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true); // Start loading animation

      emailjs
        .sendForm(
          "service_061e0ge",
          "template_hcgfh2a",
          e.target,
          "ONAsDHAWzxwEPFofI"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            toast.error("Failed to send message. Please try again.");
          }
        )
        .finally(() => {
          setLoading(false); // Stop loading animation
        });

      e.target.reset();
      setFormData({
        to_name: "",
        from_name: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <ContactWrapper id="contact">
      <div className="container">
        <div className="section-heading">
          <h1 className="element">Contact Us</h1>
        </div>
        <div className="contact-contents">
          <div className="contact-heading">
            <h1>Get in touch</h1>
            <p>We are here for you! How can we help?</p>
          </div>
          <div className="contact-layout">
            <form onSubmit={sendEmail}>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="to_name"
                  value={formData.to_name}
                  onChange={handleChange}
                />
                {errors.to_name && <p className="error">{errors.to_name}</p>}
              </div>
              <div className="input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                />
                {errors.from_name && <p className="error">{errors.from_name}</p>}
              </div>
              <div className="input-field">
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  cols="30"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
                <Button className="contact-button">Submit</Button>
              </div>
            </form>
            {loading && <div className="spinner"></div>} {/* Render spinner when loading */}
            <div className="form-info">
              <div className="form-sub-info">
                <div className="image">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1900928827645!2d89.51575741042987!3d24.720353350758913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdaf8fbd0f1153%3A0xac8a402eae23204f!2sKantanagor%20(Charpara)%20Mosque!5e0!3m2!1sen!2sbd!4v1723262326691!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="personal-info">
                  <ul>
                    <li>
                      <div>
                        <i>
                          <MdAttachEmail />
                        </i>
                      </div>
                      <span>expectantcoder@gmail.com</span>
                    </li>
                    <li>
                      <div>
                        <i>
                          <FaBlenderPhone />
                        </i>
                      </div>
                      <span>+8801310395359</span>
                    </li>
                    <li>
                      <div>
                        <i>
                          <FaLocationDot />
                        </i>
                      </div>
                      <span> Rajshahi Sahar » 6200</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer 
      style={{ zIndex: 99999999}}
      />
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  padding: 3rem 0;
  .contact-heading {
    padding: 20px 0px;
    margin-bottom: 20px;
    h1 {
      font-size: 3rem;
      font-weight: 900;
    }
    p {
      font-weight: normal;
      font-size: 20px;
    }
  }
  .contact-layout {
    display: flex;
    justify-content: space-between;
    height: 31rem;
    gap: 5rem;
    form {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .input-field {
        width: 100%;
        input,
        textarea {
          margin-bottom: 30px;
          outline: none;
          border: 1px solid ${({ theme }) => theme.colors.borderColorPrimary};
          background-image: linear-gradient(#38126d 57%, #190634 100%);
          border-radius: 14px;
          color: white;
          padding: 20px 15px;
          width: 100%;
          font-size: 17px;
          font-family: "Inter", sans-serif;
        }
        .contact-button {
          width: 100%;
        }
      }
      .error {
        color: red;
        font-size: 0.875rem;
        margin-top: -20px;
        margin-bottom: 10px;
        text-align: left;
      }
    }
    .form-info {
      width: 50%;
      .form-sub-info {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;
        .image {
          text-align: center;
          justify-content: center;
          max-height: 50%;
          overflow: hidden;
          iframe {
            transition: 0.5s;
          }
          &:hover iframe {
            transform: scale(1.1);
          }
        }
        .personal-info {
          align-items: flex-start;
          ul {
            li {
              display: flex;
              align-items: center;
              margin-bottom: 30px;
              border: 1px dotted purple;
              padding: 10px 20px;
              border-radius: 10px;
              &:last-child {
                margin-bottom: 0;
              }
              div {
                background-color: white;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #000;
                i {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
              span {
                margin-left: 15px;
              }
            }
          }
        }
      }
    }
  }
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 20px auto; /* Center the spinner */
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 510px) {
    position: relative;
    .contact-heading {
      position: absolute;
      padding: 20px 0px;
      background-color: ${({ theme }) => theme.colors.btnColorPrimary};
      left: 50%;
      width: 100%;
      text-align: center;
      transform: translateX(-50%);
      top: 50% !important;
      margin-top: 20px;
      margin-bottom: 20px;
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 570px) {
    .contact-layout {
      flex-direction: column;
      padding: 2rem 0 1rem;
      height: auto;
      gap: 9rem !important;
      form {
        width: 100%;
        order: 2;
      }
      .form-info {
        width: 100%;
        .form-sub-info {
          gap: 3.5rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .contact-layout {
      gap: 2rem;
    }
  }
`;

export default Contact;
