import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import Loader from "../../components/Loader/Loader";
import ItemCard from '../../components/ItemCard/ItemCard';

const server = process.env.REACT_APP_API_URL;

export default function StoreDetailsPage() {

    const { user } = useContext(AuthContext);
    
    const { storeId } = useParams();
    const navigate = useNavigate();

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

    }, [store?.items]);

    function deleteStore(e) {

        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');
        navigate(`/partners/${user._id}`);

        axios
        .delete(`${server}/stores/${storeId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
        .then(() => console.log('deleted'))
        .catch((err) => console.log(err));

    };

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
                        <>
                            <ItemCard key={item._id} item={item} storeId={storeId} />
                        </>
                    ))}
                    <Link to={`/stores/${storeId}/items/new`}>Add more items</Link>
                </>
                :
                <>
                    <p>This establishment doesn't have any items yet.</p>
                    <Link to={`/stores/${storeId}/items/new`}>Start adding items</Link>
                </>
                }
                <Link to={`/stores/${storeId}/edit`} >Edit establishment</Link>
                <button onClick={deleteStore}>Delete establishment</button>
            </>
            :
            <Loader />
            }
        </>
    );
};