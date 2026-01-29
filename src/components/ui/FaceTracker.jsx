import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

// A placeholder "Face" component until the user provides a .glb model
const Head = () => {
    const meshRef = useRef();
    // Store mouse position in a ref to avoid re-renders, default to center
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Global mouse move handler
        const handleMouseMove = (event) => {
            // Normalize coordinates to -1 to 1 based on window size
            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame(() => {
        if (!meshRef.current) return;

        // Smooth rotation to follow global mouse position
        const targetX = mouseRef.current.y * 0.5; // Look up/down
        const targetY = mouseRef.current.x * 0.5; // Look left/right

        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.1);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.1);
    });

    return (
        <group ref={meshRef}>
            {/* Head Shape */}
            <Sphere args={[1.2, 64, 64]} scale={[1, 1.2, 1]}>
                <meshStandardMaterial
                    color="#e0e0e0"
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>

            {/* Eyes (to show direction) */}
            <group position={[0, 0.1, 0.9]}>
                <Sphere position={[-0.4, 0, 0]} args={[0.15, 32, 32]}>
                    <meshStandardMaterial color="black" />
                </Sphere>
                <Sphere position={[0.4, 0, 0]} args={[0.15, 32, 32]}>
                    <meshStandardMaterial color="black" />
                </Sphere>
            </group>

            {/* Dynamic Lighting from the "face" */}
            <pointLight position={[0, 0, 2]} intensity={2} color="#4d4dff" distance={3} />
        </group>
    );
};

const FaceTracker = () => {
    return (
        <div className="w-full h-[400px] md:h-[600px] cursor-move">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="purple" />

                <Head />
            </Canvas>
        </div>
    );
};

export default FaceTracker;
