import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
};

const CanvasViewer = ({ selectedModel }) => {
  const modelPath = `/assets/${selectedModel}.glb`; // hoodie.glb or tshirt.glb

  return (
    <Canvas camera={{ position: [0, 1.5, 3], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
        <Environment preset="studio" />
      </Suspense>
      <OrbitControls enableZoom />
    </Canvas>
  );
};

export default CanvasViewer;
