import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FormHeader from "./FormHeader";

export default function SuccessScreen({ formData, onReset }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-xl mx-auto">
        <FormHeader />

        <div className="bg-white rounded-b-2xl shadow-xl py-8 px-8">
          {/* Success Message with Green Background */}
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
              <div className="flex gap-2">
                <span className="font-medium min-w-[100px]">ชื่อ:</span>
                <span>{formData.name}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium min-w-[100px]">อีเมล:</span>
                <span>{formData.email}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium min-w-[100px]">หนังที่เลือก:</span>
                <span className="text-violet-600">{formData.movie}</span>
              </div>

              <div className="pt-3 border-t border-green-200">
                <span className="font-medium block mb-2">ความคิดเห็น:</span>
                <p className="text-gray-600 p-3">{formData.comment || "-"}</p>
              </div>
            </div>
          </div>

          {/* Reset Button */}
          <button
            type="button"
            onClick={onReset}
            className="w-full px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <RestartAltIcon fontSize="small" />
            ทำแบบสำรวจใหม่
          </button>
        </div>
      </div>
    </div>
  );
}
