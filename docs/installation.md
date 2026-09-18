# Installation and usage

## Dependencies

Package `pcic-react-leaflet-components` version 3.0.0 and above has the
following peer dependencies. Client applications need to install these
themselves.

```json
"@react-leaflet/core": "2.0.0",
"leaflet": "^1.8.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-leaflet": "4.0.0"
```

Note that `@react-leaflet/core` and `react-leaflet` are pinned to exact
versions.

## Installation

The package is not published to an npm registry. Install it directly from
GitHub, at a version tag:

```
npm install git+https://github.com/pacificclimate/pcic-react-leaflet-components.git#<tag>
```

where `<tag>` is the version (e.g., `3.4.0`). This adds an entry like this to
`dependencies`:

```json
"pcic-react-leaflet-components": "git+https://github.com/pacificclimate/pcic-react-leaflet-components.git#3.4.0"
```

If your project follows the pacificclimate npm security policy, its `.npmrc`
must allow git dependencies declared in your own `package.json`:

```
allow-git=root
```

The package ships prebuilt bundles in `dist/`, so installing it runs no build
and no install scripts.

## Usage

Import and use a component as follows. The base maps need a tile server URL,
passed as the required `baseMapTilesUrl` prop, and a `center` and `zoom`.

```jsx
import React from "react";
import { BCBaseMap } from "pcic-react-leaflet-components";

// Your BC Albers tile server.
const tilesUrl = "https://tiles.example.org/bc-albers/{z}/{x}/{y}.png";

const App = () => (
  <BCBaseMap
    baseMapTilesUrl={tilesUrl}
    center={BCBaseMap.initialViewport.center}
    zoom={BCBaseMap.initialViewport.zoom}
    style={{ height: "600px" }}
  />
);

export default App;
```

As with any Leaflet map, the map container needs a height, or nothing is
visible.

The package imports Leaflet's own stylesheet (`leaflet/dist/leaflet.css`)
itself. If you use `StaticControl`, also import its stylesheet:

```js
import "pcic-react-leaflet-components/src/leaflet-extensions/control-static.css";
```

See [Package contents](package-contents.md) for all the components.
