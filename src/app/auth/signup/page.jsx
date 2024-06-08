"use client"
import {useRouter} from 'next/navigation'
import { useForm } from 'react-hook-form';

export default function SignupPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter()

    const onSubmit = handleSubmit(async (data) => {

        if(data.password != data.confirmPassword){
            return alert("Password must match")
        }

        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const resData = await res.json();
        if(res.ok){
            router.push("/auth/login")
        }
        console.log(resData)
    })
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input type="text" {...register("username", { required: { value: true, message: "Username is required" } },)} placeholder="Username" className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full" />
                {errors.username && (<span className="text-red-500">{errors.username.message}</span>)}
                <input type="text" {...register("email", { required: { value: true, message: "Email is required" } },)} placeholder="Email" className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full" />
                {errors.email && (<span className="text-red-500">{errors.email.message}</span>)}
                <input type="password" {...register("password", { required: { value: true, message: "password is required" } },)} placeholder="Password" className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full" />
                {errors.password && (<span className="text-red-500">{errors.password.message}</span>)}
                <input type="password" {...register("confirmPassword", { required: { value: true, message: "Confirm Password is riquired" } },)} placeholder="Confirm password" className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full" />
                {errors.confirmPassword && (<span className="text-red-500">{errors.confirmPassword.message}</span>)}
                <button className="bg-blue-500 rounded p-4">Sign up</button>
            </form>
        </div>
    )
}
