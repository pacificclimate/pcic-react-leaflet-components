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
      },
      Level_4: {
        weight: 1.6,
        color: '#81968A',
        fill: false,
        dashArray: '5, 5',
        dashOffset: '0'
      },
      Level_6: {
        weight: 1,
        color: '#81968A',
        fill: false,
        dashArray: '3, 3',
        dashOffset: '0'
      },
      Aboriginal_lands: {
        weight: 0,
        color: '#CFA6D3',
        fillOpacity: 1,
        fill: true,
      }
    };

    const adminLevel = properties.admin_level;
    const isMaritime = properties.maritime;
    const isDisputed = properties.disputed;
    const boundaryClass = properties.class;
    if (boundaryClass == 'aboriginal_lands' && zoom >= 7) return [BoundaryStyle.Aboriginal_lands];
    if (adminLevel == 4) return [BoundaryStyle.Level_4];
    if (adminLevel == 6 && zoom >= 10) return [BoundaryStyle.Level_6];
    if (adminLevel >= 3 && !isMaritime) return [];
    if (adminLevel < 3 && isDisputed) return [BoundaryStyle.Level_2_disputed];
    if (adminLevel < 3 && !isDisputed) return [BoundaryStyle.Level_2];


    return [];
  },

  landcover: function (properties, zoom) {
    if (zoom < 6 || zoom > 14) return [];

    const landcoverStyle = {
      glacier: {
        weight: 0.0,
        color: '#fdfdfd',
        fillColor: '#fdfdfd',
        fillOpacity: 1,
        fill: true,
      },
      forest: {
        weight: 0.0,
        color: '#7ab46f',
        fillColor: '#7ab46f',
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
      rock: {
        weight: 0.0,
        color: '#9D9284',
        fillColor: '#9D9284',
        fillOpacity: 1,
        fill: true,
      },
      sand: {
        weight: 0.0,
        color: '#f6dfa7',
        fillColor: '#f6dfa7',
        fillOpacity: 1,
        fill: true,
      },
    };

    const landcoverClass = properties.class;
    const glacierClasses = ['snow', 'glacier', 'ice'];
    const forestClasses = ['tree', 'forest', 'wetland', 'grass', ' wood'];
    const landcoverSubClass = properties.subclass;

    if (forestClasses.includes(landcoverClass) || forestClasses.includes(landcoverSubClass)) return [landcoverStyle.forest];
    if (landcoverClass === 'farmland' && zoom > 8) return [landcoverStyle.farmland];
    if (glacierClasses.includes(landcoverClass)) return [landcoverStyle.glacier];
    if (landcoverClass === 'rock') return [landcoverStyle.rock];
    if (landcoverClass === 'sand') return [landcoverStyle.sand];
    return [{
      fillColor: '#fdfdfd', // Default background 
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
        fillColor: '#866759',
        fillOpacity: 1,
        fill: true,
      },
    }

    const landuseClass = properties.class;

    const residentialClasses = ['residential', 'suburb', 'neighbourhood', 'military', 'university', 'hospital'];
    if (residentialClasses.includes(landuseClass)) return [landuseStyle.residential];


    return [];
  },

  park: function (properties, zoom) {
    if (zoom < 6 || zoom >= 14) return [];
    if (properties.rank) {
      return []; // Return an empty array for point features
    }
    return [
      {
        weight: 0.0,
        color: '#a0cb7f',
        fillColor: '#a0cb7f',
        fillOpacity: 1,
        fill: true,

      }];
  },

  transportation: function (properties, zoom) {
    if (zoom < 11 || zoom > 14) return [];

    const transportationStyle = {
      motorway: {
        weight: 2,
        color: '#FD4F4F'
      },
      trunk: {
        weight: 1.8,
        color: '#FDE44F'
      },
      primary: {
        weight: 1.6,
        color: '#FDAF4F'
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
        color: '#FCA1FD'
      },
      network_ca: {
        weight: 2.5,
        color: '#FF7B9B'
      }
    };

    const transportationClass = properties.class;
    const network = properties.network;

    if (network && network.startsWith('us-') && zoom >= 6) return [transportationStyle.network_us];
    if (network && network === 'ca-transcanada' && zoom >= 6) return [transportationStyle.network_ca];

    if (transportationClass === 'motorway' && zoom >= 6) return [transportationStyle.motorway];
    if (transportationClass === 'trunk' && zoom >= 8) return [transportationStyle.trunk];
    if (transportationClass === 'secondary' && zoom >= 10) return [transportationStyle.secondary];
    if (transportationClass === 'tertiary' && zoom >= 13) return [transportationStyle.tertiary];
    if (transportationClass === 'minor' && zoom > 14) return [transportationStyle.minor];
    if (transportationClass === 'path' && zoom > 14) return [transportationStyle.path];
    return [];
  },
  aeroway: function (properties, zoom) {
    if (zoom < 11 || zoom > 14) return [];

    const aerowayStyle = {
      helipad: {
        weight: 0.0,
        color: '#fff8a9',
        fillColor: '#fff8a9',
        fillOpacity: 1,
        fill: true,
      },
      gate: {
        weight: 0.0,
        color: '#fff8a9',
        fillColor: '#fff8a9',
        fillOpacity: 1,
        fill: true,
      },

      runway: {
        weight: 1.6,
        color: '#A9B0FF',
        fillColor: '#A9B0FF',
        fillOpacity: 1,
        fill: true,
      },
      taxiway: {
        weight: 1.4,
        color: '#A9B0FF',
        fillColor: '#A9B0FF',
        fillOpacity: 1,
        fill: true,
      },
    };

    const aerowayClass = properties.class;

    return [aerowayStyle[aerowayClass]] || [];
  },
  water: function (properties, zoom) {

    if (zoom < 6 || zoom > 14) return [];

    const waterStyle = {
      ocean: {
        weight: 0.0,
        color: '#c1d1d5',
        fillColor: '#c1d1d5',
        fillOpacity: 1,
        fill: true,
      },
      river: {
        weight: 0.0,
        color: '#c1d1d5',
        fillColor: '#c1d1d5',
        fillOpacity: 1,
        fill: true,
      },
      lake: {
        weight: 0.0,
        color: '#c1d1d5',
        fillColor: '#c1d1d5',
        fillOpacity: 1,
        fill: true,
      },
      pond: {
        weight: 0.0,
        color: '#c1d1d5',
        fillColor: '#c1d1d5',
        fillOpacity: 1,
        fill: true,
      },
      swimming_pool: {
        weight: 0.0,
        color: '#c1d1d5',
        fillColor: '#c1d1d5',
        fillOpacity: 1,
        fill: true,
      }
    };

    const waterClass = properties.class;
    if (waterClass === 'ocean') return [waterStyle.ocean];
    if (waterClass === 'river') return [waterStyle.river];
    if (waterClass === 'lake') return [waterStyle.lake];
    if (waterClass === 'pond' && zoom >= 13) return [waterStyle.pond];
    if (waterClass === 'swimming_pool' && zoom > 14) return [waterStyle.swimming_pool];

    return [];
  },

  waterway: function (properties, zoom) {
    if (zoom < 6 || zoom > 14) return [];

    const waterwayStyle = {
      stream: {
        weight: 0.0,
        color: '#c1d1d5',
        fillColor: '#c1d1d5',
        fillOpacity: 1,
        fill: true,
      },
      river: {
        weight: 0.0,
        color: '#c1d1d5',
        fillColor: '#c1d1d5',
        fillOpacity: 1,
        fill: true,
      },
      canal: {
        weight: 0.0,
        color: '#c1d1d5',
        fillColor: '#c1d1d5',
        fillOpacity: 1,
        fill: true,
      }
    };

    const waterwayClass = properties.class;
    if (waterwayClass === 'stream' && zoom >= 6) return [waterwayStyle.stream];
    if (waterwayClass === 'river' && zoom >= 6) return [waterwayStyle.river];
    if (waterwayClass === 'canal' && zoom >= 10) return [waterwayStyle.canal];


    return [];
  }
};

export default vectorTileStyling;