import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

const Blob = () => {
    const materialRef = useRef();

    useFrame(({ clock, mouse }) => {
        if (materialRef.current) {
            materialRef.current.time = clock.getElapsedTime();
            const distortStrength = THREE.MathUtils.lerp(0.3, 0.8, Math.abs(mouse.x));
            materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, distortStrength, 0.05);
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            {/* Reduced scale slightly to prevent clipping at edges */}
            <Sphere args={[1, 128, 128]} scale={[1.6, 1.6, 1.6]}>
                <MeshDistortMaterial
                    ref={materialRef}
                    color="#f0f0f0"       // Brighter clean silver
                    roughness={0.05}      // Sharper reflections
                    metalness={0.9}
                    distort={0.4}
                    speed={2}
                />
            </Sphere>
        </Float>
    );
};

const LiquidChrome = () => {
    return (
        <div className="w-full h-[500px] cursor-pointer">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                {/* Environment provides reflections (critical for metal) */}
                <Environment preset="city" />

                {/* Stronger lights to make it pop against black bg */}
                <ambientLight intensity={1} />
                <directionalLight position={[5, 10, 5]} intensity={4} color="#ffffff" />
                <pointLight position={[-10, -10, -5]} intensity={10} color="#4d4dff" />
                <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={5} />

                <Blob />
            </Canvas>
        </div>
    );
};

export default LiquidChrome;
