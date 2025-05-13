import React from 'react';
import UIButton from "../../UI/UIButton/UIButton.jsx";
import APIWaifu from "../../API/APIWaifu.js";

const DownloadImageButton = ({downloadUrl, imageName, extension, byteSize}) => {
    async function downloadImage(url, imgId, ext) {
        if(!url) {
            return;
        }
        const response = await APIWaifu.download(url);
        if (response.status === 200) {
            const urlW = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = urlW;
            link.setAttribute('download', `${imgId}${ext}`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        }
    }
    
    function bytesToMB(bytes) {
        return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    }
    
    return (
        <UIButton
            onClick={() => {
                downloadImage(downloadUrl, imageName, extension);
            }}
            type="button"
        >
            СКАЧАТЬ {bytesToMB(byteSize)}
        </UIButton>
    );
};

export default DownloadImageButton;