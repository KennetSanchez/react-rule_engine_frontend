import {Card} from "../components/Card";
import {ColumnChip} from "../components/ColumnChip";
import {useState} from "react";
import {ColumnType} from "../model/ColumnType";
import {Button} from "../components/Button";

export const Home = (
    props: {}
) => {

    const [fetchedColumns, setFetchedColumns] = useState([]);

    const renderColumns = () => {
        if (fetchedColumns.length === 0) {
            return (
                <div className={"flex w-full h-full items-center justify-center"}>
                    <h6 className={"text-neutral-400"}>No columns to display...</h6>
                </div>
            );
        } else {
            return (
                <div className={"flex w-full flex-col space-y-4 overflow-y-auto"}>
                    {fetchedColumns.map((cartItem: ColumnType, index: number) => (
                        <ColumnChip name={cartItem.columnName} type={cartItem.columnType} key={index}/>
                    ))}
                </div>
            );
        }
    }

    return (
        <div className={"flex w-full h-full selection:bg-red-200 bg-gradient-to-b from-neutral-300 to-white"}>
            <aside className={"bg-neutral-800 h-full w-80 flex flex-col items-center py-8 px-4 space-y-8"}>
                <h4 className={"selection:bg-neutral-300 selection:text-neutral-700 text-white font-bold"}>Detected
                    Columns</h4>
                {renderColumns()}
            </aside>
            <section className={"flex flex-col justify-between items-center w-full"}>
                <Card isGlass={false} padding={""} size={"w-full h-96"} color={"bg-white"} spacing={""}
                      override={"rounded-b-3xl"}>
                    <h1>Rule Creator</h1>
                    <div>
                        Rules
                    </div>
                </Card>
                <Card isGlass={false} padding={"mt-8 p-16"} size={"w-full h-full"} color={"bg-white"} spacing={""}
                      override={"rounded-2xl"}>
                    In order to display the filtered columns, you need to filter them.
                </Card>
            </section>
            <Button isSubmit={false} type={"round-primary"} rounded={"rounded-full"} label={"X"} override={"absolute bottom-5 right-5"}/>
        </div>
    );
}