import React from "react";
import bg from "../../images/bd.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const servicesRoute = () => {
    navigate("/services");
  };
  return (
    <section>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                <span>Welcome to Ashik's Dental Studio</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Dr. Ashikur Rahman believe every smile is important and are
                dedicated to helping you achieve the smile you've always wanted.
                Our caring team is passionate about providing a family-oriented,
                comfortable atmosphere for you and your family in our
                state-of-the-art facility.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span
                  onClick={servicesRoute}
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Services
                </span>
              </button>
            </div>
          </div>
          <div className="relative lg:w-1/2 sm:order-1 sm:mb-10">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={bg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
