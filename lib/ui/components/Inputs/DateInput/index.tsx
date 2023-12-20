import { Props } from "@/types/components/text-input";
import { useFormContext } from "react-hook-form";
import InputField from "../InputField";

const DateInput = ({ name, label, required, ...props }: Props) => {
  const { register } = useFormContext();

  return (
    <InputField
      type="date"
      // name={name}
      label={label}
      required={required}
      {...register(name)}
      {...props}
    />
  );
};

export default DateInput;
