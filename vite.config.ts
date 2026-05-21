import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/prudhvi-3d-animated-portfolio/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          // Rapier physics WASM — heaviest dep, only used by TechStack (lazy loaded)
          if (id.includes("@react-three/rapier") || id.includes("@dimforge"))
            return "vendor-rapier";
          // GSAP — used across the app
          if (id.includes("gsap")) return "vendor-gsap";
          // Three.js + R3F + Drei + postprocessing all together
          // (postprocessing and three have circular imports — must stay in same chunk)
          if (
            id.includes("three") ||
            id.includes("@react-three") ||
            id.includes("postprocessing")
          )
            return "vendor-three";
        },
      },
    },
  },
});
