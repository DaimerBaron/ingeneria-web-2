import { useEffect, useState } from "react";
import { mediaList } from "../api/media";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft} from "react-icons/fa6";

export const MediaDetails = () => {
  const [medias, setMedias] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  const getMedias = async () => {
    const res = await mediaList();
    setMedias(res.data);
  };
  useEffect(() => {
    getMedias();
  }, []);
  return (
    <div className="flex justify-center items-center relative  h-screen overflow-auto p-6">
      <FaArrowLeft onClick={() => navigate("/media")} className="absolute top-20 left-80 text-2xl cursor-pointer text-gray-400"/>
      {medias.map(
        (media) =>
          media._id === id && (
            <div
              key={media._id}
              className="bg-gray-800 text-white shadow-lg rounded-lg p-6 w-full max-w-3xl"
            >
              <div className="flex flex-row gap-6">
                <img
                  src={media.photo}
                  alt={media.title}
                  className="w-1/3 rounded-lg shadow-md"
                />

                <div className="flex flex-col gap-2 w-full">
                  <h2 className="text-2xl font-semibold">{media.title}</h2>
                  <p className="text-gray-400">Serial: {media.serial}</p>
                  <a
                    href={media.url}
                    className="text-secundary-light underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver más
                  </a>
                  <p className="text-gray-400">Año: {media.releaseYear}</p>
                  <p className="text-gray-300">{media.synopsis}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-primary px-3 py-1 rounded-md text-sm">
                      {media.Genre?.name}
                    </span>
                    <span className="bg-green-600 px-3 py-1 rounded-md text-sm">
                      Dir: {media.Director?.name}
                    </span>
                    <span className="bg-yellow-700 px-3 py-1 rounded-md text-sm">
                      Prod: {media.Producer?.name}
                    </span>
                    <span className="bg-red-500 px-3 py-1 rounded-md text-sm">
                      Tipo: {media.Type?.name}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 justify-between">
              <div className="mt-6 text-sm text-colortext-light">
                <p>
                  Creado: {new Date(media.dateCreated).toLocaleDateString()}
                </p>
                <p>
                  Actualizado:{" "}
                  {new Date(media.dateUpdated).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-1 justify-center">
                <button onClick={() => navigate(`/editMedia/${media._id}`)} className="bg-secundary-default text-colorButton-light px-4 py-2 rounded-md mt-4 pointer">
                  Editar detalles
                </button>
                
              </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};
