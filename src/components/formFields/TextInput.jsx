export default function TextInput({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  type = "text",
}) {
  return (
    <div className="space-y-2 px-8">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm px-8">{error}</p>}
    </div>
  );
}
