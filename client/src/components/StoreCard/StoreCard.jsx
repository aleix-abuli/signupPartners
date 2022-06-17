export default function StoreCard(props) {

    const { store } = props;

    return(
        <>
            <h4>{store.name}</h4>
            <p>{store.address}</p>
        </>
    );
};