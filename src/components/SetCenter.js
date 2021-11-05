import React  from 'react';
import { useMap } from 'react-leaflet';


const printableLatLng = latLng => ({lat: latLng.lat, lng: latLng.lng});


const SetCenter = ({ center }) => {
  const map = useMap();
  const currCenter = map.getCenter();
  const tag = `SetCenter ${map._container.id}:`;
  console.log(
    tag,
    `from:`, printableLatLng(currCenter),
    `to:`, printableLatLng(center),
  )
  if (currCenter.lat !== center.lat || currCenter.lng !== center.lng) {
    console.log(tag, `setting to`, printableLatLng(center))
    // TODO: Can omit zoom?
    map.setView(center, map.getZoom());
    console.log(tag, `set to`, printableLatLng(map.getCenter()), map.getZoom())
  }
  return null;
};

export default SetCenter;
