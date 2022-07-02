import React from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const RelatedSingleServiceDetails = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const { id, name, price, img } = product;
  return (
    <div>
      <div className="p-10">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-96 h-64 lg:w-full lg:h-72" src={img} alt={name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <div className="font-bold text-xl mb-2">Price : ${price}</div>
          </div>

          <div className="px-6 pt-4 pb-2 flex">
            <button
              type="button"
              onClick={() => handleAddToCart(product)}
              className="text-white bg-green-500  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              AddToCart
            </button>
            <button
              onClick={() => navigate(`/service/${id}`)}
              type="button"
              className="text-white bg-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedSingleServiceDetails;
