// eslint-disable-next-line react/prop-types
const ConfirmToast = ({ id, onConfirm, onCancel, toastId }) => {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-md  flex flex-col items-center">
      <h2 className="font-bold text-base mb-2 text-center">
        ¿Seguro que quieres eliminar este elemento?
      </h2>
      <p className="text-sm text-gray-600">Esta acción no se puede deshacer</p>

      <div className="flex w-full justify-center items-center gap-3 mt-4">
        <button
          
          onClick={() => onConfirm(id,toastId)}
          className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
        >
          Eliminar
        </button>
        <button
          onClick={() => onCancel(toastId)}
          className="border border-gray-400 text-gray-600 px-4 py-1 rounded-md hover:bg-gray-200 transition"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ConfirmToast;