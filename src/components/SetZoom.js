import { useMap } from 'react-leaflet';


const SetZoom = ({ zoom, debug=false }) => {
  const map = useMap();
  const currZoom = map.getZoom();
  if (debug) {
    console.log(
      `SetZoom ${map._container.id}:`,
      `from:`, currZoom,
      `to:`, zoom,
    )
  }
  if (currZoom !== zoom) {
    if (debug) console.log(`SetZoom ${map._container.id}:`, `setting to`, zoom)
    map.setZoom(zoom);
    if (debug) {
      console.log(
        `SetZoom ${map._container.id}:`,
        `set to`, map.getZoom(),
      )
    }
  }
  return null;
};


export default SetZoom;
