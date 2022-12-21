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
            return <option className={"p-4 rounded-none"} value={options[index]} key={index}>{options[index]}</option>
        });
    }

    return (
        <div className={`w-64 h-10 flex items-center justify-between`} >
            <select defaultValue={options[0]} className={"appearance-none focus:outline-none w-full h-full border-solid rounded-md px-2 border-2 border-neutral-300 transition duration-300 quintic-in-out hover:border-neutral-400"} placeholder={options[0]} >
                {renderOptions()}
            </select>
        </div>
    );
}