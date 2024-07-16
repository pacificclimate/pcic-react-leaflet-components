const vectorTileStyling = {
  boundary: function (properties, zoom) {
    console.log('omt_boundary:', { properties, zoom });
    if (zoom < 0 || zoom > 21) return [];
    return [];
  },
  landcover: function (properties, zoom) {
    console.log('omt_landcover:', { properties, zoom });
    if (zoom < 8 || zoom > 14) return [];
    return [];
  },
  landuse: function (properties, zoom) {
    console.log('omt_landuse:', { properties, zoom });
    if (zoom < 0 || zoom > 13) return [];
    return [];
  },
  mountain_peak: function (properties, zoom) {
    console.log('omt_mountain_peak:', { properties, zoom });
    if (zoom < 9 || zoom > 21) return [];
    return [];
  },
  park: function (properties, zoom) {
    console.log('omt_park:', { properties, zoom });
    if (zoom < 10 || zoom > 21) return [];
    return [];
  },
  place: function (properties, zoom) {
    console.log('omt_place:', { properties, zoom });
    if (zoom < 10 || zoom > 21) return [];
    return []
  },
  transportation: function (properties, zoom) {
    console.log('omt_transportation:', { properties, zoom });
    if (zoom < 10 || zoom > 21) return [];
    return [];
  },
  transportation_name: function (properties, zoom) {
    console.log('omt_transportation_name:', { properties, zoom });
    if (zoom < 14 || zoom > 21) return [];
    return [];
  },
  water: function (properties, zoom) {
    const zoomLevel = Number(zoom);
    if (zoomLevel < 6 || zoomLevel > 14) return [];

    const waterStyle = {
      ocean: {
        weight: 0.0,
        color: '#1E90FF',
        fillColor: '#1E90FF',
        fillOpacity: 1,
        fill: true,
      },
      river: {
        weight: 0.0,
        color: '#ADD8E6',
        fillColor: '#ADD8E6',
        fillOpacity: 1,
        fill: true,
      },
      lake: {
        weight: 0.0,
        color: '#ADD8E6',
        fillColor: '#ADD8E6',
        fillOpacity: 1,
        fill: true,
      },
      pond: {
        weight: 0.0,
        color: '#ADD8E6',
        fillColor: '#ADD8E6',
        fillOpacity: 1,
        fill: true,
      },
      swimming_pool: {
        weight: 0.0,
        color: '#00FF7F',
        fillColor: '#00FF7F',
        fillOpacity: 1,
        fill: true,
      }
    };

    const waterClass = properties.class;
    if (waterClass === 'ocean') return waterStyle.ocean;
    if (waterClass === 'river' && zoomLevel >= 9) return waterStyle.river;
    if (waterClass === 'lake' && zoomLevel >= 7) return waterStyle.lake;
    if (waterClass === 'pond' && zoomLevel >= 11) return waterStyle.pond;
    if (waterClass === 'swimming_pool' && zoomLevel > 9) return waterStyle.swimming_pool;

    return [];
  },
  water_name: function (properties, zoom) {
    console.log('omt_water_name:', { properties, zoom });
    if (zoom < 7 || zoom > 21) return [];
    return [];
  },
  waterway: function (properties, zoom) {
    console.log('omt_waterway:', { properties, zoom });
    if (zoom < 7 || zoom > 14) return [];
    return [];
  }
};
export default vectorTileStyling;