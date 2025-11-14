/*
  Auto-generated base by: https://github.com/pmndrs/gltfjsx
  Enhanced manually with motion and floating animation
  Model: GenoModel3D.glb
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring } from "motion/react";

export function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/GenoModel3D.glb");

  // Animasi rotasi ringan
  useFrame(() => {
    if (group.current) group.current.rotation.y += 0.005;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["tripo_node_7e89830c-2646-479b-a169-7394b0584b44"]?.geometry
        }
        material={
          materials["tripo_material_7e89830c-2646-479b-a169-7394b0584b44"]
        }
      />
    </group>
  );
}

useGLTF.preload("/GenoModel3D.glb");
