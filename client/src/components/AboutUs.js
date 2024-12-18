import React from "react";
import BannerImage from "../images/banner-image.png";

const AboutUsSummary = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-8 px-6 lg:px-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src={BannerImage}
            alt="About Us"
            className="rounded-lg shadow-lg w-[600px] h-[400px] object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-customBlue mb-6">
            About Us Summary
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            At Insight Tech Solutions, we empower businesses to thrive in the
            digital age. Our dedicated team specializes in creating innovative
            strategies, delivering impactful campaigns, and building long-term
            partnerships. With expertise in Meta Ads, graphic design, content
            writing, and social media management, we craft solutions tailored to
            your unique goals.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Your success is our mission, and we're here to make your brand stand
            out in the competitive landscape. Partner with us and experience the
            difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSummary;
