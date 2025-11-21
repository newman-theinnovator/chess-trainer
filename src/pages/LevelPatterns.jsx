import { useParams, Link } from "react-router-dom";

export default function LevelPatterns() {
  const { level } = useParams();

  // Placeholder patterns per level
  const patterns = {
    beginner: ["Back Rank Mate", "Fool’s Mate", "Scholar’s Mate", "Simple Mate", "Two-Move Mate"],
    intermediate: ["Smothered Mate", "Pin Mate", "Discovered Check Mate", "Double Check Mate", "Greek Gift Mate"],
    advanced: ["Boden’s Mate", "Anastasia’s Mate", "Epaulette Mate", "Lolli Mate", "Back Rank Defense Mate"]
  };

  const levelPatterns = patterns[level] || [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Mating Patterns - {level.charAt(0).toUpperCase() + level.slice(1)}</h1>

      <div className="grid gap-4 max-w-md">
        {levelPatterns.map((pattern, index) => (
          <Link
            key={index}
            to={`/trainer/${level}-${index}`}
            className="bg-white shadow-md p-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            {pattern}
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Link to="/" className="text-blue-600 hover:underline">&larr; Back to Levels</Link>
      </div>
    </div>
  );
}
