'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a4c29422858a0f16759eefcc7ef32185",
"assets/AssetManifest.bin.json": "667ed6e9060a3a406287bcbfe173b9a8",
"assets/AssetManifest.json": "db868cd47ab907900c9ff6f2163c6202",
"assets/assets/images/160.png": "a8d11682d14fca21b799141fca4113f7",
"assets/assets/images/30.png": "e20db8bd5126f5c93e957e818516c4f0",
"assets/assets/images/30_1.png": "24ffd87ffc8b56fe79e15cfa100b702b",
"assets/assets/images/60.png": "6af7903850685263a35b2b5b5ef3c003",
"assets/assets/images/7.2.png": "738f162143baaa5b06a3ca2547f61847",
"assets/assets/images/app_dashboard.png": "6a8fc3e47d352be61abc0dffed041ccb",
"assets/assets/images/app_map.png": "ed992ac72f011379661bb7016b9bab5a",
"assets/assets/images/back4.png": "aaa83a9d7e0327c869a0c627eba51f1b",
"assets/assets/images/background.png": "c8bbca10852311e66ab8c349afa32273",
"assets/assets/images/bg.png": "6c26aab15367c68bde2675f2561439dd",
"assets/assets/images/bg1.png": "0c7b3f942452ee82394b184877340da6",
"assets/assets/images/CHARGEHUB.png": "87eb13543fcc59c31da1e3730c6a120d",
"assets/assets/images/cms_dashboard.png": "5f383412e020be3520332a366c9cc1e9",
"assets/assets/images/contact.png": "d2dc95697dcbf087e367ced7e36bc7c3",
"assets/assets/images/image1.png": "3a101457ace63d6c570ba1c3439aedd4",
"assets/assets/images/map.png": "162e49bb8242edc5fa2f4d5c15f54299",
"assets/assets/images/profile.png": "26a73e71678300480667525d2b59dd06",
"assets/assets/video/back.mp4": "42372d7fa6384ca0f2ea2090f548a6dd",
"assets/assets%255Cimages%255C160.png": "a8d11682d14fca21b799141fca4113f7",
"assets/assets%255Cimages%255C30.png": "e20db8bd5126f5c93e957e818516c4f0",
"assets/assets%255Cimages%255C30_1.png": "24ffd87ffc8b56fe79e15cfa100b702b",
"assets/assets%255Cimages%255C60.png": "6af7903850685263a35b2b5b5ef3c003",
"assets/assets%255Cimages%255C7.2.png": "738f162143baaa5b06a3ca2547f61847",
"assets/assets%255Cimages%255Capp_dashboard.png": "6a8fc3e47d352be61abc0dffed041ccb",
"assets/assets%255Cimages%255Capp_map.png": "ed992ac72f011379661bb7016b9bab5a",
"assets/assets%255Cimages%255Cback4.png": "aaa83a9d7e0327c869a0c627eba51f1b",
"assets/assets%255Cimages%255Cbackground.png": "c8bbca10852311e66ab8c349afa32273",
"assets/assets%255Cimages%255Cbg.png": "6c26aab15367c68bde2675f2561439dd",
"assets/assets%255Cimages%255Cbg1.png": "0c7b3f942452ee82394b184877340da6",
"assets/assets%255Cimages%255CCHARGEHUB.png": "87eb13543fcc59c31da1e3730c6a120d",
"assets/assets%255Cimages%255Ccms_dashboard.png": "5f383412e020be3520332a366c9cc1e9",
"assets/assets%255Cimages%255Ccontact.png": "d2dc95697dcbf087e367ced7e36bc7c3",
"assets/assets%255Cimages%255Cimage1.png": "3a101457ace63d6c570ba1c3439aedd4",
"assets/assets%255Cimages%255Cmap.png": "162e49bb8242edc5fa2f4d5c15f54299",
"assets/assets%255Cimages%255Cprofile.png": "26a73e71678300480667525d2b59dd06",
"assets/assets%255Cvideo%255Cback.mp4": "42372d7fa6384ca0f2ea2090f548a6dd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "900e1be57cbc9236f1f38570affdb563",
"assets/NOTICES": "4cdb88a04ecf235800addd626a6ec721",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "7b5a077af62b60c643e24bb694b8ce7b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "022735d634424f28cccd3ca52ebe4a52",
"/": "022735d634424f28cccd3ca52ebe4a52",
"main.dart.js": "a162f5d3a346646e314afade6344a3f7",
"manifest.json": "a260b3ae68c6f393f17288dee87ffdc4",
"version.json": "e5321dc52cece933235908107ebe46eb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
