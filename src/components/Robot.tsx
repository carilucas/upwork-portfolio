"use client"

import { useGLTF } from '@react-three/drei'
import { ThreeElements } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

// Define the type for the GLTF result
type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
  }
  materials: {
    blinn2SG: THREE.MeshStandardMaterial
    blinn3SG: THREE.MeshStandardMaterial
  }
}

export const Robot = (props:ThreeElements['group']) => {
    const { nodes, materials } = useGLTF('/models/robot.glb') as unknown as GLTFResult ;
  
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.blinn2SG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.blinn3SG}
          />
        </group>
      </group>
    )
}

useGLTF.preload('/assets/models/robot.glb')



