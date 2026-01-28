"use client";

import { loginAction } from "@/app/actions";

export default function LoginForm(){
    async function handleSubmit(formData: FormData){

        const username = formData.get("username") as string;
        const password = formData.get("password")as string;

        const success = await loginAction(username,password);

        if(success){
            window.location.href="/dashboard";

        }else{
            alert("Invalid  credintials")
        }
    }

    return(
        <form action={handleSubmit}>
            <input name="username"/>
            <input name="password" type="password"/>
            <button type="submit"> Login</button>
        </form>
    )
}