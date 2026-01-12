import MovieEditIcon from "@mui/icons-material/MovieEdit";

export default function FormHeader() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-2xl shadow-lg">
      <div className="flex items-center justify-start gap-3 px-8 py-6">
        <MovieEditIcon className="text-3xl" fontSize="large" />
        <h1 className="text-3xl font-bold">Movie Survey</h1>
      </div>
    </header>
  );
}
