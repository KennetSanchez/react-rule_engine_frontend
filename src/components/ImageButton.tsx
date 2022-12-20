import {useState} from "react";

export const ImageButton = (
    props: {
        position: string,
        default: string,
        hover: string,
        alt : string
    }
) => {

    const [currentImage, setCurrentImage] = useState(props.default);

    const hoverImage = () => {
        if (currentImage === props.default) setCurrentImage(props.hover);
        else setCurrentImage(props.default);
    }

    return (
        <div
            className={`p-px flex items-center justify-center p-2 h-12 w-12 text-white text-base rounded-full ${props.position} transition duration-200 sine-in-out hover:scale-125 hover:cursor-pointer`}
            onMouseEnter={hoverImage}
            onMouseLeave={hoverImage}>
            <div
                className={"border-solid border-2 border-neutral-400 transition duration-200 sine-in-out hover:border-red-800 rounded-full bg-white w-full h-full flex items-center justify-center p-2"}>
                <img src={currentImage} alt={props.alt}/>
            </div>
        </div>
    );
}