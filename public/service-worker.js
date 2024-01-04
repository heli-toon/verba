import workbox from "workbox";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;

registerRoute(
  ({ url }) => true,
  new CacheFirst()
);