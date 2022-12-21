import {ColumnType} from "../model/ColumnType";
import {ColumnSlot} from "./ColumnSlot";
import {DropdownMenu} from "./DropdownMenu";
import {ImageButton} from "./ImageButton";
import React, {SyntheticEvent} from "react";

export const RuleRow = (
    props: {
        columnLeft?: ColumnType,
        columnRight?: ColumnType,
        index: number,
        handleRemove : { (e: React.MouseEvent): void },
        handleAdd : { (e: React.MouseEvent): void },
        onSelect : {(e : SyntheticEvent<HTMLSelectElement, Event>) : void},
        onConcat : {(e : SyntheticEvent<HTMLSelectElement, Event>) : void},
    }
) => {

    const operations = () => {
        if (props.columnLeft === undefined) return [];
        if (props.columnLeft.columnType === "numeric") return ["Less than", "Greater than", "Less or equal to", "Greater or equal to", "Equal to"];
        else if (props.columnLeft.columnType === "text") return ["Equal to", "Different from"];
        else if (props.columnLeft.columnType === "boolean") return ["Is True", "Is False", "Equal to", "Different from"];
        return [];
    }

    return (
        <div className={"flex flex-row justify-between items-center w-full h-16 px-4"} >
            <ImageButton position={""} default={"/svg/dash-circle.svg"} hover={"/svg/dash-circle-fill.svg"}
                         alt={"Minus symbol"} onClick={props.handleRemove}/>
            <ColumnSlot name={props.columnLeft === undefined ? "" : props.columnLeft.columnName} pos={"L"}
                        index={props.index}/>
            <DropdownMenu size={"w-64 h-10"} options={operations()} index={props.index} onChange={props.onSelect} mode={"S"} placeHolder={"Choose an operation..."}/>
            <ColumnSlot name={props.columnRight === undefined ? "" : props.columnRight.columnName} pos={"R"}
                        index={props.index}/>
            <DropdownMenu size={"w-24 h-10"} options={["AND", "OR"]} index={props.index} onChange={props.onConcat} mode={"C"} placeHolder={"Select..."} disabled={props.index === 3}/>
            <ImageButton position={""} default={"/svg/plus-circle.svg"} hover={"/svg/plus-circle-fill.svg"}
                         alt={"Plus symbol"} onClick={props.handleAdd}/>
        </div>
    );
}