import { useEffect } from 'react';
import ReactDom from 'react-dom';

import { useLeafletContext } from '@react-leaflet/core';
import L from 'leaflet';
import '../../leaflet-extensions/Control.Static';


function StaticControl({ children, ...rest }) {
  const context = useLeafletContext();

  useEffect(() => {
    const control = L.control.static(rest);
    control.addTo(context.map);
    ReactDom.render(children, control.getContainer());

    return () => {
      control.remove();
    };
  });

  return null;
}


export default StaticControl;
