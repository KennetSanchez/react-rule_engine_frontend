import React, {useState} from "react";

export const DropdownMenu = (
    props: {
        options: string[]
    }
) => {
    const options: string[] = ["Choose an operation..."].concat(props.options);
    const [selected, setSelected] = useState(options[0]);
    const [caret, setCaret] = useState("/svg/caret-down.svg");
    const [hover, setHover] = useState(false);
    const [focus, setFocus] = useState(false);
    const [dropped, setDropped] = useState("overflow-hidden");

    const dropDownOptions = (e: React.MouseEvent) => {
        if (caret === "/svg/caret-down.svg") {
            setCaret("/svg/caret-down-fill.svg");
            setDropped("");
        }
        else {
            setCaret("/svg/caret-down.svg");
            setDropped("overflow-hidden");
        }

    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSelected((e.target as HTMLInputElement).value);
    }

    const handleFocus = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        dropDownOptions(e as unknown as React.MouseEvent);
    }

    const handleHover = () => {
        if (caret === "/svg/caret-down.svg") setCaret("/svg/caret-down-fill-red.svg");
        else setCaret("/svg/caret-down.svg");
    }

    return (
        <div className={`w-52 max-h-[2.25em] h-24 flex flex-col items-center justify-between ${dropped}`}>
            <div
                className={"border-solid rounded-md px-2 border-2 border-b-neutral-300 transition duration-300 quintic-in-out hover:border-b-red-600 flex flex-row items-center justify-between"}>
                <input className={"focus:outline-none w-full"} type={"text"} placeholder={options[0]} value={selected}
                       onChange={handleChange}
                       onFocus={handleFocus}
                       onBlur={handleFocus}/>
                <img src={caret} alt={"An arrow pointing downwards."} className={"p-2 w-8 h-8 hover:cursor-pointer"}
                     onClick={dropDownOptions}
                     onMouseEnter={handleHover}
                     onMouseLeave={handleHover}/>
            </div>
            <div className={"z-30 bg-white flex flex-col space-y-2 items-center p-4 rounded-b-lg shadow-md w-full"}>
                {options.map((option : string, index : number) => (
                    <p className={"border-solid border-2 border-y-neutral-300 py-2"} key={index}>{option}</p>
                ))}
            </div>
        </div>
    );
}