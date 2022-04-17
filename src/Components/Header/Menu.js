import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";

const Menu = () => {
  const navigate = useNavigate();
  const signInHandle = () => {
    navigate("/login");
  };
  const [user] = useAuthState(auth);
  const signOutHandle = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <section>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <Link to="#" className="flex items-center py-4 px-2">
                <img
                  src="https://seekvectorlogo.com/wp-content/uploads/2019/05/portfolio-plus-banking-software-vector-logo-small.png"
                  alt="Logo"
                  className="h-12 w-24 mr-2"
                />
              </Link>
            </div>
            <div className="flex">
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className="py-4 px-3 text-lg text-gray-500 font-bold"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="py-4 px-3 text-lg text-gray-500 font-bold hover:text-green-500 transition duration-300"
                >
                  Services
                </Link>
                <Link
                  to="/portfolio"
                  className="py-4 px-3 text-lg text-gray-500 font-bold hover:text-green-500 transition duration-300"
                >
                  Portfolio
                </Link>
                <Link
                  to="/about"
                  className="py-4 px-3 text-lg text-gray-500 font-bold hover:text-green-500 transition duration-300"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="py-4 px-3 text-lg text-gray-500 font-bold hover:text-green-500 transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              {user ? (
                <button
                  onClick={signOutHandle}
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Signout
                </button>
              ) : (
                <button
                  onClick={signInHandle}
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  SignIn
                </button>
              )}

              {/* <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Sing up
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Menu;
