import React from 'react';
import classes from "./InfoContent.module.css";
import HeaderElement from "../../UI/HeaderElement/HeaderElement.jsx";

const InfoContent = ({header, arrayData, children}) => {
    return (
        <HeaderElement header={header}>
            {arrayData &&
                arrayData.map((item, index) => {
                return <p key={index} className={classes.infoTitle}>
                    {item.text}: <a className={classes.infoText}> {item.value}</a>
                </p>
            })}
            {children}
        </HeaderElement>
    );
};

export default InfoContent;