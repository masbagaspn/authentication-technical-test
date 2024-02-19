import { User, UserRegistration } from "@/types";

export const registerValidation = (arr: User[], data: UserRegistration) => {
  const { password, passwordConfirmation } = data;

  if (!checkIsPasswordMatch(password, passwordConfirmation))
    return "Password does not not match";

  if (checkIsUserRegistered(arr, data, "phoneNumber")) {
    return "Phone number already exist";
  }
  if (checkIsUserRegistered(arr, data, "username")) {
    return "Username already exist";
  }

  return null;
};

export const loginValidation = (arr: User[], data: Partial<User>) => {
  const isUserExist = checkIsUserRegistered(arr, data, "username");

  if (!isUserExist) {
    return { success: false, response: "Invalid Username" };
  }

  if (!checkIsPasswordMatch(isUserExist.password, data.password!)) {
    return { success: false, response: "Invalid Password" };
  }

  return { success: true, response: isUserExist };
};

const checkIsPasswordMatch = (password: string, confirmation: string) => {
  if (password !== confirmation) return false;
  return true;
};

const checkIsUserRegistered = (
  arr: User[],
  target: Partial<User>,
  key: keyof User
) => {
  return arr.find((item) => item[key] === target[key]);
};
