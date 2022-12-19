import {Card} from "../components/Card";
import {Input} from "../components/Input";

export const Login = (
    props: {}
) => {

    const showPassword = () => {

    }

    return (
        <div className={"relative w-full h-full flex items-center justify-center selection:bg-red-200"}>
            <Card isGlass={true} padding={"p-16"} size={"w-1/3 h-2/3"} color={"bg-red-200/20"}
                  spacing={"justify-center"} position={"absolute z-20"}>
                <h1>Welcome Again</h1>
                <form className={"h-full flex flex-col justify-around items-center w-full"}>
                    <div className={`w-4/5 h-auto flex flex-col items-left space-y-2`}>
                        <h4>Email</h4>
                        <Input type={"email"} name={"email"} width={"w-full"} placeHolder={"username@example.com"}
                               iconURIS={{default: "envelope-at.svg", focus: "envelope-at-fill.svg"}}/>
                    </div>
                    <div className={`w-4/5 h-auto flex flex-col items-left space-y-2`}>
                        <h4>Password</h4>
                        <Input type={"password"} name={"password"} width={"w-full"} placeHolder={"8+ characters"}
                               iconURIS={{default: "key.svg", focus: "key-fill.svg"}}
                               secondaryIconURIS={{default: "eye.svg", focus: "eye-fill.svg", toggleFunction: showPassword}}/>
                    </div>
                </form>
            </Card>
            <div className={"absolute w-full h-full bg-cover bg-center"}
                 style={{backgroundImage: "url('/images/perficient_back.png')"}}/>
        </div>
    );
}