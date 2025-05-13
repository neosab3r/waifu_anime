import React from 'react';
import UIButton from "../UIButton/UIButton.jsx";
import classes from './ImageTag.module.css';

const ImageTag = ({isSelected, children, ...props}) => {
    
    return (
        <UIButton 
            addClassName={isSelected ? classes.clicked : ""}
            type="button" 
            {...props}
        >
            <p>{children}</p>
        </UIButton>
    );
};

export default ImageTag;