import { Link } from "react-router-dom";

export default function StoreCard(props) {

    const { store } = props;

    return(
        <>
            <Link to={`/stores/${store._id}`}><h4>{store.name}</h4></Link>
            <p>{store.address}</p>
        </>
    );
};