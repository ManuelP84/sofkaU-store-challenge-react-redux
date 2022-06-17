import * as React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useDispatch } from "react-redux";
import { logInReducer } from "../state/loggedInSlice";

interface ISignUpProps {}

const SignUp: React.FunctionComponent<ISignUpProps> = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (userName && password) {
      createUserWithEmailAndPassword(auth, userName, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User:");
          console.log(user);
          dispatch(logInReducer(user));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("*Error message**");
          console.log(errorMessage);
        });

      setPassword("");
      setUserName("");
    }
  };

  return (
    <>
      <div className="user_card">
        <div className="d-flex justify-content-center">
          <h3 id="form-title">SIGN UP</h3>
        </div>
        <div className="d-flex justify-content-center form_container">
          <form>
            <div className="input-group mb-3">
              <div className="input-group-append"></div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={userName}
                className="form-control"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-group mb-2">
              <div className="input-group-append"></div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-center mt-3 login_container">
              <button
                className="btn btn-secondary btn-lg"
                value="Sign Up"
                onClick={(e) => onSignUp(e)}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
