import React from 'react';
import classes from './SideBySideContainer.module.css';

const SideBySideContainer = ({imageChildren, infoChildren, dominantColor}) => {
    return (
        <div className={classes.container}>
            <div style={{backgroundColor: `${dominantColor}`}} className={classes.imageContainer}>
                {imageChildren}
            </div>            
            <div className={classes.infoContainer}>
                {infoChildren}
            </div>
            <div className={classes.clear}/>
        </div>
    );
};

export default SideBySideContainer;