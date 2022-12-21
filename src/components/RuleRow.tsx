import {ColumnType} from "../model/ColumnType";
import {ColumnSlot} from "./ColumnSlot";
import {DropdownMenu} from "./DropdownMenu";
import {ImageButton} from "./ImageButton";
import React from "react";

export const RuleRow = (
    props: {
        columnLeft?: ColumnType,
        columnRight?: ColumnType,
        index: number,
        handleRemove : { (e: React.MouseEvent): void },
        handleAdd : { (e: React.MouseEvent): void }
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
        <div className={"flex flex-row justify-between items-center w-5/6 h-16 px-4"}>
            <ImageButton position={""} default={"/svg/dash-circle.svg"} hover={"/svg/dash-circle-fill.svg"}
                         alt={"Minus symbol"} onClick={props.handleRemove}/>
            <ColumnSlot name={props.columnLeft === undefined ? "" : props.columnLeft.columnName} pos={"L"}
                        index={props.index}/>
            <DropdownMenu options={operations()} index={props.index}/>
            <ColumnSlot name={props.columnRight === undefined ? "" : props.columnRight.columnName} pos={"R"}
                        index={props.index}/>
            <ImageButton position={""} default={"/svg/plus-circle.svg"} hover={"/svg/plus-circle-fill.svg"}
                         alt={"Plus symbol"} onClick={props.handleAdd}/>
        </div>
    );
}