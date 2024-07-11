import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react';
import { a } from '@react-spring/three'; //animation enabled

const Boba = (props) => {
    const islandRef = useRef();
    const { nodes, materials } = useGLTF('/scene.gltf')
    return (
        <a.group ref={islandRef} >
            <mesh
                geometry={nodes.Cup_01_Boba_Cup_Plastic_01_0.geometry}
                material={materials.Boba_Cup_Plastic_01}
            />
            <mesh
                geometry={nodes.Lid_01_Boba_Cup_Plastic_01_0.geometry}
                material={materials.Boba_Cup_Plastic_01}
            />
            <mesh
                geometry={nodes.straw_01_Boba_Straw_01_0.geometry}
                material={materials.Boba_Straw_01}
            />
            <mesh
                geometry={nodes.pCylinder1_MILKTEA_0.geometry}
                material={materials.MILKTEA}
            />
        </a.group>
    )
}
useGLTF.preload('/scene.gltf')
export default Boba