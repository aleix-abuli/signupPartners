import axios from 'axios';
import { useEffect, useState } from "react";

const server = process.env.REACT_APP_API_URL

export default function App() {

    const [dbMessage, setDbMessage] = useState('Still not in the database')
    
    useEffect(() => {
        setTimeout(()=> {
            axios
            .get(`${server}`)
            .then(({ data }) => setDbMessage(data))
            .catch(err => console.log(err));
        }, 1000)
    },[])

    return (
        <>
        <h1>{dbMessage}</h1>
        </>
    );
};