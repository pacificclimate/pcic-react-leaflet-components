// Tile sources for the playground demos.
//
// Kept separate from App.jsx because the tile source is the thing most likely
// to change while working locally -- pointing a demo at a dev tile server
// should not mean editing the routing table.
//
// These are plain module constants, not environment variables: the library
// takes its tile URL from the required `baseMapTilesUrl` prop, and nothing
// here is build-time substituted.

export const bcBaseMapTilesUrl =
  "https://swarm.pacificclimate.org/tiles/bc-albers-lite/{z}/{x}/{y}.png";

export const ynwtBaseMapTilesUrl =
  "https://swarm.pacificclimate.org/tiles/yukon-albers-lite/{z}/{x}/{y}.png";
