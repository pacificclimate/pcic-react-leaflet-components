// Factory (higher order component) returning a functional component that
// attaches event responders to a React Leaflet map (MapContainer) via
// `useMapEvents`. The event responders call the provided callback function with
// the Leaflet map object as the argument. The resulting functional component
// should be rendered inside a `MapContainer`. It causes the callback to be
// called whenever any of the named events is triggered.

import { useMapEvents } from 'react-leaflet';
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import fromPairs from 'lodash/fp/fromPairs';

// TODO: Memoize.

const callbackOnMapEvents = (eventNames, callback) => {
  return () => {
    const leafletMap = useMapEvents(
      flow(
        map(name => [name, () => { callback(leafletMap); }]),
        fromPairs,
      )(eventNames)
    );
    return null;
  };
};

export default callbackOnMapEvents;
