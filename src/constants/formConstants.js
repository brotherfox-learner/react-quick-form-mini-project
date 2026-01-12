/**
 * Form Constants
 * เก็บ constants ที่ใช้ใน form เช่น error messages, field names
 */

export const ERROR_MESSAGES = {
  NAME_REQUIRED: "โปรดใส่ชื่อของคุณ",
  NAME_INVALID: "ชื่อสามารถมีเฉพาะตัวอักษรเท่านั้น",
  EMAIL_REQUIRED: "โปรดใส่อีเมลของคุณ",
  EMAIL_INVALID: "รูปแบบอีเมลไม่ถูกต้อง",
  MOVIE_REQUIRED: "กรุณาเลือกหนังที่คุณชอบ",
};

export const FORM_FIELDS = {
  NAME: "name",
  EMAIL: "email",
  MOVIE: "movie",
  COMMENT: "comment",
};

export const PLACEHOLDERS = {
  NAME: "กรุณากรอกชื่อของคุณ",
  EMAIL: "example@email.com",
  COMMENT: "พิมพ์ความคิดเห็นเกี่ยวกับหนังที่นี่...",
};
