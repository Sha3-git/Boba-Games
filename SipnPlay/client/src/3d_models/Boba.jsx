/**
 * Code Reference and Inspiration from 
 * https://github.com/adrianhajdin/3D_portfolio
 * by Adrian Hajdin
 */

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { a } from '@react-spring/three'; //animation enabled
import * as THREE from 'three'; // Import three.js for MeshToonMaterial

import bobaScene from '../assets/boba_tea_cup.glb';

const Boba = ({ setCurrentStage, ...props }) => {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(bobaScene);

  // Create toon materials
  const bobaCupMaterial = new THREE.MeshToonMaterial({ color: 0xffc0cb });
  const lidMaterial = new THREE.MeshToonMaterial({ color: 0xffffff });
  const strawMaterial = new THREE.MeshToonMaterial({ color: 0xb66cd4 });
  const milkTeaMaterial = new THREE.MeshToonMaterial({ color: 0xd46ca7 });

  useFrame(() => {
    // Rotate the model continuously
    islandRef.current.rotation.y += 0.0025;

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
        /*material={bobaCupMaterial}*/
        material={materials.Boba_Cup_Plastic_01}
        position={[0, 0.1, 0.1]}
        scale={[1, 0.1, 1]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Lid_01_Boba_Cup_Plastic_01_0.geometry}
        /*material={lidMaterial}*/
        material={materials.Boba_Cup_Plastic_01}
        position={[0, 4.5, 0.1]}
        scale={[1.5, 0.1, 1.5]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.straw_01_Boba_Straw_01_0.geometry}
        material={strawMaterial}
        position={[0, 4, 0.1]}
        scale={[0.3, 3.6, 0.3]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.pCylinder1_MILKTEA_0.geometry}
        /*material={milkTeaMaterial}*/
        material={materials.MILKTEA}
        position={[0, 0.3, 0.1]}
        scale={[0.8, 0.2, 0.8]}
        castShadow
        receiveShadow
      />
    </a.group>
  );
}

export default Boba;
