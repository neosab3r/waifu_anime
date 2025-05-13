import React, {useEffect, useState} from "react";
import classes from './LinkPreview.module.css';

const LinkPreview = ({url, children}) => {
    const [previewData, setPreviewData] = useState(null);

    function openPreview(url) {
        window.open(url, "_blank");
    }

    useEffect(() => {
        fetch(`https://api.linkpreview.net/?key=c0d057c51f49ed035165111b90ff2752&q=${url}`)
            .then(response => response.json())
            .then(data => setPreviewData(data))
            .catch(error => console.error("Ошибка получения превью", error));
    }, [url]);

    return (
        <div className={classes.linkPreviewContainer}>
            {children}
            {previewData 
                ?
                <button className={classes.linkPreviewBtn} onClick={() => openPreview(previewData.url)}>
                    {previewData.image &&
                        <img src={previewData.image} alt={previewData.title}/>}
                    <h3>{previewData.title}</h3>
                    <p>{previewData.description}</p>
                </button>
                :
                <p>Загрузка...</p>
            }
        </div>
    );
};

export default LinkPreview;