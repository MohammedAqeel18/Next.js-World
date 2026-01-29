import LoginForm from "./LoginForm";

export default function LoginPage(){


    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
            <h2 className="text 2xl font-semibold mb-4 text-center"> Login</h2>
            <LoginForm/>
            </div>
        </div>
    )
}