'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a1773e453077a34999cbffe9d9c12ec1",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "ac0eaa00c88635bd459124b41a188f57",
"index.html": "14055ddb0f14e66f3001bc74e811e082",
"/": "14055ddb0f14e66f3001bc74e811e082",
"main.dart.js": "caae26f57ab9b826df5c800032170fcd",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "782cb609ed63f16ab32ad75f1db7bcf5",
"assets/AssetManifest.json": "fbee5f0e217a3bcc9bfbb5120be5a50e",
"assets/NOTICES": "02aa34f8086e0eebd95aa49a6f7156fb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/jsons/location.json": "162d95ee705acef4c070c90fbba8b868",
"assets/assets/images/ic_add_square.png": "73b0112a605ce937b0011e45e20bcb5e",
"assets/assets/images/tab_feed.png": "7ce9420e29bbfa27b8e4a8a40d575c6e",
"assets/assets/images/ic_arrow_right.png": "09a887d3485c76f3a12ce0d5f3841283",
"assets/assets/images/tab_favorite_selected.png": "a4ad9c940f145f6c1acdf67df001eea4",
"assets/assets/images/ic_zalopay.png": "e34870dbf7e1e0f9c7579a4ed52185c4",
"assets/assets/images/default_9.jpg": "73eb601587e0be25064b656d7d5b6daa",
"assets/assets/images/welcome_top.png": "14026768eb1bbea6cf6d5e44e78352a3",
"assets/assets/images/ic_momo.png": "9a9dd732e6b93d4523ea457a460044b6",
"assets/assets/images/ic_sale_tag_2.png": "47c584e1cb788341048570c1e4841204",
"assets/assets/images/default_8.jpg": "a5bd1da49828b701f9c8ccfe214fb0d8",
"assets/assets/images/ic_about.png": "696c6bf51072a2bbacb0655bf9699c7b",
"assets/assets/images/splash2.gif": "f8ef79ed9780450ed8ce39ae7a509024",
"assets/assets/images/thirdScreen.png": "987f50e01efa2a98bf759c6001c7404c",
"assets/assets/images/ic_grid.png": "14decd47d27bfc0725aba9b15f23eeac",
"assets/assets/images/ic_list.png": "ca18c5ce38324f25c1c6c78b1966c97c",
"assets/assets/images/ic_uncheck.png": "61d37e634f3a01c63df88355e374e7a8",
"assets/assets/images/tab_cart.png": "bb1dc974878a3835c8789d6ca10e3550",
"assets/assets/images/ic_recipe.png": "a2bfd42a2cf924f1837329b673e94e47",
"assets/assets/images/ic_setting.png": "934fb763053939a765b72c7b6cff4163",
"assets/assets/images/ic_location_thin.png": "414e9029c5e9550877e5126c85ac4bbd",
"assets/assets/images/ic_close.png": "5599f28778f6bc73c2d67fcd9f43a9d2",
"assets/assets/images/ic_location.png": "cd543eb44a1afa8fae11ae6d30051ec7",
"assets/assets/images/ic_account_selected.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/images/default_11.jpg": "5ef1693119003bdb7e3a475d0dfc7c70",
"assets/assets/images/default_39.jpg": "afe4e39b889b414b14d433b37349c940",
"assets/assets/images/tab_inbox_selected.png": "70f8154e9b22caf48750f942df717163",
"assets/assets/images/ic_add_thin_filled.png": "4d3855a9c8e8c3d206dbac719d884372",
"assets/assets/images/ic_add.png": "120503bad64899aeb18dbf5169da0581",
"assets/assets/images/default_38.jpg": "67c2b26acdc8d2d217dfba096c18f6cf",
"assets/assets/images/default_10.jpg": "c2ea3aeed6686cfdfff900f14111c54f",
"assets/assets/images/ic_avatar.jpg": "3e77cce150906f279e0857cd9afb4743",
"assets/assets/images/default_12.jpg": "a86be022639c39c6a45c376fd13c8986",
"assets/assets/images/ic_favorite_filled.png": "a4ad9c940f145f6c1acdf67df001eea4",
"assets/assets/images/ic_tool.png": "bb2851b59accc9d413bd3ef3938c53e3",
"assets/assets/images/tab_account_selected.png": "d1d864b4a794c93e789b9aa4e6942e01",
"assets/assets/images/ic_privacy.png": "52e4718d2eaf072d5bdf855a53dc8d0b",
"assets/assets/images/welcome2.png": "4b12f1e13fa445abba7e213236228da3",
"assets/assets/images/ic_to_pay.png": "957780e2adcd2b342888b69f090e4935",
"assets/assets/images/tab_feed_selected.png": "5172786c0462c4cc407ac7bd647ed5a2",
"assets/assets/images/tab_favorite.png": "9f6f6c797785c625ee0f5bddbb6070d7",
"assets/assets/images/default_13.jpg": "ed8053af4ba65c2da220dbb6da3aa26f",
"assets/assets/images/default_17.jpg": "5de39fda36affb9884a089aa226716ab",
"assets/assets/images/ic_delete.png": "0bc4ed010ecf974b6ab761a0f2050e63",
"assets/assets/images/ic_payment_cash-min.svg": "6689c05bafde5d7846a36505f76f68a3",
"assets/assets/images/tab_home.png": "27f2ccca3e7ec39fddd95e01b10bc6fd",
"assets/assets/images/default_16.jpg": "51a5674d26a58ae64bb288eaba36ecdf",
"assets/assets/images/default_28.jpg": "8263121c67bb0909cc93ecd4fe6ddd45",
"assets/assets/images/default_14.jpg": "42bef2ca82e9056a983f6db06a743e11",
"assets/assets/images/ic_share.png": "3635ae78dee068fb0d48f52e1150d16c",
"assets/assets/images/ic_favorite.png": "9f6f6c797785c625ee0f5bddbb6070d7",
"assets/assets/images/ic_phone.png": "48d90a24dd421e80a052769810a6b07d",
"assets/assets/images/default_15.jpg": "5775d6a64464304153035462b495473f",
"assets/assets/images/background.png": "4e874c765a0bfc54acf3c19a1c705b81",
"assets/assets/images/default_29.jpg": "3624bb9e430b1fc5521f52a7b5ab9bf5",
"assets/assets/images/default_30.jpg": "48554f3c646c206325cf3d15d5163eb7",
"assets/assets/images/default_24.jpg": "7e27ab08ad8e96b7570c6031e02f667c",
"assets/assets/images/default_18.jpg": "84b2b8242f9fb99909cffb8a2031ffc1",
"assets/assets/images/ic_payment_airpay-min.svg": "83a7fc743602f5a41f7588de60c8ca43",
"assets/assets/images/ic_ingredient.png": "ed8d2de109df849473835779e92ee1d4",
"assets/assets/images/tab_order_selected.png": "aeef97fb0a4cd883a00fc0229308141b",
"assets/assets/images/welcome_bottom.png": "1dd95d5b7c44320f0717f91d2438d551",
"assets/assets/images/ic_empty_inbox.jpg": "0512df618abbc5dd9ffca8c5bba6806e",
"assets/assets/images/default_19.jpg": "093626d616478a9d8971f3fbeb6dc8f4",
"assets/assets/images/default_25.jpg": "7e27ab08ad8e96b7570c6031e02f667c",
"assets/assets/images/default_31.jpg": "d52a65d91421ac57cdee543178b575ff",
"assets/assets/images/default_27.jpg": "0c32a717922ed40ed454f153ddd3fb88",
"assets/assets/images/default_33.jpg": "ed8053af4ba65c2da220dbb6da3aa26f",
"assets/assets/images/ic_edit.png": "65f0ecccb37789ba8234e808aa6675b8",
"assets/assets/images/ic_arrow_up.png": "cccb0e38d8563304b495fe47805a3937",
"assets/assets/images/ic_bank.png": "5c70ef27035358bae241c5de11318283",
"assets/assets/images/default_32.jpg": "a2542d24b30a793ba4e1f56658804008",
"assets/assets/images/default_26.jpg": "ffeaa01299ed857689b4f32c3c63aa8b",
"assets/assets/images/default_22.jpg": "cff8c07eab6c88f44f4f7157e700d9c6",
"assets/assets/images/default_36.jpg": "f68fab4bcbcfd6ce3c0bcb7da5e72e1c",
"assets/assets/images/ic_search.png": "7f6cd40741f68b3f70e0e79c3e69daab",
"assets/assets/images/ic_kits.png": "b91488fc7718c461f6824dd78f4c8f56",
"assets/assets/images/ic_fb.png": "62a53c1c4d55e9806bd5d4e64f9bb457",
"assets/assets/images/ic_gg.png": "ea36db70c94a7b554e50fe684b976ce1",
"assets/assets/images/ic_boxed.png": "15c587f4802355f86a08a82d678db8cf",
"assets/assets/images/ic_login_main.png": "f2287e9c72a93246e4371c59476e2ed2",
"assets/assets/images/default_37.jpg": "66ab9a7ce3b76637ac4291a63feb3134",
"assets/assets/images/default_23.jpg": "0994b41bc77aecbcd0c55b2b96ca2c90",
"assets/assets/images/default_35.jpg": "11dc75af2c66ca315ffa8a8ce5385f76",
"assets/assets/images/default_21.jpg": "5a96f05964192f519d10d79b5e2fd9f9",
"assets/assets/images/ic_back.png": "7933d62a6c11fd8d4cc50102419db712",
"assets/assets/images/tab_order.png": "fe8656667026f4d0b899d5cae5152cb4",
"assets/assets/images/ic_checked.png": "39adf091327497fb1a2f45bc0b955218",
"assets/assets/images/ic_check_all.png": "19b3edf6d13e9a6ea816bcda9b02c555",
"assets/assets/images/ic_account.png": "b8982e196d7c86f12143ffa41d2b33a8",
"assets/assets/images/tab_cart_selected.png": "a79faf0488d13802bc9130c14c46d7c7",
"assets/assets/images/default_20.jpg": "761c193de94cfbef4448208cfb069257",
"assets/assets/images/default_34.jpg": "e5107bf45033ccce8c6efc1e6ec7043f",
"assets/assets/images/default_3.jpg": "91887b6af1ba0fd122be0102108f5509",
"assets/assets/images/ic_sale_tag.png": "1aa9eb0bbf2c5255739ad2856e52452c",
"assets/assets/images/ic_wallet.png": "8839f42cf7e8993b9786c69a2eec9905",
"assets/assets/images/ic_arrow_down.png": "374602c677b905bb090523a0337b903b",
"assets/assets/images/tab_inbox.png": "eef042ca02f146f7a8550452e2b9f508",
"assets/assets/images/ic_delivery.png": "64e2ef97ecc30820a883db6a195bd4e0",
"assets/assets/images/default_2.jpg": "1bc35ea412364d39392730dae7938e7b",
"assets/assets/images/tab_home_selected.png": "6c6964c5b42b9641226f003912e1607d",
"assets/assets/images/secondScreen.png": "536e65030294830a90dcdd9f1c6b65f7",
"assets/assets/images/default_1.jpg": "a3b801e7c13877c2d94819e659f651b3",
"assets/assets/images/ic_cart_2.png": "a79faf0488d13802bc9130c14c46d7c7",
"assets/assets/images/ic_payment_zalopay-min.svg": "de112283601e35c8fc33f2bb104c156d",
"assets/assets/images/default_5.jpg": "4c15b64936f9018a94bf528320990c0c",
"assets/assets/images/tab_account.png": "481329fbda3510c77c36801465eed8e0",
"assets/assets/images/ic_minus_square.png": "208a734bffaa3b4b0ea015f7656f515a",
"assets/assets/images/firstScreen.png": "c2527bdadd7e36342c066e2ceaf08bd5",
"assets/assets/images/ic_payment_momo-min.svg": "3589408b4f1adc0d0e932bcc832114bb",
"assets/assets/images/default_4.jpg": "f412b5e99f85b80fc60002961f207c73",
"assets/assets/images/ic_policy.png": "6c2d508cbc6551ae1fce6d8024b4e112",
"assets/assets/images/default_40.jpg": "10da54d3ae75a71e5f84684772bedbbd",
"assets/assets/images/default_6.jpg": "e3603e5c208d790ce17d8f6470720cbd",
"assets/assets/images/ic_add_thin.png": "30dcafa534e78996339109b26ca2b254",
"assets/assets/images/ic_spp.png": "c54f39ea3845dece017255b951d8679b",
"assets/assets/images/welcome.png": "2d2065a389affd1b833555ffb0c960e6",
"assets/assets/images/default_7.jpg": "26cbc49b4b14b947c4a20af73153a666",
"assets/assets/images/ic_inbox_item.png": "93f6a619dea0caffd0c12c1e10a7c810",
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
