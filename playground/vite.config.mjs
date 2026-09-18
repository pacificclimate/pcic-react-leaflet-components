import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The library's built output, reached through the `file:..` symlink.
//
// `vite build --watch` (the other half of the root `npm run dev`) empties dist/
// at the start of every build. Anything the dev server resolves inside that
// window -- its startup dependency scan, or a reload triggered by its own
// watcher -- finds no `module` file, falls back to `main`, and caches
// dist/index.cjs.js as the library's entry for the rest of the session. So
// dist/ is kept out of Vite's watcher, and once a build has been written this
// plugin restarts the dev server, which drops that cache; the page reloads
// itself when it reconnects. Without this plugin the dev loop silently tests
// the wrong bundle.
//
// A reload is the best a library edit can get anyway: the bundle cannot be a
// React Fast Refresh boundary (it exports non-components), so state is lost
// either way.
const libDist = fileURLToPath(new URL("../dist", import.meta.url));
const libEntry = `${libDist}/index.esm.js`;

function reloadOnLibraryRebuild() {
  return {
    name: "reload-on-library-rebuild",
    apply: "serve",
    configureServer(server) {
      let timer;
      const settle = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          if (!fs.existsSync(libEntry)) {
            timer = setTimeout(settle, 100);
            return;
          }
          server.config.logger.info("library rebuilt, restarting", {
            timestamp: true,
          });
          server.restart();
        }, 300);
      };
      const watcher = fs.watch(libDist, settle);
      server.httpServer?.once("close", () => {
        clearTimeout(timer);
        watcher.close();
      });
    },
  };
}

// Deliberately no `server.fs.allow` and no `optimizeDeps.exclude`: the files
// the playground reaches outside its root are served because the module graph
// reaches them, and a linked package is never pre-bundled.
//
// `host` is explicit because Vite's default, `localhost`, can resolve to ::1
// only (it does in the devcontainer), and port forwarders such as VS Code's
// connect to 127.0.0.1 -- so the browser can't reach the server at all. IPv4
// loopback, not `true`: nothing needs the dev server on the network.
export default defineConfig({
  plugins: [react(), reloadOnLibraryRebuild()],
  server: {
    host: "127.0.0.1",
    watch: { ignored: [`${libDist}/**`] },
  },
});
