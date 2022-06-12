import * as React from 'react';
import { Link } from 'react-router-dom';

interface ILogInProps {
}

const LogIn: React.FunctionComponent<ILogInProps> = (props) => {
  return (
    <>    
        <div className="user_card">
            <div className="d-flex justify-content-center">

                <h3 id="form-title">LOGIN</h3>
            </div>
            <div className="d-flex justify-content-center form_container">
                <form method="POST" action="">

                    <div className="input-group mb-3">
                        <div className="input-group-append">
                        </div>
                        <input type="text" name="username" placeholder="Username" className="form-control"/>
                    </div>
                    <div className="input-group mb-2">
                        <div className="input-group-append">
                        </div>
                            <input type="password" name="password" placeholder="Password" className="form-control" />
                    </div>

                        <div className="d-flex justify-content-center mt-3 login_container">
                            <input className="btn login_btn" type="submit" value="Login"/>
                        </div>
                </form>
            </div>

            <div className="mt-4">
                <div className="d-flex justify-content-center links">
                    Have google account? <Link to={} className="ml-2">Google</Link>
                </div>
                <div className="d-flex justify-content-center links">
                    Don't have an account? <a href="{% url 'users:register' %}" className="ml-2">Sign Up</a>
                </div>
                <div className="d-flex justify-content-center links">
                    Forgot password? <a href="{% url 'reset_password' %}" className="ml-2">Reset password</a>
                </div>

            </div>
        </div>    
    </>
  );
};

export default LogIn;
