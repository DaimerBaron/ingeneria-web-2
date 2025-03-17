import {
  producerRequest,
  producerList,
  producerDelete,
  producerUpdate,
} from "../api/producer";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import FormToCreate from "../components/FormToCreate";

const Producer = () => {
  const [producers, setProducers] = useState([]);
  const [editingProducer, setEditingProducer] = useState(null);

  const getProducers = async () => {
    try {
      const res = await producerList();
      setProducers(res.data);
    } catch (error) {
      console.error("Error fetching producers:", error);
    }
  };

  useEffect(() => {
    getProducers();
  }, []);

  const sendData = async (data) => {
    try {
      if (editingProducer) {
        await producerUpdate(editingProducer._id, data);
        setEditingProducer(null);
      } else {
        await producerRequest(data);
      }
      getProducers();
    } catch (error) {
      console.error("Error submitting producer:", error);
    }
  };

  const producerDeleteById = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "¿Estás seguro de que deseas eliminar este productor?"
      );
      if (!confirmDelete) return;

      await producerDelete(id);
      setProducers(producers.filter((producer) => producer._id !== id)); // Corrige el estado después de eliminar
    } catch (error) {
      console.error(
        "Error eliminando el productor:",
        error.response?.data || error.message
      );
      alert("No se pudo eliminar el productor.");
    }
  };

  return (
    <div className="flex flex-col p-10 ">
      <h1 className="text-2xl font-bold text-center mb-4">List Producer</h1>

      <FormToCreate
        isEditing={editingProducer}
        sendData={sendData}
        formInputs={[
          { name: "name", placeholder: "Name" },
          { name: "state", placeholder: "State" },
          { name: "slogan", placeholder: "Slogan" },
          { name: "description", placeholder: "Description" },
        ]}
        
      />

      <table className="w-full border-collapse mt-5">
        <thead>
          <tr className="bg-gray-400 text-black">
            <th className="border px-2 py-1 text-center">Name</th>
            <th className="border px-2 py-1 text-center">State</th>
            <th className="border px-2 py-1 text-center">Slogan</th>
            <th className="border px-2 py-1 text-center">Description</th>
            <th className="border px-2 py-1 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {producers.map((producer) => (
            <tr className="border" key={producer._id}>
              <td className="border px-2">{producer.name}</td>
              <td className="border px-2 text-center">{producer.state}</td>
              <td className="border px-2">{producer.slogan}</td>
              <td className="border px-2">{producer.description}</td>

              <td className="text-center cursor-pointer  gap-1 flex justify-around items-center px-3 py-3 ">
                <FaEdit
                  onClick={() => setEditingProducer(producer)}
                  className="text-blue-500 "
                ></FaEdit>
                <FaTrashCan
                  onClick={() => producerDeleteById(producer._id)}
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

export default Producer;
