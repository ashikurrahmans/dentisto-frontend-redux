import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Service Details </h2>
    </div>
  );
};

export default ServiceDetails;
