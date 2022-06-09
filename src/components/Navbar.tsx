import * as React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css'

interface INavbarProps {
    logged: Object
}

const Navbar: React.FunctionComponent<INavbarProps> = ({logged}) => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
              <img src="" height="100" alt=""/>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li>
                    <Link className='nav-link' to={'/providers'}>Providers</Link>
                    </li>
                    <li>
                    <Link className='nav-link' to={'/products'}>Products</Link>
                    </li>
                </ul>
            </div>
          </div> 

        <a className="nav-item" href="">
            <img src="{{ request.user.customer.profile_picture.url }}" height="35" className="d-inline-block align-top rounded-circle"/>
        </a>
            <a className="nav-link" href="">Logout</a>
            <a className="nav-link" href="">Username</a>
      </nav>
  );
};

export default Navbar;