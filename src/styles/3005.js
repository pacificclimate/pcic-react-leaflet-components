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
    };

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
        color: '##90b772',
        fillColor: '##90b772',
        fillOpacity: 1,
        fill: true,
      },
      farmland: {
        weight: 0.0,
        color: '##b3d599',
        fillColor: '##b3d599',
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
    const forestClasses = ['tree', 'forest', ' wood'];
    const grassClasses = ['wetland', 'grass', 'farmland'];
    const landcoverSubClass = properties.subclass;

    if (forestClasses.includes(landcoverClass) || forestClasses.includes(landcoverSubClass)) return [landcoverStyle.forest];
    if (grassClasses.includes(landcoverClass) && zoom > 8) return [landcoverStyle.farmland];
    if (glacierClasses.includes(landcoverClass)) return [landcoverStyle.glacier];
    if (landcoverClass === 'rock') return [landcoverStyle.rock];
    if (landcoverClass === 'sand') return [landcoverStyle.sand];

  },

  landuse: function (properties, zoom) {
    if (zoom < 10 || zoom > 13) return [];

    
    const groupStyles = {
      residentialAndCommunity: {
        weight: 0,
        color: '#bbbbbb',
        fillColor: '#F3BEA3',
        fillOpacity: 1,
        fill: true,
      },
      commercialAndPublicServices: {
        weight: 0,
        color: '#bbbbbb',
        fillColor: '#83C5BE',
        fillOpacity: 1,
        fill: true,
      },
      specialAndInfrastructure: {
        weight: 0,
        color: '#bbbbbb',
        fillColor: '#FFDDD2',
        fillOpacity: 1,
        fill: true,
      }
    };

    const landuseClass = properties.class;

    
    const residentialClasses = ['residential', 'suburb', 'quarter', 'neighbourhood', 'kindergarten', 'school', 'university', 'college', 'playground'];
    const commercialClasses = ['commercial', 'industrial', 'retail', 'bus_station', 'library', 'hospital', 'stadium', 'pitch', 'track', 'theme_park', 'zoo'];
    const specialClasses = ['railway', 'cemetery', 'military', 'garages', 'dam', 'quarry'];

    
    if (residentialClasses.includes(landuseClass)) {
      return [groupStyles.residentialAndCommunity];
    } else if (commercialClasses.includes(landuseClass)) {
      return [groupStyles.commercialAndPublicServices];
    } else if (specialClasses.includes(landuseClass)) {
      return [groupStyles.specialAndInfrastructure];
    }
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
    if (zoom < 6 || zoom > 14) return [];

    const transportationStyle = {
      motorway: {
        weight: zoom < 7 ? 0.8 :
          (zoom < 8 ? 1.2 : 2),
        color: '#FE7474'
      },
      trunk: {
        weight: 1.6,
        color: '#FDE44F'
      },
      primary: {
        weight: 1.4,
        color: '#FDAF4F'
      },
      secondary: {
        weight: 1.2,
        color: '#ffffff'
      },
      tertiary: {
        weight: 1.0,
        color: '#ffffff'
      },
      minor: {
        weight: 0.8,
        color: '#ffffff'
      },
      path: {
        weight: 0.6,
        color: '#aaaaaa'
      },
      network_us: {
        weight: 2,
        color: '#FCA1FD'
      },
      network_ca: {
        weight: 2,
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
        color: '#dfcbfe',
        fillColor: '#dfcbfe',
        fillOpacity: 1,
        fill: true,
      },
      taxiway: {
        weight: 1.4,
        color: '#dfcbfe',
        fillColor: '#dfcbfe',
        fillOpacity: 1,
        fill: false,
      },
      aerodrome: {
        weight: 0,
        color: '#cbfee8',
        fillColor: '#cbfee8',
        fillOpacity: 1,
        fill: true,
      }
    };

    const aerowayClass = properties.class;

    return [aerowayStyle[aerowayClass]] || [];
  },
  water: function (properties, zoom) {

    if (zoom < 6 || zoom > 14) return [];

    const waterStyle = {
      ocean: {
        weight: 0.0,
        color: '#abcdd7',
        fillColor: '#abcdd7',
        fillOpacity: 1,
        fill: true,
      },
      river: {
        weight: 0.0,
        color: '#abcdd7',
        fillColor: '#abcdd7',
        fillOpacity: 1,
        fill: true,
      },
      lake: {
        weight: 0.0,
        color: '#abcdd7',
        fillColor: '#abcdd7',
        fillOpacity: 1,
        fill: true,
      },
      pond: {
        weight: 0.0,
        color: '#abcdd7',
        fillColor: '#abcdd7',
        fillOpacity: 1,
        fill: true,
      },
      swimming_pool: {
        weight: 0.0,
        color: '#abcdd7',
        fillColor: '#abcdd7',
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
        color: '#abcdd7',
        fillColor: '#abcdd7',
        fillOpacity: 1,
        fill: true,
      },
      river: {
        weight: 0.0,
        color: '#abcdd7',
        fillColor: '#abcdd7',
        fillOpacity: 1,
        fill: true,
      },
      canal: {
        weight: 0.0,
        color: '#abcdd7',
        fillColor: '#abcdd7',
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