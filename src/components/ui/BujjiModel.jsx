import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { Info, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Model = () => {
    const meshRef = useRef();
    // distinct model path for public folder
    const { scene } = useGLTF("/buggi2.glb");
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame(() => {
        if (!meshRef.current) return;

        // Smooth rotation to look at cursor
        const targetX = -mouseRef.current.y * 0.3; // Look up/down (really inverted now)
        const targetY = mouseRef.current.x * 0.3; // Look left/right

        // Lerp for smooth movement
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.1);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.1);
    });

    return (
        <group ref={meshRef}>
            <primitive
                object={scene}
                scale={2.9}
                // CHANGE POSITION HERE: [x, y, z]
                // 1st number: Left/Right (negative = left)
                // 2nd number: Up/Down (negative = down)
                // 3rd number: Forward/Back
                position={[0, 0, 0]}
            />
        </group>
    );
};

const BujjiModel = () => {
    const [showCredits, setShowCredits] = useState(false);

    return (
        <div className="relative w-full h-[500px] cursor-pointer group">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                {/* CHANGE LIGHTING HERE: Decrease intensity for darker look */}
                <ambientLight intensity={0.05} />
                <spotLight position={[1, 1, 5]} angle={0.1} penumbra={1} intensity={0.05} />
                <Environment preset="city" />

                <Model />

                <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
            </Canvas>

            {/* Credits Container - Hover Handling */}
            <div
                className="absolute bottom-4 right-4 z-50 flex flex-col items-end"
                onMouseEnter={() => setShowCredits(true)}
                onMouseLeave={() => setShowCredits(false)}
            >
                {/* Credits Modal */}
                <AnimatePresence>
                    {showCredits && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            className="bg-black/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl text-xs text-gray-400 mb-4 shadow-2xl max-w-xs"
                        >
                            <h3 className="text-white font-medium mb-1">3D Model Credits</h3>
                            <p className="leading-relaxed">
                                <a
                                    href="https://skfb.ly/oXFMJ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    "BUJJI_KALKI 2898 AD"
                                </a>
                                {" "}by nirmitsri111 is licensed under{" "}
                                <a
                                    href="http://creativecommons.org/licenses/by/4.0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    Creative Commons Attribution
                                </a>.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Info Icon Button */}
                <button
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white/50 hover:text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Model Credits"
                >
                    <Info size={20} />
                </button>
            </div>
        </div>
    );
};

useGLTF.preload("/buggi2.glb");

export default BujjiModel;
