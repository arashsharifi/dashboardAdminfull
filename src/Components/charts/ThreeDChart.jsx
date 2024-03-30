import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeDChart = () => {
  const group = useRef();

  // اضافه کردن مدل‌ها
  const models = [
    { url: "path/to/model1.glb", position: [-1, 0, 0] },
    { url: "path/to/model2.glb", position: [1, 0, 0] },
  ];

  // فانکشن برای بارگذاری مدل‌ها
  const loadModels = (models) => {
    const loader = new GLTFLoader();
    models.forEach((model) => {
      loader.load(
        model.url,
        (gltf) => {
          const newModel = gltf.scene.clone();
          newModel.position.set(...model.position);
          group.current.add(newModel);
        },
        undefined,
        (error) => {
          console.error("Error loading model:", error);
        }
      );
    });
  };

  useFrame(() => (group.current.rotation.y += 0.01));

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <group ref={group} />
      <OrbitControls />
      {loadModels(models)}
    </Canvas>
  );
};

export default ThreeDChart;
