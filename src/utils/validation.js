import { ERROR_MESSAGES } from "../constants/formConstants";

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_NAME = /^[\u0E00-\u0EFFa-zA-Z\s]+$/; 

export const validateName = (name) => {
  if (!name || name.trim() === "") {
    return ERROR_MESSAGES.NAME_REQUIRED;
  }
  if (!REGEX_NAME.test(name.trim())) {
    return ERROR_MESSAGES.NAME_INVALID;
  }
  return "";
};

export const validateEmail = (email) => {
  if (!email || email.trim() === "") {
    return ERROR_MESSAGES.EMAIL_REQUIRED;
  }
  if (!REGEX_EMAIL.test(email.trim())) {
    return ERROR_MESSAGES.EMAIL_INVALID;
  }
  return "";
};