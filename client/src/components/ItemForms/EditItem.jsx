import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditItem(props) {

    const { itemData, loadingImage, handleInputChange, handleSubmit, handleImageUpload } = props;
    const { name, price, imageUrl } = itemData;
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name<sup>*</sup></label>
                <input name='name' value={name} onChange={handleInputChange} required />
                
                <label htmlFor="price">Price<sup>*</sup></label>
                <input name='price' value={price} onChange={handleInputChange} required />
                
                <label htmlFor="imageUrl">Image</label>
                <input name='imageUrl' type='file' onChange={handleImageUpload} />
                <img src={imageUrl} />

                {loadingImage ? <p>Please wait, image loading...</p> : <button type="submit">Edit item</button>}
            </form>
        </>
    );
};