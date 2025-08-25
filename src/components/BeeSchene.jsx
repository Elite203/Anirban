// BeeScene.jsx - NO CHANGES NEEDED
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import BeeModel from "./BeeModel";
import BeeController from "./BeeController";

export default function BeeScene() {
  const beeRef = useRef();

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[100] pointer-events-none">
      <Canvas
        camera={{
          position: [0, 0, 15],
          fov: 20,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <BeeModel ref={beeRef} />
      </Canvas>
      <BeeController modelRef={beeRef} />
    </div>
  );
}
