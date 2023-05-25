import { defineConfig } from 'vite'
import * as path from "path";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({  
  server: { 
      // https: {

      // }
   },
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement:  path.resolve(__dirname, "./src"),}],
  },
  root: "./",
  build: {
    outDir: "dist",
  },
  // base: "/reacttest/",
  publicDir: "public"
})
