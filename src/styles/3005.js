import legend from './legends.js';

const vectorTileStyling = {
  boundary: function (properties, zoom) {
    if (zoom < 6 || zoom > 14) return [];

    const BoundaryStyle = legend.Boundary;
    const adminLevel = properties.admin_level;
    const isMaritime = properties.maritime;
    const isDisputed = properties.disputed;

    if (adminLevel == 4) return [BoundaryStyle.Level_4];
    if (adminLevel == 6 && zoom >= 10) return [BoundaryStyle.Level_6];
    if (adminLevel >= 3 && !isMaritime) return [];
    if (adminLevel < 3 && isDisputed) return [BoundaryStyle.Level_2_disputed];
    if (adminLevel < 3 && !isDisputed) return [BoundaryStyle.Level_2];

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
      return [{ color: legend.Landcover.forest, fill: true, fillOpacity: 1, weight: 0 }];
    if (grassClasses.includes(landcoverClass) && zoom >= 8)
      return [{ color: legend.Landcover.farmland, fill: true, fillOpacity: 1, weight: 0 }];
    if (glacierClasses.includes(landcoverClass))
      return [{ color: legend.Landcover.glacier, fill: true, fillOpacity: 1, weight: 0 }];
    if (landcoverClass === 'rock' && zoom >= 10)
      return [{ color: legend.Landcover.rock, fill: true, fillOpacity: 1, weight: 0 }];
    if (landcoverClass === 'sand' && zoom >= 10)
      return [{ color: legend.Landcover.sand, fill: true, fillOpacity: 1, weight: 0 }];

    return [];
  },

  landuse: function (properties, zoom) {
    if (zoom < 10 || zoom > 13) return [];

    const landuseClass = properties.class;
    const residentialClasses = ['residential', 'suburb', 'quarter', 'neighbourhood', 'kindergarten', 'school', 'university', 'college', 'playground'];
    const commercialClasses = ['commercial', 'industrial', 'retail', 'bus_station', 'library', 'hospital', 'stadium', 'pitch', 'track', 'theme_park', 'zoo'];
    const specialClasses = ['railway', 'cemetery', 'military', 'garages', 'dam', 'quarry'];

    if (residentialClasses.includes(landuseClass))
      return [{ color: legend.Landuse.residentialAndCommunity, fill: true, fillOpacity: 1, weight: 0 }];
    if (commercialClasses.includes(landuseClass))
      return [{ color: legend.Landuse.commercialAndPublicServices, fill: true, fillOpacity: 1, weight: 0 }];
    if (specialClasses.includes(landuseClass))
      return [{ color: legend.Landuse.specialAndInfrastructure, fill: true, fillOpacity: 1, weight: 0 }];

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
        fillOpacity: 1,
        fill: true,
        weight: 0
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
    if (transportationClass === 'tertiary' && zoom >= 13) return [{ color: legend.Transportation.tertiary, weight: 1.0 }];
    if (transportationClass === 'minor' && zoom > 14) return [{ color: legend.Transportation.minor, weight: 0.8 }];
    if (transportationClass === 'path' && zoom > 14) return [{ color: legend.Transportation.path, weight: 0.6 }];

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
        fillOpacity: 1,
        fill: true,
        weight: 0
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
        fillOpacity: 1,
        fill: true,
        weight: 0
      }
    ] || [];
  }
};

export default vectorTileStyling;
