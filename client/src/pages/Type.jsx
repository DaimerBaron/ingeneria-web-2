import { useForm } from "react-hook-form";
import { typeRequest, typeList, typeDelete, typeUpdate } from "../api/type";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { toast, Toaster } from "sonner";
import ConfirmToast from "../components/ConfirmToast";
import FormToCreate from "../components/FormToCreate";

const Type = () => {
  const [types, setTypes] = useState([]);
  const [editingType, setEditingType] = useState(null); // Estado para edición



  const getTypes = async () => {
    const res = await typeList();
    setTypes(res.data);
  };

  useEffect(() => {
    getTypes();
  }, []);

  

  const sendData = async (data) => {
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
   
  }

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
 
  const formInputs =[
    {name:"name", placeholder:"Name"},
    {name:"description", placeholder:"Description"}
  ]
  return (
    <div className="flex flex-col p-10 relative overflow-y-auto">
      <Toaster richColors />

    <FormToCreate
      isEditing={editingType}
      formInputs={formInputs}
      sendData={sendData}
      
    />

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
                  onClick={() => setEditingType(type)}
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
