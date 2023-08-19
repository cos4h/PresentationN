import { useForm } from "react-hook-form";
import { useBills } from "../context/BillsContext";

export default function BillFormPage() {
  const { register, handleSubmit } = useForm();
  const { createBill } = useBills();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    createBill(data);
  });
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nombre"
          {...register("name")}
          autoFocus
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input type="number" placeholder="cantidad" {...register("quantity")}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" />
        <input type="number" placeholder="precio" {...register("price")} 
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"/>
        <input type="date" placeholder="fecha" {...register("date")}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" />
        <button>Guardar</button>
      </form>
    </div>
  );
}
