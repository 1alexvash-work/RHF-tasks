import { useForm } from "react-hook-form";

/**
 * Super basic form to handle first name and last name
 */
const Example1 = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <button type="button" onClick={() => reset()}>
        Reset
      </button>
      <input type="submit" />
    </form>
  );
};

export default Example1;
