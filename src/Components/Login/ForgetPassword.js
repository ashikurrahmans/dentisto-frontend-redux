import React, { useRef } from "react";
import { Link } from "react-router-dom";
import auth from "./../../Firebase.init";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";

const ForgetPassword = () => {
  const emailRef = useRef("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const resetPasswordHandle = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email Sended...");
    } else {
      toast("Please provide your email address.");
    }
  };

  let emailError;
  if (error) {
    emailError = <p>Error : {error?.message}</p>;
  }

  return (
    <section>
      <div className="w-full h-screen flex items-center justify-center bg-gray-800 pt-20 pb-20">
        <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
          <label className="font-light text-xl mb-4">
            Forgot your password?
          </label>
          <form action="" onSubmit={resetPasswordHandle}>
            <input
              required
              ref={emailRef}
              type="text"
              name="email"
              className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
              placeholder="Email"
            />
            {emailError}
            <button className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">
              Send
            </button>
          </form>

          <p className="text-right mb-4">
            Already have an account?
            <Link className="text-red-500 ml-2" to="/registration">
              Register
            </Link>
          </p>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </section>
  );
};

export default ForgetPassword;
