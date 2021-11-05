import { useMap } from 'react-leaflet';
import L from 'leaflet';


const printableLatLng = latLng => ({lat: latLng.lat, lng: latLng.lng});

const approxEqual = (a, b, tol=0.1, rel_tol=0.001) => {
  return Math.abs(a - b) <= tol;
}


const SetCenterLatLng = ({ lat, lng, zoom, debug=false }) => {
  const map = useMap();
  const currCenter = map.getCenter();
  const tag = `SetCenterLatLng ${map._container.id}:`;
  if (debug) {
    console.log(
      tag,
      `from:`, printableLatLng(currCenter),
      `to:`, { lat, lng },
    )
  }
  // approxEqual is used to handle the inaccuracy in final position after
  // setting center due to finite resolution of map; it only goes to the nearest
  // pixel. This inaccuracy varies with zoom level. IF a fixed center is
  // specified AND the actual position causes the element containing the map to
  // re-render, THEN we get an infinite render loop. approxEqual stops that.
  //
  // HOWEVER, if either condition is NOT true -- center is not fixed, but set
  // from actual position, OR actual position does not cause re-rendering --
  // then we do not need approxEqual. Both of these conditions have been tested
  // in code.
  //
  // EXCEPTION: There can still be a problem when center is set from the actual
  // map center. This has happened when the map div is dynamically resized,
  // and it happens when two maps are mutually synchronized to each other; any
  // slight difference in rendering can make their respective centers slightly
  // different and result in an infinite competition between the two unless
  // slight differences are tolerated.
  //
  // CAVEAT: The following things do or may affect the difference between set
  // vs actual center:
  // - zoom level
  // - center position itself
  // - CRS
  // Note these are all due essentially to the action of map projection.
  // Ideally we would be able to calculate a tolerance factor based on these
  // values and apply it dynamically. That seems very difficult. An alternative
  // may be to try some test center settings and use the bobble in those
  // results to determine the tolerance. That is certainly possible but may be
  // very weird for the user as we do this.
  if (!approxEqual(currCenter.lat, lat) || !approxEqual(currCenter.lng, lng)) {
    const center = L.latLng(lat, lng);
    if (debug) console.log(tag, `setting to`, printableLatLng(center))
    // TODO: Can omit zoom?
    map.setView(center, map.getZoom(), { animate: false });
    if (debug) {
      console.log(tag, `set to`, printableLatLng(map.getCenter()), map.getZoom())
    }
  }
  return null;
};


export default SetCenterLatLng;
