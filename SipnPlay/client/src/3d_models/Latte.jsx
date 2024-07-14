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

import bobaScene from '../assets/cafe_latte_with_art.glb';

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
      <group scale={0.05} position={[0, 4, 0]}>
        <group rotation={[-Math.PI / 4, 0, 0]} scale={45.313}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Saucer_Cup_0.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cup_Cup_0.geometry}
            material={materials.material}
            position={[0, 0, -0.048]}
            rotation={[0, 0, 0.196]}
            scale={1.148}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Latte_Latte_0.geometry}
            material={materials.Latte}
            position={[0, 0, 1.081]}
            rotation={[0, 0, 0.196]}
            scale={1.148}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spoon_Metal_0.geometry}
            material={materials.Metal}
            position={[-0.558, -0.777, 0.167]}
            rotation={[0, 0.018, 1.57]}
            scale={1.704}
          />
        </group>
      </group>
    </a.group>
  );
}

export default Boba;
