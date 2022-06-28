'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a1773e453077a34999cbffe9d9c12ec1",
"index.html": "8c786289dc5dbe1651808997f13c9759",
"/": "8c786289dc5dbe1651808997f13c9759",
"main.dart.js": "1cd9f34c497014630e9c3018bffd9fe6",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "782cb609ed63f16ab32ad75f1db7bcf5",
"assets/AssetManifest.json": "139f5e9d5f91673d096e22fee2b96ced",
"assets/NOTICES": "bc0228f1819446a1a45fa1dbd3cb02bb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/tab_feed.png": "7ce9420e29bbfa27b8e4a8a40d575c6e",
"assets/assets/images/tab_favorite_selected.png": "a4ad9c940f145f6c1acdf67df001eea4",
"assets/assets/images/ic_about.png": "052e545095ff1b1aa3413ba6d8134521",
"assets/assets/images/thirdScreen.png": "987f50e01efa2a98bf759c6001c7404c",
"assets/assets/images/ic_grid.png": "14decd47d27bfc0725aba9b15f23eeac",
"assets/assets/images/ic_list.png": "ca18c5ce38324f25c1c6c78b1966c97c",
"assets/assets/images/tab_cart.png": "bb1dc974878a3835c8789d6ca10e3550",
"assets/assets/images/ic_recipe.png": "a2bfd42a2cf924f1837329b673e94e47",
"assets/assets/images/ic_setting.png": "669febfabc30889de5c9185c67e212f6",
"assets/assets/images/ic_close.png": "5599f28778f6bc73c2d67fcd9f43a9d2",
"assets/assets/images/ic_account_selected.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/images/tab_inbox_selected.png": "70f8154e9b22caf48750f942df717163",
"assets/assets/images/ic_favorite_filled.png": "a4ad9c940f145f6c1acdf67df001eea4",
"assets/assets/images/ic_tool.png": "bb2851b59accc9d413bd3ef3938c53e3",
"assets/assets/images/tab_account_selected.png": "d1d864b4a794c93e789b9aa4e6942e01",
"assets/assets/images/ic_to_pay.png": "957780e2adcd2b342888b69f090e4935",
"assets/assets/images/tab_feed_selected.png": "5172786c0462c4cc407ac7bd647ed5a2",
"assets/assets/images/tab_favorite.png": "9f6f6c797785c625ee0f5bddbb6070d7",
"assets/assets/images/tab_home.png": "27f2ccca3e7ec39fddd95e01b10bc6fd",
"assets/assets/images/ic_share.png": "3635ae78dee068fb0d48f52e1150d16c",
"assets/assets/images/ic_favorite.png": "9f6f6c797785c625ee0f5bddbb6070d7",
"assets/assets/images/ic_phone.png": "48d90a24dd421e80a052769810a6b07d",
"assets/assets/images/background.png": "4e874c765a0bfc54acf3c19a1c705b81",
"assets/assets/images/ic_ingredient.png": "ed8d2de109df849473835779e92ee1d4",
"assets/assets/images/tab_order_selected.png": "aeef97fb0a4cd883a00fc0229308141b",
"assets/assets/images/ic_search.png": "7f6cd40741f68b3f70e0e79c3e69daab",
"assets/assets/images/ic_kits.png": "b91488fc7718c461f6824dd78f4c8f56",
"assets/assets/images/ic_fb.png": "62a53c1c4d55e9806bd5d4e64f9bb457",
"assets/assets/images/ic_gg.png": "ea36db70c94a7b554e50fe684b976ce1",
"assets/assets/images/ic_boxed.png": "15c587f4802355f86a08a82d678db8cf",
"assets/assets/images/ic_login_main.png": "f2287e9c72a93246e4371c59476e2ed2",
"assets/assets/images/ic_back.png": "7933d62a6c11fd8d4cc50102419db712",
"assets/assets/images/tab_order.png": "fe8656667026f4d0b899d5cae5152cb4",
"assets/assets/images/ic_account.png": "b8982e196d7c86f12143ffa41d2b33a8",
"assets/assets/images/tab_cart_selected.png": "a79faf0488d13802bc9130c14c46d7c7",
"assets/assets/images/default_3.jpg": "91887b6af1ba0fd122be0102108f5509",
"assets/assets/images/ic_wallet.png": "ede1d5ee64256b41c92f9ff02801c571",
"assets/assets/images/tab_inbox.png": "eef042ca02f146f7a8550452e2b9f508",
"assets/assets/images/ic_delivery.png": "64e2ef97ecc30820a883db6a195bd4e0",
"assets/assets/images/default_2.jpg": "1bc35ea412364d39392730dae7938e7b",
"assets/assets/images/tab_home_selected.png": "6c6964c5b42b9641226f003912e1607d",
"assets/assets/images/secondScreen.png": "536e65030294830a90dcdd9f1c6b65f7",
"assets/assets/images/default_1.jpg": "a3b801e7c13877c2d94819e659f651b3",
"assets/assets/images/ic_cart_2.png": "a79faf0488d13802bc9130c14c46d7c7",
"assets/assets/images/default_5.jpg": "4c15b64936f9018a94bf528320990c0c",
"assets/assets/images/tab_account.png": "481329fbda3510c77c36801465eed8e0",
"assets/assets/images/firstScreen.png": "c2527bdadd7e36342c066e2ceaf08bd5",
"assets/assets/images/default_4.jpg": "f412b5e99f85b80fc60002961f207c73",
"assets/assets/images/ic_policy.png": "6c2d508cbc6551ae1fce6d8024b4e112",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
