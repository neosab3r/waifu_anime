import React from 'react';
import classes from './CellImage.module.css';

const CellImage = ({url, source, ...props}) => {
    return (
        <img className={classes.img} src={url} alt={source} {...props}/> 
    );
};

export default CellImage;