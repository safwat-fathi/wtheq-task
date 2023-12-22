"use client";

import Button from "@/lib/ui/components/Button";
import useProfileForm from "@/lib/hooks/useProfileForm";
import InputField from "@/lib/ui/components/InputField";
import { GenderType } from "@/types/models";

const ProfileForm = () => {
  const {
    name,
    dob,
    gender,
    handleSubmit,
    errors,
    handleNameChange,
    handleDobChange,
    handleGenderChange,
  } = useProfileForm();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex gap-4 flex-col"
    >
      <div>
        <InputField
          name="name"
          onChange={handleNameChange}
          value={name}
          placeholder="Name"
          errors={errors}
        />
      </div>

      <div>
        <InputField
          type="date"
          min="1920-01-01"
          max="2004-01-01"
          name="dob"
          onChange={handleDobChange}
          value={dob}
          errors={errors}
          placeholder="Expiry Date"
        />
      </div>

      <div className="flex gap-4" onChange={handleGenderChange}>
        <label className="flex gap-2 cursor-pointer select-none" htmlFor="male">
          <input
            id="male"
            name="gender"
            value={GenderType.Male}
            defaultChecked={gender === GenderType.Male}
            type="radio"
          />
          Male
        </label>
        <label
          className="flex gap-2 cursor-pointer select-none"
          htmlFor="female"
        >
          <input
            id="female"
            name="gender"
            value={GenderType.Female}
            defaultChecked={gender === GenderType.Female}
            type="radio"
          />
          Female
        </label>
      </div>

      <div>
        <Button type="submit" size="lg" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
