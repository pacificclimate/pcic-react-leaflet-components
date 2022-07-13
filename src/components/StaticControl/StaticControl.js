import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { useLeafletContext } from '@react-leaflet/core';
import L from 'leaflet';
import '../../leaflet-extensions/Control.Static';


function StaticControl({ children, ...rest }) {
  const context = useLeafletContext();

  useEffect(() => {
    const control = L.control.static(rest);
    control.addTo(context.map);
    const root = createRoot(control.getContainer());
    root.render(children);

    return () => {
      control.remove();
    };
  });

  return null;
}


export default StaticControl;
