import {Card} from "../components/Card";
import {ColumnChip} from "../components/ColumnChip";
import React, {useState} from "react";
import {ColumnType} from "../model/ColumnType";
import {ImageButton} from "../components/ImageButton";
import {RuleRow} from "../components/RuleRow";
import {useNavigate} from "react-router-dom";

export const Home = (
    props: {}
) => {

    const navigate = useNavigate();
    const [fetchedColumns, setFetchedColumns] = useState([]);
    const [ruleRows, setRuleRows] = useState([]);

    const renderColumns = () => {
        if (fetchedColumns.length === 0) {
            return (
                <div className={"flex w-full h-full items-center justify-center"}>
                    <h6 className={"text-neutral-400"}>No columns to display...</h6>
                </div>
            );
        } else {
            return (
                <div className={"flex w-full flex-col space-y-4 overflow-y-auto scrollbar-hidden"}>
                    {fetchedColumns.map((cartItem: ColumnType, index: number) => (
                        <ColumnChip name={cartItem.columnName} type={cartItem.columnType} key={index}/>
                    ))}
                </div>
            );
        }
    }

    const renderRuleRows = () => {
        if (ruleRows.length === 0) return (
            <RuleRow index={0}/>
        );
        else return (
            <div className={"my-8 flex w-4/5 h-full flex-col items-center space-y-4 overflow-y-auto scrollbar-hidden"}>
                {ruleRows.map((rule: any, index: number) => (
                    <RuleRow key={index} index={index}/>
                ))}
            </div>
        );
    }

    const exit = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/login");
    }

    return (
        <div className={"flex w-full h-full selection:bg-red-200 bg-gradient-to-br from-neutral-400 to-white"}>
            <aside className={"bg-neutral-800 h-full w-80 flex flex-col items-center py-8 px-4 space-y-8"}>
                <h4 className={"selection:bg-neutral-300 selection:text-neutral-700 text-white font-bold"}>Detected
                    Columns</h4>
                {renderColumns()}
            </aside>
            <section className={"flex flex-col justify-center items-center w-full"}>
                <Card isGlass={false} padding={"py-8"} size={"w-full h-96"} color={"bg-white"} spacing={""}
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
    );
}