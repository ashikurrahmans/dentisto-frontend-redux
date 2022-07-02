import React from "react";
import PageTitle from "../../SharedFiles/PageTitle";
import Services from "../Services/Services";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="w-12/12 lg:w-10/12 mx-auto">
        <Services></Services>
      </div>
      <PageTitle title="Home"></PageTitle>
    </div>
  );
};

export default Home;
