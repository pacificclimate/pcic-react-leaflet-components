// EEZLayer: An optional GeoJSON overlay for Canada's exclusive economic zones.
//
// GeoJSON coordinates are WGS84 longitude/latitude. Leaflet projects them into
// the CRS of the containing MapContainer, including the custom CRS used by the
// base-map components in this package.

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GeoJSON } from "react-leaflet";

export const defaultEEZGeoJSONUrl =
  "https://beehive.pacificclimate.org/tiles/eez/eez_boundaries_canada_v12.geojson";

export const defaultEEZAttribution =
  '&copy; <a href="https://www.marineregions.org/">Flanders Marine Institute</a> ' +
  '(2023), <a href="https://doi.org/10.14284/632">World EEZ v12</a> (CC BY 4.0)';

const defaultStyle = {
  color: "rgba(134, 161, 177, 0.4)",
  weight: 3,
  lineJoin: "round",
  lineCap: "round",
  fill: false,
};

function EEZLayer({ url, style, attribution, onError, ...geoJSONProps }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setData(null);

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch EEZ GeoJSON: ${response.status} ${response.statusText}`,
          );
        }
        return response.json();
      })
      .then((geoJSON) => setData(geoJSON))
      .catch((error) => {
        if (error.name !== "AbortError" && onError) {
          onError(error);
        }
      });

    return () => controller.abort();
  }, [url, onError]);

  return data ? (
    <GeoJSON
      data={data}
      style={style || defaultStyle}
      attribution={attribution}
      interactive={false}
      {...geoJSONProps}
    />
  ) : null;
}

EEZLayer.propTypes = {
  // URL of a GeoJSON FeatureCollection in WGS84 (EPSG:4326).
  url: PropTypes.string,

  // Leaflet PathOptions object or style function, passed to GeoJSON.
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  // Attribution shown by Leaflet's attribution control.
  attribution: PropTypes.string,

  // Called if the GeoJSON request fails. No layer is rendered on failure.
  onError: PropTypes.func,
};

EEZLayer.defaultProps = {
  url: defaultEEZGeoJSONUrl,
  style: null,
  attribution: defaultEEZAttribution,
  onError: null,
};

export default EEZLayer;
