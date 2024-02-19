"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeSlash } from "@phosphor-icons/react";

import AuthLayout from "@/components/layout/AuthLayout";
import AuthForm from "@/components/forms/AuthForm";
import InputField from "@/components/forms/InputField";
import Button from "@/components/buttons/Button";

import { registerValidation } from "@/lib/utils/auth";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addUser } from "@/lib/redux/features/users/usersSlice";

export default function RegisterPage() {
  const [isPasswordHidden, setIsPasswordHidden] = React.useState(false);
  const [isPasswordConfirmationHidden, setIsPasswordConfirmationHidden] =
    React.useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  const [data, setData] = React.useState({
    username: "",
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const error = registerValidation(users, data);

    if (error) {
      setErrorMessage(error);
    } else {
      const user = {
        username: data.username,
        phoneNumber: data.phoneNumber,
        password: data.password,
      };

      dispatch(addUser(user));
      router.push("/login");
    }
  };

  React.useEffect(() => {
    router.prefetch("/login");
  }, [router]);

  return (
    <AuthLayout
      title="Daftarkan Akun"
      description="Daftar akun anda dengan mengisi form di bawah."
    >
      {errorMessage && <span>{errorMessage}</span>}
      <AuthForm onSubmit={(e) => handleSubmit(e)}>
        <InputField
          label="username"
          htmlFor="register-username"
          name="username"
          type="text"
          value={data.username}
          onChange={(e) => handleChange(e)}
          placeholder="Ketik username anda disini..."
          autoComplete="username"
          minLength={8}
          required
        />
        <InputField
          label="phone number"
          htmlFor="register-phone"
          name="phoneNumber"
          type="tel"
          value={data.phoneNumber}
          onChange={(e) => handleChange(e)}
          placeholder="Ketik nomor hp anda disini..."
          pattern="^(\+62|62|0)8[1-9][0-9]{6,9}$"
          helper="Ex: 628XXXXXXXX"
          autoComplete="on"
          required
        />
        <InputField
          label="password"
          htmlFor="register-password"
          name="password"
          type={isPasswordHidden ? "text" : "password"}
          value={data.password}
          onChange={(e) => handleChange(e)}
          placeholder="Ketik password anda disini..."
          icon={isPasswordHidden ? <EyeSlash /> : <Eye />}
          iconOnClick={() => setIsPasswordHidden(!isPasswordHidden)}
          minLength={8}
          required
        />
        <InputField
          label="password confirmation"
          htmlFor="register-password-confirmation"
          name="passwordConfirmation"
          type={isPasswordConfirmationHidden ? "text" : "password"}
          value={data.passwordConfirmation}
          onChange={(e) => handleChange(e)}
          placeholder="Ketik kembali password anda disini..."
          icon={isPasswordConfirmationHidden ? <EyeSlash /> : <Eye />}
          iconOnClick={() =>
            setIsPasswordConfirmationHidden(!isPasswordConfirmationHidden)
          }
          minLength={8}
          required
        />
        <Button className="w-full mt-8" variant="secondary" type="submit">
          Daftar Sekarang
        </Button>
      </AuthForm>
    </AuthLayout>
  );
}
