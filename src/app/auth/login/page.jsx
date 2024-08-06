"use client"

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react'
import { useState } from 'react';
import styles from './styles.module.css';

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
        <div className={`${styles.background} flex flex-col items-center justify-center`}>
            <div className="">
                <div className={styles.loginWrapper}>
                    <div className={styles.background}></div>
                    <div className={styles.overlay}></div>
                    <div className={`${styles.loginContainer} flex flex-col items-center justify-center`}>
                        <h2 className='text-4xl'>Iniciar Sesión</h2>
                        <form onSubmit={onSubmit}>
                            {error && (<span className="bg-red-500 text-lg text-white p-3 rounded">{error}</span>)}
                            <div className={styles.inputContainer}>
                                <label className='text-xl'>Correo Electrónico</label>

                                <input
                                    {...register("email", { required: { value: true, message: "Email is required" } },)}
                                    type="email"
                                    placeholder="user@email.com" />
                                {errors.email && (<span className="text-red-500">{errors.email.message}</span>)}
                            </div>
                            <div className={styles.inputContainer}>
                            <label className='text-xl'>Contraseña</label>

                                <input
                                    {...register("password", { required: { value: true, message: "Password is required" } },)}
                                    type="password" placeholder="*******" required />
                                {errors.password && (<span className="text-red-500">{errors.password.message}</span>)}

                            </div>
                            <div className={styles.rememberMe}>
                                <input type="checkbox" id="rememberMe" />
                                <label htmlFor="rememberMe">Recordarme</label>
                            </div>
                            <button type="submit" className={styles.loginButton}>Iniciar Sesión</button>
                        </form>
                        <div className='flex justify-between items-center space-x-4 mt-4 w-5/6'>
                        <a href="#" className={`${styles.forgotPassword} text-sm`}>
                            ¿Olvidaste tu contraseña?
                            </a>
                        <a onClick={() => router.push('/auth/signup')} className={`${styles.register} text-sm`}>
                            ¿No tienes una cuenta? Regístrate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
