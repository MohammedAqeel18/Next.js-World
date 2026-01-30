import { cookies } from "next/headers";

export default async function Dashboard(){

   const cookieStore = await cookies();
   const role = cookieStore.get("role")?.value;
    
    return(
        <div className="bg-red-500">
            <h2 className="text-blue-600"> Dashboard </h2>
            {role==="admin"&&(
                <p className="mt-4 text-red-600"> Admin Panel Granted</p>
            )}
        </div>
    )
}