import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ItemCard from '../../components/ItemCard/ItemCard';

const server = process.env.REACT_APP_API_URL;

export default function StoreDetailsPage() {
    
    const { storeId } = useParams();

    const [store, setStore] = useState(null);
    const [items, setItems] = useState(false);

    useEffect(() => {

        const storedToken = localStorage.getItem('authToken');

        axios
        .get(`${server}/stores/${storeId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
        .then(({ data }) => {
            setStore(data);
            if(data.items.length > 0) setItems(true);
        })
        .catch((err) => console.log(err));

    }, []);

    return(
        <>
            { store ? 
            <>
                <img src={store.imageUrl} />
                <h2>{store.name}</h2>
                <p>{store.address}</p>
                <h3>Items:</h3>
                {items ? 
                <>
                    {store.items.map((item) => (
                        <ItemCard item={item} />
                    ))}
                    <Link to={`/stores/${storeId}/items/new`}>Add more items</Link>
                </>
                :
                <>
                    <p>This establishment doesn't have any items yet.</p>
                    <Link to={`/stores/${storeId}/items/new`}>Start adding items</Link>
                </>
                }
            </>
            :
            <Loader />
            }
        </>
    );
};