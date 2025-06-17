import { useState } from "react";
import CanvasViewer from "./components/CanvasViewer";

function App() {
  const [model, setModel] = useState("hoodie"); // 'hoodie' or 'tshirt'

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      {/* Buttons */}
      <div className="flex justify-center gap-4 p-4 bg-white shadow-md z-10">
        <button
          onClick={() => setModel("hoodie")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Hoodie
        </button>
        <button
          onClick={() => setModel("tshirt")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          T-Shirt
        </button>
      </div>

      {/* 3D Viewer */}
      <div className="flex-1">
        <CanvasViewer selectedModel={model} />
      </div>
    </div>
  );
}

export default App;
