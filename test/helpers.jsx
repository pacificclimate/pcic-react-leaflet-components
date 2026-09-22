// Test helpers for rendering the library's map components headlessly.

import React from "react";
import { render } from "@testing-library/react";
import { useMap } from "react-leaflet";

// Neither jsdom nor happy-dom does layout, so every element reports a size of
// zero and Leaflet believes the map is 0x0: it loads a single tile and
// `getBounds()` collapses to a point. Leaflet sizes the map from the
// container's `clientWidth`/`clientHeight`, so stubbing those two on the
// `.leaflet-container` element is enough to give it a viewport.
export function giveMapsASize(width = 600, height = 400) {
  for (const [prop, value] of [
    ["clientWidth", width],
    ["clientHeight", height],
  ]) {
    Object.defineProperty(window.HTMLElement.prototype, prop, {
      configurable: true,
      get() {
        return this.classList?.contains("leaflet-container") ? value : 0;
      },
    });
  }
}

// A `ref` does not reach the MapContainer, so the only way to the Leaflet map
// object is a child using `useMap()`.
export function CaptureMap({ onMap }) {
  onMap(useMap());
  return null;
}

// Render `element` (a base map) and return the Leaflet map along with the
// usual testing-library result.
export function renderMap(element, children = null) {
  let map;
  const result = render(
    React.cloneElement(element, {}, [
      <CaptureMap key="capture" onMap={(m) => (map = m)} />,
      children,
    ]),
  );
  return { ...result, getMap: () => map };
}

export const tileUrls = (container) =>
  [...container.querySelectorAll("img.leaflet-tile")]
    .map((img) => img.src)
    .sort();
