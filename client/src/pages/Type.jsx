import { useForm } from "react-hook-form";
import { typeRequest, typeList, typeDelete, typeUpdate } from "../api/type";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { toast, Toaster } from "sonner";
import ConfirmToast from "../components/ConfirmToast";

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
      toast.promise(typeUpdate(editingType._id, data), {
        success: "Type updated",
        loading: "Updating...",
        error: "Error updating type",
      });

      setEditingType(null);
    } else {
      await typeRequest(data); // Si no, crea un nuevo type
    }
    getTypes();
    reset();
  });

  const typeDeleteById = async (id, toastId) => {
    toast.promise(
      (async () => {
        await typeDelete(id); // Llamada a la API
        setTypes((prevTypes) => prevTypes.filter((type) => type._id !== id));
        toast.dismiss(toastId); // Cierra la ventana de confirmación
      })(),
      {
        success: "Type deleted successfully!",
        loading: "Deleting...",
        error: "Error deleting type",
      }
    );
  };

  const handleDelete = (id) => {
    toast.custom(
      (t) => (
        <ConfirmToast
          id={id}
          onConfirm={typeDeleteById}
          onCancel={toast.dismiss}
          toastId={t}
        />
      ),
      {
        position: "bottom-right",
      }
    );
  };
  const startEditing = (type) => {
    setEditingType(type);
    setValue("name", type.name);
    setValue("description", type.description);
  };

  return (
    <div className="flex flex-col p-10 relative overflow-y-auto">
      <Toaster richColors />

      <div className="rounded-3xl flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-3">
          {editingType ? "Edit Type" : "Lista de Tipos de media"}
        </h1>
        <form
          className="bg-zinc-300 flex gap-2 justify-center items-center m-auto py-2 px-4 w-full rounded-md text-black"
          onSubmit={onSubmit}
        >
          <input
          autoFocus={true}
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
          <button
            type="submit"
            className="bg-black text-white py-1 px-4 rounded-md"
          >
            {editingType ? "Update" : "Add"}
          </button>
        </form>
      </div>

      <table className="w-full border-collapse mt-5 select-none">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {types.map((type) => (
            <tr className="border  " key={type._id}>
              <td className="border px-3 py-3">{type.name}</td>
              <td className="border px-3 ">{type.description}</td>

              <td className="text-center cursor-pointer  gap-1 flex justify-around items-center px-3 py-3 ">
                <FaEdit
                  onClick={() => startEditing(type)}
                  className="text-blue-500 "
                ></FaEdit>
                <FaTrashCan
                  onClick={() => handleDelete(type._id)}
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
