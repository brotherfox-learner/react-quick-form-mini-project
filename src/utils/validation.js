/**
 * Validation Utilities
 * ฟังก์ชันสำหรับ validate form inputs
 */

import { ERROR_MESSAGES } from "../constants/formConstants";

// Regular expressions สำหรับ validation
const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_NAME = /^[\u0E00-\u0EFFa-zA-Z\s]+$/; // รองรับภาษาไทย, อังกฤษ และช่องว่าง

/**
 * Validate name field
 * @param {string} name - ชื่อที่ต้องการ validate
 * @returns {string} Error message หรือ empty string ถ้าถูกต้อง
 */
export const validateName = (name) => {
  if (!name || name.trim() === "") {
    return ERROR_MESSAGES.NAME_REQUIRED;
  }
  if (!REGEX_NAME.test(name.trim())) {
    return ERROR_MESSAGES.NAME_INVALID;
  }
  return "";
};

/**
 * Validate email field
 * @param {string} email - Email ที่ต้องการ validate
 * @returns {string} Error message หรือ empty string ถ้าถูกต้อง
 */
export const validateEmail = (email) => {
  if (!email || email.trim() === "") {
    return ERROR_MESSAGES.EMAIL_REQUIRED;
  }
  if (!REGEX_EMAIL.test(email.trim())) {
    return ERROR_MESSAGES.EMAIL_INVALID;
  }
  return "";
};