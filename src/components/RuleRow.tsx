import {ColumnType} from "../model/ColumnType";
import {ColumnChip} from "./ColumnChip";
import {ColumnSlot} from "./ColumnSlot";
import {DropdownMenu} from "./DropdownMenu";

export const RuleRow = (
    props: {
        columnLeft? : ColumnType,
        columnRight? : ColumnType,
    }
) => {
    return (
        <div className={"flex flex-row justify-between items-center w-5/6 h-20 px-4"}>
            <ColumnSlot name={"Column A"}/>
            <DropdownMenu options={["The other option"]}/>
            <ColumnSlot name={"Column B"}/>
        </div>
    );
}