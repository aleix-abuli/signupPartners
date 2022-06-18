import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const server = process.env.REACT_APP_API_URL;

export default function NewItem() {
    
    const { storeId } = useParams();
    const navigate = useNavigate();
    
    const [newItemData, setNewItemData] = useState({
        name: '',
        price: '',
        imageUrl: ''
    });

    const [loadingImage, setLoadingImage] = useState(false);

    function handleInputChange(e) {

        const { value, name } = e.currentTarget;
        setNewItemData({ ...newItemData, [name]: value });

    }

    function handleSubmit(e) {
         
        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');

        axios
        .post(`${server}/stores/${storeId}/items/new`, newItemData,  { headers: { Authorization: `Bearer ${storedToken}` } })
        .then(({ data }) => navigate(`/stores/${data._id}`))
        .catch((err) => console.log(err));

    }

    //Cloudinary setup
    function handleImageUpload(e) {

        e.preventDefault();
        setLoadingImage(true);

        const uploadData = new FormData();
        uploadData.append('imageData', e.target.files[0]);

        axios
        .post(`${server}/upload`, uploadData)
        .then(({ data }) => {
            setLoadingImage(false)
            setNewItemData({ ...newItemData, imageUrl: data.cloudinary_url })
        })
        .catch(err => console.log(err));
    };

    const { name, price, imageUrl } = newItemData;
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name<sup>*</sup></label>
                <input name='name' value={name} onChange={handleInputChange} required />
                
                <label htmlFor="price">Price<sup>*</sup></label>
                <input name='price' value={price} onChange={handleInputChange} required />
                
                <label htmlFor="imageUrl">Image</label>
                <input name='imageUrl' type='file' onChange={handleImageUpload} required />

                {loadingImage ? <p>Please wait, image loading...</p> : <button type="submit">Add item</button>}
            </form>
        </>
    );
};