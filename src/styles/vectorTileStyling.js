import legend from './legendSelector.js';

const defaultStyle = {
  fill: true,
  fillOpacity: 1,
  weight: 0
};

const vectorTileStyling = {
  boundary: function (properties, zoom) {
    if (zoom < 6 || zoom > 14) return [];

    const BoundaryStyle = legend.Boundary;
    const { admin_level, maritime, disputed } = properties;

    if (admin_level == 4) return [BoundaryStyle.Level_4];
    if (admin_level == 6 && zoom >= 10) return [BoundaryStyle.Level_6];
    if (admin_level >= 3 && !maritime) return [];
    if (admin_level < 3 && disputed) return [BoundaryStyle.Level_2_disputed];
    if (admin_level < 3 && !disputed) return [BoundaryStyle.Level_2];

    return [];
  },

  landcover: function (properties, zoom) {
    if (zoom < 6 || zoom > 14) return [];

    const landcoverClass = properties.class;
    const glacierClasses = ['snow', 'glacier', 'ice'];
    const forestClasses = ['tree', 'forest', 'wood'];
    const grassClasses = ['wetland', 'grass', 'farmland'];
    const landcoverSubClass = properties.subclass;

    if (forestClasses.includes(landcoverClass) || forestClasses.includes(landcoverSubClass))
      return [{ color: legend.Landcover.forest, ...defaultStyle }];
    if (grassClasses.includes(landcoverClass) && zoom >= 8)
      return [{ color: legend.Landcover.farmland, ...defaultStyle }];
    if (glacierClasses.includes(landcoverClass))
      return [{ color: legend.Landcover.glacier, ...defaultStyle }];
    if (landcoverClass === 'rock' && zoom >= 10)
      return [{ color: legend.Landcover.rock, ...defaultStyle }];
    if (landcoverClass === 'sand' && zoom >= 10)
      return [{ color: legend.Landcover.sand, ...defaultStyle }];

    return [];
  },

  landuse: function (properties, zoom) {
    if (zoom < 10 || zoom > 13) return [];

    const landuseClass = properties.class;
    const residentialClasses = ['residential', 'suburb', 'quarter', 'neighbourhood', 'kindergarten', 'school', 'university', 'college', 'playground'];
    const commercialClasses = ['commercial', 'industrial', 'retail', 'bus_station', 'library', 'hospital', 'stadium', 'pitch', 'track', 'theme_park', 'zoo'];
    const specialClasses = ['railway', 'cemetery', 'military', 'garages', 'dam', 'quarry'];

    if (residentialClasses.includes(landuseClass))
      return [{ color: legend.Landuse.residentialAndCommunity, ...defaultStyle }];
    if (commercialClasses.includes(landuseClass))
      return [{ color: legend.Landuse.commercialAndPublicServices, ...defaultStyle }];
    if (specialClasses.includes(landuseClass))
      return [{ color: legend.Landuse.specialAndInfrastructure, ...defaultStyle }];

    return [];
  },

  park: function (properties, zoom) {
    if (zoom < 6 || zoom >= 14) return [];
    if (properties.rank) {
      return []; // Return an empty array for point features
    }
    return [
      {
        color: legend.Park.default,
        fillColor: legend.Park.default,
        ...defaultStyle
      }];
  },

  transportation: function (properties, zoom) {
    if (zoom < 6 || zoom > 14) return [];

    const transportationClass = properties.class;
    const network = properties.network;

    if (network && network.startsWith('us-')) return [{ color: legend.Transportation.network_us, weight: 2 }];
    if (network && network === 'ca-transcanada') return [{ color: legend.Transportation.network_ca, weight: 2 }];

    if (transportationClass === 'motorway') return [{ color: legend.Transportation.motorway, weight: zoom < 7 ? 0.8 : (zoom < 8 ? 1.2 : 2) }];
    if (transportationClass === 'trunk' && zoom >= 8) return [{ color: legend.Transportation.trunk, weight: 1.6 }];
    if (transportationClass === 'secondary' && zoom >= 10) return [{ color: legend.Transportation.secondary, weight: 1.2 }];
    if (transportationClass === 'tertiary' && zoom >= 10) return [{ color: legend.Transportation.tertiary, weight: 1.2 }];
    if (transportationClass === 'minor' && zoom > 11) return [{ color: legend.Transportation.minor, weight: 1.1 }];
    if (transportationClass === 'path' && zoom > 12) return [{ color: legend.Transportation.path, weight: 1.0 }];

    return [];
  },

  aeroway: function (properties, zoom) {
    if (zoom < 11 || zoom > 14) return [];

    const aerowayClass = properties.class;

    return [
      {
        color: legend.Aeroway[aerowayClass],
        fillColor: legend.Aeroway[aerowayClass],
        fillOpacity: 1,
        fill: true,
        weight: aerowayClass === 'runway' ? 1.6 : (aerowayClass === 'taxiway' ? 1.4 : 0.0)
      }
    ] || [];
  },

  water: function (properties, zoom) {
    if (zoom < 6 || zoom > 14) return [];

    const waterClass = properties.class;

    return [
      {
        color: legend.Water[waterClass],
        fillColor: legend.Water[waterClass],
        ...defaultStyle
      }
    ] || [];
  },

  waterway: function (properties, zoom) {
    if (zoom < 8 || zoom > 14) return [];

    const waterwayClass = properties.class;

    return [
      {
        color: legend.Waterway[waterwayClass],
        fillColor: legend.Waterway[waterwayClass],
        ...defaultStyle
      }
    ] || [];
  }
};

export default vectorTileStyling;
