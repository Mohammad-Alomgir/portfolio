// import styled from "styled-components";
import Header from "../components/Header";
// import MainLayout from "../layout/MainLayout";
import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "../components/Footer"
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Work showAllProjects={true} projectNumber="5" numberOfEmailSignature="4"/>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
