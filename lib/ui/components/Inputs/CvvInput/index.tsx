import { Props } from "@/types/components/text-input";
import { useFormContext } from "react-hook-form";
import InputField from "../InputField";

const CvvInput = ({ name, label, required, ...props }: Props) => {
  const { register } = useFormContext();

  return (
    <InputField
      type="number"
      label={label}
      required={required}
      {...register(name)}
      {...props}
    />
  );
};

export default CvvInput;
