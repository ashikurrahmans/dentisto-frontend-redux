import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{title} - Ashik's Dental Studio</title>
        <link rel="canonical" href="#" />
      </Helmet>
    </div>
  );
};

export default PageTitle;
