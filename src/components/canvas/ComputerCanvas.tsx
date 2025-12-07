"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computer = () => {
    const computer = useGLTF("/3D-Models/computer-optimized-transformed.glb");

    return (
        <primitive
            object={computer.scene}
            scale={1.5}
            position={[0, -1, 0]}
            rotation={[0, 0, 0]}
        />
    );
};

const ComputerCanvas = () => {
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
                <Computer />
                <hemisphereLight intensity={0.15} groundColor="black" />
                <pointLight intensity={1} />
                <spotLight
                    position={[-20, 50, 10]}
                    angle={0.12}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize={1024}
                />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputerCanvas;
