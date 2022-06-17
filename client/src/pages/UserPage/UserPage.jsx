import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';

const server = process.env.REACT_APP_API_URL;

export default function UserPage() {
    
    const [partner, setPartner] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        axios
        .get(`${server}/partners/${id}`)
        .then(({ data }) => setPartner(data))
        .catch((err) => console.log(err));
    }, []);
    
    return(
        <>
            {partner ? 
            <h1>Hello, {partner.businessName}</h1>
            :
            <>No partner from db</>
            }
        </>
    );
};