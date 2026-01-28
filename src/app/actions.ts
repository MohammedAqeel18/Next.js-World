"use server";

import { cookies } from "next/headers";

export async function loginAction( username:String, password:String){
   
if(username === "admin" && password === "123"){

(await cookies()).set("auth","true",{
    httpOnly:true,
   
});

return true;

}

return false;
}

export async function logoutAction(){
    ((await cookies()).delete("auth"));
}