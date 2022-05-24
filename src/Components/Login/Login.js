import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "./../../Firebase.init";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Login = () => {
  const [user] = useAuthState(auth);

  // Geting signin action from firebase react hooks plugin
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, userFb, loadingFb, errorFb] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);
  const [
    signInWithEmailAndPassword,
    useremailPass,
    loadingEmailPass,
    errorEmailPass,
  ] = useSignInWithEmailAndPassword(auth);

  // For getting user email & password using Ref from react
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const singInHandle = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    toast("You are loged In");
  };

  // Navigating(Redirect) After Login
  const navigate = useNavigate();
  let location = useLocation();
  let form = location.state?.from?.pathname || "/";
  // If user Exists then send it to the similar page which one they visited.
  useEffect(() => {
    if (user) {
      navigate(form, { replace: true });
    }
  }, [user]);

  // Handaling Error
  let errorHandle;
  if (errorGoogle || errorGithub || errorEmailPass || errorFb) {
    errorHandle = (
      <p className="text-red-600">
        Eror: {errorGoogle?.message} {errorGithub?.message}{" "}
        {errorEmailPass?.message} {errorFb?.message}{" "}
      </p>
    );
  }

  return (
    <section>
      <div className="w-full h-screen flex items-center justify-center bg-gray-800 pt-20 pb-20">
        <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
          <label className="font-light text-4xl mb-4">LogIn</label>
          <form action="" onSubmit={singInHandle}>
            <input
              required
              ref={emailRef}
              type="text"
              name="email"
              className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
              placeholder="Email"
            />
            <input
              required
              ref={passwordRef}
              type="password"
              className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
              placeholder="Password"
            />
            {errorHandle}
            <button className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">
              Login
            </button>
          </form>
          <Link to="/forgetpassword">
            <p className="text-right mb-4 text-red-500">Forgot password</p>
          </Link>
          <p className="text-right mb-4">
            Already have an account?
            <Link className="text-red-500 ml-2" to="/registration">
              Register
            </Link>
          </p>
          <label className="text-gray-800 mb-4">or</label>
          <button
            onClick={() => signInWithGoogle()}
            className="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4"
          >
            Sign with Google
          </button>
          <button
            onClick={() => signInWithFacebook()}
            className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4"
          >
            Sign with Facebook
          </button>
          <button
            onClick={() => signInWithGithub()}
            className="w-full h-12 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 text-gray-100 transition mb-4"
          >
            Sign with Github
          </button>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </section>
  );
};

export default Login;
