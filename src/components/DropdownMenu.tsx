import React, {SyntheticEvent} from "react";

export const DropdownMenu = (
    props: {
        options: string[],
        index : number,
        onChange : {(e : SyntheticEvent<HTMLSelectElement, Event>) : void},
        size :string,
        mode : string,
        placeHolder : string,
        disabled? : boolean
    }
) => {
    const options: string[] = [props.placeHolder].concat(props.options);

    const renderOptions = () => {
        return options.map((option : string, index : number) => {
            if (index !== 0) return <option value={options[index]}>{options[index]}</option>
            return <option className={"p-4 rounded-none"} value={options[index]} key={index}>{options[index]}</option>
        });
    }

    return (
        <div className={`${props.size} flex items-center justify-between ${props.disabled !== undefined && props.disabled ? "opacity-0" : ""}`} >
            <select disabled={props.disabled !== undefined && props.disabled} id={`selector${props.mode}${props.index}`} onChange={props.onChange} defaultValue={options[0]} className={"appearance-none focus:outline-none w-full h-full border-solid rounded-md px-2 border-2 border-neutral-300 transition duration-300 quintic-in-out hover:border-neutral-400"} placeholder={options[0]} >
                {renderOptions()}
            </select>
        </div>
    );
}