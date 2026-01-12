export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  error,
  required = false,
}) {
  return (
    <div className="space-y-3 px-8">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`space-y-3 ${
          error ? "border-2 border-red-500 rounded-lg p-2" : ""
        }`}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <input
              type="radio"
              id={option.value}
              name={name}
              className="mt-1 w-4 h-4 text-purple-600 focus:ring-purple-500 cursor-pointer accent-black"
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            <label htmlFor={option.value} className="flex-1 cursor-pointer">
              <div className="font-medium text-gray-900">{option.label}</div>
              {option.subtitle && (
                <div className="text-sm text-gray-400 mt-0.5">
                  {option.subtitle}
                </div>
              )}
            </label>
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm px-8">{error}</p>}
    </div>
  );
}
