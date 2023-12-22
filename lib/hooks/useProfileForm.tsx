import { useEffect, useState } from "react";
import { GenderType } from "@/types/models";
import { ProfileFormData } from "@/app/profile/components/ProfileForm/types";
import { isValidDate } from "../utils/string";

type TPaymentErrors = Record<keyof ProfileFormData, string | null>;

const useProfileForm = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState(GenderType.Male);
  const [errors, setErrors] = useState<TPaymentErrors>({
    dob: null,
    gender: null,
    name: null,
  });

  const handleSubmit = () => {
    let validateErrors: TPaymentErrors = {
      dob: null,
      gender: null,
      name: null,
    };

    if (name.length < 5) {
      validateErrors = {
        ...validateErrors,
        name: "Name must be at least 5 characters long",
      };
    }

    if (!name.length) {
      validateErrors = {
        ...validateErrors,
        name: "Name is required",
      };
    }

    if (!dob) {
      validateErrors = {
        ...validateErrors,
        dob: "Date of birth is required",
      };
    }

    setErrors(validateErrors);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;

    const alphabeticValue = name.replace(/[^a-zA-Z]/g, "");

    if (!name.length) setErrors({ ...errors, name: "Name is required" });
    else setErrors({ ...errors, name: null });

    setName(alphabeticValue);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const gender = +event.target.value;

    setGender(gender);
  };

  const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;

    // if (!date.length) setErrors({ ...errors, dob: "Date of birth is required" });
    if (!isValidDate(date))
      setErrors({ ...errors, dob: "Date of birth is not valid" });
    else setErrors({ ...errors, dob: null });

    setDob(date);
  };

  useEffect(() => {
    return () => {
      setDob("");
      setGender(GenderType.Male);
      setName("");
    };
  }, []);

  return {
    name,
    dob,
    gender,
    handleNameChange,
    handleGenderChange,
    handleDobChange,
    errors,
    handleSubmit,
  };
};

export default useProfileForm;
