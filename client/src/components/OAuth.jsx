import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "@firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/users/user.slice.js";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await axios.post("/api/v1/auth/google", {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      });

      const data = await res.data;
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="flex font-semibold justify-center p-3 rounded-lg hover:opacity-95 border"
    >
      <img className="h-6 mr-3" src="https://cdn.builder.io/api/v1/image/assets%2Fd35037adcd734f2b8611cb90d5f362bb%2Fbbe562bf29d943e9bde8f69f5d093c01" alt="" />
       Google
    </button>
  );
}
