import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.vectorgrid';

const VectorGridLayer = ({ tilesUrl, vectorTileOptions }) => {
    const map = useMap();

    useEffect(() => {
        try {
            const vectorGrid = L.vectorGrid.protobuf(tilesUrl, vectorTileOptions).addTo(map);
            return () => {
                map.removeLayer(vectorGrid);
            };
        } catch (error) {
            console.error('Error setting up vector grid:', error);
        }
    }, [map, tilesUrl, vectorTileOptions]);

    return null;
};

export default VectorGridLayer;
