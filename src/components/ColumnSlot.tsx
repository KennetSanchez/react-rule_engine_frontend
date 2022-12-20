import {useState} from "react";

export const ColumnSlot = (
    props: {
        name: string
    }
) => {

    const [empty, setEmpty] = useState(true);

    const style: string = empty ?
        "border-solid border-2 border-neutral-400 shadow-inner-16 bg-neutral-300/15 text-neutral-800 font-semibold transition duration-300 back-in-out hover:border-neutral-600" :
        "text-neutral-300 bg-neutral-700 font-semibold transition duration-300 back-in-out hover:scale-105 hover:cursor-pointer hover:bg-neutral-300 hover:text-neutral-700";

    return (
        <div
            className={`select-none flex w-48 p-2 flex-row rounded-lg justify-center items-center text-base ${style}`}>
            <h6 className={"text-left"}>{props.name}</h6>
        </div>
    );
}