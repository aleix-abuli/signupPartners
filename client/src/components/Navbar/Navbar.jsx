import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Link } from 'react-router-dom';

export default function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <nav>
            {user ?
                <>
                <Link to={`/partners/${user._id}`}>Profile</Link>
                <button onClick={logOutUser}>Log out</button>
                </>
                :
                <>
                <Link to={`/login`}>Log in</Link>
                <Link to={`/signup`}>Sign up</Link>
                </>
            }
        </nav>
    );
};