import React from "react";

export const Button = (
    props: {
        onClick? : {(e: React.MouseEvent) : void},
        isSubmit : boolean,
        type : string,
        rounded : string,
        label : string,
        override? : string,
    }

) => {
    const focus : string = "ring-transparent ring-4 ring-offset-0 focus:outline-none transition duration-700 ease-in-out";
    const transition : string = "transition duration-300 circular-in-out hover:cursor-pointer hover:scale-105 hover:text-auto";
    const shadow : string = "drop-shadow-md";
    const size : string = "h-10 w-32";


    const types = () => {
        switch (props.type) {
            case "primary":
            default:
                return `${shadow} ${size} bg-gradient-to-r from-red-600 to-red-900 text-white text-base ${transition} hover:bg-none hover:bg-red-300 hover:text-red-900 ${focus} focus:ring-red-400 active:bg-red-300 active:ring-red-500`;
            case "secondary":
                return `${shadow} ${size} metallic-to-r text-white text-base ${transition} hover:bg-none hover:bg-zinc-300 hover:text-zinc-800 ${focus} focus:ring-stone-400 active:ring-stone-500`;
            case "danger":
                return `${shadow} ${size} bg-red-600 text-red-200 text-base ${transition} hover:bg-red-200 hover:text-red-600 ${focus} focus:ring-red-200`;
        }
    }
    if (props.isSubmit) return (
        <input name={props.label.toLowerCase()} type={"submit"} className={`${props.override !== undefined ? props.override : ""} ${props.rounded} ${types()}`} value={props.label}/>
    ); else return (
        <input name={props.label.toLowerCase()} type={"button"} onClick={props.onClick} className={`${props.override !== undefined ? props.override : ""} ${props.rounded} ${types()}`} value={props.label}/>
    );
}