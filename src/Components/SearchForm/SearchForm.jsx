import {useEffect, useState} from 'react';
import ImageTags from "../ImageTags/ImageTags.jsx";
import UIButton from "../../UI/UIButton/UIButton.jsx";

const SearchForm = ({searchTagsCallback, setFormTags, allTags, selectedTags, TagsError}) => {
    const [lastSearchTags, setLastSearchTags] = useState([]);

    useEffect(() => {
        const savedTags = JSON.parse(localStorage.getItem("selectedTags")) || [];
        setFormTags(savedTags);
        searchImages(savedTags);
    }, []);
    
    function handleSetTag(tag) {
        setFormTags((prevTags) => {
            let newTags;
            if (prevTags.includes(tag)) {
                newTags = prevTags.filter(t => t !== tag);
            } else {
                newTags = [...prevTags, tag];
            }
            localStorage.clear();
            
            localStorage.setItem("selectedTags", JSON.stringify(newTags));
            return newTags;
        })
    }

    function searchImages(tags) {
        if (areArraysEqual(tags, lastSearchTags) && tags.length > 0 && lastSearchTags.length > 0) {
            return;
        }
        setLastSearchTags(tags);
        searchTagsCallback(tags, true);
    }

    function areArraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;

        const set1 = new Set(arr1);
        const set2 = new Set(arr2);

        return [...set1].every(item => set2.has(item));
    }
    
    return (
        <div className="searchSettings">
            {TagsError && 
            <h1>Get All Tags Error: {TagsError}</h1>}
            {Object.entries(allTags).map(([category, tags]) => {
                return <ImageTags
                    key={category}
                    selectedTags={selectedTags}
                    setTagCallback={handleSetTag}
                    headerText={category.toUpperCase()}
                    imageTags={tags}
                />
            })}
            <UIButton
                onClick={() => {searchImages(selectedTags)}}
                style={{margin: "15px", backgroundColor: "#3e8e41", color: "white"}}
            >
                Применить
            </UIButton>
            <hr></hr>
        </div>
    );
};

export default SearchForm;