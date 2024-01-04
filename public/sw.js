import workbox from "./workbox";

fetch('https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js')
  .then((response) => response.text())
  .then((text) => {
    eval(text);
    const { registerRoute } = workbox.routing;
    const { CacheFirst } = workbox.strategies;

    registerRoute(
      ({ url }) => true,
      new CacheFirst()
    );
  });
