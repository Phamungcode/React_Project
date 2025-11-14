import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Model } from "../components/Geno3Dmodel";

function RotatingScene({ scaleFactor }) {
  const group = useRef();
  const ring = useRef();

  useFrame(() => {
    if (group.current) group.current.rotation.y += 0.001;
    if (ring.current) ring.current.rotation.y -= 0.002;
  });

  const textCount = 11;
  const radius = 5 * scaleFactor;

  return (
    <group ref={group}>
      {/* MODEL */}
      <Model
        scale={[5 * scaleFactor, 5 * scaleFactor, 5 * scaleFactor]}
        position={[0, -1.2 * scaleFactor, 0]}
      />

      {/* RING TEKS */}
      <group ref={ring} position={[0, 0, 0]}>
        {Array.from({ length: textCount }).map((_, i) => {
          const angle = (i / textCount) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          return (
            <Text
              key={i}
              position={[x, 0.1 * scaleFactor, z]}
              rotation={[0, -angle + Math.PI / 2, 0]}
              fontSize={0.1 * scaleFactor}
              color="#fff"
            >
              Inspired by You — Designed by Me
            </Text>
          );
        })}
      </group>
    </group>
  );
}

const Geno3D = () => {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [cameraPos, setCameraPos] = useState([0, 1, 8]);

  // Deteksi ukuran layar & atur skala + posisi kamera
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 480) {
        setScaleFactor(0.6);
        setCameraPos([0, 1, 6]);
      } else if (width < 768) {
        setScaleFactor(0.8);
        setCameraPos([0, 1, 7]);
      } else if (width < 1200) {
        setScaleFactor(1);
        setCameraPos([0, 1, 8]);
      } else {
        setScaleFactor(1.2);
        setCameraPos([0, 1.2, 9]);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative w-full h-[60vh] overflow-hidden 
      bg-gradient-to-b from-black via-orange-600/80 to-black"
    >
      <Canvas
        camera={{ position: cameraPos, fov: 45 }}
        shadows
        className="z-10"
      >
        {/* Pencahayaan sinematik */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[6, 5, 3]}
          intensity={2.2}
          color="#ffd9b3"
          castShadow
        />
        <pointLight position={[-4, 2, -2]} intensity={1.5} color="#fff" />
        <spotLight
          position={[0, 6, -5]}
          angle={0.5}
          penumbra={1}
          intensity={1.8}
          color="#ffffff"
        />

        <RotatingScene scaleFactor={scaleFactor} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Geno3D;
