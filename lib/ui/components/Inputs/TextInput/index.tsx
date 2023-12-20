import { Props } from "@/types/components/text-input";
import { useFormContext } from "react-hook-form";

const defaultClasses = `w-full rounded-lg border py-4 pl-6 pr-10 bg-transparent dark:bg-form-input focus-visible:shadow-none outline-none`;
const invalidClasses =
  "border-danger  dark:border-danger focus:border-danger dark:focus:border-danger";
const validClasses =
  "border-stroke focus:border-primary dark:border-form-strokedark dark:focus:border-primary";

const TextInput = ({ name, ...props }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        {...props}
        {...register(name)}
        placeholder="Enter your email"
        className={`${defaultClasses} ${
          errors[name] ? invalidClasses : validClasses
        }`}
      />
    </>
  );
};

export default TextInput;
