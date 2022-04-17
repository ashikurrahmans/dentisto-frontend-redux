import React, { useEffect, useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "./../../Firebase.init";

const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // Create react one type of state using useRefs

  const fullNameRefs = useRef("");
  const emailRefs = useRef("");
  const passwordRefs = useRef("");
  const navigate = useNavigate("");

  // Submit Form Handle
  const registrationHandle = (event) => {
    event.preventDefault();
    const fullName = fullNameRefs.current.value;
    const email = emailRefs.current.value;
    const password = passwordRefs.current.value;
    createUserWithEmailAndPassword(email, password);
  };

  // Sending Home page after signup
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  let errorHandle;
  if (error) {
    errorHandle = <p className="text-red-600">Eror: {error?.message}</p>;
  }

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col bg-gray-800">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="px-6 py-8 rounded shadow-md text-black w-full border-solid border-2 border-gray-200 bg-gray-200">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form action="" onSubmit={registrationHandle}>
              <input
                ref={fullNameRefs}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
              />

              <input
                ref={emailRefs}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <input
                ref={passwordRefs}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              {errorHandle}
              <button
                type="submit"
                className="w-full text-center bg-green-600 py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <Link
                className="no-underline border-b border-grey-dark text-grey-dark"
                to="#"
              >
                Terms of Service
              </Link>
              and
              <Link
                className="no-underline border-b border-grey-dark text-grey-dark"
                to="#"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="text-grey-dark mt-6 text-white">
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue text-red-700 font-bold ml-2"
              to="/login"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
