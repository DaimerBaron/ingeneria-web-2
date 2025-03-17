import { useForm } from "react-hook-form";
import {
  producerRequest,
  producerList,
  producerDelete,
  producerUpdate,
} from "../api/producer";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
const Producer = () => {
  const [producers, setProducers] = useState([]);
  const [editingProducer, setEditingProducer] = useState(null);

  const { register, handleSubmit, reset, setValue } = useForm();

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

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (editingProducer) {
        await producerUpdate(editingProducer._id, data);
        setEditingProducer(null);
      } else {
        await producerRequest(data);
      }
      getProducers();
      reset();
    } catch (error) {
      console.error("Error submitting producer:", error);
    }
  });

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

  const startEditing = (producer) => {
    setEditingProducer(producer);
    setValue("name", producer.name);
    setValue("state", producer.state);
    setValue("slogan", producer.slogan);
    setValue("description", producer.description);
  };

  return (
    <div className="flex flex-col p-10">
      <div className="rounded-3xl flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-3">
          {editingProducer ? "Edit Producer" : "Lista de productores"}
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

          <input
            className="outline-none rounded-md p-1"
            type="text"
            placeholder="Slogan"
            {...register("slogan", { required: true })}
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
            {editingProducer ? "Update" : "Add"}
          </button>
        </form>
      </div>

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
                  onClick={() => startEditing(producer)}
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
