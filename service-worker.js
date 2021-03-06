/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["dist/images/JB_Logo.gif","9e88ef72b9c493ed6b87d4aa98843427"],["dist/images/JB_Logo.svg","611a786ab5414401e7b3808e3c843567"],["dist/images/JB_Logo_Blue.svg","defa995a828360581f394efa3b0b5fb4"],["dist/images/JB_Logo_White.gif","eb92d620e4e809fb354aa381424e9706"],["dist/images/JB_Logo_White.svg","a515daaced5a7192da8922fe27f596ef"],["dist/images/JB_Logo_White_Clear.svg","512f6da4cf3579912389a02e8a5090dd"],["dist/images/JB_Logo_Yellow.svg","31892592dfea82e139820068e5a4f8ff"],["dist/images/developer/DesignBuildCode.png","d7da57ebc4d2722141d7b8224ff49a66"],["dist/images/developer/JBLogo_LinkedIn_V3.png","b104b3d238c7baf6d1bf98306bc5e884"],["dist/images/developer/UXDesigner.png","65bb8648f862edc69caf0264683f36ac"],["dist/images/developer/developer-header.jpeg","34b92fa7d0f15deb3895f540f855a74e"],["dist/images/developer/documents/housingprograms (1).xlsx","2cec611020afe2efddb9cb97c04f5062"],["dist/images/developer/documents/jnbruno.pdf","76e2023d43d9dad2e3754bd750ffbbac"],["dist/images/developer/etude/etude_logo.png","7a6910c9f7160131b5f6592e2489ed01"],["dist/images/developer/etude/etude_profile.jpg","d205bab2abf230f963698cf3d662374a"],["dist/images/developer/etude/etude_project.png","08699035db611d1a18160714906c26f7"],["dist/images/developer/etude/etude_signin.png","2675f0f83f4f3e1cffcdd57d2231d6af"],["dist/images/developer/etude/etude_track.png","2f06b94dc63a7697db8a40ec8fe90055"],["dist/images/developer/javascript.jpg","b727e1a2b31709f6892aa90d7ecd7e24"],["dist/images/developer/joanne_dev.jpg","ed560bacb54c186fb096c8cd4524c9c8"],["dist/images/developer/keepmycasa/127.0.0.1_8080_(iPad).png","b1f4fe887b8143735f639f3099a7242a"],["dist/images/developer/keepmycasa/127.0.0.1_8080_(iPhone 8 Plus) (1).png","1abf3866329b47d04ae555c8dcc4a610"],["dist/images/developer/keepmycasa/127.0.0.1_8080_(iPhone 8 Plus) (2).png","9535a09d4be7ea7d90d59f9a7808b375"],["dist/images/developer/keepmycasa/127.0.0.1_8080_(iPhone 8 Plus) (3).png","c6ff5f5d9f50bfc5ce5484c24d7b94d6"],["dist/images/developer/keepmycasa/127.0.0.1_8080_(iPhone 8 Plus) (4).png","fafe2f7a6972bfe608cbaf02b2641ef6"],["dist/images/developer/keepmycasa/127.0.0.1_8080_(iPhone 8 Plus) (5).png","d6375397d2220c2167818b033475d882"],["dist/images/developer/keepmycasa/127.0.0.1_8080_(iPhone 8 Plus).png","264f511cc54b3290392b45970afcf51b"],["dist/images/developer/keepmycasa/Demo script.pdf","672922980744e8bf9b10e1df0a5deb6d"],["dist/images/developer/keepmycasa/Image uploaded from iOS.jpg","7f6ad32d4e58b468f210a4e158c9bfbc"],["dist/images/developer/keepmycasa/Planning.jpg","defa18307a6abf110ea3996be865c092"],["dist/images/developer/keepmycasa/Q1_(iPad).png","57c9a1d02c296dbb22ffd7fa4735d41d"],["dist/images/developer/keepmycasa/download.png","a4d7b95cdc2e3d30daed0b7470aa20e2"],["dist/images/developer/keepmycasa/housing_programs.PNG","8979fb7e0a892f9856128adf395a8798"],["dist/images/developer/keepmycasa/keep_my_casa.map.svg","0616474ef99c237473e459a62cc34adf"],["dist/images/developer/keepmycasa/kmcLogo.svg","6adfca8dd18508ed99d6e64657316dcf"],["dist/images/developer/keepmycasa/kmc_presentation.PNG","552ef04fb5ae3ed2c66b07f9d26d786a"],["dist/images/developer/keepmycasa/kmc_working.PNG","a494c36d519ee6818fc37a1d930a727e"],["dist/images/developer/keepmycasa/landing.PNG","f29daed739064f6c362f30d05ff18661"],["dist/images/developer/keepmycasa/landing_(iPad).png","60ecd5aa1707d3c4ec971278c01f0359"],["dist/images/developer/medidata/ICD9.png","973615580c3550a46d12c892149f4de3"],["dist/images/developer/medidata/ICD9Visualization.jpg","f583b22b63c26529667f3577f0057527"],["dist/images/developer/medidata/TimelineCrop.jpg","fb2f3555e0603bcd7de2932473e75a44"],["dist/images/developer/medidata/existing_ehr.png","3d57362e03e6dd9a4a6c3e8ed3119eaf"],["dist/images/developer/medidata/home_page.png","901c380409fce15aeafb2d5cb0b766e9"],["dist/images/developer/medidata/iEHR_Desktop_Wireframe_02.jpg","8bd0e7db470fa749001b1b13e56e4322"],["dist/images/developer/medidata/iEHR_Timeline_Filter-01.jpg","1017631f886bd398c195abeac21573ba"],["dist/images/developer/medidata/level_0_diagram.PNG","1ee8e24f12044aee8c2e2f35e757552c"],["dist/images/developer/medidata/level_1_diagram.PNG","dfb816ca895961d65d7eab6869d2884f"],["dist/images/developer/medidata/objective_tree.png","df3c8047b7987fc196f48470ee51cce9"],["dist/images/developer/medidata/patient_profile.png","e8a15c92d916f4148989117718790d4e"],["dist/images/developer/medidata/results.PNG","22cb27b79d30d945a8a760a7335bc27a"],["dist/images/developer/medidata/results2.PNG","0787fd237ba770d5f0295ef2d4eb2941"],["dist/images/developer/medidata/search_patient.png","5042ffed59e98b13cbd3239f28ec3193"],["dist/images/developer/medidata/teamroles.PNG","870afed53ee687d31d51a29cb61c0360"],["dist/images/developer/presentations/JoanneHourOfCode.PNG","9ecb7fcd02b9f4f2fa7defa330caa403"],["dist/images/developer/sickbay/d3_inspo.PNG","72cc7b734fe8ea33f4fdb3cf9552825f"],["dist/images/developer/sickbay/data_sample.PNG","f09ad03a80db5e09b3c212e667a26222"],["dist/images/developer/sickbay/illustrator_mockup.PNG","1e804d30ee92234027ffda8256bc03e4"],["dist/images/developer/sickbay/mockups.PNG","e627a53fa803abefcad3f3e408d256d7"],["dist/images/developer/sickbay/sickbay_main.PNG","7c342c9d7d2b9c72209ecf534e63803b"],["dist/images/developer/sickbay/storyboarding.PNG","b3a7693b89cafa32b76690789681ddd2"],["dist/images/developer/sickbay/ux_flowchart.PNG","54e30bb91006b11680b090ec5c3805f8"],["dist/images/developer/uknowHealth/IMG_1145.JPG","ec3709540f65fb5be0fea5644a30d493"],["dist/images/developer/uknowHealth/answering_questions.jpg","4155aecc90cc983df1cbc2bacc234532"],["dist/images/developer/uknowHealth/awesome_team.jpg","082c7d28951297c12369e30fb3eaf4c0"],["dist/images/developer/uknowHealth/business_model.PNG","7f1ea0ab21743d189c6b93b32ef57445"],["dist/images/developer/uknowHealth/businesscase1.PNG","00b52384e58f6e9d7de704b7349d8b1c"],["dist/images/developer/uknowHealth/businesscase2.PNG","40d7aa0035cca818af8d1d5106701213"],["dist/images/developer/uknowHealth/designing.jpg","d3c8fc60133a7f995c5930b8048276ba"],["dist/images/developer/uknowHealth/designing.png","f89105fa79b8c0c46f07ac22e7f7a691"],["dist/images/developer/uknowHealth/done.jpg","7d6746fc1d8e53d245f6e05dde30dab8"],["dist/images/developer/uknowHealth/future_steps.PNG","0c8f38d329952560523c0942c036179d"],["dist/images/developer/uknowHealth/my_team.PNG","7a7e45beed0cbcfacbeb6a9a0feab6b3"],["dist/images/developer/uknowHealth/presentation.PNG","af6cf876ece268de1e248d037ed70359"],["dist/images/developer/uknowHealth/presenting_my_team.jpg","6d404bdaf5e8fa265a830d5248b13ca8"],["dist/images/developer/uknowHealth/traction.PNG","56ff612ac02be79716404a7fdaf27f4e"],["dist/images/developer/uknowHealth/uKnowHealth.PNG","7d38273a4363fe9ffa0614df8514c047"],["dist/images/developer/uknowHealth/value_proposition.PNG","cb76224621d7b37b73e226c9e823fbf4"],["dist/images/icons/AngularJS.png","1daf03c36039de7461e2f7f0b1c16525"],["dist/images/icons/HTML5CSS3Logos.svg","5d47423e35e80303859a6f81cd47ed17"],["dist/images/icons/gmail.png","801b391972a60f254b91eb2bdae36c22"],["dist/images/icons/gulp.svg","59790b4b0f8815e948bb32468912ef5a"],["dist/images/icons/instagram.png","9974a95874b554ec577372c6e7f448e0"],["dist/images/icons/linkedin-box.png","d56e64a24d3ea970227c21921473e6a9"],["dist/images/icons/materialize.png","1e371f98c7aa12661ea54969ef4ff8f1"],["dist/images/illustrator/Certifications/intermediate_logo.png","f03dc712be02f9a14d16173d35e58987"],["dist/images/illustrator/Certifications/standard_logo.png","baef34da076c8a5348ca8d341a604212"],["dist/images/illustrator/CopicMarkers.jpg","e05a5d7c6ca3ed18a70709c98f51e615"],["dist/images/illustrator/artworks/Submission.jpg","9541fa4a4a9116f1a9185faf073968fc"],["dist/images/illustrator/artworks/Submission.png","9bd8e5dc50800223cfd17e980c849f70"],["dist/images/illustrator/artworks/corvus.jpg","07b4be7c67669cab7a4677fe3605cdea"],["dist/images/illustrator/artworks/corvus.png","fa97892935ca8e37b05cd48cf0c685d2"],["dist/images/illustrator/artworks/innerturmoil.png","1192b63812844d74092739f6d5f7589f"],["dist/images/illustrator/artworks/iris.JPG","bdc2a7301c83dcce164028288d031ab5"],["dist/images/illustrator/artworks/iris.png","9429864b9901e8c8a7f9fea8ddd214c9"],["dist/images/illustrator/headshot-art.jpg","139fc5909287ceb7a6cc21c31f3304ea"],["dist/images/photographer/headshot-photo.png","e096e742a37f6d793556e69c4bd174db"],["dist/images/photographer/photo-banner-min.jpg","5e8f5071f8db802801a40aa6f016bdac"],["dist/images/photographer/photos/demo-photo-four.jpeg","f3764763448d406420eb2e8f87dd7d7a"],["dist/images/photographer/photos/demo-photo-one.jpg","6f3af8eee7c5490b03195973b5916cb7"],["dist/images/photographer/photos/demo-photo-three.jpeg","04e8f520be848822e7d48c73446167da"],["dist/images/photographer/photos/demo-photo-two.jpg","1425178caaf39dd47df6484cbdf87a26"],["dist/images/photographer/photos/pexels-photo-93001.jpeg","3d9359d44b6c1040eeeb62b11fd3703e"],["dist/scripts/bundle.min.js","087a6998ec3c1966a804062e887d0562"],["dist/scripts/controllerBundle.min.js","6a4834324c227d751ce19def704ad446"],["dist/styles/materialize.min.css","40728a6b0e1c9eb7b9b1a4612a145c09"],["dist/styles/style.css","e077538e57832a21f58d2ccc5b0213da"],["dist/stylesUncss/material-design-iconic-font.css","ccf75a8bab8bcefe5472a27b7de62d38"],["fonts/Material-Design-Iconic-Font.ttf","b351bd62abcd96e924d9f44a3da169a7"],["fonts/Material-Design-Iconic-Font.woff","d2a55d331bdd1a7ea97a8a1fbb3c569c"],["fonts/Material-Design-Iconic-Font.woff2","a4d31128b633bc0b1cc1f18a34fb3851"],["fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["fonts/roboto/Roboto-Bold.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["fonts/roboto/Roboto-Light.woff2","69f8a0617ac472f78e45841323a3df9e"],["fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["fonts/roboto/Roboto-Medium.woff2","574fd0b50367f886d359e8264938fc37"],["fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["fonts/roboto/Roboto-Regular.woff2","2751ee43015f9884c3642f103b7f70c9"],["fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["fonts/roboto/Roboto-Thin.woff2","954bbdeb86483e4ffea00c4591530ece"],["gulpfile.js","4a0b3b5624adb07e7f807c4da26abfdb"],["index.html","053aed21173ea098e6e173fa2b10fe4b"],["responsive-image.html","c68883cdb3edbb14969659ba5077ead8"],["scripts/app.js","7f5aa54233a8a6422538cd9ddbc70f09"],["scripts/directives/responsiveImage.js","caf5ff92f60636c5ea89ae668a87f72f"],["scripts/lib/angular-ui-router.min.js","4504acdaacc53c017b66cc2416afc84e"],["scripts/lib/angular.min.js","be6af23e2a716c006da75d0291784254"],["scripts/lib/jquery-2.1.1.min.js","e40ec2161fe7993196f23c8a07346306"],["scripts/lib/materialize.min.js","f602049ecde9f5a9e11f80afb62baaba"],["sw-precache-config.js","964d9532ceb1d24d8afd8fbc3db9aed9"],["swRegister.js","e6b1e7b7f094835770a96a6720d2a320"],["templates/main/artist.html","6b6b01cabcf7c4956da493b216a80f1f"],["templates/main/developer.html","5d1b839694b2cfa0f777d267d2942cd1"],["templates/photoshoots/demo-photoshoot.html","c3e70d3142d727e7a33b7b75feae532e"],["templates/projects/project-keep-my-casa.html","9813ad52969f1cc886e302a9dae98a9a"],["templates/projects/project-medidata.html","30ef1302d940fa4d104c55fc94d45154"],["templates/projects/project-sickbay.html","f510ef827eda547b45e2978f3701c00a"],["templates/projects/project-u-know-health.html","d0d8b276634430e8e850ca527a05d101"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







