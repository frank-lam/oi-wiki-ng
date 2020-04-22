/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "41da3af19bc9b6a321a3eb9a01e6a192"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "a53986d6304c4efc08c5308eaf0b121e"
  },
  {
    "url": "page-data/math/page-data.json",
    "revision": "13d5dcb1a68c1951f4d487f4587d436a"
  },
  {
    "url": "page-data/math/poly/div-mod/page-data.json",
    "revision": "ca318b04faba91aa8b2e4e5c8ceda0ef"
  },
  {
    "url": "page-data/math/poly/fft/page-data.json",
    "revision": "51e7511d8f4dd7d5a5e1bea528bd075d"
  },
  {
    "url": "page-data/math/poly/fwt/page-data.json",
    "revision": "27b0144a07c7b2ebd7fe5bf44b7a58d1"
  },
  {
    "url": "page-data/math/poly/intro/page-data.json",
    "revision": "62f35ba3175b0ec8357d288b75bf8e98"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/page-data.json",
    "revision": "1d215194bd65d2359358089ebaa9952d"
  },
  {
    "url": "page-data/math/poly/inv/page-data.json",
    "revision": "6ed4f3f889bc51a7f56c356f06f33059"
  },
  {
    "url": "page-data/math/poly/lagrange/page-data.json",
    "revision": "4fdbd9b0a55ee3a79ea37e3df99abd14"
  },
  {
    "url": "page-data/math/poly/ln-exp/page-data.json",
    "revision": "4044afbca7395493c0680cea387aae40"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/page-data.json",
    "revision": "f98212dd9ca9596374fb19a4648226fa"
  },
  {
    "url": "page-data/math/poly/newton/page-data.json",
    "revision": "5214468a47d5d1cf67667255eeec5c88"
  },
  {
    "url": "page-data/math/poly/ntt/page-data.json",
    "revision": "7d97cd463a0846c58140935afdf1a243"
  },
  {
    "url": "page-data/math/poly/sqrt/page-data.json",
    "revision": "fff71536fe04d88388d0aab197e357e7"
  },
  {
    "url": "page-data/math/poly/tri-func/page-data.json",
    "revision": "8d089a86a9cd3bd845b70ebbe911a8ba"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "14d8476c86c6fe1e005e5e65e6aa07aa"
  },
  {
    "url": "page-data/search/page-data.json",
    "revision": "3bde0c154ca8ce7fbed4926b729b38fd"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "c5174fae8be6c6231409c4c7bfdc03fa"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "3d0c07ac2a40f7e34efb2b262c411b6a"
  },
  {
    "url": "page-data/tags/chinese/page-data.json",
    "revision": "6429deb47a7f828940ee7d3a22795df7"
  },
  {
    "url": "page-data/tags/math/page-data.json",
    "revision": "be3a4764af2feec3ac03588908c0dcf3"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "668b7da83ba79d703e347ae3219cb37f"
  },
  {
    "url": "page-data/tags/polynomial/page-data.json",
    "revision": "2c560cc9f86a1d37be80bb3225cccc1b"
  },
  {
    "url": "page-data/tags/test/page-data.json",
    "revision": "f1de0b026c0e6181dac0d2e76324d0d8"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "fd3b2b8fc9c78c0f712f2b88a0acd67e"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "0cdc4458160bc5f8cd9c7fe47d975ef3"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "21e0c69c246c3453e1722d92319df74c"
  },
  {
    "url": "13-0820b45a6673b54d77ce.js"
  },
  {
    "url": "389b49c9270c6cb1b6ad912fe73aaf3b03659c7c-7bfac619747374b3bc55.js"
  },
  {
    "url": "app-41493089b8b0ceadecf7.js"
  },
  {
    "url": "bab4896a-4c6a2a2285764c532d92.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-3a1a5a94f3151f906588.js"
  },
  {
    "url": "component---src-pages-404-js-fdd868f7c8ac31f4f176.js"
  },
  {
    "url": "component---src-pages-pages-js-5ed2df4854d93dc93630.js"
  },
  {
    "url": "component---src-pages-search-js-6417eb3d962eefab8bd5.js"
  },
  {
    "url": "component---src-pages-tags-js-61eda0e40ceea8ca9e63.js"
  },
  {
    "url": "component---src-templates-doc-js-f8a9df4313556514348b.js"
  },
  {
    "url": "component---src-templates-tags-js-febb2dec49cc3bb7c06d.js"
  },
  {
    "url": "framework-3321703c33570853116c.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "styles-b729c27faa6284e9ff45.js"
  },
  {
    "url": "webpack-runtime-8b5501b8b07af2b47166.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "be731efab4044c0f3be140991bf4e56c"
  },
  {
    "url": "styles.5142be4472e066a3b0ae.css"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a64367b2f20302a9d6f214569017f012"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-41493089b8b0ceadecf7.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
