import {Card} from "../components/Card";
import {ColumnChip} from "../components/ColumnChip";
import React, {useEffect, useState} from "react";
import {ColumnType} from "../model/ColumnType";
import {ImageButton} from "../components/ImageButton";
import {RuleRow} from "../components/RuleRow";
import {useNavigate} from "react-router-dom";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";

export const Home = (
    props: {}
) => {

    const dummyCols: ColumnType[] = [
        {columnName: "Column A", columnType: "text", columnId: "col1"},
        {columnName: "Column B", columnType: "numeric", columnId: "col2"},
        {columnName: "Column C", columnType: "boolean", columnId: "col3"},
        {columnName: "Column A", columnType: "text", columnId: "col4"},
        {columnName: "Column B", columnType: "numeric", columnId: "col5"},
        {columnName: "Column C", columnType: "boolean", columnId: "col6"},
        {columnName: "Column A", columnType: "text", columnId: "col7"},
        {columnName: "Column B", columnType: "numeric", columnId: "col8"},
        {columnName: "Column C", columnType: "boolean", columnId: "col9"},
        {columnName: "Column A", columnType: "text", columnId: "col10"},
        {columnName: "Column B", columnType: "numeric", columnId: "col11"},
        {columnName: "Column C", columnType: "boolean", columnId: "col12"},
        {columnName: "Column A", columnType: "text", columnId: "col13"},
        {columnName: "Column B", columnType: "numeric", columnId: "col14"},
        {columnName: "Column C", columnType: "boolean", columnId: "col15"},
    ]

    const navigate = useNavigate();
    const [fetchedColumns, setFetchedColumns] = useState(dummyCols);
    const [ruleRows, setRuleRows]: [{ right: ColumnType, left: ColumnType, index : number }[], any] = useState([{
        right: {columnName: "", columnType: ""} as ColumnType,
        left: {columnName: "", columnType: ""} as ColumnType,
        index: 0
    }]);

    const renderColumns = () => {
        if (fetchedColumns.length === 0) {
            return (
                <div className={"flex w-full h-full items-center justify-center"}>
                    <h6 className={"text-neutral-400"}>No columns to display...</h6>
                </div>
            );
        } else {
            return (
                <Droppable droppableId={"columnPicker"}>
                    {(droppableProvided) => (
                        <div {...droppableProvided.droppableProps}
                             ref={droppableProvided.innerRef}
                             className={"flex w-full flex-col space-y-4 overflow-y-auto scrollbar-hidden"}>
                            {fetchedColumns.map((column: ColumnType, index: number) => (
                                <Draggable draggableId={column.columnId} index={index} key={column.columnId}>
                                    {(draggableProvided) => (
                                        <ColumnChip draggableProvided={draggableProvided}
                                                    name={column.columnName}
                                                    type={column.columnType}/>
                                    )}
                                </Draggable>
                            ))}
                            {droppableProvided.placeholder}
                        </div>
                    )}
                </Droppable>
            );
        }
    }

    const renderRuleRows = () => {
        if (ruleRows.length === 0) {
            return (
                <RuleRow handleRemove={(e) => removeRow(e, 0)}
                         handleAdd={addRow} index={0}/>
            );
        }
        else return (
            <div className={"mt-8 flex w-[90%] h-full flex-col items-center overflow-y-auto scrollbar-hidden"}>
                {ruleRows.map((rule: any, index: number) => (
                    <RuleRow columnLeft={ruleRows[index].left} columnRight={ruleRows[index].right} key={index}
                             index={index}
                             handleRemove={(e) => removeRow(e, index)}
                             handleAdd={addRow}/>
                ))}
            </div>
        );
    }

    const removeRow = (e: React.MouseEvent, index : number) => {
        e.preventDefault();
        if (ruleRows.length > 1) {
            setRuleRows(ruleRows.filter(row => row.index !== index));
        }

    }

    const addRow = (e: React.MouseEvent) => {
        e.preventDefault();
        if (ruleRows.length < 4) {
            setRuleRows(ruleRows.concat({
                right: {columnName: "", columnType: ""} as ColumnType,
                left: {columnName: "", columnType: ""} as ColumnType,
                index: ruleRows.length
            }));
        }
    }

    const exit = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/login");
    }

    const handleDragEnd = (result: DropResult) => {
        const split = result.destination?.droppableId.replace("columnSlot", "").split("");
        const side = split![0] === "L" ? "left" : "right";
        const index = parseInt(split![1]);
        const newRuleRows = ruleRows.map(rule => {
            if (ruleRows.indexOf(rule) === index) {
                return {...rule, [side]: fetchedColumns[result.source.index]};
            }
            return rule;
        });
        setRuleRows(newRuleRows);
    }

    return (
        <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
            <div className={"flex w-full h-full selection:bg-red-200 bg-gradient-to-br from-neutral-400 to-white"}>
                <aside className={"bg-neutral-800 h-full w-80 flex flex-col items-center py-8 px-4 space-y-8"}>
                    <h4 className={"selection:bg-neutral-300 selection:text-neutral-700 text-white font-bold"}>Detected
                        Columns</h4>
                    {renderColumns()}
                </aside>
                <section className={"flex flex-col justify-center items-center w-full"}>
                    <Card isGlass={false} padding={"py-4"} size={"w-full h-auto"} color={"bg-white"} spacing={""}
                          override={"rounded-b-3xl z-10"}>
                        <h1>Rule Creator</h1>
                        {renderRuleRows()}
                    </Card>
                    <Card isGlass={false} padding={"mt-8 p-16"} size={"w-full h-full"} color={"bg-white"} spacing={""}
                          override={"rounded-2xl z-0"}>
                        In order to display the filtered columns, you need to filter them.
                    </Card>
                </section>
                <ImageButton position={"absolute bottom-5 right-5"} default={"/svg/box-arrow-left.svg"}
                             hover={"/svg/box-arrow-left-red.svg"}
                             alt={"An arrow pointing left inside a square box, representing the logout action."}
                             onClick={exit}/>
            </div>
        </DragDropContext>
    );
}