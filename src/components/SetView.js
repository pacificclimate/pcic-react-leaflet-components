// Sets the view (center, zoom) of the `MapContainer` inside which it is
// rendered.
//
// In an earlier version of this component, there was a difference between the
// center specified and the center actually set and reported by the map. This
// seems to have vanished now that we are using useEffect to set the center,
// and all code allowing for approximate setting has been removed. Correct hook
// usage FTW!

import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';


const printView = view => JSON.stringify({
  lat: view.center.lat, lng: view.center.lng, zoom: view.zoom,
});


const SetView = ({ view, debug=false }) => {
  const map = useMap();
  const currCenter = map.getCenter();
  const currZoom = map.getZoom();
  const tag = `SetView ${map._container.id}:`;
  if (debug) {
    console.log(
      tag,
      `from:`, printView({ center: currCenter, zoom: currZoom }),
      `to:`, printView(view),
    )
  }

  // It's important to wrap side-effect updates like this with useEffect!
  useEffect(() => {
    if (
      currCenter.lat !== view.center.lat ||
      currCenter.lng !== view.center.lng ||
      currZoom !== view.zoom
    ) {
      if (debug) {console.log(tag, `!setting`)}
      map.setView(view.center, view.zoom, { animate: false });
    }
  });

  return null;

};

export default SetView;
