import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest){
    
const auth = request.cookies.get("auth");
const role = request.cookies.get("role");

 if(!auth && request.nextUrl.pathname.startsWith("/dashboard")){
    return NextResponse.redirect(new URL("/login" ,request.url));
 }

 if(request.nextUrl.pathname.startsWith("/dashboard/admin")&&
role?.value !=="admin"
){
   return NextResponse.redirect(new URL("dashboard",request.url));
}
}