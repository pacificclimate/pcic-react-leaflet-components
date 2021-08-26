import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import ReactDom from 'react-dom';
import { MapControl, withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import './StaticControl.css';

var StaticControl =
/*#__PURE__*/
function (_MapControl) {
  _inherits(StaticControl, _MapControl);

  function StaticControl() {
    _classCallCheck(this, StaticControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(StaticControl).apply(this, arguments));
  }

  _createClass(StaticControl, [{
    key: "createLeafletElement",
    value: function createLeafletElement(props) {
      var _this = this;

      var leafletElement = L.control({
        position: props && props.position
      });

      leafletElement.onAdd = function (map) {
        _this.container = L.DomUtil.create('div', 'StaticControl leaflet-control');
        Object.assign(_this.container.style, props.style);
        ReactDom.render(props.children, _this.container);
        return _this.container;
      };

      return leafletElement;
    }
  }, {
    key: "updateLeafletElement",
    value: function updateLeafletElement(fromProps, toProps) {
      if (fromProps.children !== toProps.children) {
        ReactDom.render(toProps.children, this.container);
      }
    }
  }]);

  return StaticControl;
}(MapControl);

export default withLeaflet(StaticControl);