import React, {useState} from "react";

export const Input = (
    props: {
        type: string,
        name: string,
        placeHolder?: string,
        id?: string,
        width: string,
        globalOverride?: string,
        override?: string,
        iconURIS?: { default: string, focus?: string, hover?: string, selected?: string, clickFunction?: any },
        secondaryIconURIS?: { default: string, focus?: string, hover?: string, selected?: string, clickFunction?: any }
    }
) => {

    const primaryStyleStates: string = "transition duration-300 sine-in-out hover:border-neutral-500 focus:outline-none focus:border-red-800 autofill:bg-red-400 focus:text-red-900 focus:placeholder-neutral-100";
    const primaryStyle: string = `m-input px-4 w-full h-full bg-transparent text-neutral-800 text-left text-base font-normal`;

    const translateIn: string = "bg-red-400 transition duration-700 quartic-out translate-x-[90%]";
    const translateOut: string = "bg-neutral-100 transition duration-700 quintic-in-out -translate-x-[90%]";

    const iconSize: string = props.iconURIS === undefined || props.type === "textarea" ? "w-0 h-0 p-0 m-0 top-0 left-0" : "h-12 w-14 p-3";
    const secondaryIconSize: string = props.secondaryIconURIS === undefined || props.type === "textarea" ? "w-0 h-0 p-0 m-0 top-0 left-0" : "h-12 w-14 p-3";

    const [focused, setFocused] = useState(false);
    const [translate, setTranslate] = useState("bg-neutral-100");
    const [currentIcon, setCurrentIcon] = useState(props.iconURIS?.default);
    const [borderStyle, setBorderStyle] = useState("bg-neutral-400");
    const [secondaryIcon, setSecondaryIcon] = useState(props.secondaryIconURIS?.default);
    const [borderFocusedColorStart, setBorderFocusedColorStart] = useState("border-neutral-400");
    const [borderFocusedColorEnd, setBorderFocusedColorEnd] = useState("border-neutral-400");


    const handleFocus = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFocused(true);
        playAnimation();
    }

    const handleBlur = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFocused(false);
        playAnimation();
    }

    const playAnimation = () => {
        if (!focused) {
            setCurrentIcon(props.iconURIS?.focus !== undefined ? props.iconURIS?.focus : props.iconURIS?.default);
            setSecondaryIcon(props.secondaryIconURIS?.focus !== undefined ? props.secondaryIconURIS?.focus : props.secondaryIconURIS?.default);
            setTranslate(translateIn);
            setBorderStyle("bg-gradient-to-r from-red-800 to-red-600");
            setBorderFocusedColorStart("border-red-800");
            setBorderFocusedColorEnd("border-red-600");
        } else {
            setBorderStyle("bg-neutral-400");
            setCurrentIcon(props.iconURIS?.default);
            setSecondaryIcon(props.secondaryIconURIS?.default);
            setTranslate(translateOut);
            setBorderFocusedColorStart("border-neutral-400");
            setBorderFocusedColorEnd("border-neutral-400");
        }
    }

    const isArea = () => {
        if (props.type === "textarea")
            return (
                <textarea id={props.id} name={props.name}
                          className={`${primaryStyle} ${primaryStyleStates} ${props.override !== undefined ? props.override : ""}`}
                          placeholder={props.placeHolder !== undefined ? props.placeHolder : ""}
                          autoComplete={"true"} onChange={handleFocus}
                          onFocus={handleFocus}
                          onBlur={handleBlur}/>
            ); else return (
            <input id={props.id} name={props.name} type={props.type}
                   className={`${primaryStyle} ${primaryStyleStates} ${props.override !== undefined ? props.override : ""}`}
                   placeholder={props.placeHolder !== undefined ? props.placeHolder : ""}
                   autoComplete={"true"}
                   onFocus={handleFocus}
                   onBlur={handleBlur}/>
        );
    };

    const renderSecondaryIcon = () => {
        if (props.secondaryIconURIS !== undefined)
            return (
                <div
                    className={`${secondaryIconSize} flex items-center justify-center border-l-2 border-solid ${borderFocusedColorEnd}`}>
                    <img src={`/svg/${secondaryIcon}`} alt={"Alt"}
                         className={"w-full h-full hover:cursor-pointer"}
                         onClick={props.secondaryIconURIS?.clickFunction}/>
                </div>);
    }

    return (
        <div className={`z-0 flex items-center justify-center p-0.5 rounded-lg ${borderStyle}`}>
            <div
                className={`z-40 relative overflow-hidden ${props.width} ${props.type !== "textarea" ? "h-12" : "h-32"} rounded-lg ${props.globalOverride !== undefined ? props.globalOverride : ""}`}>
                <div className={"z-30 absolute flex flex-row items-center flex-1 justify-around w-full h-full"}>
                    <div
                        className={`${iconSize} flex items-center justify-center border-r-2 border-solid ${borderFocusedColorStart}`}
                        onClick={props.iconURIS?.clickFunction}>
                        <img src={`/svg/${currentIcon}`} alt={"Mail thing"} className={"w-full h-full"}/>
                    </div>
                    {isArea()}
                    {renderSecondaryIcon()}
                </div>
                <div
                    className={`m-0 p-0 z-20 top-0 -left-[140%] rounded-r-full absolute h-full w-[140%] ${translate}`}/>
                <div className={`z-0 top-0 rounded-lg absolute bg-neutral-100 h-full w-full`}/>
            </div>
        </div>
    );

}