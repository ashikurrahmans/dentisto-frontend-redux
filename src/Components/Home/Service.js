import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Service = () => {
  const [service, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold"> All Services</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        {service.map((service) => (
          <SingleService service={service} key={service.id}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Service;
