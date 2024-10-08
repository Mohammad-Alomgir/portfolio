import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 800;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.borderColorPrimary};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      font-size: 20px;
      animation: gototop 3s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-5px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  @media (max-width: 570px) {
    .top-btn {
      right: 20px;
      bottom: 10px;
    }
  }
  @media (max-width: 768px) {
    .top-btn {
      right: 20px;
      bottom: 10px;
    }
  }
`;

export default GoToTop;
