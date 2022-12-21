import {DraggableProvided} from "react-beautiful-dnd";

export const ColumnChip = (
    props: {
        name : string,
        type : string,
        data? : any[]
        draggableProvided : DraggableProvided
    }
) => {
    return (
        <div {...props.draggableProvided.draggableProps}
             ref={props.draggableProvided.innerRef}
             {...props.draggableProvided.dragHandleProps}
            className={"select-none text-neutral-300 flex w-full p-2 flex-row bg-neutral-700 rounded-lg justify-around items-center text-base font-semibold transition duration-500 exponential-out hover:scale-95 hover:cursor-pointer hover:bg-neutral-300 hover:text-neutral-700"}>
            <h6 className={"text-left"}>{props.name}</h6>
            <p className={"text-center"}>:</p>
            <h6 className={"text-right"}>{props.type}</h6>
        </div>
    );
}