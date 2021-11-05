import React  from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';


const printableLatLng = latLng => ({lat: latLng.lat, lng: latLng.lng});


const approxEqual = (a, b, tol=0.1, rel_tol=0.001) => {
  return Math.abs(a - b) <= tol;
}


const SetView = ({
  lat, lng, zoom, positionTol= 1, debug=false
}) => {
  const map = useMap();
  const tag = `SetView ${map._container.id}:`;
  const currCenter = map.getCenter();
  const currZoom = map.getZoom();
  if (debug) {
    console.log(
      tag,
      `from:`, { ...printableLatLng(currCenter), zoom: currZoom },
      `to:`, { lat, lng, zoom },
    )
  }
  const tol = positionTol / 2**currZoom;
  if (debug) {
    console.log(tag, "tol", tol)
  }

  if (
    !approxEqual(currCenter.lat, lat, tol) ||
    !approxEqual(currCenter.lng, lng, tol) ||
    currZoom !== zoom
  ) {
    const center = L.latLng(lat, lng);
    if (debug) console.log(tag, `setting to`, printableLatLng(center))
    // TODO: Can omit zoom?
    map.setView(center, zoom, { animate: false });
    if (debug) {
      console.log(tag, `set to`, printableLatLng(map.getCenter()), map.getZoom())
    }
  }
  return null;

};

export default SetView;
