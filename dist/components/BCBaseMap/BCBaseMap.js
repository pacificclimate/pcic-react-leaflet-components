import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
// BCBaseMap: Component that establishes a map of B.C., and nothing more.
import React, { PureComponent } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';
import './BCBaseMap.css';
import { projCRSOptions } from '../../utils/crs'; // Set up BC Albers projection

var numResolutions = 12; // Create Leaflet CRS object

var bcAlbersCrs = new L.Proj.CRS('EPSG:3005', '+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs', projCRSOptions({
  // From the definition of the projection (SRS)
  metersPerUnit: 1,
  // Proj.4: +units=m
  // From tile mill
  // For some reason, `scaleDenominator` is only half what we would expect it to
  // be. We specify it here to override the extents-based resolution
  // computations.
  scaleDenominator: 27901785.714285714,
  tileMatrixMinX: -1000000,
  tileMatrixMaxX: 3000000,
  tileWidth: 256,
  tileMatrixMinY: -1000000,
  tileMatrixMaxY: 3000000,
  numResolutions: numResolutions
}));

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
      var _this$props = this.props,
          mapRef = _this$props.mapRef,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["mapRef", "children"]);

      return React.createElement(Map, Object.assign({
        crs: bcAlbersCrs,
        minZoom: 0,
        maxZoom: numResolutions,
        ref: mapRef
      }, rest), React.createElement(TileLayer, {
        attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
        url: process.env.REACT_APP_BC_ALBERS_URL + '/1.0.0/bc_osm/{z}/{x}/{y}.png',
        subdomains: 'abc',
        noWrap: true,
        maxZoom: numResolutions
      }), children);
    }
  }]);

  return BCBaseMap;
}(PureComponent);

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