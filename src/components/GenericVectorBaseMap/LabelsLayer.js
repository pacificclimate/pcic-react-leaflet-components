import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const LabelsLayer = ({ wmsUrl, wmsOptions }) => {
    const map = useMap();

    useEffect(() => {
        const wmsLayer = L.tileLayer.wms(wmsUrl, wmsOptions).addTo(map);
        return () => {
            map.removeLayer(wmsLayer);
        };
    }, [map]);

    return null;
};
export default LabelsLayer;