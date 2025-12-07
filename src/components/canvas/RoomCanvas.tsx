"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment, ContactShadows } from "@react-three/drei";

const Room = ({ isMobile }: { isMobile: boolean }) => {
    const computer = useGLTF("/3D-Models/optimized-room.glb");

    return (
        <mesh>
            <hemisphereLight intensity={2} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                object={computer.scene}
                scale={isMobile ? 1.5 : 2.2}
                position={isMobile ? [0, -3, -2.2] : [0, -4.5, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            />
        </mesh>
    );
};

const RoomCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 4}
                    enablePan={false}
                />
                <Room isMobile={isMobile} />
                <Environment preset="city" />
                <ContactShadows position={[0, -4.5, 0]} opacity={0.5} scale={10} blur={1} far={10} resolution={256} color="#000000" />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default RoomCanvas;
