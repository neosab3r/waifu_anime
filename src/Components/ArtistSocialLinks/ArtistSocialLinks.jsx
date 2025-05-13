import React from 'react';
import SocialButton from "../../UI/SocialButton/SocialButton.jsx";
import RowContainer from "../../UI/RowContainer/RowContainer.jsx";

const ArtistSocialLinks = ({artistImageInfo}) => {
    
    function openNewTab(url) {
        window.open(url, "_blank");
    }
    
    if (!artistImageInfo.socials) {
        return (
            <>
            </>
        );
    }
    
    return (
        <RowContainer>
            {artistImageInfo.socials.map(social => {
                return <SocialButton
                    style={{marginRight: '8px'}}
                    key={social.text}
                    onClick={() => openNewTab(social.url)}
                    img={social.img}
                >
                    {social.text}
                </SocialButton>
            })}
        </RowContainer>
    );
};

export default ArtistSocialLinks;