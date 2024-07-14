/**
 * Code Reference and Inspiration from 
 * https://github.com/adrianhajdin/3D_portfolio
 * by Adrian Hajdin
 */


import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { a } from '@react-spring/three'; //animation enabled

import bobaScene from '../assets/boba_tea_cup.glb';

const Boba = ({ setCurrentStage, ...props }) => {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(bobaScene);

  useFrame(() => {
    // Rotate the model continuously
    islandRef.current.rotation.y += 0.01;

    // Determine the current stage based on island's orientation
    const rotation = islandRef.current.rotation.y;

    const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
  });

  return (
    <a.group ref={islandRef} {...props} >
      <mesh
        geometry={nodes.Cup_01_Boba_Cup_Plastic_01_0.geometry}
        material={materials.Boba_Cup_Plastic_01}
        position={[0, 0.1, 0.1]}
        scale={[1, 0.1, 1]}
      />
      <mesh
        geometry={nodes.Lid_01_Boba_Cup_Plastic_01_0.geometry}
        material={materials.Boba_Cup_Plastic_01}
        position={[0, 4.5, 0.1]}
        scale={[1.5, 0.1, 1.5]}
      />
      <mesh
        geometry={nodes.straw_01_Boba_Straw_01_0.geometry}
        material={materials.Boba_Straw_01}
        position={[0, 4, 0.1]}
        scale={[0.3, 3.6, 0.3]}
      />
      <mesh
        geometry={nodes.pCylinder1_MILKTEA_0.geometry}
        material={materials.MILKTEA}
        position={[0, 0.3, 0.1]}
        scale={[0.8, 0.2, 0.8]}
      />
    </a.group>
  );
}

export default Boba;
