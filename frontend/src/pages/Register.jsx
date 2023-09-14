import React from "react";

function Register() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
        <h1 className="text-5xl font-semibold"> Bienvenido !!! </h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          {" "}
          Ingrese su información para poder registrarse.
        </p>
        <div className="mt-8">
          <form metod="post">
            <div>
              <label className="text-lg font-medium" htmlFor="name">
                Nombre
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingrese su nombre"
                name="name"
                type="text"
                id="name"
              />
            </div>
            <div>
              <label className="text-lg font-medium" htmlFor="email">
                Correo
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingrese su correo"
                name="email"
                type="email"
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
                id="password"
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                className="active:scale-[.98] active:duration-75 transition-all hoover:scale-[1.01] ease-in-out py-3 rounded-xl bg-blue-500 text-white text-lg font-bold"
                type="submit"
              >
                Ingresar
              </button>
            </div>
            <a href="/login">Login</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
