import { useForm } from "react-hook-form";
import { mediaRequest } from "../api/media";

import { useEffect, useState } from "react";

//import data from modules
import { genreList } from "../api/genre";
import { producerList } from "../api/producer";
import { directorList } from "../api/director";
import { typeList } from "../api/type";

const NewMedia = () => {
  const { register, handleSubmit } = useForm();
  const [list, setlist] = useState(
    { genre: [], producer: [], director: [], type: [] },
  );

  useEffect(() => {
    const fetchData = async () => {
      const [genre, producer, director, type] = await Promise.all([
        genreList(),
        producerList(),
        directorList(),
        typeList(),
      ]);



      setlist({
        genre: genre.data,
        producer: producer.data,
        director: director.data,
        type: type.data,
      });
    };
    fetchData();
 
    
  }, []);
  

  const onsubmit = handleSubmit(async (data) => {
    console.log(data);

    console.log(list);
    
   await mediaRequest(data);
    
  });

  return (
    <div className="flex justify-center absolute inset-0 overflow-hidden bg-primary-default text-slate-200">
      <div className="bg-primary-light  p-4 flex flex-col items-center m-auto rounded-lg px-8">
        <h1 className="font-bold text-2xl mb-5">Create Media</h1>
        <form onSubmit={onsubmit} className="flex flex-col  gap-2">
          <div className="container flex  gap-4">
            <div id="inputs-basic" className="flex flex-col gap-2">
              <label className="flex gap-1">
                <span className="w-28">Title:</span>
                <input
                  className="w-full pl-2 outline-none rounded-md  bg-primary-default  py-1"
                  type="text"
                  name="title"
                  {...register("title", { required: true })}
                />
              </label>
              <label className="flex gap-1 items-center">
                <span className="w-28">Synopsis:</span>
                <textarea
                  className="w-full py-4  bg-primary-default pl-2 outline-none rounded-md resize-none"
                  type="text"
                  name="synopsis"
                  {...register("synopsis", { required: true })}
                />
              </label>
              <label className="flex gap-1  ">
                <span className="w-28">Photo:</span>
                <input
                  className="w-full  bg-primary-default  py-1 pl-2 outline-none rounded-md"
                  type="text"
                  name="photo"
                  {...register("photo", { required: true })}
                />
              </label>

              <label className="flex gap-1">
                <span className="w-28">Year:</span>
                <input
                  className="w-full  bg-primary-default  py-1 pl-2 outline-none rounded-md"
                  type="number"
                  name="releaseYear"
                  {...register("releaseYear", { required: true })}
                />
              </label>
            </div>

            <div id=" inputs-wiht-objectID" className="flex flex-col gap-2">
              <label className="flex gap-1 items-center">
                <span className="w-28">Genre:</span>
                <select
                  className="w-full  bg-primary-default  py-1 pl-2 outline-none rounded-md"
                  {...register("Genre", { required: true })}
                >
                  <option value="">Select Genre</option>
                  {list.genre.map((genre) => (
                    <option key={genre._id} value={genre._id}>
                      {genre.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex gap-1">
                <span className="w-28">Producer:</span>

                <select
                  className="w-full  bg-primary-default  py-1 pl-2 outline-none rounded-md"
                  {...register("Producer", { required: true })}
                >
                  <option value="">Select Producer</option>
                  {list.producer.map((producer) => (
                    <option key={producer._id} value={producer._id}>
                      {producer.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex gap-1">
                <span className="w-28">Director:</span>

                <select
                  className="w-full  bg-primary-default  py-1 pl-2 outline-none rounded-md"
                  {...register("Director", { required: true })}
                >
                  <option value="">Select Director</option>
                  {list.director.map((director) => (
                    <option key={director._id} value={director._id}>
                      {director.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex gap-1">
                <span className="w-28">Type:</span>

                <select
                  className="w-full  bg-primary-default  py-1 pl-2 outline-none rounded-md"
                  {...register("Type", { required: true })}
                >
                  <option value="">Select Type</option>
                  {list.type.map((type) => (
                    <option key={type._id} value={type._id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <button
            className="bg-black text-white m-auto w-28 py-2 px-4 rounded-md mt-2"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewMedia;
