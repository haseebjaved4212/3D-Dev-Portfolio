"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Float, Sparkles } from "@react-three/drei";

const HeroContent = () => {
    const meshRef = useRef<any>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} scale={2.5}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color="#915eff" wireframe />
            </mesh>
            <Sparkles count={100} scale={6} size={4} speed={0.4} opacity={0.5} color="#915eff" />
        </Float>
    );
}

const HeroCanvas = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            gl={{ preserveDrawingBuffer: true }}
            className="w-full h-full"
        >
            <Suspense fallback={null}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <HeroContent />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default HeroCanvas;
