import React from "react";
import Banner from "../components/Banner";
import AboutUsSummary from "../components/AboutUsSummary";
import ServicesList from "../components/ServicesList";
import Team from "../components/Team";
import FAQs from "../components/FAQs";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutUsSummary />
      <ServicesList />
      <Team />
      <FAQs />
      <hr></hr>
    </div>
  );
};

export default HomePage;
