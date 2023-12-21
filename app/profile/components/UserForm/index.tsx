"use client";
import { number as cardNumber } from "card-validator";

import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { UserFormData } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import paymentSchema from "./schema";
import Button from "@/lib/ui/components/Button";
import InputField from "@/lib/ui/components/InputField";
import { GenderType } from "@/types/models";

const UserForm = () => {
  const methods = useForm<UserFormData>({
    resolver: yupResolver(paymentSchema),
    defaultValues: {
      gender: GenderType.Male,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  console.log(methods.getValues("gender"));
  console.log("awdawd");

  const onSuccess: SubmitHandler<UserFormData> = data => {
    console.log("Form submitted with data:", data);
  };

  const onError: SubmitErrorHandler<UserFormData> = errors => {
    console.log("Form submission errors:", errors);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSuccess, onError)}
        className="flex gap-4 flex-col"
      >
        <div>
          <InputField name="name" placeholder="Name" />
        </div>

        <div>
          <InputField name="dob" placeholder="Date of birth" />
        </div>

        <div>
          <label htmlFor="male">
            <input
              {...register("gender")}
              name="gender"
              type="radio"
              // value={GenderType.Male}
              id="male"
              // checked={methods.getValues("gender") === GenderType.Male}
            />
            Male
          </label>
        </div>

        <div>
          <label htmlFor="female">
            <input
              {...register("gender")}
              name="gender"
              type="radio"
              // value={GenderType.Female}
              // checked={methods.getValues("gender") === GenderType.Female}
              id="female"
            />
            Female
          </label>
        </div>

        <div>
          <Button
            loading={isSubmitting}
            type="submit"
            size="lg"
            className="w-full"
          >
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default UserForm;
