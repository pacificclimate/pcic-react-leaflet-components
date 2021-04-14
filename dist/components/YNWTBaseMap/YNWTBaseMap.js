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
import { projCRSOptions } from '../../utils/crs';
import './YNWTBaseMap.css'; // Set up Yukon Albers projection

var numResolutions = 14; // Create Leaflet CRS object

var yukonAlbersCrs = new L.Proj.CRS('EPSG:3578', '+proj=aea +lat_1=61.66666666666666 +lat_2=68 +lat_0=59 +lon_0=-132.5 +x_0=500000 +y_0=500000 +ellps=GRS80 +datum=NAD83 +units=m +no_defs', projCRSOptions({
  // From the definition of the projection (SRS)
  metersPerUnit: 1,
  // Proj.4: +units=m
  // From tile mill
  tileMatrixMinX: -20037508,
  tileMatrixMaxX: 20037508,
  tileWidth: 256,
  tileMatrixMinY: -20037508,
  tileMatrixMaxY: 20037508,
  numResolutions: numResolutions
}));

var YNWTBaseMap =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(YNWTBaseMap, _PureComponent);

  function YNWTBaseMap() {
    _classCallCheck(this, YNWTBaseMap);

    return _possibleConstructorReturn(this, _getPrototypeOf(YNWTBaseMap).apply(this, arguments));
  }

  _createClass(YNWTBaseMap, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mapRef = _this$props.mapRef,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["mapRef", "children"]);

      return React.createElement(Map, Object.assign({
        crs: yukonAlbersCrs,
        minZoom: 0,
        maxZoom: numResolutions,
        cursor: true,
        ref: mapRef
      }, rest), React.createElement(TileLayer, {
        attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
        url: process.env.REACT_APP_YUKON_ALBERS_URL + '/{z}/{x}/{y}.png',
        subdomains: 'abc',
        noWrap: true,
        maxZoom: numResolutions
      }), children);
    }
  }]);

  return YNWTBaseMap;
}(PureComponent);

YNWTBaseMap.defaultProps = {
  mapRef: function mapRef() {
    return null;
  }
};
YNWTBaseMap.initialViewport = {
  center: {
    lat: 65.0,
    lng: -121
  },
  zoom: 6
};
export { YNWTBaseMap as default };