import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Palette pulled to JS so the scene matches the CSS tokens. Kept in sync
// with :root in globals.css (--signal / --alert / --wire / --muted).
const SIGNAL = new THREE.Color("#4fd1a0");
const ALERT = new THREE.Color("#e0a05c");
const WIRE = new THREE.Color("#2a2e33");
const MUTED = new THREE.Color("#8a8f98");

const NODE_COUNT = 28; // enough to read as a real network, not a GPU stress test
const SPREAD = 9;

// Deterministic pseudo-random (no Math.random — stable across renders/SSR)
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildGraph() {
  const rand = mulberry32(20250803);
  const nodes = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push(
      new THREE.Vector3(
        (rand() - 0.5) * SPREAD * 1.8,
        (rand() - 0.5) * SPREAD,
        (rand() - 0.5) * SPREAD * 0.6
      )
    );
  }

  // Connect each node to its 2 nearest neighbours -> organic mesh, no orphans
  const edges = [];
  const seen = new Set();
  for (let i = 0; i < nodes.length; i++) {
    const dists = nodes
      .map((n, j) => ({ j, d: nodes[i].distanceTo(n) }))
      .filter((x) => x.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);
    for (const { j } of dists) {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) continue;
      seen.add(key);
      // Bow the line outward slightly so edges read as traces, not sticks
      const mid = nodes[i].clone().lerp(nodes[j], 0.5);
      mid.z += (rand() - 0.5) * 1.5;
      edges.push(
        new THREE.CatmullRomCurve3([nodes[i], mid, nodes[j]])
      );
    }
  }
  return { nodes, edges };
}

function Nodes({ nodes }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useMemo(() => {
    if (!meshRef.current) return;
  }, []);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = state.clock.elapsedTime;
    nodes.forEach((p, i) => {
      // Gentle breathing bob per node — phase offset by index
      const bob = Math.sin(t * 0.6 + i * 1.7) * 0.12;
      dummy.position.set(p.x, p.y + bob, p.z);
      const s = 0.12 + (i % 4 === 0 ? 0.06 : 0);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, nodes.length]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={SIGNAL} toneMapped={false} />
    </instancedMesh>
  );
}

function Edges({ edges }) {
  const geometries = useMemo(
    () =>
      edges.map((curve) => {
        const pts = curve.getPoints(24);
        return new THREE.BufferGeometry().setFromPoints(pts);
      }),
    [edges]
  );
  return (
    <group>
      {geometries.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial
            color={WIRE}
            transparent
            opacity={0.55}
            toneMapped={false}
          />
        </line>
      ))}
    </group>
  );
}

// Small emissive packets that walk each edge 0->1 — the "data moving" trick
function Packets({ edges }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  // One packet per edge, staggered start offsets & speeds (deterministic)
  const config = useMemo(() => {
    const rand = mulberry32(99);
    return edges.map(() => ({
      offset: rand(),
      speed: 0.06 + rand() * 0.09,
      warm: rand() > 0.82, // a few amber packets among the teal
    }));
  }, [edges]);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = state.clock.elapsedTime;
    edges.forEach((curve, i) => {
      const c = config[i];
      const u = (c.offset + t * c.speed) % 1;
      const p = curve.getPointAt(u);
      dummy.position.copy(p);
      dummy.scale.setScalar(0.07);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      mesh.setColorAt(i, c.warm ? ALERT : SIGNAL);
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, edges.length]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  );
}

// Subtle mouse-parallax: lerp camera toward a target offset, not OrbitControls
function ParallaxRig() {
  const { camera, pointer } = useThree();
  const target = useMemo(() => new THREE.Vector3(), []);
  useFrame(() => {
    target.set(pointer.x * 1.6, pointer.y * 1.0, 14);
    camera.position.lerp(target, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene() {
  const { nodes, edges } = useMemo(() => buildGraph(), []);
  return (
    <>
      <color attach="background" args={["#0e1013"]} />
      <fog attach="fog" args={["#0e1013", 12, 26]} />
      <Nodes nodes={nodes} />
      <Edges edges={edges} />
      <Packets edges={edges} />
      <ParallaxRig />
      <EffectComposer>
        <Bloom
          intensity={0.9}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}

export default function MeshScene({ paused }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 14], fov: 50 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      frameloop={paused ? "never" : "always"}
    >
      <Scene />
    </Canvas>
  );
}
