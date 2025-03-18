import { useForm } from "react-hook-form";
import { directorRequest, directorList, directorDelete, directorUpdate } from "../api/director";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { toast, Toaster } from "sonner";
import ConfirmToast from "../components/ConfirmToast";
import FormToCreate from "../components/FormToCreate";


const Director = () => {
  const [directors, setDirectors] = useState([]);
  const [editingDirector, setEditingDirector] = useState(null); // Estado para edición

  

  const getDirectors = async () => {
    const res = await directorList();
    setDirectors(res.data);
  };

  useEffect(() => {
    getDirectors();
  }, []);



const sendData = async (data) => {   //logiva de editar
  if (editingDirector) {
    toast.promise (directorUpdate(editingDirector._id, data), {
      success: "Director updated",
      loading: "Updating...",
      error: "Error updating director",
    });
    setEditingDirector(null); 
  } else {
    await directorRequest(data);  
  }
  getDirectors();
} 





  const directorDeleteById = async (id, toastId) => { //logica de eliminar
    toast.promise(
      (async () => {
        await directorDelete(id); // Llamada a la API
        setDirectors((prevDirectors) => prevDirectors.filter((director) => director._id !== id));
        toast.dismiss(toastId); // Cierra la ventana de confirmación
      })(),
      {
        success: "Director deleted successfully!",
        loading: "Deleting...",
        error: "Error deleting director",
      }
    );
  };
  
const handleDelete = (id) => {
  toast.custom(
    (t) => (
      <ConfirmToast
        id={id}
        onConfirm={directorDeleteById}
        onCancel={toast.dismiss}
        toastId={t}
      />
    ),
    {
      position: "bottom-right",
    }
  );  
};
  const formInputs = [
    { name: "name", placeholder: "Name" },
    { name: "state", placeholder: "State" },
  ]
  return (
    <div className="flex flex-col p-10 relative overflow-y-auto">
      <Toaster richColors />
      <FormToCreate
        sendData={sendData}
        formInputs={formInputs}
        isEditing={editingDirector}
      />

      <table className="w-full border-collapse mt-5 select-none">
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
                  onClick={() => setEditingDirector(director)}
                  className="text-blue-500 "
                ></FaEdit>
                <FaTrashCan
                    onClick={() => handleDelete(director._id)}
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
