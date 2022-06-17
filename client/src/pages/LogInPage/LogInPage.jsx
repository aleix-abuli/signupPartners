import axios from 'axios';
import { useContext} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LogInForm from '../../components/Forms/LogInForm';
import { AuthContext } from '../../context/auth.context';

const server = process.env.REACT_APP_API_URL;

export default function LogInPage() {

    const { storeToken, authenticateUser, logOutUser } = useContext(AuthContext);

    const [logInData, setLogInData] = useState({
        email: '',
        password: ''
    });

    function handleInputChange(e) {

        const { value, name } = e.currentTarget;
        setLogInData({ ...logInData, [name]: value });

    };

    function handleSubmit(e) {

        e.preventDefault();

        axios
        .post(`${server}/auth/login`, logInData)
        .then(({ data }) => {
            console.log(data)
            storeToken(data.authToken);
            authenticateUser()
            console.log('Logeade chique')
        })
        .catch((err) => console.log(err));

    };

    return(
        <>
            <LogInForm data={logInData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        </>
    );
};