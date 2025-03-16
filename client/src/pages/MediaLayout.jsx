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
    <div className="flex flex-col items-center  justify-center">
      <h1 className="text-3xl font-bold mt-5 mb-1 ">Peliculas</h1>
      

      <div className="flex flex-wrap gap-4 p-4 justify-center"> 
      {medias.map((media) => {
        return (
          <div className=" w-36 bg-black gap-2" key={media._id}>
            <img
              className="object-cover"
              src={media.photo}
              
              alt="imagen"
            />

            <h1>{media.title}</h1>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default MediaLayout;
