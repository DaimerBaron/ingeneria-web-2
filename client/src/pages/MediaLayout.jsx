import { useState, useEffect } from "react";
import { mediaList } from "../api/media";
import HoverMedia from "../components/HoverMedia";
import {useNavigate} from "react-router-dom"

const MediaLayout = () => {
  const [medias, setMedias] = useState([]);
  const [isHover, setIsHover] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  
  const navigate = useNavigate()
  const getMedias = async () => {
    const res = await mediaList();
    setMedias(res.data);
  };
  useEffect(() => {
    getMedias();
  }, []);

  const handleHover = (e, id) => {
    setIsHover(id);
    setTranslateX(e.clientX);
    
  }

  return (
    <div className="flex flex-1 flex-col  items-center bg-primary-default select-none overflow-y-auto px-5 ">
      <div className=" my-10 flex items-center w-full justify-center ">
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
              className=" transition-transform duration-300 h-70 pb-1   bg-primary-dark bg-opacity-10 gap-2 rounded-lg overflow-visible relative"
              key={media._id}
            >
              {isHover===media._id && <HoverMedia translateX={translateX} media={media} />}
              <div onMouseLeave={() => setIsHover(null)
              } onMouseEnter={(e) => handleHover(e,media._id)} className="h-70 w-40 overflow-hidden">
              <img
                className="hover:scale-110 transition-transform duration-200  object-contain h-60   rounded-lg  "
                src={media.photo}
                alt="imagen"
              />
              </div>
              <div className="pl-2">
                <h2 onClick={() =>  navigate(`/media/${media._id}`)} className="mt-2 truncate max-w-36 hover:text-secundary-light">{media.title}</h2>
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
