import { useForm } from "react-hook-form";
import { mediaRequest } from "../api/media";
import { genreList } from "../api/genre";
import { useEffect, useState } from "react";
import genre from "../../../models/genre";

const NewMedia = () => {
  const { register, handleSubmit, reset } = useForm();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await genreList();
      setGenres(res.data);
      console.log(res.data);
    };
    fetchGenres();
  }, []);

  const onsubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await mediaRequest(data);
    console.log(res.data);
  });

  return (
    <div className="flex justify-center h-screen bg-green-950 text-slate-200">
      <div className="bg-green-900  p-4 flex flex-col items-center m-auto rounded-lg px-8">
        <h1 className="font-bold text-2xl mb-3">Create Media</h1>
        <form onSubmit={onsubmit} className="flex flex-col  gap-2">
          <label className="flex gap-1">
            <span className="w-32">Title:</span>
            <input
              className="w-full pl-2 outline-none rounded-md  bg-green-950  py-1"
              type="text"
              name="title"
              {...register("title", { required: true })}
            />
          </label>
          <label className="flex gap-1 items-center">
            <span className="w-32">Synopsis:</span>
            <textarea
              className="w-full py-4  bg-green-950 pl-2 outline-none rounded-md resize-none"
              type="text"
              name="synopsis"
              {...register("synopsis", { required: true })}
            />
          </label>
          {/* <label className="flex gap-1  ">
            Photo:
            <input accept="image/*" className="w-full  bg-green-950  py-1 pl-2 outline-none rounded-md " type="file" name="photo" />
          </label>
           */}
          <label className="flex gap-1">
            <span className="w-32">ReleaseYear:</span>
            <input
              className="w-full  bg-green-950  py-1 pl-2 outline-none rounded-md"
              type="number"
              name="releaseYear"
              {...register("releaseYear", { required: true })}
            />
          </label>
          <label className="flex gap-1 items-center">
            <span className="w-32">Genre:</span>
            <select
              className="w-full  bg-green-950  py-1 pl-2 outline-none rounded-md"
              {...register("Genre", { required: true })}
            >
              <option  value="">Select Genre</option>
              {genres.map((genre) => (
                <option key={genre._id} value={genre._id}>
                  {genre.name}
                </option>
              ))}

            </select>
          </label>
          {/*<label className="flex gap-1">
            Producer:
            <input className="w-full  bg-green-950  py-1 pl-2 outline-none rounded-md" type="text" name="Producer"{...register('Producer',{required:true})} />
          </label>
          <label className="flex gap-1">
            Director:
            <input className="w-full  bg-green-950  py-1 pl-2 outline-none rounded-md" type="text" name="Director" {...register('Director',{required:true})} />
          </label>
          <label className="flex gap-1">
            Type:
            <input className="w-full  bg-green-950  py-1 pl-2 outline-none rounded-md" type="text" name="Type" {...register('Type',{required:true})} />
          </label> */}
          <button
            className="bg-black text-white py-2 px-4 rounded-md mt-2"
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
