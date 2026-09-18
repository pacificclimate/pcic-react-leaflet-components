import React from "react";
import { describe, it, expect, beforeAll } from "vitest";
import { render } from "@testing-library/react";
import { BCBaseMap, YNWTBaseMap } from "../src/index.js";
import { giveMapsASize, renderMap, tileUrls } from "./helpers.jsx";

const tilesUrl = "https://tiles.example.com/{z}/{x}/{y}.png";

beforeAll(() => giveMapsASize(600, 400));

describe("BCBaseMap", () => {
  it("renders a Leaflet map in BC Albers", () => {
    const { container, getMap } = renderMap(
      <BCBaseMap
        baseMapTilesUrl={tilesUrl}
        center={BCBaseMap.initialViewport.center}
        zoom={BCBaseMap.initialViewport.zoom}
      />,
    );
    expect(container.querySelector(".leaflet-container")).toBeInTheDocument();
    expect(getMap().options.crs.code).toBe("EPSG:3005");
    expect(getMap().getZoom()).toBe(6);
  });

  // Pins the whole proj4leaflet CRS pipeline: a change to the proj4def, the
  // tile matrix or `resolutions()` moves these tile indices.
  it("requests the BC Albers tiles covering the initial viewport", () => {
    const { container } = render(
      <BCBaseMap
        baseMapTilesUrl={tilesUrl}
        center={BCBaseMap.initialViewport.center}
        zoom={BCBaseMap.initialViewport.zoom}
      />,
    );
    expect(tileUrls(container)).toEqual([
      "https://tiles.example.com/6/32/29.png",
      "https://tiles.example.com/6/32/30.png",
      "https://tiles.example.com/6/32/31.png",
      "https://tiles.example.com/6/33/29.png",
      "https://tiles.example.com/6/33/30.png",
      "https://tiles.example.com/6/33/31.png",
      "https://tiles.example.com/6/34/29.png",
      "https://tiles.example.com/6/34/30.png",
      "https://tiles.example.com/6/34/31.png",
    ]);
  });

  it("shows the OpenStreetMap attribution", () => {
    const { container } = render(
      <BCBaseMap
        baseMapTilesUrl={tilesUrl}
        center={{ lat: 55, lng: -125 }}
        zoom={6}
      />,
    );
    expect(
      container.querySelector(".leaflet-control-attribution"),
    ).toHaveTextContent("OpenStreetMap");
  });
});

describe("YNWTBaseMap", () => {
  it("renders in Yukon Albers and requests its own tiles", () => {
    const { container, getMap } = renderMap(
      <YNWTBaseMap
        baseMapTilesUrl={tilesUrl}
        center={YNWTBaseMap.initialViewport.center}
        zoom={YNWTBaseMap.initialViewport.zoom}
      />,
    );
    expect(getMap().options.crs.code).toBe("EPSG:3578");
    expect(tileUrls(container)).toEqual([
      "https://tiles.example.com/6/32/29.png",
      "https://tiles.example.com/6/32/30.png",
      "https://tiles.example.com/6/33/29.png",
      "https://tiles.example.com/6/33/30.png",
      "https://tiles.example.com/6/34/29.png",
      "https://tiles.example.com/6/34/30.png",
    ]);
  });
});
