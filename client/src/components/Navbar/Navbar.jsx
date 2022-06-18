import './Navbar.css';
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Link } from 'react-router-dom';

export default function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <nav>
            <img src='/logo.png' className='navLogo' />
            {user ?
                <div className='navDiv'>
                    <Link to={`/partners/${user._id}`} className='navLink white' >Profile</Link>
                    <button onClick={logOutUser} className='navLink white' >Log out</button>
                </div>
                :
                <div className='navDiv'>
                    <Link to={`/login`} className='navLink white' >Log in</Link>
                    <Link to={`/signup`} className='navLink white' >Sign up</Link>
                </div>
            }
        </nav>
    );
};