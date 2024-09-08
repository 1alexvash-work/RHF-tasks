import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form1 = ({ nextStep }: { nextStep: () => void }) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log("data:", data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <input {...register("firstName")} placeholder="First name" />
      <button type="submit">Submit</button>
    </form>
  );
};

const Form2 = ({ nextStep }: { nextStep: () => void }) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log("data:", data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <input {...register("lastName")} placeholder="Last name" />
      <button type="submit">Submit</button>
    </form>
  );
};

type Step = "first" | "second" | "completed";

/**
 * Super simple stepper
 *
 * This is a very rough basic implementation, but it is very extensible.
 */
const Example3 = () => {
  const [step, setStep] = useState<Step>("first");

  function nextStep() {
    setStep((prevStep) => {
      if (prevStep === "first") return "second";
      if (prevStep === "second") return "completed";
      return prevStep;
    });
  }

  return (
    <div>
      <h1>Current step is: {step}</h1>
      {step === "first" && <Form1 nextStep={nextStep} />}
      {step === "second" && <Form2 nextStep={nextStep} />}
      {step === "completed" && <h1>🎆</h1>}
    </div>
  );
};

export default Example3;
