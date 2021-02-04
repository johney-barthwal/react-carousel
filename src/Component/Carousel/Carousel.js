import React,{useState,useEffect} from 'react'
import './carousel.scss'
import Image from './Image';
import ImageInfo from './ImageInfo';

import image1 from '../../Assets/image1.jpg';
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.jpg';

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
        carouselImage.style.transform = `translateX(${imageTranslateX}px)`;
        const carouselText = document.querySelector(".carousel__info");
        carouselText.style.transform = `translateX(${textTranslateX}px)`;

    },[imageTranslateX,textTranslateX]);

    //event listner for next button
    const next = (e) =>{
        if(currentImgIndex != imagesFromSource.length-1){
            setcurrentImgIndex(currentImgIndex+1);
            if(window.innerWidth < 400){
                setImageTranslateX(imageTranslateX - 200);
                setTextTranslateX(textTranslateX - 200);
            }
            else if(window.innerWidth > 400 && window.innerWidth < 1240){
                setImageTranslateX(imageTranslateX - 300);
                setTextTranslateX(textTranslateX - 300);
            }
            else{
                setImageTranslateX(imageTranslateX - 400);
                setTextTranslateX(textTranslateX - 400);
            } 
        }  
    }

    //event listner for previous button
    const previous = (e) =>{
        if(currentImgIndex != 0){
            setcurrentImgIndex(currentImgIndex-1);
            if(window.innerWidth < 400){
                setImageTranslateX(imageTranslateX + 200);
                setTextTranslateX(textTranslateX + 200);
            }
            else if(window.innerWidth > 400 && window.innerWidth < 1240){
                setImageTranslateX(imageTranslateX + 300);
                setTextTranslateX(textTranslateX + 300);
            }
            else{
                setImageTranslateX(imageTranslateX + 400);
                setTextTranslateX(textTranslateX + 400);
            } 
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