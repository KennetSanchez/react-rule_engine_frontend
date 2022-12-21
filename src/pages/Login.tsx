import {Card} from "../components/Card";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import React, {FormEvent, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserToken} from "../App";


export const Login = (
    props: {}
) => {

    const navigate = useNavigate();
    const {token, setToken} = useContext(UserToken);
    const [passShown, setPassShown] = useState("password");
    const [eyeIcons, setEyeIcons] = useState(["eye.svg", "eye-fill.svg"]);

    const showPassword = (e: React.MouseEvent<HTMLImageElement>) => {
        if (passShown === "password") {
            setEyeIcons(["eye-slash.svg", "eye-slash-fill.svg"]);
            setPassShown("text");
            (e.target as HTMLImageElement).src = "/svg/eye-slash.svg";
        } else {
            setEyeIcons(["eye.svg", "eye-fill.svg"]);
            setPassShown("password");
            (e.target as HTMLImageElement).src = "/svg/eye.svg";
        }
    }

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = (e.target as HTMLFormElement);
        await signIn(form.email.value, form.password.value);
    }

    const signIn = async (email: string, password: string) => {
        const payload = {
            email: email,
            password: password
        }
        await fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(response => {
                if(response.token !== undefined){
                    console.log(response.token);
                    setToken(response.token)
                    navigate("/home");
                }else{
                    alert("Error " + response.code + "\n" + response.message);
                }
            });
    }

    const handleSignUp = (e: React.MouseEvent<Element, MouseEvent>) => {
        e.preventDefault();
        navigate("/register");
    }

    return (
        <div className={"relative w-full h-full flex items-center justify-center selection:bg-red-200"}>
            <Card isGlass={true} padding={"p-16"} size={"w-1/3 h-2/3"} color={"bg-red-200/20"}
                  spacing={"justify-center"} position={"absolute z-20"}>
                <h1>Welcome Again</h1>
                <form className={"h-full flex flex-col justify-around items-center w-full"} onSubmit={handleLogin}>
                    <div className={`xl:w-4/5 lg:w-full h-auto flex flex-col items-left space-y-2`}>
                        <h4>Email</h4>
                        <Input type={"email"} name={"email"} width={"w-full"} placeHolder={"username@example.com"}
                               iconURIS={{default: "envelope-at.svg", focus: "envelope-at-fill.svg"}}/>
                    </div>
                    <div className={`xl:w-4/5 lg:w-full h-auto flex flex-col items-left space-y-2`}>
                        <h4>Password</h4>
                        <Input type={passShown} name={"password"} width={"w-full"} placeHolder={"8+ characters"}
                               iconURIS={{default: "key.svg", focus: "key-fill.svg"}}
                               secondaryIconURIS={{
                                   default: eyeIcons[0],
                                   focus: eyeIcons[1],
                                   clickFunction: showPassword
                               }}/>
                    </div>
                    <div className={"flex flex-row justify-between xl:w-4/5 lg:w-full justify-around"}>
                        <Button isSubmit={false} type={"secondary"} rounded={"rounded-md"} label={"SIGN UP"} onClick={handleSignUp}/>
                        <Button isSubmit={true} type={"primary"} rounded={"rounded-md"} label={"LOGIN"}/>
                    </div>
                </form>
            </Card>
            <div className={"absolute w-full h-full bg-cover bg-center"}
                 style={{backgroundImage: "url('/images/perficient_back.png')"}}/>
        </div>
    );
}