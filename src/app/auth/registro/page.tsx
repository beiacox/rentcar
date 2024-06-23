import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="background">
      <div className="overlay"></div>
      <section className="contact-box">
        <div className="container">
          <h1>Crea tu cuenta</h1>
          <p>Ingresa la siguiente información para registrarte.</p>

          <form>
            <div className="nombre">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellidos"
                  required
                />
              </div>
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Ingresa tu dirección"
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Ingresa tu teléfono"
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Ingresa tu nombre de usuario"
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Ingresa tu correo electrónico"
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Ingresa una contraseña"
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirma tu contraseña"
                required
              />
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

export default App;
