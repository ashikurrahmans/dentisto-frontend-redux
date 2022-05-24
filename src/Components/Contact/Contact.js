import React from "react";
import PageTitle from "./../../SharedFiles/PageTitle";

const Contact = () => {
  return (
    <div className="mt-1 mb-20">
      <PageTitle title="Contact"></PageTitle>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="w-1/2  rounded shadow-2xl p-8 m-4">
          <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Inquery
          </h1>
          <form action="/" method="post">
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="first_name"
              >
                Full Name :
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="first_name"
                id="first_name"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="email"
              >
                Email Address :
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="password"
              >
                Your Message :
              </label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="border py-2 px-3 text-grey-800"
              ></textarea>
            </div>
            <button
              className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
