import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DeleteButton from '../DeleteButton/DeleteButton';

const server = process.env.REACT_APP_API_URL;

export default function ItemCard(props) {

    const navigate = useNavigate();
    
    const { item, storeId } = props;

    function deleteItem(e) {

        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');

        axios
        .delete(`${server}/items/${item._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
        .then((__) => navigate(`/stores/${storeId}`))
        .catch((err) => console.log(err));

    };

    return(
        <>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <img src={item.imageUrl} style={{"width" : "100px"}} />
            <Link to={`/edit/${item._id}`}>Edit item</Link>
            <DeleteButton callback={deleteItem} />
        </>
    );
};