import React from "react";
import Banner from "../components/Banner";
import AboutUsSummary from "../components/AboutUs";
import Services from "../components/Services";
import Team from "../components/Team";
import FAQs from "../components/FAQs";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutUsSummary />
      <Services />
      <Team />
      <FAQs />
      <hr></hr>
    </div>
  );
};

export default HomePage;
