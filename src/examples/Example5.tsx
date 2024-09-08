import { FieldValues, useForm } from "react-hook-form";

/**
 * Basic validation for input type, input length, input range
 *
 * highlight-specific field when something goes wrong
 */
const Example1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      age: 0,
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log("data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">
        First name:
        {errors.firstName && (
          <span style={{ color: "red" }}>{errors.firstName.message}</span>
        )}
      </label>
      <input
        id="firstName"
        {...register("firstName", {
          required: "This is a required field",
          minLength: {
            value: 3,
            message: "Minimum length is 3",
          },
        })}
      />

      <label htmlFor="age">
        Age:
        {errors.age && (
          <span style={{ color: "red" }}>{errors.age.message}</span>
        )}
      </label>
      <input
        id="age"
        type="number"
        {...register("age", {
          required: "This is a required field",
          min: {
            value: 18,
            message: "Minimum age is 18",
          },
          max: {
            value: 99,
            message: "Maximum age is 99",
          },
        })}
      />

      <input type="submit" />
    </form>
  );
};

export default Example1;
