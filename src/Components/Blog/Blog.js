import React from "react";
import PageTitle from "../../SharedFiles/PageTitle";

const Blog = () => {
  return (
    <>
      <div className="w-4/5	mt-10 mx-auto">
        <PageTitle title="Blog"></PageTitle>
        <div className="accordion" id="accordionExample ">
          <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button
                className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
              
            "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>
                  Difference between authorization and authentication{" "}
                </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body py-4 px-5">
                <p>
                  A1. The most fundamental yet crucial difference between JS and
                  Node JS is that JavaScript is a programming language that is
                  used to write scripts, whereas Node JS is a JavaScript runtime
                  environment that is used to develop applications. Node JS is
                  used to establish a runtime environment that allows JavaScript
                  code to be executed in a production environment (system where
                  codes are built) as well as in the application (browser or any
                  other application) where it is meant to be executed.
                  Javascript is a programming language that can only be used in
                  browsers, however we can execute Javascript outside of the
                  browser with the help of NodeJS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5	mt-10 mx-auto">
        <div className="accordion" id="accordionExample ">
          <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button
                className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
              
            "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>
                  Why I am using firebase instead of other option?
                </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body py-4 px-5">
                <p>
                  Firebase is originally developed by Firebase inc and later
                  acquired by Google. It provides different kinds of services
                  that help us to develop high-quality mobile and web
                  applications to grow our businesses. Google Firebase offers
                  many features that pitch it as the go-to backend development
                  tool for web and mobile apps. It reduces development workload
                  and time. And it's a perfect prototyping tool. Firebase is
                  simple, lightweight, friendly, and industrially recognized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5	mt-10 mx-auto">
        <div className="accordion" id="accordionExample ">
          <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button
                className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
              
            "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>
                  What other services does firebase provide other than
                  authentication?
                </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body py-4 px-5">
                <p>
                  There are many services which Firebase provides, Most useful
                  of them are: Cloud Firestore, Cloud Functions Authentication,
                  Hosting Cloud Storage, Google Analytics, Predictions Cloud
                  Messaging, Dynamic Links, Remote Config Firebase, is a full
                  package that can help in developing your mobile or web
                  applications faster with fewer resources and more efficiency.
                  Now, let’s look at some of the services and use of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
