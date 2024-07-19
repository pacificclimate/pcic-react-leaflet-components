const createSvgIcon = (text, fontSize) => {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="50">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="${fontSize}" fill="#5F95D3" stroke="" stroke-width="0.5">
          ${text}
      </text>
  </svg>`;
  return L.icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(svg)}`,
    iconSize: [200, 50],
    iconAnchor: [100, 25]
  });
};

const createMountainPeakIcon = (text, fontSize) => {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40">
    <polygon points="15,2 27,27 3,27" style="fill:#ffcb99;fill-opacity:0.9;stroke:#a3a3a3;stroke-width:0.5" />
    <text x="50%" y="35" dominant-baseline="middle" text-anchor="middle" font-size="${fontSize}" fill="#cb8716">
      ${text}
    </text>
  </svg>`;
  return L.icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(svg)}`,
    iconSize: [30, 40],
    iconAnchor: [15, 40]
  });
};

// Line attrs:
// color: "#a3a3a3"
// dashArray: null
// dashOffset: null
// fill: false
// fillColor: null
// fillOpacity: 0.2
// fillRule: "evenodd"
// interactive: true
// lineCap: "round"
// lineJoin : "round"
// opacity: 1
// pane: "overlayPane"
// stroke: true
// weight: 0.1

const vectorTileStyling = {
  boundary: function (properties, zoom) {
    if (zoom < 6 || zoom > 21) return [];

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
    };

    const landcoverClass = properties.class;
    const glacierClasses = ['snow', 'glacier'];
    const forestClasses = ['tree', 'forest'];
    if (glacierClasses.includes(landcoverClass)) return landcoverStyle.glacier;
    if (forestClasses.includes(landcoverClass)) return landcoverStyle.forest;

    return [{
      fillColor: '#f3f2f1', // Default background 
      fillOpacity: 1,
      color: '#000000',
      weight: 0,
    }];
  },

  landuse: function (properties, zoom) {
    if (zoom < 6 || zoom > 13) return [];

    const landuseStyle = {
      residential: {
        weight: 0.1,
        color: '#bbbbbb',
        fill: false,
      },
    }

    const landuseClass = properties.class;

    const residentialClasses = ['residential', 'suburb', 'neighbourhood'];
    if (residentialClasses.includes(landuseClass)) return landuseStyle.residential;

    return [];
  },
  mountain_peak: function (properties, zoom) {
    if (zoom < 13 || zoom > 14) return [];
    return {
      icon: createMountainPeakIcon(properties.name, 8)
    };
  },

  park: function (properties, zoom) {

    if (zoom <= 10 || zoom >= 14) return [];
    return [
      {
        weight: 0.0,
        color: '#b1d193',
        fillColor: '#b1d193',
        fillOpacity: 1,
        fill: true,
      }];
  },

  place: function (properties, zoom) {
    if (zoom < 10 || zoom > 14) return [];
    const placeStyles = {
      continent: {
        fontSize: 20,
        color: '#000000'
      },
      country: {
        fontSize: 18,
        color: '#000000'
      },
      state: {
        fontSize: 16,
        color: '#000000'
      },
      province: {
        fontSize: 16,
        color: '#000000'
      },
      city: {
        fontSize: 14,
        color: '#000000'
      },
      town: {
        fontSize: 12,
        color: '#000000'
      },
      village: {
        fontSize: 10,
        color: '#000000'
      },
      hamlet: {
        fontSize: 10,
        color: '#000000'
      },
      borough: {
        fontSize: 10,
        color: '#000000'
      },
      suburb: {
        fontSize: 10,
        color: '#000000'
      },
      quarter: {
        fontSize: 10,
        color: '#000000'
      },
      neighbourhood: {
        fontSize: 10,
        color: '#000000'
      },
      isolated_dwelling: {
        fontSize: 10,
        color: '#000000'
      },
      island: {
        fontSize: 10,
        color: '#000000'
      },
      aboriginal_lands: {
        fontSize: 10,
        color: '#000000'
      }

    };
    const placeClass = properties.class;
    const style = placeStyles[placeClass] || { fontSize: 10, color: '#000000' };
    return {
      icon: createSvgIcon(properties.name, style.fontSize, style.color)
    };
  },

  transportation: function (properties, zoom) {
    if (zoom < 13 || zoom > 14) return [];

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

  transportation_name: function (properties, zoom) {
    if (zoom < 13 || zoom > 14) return [];
    return [];
  },

  transportation_name: function (properties, zoom) {

    if (zoom < 13 || zoom > 14) return [];
    return [];
  },

  water: function (properties, zoom) {
    const zoomLevel = Number(zoom);
    if (zoomLevel < 6 || zoomLevel > 14) return [];

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
    if (waterClass === 'river' && zoomLevel >= 9) return waterStyle.river;
    if (waterClass === 'lake' && zoomLevel >= 7) return waterStyle.lake;
    if (waterClass === 'pond' && zoomLevel >= 11) return waterStyle.pond;
    if (waterClass === 'swimming_pool' && zoomLevel > 9) return waterStyle.swimming_pool;

    return [];
  },
  water_name: function (properties, zoom) {
    const zoomLevel = Number(zoom);
    if (zoom <= 6 || zoom >= 14) return [];

    const waterNameStyle = {
      ocean: createSvgIcon(properties.name, 14),
      sea: createSvgIcon(properties.name, 12),
      bay: createSvgIcon(properties.name, 10),
      strait: createSvgIcon(properties.name, 10),
      lake: createSvgIcon(properties.name, 8),
    };

    const waterNameClass = properties.class;

    if (waterNameClass === 'ocean') return { icon: waterNameStyle.ocean };
    if (waterNameClass === 'sea' && zoomLevel >= 6) return { icon: waterNameStyle.sea };
    if (waterNameClass === 'bay' && zoomLevel >= 13) return { icon: waterNameStyle.bay };
    if (waterNameClass === 'strait' && zoomLevel >= 7) return { icon: waterNameStyle.strait };
    if (waterNameClass === 'lake' && zoomLevel > 9) return { icon: waterNameStyle.lake };

    return [];
  },

  waterway: function (properties, zoom) {
    if (zoom < 7 || zoom > 14) return [];
    return [
      {
        weight: 2,
        color: '#f3f3f0',
        fillColor: '#c2c9cb',
        fillOpacity: 1,
        fill: true,
      }
    ];
  }
};

export default vectorTileStyling;