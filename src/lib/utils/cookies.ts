import { setCookie, getCookie, deleteCookie } from "cookies-next";
import CryptoJS, { AES } from "crypto-js";

import { User } from "@/types";

const secretKey = "USER_SESSIOn";

export const encryptCookie = (data: Partial<User>) => {
  return AES.encrypt(JSON.stringify(data), secretKey).toString();
};

const decryptCookie = (value: string) => {
  return AES.decrypt(value, secretKey).toString(CryptoJS.enc.Utf8);
};

export const getSessionCookie = () => {
  const sessionCookie = getCookie("user_session");

  if (!sessionCookie) return null;
  return JSON.parse(decryptCookie(sessionCookie));
};

export const setSessionCookie = (value: Partial<User>) => {
  setCookie("user_session", encryptCookie(value), { maxAge: 60 });
};

export const removeSessionCookies = () => {
  deleteCookie("user_session");
};
