import React from "react";

export const Card = (
    props: {
        isGlass : boolean,
        padding : string,
        size : string,
        color : string,
        children? : React.ReactNode[] | React.ReactNode,
        spacing : string,
        position? : string,
        override? : string
    }) => {

    const glassEffect : string = props.isGlass ? `drop-shadow-md backdrop-blur-md ${props.color}` : `drop-shadow-lg ${props.color}`;

    return (
        <div className={`flex flex-col justify-center ${props.spacing} items-center rounded-md ${props.position === undefined ? "" : props.position} ${props.padding} ${props.size} ${glassEffect} ${props.override === undefined ? "" : props.override}`}>
            {props.children}
        </div>
    );
}