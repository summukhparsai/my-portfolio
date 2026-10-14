"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import type { Group } from "three";

function Shape({ clay }: { clay: boolean }) {
  const group = useRef<Group>(null);
  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.35;
    g.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    g.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
  });
  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.05, 0]} />
        <meshStandardMaterial
          color={clay ? "#d3d6dc" : "#a9a5d8"}
          flatShading
          roughness={clay ? 0.9 : 0.25}
          metalness={clay ? 0 : 0.3}
          transparent
          opacity={clay ? 1 : 0.88}
        />
      </mesh>
      <mesh scale={1.3}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color={clay ? "#9ea2aa" : "#ffffff"} wireframe transparent opacity={0.35} />
      </mesh>
      <mesh position={[1.7, 0.55, 0]}>
        <octahedronGeometry args={[0.2]} />
        <meshStandardMaterial color={clay ? "#b9bcc3" : "#e6e4ff"} flatShading />
      </mesh>
    </group>
  );
}

class Boundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function canUse3D(): boolean {
  try {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowPower = (navigator.hardwareConcurrency ?? 4) <= 2;
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl2") || c.getContext("webgl");
    return !!gl && !reduce && !lowPower;
  } catch {
    return false;
  }
}

export default function Scene() {
  const [ok, setOk] = useState(false);
  const [clay, setClay] = useState(false);

  useEffect(() => {
    setOk(canUse3D());
    const root = document.documentElement;
    const sync = () => setClay(root.getAttribute("data-theme") === "clay");
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  const orb = <div className="orb" aria-hidden="true" />;
  if (!ok) return orb;
  return (
    <Boundary fallback={orb}>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.2], fov: 45 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={clay ? 1.1 : 0.7} />
        <directionalLight position={[3, 4, 5]} intensity={clay ? 1.2 : 2} />
        <Shape clay={clay} />
      </Canvas>
    </Boundary>
  );
}
