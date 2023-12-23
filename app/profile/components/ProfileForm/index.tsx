"use client";

import Button from "@/lib/ui/components/Button";
import useProfileForm from "@/lib/hooks/useProfileForm";
import InputField from "@/lib/ui/components/InputField";
import { GenderType } from "@/types/models";
import profileService from "@/services/profile.service";
import { toast } from "react-toastify";
import { useState } from "react";

const ProfileForm = () => {
  const [loading, setLoading] = useState(false);

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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      setLoading(true);

      const data = handleSubmit();

      if (!data) return;

      const resData = await profileService.update(data);

      if (resData.success) toast.success(resData.message);

      if (!resData.success) toast.error(resData.message);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-4 flex-col">
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
        <Button type="submit" loading={loading} size="lg" className="w-32">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
