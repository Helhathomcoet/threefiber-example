import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ModelBuilding(props) {
  const { nodes, materials } = useGLTF("batiment.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        position={[10, -10, 10]}
        rotateZ={90}
        castShadow
        receiveShadow
        geometry={nodes.Rg08_Cube014.geometry}
        material={nodes.Rg08_Cube014.material}
      />
    </group>
  );
}

useGLTF.preload("batiment.gltf");