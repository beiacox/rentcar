"use client"
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import "./App.css";

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter()

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
        nombre:data.name, 
        telefono:data.tel, 
        direccion:data.address,
        cedula:data.cedula, 
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

                type="tel"
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
            <button type="submit" className="btnRegistro">
              Registrarse
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};