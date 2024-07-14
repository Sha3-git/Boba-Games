import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { a } from '@react-spring/three'; //animation enabled
import bobaScene from '../assets/coffee_shop_cup.glb';
import * as THREE from 'three';

const Boba = ({ setCurrentStage, ...props }) => {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(bobaScene);

  useFrame(() => {
    // Rotate the parent group continuously
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
    <a.group ref={islandRef} {...props}>
        <group rotation={[-Math.PI / 3, 0, 0]} scale={0.233}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 12, 0]} scale={[7.573, 8.439, 7.573]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={new THREE.MeshStandardMaterial({ color: 0xb23b3d })}
              position={[-0.001, -0.083, 0]}
              scale={[0.636, 0.41, 0.636]}
            />
            <mesh
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.material_1}
              position={[0, 0.724, -0.001]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.036, 0.628, 1.036]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={new THREE.MeshStandardMaterial({ color: 0xc7c0a8 })}
              position={[-0.001, -1, 0]}
              scale={[0.636, 0.41, 0.636]}
            />
          </group>
        </group>
      </group>
    </a.group>
  );
};

export default Boba;
