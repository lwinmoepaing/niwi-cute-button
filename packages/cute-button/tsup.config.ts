import { defineConfig } from "tsup";

export default defineConfig([
  // Standard CJS output
  {
    entry: ["src/index.ts"],
    format: ["cjs"],
    outExtension: () => ({ js: ".cjs" }), // Output file as .cjs
    dts: true, // Generate TypeScript declaration files
    sourcemap: true, // Generate sourcemaps
    clean: true, // Clean the output directory before each build
    minify: false, // No minification for the standard version
  },
  // Standard ESM output
  {
    entry: ["src/index.ts"],
    format: ["esm"],
    outExtension: () => ({ js: ".mjs" }), // Output file as .mjs
    sourcemap: true, // Generate sourcemaps
    minify: false, // No minification for the standard version
    clean: false, // Prevent cleaning the output directory again
  },
  // Minified CJS output
  {
    entry: ["src/index.ts"],
    format: ["cjs"],
    outExtension: () => ({ js: ".min.cjs" }), // Output file as .min.cjs
    sourcemap: true, // Generate sourcemaps
    minify: true, // Minify the output
    clean: false, // Prevent cleaning the output directory again
  },
  // Minified ESM output
  {
    entry: ["src/index.ts"],
    format: ["esm"],
    outExtension: () => ({ js: ".min.mjs" }), // Output file as .min.mjs
    sourcemap: true, // Generate sourcemaps
    minify: true, // Minify the output
    clean: false, // Prevent cleaning the output directory again
  },
]);
