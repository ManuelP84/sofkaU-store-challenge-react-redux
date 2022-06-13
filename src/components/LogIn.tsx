import * as React from "react";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logInReducer } from "../state/loggedInSlice";
import LogInGoogle from "./LogInGoogle";

interface ILogInProps {}

const LogIn: React.FunctionComponent<ILogInProps> = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onLogIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (userName && password) {
      signInWithEmailAndPassword(auth, userName, password)
        .then((userCredential) => {
          const user = userCredential.user;

          console.log("*User credentials*");
          console.log(userCredential);
          console.log("*User: *");
          console.log(user);
          dispatch(logInReducer(user));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage: string | null = error.message;
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
          <h3 id="form-title">LOGIN</h3>
        </div>
        <div className="d-flex justify-content-center form_container">
          <form method="POST" action="">
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
                value="Sign In"
                onClick={(e) => onLogIn(e)}
              >
                Log In
              </button>
            </div>
          </form>
        </div>

        <div className="mt-4">
          <LogInGoogle />
          <div className="d-flex justify-content-center links">
            Don't have an account?{" "}
            <Link to={"/signin"} className="ml-2">
              Sign In
            </Link>
          </div>
          <div className="d-flex justify-content-center links">
            {/* Forgot password? <a href="{% url 'reset_password' %}" className="ml-2">Reset password</a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
