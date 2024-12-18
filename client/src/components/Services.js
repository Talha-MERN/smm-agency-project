import React, { useEffect, useState } from "react";
import BannerImage from "../images/banner-image.png";

const services = [
  {
    title: "Meta Ads",
    description:
      "Boost your brand's reach with targeted Meta Ads campaigns that drive results.",
    image: BannerImage,
  },
  {
    title: "Graphic Designing",
    description:
      "Create stunning visual content that captures attention and represents your brand.",
    image: BannerImage,
  },
  {
    title: "Content Writing",
    description:
      "Engage your audience with high-quality, SEO-optimized, and persuasive content.",
    image: BannerImage,
  },
  {
    title: "Social Media Marketing",
    description:
      "Grow your online presence and engage with your audience effectively on social media.",
    image: BannerImage,
  },
  {
    title: "Web Development",
    description:
      "Build scalable, high-performing websites that create a lasting impression on visitors.",
    image: BannerImage,
  },
  {
    title: "SEO",
    description:
      "Improve your website's ranking and visibility through proven SEO techniques.",
    image: BannerImage,
  },
];

const Services = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("services-section");
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="services-section"
      className="py-12 bg-customBlue overflow-hidden"
    >
      <div className="container mx-auto text-center px-12">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-12">Our Services</h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-customPink rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Service Content */}
              <div
                className={`p-6 transition-opacity duration-1000 ${
                  inView ? "opacity-100" : "opacity-0 translate-y-6"
                }`}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
