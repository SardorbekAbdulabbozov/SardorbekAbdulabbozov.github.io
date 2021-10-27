'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "60b725f10c9c85c70d97880dfe8191b3",
".git/config": "50e3a0f6787ab6adb1bbdc2765211d1d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bc4732d23741e7f589fb2d646f35524f",
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
".git/index": "64ffda462b3732eb6e131044e35e59ea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5da64f6654563ede025f9eefa2a43b01",
".git/logs/refs/heads/master": "5da64f6654563ede025f9eefa2a43b01",
".git/logs/refs/remotes/origin/master": "19414670a1d875523ddb9fc5a98006bc",
".git/objects/06/f7e11c7a9d43e6aad663f140b401d75a0e6e00": "86423bb3fa9181d1c023bd17a465f477",
".git/objects/08/904ee43be173f56b37cb72ca81b8979afce183": "9c0a172e3d8800505a725b5c27895568",
".git/objects/09/d3f6ed2d3c05f3f5c30155b8cae0c61e8d8d62": "3d3108454e0741d2092e0d8b9db6a8a9",
".git/objects/0d/d6d0155be3e7ac81de106112a2fb723504833b": "a4f91deabc89892f98799fbf05d3f251",
".git/objects/14/aadee815920e4a1d9624ad42ba7f261abc9fd0": "88b09c0aca39d72f1d7fbc18d2101ead",
".git/objects/16/141ff9f351867167bfbc42a763f690a5f5904e": "ff2b1f51059ead8fe39094a67dadfd5b",
".git/objects/1a/bfae62021292cfb48ef38029de3356344309e9": "1ab0eace6c203d115cf2531d202fc30c",
".git/objects/1b/4f9b3193c092ae946ab4add8617ddf9da5536d": "6abed8a51d48d79b038f8633cfbd77f8",
".git/objects/1b/d3bc82e83aa745794da4566c99102c46e91e33": "fc116747abb3d10778a052393933c32e",
".git/objects/1c/415026ae7f90c9646b7e5211e2abf981c7b1a2": "c2d4d7c131306f1d077f709fcefe8a46",
".git/objects/1f/136249e2525671940018cafa4660557527ea9e": "a97a7cfd6d169db2254db4b633b3c4d6",
".git/objects/1f/31b58d27d5f82003ce4d8595218208ef1415c0": "cddbdaa0bddef6df836abb9b3ffa575d",
".git/objects/24/d87dccf213efc17244b1195ff04812fdda893e": "0407c945ee2ae8ebf9ed7117aa09a5d7",
".git/objects/25/945d7414f2a2d0b50dd2b5a388aba06ee9b740": "b17e433b179fd006ff35f18b66c6a37b",
".git/objects/2b/74d9b6bd8999c4fb9a1520292d48f19e85c5b1": "777e84db0fb36904e087e58f22c89b51",
".git/objects/2d/c5a33a88f29b9083ab70da916cc38d66fb580b": "7d3c447c77a1df6cffc7fb5601e0a5f0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/f36b992ec53bb5b1f723e226d09291df3ec26a": "6689099a4139613b4a889a33090a3f09",
".git/objects/38/f01ea36742668c35f7ad80d35ca116fd9db6b4": "ba311a113a638e6ca8d07de58ac5ac99",
".git/objects/3c/c9e3527249170c66c623129e569a7fd3478e5d": "9a293091dc5fa10b821432b624297e0d",
".git/objects/3d/691aa28b26b07c5f3adf8b474d27c5babb57fc": "98bbcd0da89d5d7b8861ca37c21fa18a",
".git/objects/3e/4b23a13df8258bf3f44e1416af425b2b2db653": "acd6c3049dbf4dd243ddff787d7b3ef8",
".git/objects/40/d8ca0c58b8481aa48510dbf8f207d8584885bc": "319df18d07b718b408c7cc90681b7f7f",
".git/objects/41/d7f6fa2052d2373b48c6155b6c9d130459bbc6": "564b05dc16d19c16605221e65cf4c0f5",
".git/objects/43/49b8a26b929843430b9a2e00bb6c8fd369be6e": "5ea905ea8be893cda58c8116e35286ba",
".git/objects/45/2e9377d8d4412f43758a4ea98bbc1034880c4b": "79de2836245032bf82085ef19e5a0f8f",
".git/objects/46/49de1007301a05f518e461317fdea2693e17fc": "50abe51922e881ffe3a2475c28bfaec3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f727cf73acdfa0147cb67ca3dd44767ab04250": "698aa915df2bdacb3e19c2d1dadd16a7",
".git/objects/4a/caff485490b5ffd061eec87d630f16bc0cbb89": "36bc4cc566842768c6ff2158301527fd",
".git/objects/4d/36f3e19dbb33d56ed04d59ad778f6259ed362b": "55c463efbeb9c57c9ba3a45c1b3ad7b6",
".git/objects/50/b6c7f5a47561fa577418dee6f3744f6e8f2527": "2b54404039e5238ad73b1934cc8d3023",
".git/objects/56/87266fcd9d2dda065e3c6941cdd56fdd7bb420": "02365dbd4afa5baf75167fb49548fc30",
".git/objects/62/4d90d98a1893734b82b5648ec766c43a569b0b": "97077871c7ab2849e9a42180b0abc716",
".git/objects/63/3f460e010e66d827e8f9977b07af5c2ea75ffc": "f719b093c4124442168613cb7b91bdab",
".git/objects/66/f33b79f781a5512b636fd7ecc7bc2a9ad613c1": "eda0b2d4a6386055b66bcfc6cd2d4a08",
".git/objects/76/6e6f5ae7001767fcfa9a3001e1c9aece0bd601": "fa1b907d53548c777e97b0f19497738d",
".git/objects/76/e0e914c206e15685f9c21fb8aed913139c0465": "a6ff2e097cae7210920e0435101abec6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/2ad6fce10df91222c0719a85def37f5992aaa0": "fad8ea92b4debc7bd082d66a8321976e",
".git/objects/83/19cac8c353f657f6f625795733061dbcde677b": "e973ef950c7b5f936f357f26c432c737",
".git/objects/84/9cd3bcdf361020d15c086d3bbe6194417dfdd2": "88bfb72ef89e1748a99488aafd7f20b0",
".git/objects/85/43980766f09a50a717bcfbbc3fe4d31657c10b": "540279c04d06e7c36b013fe4e2a99dc8",
".git/objects/86/9763d925031a65d40fa48a0c1d973b340fb5d7": "c3633d8c710306d3c001d0ed5b19adf1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/5aef3c576fb21e139010e6a8fd6d496c2cfb75": "5cb91bd3f709e1c9b2cfce5e1d6ffb54",
".git/objects/8d/8f43e82893b81933e067fef032c37f9704402d": "730a06b88356ba70f35b743f92112f4a",
".git/objects/90/68dddaf0e4a54cb37228f6014076139406235c": "48b77f5b7ffae924de79d169443e5273",
".git/objects/90/d501adbe6793562e634fb9e0ef0a7257d4f7d5": "2abdfc408c721998bf8ee6f454b92d3e",
".git/objects/90/f26c60ce3798c42407d43c08254b9b8aa9c009": "3746f1847c4cc16c2fafb1b66f9c8ac6",
".git/objects/91/5a50060513caf27a53bc9a6419748ff79bfc19": "bd136762f0a11b8e76b560f5a50c9283",
".git/objects/93/74c291ad5d6c1eb1b3a7161c751cd18dc1c89a": "361a896fa8b80f443dc59ad5e36bb034",
".git/objects/9a/1b177d88d8aefc83578d9417fbfb0525a71bf9": "43c85b9d95dcf7794fc7b9cf7c490837",
".git/objects/9a/3e2f6deeb25795a9d6707b0f145f26274eb011": "5345cc9f6c64ec4b371c1040e6e1a814",
".git/objects/9e/79f2fc05b7536118b122cce65888076cda73f0": "49ed098b236ae2d8b86a9c2e04659b0f",
".git/objects/9f/f9316e6b5a57edf494bba258b007106c945793": "9fa3c20d2bbc52850a829de51def809e",
".git/objects/a0/adb7699c230f0d1e079a5d96f08d036d44c195": "62a3cd9fdcca84c9c8dac51db757a136",
".git/objects/a0/b2346b990645e15183fa43317116b208a84089": "d0c79e6fca5759c92c4622bbc7309682",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/b4635a8a408d8cb0b69cae924ec22d87f5e33e": "9adcb7a69150256ad8249da60b02632e",
".git/objects/a5/cbb7abb4f67d57782df28d800e8aa477c34d80": "1fc1846a9ba6f8b74e42b189fe341404",
".git/objects/a7/d90f9982c4242c435a102f6973d53a6ce6a828": "bb6e439406cb7f88e30efe25c599a33c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/2b93cbed34b0c64532dea8941a2852e0d38266": "1fe75ffca286e05eaed9f72dc58ffaec",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/7e556e401fe50a21d4bfc9051da56661892d10": "a10040864afbb6fc152527137fc2db35",
".git/objects/b1/651bccb77a8eb658ce72bad9b8c7cd86f42538": "6e96cc619a91c21ce9992881775c814b",
".git/objects/b3/3c96cb2a6f471aba74694afe0cc5744ec622e9": "6e26c63484f904287a4f5abbb627b8d2",
".git/objects/b4/c5c18688844eb05fff200e5adb6d736c0e50a8": "e13e936587145e891d4cb5d1864e7398",
".git/objects/b5/e3b8fa8b8907da7015821ff73773fdb282363c": "18743148da7d29ee79273ee50b2091f2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/a1b32cfe81d95d79df7c3e7904b8764c9242cb": "ae966c485de0e570c5d3642284940506",
".git/objects/c0/3397cb6f1b33b7c54942d6e5892252c22045fc": "eef8d82eeb218dbc8688fc4f42bb118c",
".git/objects/c2/7c59e35bfe95fd0657ca8eaefa5bb57fddc905": "d60477a61187352ed3ccf370d47c9f87",
".git/objects/c6/0428b1d32fc15470fac6f6ed0e69e91803208f": "c4b1935b68c84e5ff28b7a059d5cd61d",
".git/objects/c7/d284aa13481ff699d1f718efd88195aa8c0730": "2801e744ad0a144e7c7b7dcd6335a76f",
".git/objects/cc/6680c2a1a517e299e089434372dbe5a48842be": "20bcf293ffcfa212a04fc68fc37ac595",
".git/objects/d6/34d04f82a8c2c741f86e8efa38b54f6696a7bc": "323db2f039223f8b414f77aecf6ce8d6",
".git/objects/d6/61b2e6d41cfa76f10af4b923f34b271b8e2b11": "fe2782f6a8150b3fcf629e3927e38cce",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/bfe7a2acac6f71cfb30516a51e99f2e38a971e": "ca6f36bd146f2fc7ea483492402b6479",
".git/objects/d8/0eb8a0d80bc5aa4f943c04da53afb82d525a8c": "1ca16da57a6a3c152bd7189c15678c53",
".git/objects/d8/0fc2512ba4eb868629c48f8945c7f5b14edc6a": "cac05f0f2f4fc84050aea8a068dca044",
".git/objects/d8/82dca0e486b629cd3062cfeddaaea1c79ec931": "97e056c8bc70be0a1ccd240d69811d03",
".git/objects/e4/8288fcfc161b3b8737f803213b2144d22e606c": "d8c4ee9b73c1a43dce3ccb844af7505f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/eb/81286e2ad795a1be60d1106f11a32262b70d77": "a222bb8697010f45867de653cb112227",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e23cb7a4d23394c143152e5d7b23c94ec58807": "c8c3848d1b53c5dbfff53c046591d270",
".git/objects/ef/87a3036be5b67d2299dbb6d35dff7a3ba4bbc2": "fbe0e7fc961e60ecb158901bdd2d3c34",
".git/objects/f0/b109b15a9dd87fc184cfa3e129de098a9c79c3": "8ba92602857521d27c189757fdab85e2",
".git/objects/f2/5e0f5d916a175e0a7b4807eb4955a394967c0d": "bd4bbc5a494c6fb3137d60b30755a0db",
".git/objects/f4/24587a40f5c62d5e3f949ede1da0c024bcd0d7": "61531d0040168a0abb0963fb77f0524f",
".git/objects/f6/4dea566572310b019a95cb8fb56642ac6d23bc": "91e0da989556b6318d69779e5a256bed",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/objects/fa/1d16da48819fdf84a7fbe061dc6654d0dbc12c": "45778befb9b55201082910d1753df26d",
".git/objects/fb/e3f3ba333b6fd28f1a9b9ae8ea208c5b573dad": "62b770e67a2e8896346a19a278f4eea9",
".git/objects/fd/6cb12d5ebc34188c548a5cd07a03ccafef81ca": "d6a9245bf0d6702b39a3aaec3a36ec25",
".git/refs/heads/master": "66913a49dda64744441b441f2b62be03",
".git/refs/remotes/origin/master": "5f2ed56ced1ea65c9031e0a58065f463",
"assets/AssetManifest.json": "1d470f1aabe1c589169f395908eb06fe",
"assets/assets/images/b.png": "1941c788a5671c4abd64e3c924c82c24",
"assets/assets/images/book.png": "a281aa20189da9a23475d4f760faa90e",
"assets/assets/images/ch.png": "f3cd33b39c0dbd479be03d0bf80878f0",
"assets/assets/images/gradient.jpg": "0c4ad5112b238d854245a32a0a7f2b7c",
"assets/assets/images/m.png": "992bdb633284884d20907ca44c37788b",
"assets/assets/images/p.png": "952607f9d847bdee3f8badd6130b893e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "cd6126c60f279b7711e8b80657315e80",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d0c66c9d02c01f70f3c26a3c5611c8f0",
"/": "d0c66c9d02c01f70f3c26a3c5611c8f0",
"main.dart.js": "fc2987d1ce4a7735e941ac160a427fb8",
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
