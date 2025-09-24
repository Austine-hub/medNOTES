import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// ✅ Vercel/Netlify friendly config (no base path needed)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // default for Vercel, but good to be explicit
  },
});
