import React, {useEffect, useState} from 'react';
import {fetchImages} from "../api/pexelsApi.js";
import SearchBar from "./SearchBar.jsx";
import Gallery from "./Gallery.jsx";
import '../styles/MainImage.css';
import {useNavigate, useParams} from "react-router-dom";

const MainImage = () => {
    const categories = ['mountain', 'beaches', 'birds', 'food'];
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            getImages(category);
        } else {
            getImages('nature');
        }
    }, [category])

    const getImages = async (query) => {
        const resImgs = await fetchImages(query);
        setImages(resImgs);
    }

    const handleNavigate = (query) => {
        navigate(`/${query}`);
    }

    return (
        <div className="main-image">
            <h1 className="title-image">Snap Shot</h1>
            <SearchBar className="search-bar"
                       handleNavigate={handleNavigate}/>
            <div className='categories-container'>
                {categories.map(category => (
                   <button className='categorie-button' key={category} onClick={() => handleNavigate(category)}>
                       {category}
                   </button>
                ))}
            </div>
            <Gallery images={images} title={category || 'nature'} />
        </div>
    )
}

export default MainImage;