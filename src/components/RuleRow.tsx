import {ColumnType} from "../model/ColumnType";
import {ColumnSlot} from "./ColumnSlot";
import {DropdownMenu} from "./DropdownMenu";

export const RuleRow = (
    props: {
        columnLeft?: ColumnType,
        columnRight?: ColumnType,
        index : number
    }
) => {

    const operations  = () => {
        if (props.columnLeft === undefined) return [];
        if (props.columnLeft.columnType === "numeric") return ["Less than", "Greater than", "Less or equal to", "Greater or equal to", "Equal to"];
        else if (props.columnLeft.columnType === "text") return ["Equal to", "Different from"];
        else if (props.columnLeft.columnType === "boolean") return ["Is True", "Is False", "Equal to", "Different from"];
        return [];
    }

    return (
        <div className={"flex flex-row justify-between items-center w-5/6 h-20 px-4"}>
            <ColumnSlot name={"Column A"}/>
            <DropdownMenu options={operations()} index={props.index}/>
            <ColumnSlot name={"Column B"}/>
        </div>
    );
}