import { useForm } from "react-hook-form";
import { typeRequest, typeList, typeDelete, typeUpdate } from "../api/type";
import { useEffect, useState } from "react";
import TrashIcon from "../assets/trash.svg?react";

const Type = () => {
  const [types, setTypes] = useState([]);
  const [editingType, setEditingType] = useState(null); // Estado para edición

  const { register, handleSubmit, reset, setValue } = useForm(); // Agregué setValue para edición

  const getTypes = async () => {
    const res = await typeList();
    setTypes(res.data);
  };

  useEffect(() => {
    getTypes();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (editingType) {
      await typeUpdate(editingType._id, data); // Si hay edición, actualiza
      setEditingType(null);
    } else {
      await typeRequest(data); // Si no, crea un nuevo type
    }
    getTypes();
    reset();
  });


  const typeDeleteById = async (id) => {
    try {
      const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este tipo?");
      if (!confirmDelete) return; // Si el usuario cancela, no hace nada
  
      await typeDelete(id);
      setTypes(types.filter((type) => type._id !== id)); // Elimina del estado sin recargar
    } catch (error) {
      console.error("Error eliminando el tipo:", error.response?.data || error.message);
      alert("No se pudo eliminar el tipo.");
    }
  };
  

  const startEditing = (type) => {
    setEditingType(type);
    setValue("name", type.name);
    setValue("description", type.description);
  };

  return (
    <div className="flex flex-col p-10">
      <div className="rounded-3xl flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-3">
          {editingType ? "Edit Type" : "Lista de Tipos de media"}
        </h1>
        <form
          className="bg-zinc-300 flex gap-2 justify-center items-center m-auto py-2 px-4 w-full rounded-md"
          onSubmit={onSubmit}
        >
          <input
            className="outline-none rounded-md p-1"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            className="outline-none rounded-md p-1"
            type="text"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          <button type="submit" className="bg-black text-white py-1 px-4 rounded-md">
            {editingType ? "Update" : "Add"}
          </button>
        </form>
      </div>

      <table className="w-full border-collapse mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {types.map((type) => (
            <tr className="border" key={type._id}>
              <td className="border pl-2">{type.name}</td>
              <td className="border pl-2 text-center">{type.description}</td>
              <td className="border pl-2 text-center cursor-pointer flex justify-center gap-2">
                <button onClick={() => startEditing(type)} className="text-blue-500">Edit</button>
                <TrashIcon
                  onClick={() => typeDeleteById(type._id)}
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

export default Type;
