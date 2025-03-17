import { useState, useEffect } from "react";
import { mediaList } from "../api/media";

const MediaLayout = () => {
  const [medias, setMedias] = useState([]);
  const getMedias = async () => {
    const res = await mediaList();
    console.log(res.data);

    setMedias(res.data);
  };
  useEffect(() => {
    getMedias();
  }, []);

  return (
    <div className="flex flex-1 flex-col  items-center bg-primary-default select-none overflow-y-scroll px-5 ">
      <div className="relative my-4 flex items-center w-full justify-center ">
        <div className="h-1 w-full bg-white rounded-xl opacity-10 m-auto translate-y-1/2"></div>
        <h1 className=" text-center   px-2 text-2xl font-bold text-white">
          Peliculas
        </h1>
        <div className="h-1 w-full bg-white rounded-xl opacity-10 m-auto translate-y-1/2"></div>
      </div>

      <div className="flex flex-wrap   gap-5  cursor-pointer ">
        {medias.map((media) => {
          return (
            <div
              className="hover:scale-105 transition-transform duration-300 h-70 pb-1  bg-primary-dark bg-opacity-10 gap-2 rounded-lg overflow-hidden"
              key={media._id}
            >
              <img
                className="object-cover h-60   rounded-lg  "
                src={media.photo}
                alt="imagen"
              />
              <div className="pl-2">
                <h2 className="mt-2 truncate max-w-36 ">{media.title}</h2>
                <h3 className="opacity-55 ">{media.releaseYear}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MediaLayout;
