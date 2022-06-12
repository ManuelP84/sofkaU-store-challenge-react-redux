import * as React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css'
import logo from "../assets/logo.png"

interface INavbarProps {
    logged: Object
}

const Navbar: React.FunctionComponent<INavbarProps> = ({logged}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <img className="rounded-circle" src={logo} height="100" alt=""/>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                {logged && 
                <ul className="navbar-nav">
                    <li>
                        <Link className='nav-link' to={'/providers'}>Providers</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to={'/products'}>Products</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to={'/bills'}>Bills</Link>
                    </li>
                </ul>
                }
                {!logged &&
                <ul className="navbar-nav">
                    <li>
                        <Link className='nav-link' to={'/welcome'}>Welcome</Link>
                    </li>
                </ul>
                }
            </div>
        </div> 
    {logged && 
    <>
        <Link to={'/logout'} className="nav-link" >Logout</Link>
        <Link className="nav-link" to={'/username'}>Username</Link>
        <Link className="nav-item" to={'/Profile'}>
            <img src="" height="35" className="d-inline-block align-top rounded-circle"/>
        </Link>
    </>
    }
    {!logged && 
    <>
    <Link className="nav-link" to={'/login'}>Login</Link>
    </>
    }
    </nav>
  );
};

export default Navbar;
