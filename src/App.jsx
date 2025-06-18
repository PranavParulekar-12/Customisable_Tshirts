import { useState } from "react";
import CanvasViewer from "./components/CanvasViewer";

function App() {
  const [model, setModel] = useState("hoodie");

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {/* Centered Top Buttons */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-6">
        <button
          onClick={() => setModel("hoodie")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Hoodie
        </button>
        <button
          onClick={() => setModel("tshirt")}
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        >
          T-Shirt
        </button>
      </div>

      {/* 3D Canvas */}
      <div className="w-full h-full">
        <CanvasViewer selectedModel={model} />
      </div>
    </div>
  );
}

export default App;
