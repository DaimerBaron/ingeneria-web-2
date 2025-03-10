import { useForm } from "react-hook-form";
import { genreRequest } from "../api/genre";

const Genre = () => {
  const { register, handleSubmit,reset } = useForm();

    const onsubmit = handleSubmit( async data=>{
        const res = await genreRequest(data)
        console.log(res);
        
        reset()
    })
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <div className="bg-zinc-200 rounded-3xl flex flex-col items-center justify-center p-10 ">
        <h1 className="text-xl">Genre</h1>
        <form
          className=" flex flex-col gap-2 justify-center items-center m-auto p-8"
            onSubmit={onsubmit}
        >
          <input
            className=" outline-none rounded-md p-2"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <select className="w-full p-2 rounded-md" defaultValue='Active' {...register('state')} >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <textarea
            className=" outline-none rounded-md p-2 w-full resize-none h-24"
            type="text"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-md mt-2"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Genre;
