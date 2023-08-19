import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext.jsx";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: loginErrors } = useAuth();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {loginErrors.map((error, index) => (
          <div
            key={index}
            className="bg-red-500 p-2 text-white text-center my-2"
          >
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold ">Inicio de sesion</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email es requerido</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500">Contraseña es requerido</p>
          )}
          <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded-md"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-sky-500">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}
