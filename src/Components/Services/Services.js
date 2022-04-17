import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {
  const [service, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl font-bold	text-center mt-6">All Services </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        {service.map((service) => (
          <SingleService service={service} key={service.id}></SingleService>
        ))}
      </div>
      ;
    </div>
  );
};

export default Services;
