"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Preload } from "@react-three/drei";

const HeroCanvas = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <OrbitControls enableZoom={false} />
                <Sphere args={[1, 100, 200]} scale={2.4}>
                    <MeshDistortMaterial
                        color="#915eff"
                        attach="material"
                        distort={0.5}
                        speed={2}
                    />
                </Sphere>
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default HeroCanvas;
