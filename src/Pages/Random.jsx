import React, {useEffect, useState} from 'react';
import {useFetchData} from "../Hooks/useFetchData.js";
import APIWaifu from "../API/APIWaifu.js";
import {useImageInfo} from "../Hooks/useImageInfo.js";
import {useNavigate, useParams} from "react-router-dom";
import '../Styles/Random.css';
import ImageForm from "../Components/ImageForm/ImageForm.jsx";

const Random = () => {
    const {signature} = useParams()
    const [randomImage, setRandomImage] = useState({});

    const {
        fetchData: fetchRandomImage,
        isLoading: isLoadingRandImg,
        error: IsRndImgError
    } = useFetchData(getImage);

    const [imageInfo, setImageInfo] = useState({
        otherImageInfo: {},
        artistImageInfo: {},
        imageTags: [],
        imageData: {},
    });
    
    useImageInfo(randomImage, setImageInfo);
    
    async function getImage(signature) {
        let result = {};
        if (signature) {
            result = await APIWaifu.getBySignature(signature);
        } else {
            result = await APIWaifu.getRandom();
            transitToImage(result.data.images[0].signature);
        }
        setRandomImage(result.data.images[0])
    }
    
    useEffect(() => {
        fetchRandomImage(signature);
    }, [])

    const router = useNavigate();
    function transitToImage(signature, replace = true) {
        router(`/random/${signature}`, { replace: replace })
    }

    return (
        <>
            {IsRndImgError &&
                <h1>`Random Image Error:${IsRndImgError}`</h1>
            }
            {isLoadingRandImg
                ?
                <h2>Loading image...</h2>
                :
                <ImageForm imageInfo={imageInfo}/>
            }
        </>
    );
};

export default Random;

//Пересесть на tsx, использовать redux toolkit