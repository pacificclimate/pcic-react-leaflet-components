import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
// BCBaseMapDeprecated: Component that establishes a base map of B.C., in
// BC Albers projection, and nothing more.
//
// The tile server URL is specified by the environment variable
// REACT_APP_BC_BASE_MAP_DEPRECATED_TILES_URL. The tiles must be in BC Albers
// projection and must have been generated in a way consistent with the
// `tileset.tileMatrix` parameters below. This component is DEPRECATED because
// those parameters are unique to a tileset that is now deprecated.
//
// Children of this component are rendered inside its <Map> component.
import React, { PureComponent } from 'react';
import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';
import BaseMap from '../BaseMap';

var BCBaseMapDeprecated =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(BCBaseMapDeprecated, _PureComponent);

  function BCBaseMapDeprecated() {
    _classCallCheck(this, BCBaseMapDeprecated);

    return _possibleConstructorReturn(this, _getPrototypeOf(BCBaseMapDeprecated).apply(this, arguments));
  }

  _createClass(BCBaseMapDeprecated, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["children"]);

      return React.createElement(BaseMap, Object.assign({
        tileset: BCBaseMapDeprecated.tileset
      }, rest), children);
    }
  }]);

  return BCBaseMapDeprecated;
}(PureComponent);

BCBaseMapDeprecated.defaultProps = {
  mapRef: function mapRef() {
    return null;
  }
};
BCBaseMapDeprecated.tileset = {
  url: process.env.REACT_APP_BC_BASE_MAP_DEPRECATED_TILES_URL,
  projection: {
    code: 'EPSG:3005',
    proj4def: '+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs'
  },
  tileMatrix: {
    // From the definition of the projection (SRS)
    metersPerUnit: 1,
    // Proj.4: +units=m
    // From tile generation
    // For some reason, `scaleDenominator` is only half what we would expect it to
    // be. We specify it here to override the extents-based resolution
    // computations.
    scaleDenominator: 27901785.714285714,
    tileMatrixMinX: -1000000,
    tileMatrixMaxX: 3000000,
    tileWidth: 256,
    tileMatrixMinY: -1000000,
    tileMatrixMaxY: 3000000,
    numResolutions: 12
  },
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
};
BCBaseMapDeprecated.initialViewport = {
  center: {
    lat: 55.0,
    lng: -125
  },
  zoom: 2
};
export { BCBaseMapDeprecated as default };