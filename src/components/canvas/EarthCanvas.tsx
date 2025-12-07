"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Sphere, MeshDistortMaterial } from "@react-three/drei";

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Sphere args={[1, 100, 200]} scale={2.5}>
                    <MeshDistortMaterial
                        color="#915eff"
                        attach="material"
                        distort={0.6}
                        speed={1.5}
                        wireframe
                    />
                </Sphere>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default EarthCanvas;
