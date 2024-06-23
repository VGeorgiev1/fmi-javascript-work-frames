import { useAuth } from './AuthContext'
import  './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
            <>
                <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
                <form>
                    <h3>Login Here</h3>

                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Email or Phone" id="username" />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id="password" />

                    <button>Log In</button>

                    <div className="social">
                        Don’t have an account? <Link to="/register">Sign up!</Link>
                    </div>

                </form>
            </>
    )
}
export default Login;