import { useForm } from "react-hook-form"; //hook con metodos
import { genreRequest, genreList,genreDelete } from "../api/genre";
import { useEffect, useState } from "react";

import TrashIcon from "../assets/trash.svg?react";

const Genre = () => {
  const [genres, setGenres] = useState([]); //estados de react para en este caso guardar
  const { register, handleSubmit, reset } = useForm(); //llamo las funciones, register hadlesubmit lo igualo en la 19, 
  const getGenres = async () => { 
    const res = await genreList();
    console.log (res)
    setGenres(res.data);
  };

  useEffect(() => {
    getGenres();
  }, []);

  const onsubmit = handleSubmit(async (data) => { //se iguala el handle, recibe unos datos. esto es lo que guarda en register 
    console.log (data)
    await genreRequest(data); // es la conexion a la api 
    getGenres();
    reset();
  });

  const genreDeleteById = async (id) => {
    await genreDelete(id);
    getGenres();
  }
  return (
    <div className="flex flex-1 flex-col p-10 mt-2">
      <div className=" rounded-3xl flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold mb-3">Lista de géneros</h1>
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

          <input
            className=" outline-none rounded-md p-1 w-full"
            type="text"
            placeholder="Description"
            {...register("description", { required: true })}
          />

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
            <th>Description</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre) => (
            <tr className="border" key={genre._id}> 
              <td className="border pl-2">{genre.name}</td>
              <td className="border pl-2">{genre.description}</td>
              <td className="border pl-2 text-center w-20">{genre.state}</td>
              <td className="border pl-2 text-center cursor-pointer">
                <TrashIcon onClick={()=>genreDeleteById(genre._id)}  className="w-4 h-4 text-red-500 "></TrashIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Genre;
