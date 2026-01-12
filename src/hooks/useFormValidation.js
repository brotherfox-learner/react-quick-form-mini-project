/**
 * Custom Hook: useFormValidation
 * จัดการ form validation logic และ state management
 */

import { useState } from "react";
import { validateName, validateEmail } from "../utils/validation";
import { ERROR_MESSAGES } from "../constants/formConstants";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  movie: "",
  comment: "",
};

export const useFormValidation = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  /**
   * อัพเดท form data เมื่อผู้ใช้กรอกข้อมูล
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Reset form กลับไปเป็นค่าเริ่มต้น
   */
  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setIsSubmitted(false);
    setIsValidForm(false);
  };

  /**
   * ตรวจสอบ error ของ field ต่างๆ
   * จะแสดง error เมื่อ submit แล้วเท่านั้น
   */
  const getNameError = () => {
    if (!isSubmitted) return "";
    return validateName(formData.name);
  };

  const getEmailError = () => {
    if (!isSubmitted) return "";
    return validateEmail(formData.email);
  };

  const getMovieError = () => {
    if (!isSubmitted) return "";
    return !formData.movie ? ERROR_MESSAGES.MOVIE_REQUIRED : "";
  };

  /**
   * จัดการการ submit form
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // ตรวจสอบ validation โดยตรง (ไม่ต้องรอ state update)
    // เพราะเราต้องการ validate ข้อมูลปัจจุบัน
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const movieError = !formData.movie ? ERROR_MESSAGES.MOVIE_REQUIRED : "";

    // ถ้าไม่มี error ใดๆ ให้ set isValidForm เป็น true
    if (!nameError && !emailError && !movieError) {
      setIsValidForm(true);
    }
  };

  return {
    formData,
    isSubmitted,
    isValidForm,
    handleChange,
    handleReset,
    handleSubmit,
    getNameError,
    getEmailError,
    getMovieError,
  };
};
