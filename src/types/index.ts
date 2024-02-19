export type User = {
  username: string;
  phoneNumber: string;
  password: string;
};

export type UserRegistration = {
  passwordConfirmation: string;
} & User;
