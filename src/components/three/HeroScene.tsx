import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Line } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/* ---------- Particle field ---------- */
function Particles({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03;
      ref.current.rotation.x += delta * 0.012;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#38bdf8"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ---------- Rotating wireframe globe ---------- */
function Globe() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.12;
  });
  return (
    <group ref={ref}>
      <Icosahedron args={[2.1, 3]}>
        <meshBasicMaterial
          color="#1d4ed8"
          wireframe
          transparent
          opacity={0.22}
        />
      </Icosahedron>
      <Icosahedron args={[2.12, 1]}>
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.32}
        />
      </Icosahedron>
    </group>
  );
}

/* ---------- Network nodes & links ---------- */
function Network() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 9; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 5.5,
          (Math.random() - 0.5) * 5.5,
          (Math.random() - 0.5) * 5.5
        )
      );
    }
    return pts;
  }, []);

  const links = useMemo(() => {
    const ls: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 3.4) ls.push([nodes[i], nodes[j]]);
      }
    }
    return ls;
  }, [nodes]);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y -= delta * 0.05;
      group.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <mesh key={i} position={n}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshBasicMaterial color="#7c8aff" />
        </mesh>
      ))}
      {links.map((l, i) => (
        <Line
          key={i}
          points={[l[0], l[1]]}
          color="#3b82f6"
          lineWidth={1}
          transparent
          opacity={0.25}
        />
      ))}
    </group>
  );
}

/* ---------- Central glowing shield (octahedron core) ---------- */
function ShieldCore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.12;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref}>
        <octahedronGeometry args={[1.15, 0]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0284c7"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.2}
          flatShading
        />
      </mesh>
      <mesh scale={1.45}>
        <octahedronGeometry args={[1.15, 0]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#38bdf8" />
      <pointLight position={[-5, -3, 2]} intensity={0.8} color="#7c3aed" />
      <ShieldCore />
      <Globe />
      <Network />
      <Particles count={500} />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
