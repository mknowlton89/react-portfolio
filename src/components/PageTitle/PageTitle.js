import React from 'react';
import "./styles.css";

export function PageTitle({ title }){
    return(
        <div className="pageTitleContainer">
            <h1>{title}</h1>
        </div>
    )
}