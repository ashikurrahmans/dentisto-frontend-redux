import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "./../../Firebase.init";
import Loading from "../Loading/Loading";
import { toast, ToastContainer } from "react-toastify";

const RequiredAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div>
        <h2>Your email has not varified yet!</h2>
        <h2>Please verify it!</h2>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Verify email
        </button>
        <ToastContainer />
      </div>
    );
  }

  return children;
};

export default RequiredAuth;
