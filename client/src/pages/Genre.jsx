import { genreRequest, genreList, genreDelete } from "../api/genre";
import { useEffect, useState } from "react";

import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

import FormToCreate from "../components/FormToCreate";


const Genre = () => {
  const [genres, setGenres] = useState([]);
  const [isEditingGenre, setIsEditingGenre] = useState(null);
  const getGenres = async () => {
    const res = await genreList();
    setGenres(res.data);
  };

  useEffect(() => {
    getGenres();
  }, []);

const sendData= async (data) => {
    try {
      if (isEditingGenre) {
        
        await genreRequest(isEditingGenre._id, data);
        setIsEditingGenre(null);
      } else {
        await genreRequest(data);
      }
      getGenres();
    } catch (error) {
      console.error("Error submitting producer:", error);
    }
  };

  const genreDeleteById = async (id) => {
    await genreDelete(id);
    getGenres();
  };

  const formInputs =[
    {name:"name", placeholder:"Name"},
    {name:"state", placeholder:"State"},
    {name:"description", placeholder:"Description"}
  ]

  
  return (
    <div className="flex flex-1 flex-col p-10 mt-2 overflow-y-auto">
      <div className=" rounded-3xl flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold mb-3">Lista de géneros</h1>

        <FormToCreate
          sendData={sendData}
          formInputs={formInputs}
          isEditing={isEditingGenre}
        />
       
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
              <td className="text-center cursor-pointer  gap-1 flex justify-around items-center px-3 py-3 ">
                <FaEdit
                  onClick={() => setIsEditingGenre(genre)}
                  className="w-4 h-4 text-blue-500"
                ></FaEdit>
                <FaTrashCan
                  onClick={() => genreDeleteById(genre._id)}
                  className="w-4 h-4 text-red-500 "
                ></FaTrashCan>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Genre;
