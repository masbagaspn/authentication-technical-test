"use client";

import * as React from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

import AuthLayout from "@/components/layout/AuthLayout";
import AuthForm from "@/components/forms/AuthForm";
import InputField from "@/components/forms/InputField";
import Button from "@/components/buttons/Button";

import { useAppSelector } from "@/lib/hooks";
import { loginValidation } from "@/lib/utils/auth";
import { setSessionCookie } from "@/lib/utils/cookies";
import { User } from "@/types";

export default function LoginPage() {
  const [loginData, setLoginData] = React.useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);

  const { users } = useAppSelector((state) => state.users);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { success, response } = loginValidation(users, loginData);

    if (!success) {
      setErrorMessage(response as string);
    } else {
      router.push("/profile");
      const { username, phoneNumber } = response as User;
      setSessionCookie({ username, phoneNumber });
    }
  };

  React.useEffect(() => {
    router.prefetch("/profile");
  }, [router]);

  return (
    <AuthLayout
      title="Silahkan Login"
      description="Masukkan Username dan password anda untuk masuk"
    >
      <AuthForm onSubmit={(e) => handleSubmit(e)}>
        <InputField
          label="username"
          htmlFor="login-username"
          name="username"
          type="text"
          value={loginData.username}
          onChange={(e) => handleChange(e)}
          placeholder="Ketik username anda disini..."
          minLength={8}
          autoComplete="username"
          required
        />
        <InputField
          label="password"
          htmlFor="login-password"
          name="password"
          type={isPasswordHidden ? "password" : "text"}
          value={loginData.password}
          onChange={(e) => handleChange(e)}
          placeholder="Ketik password anda disini..."
          icon={isPasswordHidden ? <Eye /> : <EyeSlash />}
          iconOnClick={() => setIsPasswordHidden(!isPasswordHidden)}
          minLength={8}
          required
        />
        <Button type="submit" variant="secondary" className="mt-8">
          Masuk Sekarang
        </Button>
      </AuthForm>
    </AuthLayout>
  );
}
