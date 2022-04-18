import React from "react";
import { useNavigate } from "react-router-dom";

const SingleService = (props) => {
  const { id, name, price, img, description } = props.service;
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-10 ">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-96 h-64 lg:w-full lg:h-72" src={img} alt={name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <div className="font-bold text-xl mb-2">Price : ${price}</div>
            <p className="text-gray-700 text-base">
              {description.slice(0, 140)}
            </p>
          </div>

          <div className="px-6 pt-4 pb-2">
            <button
              onClick={() => navigate(`/service/${id}`)}
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
