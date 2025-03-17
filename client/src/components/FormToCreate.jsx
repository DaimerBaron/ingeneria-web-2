/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormToCreate = ({ sendData, formInputs,isEditing }) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const onSubmit = handleSubmit((data) => {
    sendData(data);
    reset();
  });

  useEffect(() => {
    if (isEditing) {
      setValue("name", isEditing.name);
      setValue("state", isEditing.state);
      setValue("slogan", isEditing.slogan);
      setValue("description", isEditing.description);
    }
  }
    , [isEditing, setValue]);



  return (
    <form
      className=" flex gap-2 justify-center items-center m-auto py-2 px-4 w-full rounded-md border border-secundary-default/20"
      onSubmit={onSubmit}
    >
      {formInputs.map((input) => {
        if (input.name === "state") {
          return (
            <select
              key={input.name}
              className="w-full p-1 bg-transparent rounded-md outline-none max-w-24"
              {...register(input.name)}
            >
              <option className="text-black" defaultValue="Active" value="Active">
                Active
              </option>
              <option className="text-black" value="Inactive">Inactive</option>
            </select>
          );
        } else {
          return (
            <input
              key={input.name}
              className={`outline-none bg-secundary-default/10 pl-2 rounded-md p-1 flex-1 ${
                input.name === "description" ? "flex-[2]":''
              }`}
              type="text"
              placeholder={input.placeholder}
              {...register(input.name, { required: true })}
            />
          );
        }
      })}
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-secundary-default text-white py-1 px-6 rounded-md"
      >
        {isEditing ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default FormToCreate;
