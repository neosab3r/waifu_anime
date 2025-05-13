import {useEffect, useState} from "react";
import APIWaifu from "../API/APIWaifu.js";
import {useFetchData} from "./useFetchData.js";

export const useFetchAllTags = () => {
    const [allTags, setTags] = useState({nsfw: [], versatile: []});

    async function getTags() {
        const result = await APIWaifu.getTags();
        setTags({nsfw: result.data.nsfw, versatile: result.data.versatile});
        console.log(result);
    }

    const {fetchData: fetchTags, Error, isLoading} = useFetchData(getTags)
    
    useEffect(() => {
        fetchTags();
    }, [])
    
    return {isLoading, Error, allTags}
}