import React from "react";
import Banner from "../components/Banner";
import AboutUsSummary from "../components/AboutUs";
import Services from "../components/Services";
import Team from "../components/Team";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutUsSummary />
      <Services />
      <Team />
    </div>
  );
};

export default HomePage;
