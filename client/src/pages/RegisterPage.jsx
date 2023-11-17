import React from "react";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  /* 
  
  
  id_empleado, user, password, tipo
  
  */

  const registrando = handleSubmit(async (valores) => {
    console.log(valores);

    const res = await registerRequest(valores);

    console.log(res);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={registrando}>
        <input
          type="text"
          {...register("id_empleado", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="id_empleado"
        />
        <input
          type="text"
          {...register("user", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="usuario"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Constraseña"
        />

        <input
          type="text"
          {...register("tipo", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Tipo de usuario"
        />

        <button type="submit">Registrar usuario</button>
      </form>
    </div>
  );
};

export default RegisterPage;
