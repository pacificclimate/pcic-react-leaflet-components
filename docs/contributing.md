# Contributing

## Development environment

The library is built with [Vite](https://vite.dev/) in
[library mode](https://vite.dev/guide/build.html#library-mode), tested with
[Vitest](https://vitest.dev/), and formatted with
[Prettier](https://prettier.io/). Node 24 and npm 12 are required (see
`engines` in `package.json`); the devcontainer provides both.

`vite build` compiles `src/index.js` into two bundles in `dist/`:

- `dist/index.cjs.js` (CommonJS, the package's `main`)
- `dist/index.esm.js` (ES modules, the package's `module`)

The peer dependencies (`react`, `react-dom`, `leaflet`, `react-leaflet`,
`@react-leaflet/core`) are left external, subpaths included; everything else
is bundled. The output is unminified, targets `es2015`, and is reproducible:
building the same source twice gives byte-identical files.

`vite.config.mjs` also carries a small plugin, `hoistExternalRequires`. Two
bundled CommonJS dependencies (`proj4leaflet`, `svg-loaders-react`) `require()`
a peer, and Vite's bundler keeps those as runtime `require` calls in the ES
module output, which consumers' bundlers cannot resolve: the base maps fail
because `L.Proj` is never defined. The plugin rewrites them to static imports,
and fails the build if any runtime `require` is left. Its comment explains why
Vite's built-in alternative must not be used.

### Quickstart

1. Clone the repo.
2. Install the library and playground dependencies:
   ```
   npm run install:all
   ```
3. Run the playground:
   ```
   npm run dev
   ```
   This builds the library in watch mode and serves the playground at
   <http://127.0.0.1:5173>.

### Scripts

| Script                  | What it does                                           |
| ----------------------- | ------------------------------------------------------ |
| `npm run install:all`   | `npm ci` for the library, then for the playground      |
| `npm run dev`           | Library watch build and playground dev server together |
| `npm run build`         | Build `dist/`                                          |
| `npm test`              | Run the test suite once                                |
| `npm run test:coverage` | Run the test suite with a coverage report              |
| `npm run format`        | Format the repo with Prettier                          |
| `npm run format:check`  | Check formatting without writing (what CI runs)        |

### The playground

`playground/` is a separate, never-published React app that demonstrates the
components. It depends on the library as `file:..`, so it imports the built
`dist/` through `main` and `module` exactly as a consumer does, not `src/`. The
five peers are `file:` links into the root `node_modules`, so the playground
and the library share one copy of each (a second copy of React breaks hooks).
`playground/package.json` explains this in its `"//"` entry.

The playground has no build and no tests; it is run, not shipped.

### Dev loop

`npm run dev` runs two processes side by side: `vite build --watch` for the
library (`lib`) and the Vite dev server for the playground (`pg`).

- **Playground edits** hot-update in place, and map state is kept.
- **Library `src/` JavaScript edits** rebuild `dist/`, then the playground dev
  server restarts and the page reloads itself, about 0.6 s after saving. Map
  state (pan, zoom) is lost. That is inherent, not a bug: the library bundle
  exports non-components (`callbackOnMapEvents`, `projCRSOptions`,
  `resolutions`), so React Fast Refresh cannot hot-swap it.
- **Library CSS edits** (`src/leaflet-extensions/control-static.css`)
  hot-update instantly without a reload. The playground imports that file from
  `src/`, which the build never rewrites.

The restart is done by a plugin in `playground/vite.config.mjs`, and it is the
non-obvious part of this setup. `vite build --watch` empties `dist/` at the
start of every build, including the first. If the dev server resolves the
library inside that window (its startup dependency scan, or a reload), it
finds no `module` file, falls back to `main`, and caches `dist/index.cjs.js`
as the library's entry for the rest of the session. A page reload does not
clear that cache, so the plugin keeps `dist/` out of Vite's watcher and
restarts the server once each build has been written. Without it the
playground silently runs the wrong bundle.

`playground/vite.config.mjs` deliberately has no `server.fs.allow` and no
`optimizeDeps.exclude`. Vite serves files outside the playground root when the
module graph reaches them, and a linked package is never pre-bundled. The
server listens on `127.0.0.1`, because Vite's default `localhost` can resolve
to IPv6 only, which a devcontainer port forward cannot reach.

### Local EEZ data for the playground

The EEZ GeoJSON is deliberately not committed to this repository. To display
the EEZ overlay in the playground, create this developer-local symlink after
cloning the repository:

```bash
mkdir -p playground/public/tiles/eez
ln -s \
  /storage/.../swarm_files/dev/dev-tileserver-webp/tilestore/eez/eez_boundaries_canada_v12.geojson \
  playground/public/tiles/eez/eez_boundaries_canada_v12.geojson
```

`playground/public/tiles/eez/` is ignored by Git, so neither the data nor the
machine-specific symlink is committed. The playground loads it through the
same-origin path `/tiles/eez/eez_boundaries_canada_v12.geojson`, avoiding a
CORS requirement. Production applications should instead pass their hosted
Services URL to `EEZLayer`'s `url` prop.

## Testing

```
npm test                 # run once
npm run test:watch       # watch mode
npm run test:coverage    # with a coverage report
```

The suite runs under Vitest with [jsdom](https://github.com/jsdom/jsdom) and
[Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
Nothing is mocked. The tests render real Leaflet maps and cover every export:
the CRS utilities, both base maps (their tile URLs pin the projection end to
end), `SetView`, `StaticControl`, `MapSpinner`, `callbackOnMapEvents` and
`EEZLayer`.

Tests live in `test/` at the repo root, never under `src/`. Consumers install
from git and receive `src/` as-is, so anything under it ships to them. The
`test` block in `vite.config.mjs` pins `include` to `test/`.

| File                       | Covers                                                                      |
| -------------------------- | --------------------------------------------------------------------------- |
| `test/setup.js`            | `afterEach(cleanup)` and the `jest-dom` matchers                            |
| `test/helpers.jsx`         | `giveMapsASize`, `CaptureMap`, `renderMap`, `tileUrls`                      |
| `test/crs.test.js`         | `resolutions`, `projCRSOptions`                                             |
| `test/basemap.test.jsx`    | `BCBaseMap`, `YNWTBaseMap`                                                  |
| `test/components.test.jsx` | `SetView`, `StaticControl`, `MapSpinner`, `callbackOnMapEvents`, `EEZLayer` |

### The layout stub

Neither jsdom nor happy-dom does layout, so every element reports a size of
zero and Leaflet believes the map is 0x0: it loads one tile and `getBounds()`
collapses to a point. `giveMapsASize()` in `test/helpers.jsx` stubs
`clientWidth` and `clientHeight` on `.leaflet-container` elements, which is
what Leaflet sizes the map from. Call it before rendering any test that
depends on the viewport.

Anything that depends on real box sizes (clipping, CSS layout, what is
actually visible) cannot be tested here and needs a real browser.

### Coverage and known gaps

Coverage is measured but never enforced: there are no thresholds, and CI runs
plain `vitest run`. It currently stands at 100% of lines. Not covered:

- `MapSpinner` clipping after a small pan (the bug noted in
  [Package contents](package-contents.md#component-mapspinner)). It depends on
  real layout, so it sits in `test/components.test.jsx` as an `it.skip`, which
  shows up in every test run.
- `EEZLayer`: the branch where a failed fetch is ignored because no `onError`
  was passed, or because the request was aborted.
- `SetView`: the no-op branch when the map is already at the requested view.

The v8 text reporter leaves fully covered files out of its table, so the
terminal summary looks worse than the real figure.

## Formatting

Prettier formats everything, with pure defaults (`.prettierrc` is `{}`, the
same as other pacificclimate repos). Run `npm run format` before committing;
CI fails if `npm run format:check` does. The devcontainer formats on save.
There is no ESLint.

## CI

`.github/workflows/node-ci.yml` runs on every push to every branch. It sets up
Node 24 and npm 12, runs `npm ci`, then:

1. `npm run format:check`
2. `npm test`
3. `npm run build`
4. Checks that the build left `dist/` unchanged.

The last step fails if the committed `dist/` does not match what the committed
`src/` builds to. **Any change to `src/` needs `npm run build` and the
resulting `dist/` committed with it.** (A comment-only change passes, because
comments do not survive into the bundle.)

The workflow is read-only by design: it runs with `permissions: contents:
read` and never pushes, tags or publishes. That is why `dist/` is committed
rather than built by CI.

## Publishing and releasing

### "Publishing"

We put the term "publishing" in quotes because we don't publish to a
Node registry, we just push package contents to GitHub and `npm install`
the package directly from GitHub. (See [Installation](installation.md).)

Important:

- Consumers use the committed `dist/` bundles, through `main` and `module`.
  They also receive the rest of the repo tree, including `src/`, which some
  import directly for the `StaticControl` stylesheet.

- Each item exported by the package must be exported in the file
  `src/index.js`.

- Keep tests, fixtures and other development files out of `src/`.

### Releasing a new version

When you modify this package (i.e., when you modify the contents of the
`src` subtree), follow this procedure:

1. Make sure you export any new or renamed components in `src/index.js`.

2. Run `npm run build`, and commit the rewritten `dist/index.cjs.js` and
   `dist/index.esm.js` along with the `src/` change. CI fails if you don't.

3. Increment `version` in `package.json`.

4. Summarize the changes from the last version in `NEWS.md`.

5. Commit these changes, then tag the release, and push all to GitHub,
   including tag:

   ```bash
   git add package.json NEWS.md
   git commit -m "Bump to version x.x.x"
   git tag -a -m "x.x.x" x.x.x
   git push --follow-tags
   ```

## Future directions

The consumer contract (committed CommonJS and ES module bundles at fixed paths,
the same peer dependencies) was deliberately kept unchanged by the move to
Vite. These are the changes it leaves room for.

- **ES modules only.** Drop the CommonJS bundle, and raise the `es2015` build
  target at the same time. `es2015` keeps class static fields, `?.` and `??` out of
  the output, so that older bundlers (webpack 4, as in Create React App 4-era
  apps) can still parse it.
- **An `exports` map** in `package.json`, replacing `main`/`module` and
  replacing consumers' deep imports into `src/` with named subpaths.
- **Separate CSS.** Emit the library's CSS as a file consumers import, instead
  of importing `leaflet/dist/leaflet.css` from inside the bundle and reaching
  into `src/` for `control-static.css`.
- **Type declarations** for TypeScript consumers.
- **`forwardRef` on `GenericBaseMap`**, to hand consumers the Leaflet map
  through a `ref`. Nobody has asked for it; `useMap()` in a child does the job
  (see [Package contents](package-contents.md#reaching-the-leaflet-map)).
- **Dropping `hoistExternalRequires`**, if Vite's bundler starts hoisting
  external `require` calls itself, or if `proj4leaflet` and
  `svg-loaders-react` both leave the dependency tree. Before removing it,
  build without it and search `dist/index.esm.js` for `__require`, which is
  what the plugin's guard looks for.
- **An org-level package registry**, which is the route to not committing
  `dist/`. The alternatives are ruled out by how consumers install. Their
  `.npmrc` sets `strict-allow-scripts`, so a `prepare` script that builds on
  install would not run (and would make every consumer build run Vite). It
  also sets `allow-remote=none`, which blocks installing a release tarball. A
  registry (GitHub Packages, or a self-hosted one) has its own costs. It needs
  a publish credential, held by CI or a person, and becomes supply-chain
  infrastructure to secure and maintain. `min-release-age=7` would delay every
  release by a week (git dependencies are exempt). And every consumer's
  `.npmrc` and dependency declaration would change. It is an org-wide
  decision, affecting pcic-react-components and pcic-react-external-text too.
