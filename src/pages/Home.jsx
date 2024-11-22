// import styled from "styled-components";
// import MainLayout from "../layout/MainLayout";
import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Blog from "../pages/Blog";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work showAllProjects={true} projectNumber="9" numberOfEmailSignature="4"/>
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
};
export default Home;
