"use client";

import { loginAction } from "@/app/actions";
import LogoutButton from "@/app/components/logout button/LogoutButton";


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
    return (
        <form className="space-y-4" action={handleSubmit}>
            <input
            name="username"
            className="w-full border p-2 rounded"
            placeholder="username"
            />

            <input
            name="password"
            type="password"
            className="w-full border p-2 rouned"
            placeholder="password"
            />
            <button className="w-full bg-blue-600 text-white p-2 rounded" type="submit" > Login</button>
            <LogoutButton/> 
        </form>
    )
}