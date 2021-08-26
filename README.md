# PCIC React Leaflet Components

An `npm`-installable package of PCIC-developed 
[React Leaflet](https://react-leaflet.js.org/en) 
components for use across projects.

Note: This README duplicates information in code comments, and may be out
of sync with them. It should be replaced by documentation generated from 
comments, but that is a future project.

## Table of contents

- [Installation](#installation)
- [Package contents](#package-contents)
    - [Base maps](#base-maps)
    - [Map controls](#map-controls)
- [Contributing and "publishing"](#contributing-and-publishing)
    - [Publishing and releasing](#publishing-and-releasing)
- [Package development framework](#package-development-framework)
    - [Create React App](#create-react-app)
    - [Adapting a Create React App project to package development](#adapting-a-create-react-app-project-to-package-development)

## Installation

This package is not published to a Node package registry.
Instead, it is installed directly from GitHub, as follows:

Using HTTPS protocol (easier):
```bash
npm install git+https://git@github.com/pacificclimate/pcic-react-leaflet-components.git#<version>
```

Using SSH protocol (requires troublesome ssh setup):
```bash
npm install git+ssh://git@github.com/pacificclimate/pcic-react-leaflet-components.git#<version>
```

From there, `pcic-react-leaflet-components` is like any other installed package,
and components are imported in JS code the usual way:

```js
import { ExampleComponent } from 'pcic-react-leaflet-components';
```

## Package contents

### Base maps

#### `BCBaseMap`

Establishes a map of B.C. in the BC Albers projection, and nothing more.

The tile server URL for this component is specified by the environment 
variable `REACT_APP_BC_BASE_MAP_TILES_URL`. See note
[Tile server URLs](#tile-server-urls).

The tiles must be in BC Albers projection and must have been generated in 
a way consistent with the tile matrix parameters defined for this
component. For the parameter values, see `BCBaseMap.tileset`. For details
more information, see [Tile matrix parameters](#tile-matrix-parameters)
below.

Children of this component are rendered inside its `<Map>` component.

#### `YNWTBaseMap`

Establishes a map of the Yukon and NWT in the Yukon Albers projection, 
and nothing more.

The tile server URL for this component is specified by the environment
variable `REACT_APP_YNWT_BASE_MAP_TILES_URL`. See note
[Tile server URLs](#tile-server-urls).

The tiles must be in Yukon Albers projection and must have been generated in
a way consistent with the tile matrix parameters defined for this
component. For the parameter values, see `YNWTBaseMap.tileset`. For details
more information, see [Tile matrix parameters](#tile-matrix-parameters)
below.

Children of this component are rendered inside its `<Map>` component.

#### `BCBaseMapDeprecated`

This component is DEPRECATED and exists temporarily to support legacy
apps. It will be removed when all apps have been appropriately updated.
It is identical to `BCBaseMap`, except that the tile matrix parameters
differ, and are for a highly customized tileset that will be removed
from use in future.

Establishes a map of B.C. in the BC Albers projection, and nothing more.

The tile server URL for this component is specified by the environment
variable `REACT_APP_BC_BASE_MAP_DEPRECATED_TILES_URL`. See note 
[Tile server URLs](#tile-server-urls).

The tiles must be in BC Albers projection and must have been generated in
a way consistent with the tile matrix parameters defined for this
component. For the parameter values, see `BCBaseMap.tileset`. For details
more information, see [Tile matrix parameters](#tile-matrix-parameters)
below.

Children of this component are rendered inside its `<Map>` component.

#### Tile server URLs

A tile server URL must be a complete, valid Leaflet
[`TileLayer`](https://leafletjs.com/reference-1.7.1.html#tilelayer)  
URL template. Example:

```
https://services.pacificclimate.org/tiles_north/{z}/{x}/{y}.png
```

#### Tile matrix parameters

A tileset is characterized by the projection it is in and by a set of
tile matrix parameters that describe the extent of the tileset in
projected coordinates, the size of the tile images in pixels, and
the number of zoom levels. (This project assumes that each zoom level
in the tileset has exactly twice the resolution of the previous zoom
level. The tile matrix parameters describe zoom level zero.)

For details on the parameters, see the documentation for module
[`crs`](src/lib/utils/crs.js) and our Confluence page
[How to create a Leaflet CRS object for a tileset in an arbitrary CRS](https://pcic.uvic.ca/confluence/display/CSG/How+to+create+a+Leaflet+CRS+object+for+a+tileset+in+an+arbitrary+CRS).

### Map controls

#### `StaticControl`

Places its children inside the map as a 
Leaflet [`Control`](https://leafletjs.com/reference-1.7.1.html#control).

The children of this component are wrapped in a `<div>` with
classes `StaticControl`, `leaflet-control`.

## Contributing and "publishing"

We put the term "publishing" in quotes because we don't publish to a
Node registry, we just push package contents to GitHub and `npm install`
the package directly from GitHub. (See Installation above.)

Important:

* Only content under the `src/lib` subtree 
  is included in the package that is built. 

* Content outside the `src/lib` subtree is excluded from the package,
  but is allowed and can be extremely useful; for example, to
  create demonstrations of package content (see `src/demo` subtree).

* Each item exported by the package must be exported in the file 
  `src/lib/index.js`.

### Publishing and releasing

When you modify this package (i.e., when you modify the contents of the 
`src/lib` subtree), follow this procedure:

1. Make sure you export any new or renamed components in `src/lib/index.js`.

1. When all modifications have been completed, commit the code.

1. On the command line, `npm run build`. 

   A successful build will output something like the following:

    ```text
    > pcic-react-leaflet-components@0.1.0 build /home/rglover/code/pcic-react-leaflet-components
    > rimraf dist && NODE_ENV=production babel src/lib --out-dir dist --copy-files --ignore __tests__,spec.js,test.js,__snapshots__
    
    Successfully compiled 3 files with Babel.
    ```

   A successful build on changed `src/lib/` content will cause files in the 
   `dist/` subtree to be added or modified. If you have added any new files,
   in `src/lib/` add the corresponding files in `dist/` to Git.

1. Increment `version` in `package.json`.

1. Summarize the changes from the last version in `NEWS.md`.

1. Commit all these changes, then tag the release, and push all to GitHub, 
including tag:

   ```bash
   git add package.json NEWS.md
   git commit -m "Bump to version x.x.x"
   git tag -a -m "x.x.x" x.x.x
   git push --follow-tags
   ```

## Package development framework

### Create React App

This package is developed using [Create React App](https://github.com/facebook/create-react-app)
as the basis. To do this takes a little effort, but is worth it for the
following reasons:

1. All the out-of-box language and dev support benefits of Create React App:

   * React, JSX, ES6, TypeScript and Flow syntax support.

   * Language extras beyond ES6 like the object spread operator.

   * Autoprefixed CSS, so you don’t need -webkit- or other prefixes.

   * A fast interactive unit test runner with built-in support for coverage reporting.

   * A live development server that warns about common mistakes.

   * A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

   * An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria. (Note: Using the service worker is opt-in as of react-scripts@2.0.0 and higher)

1. Hassle-free updates for the above tools with a single dependency.

1. Easy to create demonstration apps for the components under development.

1. Familiarity.

1. Exact correspondence to our production environment 
(not that free-standing React components can or should depend much on the 
dev vs. prod environments, but ...).

### Adapting a Create React App project to package development

A CRA project is not an npm package, alas. Some adjustment is required.
Fortunately it is not too onerous.

After [reviewing a variety of ways](https://pcic.uvic.ca/confluence/display/CSG/Creating+an+npm+package+of+React+components+using+create-react-app) 
to adapt a Create React App project to package development, 
we chose what appears to be the simplest, implemented through
[`create-component-lib`](https://www.npmjs.com/package/create-component-lib).

With a small amount of tweaking, this worked out.
