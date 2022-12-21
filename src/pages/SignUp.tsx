import {useNavigate} from "react-router-dom";
import React, {FormEvent, useContext, useState} from "react";
import {Card} from "../components/Card";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {UserToken} from "../security/UserToken";

export const SignUp = (
    props: {}
) => {
    const [passShown, setPassShown] = useState("password");
    const [eyeIcons, setEyeIcons] = useState(["eye.svg", "eye-fill.svg"]);
    const navigate = useNavigate();
    const {token, setToken} = useContext(UserToken);

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

    const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = (e.target as HTMLFormElement);
        await signUp(form.suFirstName.value, form.suLastName.value, form.suEmail.value, form.suPassword.value)
    }

    const signUp = async (firstName: string, lastName: string, email: string, password: string) => {
        const payload = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        await fetch("http://localhost:8080/users/create-user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(response => {
                if(response.token !== undefined){
                    setToken(response.token);
                    navigate("/login");
                }else{
                    alert("Error " + response.code + "\n" + response.message);
                }
            });
    }

    const handleBack = (e: React.MouseEvent<Element, MouseEvent>) => {
        e.preventDefault();
        navigate("/login");
    }

    return (
        <div className={"relative w-full h-full flex items-center justify-center selection:bg-red-200"}>
            <Card isGlass={true} padding={"p-16"} size={"w-1/2 h-2/3"} color={"bg-red-200/20"}
                  spacing={"justify-center"} position={"absolute z-20"}>
                <h1>Let's get started!</h1>
                <form className={"h-full flex flex-col justify-around items-center w-full"} onSubmit={handleSignUp}>
                    <div className={"w-full flex justify-between space-x-8 items-center"}>
                        <div className={`xl:w-4/5 lg:w-full h-auto flex flex-col items-left space-y-2`}>
                            <h4>First Name</h4>
                            <Input type={"text"} name={"suFirstName"} width={"w-full"} placeHolder={"John"}
                                   iconURIS={{default: "envelope-at.svg", focus: "envelope-at-fill.svg"}}/>
                        </div>
                        <div className={`xl:w-4/5 lg:w-full h-auto flex flex-col items-left space-y-2`}>
                            <h4>Last Name</h4>
                            <Input type={"text"} name={"suLastName"} width={"w-full"} placeHolder={"Doe"}
                                   iconURIS={{default: "envelope-at.svg", focus: "envelope-at-fill.svg"}}/>
                        </div>
                    </div>
                    <div className={"w-full flex justify-between space-x-8 items-center"}>
                        <div className={`xl:w-4/5 lg:w-full h-auto flex flex-col items-left space-y-2`}>
                            <h4>Email</h4>
                            <Input type={"email"} name={"suEmail"} width={"w-full"} placeHolder={"username@example.com"}
                                   iconURIS={{default: "envelope-at.svg", focus: "envelope-at-fill.svg"}}/>
                        </div>
                        <div className={`xl:w-4/5 lg:w-full h-auto flex flex-col items-left space-y-2`}>
                            <h4>Password</h4>
                            <Input type={passShown} name={"suPassword"} width={"w-full"} placeHolder={"8+ characters"}
                                   iconURIS={{default: "key.svg", focus: "key-fill.svg"}}
                                   secondaryIconURIS={{
                                       default: eyeIcons[0],
                                       focus: eyeIcons[1],
                                       clickFunction: showPassword
                                   }}/>
                        </div>
                    </div>
                    <div className={"flex flex-row justify-between xl:w-4/5 lg:w-full justify-around"}>
                        <Button isSubmit={false} type={"secondary"} rounded={"rounded-md"} label={"BACK"}
                                onClick={handleBack}/>
                        <Button isSubmit={true} type={"primary"} rounded={"rounded-md"} label={"SIGN UP"}/>
                    </div>
                </form>
            </Card>
            <div className={"absolute w-full h-full bg-cover bg-center"}
                 style={{backgroundImage: "url('/images/perficient_back.png')"}}/>
        </div>
    );
}