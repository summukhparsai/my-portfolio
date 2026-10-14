"use client";
import dynamic from "next/dynamic";

// The 3D scene is loaded only in the browser and never blocks the page.
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <div className="orb" aria-hidden="true" />,
});

export default function HeroVisual() {
  return (
    <div className="hero-3d" aria-hidden="true">
      <Scene />
    </div>
  );
}
