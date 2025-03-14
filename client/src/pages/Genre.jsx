import { useForm } from "react-hook-form";
import { genreRequest, genreList,genreDelete } from "../api/genre";
import { useEffect, useState } from "react";

import TrashIcon from "../assets/trash.svg?react";

const Genre = () => {
  const [genres, setGenres] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const getGenres = async () => {
    const res = await genreList();
    setGenres(res.data);
  };

  useEffect(() => {
    getGenres();
  }, []);

  const onsubmit = handleSubmit(async (data) => {
    await genreRequest(data);
    getGenres();
    reset();
  });

  const genreDeleteById = async (id) => {
    await genreDelete(id);
    getGenres();
  }
  return (
    <div className="flex flex-col p-10">
      <div className=" rounded-3xl flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold mb-3">Lista de géneros</h1>
        <form
          className="bg-zinc-300 flex  gap-2 justify-center items-center m-auto py-2 px-4 w-full rounded-md"
          onSubmit={onsubmit}
        >
          <input
            className=" outline-none rounded-md p-1"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
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
