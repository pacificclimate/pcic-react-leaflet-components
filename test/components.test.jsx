import React from "react";
import L from "leaflet";
import { describe, it, expect, beforeAll, afterEach, vi } from "vitest";
import { render, act, waitFor } from "@testing-library/react";
import {
  BCBaseMap,
  SetView,
  StaticControl,
  MapSpinner,
  EEZLayer,
  callbackOnMapEvents,
  defaultEEZGeoJSONUrl,
} from "../src/index.js";
import { giveMapsASize, renderMap } from "./helpers.jsx";

const tilesUrl = "https://tiles.example.com/{z}/{x}/{y}.png";
const baseMap = (
  <BCBaseMap
    baseMapTilesUrl={tilesUrl}
    center={{ lat: 55, lng: -125 }}
    zoom={6}
  />
);

beforeAll(() => giveMapsASize(600, 400));
afterEach(() => vi.restoreAllMocks());

describe("SetView", () => {
  it("moves the map to the given view", () => {
    const { getMap } = renderMap(
      baseMap,
      <SetView view={{ center: { lat: 50, lng: -120 }, zoom: 8 }} />,
    );
    expect(getMap().getCenter()).toMatchObject({ lat: 50, lng: -120 });
    expect(getMap().getZoom()).toBe(8);
  });

  it("logs the move when debug is set", () => {
    const log = vi.spyOn(console, "log").mockImplementation(() => {});
    renderMap(
      baseMap,
      <SetView view={{ center: { lat: 50, lng: -120 }, zoom: 8 }} debug />,
    );
    expect(log).toHaveBeenCalledWith(
      expect.stringMatching(/^SetView /),
      "from:",
      expect.any(String),
      "to:",
      JSON.stringify({ lat: 50, lng: -120, zoom: 8 }),
    );
    expect(log).toHaveBeenCalledWith(
      expect.stringMatching(/^SetView /),
      "!setting",
    );
  });
});

describe("StaticControl", () => {
  it("renders its children into a Leaflet control in the requested corner", () => {
    const { container } = renderMap(
      baseMap,
      <StaticControl position="topright">
        <span>legend</span>
      </StaticControl>,
    );
    const control = container.querySelector(".leaflet-control-static");
    expect(control).toHaveTextContent("legend");
    expect(control.parentElement).toHaveClass("leaflet-top", "leaflet-right");
  });
});

describe("MapSpinner", () => {
  it("overlays the named spinner across the map viewport", () => {
    const { container } = renderMap(baseMap, <MapSpinner spinner="Oval" />);
    const overlay = container.querySelector(".leaflet-overlay-pane svg");
    expect(overlay).toBeInTheDocument();
    expect(overlay.querySelector("svg.svg-loaders-svg")).toHaveAttribute(
      "stroke",
      "#98ff98",
    );
    // Sized from the map viewport rather than collapsed to a point.
    expect(parseInt(overlay.style.width, 10)).toBeGreaterThan(500);
  });

  it("follows the viewport as the map pans and zooms", () => {
    const { getMap } = renderMap(baseMap, <MapSpinner spinner="Oval" />);
    const map = getMap();
    const overlayBounds = () => {
      let bounds;
      map.eachLayer((layer) => {
        if (layer instanceof L.SVGOverlay) bounds = layer.getBounds();
      });
      return bounds;
    };

    act(() => map.panTo({ lat: 52, lng: -122 }, { animate: false }));
    expect(overlayBounds().equals(map.getBounds())).toBe(true);

    act(() => map.setZoom(8, { animate: false }));
    expect(overlayBounds().equals(map.getBounds())).toBe(true);
  });

  // Needs a real browser: jsdom does no layout, and the bug is about the
  // overlay's rendered box, not its bounds (see the note in MapSpinner.jsx).
  it.skip("is not clipped after a small pan", () => {});
});

describe("callbackOnMapEvents", () => {
  it("calls back with the map on each named event, and not on others", () => {
    const callback = vi.fn();
    const Watcher = callbackOnMapEvents(["moveend", "zoomend"], callback);
    const { getMap } = renderMap(baseMap, <Watcher />);

    act(() => getMap().fire("moveend"));
    act(() => getMap().fire("zoomend"));
    act(() => getMap().fire("click"));

    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith(getMap());
  });
});

describe("EEZLayer", () => {
  const geoJSON = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [
            [-130, 50],
            [-125, 52],
          ],
        },
      },
    ],
  };

  it("fetches the default GeoJSON and projects it into the map CRS", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(Response.json(geoJSON));
    const { container } = renderMap(baseMap, <EEZLayer />);

    await waitFor(() =>
      expect(
        container.querySelector(".leaflet-overlay-pane path"),
      ).toBeInTheDocument(),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      defaultEEZGeoJSONUrl,
      expect.anything(),
    );
    expect(
      container.querySelector(".leaflet-overlay-pane path"),
    ).toHaveAttribute("d", "M157 424L302 336");
    expect(
      container.querySelector(".leaflet-control-attribution"),
    ).toHaveTextContent("Flanders Marine Institute");
  });

  it("reports a failed fetch and renders nothing", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("nope", { status: 500, statusText: "Server Error" }),
    );
    const onError = vi.fn();
    const { container } = renderMap(
      baseMap,
      <EEZLayer url="https://example.com/eez.json" onError={onError} />,
    );

    await waitFor(() => expect(onError).toHaveBeenCalled());
    expect(onError.mock.calls[0][0].message).toMatch(/500 Server Error/);
    expect(container.querySelector(".leaflet-overlay-pane path")).toBeNull();
  });
});
