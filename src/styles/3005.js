const vectorTileStyling = {

  boundary: function (properties, zoom) {
    if (zoom < 6 || zoom > 14) return [];

    const BoundaryStyle = {
      Level_2: {
        weight: 2,
        color: '#a3a3a3',
        fill: false,
      },
      Level_2_disputed: {
        weight: 2,
        color: '#a3a3a3',
        fill: false,
        dashArray: '5, 5',  // 5 pixels dash, 5 pixels gap
        dashOffset: '0'
      }
    };

    const adminLevel = properties.admin_level;
    const isMaritime = properties.maritime;
    const isDisputed = properties.disputed;
    if (adminLevel >= 3 && !isMaritime) return [];
    if (adminLevel < 3 && isDisputed) return BoundaryStyle.Level_2_disputed;
    if (adminLevel < 3 && !isDisputed) return BoundaryStyle.Level_2;

    return [];
  },

  landcover: function (properties, zoom) {
    if (zoom < 8 || zoom > 14) return [];

    const landcoverStyle = {
      glacier: {
        weight: 0.0,
        color: '#ffffff',
        fillColor: '#ffffff',
        fillOpacity: 1,
        fill: true,
      },
      forest: {
        weight: 0.0,
        color: '#b1d193',
        fillColor: '#b1d193',
        fillOpacity: 1,
        fill: true,
      },
      farmland: {
        weight: 0.0,
        color: '#98cb7f',
        fillColor: '#98cb7f',
        fillOpacity: 1,
        fill: true,
      },
    };

    const landcoverClass = properties.class;
    const glacierClasses = ['snow', 'glacier'];
    const forestClasses = ['tree', 'forest'];
    if (glacierClasses.includes(landcoverClass)) return landcoverStyle.glacier;
    if (forestClasses.includes(landcoverClass)) return landcoverStyle.forest;
    if (landcoverClass === 'farmland' && zoom > 9) return landcoverStyle.farmland;
    return [{
      fillColor: '#f3f3f0', // Default background 
      fillOpacity: 1,
      color: '#000000',
      weight: 0,
    }];
  },

  landuse: function (properties, zoom) {
    if (zoom < 10 || zoom > 13) return [];

    const landuseStyle = {
      residential: {
        weight: 0.0,
        color: '#bbbbbb',
        fillColor: '#bbbbbb',
        fillOpacity: 1,
        fill: true,
      },
    }

    const landuseClass = properties.class;

    const residentialClasses = ['residential', 'suburb', 'neighbourhood'];
    if (residentialClasses.includes(landuseClass)) return landuseStyle.residential;


    return [];
  },

  park: function (properties, zoom) {

    if (zoom < 9 || zoom >= 14) return [];
    return [
      {
        weight: 0.0,
        color: '#b1d193',
        fillColor: '#b1d193',
        fillOpacity: 1,
        fill: true,
      }];
  },

  transportation: function (properties, zoom) {
    if (zoom < 11 || zoom > 14) return [];

    const transportationStyle = {
      motorway: {
        weight: 2,
        color: '#FFD1D2'
      },
      trunk: {
        weight: 1.8,
        color: '#ffffff'
      },
      primary: {
        weight: 1.6,
        color: '#ffffff'
      },
      secondary: {
        weight: 1.4,
        color: '#ffffff'
      },
      tertiary: {
        weight: 1.2,
        color: '#ffffff'
      },
      minor: {
        weight: 1,
        color: '#ffffff'
      },
      path: {
        weight: 0.8,
        color: '#aaaaaa'
      },
      network_us: {
        weight: 2.5,
        color: '#fed1ff'
      },
      network_ca: {
        weight: 2.5,
        color: '#d1eeff'
      }
    };

    const transportationClass = properties.class;
    const network = properties.network;

    if (network && network.startsWith('us-')) return transportationStyle.network_us;
    if (network && network === 'ca-transcanada') return transportationStyle.network_ca;

    return transportationStyle[transportationClass] || [];
  },
  aeroway: function (properties, zoom) {
    if (zoom < 11 || zoom > 14) return [];

    const aerowayStyle = {
      helipad: {
        weight: 0.0,
        color: '#FFD1D2',
        fillColor: '#FFD1D2',
        fillOpacity: 1,
        fill: true,
      },
      gate: {
        weight: 0.0,
        color: '#FFD1D2',
        fillColor: '#FFD1D2',
        fillOpacity: 1,
        fill: true,
      },

      runway: {
        weight: 1.6,
        color: '#ffffff',
        fillColor: '#ffffff',
        fillOpacity: 1,
        fill: true,
      },
      taxiway: {
        weight: 1.4,
        color: '#ffffff',
        fillColor: '#ffffff',
        fillOpacity: 1,
        fill: true,
      },
    };

    const aerowayClass = properties.class;

    return aerowayStyle[aerowayClass] || [];
  },
  water: function (properties, zoom) {

    if (zoom < 6 || zoom > 14) return [];

    const waterStyle = {
      ocean: {
        weight: 0.0,
        color: '#c2c9cb',
        fillColor: '#c2c9cb',
        fillOpacity: 1,
        fill: true,
      },
      river: {
        weight: 0.0,
        color: '#c2c9cb',
        fillColor: '#c2c9cb',
        fillOpacity: 1,
        fill: true,
      },
      lake: {
        weight: 0.0,
        color: '#c2c9cb',
        fillColor: '#c2c9cb',
        fillOpacity: 1,
        fill: true,
      },
      pond: {
        weight: 0.0,
        color: '#c2c9cb',
        fillColor: '#c2c9cb',
        fillOpacity: 1,
        fill: true,
      },
      swimming_pool: {
        weight: 0.0,
        color: '#c2c9cb',
        fillColor: '#c2c9cb',
        fillOpacity: 1,
        fill: true,
      }
    };

    const waterClass = properties.class;
    if (waterClass === 'ocean') return waterStyle.ocean;
    if (waterClass === 'river' && zoom >= 8) return waterStyle.river;
    if (waterClass === 'lake' && zoom >= 8) return waterStyle.lake;
    if (waterClass === 'pond' && zoom >= 13) return waterStyle.pond;
    if (waterClass === 'swimming_pool' && zoom > 14) return waterStyle.swimming_pool;

    return [];
  },

  waterway: function (properties, zoom) {
    if (zoom < 6 || zoom > 14) return [];

    const waterwayStyle = {
      stream: {
        weight: 0.0,
        color: '#c2c9cb',
        fillColor: '#c2c9cb',
        fillOpacity: 1,
        fill: true,
      },
      river: {
        weight: 0.0,
        color: '#c2c9cb',
        fillColor: '#c2c9cb',
        fillOpacity: 1,
        fill: true,
      },
      canal: {
        weight: 0.0,
        color: '#c2c9cb',
        fillColor: '#c2c9cb',
        fillOpacity: 1,
        fill: true,
      }
    };

    const waterwayClass = properties.class;
    if (waterwayClass === 'stream' && zoom >= 10) return waterwayStyle.stream;
    if (waterwayClass === 'river' && zoom >= 9) return waterwayStyle.river;
    if (waterwayClass === 'canal' && zoom >= 10) return waterwayStyle.canal;


    return [];
  }
};

export default vectorTileStyling;