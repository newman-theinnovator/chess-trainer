import { Link } from "react-router-dom";

export default function Home() {
  const levels = [
    { name: "Beginner", value: "beginner" },
    { name: "Intermediate", value: "intermediate" },
    { name: "Advanced", value: "advanced" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8">Select Your Level</h1>

      <div className="grid gap-4 w-full max-w-sm">
        {levels.map(level => (
          <Link
            key={level.value}
            to={`/patterns/${level.value}`}
            className="bg-white shadow-md p-4 rounded-lg text-center text-xl font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            {level.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
