import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  <section>
    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
      <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
        <div className="h-60 bg-gray-400 rounded-lg w-500">
          <img
            src="https://miro.medium.com/max/1000/1*pd9XqkTCXjNzmV3FTS85tw.jpeg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start mt-4">
          <h4 className="text-xl font-semibold">
            Google Security Misconfiguration
          </h4>
          <p className="text-sm">
            Thank you for taking the time to read about “ Google Security
            Misconfiguration Leads to Account Takeover !
          </p>
          <Link
            className="p-2 leading-none rounded font-medium mt-3 bg-indigo-600 text-xs uppercase text-white px-4"
            href="#"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
        <div className="h-40 bg-gray-400 rounded-lg"></div>
        <div className="flex flex-col items-start mt-4">
          <h4 className="text-xl font-semibold">Heading</h4>
          <p className="text-sm">
            Some text about the thing that goes over a few lines.
          </p>
          <Link
            className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"
            href="#"
          >
            Click Here
          </Link>
        </div>
      </div>
      <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
        <div className="h-40 bg-gray-400 rounded-lg"></div>
        <div className="flex flex-col items-start mt-4">
          <h4 className="text-xl font-semibold">Heading</h4>
          <p className="text-sm">
            Some text about the thing that goes over a few lines.
          </p>
          <Link
            className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"
            href="#"
          >
            Click Here
          </Link>
        </div>
      </div>
      <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
        <div className="h-40 bg-gray-400 rounded-lg"></div>
        <div className="flex flex-col items-start mt-4">
          <h4 className="text-xl font-semibold">Heading</h4>
          <p className="text-sm">
            Some text about the thing that goes over a few lines.
          </p>
          <Link
            className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"
            href="#"
          >
            Click Here
          </Link>
        </div>
      </div>
    </div>
  </section>;
};

export default Blog;
