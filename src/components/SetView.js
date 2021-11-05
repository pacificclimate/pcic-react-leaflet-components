import React  from 'react';
import { useMap } from 'react-leaflet';


const printableLatLng = latLng => ({lat: latLng.lat, lng: latLng.lng});


const approxEqual = (a, b, tol=0.1) => {
  return Math.abs(a - b) <= tol;
}


const SetView = ({
  view, positionTol= 1, debug=false
}) => {
  const map = useMap();
  const tag = `SetView ${map._container.id}:`;
  const currCenter = map.getCenter();
  const currZoom = map.getZoom();
  if (debug) {
    console.log(
      tag,
      `from:`, { ...printableLatLng(currCenter), zoom: currZoom },
      `to:`, view,
    )
  }
  const tol = positionTol / 2**currZoom;
  if (debug) {
    console.log(tag, "tol", tol)
  }

  if (
    !approxEqual(currCenter.lat, view.center.lat, tol) ||
    !approxEqual(currCenter.lng, view.center.lng, tol) ||
    currZoom !== view.zoom
  ) {
    if (debug) console.log(tag, `setting to`, view)
    map.setView(view.center, view.zoom, { animate: false });
    if (debug) {
      console.log(tag, `set to`, printableLatLng(map.getCenter()), map.getZoom())
    }
  }
  return null;

};

export default SetView;
