import { Link } from "react-router-dom";

export default function ItemCard(props) {

    const { item } = props;

    return(
        <>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <img src={item.imageUrl} />
        </>
    );
};