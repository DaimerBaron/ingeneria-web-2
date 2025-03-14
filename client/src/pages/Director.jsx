import { useForm } from "react-hook-form"; //hook con metodos
import { directorRequest, directorList,directorDelete } from "../api/director";
import { useEffect, useState } from "react";

import TrashIcon from "../assets/trash.svg?react";

const director = () => {
  const [directors, setdirectors] = useState([]); //estados de react para en este caso guardar
  const { register, handleSubmit, reset } = useForm(); //llamo las funciones, register hadlesubmit lo igualo en la 19, 
  const getdirectors = async () => { 
    const res = await directorList();
    console.log (res)
    setdirectors(res.data);
  };

  useEffect(() => {
    getdirectors();
  }, []);

  const onsubmit = handleSubmit(async (data) => { //se iguala el handle, recibe unos datos. esto es lo que guarda en register 
    console.log (data)
    await directorRequest(data); // es la conexion a la api 
    getdirectors();
    reset();
  });

  const directorDeleteById = async (id) => {
    await directorDelete(id);
    getdirectors();
  }
  return (
    <div className="flex flex-col p-10">
      <div className=" rounded-3xl flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold mb-3">Lista de Directores</h1>
        <form
          className="bg-zinc-300 flex  gap-2 justify-center items-center m-auto py-2 px-4 w-full rounded-md"
          onSubmit={onsubmit} //este atributo es para hacer envio es muy parecido a una funcion
        >
          <input
            className=" outline-none rounded-md p-1"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })} //register para traer todo y registrar, ayuda a guardar lo que escribo simepre poner el mismo nombre del imput
          />
          <select
            className="w-full p-1 rounded-md outline-none max-w-24"
            defaultValue="Active"
            {...register("state")}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button
            type="submit"
            className="bg-black text-white py-1 border-none px-4 rounded-md "
          >
            Add
          </button>
        </form>
      </div>
      <table className="w-full border-collapse mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {directors.map((director) => (
            <tr className="border" key={director._id}> 
              <td className="border pl-2">{director.name}</td>
              <td className="border pl-2 text-center w-20">{director.state}</td>
              <td className="border pl-2 text-center cursor-pointer">
                <TrashIcon onClick={()=>directorDeleteById(director._id)}  className="w-4 h-4 text-red-500 "></TrashIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default director;
