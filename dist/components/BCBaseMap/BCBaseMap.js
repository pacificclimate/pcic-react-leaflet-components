import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
// BCBaseMap: Component that establishes a map of B.C., and nothing more.
import React, { PureComponent } from 'react';
import { pick, range, map } from 'lodash/fp';
import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';
import './BCBaseMap.css'; // Set up BC Albers projection

var maxRes = 7812.5;
var resolutions = map(function (i) {
  return maxRes / Math.pow(2, i);
})(range(0, 12));
var crs = new L.Proj.CRS('EPSG:3005', '+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs', {
  resolutions: resolutions,
  // If we don't set the origin correctly, then the projection
  // transforms BC Albers coordinates to lat-lng coordinates incorrectly.
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
  origin: [-1000000, 3000000]
});

var BCBaseMap =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(BCBaseMap, _PureComponent);

  function BCBaseMap() {
    _classCallCheck(this, BCBaseMap);

    return _possibleConstructorReturn(this, _getPrototypeOf(BCBaseMap).apply(this, arguments));
  }

  _createClass(BCBaseMap, [{
    key: "render",
    value: function render() {
      return React.createElement(Map, Object.assign({
        crs: crs,
        minZoom: 0 // ?
        ,
        maxZoom: 12 // ? There are only 12 zoom levels defined
        ,
        ref: this.props.mapRef
      }, pick(BCBaseMap.rLMapPropNames, this.props)), React.createElement(TileLayer, {
        attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
        url: process.env.REACT_APP_TILECACHE_URL + '/1.0.0/bc_osm/{z}/{x}/{y}.png',
        subdomains: 'abc',
        noWrap: true,
        maxZoom: 12
      }), this.props.children);
    }
  }]);

  return BCBaseMap;
}(PureComponent);

BCBaseMap.rLMapPropNames = "\n    preferCanvas\n    attributionControl\n    zoomControl\n    closePopupOnClick\n    zoomSnap\n    zoomDelta\n    trackResize\n    boxZoom\n    doubleClickZoom\n    dragging\n    crs\n    center\n    zoom\n    minZoom\n    maxZoom\n    maxBounds\n    renderer\n    zoomAnimation\n    zoomAnimationThreshold\n    fadeAnimation\n    markerZoomAnimation\n    transform3DLimit\n    inertia\n    inertiaDeceleration\n    inertiaMaxSpeed\n    easeLinearity\n    worldCopyJump\n    maxBoundsViscosity\n    keyboard\n    keyboardPanDelta\n    scrollWheelZoom\n    wheelDebounceTime\n    wheelPxPerZoomLevel\n    tap\n    tapTolerance\n    touchZoom\n    bounceAtZoomLimits\n    animate\n    bounds\n    boundsOptions\n    className\n    id\n    style\n    useFlyTo\n    viewport\n    whenReady\n    onViewportChange\n    onViewportChanged\n  ".split(/\s+/);
BCBaseMap.defaultProps = {
  mapRef: function mapRef() {
    return null;
  }
};
BCBaseMap.initialViewport = {
  center: {
    lat: 55.0,
    lng: -125
  },
  zoom: 2
};
export { BCBaseMap as default };