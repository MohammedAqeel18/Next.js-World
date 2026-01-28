"use client";

import { logoutAction } from "@/app/actions";

export default function LogoutButton(){
    async function logOut(){
        await logoutAction();
        window.location.href="/login";
    }

    return <button onClick={logOut}> Logout </button>
}