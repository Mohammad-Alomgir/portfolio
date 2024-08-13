import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Nav from "./Nav";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer-contents">
          <div className="footer-logo">
            <img src="/assets/images/agencylogo.png" alt="profile" />
            <h2 style={{ fontFamily: "Dancing Script,cursive" }}>
              Expectant coder
            </h2>
          </div>
          <Nav />
          <div className="footer-about">
            <p>
              Passionate Front-End Developer skilled in HTML, CSS, JavaScript,
              and React. Crafting seamless user experiences and visually
              stunning websites. Expert in creating professional email
              signatures that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
      <div className="left-blank blank"></div>
      <div className="right-blank blank"></div>
      <div className="footer-social-blank">
        <div className="social-icons">
          <a href="https://wa.me/01310395359?text=Your%20pre-filled%20message" target="_blank">
            <img src="/assets/images/whatsapp.png" alt="whatsapp" />
          </a>
          <a href="">
            <img src="/assets/images/linkdin.png" alt="linkdin" />
          </a>
          <a href="https://github.com/Mohammad-Alomgir?tab=repositories">
            <img src="/assets/images/github.png" alt="github" />
          </a>
          <a href="">
            <img src="/assets/images/instagram.png" alt="instagram" />
          </a>
        </div>
      </div>
      <p className="copyrightText" style={{ textAlign: "center", marginTop: "-15px;" }}>
        &copy; copyright alomgir » 2024{" "}
      </p>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  padding: 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.btnColorPrimary};
  .blank {
    width: 35%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.borderColorPrimary};
    position: absolute;
  }
  .left-blank {
    border-top-right-radius: 30px;
    margin-right: 15px;
    left: 0;
    bottom: 0;
  }
  .right-blank {
    border-top-left-radius: 30px;
    margin-left: 15px;
    right: 0;
    bottom: 0;
  }
  /* padding: 2rem 0; */
  .container {
    .footer-contents {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
      .footer-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        img {
          width: 100px;
          height: 100px;
          border-radius: 100%;
          background-color: white;
          /* padding: 10px 20px; */
        }
        h2 {
          font-size: 2rem;
          background: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
        }
      }
      ul {
        display: flex;
        gap: 3rem;
        li {
          font-size: 1rem;
          a {
            transition: 0.4s;
            color: white;
            &:hover {
              color: ${({ theme }) => theme.colors.textSecoundary};
            }
          }
        }
      }
      .footer-about {
        max-width: 710px;
        text-align: center;
        width: 100%;
      }
    }
  }
  .footer-social-blank {
    margin: 2rem 0 1rem 0;
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .social-icons {
      margin-top: -15px;
      display: flex;
      justify-content: center;
      width: 30%;
      a {
        &:not(:first-child) {
          margin-left: 20px;
        }
        img {
          width: 50px !important;
          object-fit: cover;
          background-size: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media (max-width: 570px) {
    .blank{
      height: 20px;
    }
    .footer-contents {
      .footer-logo {
        img {
          width: 50px !important;
          height: 50px !important;
        }
        h2 {
          font-size: 2rem !important;
        }
      }
      ul {
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
        li {
          max-width: 100px;
          width: 100%;
          a {
            font-size: 15px;
            border: 1px solid ${({ theme }) => theme.colors.bodyBackground};
            padding: 10px 20px;
            border-radius: 5px;
          }
          &:last-child {
            grid-column: 1 / -1;
          }
        }
      }
      .footer-about {
        p {
          font-size: 15px;
        }
      }
      .footer-social-blank {
        .social-icons {
          margin-top: -20px;
          a {
            &:not(:first-child) {
              margin-left: 20px;
            }
            img {
              width: 20px !important;
            }
          }
        }
      }
    }
    .copyrightText{
      font-size: 14px;
      transform: translateY(-10px);
    }
  }
`;
export default Footer;
