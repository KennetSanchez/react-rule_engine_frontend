import {useState} from "react";
import {Droppable} from "react-beautiful-dnd";

export const ColumnSlot = (
    props: {
        name: string
        pos : string,
        index : number
    }
) => {

    const style: string = "border-solid border-2 border-neutral-400 shadow-inner-16 bg-neutral-300/15 text-neutral-800 font-semibold transition duration-300 back-in-out hover:border-neutral-600"

    return (
        <Droppable droppableId={`columnSlot${props.pos}${props.index}`}>
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`select-none flex w-48 h-10 px-2 flex-row rounded-lg justify-center items-center text-base ${style}`}>
                    <h6 className={"text-left"}>{props.name}</h6>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}