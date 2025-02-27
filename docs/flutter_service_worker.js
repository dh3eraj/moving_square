'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a2d89bb1a4a5a3709cf269fc19189167",
"version.json": "9a5db4f3d18b9e62eb6ce88c03c4a2d9",
"launcher.png": "57759488e059a20c650ca86da6b9d4d2",
"index.html": "ffa33bd34732df8f107629d4b6bd3bed",
"/": "ffa33bd34732df8f107629d4b6bd3bed",
"main.dart.js": "2c6497648d3b5525560a36bde8825d80",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3fb0e53bb02a5ca71b19eb6019d00ac2",
".git/config": "2fef4575ecf53c80d04b0eabe7aaa943",
".git/objects/95/4d89e3b99515208562015180ebb2597796c97a": "da8281ceb396192a15a92718e2c1fa47",
".git/objects/95/db3090c45aac6bd8ce2c2f34658e58960bcb41": "191fdb1cb3d39e8ea3451abf97a11cb4",
".git/objects/66/0a5dc1fc45b7272415983f06567784eab5063e": "fe40f2c6468979e2ab5a89a924bdedf6",
".git/objects/03/e25b70149fd4563144d3000b93ca8cd36fec86": "5b64861946a673dd8e6a0fc999504f76",
".git/objects/04/779dc239d9373b80d70dc8be161ee97b0d975f": "770767dea17662e27357eae04b919d94",
".git/objects/6a/fc5b15a05e386ba8fe7ffed4d8d04950221608": "90ee04c51f7444997ae5bb00f1035b71",
".git/objects/32/9837d798d922412ce45c1e33ad0e9ed3ed5abc": "f5dd5108a53158805512a294a19947ce",
".git/objects/35/7c677584d141fdc703019fb94bf6fe3252d9e3": "68c9f6e6ceb2e3bdc64febc0989008a7",
".git/objects/69/40b48701c2cdec8638506cd42081643f6cc998": "dec367c8d81d0de058a39535e37fc667",
".git/objects/3c/785236699d0c3a6f6c79149c7358782bcfd066": "9d2f6ddfce2e5654d6517e8ff72a09fb",
".git/objects/3d/0149720a6dd133f27c3cf139eb55a442b399d3": "b8bae21c9de284b797c3decedd35f0d3",
".git/objects/58/c492a38cc1edd73e236efc421b161b747bfb38": "b0f66e1ee333c7a515a07b4975fb933d",
".git/objects/67/a6c7931efb2e5da681545ddbd96d4eccb31b4a": "fb203acac56a0ee4f99139a594cebf54",
".git/objects/94/11c98acf5a472407f9d8b610c4a4ea8182ba05": "ffbbb2baeed3538be76f1d89994bf90f",
".git/objects/05/48fd23e4ed6adfd7f77e86803e40073f3666ac": "ee78b151421a3e4eb013e01ad6a4d7bf",
".git/objects/05/24743fbd03f1c7c100703c9d03248da27ea8ad": "f3f7092c28d6f2b635fb4a35819c2e73",
".git/objects/9c/ba44f116968130b4620101fcf20bafc96381f5": "ff0cef648c450a53875f857b4bc036da",
".git/objects/a3/c577f449c61d4b9f4a717ecfd0088560eb99ac": "647743cbc4881f1b8fe85de3b1e0b29c",
".git/objects/b4/d7842e72d91f94fd42feeeba89f1a6d0fbea92": "15fef12cdd5098b641624e3c6eb15008",
".git/objects/a5/e1d519195d309aadbb4b801d863803072f0871": "8f1cbc39f4aaec1f75eaa1a82128d6e4",
".git/objects/d6/aad896cc7d9c98470498016f3c0a2e4a04772e": "c2266d70e28cf22bfc44be441c51e361",
".git/objects/ae/52f2640bae6f25f8dea7654559291f32f416af": "38b36d55c47f03e89e4a85ae8c950c4d",
".git/objects/fc/b5709d3ef0bd217584c3fe9ddabccf14f46927": "f2ed130e1ce3854c31fe036d93e40b87",
".git/objects/fc/3eac772fde8fa9cd72d09ffa4470f92cd0ac2e": "ea96caec1a5613c59c31d6cccbc29285",
".git/objects/f5/06a75e639d0cd6bcf58facca64f95e87e61221": "e7922fcf5f19c62c252978abe4a7c0e5",
".git/objects/e3/1d81c5864303b9e18929ca21a5bc41e64f39b2": "bb23507a304b81176b85df2decb1d6ef",
".git/objects/fe/ffc44a856ac847526d682fb9d2c59f6fa16d41": "c1b7a7d401ea7fa19a7247b2af1c5567",
".git/objects/fb/2dbf4645bf69c57420179dd3586fb2a3d21255": "e6a1308826d42b0e3cca5ca62fa96762",
".git/objects/c6/bee72f4bd515d6598f899d0c37117716676174": "695be495748b3602dc6ceafe2b781b19",
".git/objects/ec/7972893a7bf3a9926eab818ab1a8005c664e15": "6c3706853e9fb658c855300c9d2e2fc8",
".git/objects/4e/60b313512abdbeac7c46b9d29b538c9cfe72fc": "c6f47fee276e791cbdc6b90455f55b69",
".git/objects/27/3bd610ed357f39631616ccc17b6fda4fb700fc": "5053b3906e87923af4fcb965151950d6",
".git/objects/pack/pack-e4956495e93842097276f62283decda49d7c1895.idx": "c6a900fc0c5f94d68bd0602fa5114da6",
".git/objects/pack/pack-e4956495e93842097276f62283decda49d7c1895.rev": "6a4d839c7c147e8a60bc1fa21536e25e",
".git/objects/pack/pack-e4956495e93842097276f62283decda49d7c1895.pack": "d3aae51c5c255d2b9cae55ae21abb477",
".git/objects/11/7d2ad972377d8e957ad287efb875a5070579f3": "5b9adfc3db519f082e0f5d61d8801e7e",
".git/objects/7c/9e396254659fe8ea3c21c443cbad120c8f999b": "d448572efcb0eb0a55247a3127a805f2",
".git/objects/89/488387ba6fa32c1de0cc6356b17797dce49a44": "a77a970fee1c94b4eac4d323c96a4aa7",
".git/objects/1f/931afb5192057deaca4d94c924d2011836140a": "b24db37271dc114217c35754f2fcb489",
".git/objects/73/9970111967f3fab8510b649978f88ad4ec5636": "774062989d75f2398797622aef7c0258",
".git/objects/8a/cf3c9f8f349f87f41a5cbec09f512214ebdf3d": "284c40f68846cda9b5d5788f178719d2",
".git/objects/7e/1a53ebe452427776b7e3a759cb28203c41de98": "581e75e9d4920a3addf82427e9b8eb55",
".git/objects/19/23661ec0f15fc0fc1bcff4bbc4b342187af49b": "81b542be962c76f367be102b2d7bcbe5",
".git/objects/19/e7d1220194bb1818482003e46a3250b8dac6d0": "ea08e83dc4548a84f7ef655f647b3284",
".git/objects/4c/7e81ecfc7feb13d6449d3f7b7f652565a74a84": "7579430a656e5e9fbee7d363441e6d1f",
".git/objects/86/a6832d332f2963ce6a0a42e68a027100c6bc85": "d9253d07439a6e150e4be007911f6bdf",
".git/objects/2a/b1980bb8d90e6a8e1a3e34d0b054abfd37ebd8": "9c0d3cb26f9ed1a7bd1c3e78ce3183e2",
".git/objects/88/97e758d4f865f5a9bd5dd6265b46a4fa049069": "ba63f73bdd12d527687828cae740400c",
".git/objects/6e/1a2fe0fba01afd04d5629065c08bc8d2572d12": "16a87a13cb2c7530672c5bebeb812606",
".git/objects/5c/777b1c92cdb691806095bdacf82eb6db0e3d17": "9458922a2e5848c2ec24403ee4103350",
".git/objects/91/96bf9bae7c1537b25f1606e6ebebccebec2afe": "e903c95254906cb736bf7ddaac2e0ca5",
".git/objects/65/5e7d13c70b2016bf7fec25bd7ba0fcc30022f6": "b16a6f208b92b35a9850b03d558c454f",
".git/objects/62/66092a521031d24419b865bdb129bf7f918028": "9d2de05e7d79174e755b676ddb6ae068",
".git/objects/5b/16c95434ef44dbb666871449ff3cff07967a67": "379bdc1074308d246b79b14d5492eeb7",
".git/objects/5b/4643d08cabdaf3f016ae3d611378c95a62238f": "36d85c09ecbbfd38527b38e66ef01d15",
".git/objects/08/6341ebed3d763ffcd906cf6a7b11bbfba61907": "dfe81d1885feec28c0767454eecdd592",
".git/objects/08/6fa9b357758692d010e364544f5845fab8b008": "821577c10f690170bdf390f8a5b5089f",
".git/objects/6d/635df31413f6c5d8616a7d410cfff6bf6a2b6f": "1b8a61d89296ccec6849b5f0e439d5f3",
".git/objects/6c/fe608c542619e63cba259a1cd8bb15cbb0e726": "139181fa3e88a7dc6432ac305a80002f",
".git/objects/39/9d493589e591af9f020e7fcb2e7671be8b187c": "a657fa99e4845ab3c5ced6f27b202171",
".git/objects/52/9d4a44fef2cbd17678d7ce39a1b4e496a8cae7": "6ce6ea57b576e5c84082644726dbf014",
".git/objects/bf/b356434f053fa419da8abe9996be33ce7079dd": "9f8faa194f109f1755a0c5b8fb196a64",
".git/objects/dc/fb0e9a327ec6851875767093fbf2e52a8ce8c9": "1ffd02258ba5b3605a50bc3990d5751e",
".git/objects/dc/0426f72e98834339a2c35420ab19ff2652244d": "7f8a0219c9baa4f82e8d54a3221b207d",
".git/objects/dc/be57ff2eb8f0b13439ee2a7d6b7a89758840a8": "984d9fb659382709e18dfb6cacda0c09",
".git/objects/dc/6910308febb94424bc9607ff338e00ad262921": "6fc5d7180a73545eb3351291d7e38cb3",
".git/objects/b6/3a0a7c23c967c034519c82edb1c8dc8e88c095": "02bb456a59eb27f4e680a674a5de16b2",
".git/objects/a9/d30edccbfaef7a82c871a5941ff2bcf6833ede": "0838f67e5d4fe65db106b259f8f35ecc",
".git/objects/a9/1d8bea5f3a3836ff402020b91b8a9dd3c0344f": "a86c9e87aed90dba0662ef6113df9fdb",
".git/objects/a9/aa6b47e9b192a466ec984a2577053202315ad1": "fa8d5e39a6751fe722051e1211fc1b3d",
".git/objects/d2/29185eda967c3c4b3c9991cfd97a8a9b1166af": "7fa5efdbd6fe2517c498bcd248954662",
".git/objects/af/de568e6ca00fd79869cdd028a653ca306b10d6": "948ac9f8afbb47c67baa3ebabbe3d279",
".git/objects/b7/f0b7c87654c6eba9ee9a000e67df1e90d006df": "dd67c58b92ebfb93a17472fc8e3c4b13",
".git/objects/a6/7f2d8ff7bde32032d484f4894aade3ec652262": "f1d4b7c382401487a45d2849346d85f6",
".git/objects/a1/5bc6bdfa25502e2c16b9f1b6adf78784369999": "9bb2438286a6e1732836c787de8a7a38",
".git/objects/c4/42515c210ed70c6984ece81ae24653e7c8cbee": "54684372d184477a5cb06036c51355a1",
".git/objects/e1/f5fe668e60c7b6a85c053274382d84c211ea09": "25f08824a44cc04eb0d85d016ea186c4",
".git/objects/cc/a348d5222621161d8f75b34bb8d7b6cfe70ed8": "633428de7d9eaf213f8c13796d19ac65",
".git/objects/cc/46797f725a6ce4470cef5c5b6b72f19a8cef35": "b05a5a2ec8aea83c1ad0c8f293cea364",
".git/objects/cc/a0dec4abae25bc34132a212446dc77b106452f": "45d7e22ffcb7ff0cbae42a636e21f37c",
".git/objects/f0/7b6ea056e582f3968d8979ec4bfc07f2c2657f": "a91d71570d506badb2b45f876d52065a",
".git/objects/c5/2d8c8c0a4a68a2acc27ebeca151f1abe0f73d5": "5a38081edeae900da76806ba96106542",
".git/objects/e0/d42e48c1a5bd6654dd431553e0a4cd4755962e": "7eca0ccb40eb753cb988ea16fa50e612",
".git/objects/2c/d683e84b2297a414025d92567b5e5349192610": "c105965af8012e0eaa58160c73c97630",
".git/objects/83/1b4feb819defdc2a2198b51e33c8a034e737dd": "aaae0cb456770ddda07e22acd4cfca82",
".git/objects/1b/204ef9c70737336da2a4cb23568b21e999557a": "0f10087e94b70d1e0b78cbcb69b60df8",
".git/objects/77/5ce8c6ba88f86f7c64103da5aa2545278e558b": "ba427281486216dffcdbdf45104d8598",
".git/objects/77/b99337d98de37b1a0fa545d3ef7a477e8859b7": "1c2aae9213b024600d62bf10105eab00",
".git/objects/70/42ca7e948c0c0fedb2cd24a244fa02eed0acdd": "59cf697d8952c6513e9ab004e6db3b97",
".git/objects/1e/64ef04b5224563be88bcd58470dc73a1834249": "2a263f18b9f6bbfa36317ba323d503c9",
".git/objects/24/34a4d4bb39f9aa2436705c5040440df50121e6": "627c6f07861e732c708e4c0544fb8886",
".git/objects/85/c7028816ee2c8ec9c9a3a8a29d7fd93fcdaab9": "74af0705437083f7f19d396b3704f9cd",
".git/objects/85/89c0f9eebec485637d2b47030e75129093b5d5": "8d8dbe31370e06161ed6d123ecf3ff21",
".git/objects/1c/de7b8abcfbe0c5e8984af10904ec2dda180a71": "496ee15c9ea28da84fde9372a3bc9d87",
".git/objects/82/ace432a310c840867d2202f1a44bc08330a3a2": "428c949fd8b8bd8deb08e00a8195313d",
".git/objects/2b/45659826c26b39e0bc03dc25ffa1dbbd2e7edb": "5a93020045e71dd26d64c35608de85c8",
".git/objects/7a/d05740aa9d46a5c66a3bdc28d24feb6a26b9cf": "0ef9c631041c44288dc7800b7c42ecf4",
".git/objects/14/30a68448beaa3cbaf58a500f3fffee0e7185e7": "667a651cec42cdbf9ce2178feac70a93",
".git/objects/14/8a4b333f9fa40b0d1c6c1166ccd3b95bd66e67": "e33c849113a8cc55650b42214e7dd995",
".git/objects/8e/46608d6aa83962f647ec94716e25a2716e4b2c": "2433633a78ee18b0f373794c7d186774",
".git/HEAD": "fae77f7b701b8a5a8a80df38bd75de11",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "307f9fca9d56ba1b0988bd98aad10fd3",
".git/logs/refs/heads/url-bug-fix": "5cad3a1e1a7cc727719309f9aff994f6",
".git/logs/refs/heads/main": "33e83a8c7146b35dc6a26c687e640b32",
".git/logs/refs/remotes/origin/url-bug-fix": "af2d4be0e9269e1be6dd0032b567885f",
".git/logs/refs/remotes/origin/HEAD": "d3703f561e02bd8f2bbd3a4fd0ddd25f",
".git/logs/refs/remotes/origin/main": "f970a49d4b434c8463daab2a37ded8ad",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/url-bug-fix": "4db83b414e646682cf8b7154ada1f1b3",
".git/refs/heads/main": "293d2c14b1911ff5c341f8e0d003d1b2",
".git/refs/remotes/origin/url-bug-fix": "4db83b414e646682cf8b7154ada1f1b3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "293d2c14b1911ff5c341f8e0d003d1b2",
".git/index": "0e18132ec10fb3b9684127535fec04d7",
".git/packed-refs": "fce3d16276945d3874702eb3875b3a6a",
".git/COMMIT_EDITMSG": "69b64623f86def16ce17d454b8be41ae",
".git/FETCH_HEAD": "cdbb217e5347b1d5fe9482541d576918",
"assets/AssetManifest.json": "7ddbd8700a5b4ff4a90bea909f2fe19f",
"assets/NOTICES": "fb6a544a4cc3c6004f81b946459f1812",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8d1522170f63bc215c01fbc949e978de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "de2a6a7999a6153e72ddcf38e7928ee0",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/lotties/splash.json": "cca5c4927526d4e4e0446a9d4318682b",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
