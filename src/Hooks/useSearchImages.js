import {useFetchData} from "./useFetchData.js";
import APIWaifu from "../API/APIWaifu.js";
import {useState} from "react";

export const useSearchImages = (setImages, setError) => {
    const {fetchData: fetchImages, isLoading: isLoadingImgs} = useFetchData(getImages);
    const [hasMoreImages, setHasMoreImages] = useState(true);
    
    async function getImages(selectedTags, hasReplace = false) {
        let newImages = {}
        try {
            setError("");
            newImages = (await APIWaifu.getImagesByTag(selectedTags)).data.images;
        } catch (e) {
            setImages([]);
            setError(e.response.data.detail);
            throw new Error(e.response.data.detail);
        }
        
        if (hasReplace) {
            setImages(newImages);
            setHasMoreImages(true);
        } else {
            setImages((prevImages) => {
                const {filteredNewImages, isAllImages} = filterNewImages(prevImages, newImages);
                if (isAllImages) {
                    setHasMoreImages(false);
                    return prevImages;
                }
                return [...prevImages, ...filteredNewImages]
            });
        }
    }
    
    return {fetchImages, isLoadingImgs, hasMoreImages}
}

const filterNewImages = (prevImages, newImages) => {
    const prevSignatures = new Set(prevImages.map(img => img.signature));
    let isAllImages = false;
    const filteredNewImages = newImages.filter(img => !prevSignatures.has(img.signature));

    if (filteredNewImages.length === 0) {
        isAllImages = true;
    }
    return {filteredNewImages, isAllImages};
};
