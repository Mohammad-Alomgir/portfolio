import { useState, useEffect } from "react";
import styled from "styled-components";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import Nav from "./Nav";
const Header = () => {
  const [hambleBer, setHambleBur] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleHambleBer = () => {
    setHambleBur(() => !hambleBer);
  };

  const handleScroll = () => {
    const scrollThreshold = 100; // Adjust this value to your needs
    if (window.scrollY > scrollThreshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <nav className={`${hambleBer ? "active" : ""}`}>
          <div className="brand">
            <a href="#home">
              <h1
                className="element"
                style={{ fontFamily: "Playwrite NZ,san-serif" }}
              >
                Alomgir
              </h1>
            </a>
          </div>
          <div className="menu">
            <Nav setHambleBur={setHambleBur} />
          </div>
          <div className="mobile-btn">
            <i className="menu-icon" onClick={handleHambleBer}>
              {!hambleBer ? <CiMenuFries /> : <IoIosClose />}
            </i>
          </div>
        </nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding-inline: 2rem;
  z-index: 9999999999;
  margin-inline: auto;
  padding: 2rem 0;
  width: 100%;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;

  &.scrolled {
    background-color: rgba(0, 0, 0, 0.7); /* Slightly transparent black */
    backdrop-filter: blur(10px); /* Apply blur effect */
  }

  .container {
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .brand {
        h1 {
          font-size: 2rem;
          color: ${({ theme }) => theme.colors.textSecondary};
        }
      }
      .menu {
        .menu-lists {
          display: flex;
          justify-content: center;
          align-items: center;
          li {
            a {
              padding: 8px 14px;
              display: inline-block;
            }
            &:hover ::after {
              display: inline-block;
            }
            position: relative;
            ::after {
              position: absolute;
              content: "";
              left: 50%;
              bottom: -1px;
              width: 15px;
              transform: translateX(-50%);
              height: 2px;
              background-color: #4f228d;
              display: none;
            }
          }
          li:last-child {
            background-color: #2c1250;
            border: 1px solid ${({ theme }) => theme.colors.borderColorPrimary};
            border-radius: 9px;
            ::after {
              content: none;
            }
            &:hover {
              background-color: transparent;
              color: #4d4d4d;
            }
          }
          li:not(:first-child) {
            margin-left: 40px;
            a {
              display: inline-block;
              padding: 8px 14px;
              &:hover {
                color: #4d4d4d;
                transition: 0.5s;
              }
            }
          }
        }
      }
      .mobile-btn {
        display: none;
      }
    }
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    position: absolute;
    width: 96%;
    padding: 1rem;
    .container {
      nav {
        position: relative;
        .brand a {
          font-size: 24px;
        }
        .menu {
          display: none;
        }
        .mobile-btn {
          font-size: 24px;
          display: inline-block;
        }
      }
      nav.active > .menu {
        position: absolute;
        display: block;
        top: 60px;
        background-color: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(10px);
        width: 100%;
        .menu-lists {
          flex-direction: column;
          justify-content: flex-start;
          background-color: rgba(0, 0, 0, 0.7);
          padding: 10px 20px;
          width: 100%;
          li {
            display: block;
            width: 100%;
            margin-left: 0;
            margin-bottom: 10px;
            border: 1px dashed #2c1250;
            padding: 3px 6px;
            a {
              display: block;
              color: white;
            }
          }
        }
      }
    }
  }

  @media (max-width: 930px) {
    width: 96%;
    nav {
      .brand {
        h1 {
          font-size: 2rem;
        }
      }
      .menu {
        .menu-lists {
          li {
            a {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
`;
