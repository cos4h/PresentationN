import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth.js";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";

export default function registerPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/bills");
  }, [isAuthenticated]);

  const onSubmit = async (values) => {
    singup(values);
  };
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      {
        registerErrors.map((error, index) => (
          <div key={index} className="bg-red-500 p-2 text-white">
            {error}
          </div>
        ))  
      }
      <h1 className="text-2xl font-bold ">Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Usuario"
        />
        {errors.username && (
          <p className="text-red-500">Usuario es requerido</p>
        )}
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500">Email es requerido</p>
        )}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Contraseña"
        />
        {errors.password && (
          <p className="text-red-500">Contraseña es requerido</p>
        )}
        <input
          type="tel"
          {...register("phone", {
            required: true,
            maxLength: 10,
            minLength: 10,
          })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Celular"
        />
        {errors.phone && (
          <p className="text-red-500">Usuario es requerido</p>
        )}
        <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded-md"
          >
            Registrarse
          </button>
      </form>
    </div>
    </div>
  );
}

