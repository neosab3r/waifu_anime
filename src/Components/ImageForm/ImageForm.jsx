import React from 'react';
import CellImage from "../CellImage/CellImage.jsx";
import ImageInfo from "../ImageInfo/ImageInfo.jsx";
import DownloadImageButton from "../DownloadImageButton/DownloadImageButton.jsx";
import SideBySideContainer from "../../UI/SideBySideContainer/SideBySideContainer.jsx";
import classes from './ImageForm.module.css';

const ImageForm = ({imageInfo}) => {

    if (!imageInfo) {
        console.log(`imageInfo not found`);
        return (<></>)
    }

    return (
        <div className={classes.ImageForm}>
            <SideBySideContainer
                dominantColor={imageInfo.imageData.dominantColor}
                imageChildren={
                    <CellImage
                        key={imageInfo.imageData.signature}
                        url={imageInfo.imageData.url}
                        source={imageInfo.imageData.source}
                    />
                }
                infoChildren={
                    <>
                        <ImageInfo
                            otherImageInfo={imageInfo.otherImageInfo}
                            artistImageInfo={imageInfo.artistImageInfo}
                            imageTags={imageInfo.imageTags}/>
                            {/*<LinkPreview url={imageInfo.imageData.source}> 
                                    <TruncatedText>Источник: {imageInfo.imageData.source}</TruncatedText>
                             </LinkPreview>*/}
                        <DownloadImageButton
                            downloadUrl={imageInfo.imageData.url}
                            imageName={imageInfo.imageData.imageId}
                            extension={imageInfo.imageData.extension}
                            byteSize={imageInfo.imageData.byte_size}
                        />
                    </>
                }
            />
        </div>
    );
};

export default ImageForm;