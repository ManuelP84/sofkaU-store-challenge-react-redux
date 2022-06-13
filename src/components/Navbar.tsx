import * as React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { useDispatch } from "react-redux";
import { logOutInReducer } from "../state/loggedInSlice";
import { userType } from "../state/loggedInSlice"
import { dispatchWithType } from "../state/store"

interface INavbarProps {
  logged: userType | null
}

const Navbar: React.FunctionComponent<INavbarProps> = ({ logged }) => {
  const dispatch = dispatchWithType();
  console.log(logged)

  const onLogOut = () => {
    dispatch(logOutInReducer())
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img className="rounded-circle" src={logo} height="100" alt="" />
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {logged && (
            <ul className="navbar-nav">
              <li>
                <Link className="nav-link" to={"/home"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/providers"}>
                  Providers
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/products"}>
                  Products
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/bills"}>
                  Bills
                </Link>                
              </li>
              <li>
                <Link className="nav-link" to={"/receipts"}>
                  Receipts
                </Link>
              </li>
            </ul>
          )}
          {!logged && (
            <ul className="navbar-nav">
              <li>
                <Link className="nav-link" to={"/welcome"}>
                  Welcome
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      {logged && (
        <>
          <a
          type="button"
            onClick={() => onLogOut()}
            className="nav-link"
          >
            Logout
          </a>
          {logged.email && <Link className="nav-link" to={"/home"}>{logged.email}</Link>}
          <Link className="nav-item" to={"/home"}>
            {logged.photoURL  ? 
            <img
              src={logged.photoURL}
              height="35"
              className="d-inline-block align-top rounded-circle"
            />: 
            <img
              src={profile}
              height="35"
              className="d-inline-block align-top rounded-circle"
            />           
            }
          </Link>
        </>
      )}
      {!logged && (
        <>
          <Link className="nav-link" to={"/login"}>
            Login
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
