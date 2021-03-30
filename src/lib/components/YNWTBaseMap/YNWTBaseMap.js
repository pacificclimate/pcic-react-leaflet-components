// BCBaseMap: Component that establishes a map of B.C., and nothing more.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { pick, range, map } from 'lodash/fp';

import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';

import './YNWTBaseMap.css';

// Set up Yukon Albers projection
const maxRes = 7812.5;
const resolutions = map(i => maxRes / Math.pow(2, i))(range(0, 12));
const crs = new L.Proj.CRS(
  'EPSG:3578',
  '+proj=aea +lat_1=61.66666666666666 +lat_2=68 +lat_0=59 +lon_0=-132.5 +x_0=500000 +y_0=500000 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
  {
    bounds: L.Bounds(

      // lon, lat order (as specified)
      L.Point(26301.4186, 642942.0344),
      L.Point(983667.7511, 1710455.0365)

      // lon, lat order, corners reversed
      // L.Point(26301.4186, 1710455.0365),
      // L.Point(983667.7511, 642942.0344)

      // lat, lon order
      // L.Point(642942.0344, 26301.4186),
      // L.Point(1710455.0365, 983667.7511),
    ),

    // transformation: new L.Transformation(-1, 0, 1, 0),

    resolutions,

    // If we don't set the origin correctly, then the projection
    // transforms Yukon Albers coordinates to lat-lng coordinates incorrectly.
    // You have to know the magic origin value.
    //
    // It is also probably important to know that the bc_osm tile set
    // is a TMS tile set, which has axes transposed with respect to
    // Leaflet axes. The proj4leaflet documentation incorrectly states
    // that there is a CRS constructor `L.Proj.CRS.TMS` for TMS tilesets.
    // It is absent in the recent version (1.0.2) we are using. It
    // exists in proj4leaflet ver 0.7.1 (in use in CE), and shows that
    // the correct value for the origin option is `[bounds[0], bounds[3]]`,
    // where `bounds` is the 3rd argument of the TMS constructor.
    // These values are defined for us in Climate Explorer's version of
    // this map. W00t.
    // origin: [-1000000, 3000000],
  }
);
console.log("### crs", crs)

export default class YNWTBaseMap extends PureComponent {
  static propTypes = {
    // Only props added by this component are defined here.
    // All other valid props for Map component are passed through to it.

    mapRef: PropTypes.func,
    // Callback to which a ref to the Map component is passed.
    // Allows parent components to diddle with the map established here.
  };

  static rLMapPropNames = `
    preferCanvas
    attributionControl
    zoomControl
    closePopupOnClick
    zoomSnap
    zoomDelta
    trackResize
    boxZoom
    doubleClickZoom
    dragging
    crs
    center
    zoom
    minZoom
    maxZoom
    maxBounds
    renderer
    zoomAnimation
    zoomAnimationThreshold
    fadeAnimation
    markerZoomAnimation
    transform3DLimit
    inertia
    inertiaDeceleration
    inertiaMaxSpeed
    easeLinearity
    worldCopyJump
    maxBoundsViscosity
    keyboard
    keyboardPanDelta
    scrollWheelZoom
    wheelDebounceTime
    wheelPxPerZoomLevel
    tap
    tapTolerance
    touchZoom
    bounceAtZoomLimits
    animate
    bounds
    boundsOptions
    className
    id
    style
    useFlyTo
    viewport
    whenReady
    onViewportChange
    onViewportChanged
  `.split(/\s+/);

  static defaultProps = {
    mapRef: (() => null),
  };

  static initialViewport = {
    center: {
      lat: 64.0,
      lng: -127,
    },
    zoom: 5,
  };

  render() {
    return (
      <Map
        crs={crs}
        minZoom={0}   // ?
        maxZoom={12}  // ? There are only 12 zoom levels defined
        ref={this.props.mapRef}
        {...pick(YNWTBaseMap.rLMapPropNames, this.props)}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={process.env.REACT_APP_YUKON_ALBERS_URL + '/{z}/{x}/{y}.png'}
          subdomains={'abc'}
          noWrap={true}
          maxZoom={12}
        />
        {this.props.children}
      </Map>
    );
  }
}
