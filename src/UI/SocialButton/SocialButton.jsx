import React from 'react';
import classes from './SocialButton.module.css';
import UIButton from "../UIButton/UIButton.jsx";

const SocialButton = ({children, img, ...props}) => {
    
    return (
        <UIButton addClassName={classes.socialsBtn} {...props}>
            <img src={img} alt={img}/>
            <p>{children}</p>
        </UIButton>
    );
};

export default SocialButton;