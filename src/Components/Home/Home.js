import React from "react";
import PageTitle from "../../SharedFiles/PageTitle";
import Services from "../Services/Services";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <PageTitle title="Home"></PageTitle>
    </div>
  );
};

export default Home;
