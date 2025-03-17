import { useForm } from "react-hook-form";
import { directorRequest, directorList, directorDelete, directorUpdate } from "../api/director";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
const Director = () => {
  const [directors, setDirectors] = useState([]);
  const [editingDirector, setEditingDirector] = useState(null); // Estado para edición

  const { register, handleSubmit, reset, setValue } = useForm(); // Agregué setValue para edición

  const getDirectors = async () => {
    const res = await directorList();
    setDirectors(res.data);
  };

  useEffect(() => {
    getDirectors();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (editingDirector) {
      await directorUpdate(editingDirector._id, data); // Si hay edición, actualiza
      setEditingDirector(null);
    } else {
      await directorRequest(data); // Si no, crea un nuevo director
    }
    getDirectors();
    reset();
  });

  const directorDeleteById = async (id) => {
    await directorDelete(id);
    getDirectors();
  };

  const startEditing = (director) => {
    setEditingDirector(director);
    setValue("name", director.name);
    setValue("state", director.state);
  };

  return (
    <div className="flex flex-col p-10 overflow-y-auto">
      <div className="rounded-3xl flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-3">
          {editingDirector ? "Edit Director" : "Lista de Directores"}
        </h1>
        <form
          className="bg-zinc-300 flex gap-2 justify-center items-center m-auto py-2 px-4 w-full rounded-md text-black"
          onSubmit={onSubmit}
        >
          <input
            className="outline-none rounded-md p-1"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <select
            className="w-full p-1 rounded-md outline-none max-w-24"
            {...register("state")}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button type="submit" className="bg-black text-white py-1 px-4 rounded-md">
            {editingDirector ? "Update" : "Add"}
          </button>
        </form>
      </div>

      <table className="w-full border-collapse mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {directors.map((director) => (
            <tr className="border" key={director._id}>
              <td className="border pl-2">{director.name}</td>
              <td className="border pl-2 text-center w-20">{director.state}</td>
              
              <td className="text-center cursor-pointer  gap-1 flex justify-around items-center px-3 py-3 ">
                <FaEdit
                  onClick={() => startEditing(director)}
                  className="text-blue-500 "
                ></FaEdit>
                <FaTrashCan
                    onClick={() => directorDeleteById(director._id)}
                  className="w-4 h-4 text-red-500"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Director;
