import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json" with { type: "json" };

const peers = Object.keys(pkg.peerDependencies);
const isExternal = (id) =>
  peers.some((p) => id === p || id.startsWith(`${p}/`));

// Rolldown deliberately preserves `require()` of an external module inside
// bundled CommonJS (proj4leaflet, svg-loaders-react) as a runtime `__require()`
// call. Consumers' bundlers cannot see through it: webpack 5 turns it into an
// empty dynamic-require context and Vite's own production build carries the
// throwing shim through, so `L.Proj` never gets defined. Rollup's
// @rollup/plugin-commonjs used to hoist these to static imports; do the same.
// Do NOT use rolldown's built-in esmExternalRequirePlugin: it hands the module
// a *copy* of the namespace, so proj4leaflet mutates a throwaway object and the
// base maps break silently.
function hoistExternalRequires() {
  return {
    name: "hoist-external-requires",
    renderChunk(code, chunk, opts) {
      if (opts.format !== "es") return null;
      const names = new Map();
      const out = code.replace(
        /__require\((["'])([^"']+)\1\)/g,
        (match, quote, id) => {
          if (!isExternal(id)) return match;
          if (!names.has(id)) names.set(id, `__ext_${names.size}`);
          return names.get(id);
        },
      );
      const left = out.match(/\b__require\w*\(/g);
      if (left) {
        this.error(
          `hoist-external-requires: ${left.length} runtime require call(s) left in ` +
            `the ESM output. They throw in consumers' bundles; hoist them too.`,
        );
      }
      if (!names.size) return null;
      const imports = [...names]
        .map(([id, name]) => `import ${name} from ${JSON.stringify(id)};`)
        .join("\n");
      return { code: `${imports}\n${out}`, map: null };
    },
  };
}

export default defineConfig({
  plugins: [react(), hoistExternalRequires()],
  build: {
    lib: {
      entry: "src/index.js",
      formats: ["cjs", "es"],
      fileName: (format) => `index.${format === "es" ? "esm" : "cjs"}.js`,
    },
    rolldownOptions: {
      output: { esModule: true },
      external: (id) => isExternal(id),
    },
    minify: false,
    target: "es2015",
  },
});
