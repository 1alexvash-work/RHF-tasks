import { Controller, useForm } from "react-hook-form";

/**
 * Display one value (kg) and save another (lbs) in the backend
 *
 * One way to achieve this, likely a bit suboptimal
 */
const Example4 = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      weightKg: 0,
    },
  });

  const onSubmit = (data: { weightKg: number }) => {
    const weightInPounds: number = data.weightKg * 2.2;
    alert(JSON.stringify({ weightInPounds }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="weightInKg">weightInKg</label>
      <Controller
        control={control}
        name="weightKg"
        render={({ field }) => (
          <input
            {...field}
            type="number"
            onChange={(event) => {
              field.onChange(parseFloat(event.target.value));
              console.log("field.value", field.value);
            }} // Parse as float
            value={field.value} // Keep showing value in kg
            placeholder="Enter weight in kg"
          />
        )}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Example4;
