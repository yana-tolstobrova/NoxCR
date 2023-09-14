import React from "react";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  return (
    <>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
            <h1 className="text-5xl font-semibold"> Bienvenido Nuevamente</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">
              {" "}
              Por favor ingrese sus datos
            </p>
            <div className="mt-8">
              <form action="https://www.google.com/search" method="get">
                <div>
                  <label className="text-lg font-medium" htmlFor="email">
                    Correo
                  </label>
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                    placeholder="Ingrese su correo"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div>
                  <label className="text-lg font-medium" htmlFor="password">
                    Contraseña
                  </label>
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                    placeholder="Ingrese su contraseña"
                    type="password"
                    name="password"
                    ide="password"
                  />
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                  <button
                    className="active:scale-[.98] active:duration-75 transition-all hoover:scale-[1.01] ease-in-out py-3 rounded-xl bg-blue-500 text-white text-lg font-bold"
                    type="submit"
                  >
                    Entrar
                  </button>
                </div>
                <a href="/register">Registro</a>
              </form>

            </div>
          </div>
        </div>
    </>
  );
}

export default Login;
