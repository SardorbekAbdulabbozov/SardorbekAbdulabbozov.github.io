'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "120e4e40011019c4244f32d6ee2e7cf7",
".git/config": "a797fedd21b8334902943ffc1821dd76",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0843fe2655423c634f63bf7d4a54296d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ab998d4b207fac957aac864c3922bd29",
".git/logs/refs/heads/master": "ab998d4b207fac957aac864c3922bd29",
".git/logs/refs/remotes/origin/master": "b2ea74510d6a5743a7666bcf76814857",
".git/objects/09/d3f6ed2d3c05f3f5c30155b8cae0c61e8d8d62": "3d3108454e0741d2092e0d8b9db6a8a9",
".git/objects/1a/bfae62021292cfb48ef38029de3356344309e9": "1ab0eace6c203d115cf2531d202fc30c",
".git/objects/24/d87dccf213efc17244b1195ff04812fdda893e": "0407c945ee2ae8ebf9ed7117aa09a5d7",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/f36b992ec53bb5b1f723e226d09291df3ec26a": "6689099a4139613b4a889a33090a3f09",
".git/objects/3e/4b23a13df8258bf3f44e1416af425b2b2db653": "acd6c3049dbf4dd243ddff787d7b3ef8",
".git/objects/40/d8ca0c58b8481aa48510dbf8f207d8584885bc": "319df18d07b718b408c7cc90681b7f7f",
".git/objects/41/d7f6fa2052d2373b48c6155b6c9d130459bbc6": "564b05dc16d19c16605221e65cf4c0f5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f727cf73acdfa0147cb67ca3dd44767ab04250": "698aa915df2bdacb3e19c2d1dadd16a7",
".git/objects/50/b6c7f5a47561fa577418dee6f3744f6e8f2527": "2b54404039e5238ad73b1934cc8d3023",
".git/objects/63/3f460e010e66d827e8f9977b07af5c2ea75ffc": "f719b093c4124442168613cb7b91bdab",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/9cd3bcdf361020d15c086d3bbe6194417dfdd2": "88bfb72ef89e1748a99488aafd7f20b0",
".git/objects/85/43980766f09a50a717bcfbbc3fe4d31657c10b": "540279c04d06e7c36b013fe4e2a99dc8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9f/f9316e6b5a57edf494bba258b007106c945793": "9fa3c20d2bbc52850a829de51def809e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/d90f9982c4242c435a102f6973d53a6ce6a828": "bb6e439406cb7f88e30efe25c599a33c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/7e556e401fe50a21d4bfc9051da56661892d10": "a10040864afbb6fc152527137fc2db35",
".git/objects/b4/c5c18688844eb05fff200e5adb6d736c0e50a8": "e13e936587145e891d4cb5d1864e7398",
".git/objects/b5/e3b8fa8b8907da7015821ff73773fdb282363c": "18743148da7d29ee79273ee50b2091f2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/7c59e35bfe95fd0657ca8eaefa5bb57fddc905": "d60477a61187352ed3ccf370d47c9f87",
".git/objects/c6/0428b1d32fc15470fac6f6ed0e69e91803208f": "c4b1935b68c84e5ff28b7a059d5cd61d",
".git/objects/d6/61b2e6d41cfa76f10af4b923f34b271b8e2b11": "fe2782f6a8150b3fcf629e3927e38cce",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/bfe7a2acac6f71cfb30516a51e99f2e38a971e": "ca6f36bd146f2fc7ea483492402b6479",
".git/objects/d8/0fc2512ba4eb868629c48f8945c7f5b14edc6a": "cac05f0f2f4fc84050aea8a068dca044",
".git/objects/d8/82dca0e486b629cd3062cfeddaaea1c79ec931": "97e056c8bc70be0a1ccd240d69811d03",
".git/objects/e4/8288fcfc161b3b8737f803213b2144d22e606c": "d8c4ee9b73c1a43dce3ccb844af7505f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e23cb7a4d23394c143152e5d7b23c94ec58807": "c8c3848d1b53c5dbfff53c046591d270",
".git/objects/f0/b109b15a9dd87fc184cfa3e129de098a9c79c3": "8ba92602857521d27c189757fdab85e2",
".git/objects/f6/4dea566572310b019a95cb8fb56642ac6d23bc": "91e0da989556b6318d69779e5a256bed",
".git/refs/heads/master": "b25c2c5f06e0fed081757b4610fcd08a",
".git/refs/remotes/origin/master": "b25c2c5f06e0fed081757b4610fcd08a",
"assets/AssetManifest.json": "24131d2288a7adcaf3ac25c3876d8ed2",
"assets/assets/images/biology.jpg": "6321dfd6a13b784f7ad67101dbebff4d",
"assets/assets/images/biology.png": "b6e18d45973dfa930c4dc5120badacb8",
"assets/assets/images/book.png": "a281aa20189da9a23475d4f760faa90e",
"assets/assets/images/chemistry.jpg": "2fedbb672669937a2e373f0363930441",
"assets/assets/images/chemistry.png": "46077b8bd3caeaaa0af24d362a24af73",
"assets/assets/images/gradient.jpg": "0c4ad5112b238d854245a32a0a7f2b7c",
"assets/assets/images/introduction-visual.png": "348e7a839dd1489a5d87929f2ee837af",
"assets/assets/images/iq.jpg": "f8e9a84a941c72c694dad59d76a254a4",
"assets/assets/images/math.jpg": "c9e14cef7c9b68a46df2db47536b56f3",
"assets/assets/images/math.png": "789f230880ccd8ccad1d327d7b526dbe",
"assets/assets/images/physics.jpg": "53705b86fc0bdbaa98a47097a77e232d",
"assets/assets/images/physics.png": "2cbd7835a099c11e83bd411db845386c",
"assets/assets/svg/biology.svg": "3f6909670e69b1c8f7d7eecfad05ee0c",
"assets/assets/svg/brain.svg": "1e73781b8f8baacf085298e1c1972433",
"assets/assets/svg/chemistry.svg": "af29b58a0832019e57638235ce811313",
"assets/assets/svg/comp.svg": "6c40218ecc787a0377797f758f798ef8",
"assets/assets/svg/math.svg": "6de6f018135cfdb0194d24b08e57ef17",
"assets/assets/svg/phy.svg": "a473ae8344b83cf95feb212de9a48997",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "966dd6a3ebb154dffa63d9951bc42802",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3c70791ecb68f233ded538626c6a8237",
"/": "3c70791ecb68f233ded538626c6a8237",
"main.dart.js": "c6517db47748ff26fe089ee40f19918c",
"manifest.json": "42de28427f0d09f492da550d0107c132",
"version.json": "0b92a4e91d81aa71c9884ec95d58885e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
