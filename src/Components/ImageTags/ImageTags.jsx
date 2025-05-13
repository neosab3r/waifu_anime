import React from 'react';
import HeaderElement from "../../UI/HeaderElement/HeaderElement.jsx";
import ImageTag from "../../UI/ImageTag/ImageTag.jsx";
import RowContainer from "../../UI/RowContainer/RowContainer.jsx";

const ImageTags = ({selectedTags, setTagCallback, headerText, imageTags}) => {

    if (!imageTags) {
        headerText = `${headerText} Не присвоены`;
    }

    return (
        <HeaderElement header={headerText}>
            {imageTags &&
                <RowContainer>
                    {imageTags.map(tag => {
                        return <ImageTag
                            isSelected={selectedTags.includes(tag.name)}
                            key={tag.name}
                            title={tag.description}
                            style={{marginRight: '5px'}}
                            onClick={() => {
                                setTagCallback(tag.name);
                            }}
                        >
                            {tag.name}
                        </ImageTag>
                    })}
                </RowContainer>
            }
        </HeaderElement>
    );
};

export default ImageTags;