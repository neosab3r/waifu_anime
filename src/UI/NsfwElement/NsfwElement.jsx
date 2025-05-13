import React from 'react';
import classes from './NsfwElement.module.css'
const NsfwElement = ({isNsfwText}) => {
    return (
        <div className={classes.NsfwElement}>
            <p className={classes.NsfwTextSmall}>NSFW</p>
            <p className={classes.NsfwText}>{isNsfwText}</p>
        </div>
    );
};

export default NsfwElement;