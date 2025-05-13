import React from 'react';
import classes from "../../Components/InfoContent/InfoContent.module.css";

const HeaderElement = ({header, children, ...props}) => {
    return (
        <div className={classes.container} {...props}>
            <h4 className={classes.header}>{header}</h4>
            {children}
        </div>
    );
};

export default HeaderElement;