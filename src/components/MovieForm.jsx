import { useState } from "react";
import movies from "../data/movies";
import { PLACEHOLDERS, ERROR_MESSAGES } from "../constants/formConstants";
import { validateName, validateEmail } from "../utils/validation";
import FormHeader from "./FormHeader";
import SuccessScreen from "./SuccessScreen";
import TextInput from "./formFields/TextInput";
import RadioGroup from "./formFields/RadioGroup";
import Textarea from "./formFields/Textarea";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export default function MovieForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    movie: "",
    comment: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  // อัพเดท form data เมื่อผู้ใช้กรอกข้อมูล
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Reset form กลับไปเป็นค่าเริ่มต้น
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      movie: "",
      comment: "",
    });
    setIsSubmitted(false);
    setIsValidForm(false);
  };

  // ตรวจสอบ error ของ field ต่างๆ (แสดง error เมื่อ submit แล้วเท่านั้น)
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

  // จัดการการ submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // ตรวจสอบ validation โดยตรง
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const movieError = !formData.movie ? ERROR_MESSAGES.MOVIE_REQUIRED : "";

    // ถ้าไม่มี error ใดๆ ให้ set isValidForm เป็น true
    if (!nameError && !emailError && !movieError) {
      setIsValidForm(true);
    }
  };

  // แปลง movies array เป็น format ที่ RadioGroup component ต้องการ
  const movieOptions = movies.map((movie) => ({
    value: movie.title,
    label: `${movie.title} (${movie.year})`,
    subtitle: `Director: ${movie.director}`,
  }));

  // ถ้า form valid แล้วแสดง success screen
  if (isValidForm) {
    return <SuccessScreen formData={formData} onReset={handleReset} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-xl mx-auto">
        <FormHeader />

        {/* Form Card */}
        <div className="bg-white rounded-b-2xl shadow-xl py-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <TextInput
              id="name"
              name="name"
              label="ชื่อ"
              value={formData.name}
              onChange={handleChange}
              placeholder={PLACEHOLDERS.NAME}
              error={getNameError()}
              required
            />

            {/* Email Field */}
            <TextInput
              id="email"
              name="email"
              label="อีเมล"
              type="text"
              value={formData.email}
              onChange={handleChange}
              placeholder={PLACEHOLDERS.EMAIL}
              error={getEmailError()}
              required
            />

            {/* Movie Selection */}
            <RadioGroup
              label="เลือกหนังที่คุณชอบ"
              name="movie"
              options={movieOptions}
              value={formData.movie}
              onChange={handleChange}
              error={getMovieError()}
              required
            />

            {/* Comment Field */}
            <Textarea
              id="comment"
              name="comment"
              label="ความคิดเห็นเกี่ยวกับหนัง"
              value={formData.comment}
              onChange={handleChange}
              placeholder={PLACEHOLDERS.COMMENT}
              rows={4}
            />

            {/* Divider */}
            <hr className="my-4 border-gray-200" />

            {/* Buttons */}
            <div className="flex justify-between gap-3 px-8 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 max-w-[100px]"
              >
                <RestartAltIcon className="rotate-330" fontSize="small" />
                รีเซ็ต
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 max-w-[180px]"
              >
                <SendIcon className="rotate-330" fontSize="small" />
                ส่งแบบสำรวจ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
