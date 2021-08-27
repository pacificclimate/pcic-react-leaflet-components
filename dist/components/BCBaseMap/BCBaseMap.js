import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
// BCBaseMap: Component that establishes a base map of B.C., in BC Albers
// projection, and nothing more.
//
// The tile server URL is specified by the environment variable
// `REACT_APP_BC_BASE_MAP_TILES_URL`. The tiles must be in BC Albers projection
// and must have been generated in a way consistent with the
// `tileset.tileMatrix` parameters below.
//
// Children of this component are rendered inside its <Map> component.
import React, { PureComponent } from 'react';
import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';
import BaseMap from '../BaseMap';

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
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["children"]);

      return React.createElement(BaseMap, Object.assign({
        tileset: BCBaseMap.tileset
      }, rest), children);
    }
  }]);

  return BCBaseMap;
}(PureComponent);

BCBaseMap.defaultProps = {
  mapRef: function mapRef() {
    return null;
  }
};
BCBaseMap.tileset = {
  url: process.env.REACT_APP_BC_BASE_MAP_TILES_URL,
  projection: {
    code: 'EPSG:3005',
    proj4def: '+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs'
  },
  tileMatrix: {
    // From the definition of the projection (SRS)
    metersPerUnit: 1,
    // Proj.4: +units=m
    // From tile generation
    tileMatrixMinX: -20037508,
    tileMatrixMaxX: 20037508,
    tileWidth: 256,
    tileMatrixMinY: -20037508,
    tileMatrixMaxY: 20037508,
    numResolutions: 14
  },
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
};
BCBaseMap.initialViewport = {
  center: {
    lat: 55.0,
    lng: -125
  },
  zoom: 6
};
export { BCBaseMap as default };