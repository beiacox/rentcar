"use client"

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react'
import "./styles.css";
import { useState } from 'react';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const [error, setError] = useState(null)

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        const res = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false
        })
        console.log(res)

        if (res.error) {
            alert(res.error)
            setError(res.error)
        } else {
            router.push('/')
        }
    })
    return (
        <div className="login-wrapper">
            <div className="background"></div>
            <div className="overlay"></div>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={onSubmit}>
                    {error && (<span className="bg-red-500 text-lg text-white p-3 rounded">{error}</span>)}
                    <div className="input-container">
                        <input
                            {...register("email", { required: { value: true, message: "Email is required" } },)}
                            type="email"
                            placeholder="user@email.com" />
                        {errors.email && (<span className="text-red-500">{errors.email.message}</span>)}
                    </div>
                    <div className="input-container">
                        <input
                            {...register("password", { required: { value: true, message: "Password is required" } },)}
                            type="password" placeholder="*******" required />
                        {errors.password && (<span className="text-red-500">{errors.password.message}</span>)}

                    </div>
                    <div className="remember-me">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <a href="#" className="forgot-password">Forgot Password?</a>
                <a href="#" className="register">Don&apos;t have an account? Register</a>
            </div>
        </div>
    );
}

export default Login;
