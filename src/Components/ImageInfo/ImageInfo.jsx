import React from 'react';
import InfoContent from "../InfoContent/InfoContent.jsx";
import NsfwElement from "../../UI/NsfwElement/NsfwElement.jsx";
import ArtistSocialLinks from "../ArtistSocialLinks/ArtistSocialLinks.jsx";
import ImageTags from "../ImageTags/ImageTags.jsx";
import {useNavigate} from "react-router-dom";

const ImageInfo = ({otherImageInfo, artistImageInfo, imageTags}) => {
    const router = useNavigate();
    
    function handleTagClick(tag) {
        localStorage.setItem("selectedTags", JSON.stringify([tag]));
        router(`/search/`, { replace: false })
    }
    
    return (
        <>
            <InfoContent key={otherImageInfo.header} header={otherImageInfo.header} arrayData={otherImageInfo.arrayData}/>
            <InfoContent key={artistImageInfo.header} header={`${artistImageInfo.header}: ${artistImageInfo.name}`}>
                <ArtistSocialLinks artistImageInfo={artistImageInfo} />
            </InfoContent>
            <ImageTags
                setTagCallback={handleTagClick}
                selectedTags={[]}
                headerText="Tags" 
                imageTags={imageTags}
            />
            <div style={{width: '100%', display: 'flex', justifyContent: 'end'}}>
                <NsfwElement isNsfwText={otherImageInfo.isNSFW}/>
            </div>
        </>
    );
};

export default ImageInfo;