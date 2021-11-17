# Package contents

## Base maps

Base map components are the primary content of this package.
They are configured to use tile sets that PCIC has generated and serves;
getting the CRS right for a tile set is the tricky part and that is what
is accomplished here.

### Component `BCBaseMap`

Establishes a map of B.C. in the BC Albers projection, with a base map
tile layer.

Returns a React Leaflet `MapContainer` component containing the base map
tile layer.
Children of this component are rendered inside the `MapContainer`.

Configuration: The base map tile server URL for this component is specified by the 
environment variable `REACT_APP_BC_BASE_MAP_TILES_URL`. See note
[Tile server URLs](#tile-server-urls).

The tiles must be in BC Albers projection and must have been generated in
a way consistent with the tile matrix parameters defined for this
component. For the parameter values, see `BCBaseMap.tileset`. For details
more information, see [Tile matrix parameters](#tile-matrix-parameters)
below.

### Component `YNWTBaseMap`

Establishes a map of the Yukon and NWT in the Yukon Albers projection,
with a base map tile layer.

Returns a React Leaflet `MapContainer` component containing the base map
tile layer.
Children of this component are rendered inside the `MapContainer`.

Configuration: The base map tile server URL for this component is specified by the
environment variable `REACT_APP_YNWT_BASE_MAP_TILES_URL`. See note
[Tile server URLs](#tile-server-urls).

The tiles must be in Yukon Albers projection and must have been generated in
a way consistent with the tile matrix parameters defined for this
component. For the parameter values, see `YNWTBaseMap.tileset`. For details
more information, see [Tile matrix parameters](#tile-matrix-parameters)
below.

### Component `GenericBaseMap`

Creates and renders a map containing a tile layer defined by the `tileset` 
prop.

Returns a React Leaflet `MapContainer` component containing the base map
tile layer.
Children of this component are rendered inside the `MapContainer`.

`BCBaseMap` and `YNWTBaseMap` are specializations of this component with
a particular `tileset`. See those components for examples of how to use
this one.

### Tile server URLs

A tile server URL must be a complete, valid Leaflet
[`TileLayer`](https://leafletjs.com/reference-1.7.1.html#tilelayer)  
URL template. Example:

```
https://services.pacificclimate.org/tiles_north/{z}/{x}/{y}.png
```

### Tile matrix parameters

A tileset is characterized by the projection it is in and by a set of
tile matrix parameters that describe the extent of the tileset in
projected coordinates, the size of the tile images in pixels, and
the number of zoom levels. (This project assumes that each zoom level
in the tileset has exactly twice the resolution of the previous zoom
level. The tile matrix parameters describe zoom level zero.)

For details on the parameters, see the documentation for module
[`crs`](src/utils/crs.js) and our Confluence page
[How to create a Leaflet CRS object for a tileset in an arbitrary CRS](https://pcic.uvic.ca/confluence/display/CSG/How+to+create+a+Leaflet+CRS+object+for+a+tileset+in+an+arbitrary+CRS).

## Map controls

Supplementary controls useful in building map apps.

### Component `StaticControl`

Places its children inside the map as a
Leaflet [`Control`](https://leafletjs.com/reference-1.7.1.html#control).
This control in itself does nothing except display its contents. 
It can be used to display messages or to establish interactive controls
by rendering suitable content.
(The latter, however, may be better done as another specialized control.)

The children of this component are wrapped in a `<div>` with
classes `leaflet-control-static`, `leaflet-control`.

## Other components

### Component `MapSpinner`

Overlays a spinner on the map. Super simple. Spinner proper is one of the
[svg-loaders-react](https://www.npmjs.com/package/svg-loaders-react) 
loaders (spinners), selected by name from the package by the `spinner` prop. 
Example

`<MapSpinner spinner="Oval" ... />`. 

Any other props are passed into the rendered `svg-loaders-react` element.

The spinner stays centered in the map viewport.
It tracks zoom and pan events, but see note below.

Note: Even with zoom/pan tracking, the spinner doesn't always render as
expected; specifically, on small pans, its "window" seems to become 
significantly smaller than the actual visible bounds of the map and the 
spinner is clipped.


### Component `SetView`

Sets the view (center, zoom) of the `MapContainer` inside which it is
rendered.

As with all functional components, `SetView` updates on a shallow comparison
of its props. The composite prop `view` passed to it should be a
different object when and only when one of its values changes. `SetView`
will not update (set the view) if prop `view` is mutated.
(We strongly recommend the use of immutable values--and the brilliant package
`immer` for that purpose--for values like `view`.)

## Higher order components

### `callbackOnMapEvents`

This function is a factory (higher order component) that returns a component
that calls a user-defined callback function with the Leaflet map as parameter
when any of the specified Leaflet events occur.

This factory is used in the base map demo to create a component that retrieves
the view (center, zoom) of the map whenever it is changed by the user. See
playground component `DemoBaseMap`.

## Utility functions

### `projCRSOptions`

Compute options for `L.Proj.CRS` from CRS info and 
[tile matrix parameters](#tile-matrix-parameters).
See code for more detailed documentation.

### `resolutions`

Compute resolutions from CRS info and 
[tile matrix parameters](#tile-matrix-parameters).
See code for more detailed documentation.
