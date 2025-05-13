import React from 'react';
import classes from './TruncatedText.module.css';

const TruncatedText = ({children}) => {
    return (
        <a className={classes.truncatedText}>
            {children}
        </a>
    );
};

export default TruncatedText;