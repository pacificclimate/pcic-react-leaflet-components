
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.vectorgrid';

const VectorGridLayer = ({ tilesUrl, vectorTileStyling }) => {

    const map = useMap();

    useEffect(() => {
        const vectorTileOptions = {
            rendererFactory: L.canvas.tile,
            interactive: false,
            tolerance: function (zoom) {
                if (zoom < 10) return 4;
                if (zoom < 14) return 2;
                return 1;
            },
            getFeatureId: (feature) => feature.properties.id,
            /* Not included in vector style below:
              - omt_place,               - omt_aeroway,
              - omt_aerodrome_label,     - omt_building,
              - omt_poi,                 - omt_mountain_peak,
              - omt_transportation_name, - omt_water_name.
            */
            vectorTileLayerStyles: {
                omt_park: vectorTileStyling.park,
                omt_landcover: vectorTileStyling.landcover,
                omt_water: vectorTileStyling.water,
                omt_boundary: vectorTileStyling.boundary,
                omt_landuse: vectorTileStyling.landuse,
                omt_waterway: vectorTileStyling.waterway,
                omt_aeroway: vectorTileStyling.aeroway,
                omt_transportation: vectorTileStyling.transportation,
            }
        };

        try {
            const vectorGrid = L.vectorGrid.protobuf(tilesUrl, vectorTileOptions).addTo(map);
            return () => {
                map.removeLayer(vectorGrid);
            };
        } catch (error) {
            console.error('Error setting up vector grid:', error);
        }
    }, [map]);

    return null;
};

export default VectorGridLayer;