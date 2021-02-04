import React from 'react';

function ImageInfo({text,subText}){
    return (
        <div className="carousel__text">
            <h1>{text}</h1>
            <p>{subText}</p>
        </div>
    )
}

export default ImageInfo;