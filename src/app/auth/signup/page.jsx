"use client"
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import "./App.css";
import { useState } from 'react';

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter()

  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (e) => {
    // Eliminar todo lo que no sea un dígito
    const cleaned = e.target.value.replace(/\D/g, '');

    let formattedNumber = '';
  
    // Aplicar formato según el número de dígitos ingresados
    if (cleaned.length <= 3) {
      formattedNumber = cleaned;
    } else if (cleaned.length <= 6) {
      formattedNumber = `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    } else {
      formattedNumber = `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
  
    setPhoneNumber(formattedNumber);
  };

  const onSubmit = handleSubmit(async (data) => {

    if (data.password != data.confirmPassword) {
      return alert("Password must match")
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        usuario: data.username,
        correo: data.email,
        clave: data.password,
        nombre: data.name,
        telefono: data.tel,
        direccion: data.address,
        cedula: data.cedula,
        role: data.role,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const resData = await res.json();
    if (res.ok) {
      router.push("/auth/login")
    }
    console.log(resData)
  })

  return (
    <div className="background">
      <div className="overlay"></div>
      <section className="contact-box">
        <div className="container">
          <h1>Crea tu cuenta</h1>
          <p>Ingresa la siguiente información para registrarte.</p>

          <form onSubmit={onSubmit}>
            <div className="nombre">
              <div className="form-group col-md-6">
                <input
                  {...register("name", { required: { value: true, message: "Name is required" } },)}
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  required
                />
                {errors.name && (<span className="text-red-500">{errors.username.message}</span>)}

              </div>
              <div className="form-group col-md-6">
                <input
                  {...register("lastname", { required: { value: true, message: "Lastname is required" } },)}
                  type="text"
                  className="form-control"
                  placeholder="Apellidos"
                  required
                />
                {errors.lastname && (<span className="text-red-500">{errors.username.message}</span>)}

              </div>
            </div>

            <div className="form-group mb-3">
              <input
                {...register("address", { required: { value: true, message: "Address is required" } },)}

                type="text"
                className="form-control"
                placeholder="Ingresa tu dirección"
                required
              />
              {errors.address && (<span className="text-red-500">{errors.username.message}</span>)}

            </div>
            <div className="form-group mb-3">
              <input
                {...register("tel", { required: { value: true, message: "Telephone is required" } },)}
                maxLength={12}
                type="tel"
                value={phoneNumber}
                onChange={formatPhoneNumber}
                className="form-control"
                placeholder="Ingresa tu teléfono"
                required
              />
              {errors.tel && (<span className="text-red-500">{errors.username.message}</span>)}

            </div>
            <div className="form-group mb-3">
              <input
                {...register("username", { required: { value: true, message: "Username is required" } },)}
                type="text"
                className="form-control"
                placeholder="Ingresa tu nombre de usuario"
                required
              />
              {errors.username && (<span className="text-red-500">{errors.username.message}</span>)}
            </div>
            <div className="form-group mb-3">
              <input
                {...register("email", { required: { value: true, message: "Email is required" } },)}

                type="email"
                className="form-control"
                placeholder="Ingresa tu correo electrónico"
                required
              />
              {errors.email && (<span className="text-red-500">{errors.email.message}</span>)}

            </div>
            <div className="form-group mb-3">
              <input
                {...register("password", { required: { value: true, message: "password is required" } },)}

                type="password"
                className="form-control"
                placeholder="Ingresa una contraseña"
                required
              />
              {errors.password && (<span className="text-red-500">{errors.password.message}</span>)}

            </div>
            <div className="form-group mb-3">
              <input
                {...register("confirmPassword", { required: { value: true, message: "Confirm Password is riquired" } },)}

                type="password"
                className="form-control"
                placeholder="Confirma tu contraseña"
                required
              />
              {errors.confirmPassword && (<span className="text-red-500">{errors.confirmPassword.message}</span>)}

            </div>
            <div className="form-group mb-3">
              <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">Role</label>
              <select
                {...register("role", { required: { value: true, message: "Role is required" } })}
                id="role"
                className="form-control block w-full pl-3 pr-10 py-2 bg-gray-700 text-gray-300 border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                required>
                <option value="CUSTOMER">Customer</option>
                <option value="ADMIN">Admin</option>
              </select>
              {errors.role && (<span className="text-red-500">{errors.role.message}</span>)}
            </div>

            <button type="submit" className="btnRegistro">
              Registrarse
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};