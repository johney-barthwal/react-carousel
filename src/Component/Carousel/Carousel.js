import React,{useState,useEffect} from 'react'
import './carousel.scss'
import Image from './Image';
import ImageInfo from './ImageInfo';

import image1 from '../../Assets/image1.jpg';
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.jpg';
import image4 from '../../Assets/image4.jpg';

function Carousel(){
    //images from source 
    const imagesFromSource = [
        {
            url : image1,
            text : "Pizaa",
            subText : "Cheese, Tomatos, Capsicum..."
        },
        { 
            url : image2,
            text : "Wrap",
            subText : "Chicken, Egg whites, Yogurt..."
        },
        {
            url : image3,
            text : "Idli",
            subText : "Rice, Coconut, fenugreek seeds..."
        },
        {
            url : image4,
            text : "Biryani",
            subText : "Rice, Chicken, Egg..."
        }
    ];
    //render images - default to first image
    const [images,setImages] = useState([]);
    //current image index
    const [currentImgIndex,setcurrentImgIndex] = useState(0);
    //transform images
    const [imageTranslateX,setImageTranslateX] = useState(0);
    const [textTranslateX,setTextTranslateX] = useState(0);

    useEffect(()=>{
        if(images.length < imagesFromSource.length){
            setImages([...images,imagesFromSource[currentImgIndex]]);
        }
        const carouselImage = document.querySelector(".carousel__images");
        carouselImage.style.transform = `translateX(${imageTranslateX}%)`;
        const carouselText = document.querySelector(".carousel__info");
        carouselText.style.transform = `translateX(${textTranslateX}%)`;

    },[imageTranslateX,textTranslateX]);

    //event listner for next button
    const next = (e) =>{
        console.log(currentImgIndex);
        if(currentImgIndex !== imagesFromSource.length-1){
            setcurrentImgIndex(currentImgIndex+1);
            setImageTranslateX(imageTranslateX - 100);
            setTextTranslateX(textTranslateX - 100);
        }  
    }

    //event listner for previous button
    const previous = (e) =>{
        if(currentImgIndex !== 0){
            setcurrentImgIndex(currentImgIndex-1);
            setImageTranslateX(imageTranslateX + 100);
            setTextTranslateX(textTranslateX + 100);
        }
    } 

    return ( 
        <>
        <div className="carousel">
            <div className="carousel__images">
                {images.map((image,index) => <Image key={index} url={image.url}/>)}
            </div> 
            <div className="carousel__feature">   
                <div className="carousel__info">
                    {images.map((image,index) => <ImageInfo key={index} text={image.text} subText={image.subText} />)}
                </div>
                <div className="carousel__buttons">
                    <button onClick={next}>&gt;</button>
                    <button onClick={previous}>&lt;</button>
                </div>
            </div>  
        </div>
        </>
    ) 
}

export default Carousel;