if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let a={};const r=e=>t(e,i),o={module:{uri:i},exports:a,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),a)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/U234te332BrEWJQ_fHg7k/_buildManifest.js",revision:"d8963c6657102db1f2fa51dc81a43a6f"},{url:"/_next/static/U234te332BrEWJQ_fHg7k/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0497fc7d-eb64d1a47b4dfb5f.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/0e762574-4d07f57fcabfb17c.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/150-74323c24a663f6fd.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/160-b098c13a49d9d29b.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/160b575a-caa55963e4c54217.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/171-a58381c39f11003e.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/309-d236261825e66604.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/343-b96349a4c6d0b46b.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/399-a68747a8b18032bf.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/429-5a28fc1d0c391b6c.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/468-8079808865f6175a.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/514-a884f6335e156da8.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/521-455a4c7308b94400.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/53c13509-d25b294976ca25eb.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/561-fb6e4edd229155dc.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/583-082a8b85128dfda9.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/605-86ffbd88645440dd.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/623-6ea2c0130e3ee314.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/716-63b2b35e9ccb4d5a.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/718-2ce241d69c8182bd.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/804-f41f0198def01046.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/834-086890c9e606b3dc.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/854fec37-956b5b9b00708fcb.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/8e1d74a4-bdcc97241261ad65.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/936-3939cd3050b8128c.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/94730671-580f89731bb7a240.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/9c8663ec-389f3fc344c79c2f.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/aaea2bcf-2ea28b6b1f77a321.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/(root)/create/page-d21f55aad2274d2e.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/(root)/explore/loading-5a4d084a047b974c.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/(root)/explore/page-987ee83dc008c7db.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/(root)/layout-cd9e0ad8a60fd278.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/(root)/my-space/favorites/loading-e1e83e3f5005f161.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/(root)/my-space/favorites/page-cd6c35e92b044c5a.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/(root)/my-space/layout-7704d865a88111bc.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/(root)/my-space/loading-719f89c0ce7f010f.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/(root)/my-space/page-2c10c408b03341e1.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/(root)/nft/%5BtokenId%5D/loading-c4632320b450cac7.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/(root)/nft/%5BtokenId%5D/page-c7d6b4e70d86f8c6.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/(root)/page-08e5763f0742746b.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/_not-found-ee31ab7418560f3f.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/app/layout-05da813b77dfe6a7.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/f25cdb8d-d1d714ccf6e576c1.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/fd9d1056-89b1d376779f8d2b.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/framework-b370f160bb96059c.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/main-6842c1742cfcdd67.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/main-app-42f96710454f2491.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/pages/_app-d21e88acd55d90f1.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/pages/_error-d6107f1aac0c574c.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-703bc34a0aee573b.js",revision:"U234te332BrEWJQ_fHg7k"},{url:"/_next/static/css/94ba8c48b06129f0.css",revision:"94ba8c48b06129f0"},{url:"/_next/static/css/bd7c8630fcd0eb09.css",revision:"bd7c8630fcd0eb09"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icons/logo-192x192.png",revision:"6d221c43383fee755a30572652a45a58"},{url:"/icons/logo-384x384.png",revision:"dd56d41596052b911d25de68f9bfba19"},{url:"/icons/logo-512x512.png",revision:"98e083eab54453f904578a3829d1c689"},{url:"/icons/logo-800x800.png",revision:"8e9e1dfb9d8a7a20721e9c3d39250882"},{url:"/logo.svg",revision:"8d1ba900ba7c72eec8fcfe1a27b2cf30"},{url:"/manifest.json",revision:"40156e4881b5d4a9819b1769df36a4f4"},{url:"/nothing-to-show.svg",revision:"a808e67501e9059050bc05898f94dc90"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
