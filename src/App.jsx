import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProject from "./components/AllProject";
import GoToTop from "./components/GoToTop";
// import Loading from "./components/Loading"; // Import the Loading component
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import AllServicesDetails from "./components/AllServicesDetails";
import CategoryBlogs from "./components/CategoryBlogs";
import SingleBlogPage from './components/SingleBlogPage'

function App() {
  // const [loading, setLoading] = useState(true);
  // Add loading state

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      once: false, // Whether animation should happen only once
    });
  }, []);
  // useEffect(() => {
  //   // Wait until the whole page is fully loaded
  //   const handleLoad = () => {
  //     console.log("page fully loaded");
  //     setLoading(false)
  //   };
  //   window.addEventListener("load", handleLoad);

  //   // Clean up the event listener
  //   return () => window.removeEventListener("load", handleLoad);
  // }, []);

  const theme = {
    colors: {
      borderColorPrimary: "#4F228D",
      bodyBackground: "#11071F",
      btnColorPrimary: "#2C1250",
      textPrimary: "#fff",
      textSecoundary: "#7127BA",
      headingColorPrimary: "#4D4D4D",
      servicesBackground: "#693B93",
      footerBackground: "#200063",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter> {/* Wrap all components inside BrowserRouter */}
        <Header />
        <Routes> {/* Define all your routes inside Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/allproject" element={<AllProject />} />
          <Route path="/allservicedetails" element={<AllServicesDetails />} />
          <Route path="/categoryblogs" element={<CategoryBlogs />} />
          <Route path="/singleblogpage" element={<SingleBlogPage />} />
        </Routes>
        <GoToTop />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
