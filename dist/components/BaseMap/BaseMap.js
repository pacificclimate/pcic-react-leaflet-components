import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
// BaseMap: Component that establishes a base map and nothing more.
// Children of this component are rendered inside the Map component.
import React, { PureComponent } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'proj4';
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';
import { projCRSOptions } from '../../utils/crs';

var BaseMap =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(BaseMap, _PureComponent);

  function BaseMap() {
    _classCallCheck(this, BaseMap);

    return _possibleConstructorReturn(this, _getPrototypeOf(BaseMap).apply(this, arguments));
  }

  _createClass(BaseMap, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$tileset = _this$props.tileset,
          url = _this$props$tileset.url,
          projection = _this$props$tileset.projection,
          tileMatrix = _this$props$tileset.tileMatrix,
          attribution = _this$props$tileset.attribution,
          mapRef = _this$props.mapRef,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["tileset", "mapRef", "children"]); // Create Leaflet CRS object


      var crs = new L.Proj.CRS(projection.code, projection.proj4def, _objectSpread({}, projCRSOptions(tileMatrix), projection.options));
      return React.createElement(Map, Object.assign({
        crs: crs,
        minZoom: 0,
        maxZoom: tileMatrix.numResolutions,
        ref: mapRef
      }, rest), React.createElement(TileLayer, {
        attribution: attribution,
        url: url // TODO: Should subdomains be a prop?
        ,
        subdomains: 'abc',
        noWrap: true,
        maxZoom: tileMatrix.numResolutions
      }), children);
    }
  }]);

  return BaseMap;
}(PureComponent);

BaseMap.defaultProps = {
  mapRef: function mapRef() {
    return null;
  }
};
export { BaseMap as default };