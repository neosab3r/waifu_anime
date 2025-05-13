import {useState} from "react";

export const useFetchData = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const fetchData = async (...args) => {
        try {
            setError("");
            setIsLoading(true);
            await callback(...args);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }
    
    return {fetchData, isLoading, error};
}