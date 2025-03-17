
import { directorRequest, directorList, directorDelete, directorUpdate } from "../api/director";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
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

  const sendData = async (data) => {
    if (editingDirector) {
      await directorUpdate(editingDirector._id, data); // Si hay edición, actualiza
      setEditingDirector(null);
    } else {
      await directorRequest(data); // Si no, crea un nuevo director
    }
    getDirectors();
   
  };

  const directorDeleteById = async (id) => {
    await directorDelete(id);
    getDirectors();
  };

  const formInputs = [
    { name: "name", placeholder: "Name" },
    { name: "state", placeholder: "State" },
  ];


  return (
    <div className="flex flex-col p-10 overflow-y-auto">
      <div className="rounded-3xl flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-3">
          {editingDirector ? "Edit Director" : "Lista de Directores"}
        </h1>
      
      </div>

      <FormToCreate
        sendData={sendData}
        formInputs={formInputs}
        isEditing={editingDirector}
      />

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
                  onClick={() => setEditingDirector(director)}
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
