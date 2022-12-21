import React, {RefObject, useRef, useState} from "react";

export const DropdownMenu = (
    props: {
        options: string[],
        index : number
    }
) => {
    const options: string[] = ["Choose an operation..."].concat(props.options);

    const renderOptions = () => {
        return options.map((option : string, index : number) => {
            if (index !== 0) return <option value={options[index]}>{options[index]}</option>
            return <option className={"p-4 rounded-none"} selected value={options[index]}>{options[index]}</option>
        });
    }


    return (
        <div className={`w-64 h-24 flex items-center justify-between`} >
            <select className={"appearance-none focus:outline-none w-full w-full border-solid rounded-md px-2 border-2 border-b-neutral-300 transition duration-300 quintic-in-out hover:border-b-red-600"} placeholder={options[0]} >
                {renderOptions()}
            </select>
            {/*<div*/}
            {/*    className={"bg-white flex flex-col space-y-reverse-2 items-center p-4 rounded-b-lg shadow-md w-full mb-4"} id={`dropDown${props.index}`}>*/}
            {/*    {options.map((option: string, index: number) => {*/}
            {/*        if (index !== 0) return <div*/}
            {/*            className={"border-solid border-t-2 border-neutral-300 p-2 w-full hover:cursor-pointer"}*/}
            {/*            key={index}*/}
            {/*            onClick={() => {select(index)}}>{option}</div>*/}
            {/*        return <div className={"border-solid border-t-2 border-transparent p-2 w-full hover:cursor-pointer"}*/}
            {/*                  key={index}*/}
            {/*                  onClick={() => {select(index)}} >{option}</div>*/}
            {/*    })}*/}
            {/*</div>*/}
        </div>
    );
}