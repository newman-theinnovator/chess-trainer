import { useState } from "react";
import { Chessboard } from "react-chessboard";

// 5 example positions using simple square-piece mapping
const positions = [
  { a1: "wR", e1: "wK", h1: "wR", a8: "bR", e8: "bK", h8: "bR" },
  { a1: "wK", d1: "wQ", h1: "wR", a8: "bK", d8: "bQ", h8: "bR" },
  { a1: "wK", b1: "wR", c1: "wB", a8: "bK", b8: "bR", c8: "bB" },
  { a1: "wK", e1: "wQ", a8: "bK", e8: "bQ" },
  { a1: "wK", a8: "bK" },
];

export default function Trainer() {
  const [index, setIndex] = useState(0);

  const nextPosition = () => setIndex((prev) => (prev + 1) % positions.length);
  const prevPosition = () => setIndex((prev) => (prev - 1 + positions.length) % positions.length);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-4 rounded shadow-lg flex flex-col items-center">
        <h1 className="text-xl font-bold mb-4">Trainer</h1>

        {/* Fixed-size wrapper to control board */}
        <div style={{ width: 360 }}>
          <Chessboard
            position={positions[index]}
            boardWidth={360}           // fixed size
            arePiecesDraggable={true}  // pieces draggable
          />
        </div>

        <div className="mt-4 flex justify-between w-full max-w-[360px]">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={prevPosition}
          >
            Previous
          </button>
          <div className="px-4 py-2 font-bold">{index + 1} / 5</div>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={nextPosition}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
