import './UserPage.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import StoreCard from '../../components/StoreCard/StoreCard';

const server = process.env.REACT_APP_API_URL;

export default function UserPage() {
    
    const [partner, setPartner] = useState(null);
    const [locals, setLocals] = useState(false);

    const { id } = useParams();

    useEffect(() => {

        const storedToken = localStorage.getItem('authToken');

        axios
        .get(`${server}/partners/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
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
                <section className='userHeader'>
                    <h1 className='black'>Hello, {partner.businessName}</h1>
                    <h3 className='black'>Welcome to Glovo Partners.</h3>
                </section>
                { locals ?
                <>
                    <h3>Your current establishments</h3>
                    <div className='userLocalsDiv'>
                        { partner.locals.map((local) => (
                            <StoreCard key={local._id} store={local} />
                        ))}
                        <Link to={'/stores/new'}>Add another establishment</Link>
                    </div>
                </>
                :
                <>
                    <p>Seems like you don't have any registered establishments yet.</p>
                    <Link to={'/stores/new'}>Add an establishment</Link>
                </>
                }
                <Link to={`/partners/${id}/edit`}>Edit profile</Link>
            </>
            :
            <>No partner from db</>
            }
        </>
    );
};