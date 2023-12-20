import { Props } from "@/types/components/text-input";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

const defaultClasses = `w-full rounded-lg border py-4 pl-6 pr-10 bg-transparent dark:bg-form-input focus-visible:shadow-none outline-none`;
const invalidClasses =
  "border-danger  dark:border-danger focus:border-danger dark:focus:border-danger";
const validClasses =
  "border-stroke focus:border-primary dark:border-form-strokedark dark:focus:border-primary";

const InputField = ({ name, label, required, ...props }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div role="">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-body dark:text-white"
        >
          {label}
          {required && <span className="ml-1 text-danger">*</span>}
          {!required && <span className="ml-1 text-muted">(optional)</span>}
        </label>
      )}

      <input
        {...props}
        {...register(name)}
        id={name}
        required={required}
        className={`${defaultClasses} ${
          errors[name] ? invalidClasses : validClasses
        }`}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="text-danger text-sm">{message}</p>
        )}
      />
    </div>
  );
};

export default InputField;
