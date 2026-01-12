import movies from "../data/movies";
import MovieEditIcon from "@mui/icons-material/MovieEdit";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";
import { validateName, validateEmail } from "../utils/validation";

export default function MovieForm() {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  const handleReset = () => {
    setFormData({});
    setIsSubmitted(false);
    setIsValidForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (
      isSubmitted &&
      getNameError() === "" &&
      getEmailError() === "" &&
      getMovieError() === ""
    ) {
      setIsValidForm(true);
    }
  };

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
    return !formData.movie ? "กรุณาเลือกหนังที่คุณชอบ" : "";
  };

  return (
    <>
      {!isValidForm ? (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
          <div className="max-w-xl mx-auto">
            {/* Header */}
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-2xl shadow-lg">
              <div className="flex items-center justify-start gap-3 px-8 py-6">
                <MovieEditIcon className="text-3xl" fontSize="large" />
                <h1 className="text-3xl font-bold">Movie Survey</h1>
              </div>
            </header>

            {/* Form Card */}
            <div className="bg-white rounded-b-2xl shadow-xl py-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="space-y-2 px-8">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ชื่อ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                    placeholder="กรุณากรอกชื่อของคุณ"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all ${
                      getNameError() ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {getNameError() && (
                    <p className="text-red-500 text-sm">{getNameError()}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2 px-8">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    อีเมล <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all ${
                      getEmailError() ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {getEmailError() && (
                    <p className="text-red-500 text-sm">{getEmailError()}</p>
                  )}
                </div>

                {/* Movie Selection */}
                <div className="space-y-3 px-8 ">
                  <label className="block text-sm font-medium text-gray-700">
                    เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
                  </label>
                  <div
                    className={`space-y-3 ${
                      getMovieError()
                        ? "border-2 border-red-500 rounded-lg p-2"
                        : ""
                    }`}
                  >
                    {movies.map((movie) => (
                      <div
                        key={movie.title}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <input
                          type="radio"
                          id={movie.title}
                          name="movie"
                          className="mt-1 w-4 h-4 text-purple-600 focus:ring-purple-500 cursor-pointer accent-black"
                          value={movie.title}
                          checked={formData.movie === movie.title}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor={movie.title}
                          className="flex-1 cursor-pointer"
                        >
                          <div className="font-medium text-gray-900">
                            {movie.title} ({movie.year})
                          </div>
                          <div className="text-sm text-gray-400 mt-0.5">
                            Director: {movie.director}
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                  {getMovieError() && (
                    <p className="text-red-500 text-sm">{getMovieError()}</p>
                  )}
                </div>

                {/* Comment Field */}
                <div className="space-y-2 px-8">
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ความคิดเห็นเกี่ยวกับหนัง
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows="4"
                    placeholder="พิมพ์ความคิดเห็นเกี่ยวกับหนังที่นี่..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                    value={formData.comment || ""}
                    onChange={handleChange}
                  />
                </div>

                {/* Divider */}
                <hr className="my-4 border-gray-200 " />

                {/* Buttons */}
                <div className="flex justify-between gap-3 px-8 pt-2">
                  <button
                    type="button"
                    className="flex-1 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 max-w-[100px]"
                    onClick={handleReset}
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
      ) : (
        // ถ้าส่งแบบสำรวจสำเร็จ
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
          <div className="max-w-xl mx-auto">
            {/* Header */}
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-2xl shadow-lg">
              <div className="flex items-center justify-start gap-3 px-8 py-6">
                <MovieEditIcon className="text-3xl" fontSize="large" />
                <h1 className="text-3xl font-bold">Movie Survey</h1>
              </div>
            </header>

            {/* Success Message */}
            <div className="bg-white rounded-b-2xl shadow-xl py-8 px-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircleOutlineIcon
                    className="text-green-600"
                    fontSize="large"
                  />
                  <h2 className="text-xl font-semibold text-green-800">
                    ส่งแบบสำรวจสำเร็จ!
                  </h2>
                </div>

                {/* Form Data Display */}
                <div className="space-y-3 text-gray-700">
                  {/* Name */}
                  <div className="flex gap-2">
                    <span className="font-medium min-w-[100px]">ชื่อ:</span>
                    <span>{formData.name}</span>
                  </div>
                  {/* Email */}
                  <div className="flex gap-2">
                    <span className="font-medium min-w-[100px]">อีเมล:</span>
                    <span>{formData.email}</span>
                  </div>
                  {/* Movie */}
                  <div className="flex gap-2">
                    <span className="font-medium min-w-[100px]">
                      หนังที่เลือก:
                    </span>
                    <span className="text-violet-600">{formData.movie}</span>
                  </div>

                  {/* Comment */}
                  <div className="pt-3 border-t border-green-200">
                    <span className="font-medium block mb-2">ความคิดเห็น:</span>
                    <p className="text-gray-600 p-3 ">
                      {formData.comment || "-"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <button
                type="button"
                onClick={handleReset}
                className="w-full px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <RestartAltIcon fontSize="small" />
                ทำแบบสำรวจใหม่
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
