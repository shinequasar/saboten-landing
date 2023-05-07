import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Html } from '@react-three/drei'
import Model from '../asset/3D/Model'

function Rig({ children }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.mouse.x * Math.PI) / 20, 0.25)
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 20, 0.25)
  })
  return <group ref={ref}>{children}</group>
}

export default function MoveLogo() {
  return (
    <>
      <Canvas camera={{ position: [0, -10, 65], fov: 50, zoom:1 }} dpr={[1, 2]}
      style={{ width: '100vw', height: '100vh' }}>
        <pointLight position={[100, 100, 100]} intensity={0.8} />
        <hemisphereLight color="#ffffff" groundColor="#b9b9b9" position={[-7, 25, 13]} intensity={0.85} />
        <Suspense fallback={null}>
          <group position={[0, 10, 0]}>
            <Rig>
              <Model/>
            </Rig>
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -35, 0]}
              opacity={0.25}
              width={100}
              height={100}
              blur={2}
              far={50}
            />
          </group>
          <Html>
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            fontSize:'35px', width:'350px', color:'#00C064',fontWeight:'bold' }}>
              선인장에서 만나보세요!
            </div>
          </Html>
        </Suspense>
      </Canvas>
    </>
  )
}