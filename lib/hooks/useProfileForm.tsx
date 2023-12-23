import { useEffect, useState } from "react";
import { GenderType, User } from "@/types/models";
import { isValidDate } from "../utils/string";

type TPaymentErrors = Record<keyof User, string | null>;

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

    if (Object.values(validateErrors).some(error => error)) return null;

    let data = { dob, gender, name };

    resetState();

    return data;
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;

    const alphabeticValue = name.replace(/[^a-zA-Z\s]/g, "");

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

  const resetState = () => {
    setDob("");
    setGender(GenderType.Male);
    setName("");
  };

  useEffect(() => {
    return () => {
      resetState();
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
