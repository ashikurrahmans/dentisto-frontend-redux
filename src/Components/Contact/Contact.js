import React from "react";

const Contact = () => {
  return (
    <div className="mt-20 mb-20">
      <div class="flex justify-center items-center h-screen w-full">
        <div class="w-1/2  rounded shadow-2xl p-8 m-4">
          <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Inquery
          </h1>
          <form action="/" method="post">
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="first_name"
              >
                Full Name :
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="text"
                name="first_name"
                id="first_name"
              />
            </div>

            <div class="flex flex-col mb-4">
              <label class="mb-2 font-bold text-lg text-gray-900" for="email">
                Email Address :
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="password"
              >
                Your Message :
              </label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                class="border py-2 px-3 text-grey-800"
              ></textarea>
            </div>
            <button
              class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
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
