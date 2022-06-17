import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';

const server = process.env.REACT_APP_API_URL;

export default function UserPage() {
    
    const [partner, setPartner] = useState(null);
    const [locals, setLocals] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        axios
        .get(`${server}/partners/${id}`)
        .then(({ data }) => {
            setPartner(data);
            if (data.locals.length > 0) setLocals(true);
        })
        .catch((err) => console.log(err));
    }, []);
    
    return(
        <>
            { partner ? 
            <>
                <h1>Hello, {partner.businessName}</h1>
                <h3>Welcome to Glovo Partners.</h3>
                { locals ?
                <>
                    <h3>Your current establishments</h3>
                </>
                :
                <>
                    <p>Seems like you don't have any registered establishments yet.</p>
                </>
                }
            </>
            :
            <>No partner from db</>
            }
        </>
    );
};