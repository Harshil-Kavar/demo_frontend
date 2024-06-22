import { LoginUser } from "../models/UserModels";

export const validateUserCredential = (cred: LoginUser) => {
  if (!cred.email || cred.email.trim().length <= 0) {
    return false;
  }
  if (!cred.password || cred.password.trim().length <= 0) {
    return false;
  }
  return true;
};
