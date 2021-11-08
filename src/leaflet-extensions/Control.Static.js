import L from 'leaflet';


L.Control.Static = L.Control.extend({
  onAdd: map => {
    const container = L.DomUtil.create(
      'div',
      'leaflet-control-static leaflet-control'
    );
    return container;
  },

  onRemove: map => {},
});


L.control.static = opts => new L.Control.Static(opts);
