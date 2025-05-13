import React from 'react';
import classes from './RowContainer.module.css';

const RowContainer = ({children, ...props}) => {
    return (
        <div {...props} className={classes.rowContainer}>
            {children}
        </div>
    );
};

export default RowContainer;