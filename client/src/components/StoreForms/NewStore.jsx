import axios from "axios";
import { useState } from "react";

const server = process.env.REACT_APP_API_URL;

export default function NewStore() {
    
    const [newStoreData, setNewStoreData] = useState({
        name: '',
        address: '',
        imageUrl: ''
    });

    const [loadingImage, setLoadingImage] = useState(false);

    function handleInputChange(e) {

        const { value, name } = e.currentTarget;
        setNewStoreData({ ...newStoreData, [name]: value });

    }

    function handleSubmit(e) {
         
        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');

        axios
        .post(`${server}/stores`, newStoreData,  { headers: { Authorization: `Bearer ${storedToken}` } })

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
            setNewStoreData({ ...newStoreData, imageUrl: data.cloudinary_url })
        })
        .catch(err => console.log(err));
    };

    const { name, address, imageUrl } = newStoreData;
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name<sup>*</sup></label>
                <input name='name' value={name} onChange={handleInputChange} required />
                
                <label htmlFor="address">Address<sup>*</sup></label>
                <input name='address' value={address} onChange={handleInputChange} required />
                
                <label htmlFor="imageUrl">Cover Image</label>
                <input name='imageUrl' type='file' onChange={handleImageUpload} required />

                <button type="submit">Create establishment</button>
            </form>
        </>
    );
};