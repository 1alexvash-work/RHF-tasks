import { FieldValues, useFieldArray, useForm } from "react-hook-form";

type UseForm = {
  taskName: string;
  todos: {
    name: string;
  }[];
};

const defaultValues: UseForm = {
  taskName: "",
  todos: [{ name: "Task 1" }, { name: "Task 2" }, { name: "Task 3" }],
};

/**
 * Todo example
 */
const Example2 = () => {
  const { handleSubmit, register, control, reset, getValues } =
    useForm<UseForm>({
      defaultValues,
    });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "todos",
  });

  const onSubmit = (data: FieldValues) => {
    append({ name: data.taskName });
    reset({ taskName: "", todos: getValues("todos") });
  };

  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id}>
          <div {...register(`todos.${index}.name`)}>
            {field.name}
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}

      <hr />

      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <input {...register("taskName")} />
        <button type="submit">Create new task</button>
      </form>
    </>
  );
};

export default Example2;
