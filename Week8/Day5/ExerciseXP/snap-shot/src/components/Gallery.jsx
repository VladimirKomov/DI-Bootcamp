import React from 'react';
import '../styles/Gallery.css';

const Gallery = ({images, title}) => {

    return (
        <div>
            <h2 className="title-image">{title} pictures</h2>
            <div className="gallery">

                {images.map((image) => (
                    <div className="gallery-item" key={image.id}>
                        <img src={image.src.medium} alt={image.alt}
                             className="gallery-image"/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery;