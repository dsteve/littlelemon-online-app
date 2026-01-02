import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import path from "path";
import { fileURLToPath } from "url";
import flowbiteReact from "flowbite-react/plugin/vite";

// Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), flowbiteReact()],
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "src"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@components": path.resolve(__dirname, "src/components"),
          "@assets": path.resolve(__dirname, "src/assets"),
          "@utils": path.resolve(__dirname, "src/utils"),
        }
    }
})