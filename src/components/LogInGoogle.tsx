import * as React from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  OAuthCredential,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { logInReducer } from "../state/loggedInSlice";

const googleProviderAuth = new GoogleAuthProvider();

interface ILogInGoogleProps {}

const LogInGoogle: React.FunctionComponent<ILogInGoogleProps> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogInGoogle = () => {
    signInWithPopup(auth, googleProviderAuth)
      .then((result) => {
        const credential: OAuthCredential | null =
        GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        const user = result.user;
        console.log("*User:*")
        console.log(user)

        dispatch(logInReducer(user));
        console.log(user)
        navigate("/Home");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="d-flex justify-content-center links">
      Have a Google account?{" "}
      <a type="Button" onClick={onLogInGoogle} className="ml-2">
        Log in with Google
      </a>
    </div>
  );
};

export default LogInGoogle;
