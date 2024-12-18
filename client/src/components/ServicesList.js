import React, { useEffect, useState } from "react";
import { servicesEndpoints } from "../api/endpoints/servicesEndpoints";
import axios from "axios";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get(servicesEndpoints.getServices());

        setServices(data);
      } catch (err) {
        console.error("Error fetching services:", err.message);
      }
    };
    fetchServices();
  }, []);

  return (
    <div>
      <h2>Our Services</h2>
      {services.length > 0 ? (
        services.map((service) => <h1 key={service._id}>{service.name}</h1>)
      ) : (
        <p>No services available.</p>
      )}
    </div>
  );
};

export default ServiceList;
