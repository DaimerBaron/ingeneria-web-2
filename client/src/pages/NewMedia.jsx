import { useForm } from "react-hook-form";
import { mediaRequest } from "../api/media";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

//import data from modules
import { genreList } from "../api/genre";
import { producerList } from "../api/producer";
import { directorList } from "../api/director";
import { typeList } from "../api/type";
import { mediaList, updatedMedia } from "../api/media";

import { Toaster, toast } from "sonner";

const NewMedia = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [list, setlist] = useState({
    genre: [],
    producer: [],
    director: [],
    type: [],
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const media = await mediaList();
        const mediaData = media.data.find((media) => media._id === id);
        setValue("title", mediaData.title);
        setValue("synopsis", mediaData.synopsis);
        setValue("photo", mediaData.photo);
        setValue("releaseYear", mediaData.releaseYear);
        setValue("Genre", mediaData.Genre?._id); 
        setValue("Producer", mediaData.Producer?._id);
        setValue("Director", mediaData.Director?._id);
        setValue("Type", mediaData.Type?._id);
      };

      fetchData();
    }

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
  }, [id, setValue]);

  const onsubmit = handleSubmit(async (data) => {
    try {
      if (id) {
        await updatedMedia(id, data);
        toast.success("Media updated successfully");
        reset()
      } else {
        toast.promise(mediaRequest(data), {
          loading: "Creating media...",
          success: () => {
            reset();
            return "Media created";
          },
        });
      }
    } catch (error) {
      toast.error("Failed to create media. Please try again");
    }
  });

  return (
    <div className="flex flex-1 justify-center text-black select-none">
      <div className="bg-primary-light/90  p-6 py-10 flex flex-col items-center m-auto rounded-lg w-1/2   ">
        <h1 className="font-bold text-2xl mb-5">
          {id ? "Edit Media" : "Create Media"}
        </h1>
        <form onSubmit={onsubmit} className="flex flex-col w-full gap-2 ">
          <div className="container flex w-full  gap-4">
            <div id="inputs-basic" className="flex flex-col gap-4 w-full ">
              <label className="flex gap-1 text-lg">
                <span className="w-28">Title:</span>
                <input
                  required
                  className="w-full pl-2 outline-none text-gray-200 font-light rounded-md  bg-primary-default  py-1"
                  type="text"
                  name="title"
                  {...register("title", { required: true })}
                />
              </label>
              <label className="flex gap-1 text-lg items-center">
                <span className="w-28">Synopsis:</span>
                <textarea
                  required
                  className="w-full py-4  bg-primary-default pl-2 outline-none text-gray-200 font-light rounded-md resize-none"
                  type="text"
                  name="synopsis"
                  {...register("synopsis", { required: true })}
                />
              </label>
              <label className="flex gap-1 text-lg  ">
                <span className="w-28">Photo:</span>
                <input
                  required
                  className="w-full  bg-primary-default  py-1 pl-2 outline-none text-gray-200 font-light rounded-md"
                  type="text"
                  name="photo"
                  {...register("photo", { required: true })}
                />
              </label>

              <label className="flex gap-1 text-lg">
                <span className="w-28">Year:</span>
                <input
                  required
                  className="w-full  bg-primary-default  py-1 pl-2 outline-none text-gray-200 font-light rounded-md"
                  type="number"
                  name="releaseYear"
                  {...register("releaseYear", { required: true })}
                />
              </label>
            </div>

            <div
              id=" inputs-wiht-objectID"
              className="flex flex-col gap-4 w-full "
            >
              <label className="flex gap-1 text-lg items-center">
                <span className="w-28">Genre:</span>
                <select
                  required
                  className="w-full  bg-primary-default  py-1 pl-2 outline-none text-gray-200 font-light rounded-md"
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
              <label className="flex gap-1 text-lg">
                <span className="w-28">Producer:</span>

                <select
                  required
                  className="w-full  bg-primary-default  py-1 pl-2 outline-none text-gray-200 font-light rounded-md"
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
              <label className="flex gap-1 text-lg">
                <span className="w-28">Director:</span>

                <select
                  required
                  className="w-full  bg-primary-default  py-1 pl-2 outline-none text-gray-200 font-light rounded-md"
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
              <label className="flex gap-1 text-lg">
                <span className="w-28">Type:</span>

                <select
                  required
                  className="w-full  bg-primary-default  py-1 pl-2 outline-none text-gray-200 font-light rounded-md"
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
            className="bg-black text-gray-200 font-light m-auto w-28 py-2 px-4 rounded-md mt-2"
            type="submit"
          >
            Create
          </button>
          <Toaster richColors />
        </form>
      </div>
    </div>
  );
};

export default NewMedia;
