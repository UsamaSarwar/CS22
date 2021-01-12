'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a8ec1be7ff8edb2f63b0399f41f184b5",
"assets/assets/fonts/README.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/diagnostics.png": "1d327c202fc09eebfead7a1c33dd5c58",
"assets/assets/icons/icon.png": "785e5e0559f76ec0c1f986a8f3887b4f",
"assets/assets/icons/menu/diagnostics.png": "1d327c202fc09eebfead7a1c33dd5c58",
"assets/assets/images/covid.jpg": "f8f9fcd227f8e11a4263c2545e9007c2",
"assets/assets/images/covid.png": "ae577301e99947343be52ae32703b8b4",
"assets/assets/images/covid19.png": "4920658936fc2142bebcdec3c91d28de",
"assets/assets/images/doctors/DrAta.jpg": "e029cf63f418c6313b0c5f292c33d14e",
"assets/assets/images/doctors/DrAthar.jpeg": "49bba22561cfc7d9558960b468d6cb88",
"assets/assets/images/doctors/DrFozia.jpg": "01d942542161377679d940cd92ac1113",
"assets/assets/images/doctors/DrMaha.jpg": "e21abedd3a08254e2491bb9cdc371adc",
"assets/assets/images/logo-light-v2.png": "91c014c38ccc0ad6166c72e768efe33b",
"assets/assets/images/logo-light.png": "7affa37495ffe2cdc8cf38f2f8c6b2d4",
"assets/assets/images/logo.png": "3529f2d78a0c55a6cbac180b9c368058",
"assets/assets/images/pregnancy_guide/1-1.png": "b7ecb6f462f889cd5fdf377e4ca9941c",
"assets/assets/images/pregnancy_guide/1-2.png": "c861d5a8e132dcd7cc2bf7be53de4e59",
"assets/assets/images/pregnancy_guide/1-3.png": "0f5cc4bcfa6b7771a434ad270ce922b0",
"assets/assets/images/pregnancy_guide/10-1.png": "c0b1e63f1a8431f2628b3127235a0bac",
"assets/assets/images/pregnancy_guide/10-2.png": "f25b41478d2376106605520ef337bf32",
"assets/assets/images/pregnancy_guide/10-3.png": "f8a83de7b77ec131d1bc4cd8f2f822cb",
"assets/assets/images/pregnancy_guide/11-1.png": "2bd306a4742dcaff6dadf86b190b228b",
"assets/assets/images/pregnancy_guide/11-2.png": "2bf567e1602b0c9b02dd7cc4d4fb2195",
"assets/assets/images/pregnancy_guide/11-3.png": "a3ef3ee59b416f426e0738e544083547",
"assets/assets/images/pregnancy_guide/12-1.png": "1a6546a3f7a80511417b767684811354",
"assets/assets/images/pregnancy_guide/12-2.png": "9b277cb3a54aea8c04f2fdeb7249e4b1",
"assets/assets/images/pregnancy_guide/12-3.png": "2c2e42b7b344799745c3abcb78f7db08",
"assets/assets/images/pregnancy_guide/13-1.png": "5e1d39c1aa6512caa6f1f12a95a03098",
"assets/assets/images/pregnancy_guide/13-2.png": "779c94fb1a1c6982f06470d767d846d2",
"assets/assets/images/pregnancy_guide/13-3.png": "ab3a7b05adf5d43138174b7c37ead02b",
"assets/assets/images/pregnancy_guide/14-1.png": "e0a8e0c33442d1b868b0b637efef5911",
"assets/assets/images/pregnancy_guide/14-2.png": "a4c89bf2c1c2293c7b16c104bdb881b2",
"assets/assets/images/pregnancy_guide/14-3.png": "cfd6b4e6606f5384a3f4c4448899d126",
"assets/assets/images/pregnancy_guide/15-1.png": "337631d2f631a97b2ca95057d0bb856b",
"assets/assets/images/pregnancy_guide/15-2.png": "56220382939bd2b83ccb545c84a6512f",
"assets/assets/images/pregnancy_guide/15-3.png": "24442754f1187d456964f96c59d8d6cc",
"assets/assets/images/pregnancy_guide/16-1.png": "c944e7f8b3872f935664a16435403dcb",
"assets/assets/images/pregnancy_guide/16-2.png": "923c8e4072979ad2274af5ddb0c23ee5",
"assets/assets/images/pregnancy_guide/16-3.png": "6a147ec34dc277c5bad8ed1fd61219ff",
"assets/assets/images/pregnancy_guide/17-1.png": "0c86e7c8dca5283b79a2de076030d160",
"assets/assets/images/pregnancy_guide/17-2.png": "6ad3b12e043d9f9fd93bd9f76930c578",
"assets/assets/images/pregnancy_guide/17-3.png": "0cb8ce838d0de384b188236d850bfd44",
"assets/assets/images/pregnancy_guide/18-1.png": "1fcce49953bee6e8b00ca9830c57f0a4",
"assets/assets/images/pregnancy_guide/18-2.png": "2561073e391cb54a35ad6de7eaa81534",
"assets/assets/images/pregnancy_guide/18-3.png": "9f4110ab45d5504c2d588457094f8217",
"assets/assets/images/pregnancy_guide/19-1.png": "8b3b5584ac21394f2dfc5f8c152b8287",
"assets/assets/images/pregnancy_guide/19-2.png": "a7c8979aec75b3a1b009e2e988719c30",
"assets/assets/images/pregnancy_guide/19-3.png": "1a9a46c9f212f5c4941e962fb02041df",
"assets/assets/images/pregnancy_guide/2-1.png": "61866ade2ca785c0747129218fa7a0a0",
"assets/assets/images/pregnancy_guide/2-2.png": "72d851785038c1fad408756e1b4d1d14",
"assets/assets/images/pregnancy_guide/2-3.png": "ec74aef8f448ac508ea0fdea49755cff",
"assets/assets/images/pregnancy_guide/20-1.png": "7af431eb778179fae0863971655f9e8f",
"assets/assets/images/pregnancy_guide/20-2.png": "68fea1d75bad6dba3c198dd05de90026",
"assets/assets/images/pregnancy_guide/20-3.png": "591c40b69fd45fd20632849ba286f14c",
"assets/assets/images/pregnancy_guide/21-1.png": "4afd28f48c95fad0e65e9f4c3a8cdd98",
"assets/assets/images/pregnancy_guide/21-2.png": "552058ca9a6b92df7535f5c65b0bcd1c",
"assets/assets/images/pregnancy_guide/21-3.png": "4293ae21774d9d998458b864441942bf",
"assets/assets/images/pregnancy_guide/22-2.png": "710a28044c01900cb219b3595d48d4dd",
"assets/assets/images/pregnancy_guide/22-3.png": "4293ae21774d9d998458b864441942bf",
"assets/assets/images/pregnancy_guide/23-1.png": "d6598e6dc1bd6a91d7f9f31545c15759",
"assets/assets/images/pregnancy_guide/23-2.png": "d7ce30755e4329bc3c4ac695c42e61a2",
"assets/assets/images/pregnancy_guide/23-3.png": "e6c2a28ca09ccda64eedd9a1d387b2e5",
"assets/assets/images/pregnancy_guide/24-1.png": "53ed23ba854dadf43464de7f3b7c7e3f",
"assets/assets/images/pregnancy_guide/24-2.png": "f94f434bf2474aa9c9f11974c05690f2",
"assets/assets/images/pregnancy_guide/24-3.png": "06cc192a0677211a81c398d3f092047e",
"assets/assets/images/pregnancy_guide/25-1.png": "2041855b534c188f697422c2ab5bb1cd",
"assets/assets/images/pregnancy_guide/25-2.png": "8a2691d1fe6eaa14fdd587d1f0145595",
"assets/assets/images/pregnancy_guide/25-3.png": "ccdcaf9401fbd3f05383224efab02109",
"assets/assets/images/pregnancy_guide/26-1.png": "23dc4de34b4f35d743ac68178d41579b",
"assets/assets/images/pregnancy_guide/26-2.png": "92139dd2512cc3a1a6422eee18059fc5",
"assets/assets/images/pregnancy_guide/26-3.png": "d2f992c62033247df091b0881d1c6d50",
"assets/assets/images/pregnancy_guide/27-1.png": "1f47401535cb29c5bda6ad7f6e1037fd",
"assets/assets/images/pregnancy_guide/27-2.png": "3c91fd3c4f153a9a73ac9af7c0b04583",
"assets/assets/images/pregnancy_guide/27-3.png": "fdefbc8a61fe42fe3cf3ec72e072b702",
"assets/assets/images/pregnancy_guide/28-1.png": "6a0efe10538e97c07f7acdf77155d9b2",
"assets/assets/images/pregnancy_guide/28-2.png": "dfa02b19612aa578d01403d948dc8b3b",
"assets/assets/images/pregnancy_guide/28-3.png": "8b1aa0220fe52633963f57f69d9caa57",
"assets/assets/images/pregnancy_guide/29-1.png": "b406735e0818d81025688f983de3c57a",
"assets/assets/images/pregnancy_guide/29-2.png": "a8cc9872c8c6c2a44f5c635a7f7641c8",
"assets/assets/images/pregnancy_guide/29-3.png": "76665ea6e4bd2d92559de0473c256993",
"assets/assets/images/pregnancy_guide/3-1.png": "913c6b55dec189aafb39e1c9c90f937c",
"assets/assets/images/pregnancy_guide/3-2.png": "ecfda64cabd673140ba67e8c8cbf252f",
"assets/assets/images/pregnancy_guide/3-3.png": "8550550c3c252d03cb2cc684b414c60c",
"assets/assets/images/pregnancy_guide/30-1.png": "cbe1150027dcde151b49fcbf21aa4a0e",
"assets/assets/images/pregnancy_guide/30-2.png": "8d9b446ce6cb401abfbe6cdc1165e6d6",
"assets/assets/images/pregnancy_guide/30-3.png": "3078d0b4d41a33faa7e1989a58769af8",
"assets/assets/images/pregnancy_guide/31-1.png": "b5f2813863fc08e2da641618fde52cb3",
"assets/assets/images/pregnancy_guide/31-2.png": "7159d2be8bb741e5c4b951694a85f339",
"assets/assets/images/pregnancy_guide/31-3.png": "5af53fe74602ff05f3154b17a6d9ca8a",
"assets/assets/images/pregnancy_guide/32-1.png": "bbd25b47f63b6e546fa4e16afcbade53",
"assets/assets/images/pregnancy_guide/32-2.png": "cded30c257b087ad5575fe6efe7f3652",
"assets/assets/images/pregnancy_guide/32-3.png": "ed99967ec10f9ec9914604cc836a9038",
"assets/assets/images/pregnancy_guide/33-1.png": "2f8df98ceec6b1e420900814ef5f713f",
"assets/assets/images/pregnancy_guide/33-2.png": "8f23bffa4f42ea6468e8d25cae86dce0",
"assets/assets/images/pregnancy_guide/33-3.png": "5f07b49d80e3650d8cfa34edf1991604",
"assets/assets/images/pregnancy_guide/34-1.png": "4b7349970d12e38fe72ec4a9dcd0f21a",
"assets/assets/images/pregnancy_guide/34-2.png": "dc184e4ec57a10abefa3a436dd5329a9",
"assets/assets/images/pregnancy_guide/34-3.png": "56b12a5ee2723072656f8da6eaaa6088",
"assets/assets/images/pregnancy_guide/35-1.png": "7b8e200a468aa7a745c5736e7ff7bca9",
"assets/assets/images/pregnancy_guide/35-2.png": "2bd462c9bf9347c83449489983f16ee3",
"assets/assets/images/pregnancy_guide/35-3.png": "673c7e6b6b902dd49855f902161c23da",
"assets/assets/images/pregnancy_guide/36-1.png": "47239ae7425f10b02004752ee4fab533",
"assets/assets/images/pregnancy_guide/36-2.png": "1b8f118a7c362fa2cacf8b921022146e",
"assets/assets/images/pregnancy_guide/36-3.png": "699f87725db8278f1e60846f5048b94c",
"assets/assets/images/pregnancy_guide/37-1.png": "403d6d5d5bbe50fedd7c3ea437a42265",
"assets/assets/images/pregnancy_guide/37-2.png": "df8d12e7b6b840139574d5562f7644f8",
"assets/assets/images/pregnancy_guide/37-3.png": "a37a06c6986554317aa825aba1986544",
"assets/assets/images/pregnancy_guide/38-1.png": "9a81711bc5bf2805ff1f12b9563beba7",
"assets/assets/images/pregnancy_guide/38-2.png": "a0d2f0a2654de178b1def68e6ea9fa01",
"assets/assets/images/pregnancy_guide/38-3.png": "78810af66c779e270b64bf132bed44bb",
"assets/assets/images/pregnancy_guide/39-1.png": "2dc7f8fd9d4ba8258a59f6ae07b979b8",
"assets/assets/images/pregnancy_guide/39-2.png": "c6758c4166b0a18282b18f4ca27bde19",
"assets/assets/images/pregnancy_guide/39-3.png": "b0a2f284349023689142a6a741f0df79",
"assets/assets/images/pregnancy_guide/4-1.png": "444979428c623dd60352b48bb070f3a3",
"assets/assets/images/pregnancy_guide/4-2.png": "c80cbe8d669d0c2fd5077fc4eb1bd457",
"assets/assets/images/pregnancy_guide/4-3.png": "6ddfd171963d7012decea75b89249099",
"assets/assets/images/pregnancy_guide/40-1.png": "14bdd9ef7c701140ccfbdac0ec36d1d0",
"assets/assets/images/pregnancy_guide/40-2.png": "e5b7040659319bd4605c0ee1542a4d95",
"assets/assets/images/pregnancy_guide/5-1.png": "325d797bc1bedc74e7d12ea716e3e1e4",
"assets/assets/images/pregnancy_guide/5-2.png": "c90f9e6ca5458081b37a2e5006bbdd1d",
"assets/assets/images/pregnancy_guide/5-3.png": "250c844bbe8ac807bcafa711df6fe07d",
"assets/assets/images/pregnancy_guide/6-1.png": "2778fad5d9f9995b7e6821411c40c83b",
"assets/assets/images/pregnancy_guide/6-2.png": "0c00643cd834ae28ca743cb64d0ddd28",
"assets/assets/images/pregnancy_guide/6-3.png": "46ca71b961c9522bb3136b8233c2b371",
"assets/assets/images/pregnancy_guide/7-1.png": "39796f33a3646107c59dfeedd3dbbe29",
"assets/assets/images/pregnancy_guide/7-2.png": "9f0a4e90b836f175c8d227c8ae546b03",
"assets/assets/images/pregnancy_guide/7-3.png": "e138d4b84ff675befc170275c6ce7017",
"assets/assets/images/pregnancy_guide/8-1.png": "b2f777cda1fbc6b98d621a416c5d85cb",
"assets/assets/images/pregnancy_guide/8-2.png": "602661aefaef789b657250d299d8926e",
"assets/assets/images/pregnancy_guide/8-3.png": "4d962b8a977bdea59b833ef262114b18",
"assets/assets/images/pregnancy_guide/9-1.png": "54a18e47fc3466ece6b0983ca1ef60fa",
"assets/assets/images/pregnancy_guide/9-2.png": "ca004c83327ba1bcbc89034d7ee94d75",
"assets/assets/images/pregnancy_guide/9-3.png": "91b85ae32c1e5f109c155ca3f4e544d5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "08d18b966bc925fb78fa84d871c4bd7b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "7ffc92a84442c1039ac17fa913547a44",
"icons/Icon-192.png": "d9d0b77fcfd54e6eba1eaff1f17e3c6a",
"icons/Icon-512.png": "785e5e0559f76ec0c1f986a8f3887b4f",
"index.html": "0b09e2969a92be119b638a98656f6306",
"/": "0b09e2969a92be119b638a98656f6306",
"main.dart.js": "b54cce08e82ab0508638ddafae27df26",
"manifest.json": "f55030cc3ff8b4c7f5ae1b1cfc376080",
"script.js": "59de809ec53a642f90ed5375daf153cf",
"version.json": "b093e220255b8532e143450f2315ce4c"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
