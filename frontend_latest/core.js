/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"core": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"external_auth":"external_auth"}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/frontend_latest/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = self["webpackJsonp"] = self["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entrypoints/core.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/home-assistant-js-websocket/dist/haws.es.js":
/*!******************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/haws.es.js ***!
  \******************************************************************/
/*! exports provided: createConnection, getAuth, genClientId, genExpires, Auth, getCollection, createCollection, Connection, subscribeConfig, subscribeServices, entitiesColl, subscribeEntities, ERR_CANNOT_CONNECT, ERR_INVALID_AUTH, ERR_CONNECTION_LOST, ERR_HASS_HOST_REQUIRED, ERR_INVALID_HTTPS_TO_HTTP, getStates, getServices, getConfig, getUser, callService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnection", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genClientId", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genExpires", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCollection", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeConfig", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeServices", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesColl", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntities", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CANNOT_CONNECT", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_INVALID_AUTH", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CONNECTION_LOST", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_HASS_HOST_REQUIRED", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_INVALID_HTTPS_TO_HTTP", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStates", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callService", function() { return _; });
function e(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var t=1,n=2,r=3,o=4,s=5;function i(e){return{type:"unsubscribe_events",subscription:e}}var c=function(e,t){this.options=t,this.commandId=1,this.commands=new Map,this.eventListeners=new Map,this.closeRequested=!1,this.setSocket(e)};c.prototype.setSocket=function(e){var t=this,n=this.socket;if(this.socket=e,e.addEventListener("message",function(e){return t._handleMessage(e)}),e.addEventListener("close",function(e){return t._handleClose(e)}),n){var r=this.commands;this.commandId=1,this.commands=new Map,r.forEach(function(e){"subscribe"in e&&e.subscribe().then(function(t){e.unsubscribe=t,e.resolve()})}),this.fireEvent("ready")}},c.prototype.addEventListener=function(e,t){var n=this.eventListeners.get(e);n||this.eventListeners.set(e,n=[]),n.push(t)},c.prototype.removeEventListener=function(e,t){var n=this.eventListeners.get(e);if(n){var r=n.indexOf(t);-1!==r&&n.splice(r,1)}},c.prototype.fireEvent=function(e,t){var n=this;(this.eventListeners.get(e)||[]).forEach(function(e){return e(n,t)})},c.prototype.close=function(){this.closeRequested=!0,this.socket.close()},c.prototype.subscribeEvents=function(e,t){try{return this.subscribeMessage(e,function(e){var t={type:"subscribe_events"};return e&&(t.event_type=e),t}(t))}catch(e){return Promise.reject(e)}},c.prototype.ping=function(){return this.sendMessagePromise({type:"ping"})},c.prototype.sendMessage=function(e,t){t||(t=this._genCmdId()),e.id=t,this.socket.send(JSON.stringify(e))},c.prototype.sendMessagePromise=function(e){var t=this;return new Promise(function(n,r){var o=t._genCmdId();t.commands.set(o,{resolve:n,reject:r}),t.sendMessage(e,o)})},c.prototype.subscribeMessage=function(e,t){try{var n,r=this,o=r._genCmdId();return Promise.resolve(new Promise(function(s,c){n={resolve:s,reject:c,callback:e,subscribe:function(){return r.subscribeMessage(e,t)},unsubscribe:function(){try{return Promise.resolve(r.sendMessagePromise(i(o))).then(function(){r.commands.delete(o)})}catch(e){return Promise.reject(e)}}},r.commands.set(o,n);try{r.sendMessage(t,o)}catch(e){}})).then(function(){return function(){return n.unsubscribe()}})}catch(e){return Promise.reject(e)}},c.prototype._handleMessage=function(e){var t=JSON.parse(e.data),n=this.commands.get(t.id);switch(t.type){case"event":n?n.callback(t.event):(console.warn("Received event for unknown subscription "+t.id+". Unsubscribing."),this.sendMessagePromise(i(t.id)));break;case"result":n&&(t.success?(n.resolve(t.result),"subscribe"in n||this.commands.delete(t.id)):(n.reject(t.error),this.commands.delete(t.id)));break;case"pong":n?(n.resolve(),this.commands.delete(t.id)):console.warn("Received unknown pong response "+t.id)}},c.prototype._handleClose=function(t){var n=this;if(this.commands.forEach(function(e){"subscribe"in e||e.reject({type:"result",success:!1,error:{code:3,message:"Connection lost"}})}),!this.closeRequested){this.fireEvent("disconnected");var r=Object.assign({},this.options,{setupRetry:0}),o=function(t){var s=n;setTimeout(function(){try{var n=e(function(){return Promise.resolve(r.createSocket(r)).then(function(e){s.setSocket(e)})},function(e){2===e?s.fireEvent("reconnect-error",e):o(t+1)});return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},1e3*Math.min(t,5))};o(0)}},c.prototype._genCmdId=function(){return++this.commandId};var u=function(e){void 0===e&&(e={});try{function t(){function t(){function t(){if(n)return new v(n,e.saveTokens);if(void 0===r)throw o;return function(e,t,n,r){n+=(n.includes("?")?"&":"?")+"auth_callback=1",document.location.href=function(e,t,n,r){var o=e+"/auth/authorize?response_type=code&redirect_uri="+encodeURIComponent(n);return null!==t&&(o+="&client_id="+encodeURIComponent(t)),r&&(o+="&state="+encodeURIComponent(r)),o}(e,t,n,r)}(r,s,e.redirectUrl||location.protocol+"//"+location.host+location.pathname+location.search,btoa(JSON.stringify({hassUrl:r,clientId:s}))),new Promise(function(){})}var i=function(){if(!n&&e.loadTokens)return Promise.resolve(e.loadTokens()).then(function(e){n=e})}();return i&&i.then?i.then(t):t()}var i=function(){if(!n){var t=function(e){for(var t={},n=location.search.substr(1).split("&"),r=0;r<n.length;r++){var o=n[r].split("="),s=decodeURIComponent(o[0]),i=o.length>1?decodeURIComponent(o[1]):void 0;t[s]=i}return t}(),r=function(){if("auth_callback"in t){var r=JSON.parse(atob(t.state));return Promise.resolve(h(r.hassUrl,r.clientId,t.code)).then(function(t){n=t,e.saveTokens&&e.saveTokens(n)})}}();if(r&&r.then)return r.then(function(){})}}();return i&&i.then?i.then(t):t()}var n,r=e.hassUrl;r&&"/"===r[r.length-1]&&(r=r.substr(0,r.length-1));var s=void 0!==e.clientId?e.clientId:f(),i=function(){if(!n&&e.authCode&&r)return Promise.resolve(h(r,s,e.authCode)).then(function(t){n=t,e.saveTokens&&e.saveTokens(n)})}();return Promise.resolve(i&&i.then?i.then(t):t())}catch(e){return Promise.reject(e)}},a=function(e,t,n){try{var r="undefined"!=typeof location&&location;if(r&&"https:"===r.protocol){var o=document.createElement("a");if(o.href=e,"http:"===o.protocol&&"localhost"!==o.hostname)throw 5}var s=new FormData;return null!==t&&s.append("client_id",t),Object.keys(n).forEach(function(e){s.append(e,n[e])}),Promise.resolve(fetch(e+"/auth/token",{method:"POST",credentials:"same-origin",body:s})).then(function(n){if(!n.ok)throw 400===n.status||403===n.status?2:new Error("Unable to fetch tokens");return Promise.resolve(n.json()).then(function(n){return n.hassUrl=e,n.clientId=t,n.expires=d(n.expires_in),n})})}catch(e){return Promise.reject(e)}},f=function(){return location.protocol+"//"+location.host+"/"},d=function(e){return 1e3*e+Date.now()};function h(e,t,n){return a(e,t,{code:n,grant_type:"authorization_code"})}var v=function(e,t){this.data=e,this._saveTokens=t},l={wsUrl:{configurable:!0},accessToken:{configurable:!0},expired:{configurable:!0}};l.wsUrl.get=function(){return"ws"+this.data.hassUrl.substr(4)+"/api/websocket"},l.accessToken.get=function(){return this.data.access_token},l.expired.get=function(){return Date.now()>this.data.expires},v.prototype.refreshAccessToken=function(){try{var e=this;return Promise.resolve(a(e.data.hassUrl,e.data.clientId,{grant_type:"refresh_token",refresh_token:e.data.refresh_token})).then(function(t){t.refresh_token=e.data.refresh_token,e.data=t,e._saveTokens&&e._saveTokens(t)})}catch(e){return Promise.reject(e)}},v.prototype.revoke=function(){try{var e=this,t=new FormData;return t.append("action","revoke"),t.append("token",e.data.refresh_token),Promise.resolve(fetch(e.data.hassUrl+"/auth/token",{method:"POST",credentials:"same-origin",body:t})).then(function(){e._saveTokens&&e._saveTokens(null)})}catch(e){return Promise.reject(e)}},Object.defineProperties(v.prototype,l);var m=function(e,t,n,r){if(e[t])return e[t];var o,s=0,i=function(e){var t=[];function n(n,r){e=r?n:Object.assign({},e,n);for(var o=t,s=0;s<o.length;s++)o[s](e)}return{get state(){return e},action:function(t){function r(e){n(e,!1)}return function(){for(var n=arguments,o=[e],s=0;s<arguments.length;s++)o.push(n[s]);var i=t.apply(this,o);if(null!=i)return i.then?i.then(r):r(i)}},setState:n,subscribe:function(e){return t.push(e),function(){!function(e){for(var n=[],r=0;r<t.length;r++)t[r]===e?e=null:n.push(t[r]);t=n}(e)}}}}(),c=function(){return n(e).then(function(e){return i.setState(e,!0)})},u=function(){return c().catch(function(t){if(e.socket.readyState==e.socket.OPEN)throw t})};return e[t]={get state(){return i.state},refresh:c,subscribe:function(t){1==++s&&(r&&(o=r(e,i)),e.addEventListener("ready",u),u());var n=i.subscribe(t);return void 0!==i.state&&setTimeout(function(){return t(i.state)},0),function(){n(),--s||(o&&o.then(function(e){e()}),e.removeEventListener("ready",c))}}},e[t]},p=function(e,t,n,r,o){return m(r,e,t,n).subscribe(o)},b=function(e){return e.sendMessagePromise({type:"get_states"})},y=function(e){return e.sendMessagePromise({type:"get_services"})},g=function(e){return e.sendMessagePromise({type:"get_config"})},k=function(e){return e.sendMessagePromise({type:"auth/current_user"})},_=function(e,t,n,r){return e.sendMessagePromise(function(e,t,n){var r={type:"call_service",domain:e,service:t};return n&&(r.service_data=n),r}(t,n,r))};function P(e,t){return void 0===e?null:{components:e.components.concat(t.data.component)}}var E=function(e){return g(e)},w=function(e,t){return Promise.all([e.subscribeEvents(t.action(P),"component_loaded"),e.subscribeEvents(function(){return E(e).then(function(e){return t.setState(e,!0)})},"core_config_updated")]).then(function(e){return function(){return e.forEach(function(e){return e()})}})},S=function(e,t){return function(e){return m(e,"_cnf",E,w)}(e).subscribe(t)};function j(e,t){var n,r;if(void 0===e)return null;var o=t.data,s=o.domain,i=Object.assign({},e[s],((n={})[o.service]={description:"",fields:{}},n));return(r={})[s]=i,r}function T(e,t){var n;if(void 0===e)return null;var r=t.data,o=r.domain,s=r.service,i=e[o];if(!(i&&s in i))return null;var c={};return Object.keys(i).forEach(function(e){e!==s&&(c[e]=i[e])}),(n={})[o]=c,n}var I=function(e){return y(e)},M=function(e,t){return Promise.all([e.subscribeEvents(t.action(j),"service_registered"),e.subscribeEvents(t.action(T),"service_removed")]).then(function(e){return function(){return e.forEach(function(e){return e()})}})},L=function(e,t){return function(e){return m(e,"_srv",I,M)}(e).subscribe(t)},O=function(e){try{return Promise.resolve(b(e)).then(function(e){for(var t={},n=0;n<e.length;n++){var r=e[n];t[r.entity_id]=r}return t})}catch(e){return Promise.reject(e)}},U=function(e,t){return e.subscribeEvents(function(e){return function(t,n){var r,o=t.state;if(void 0!==o){var s=e.data,i=s.entity_id,c=s.new_state;if(c)t.setState(((r={})[c.entity_id]=c,r));else{var u=Object.assign({},o);delete u[i],t.setState(u,!0)}}}(t)},"state_changed")},C=function(e){return m(e,"_ent",O,U)},R=function(e,t){return C(e).subscribe(t)},x=function(e){try{var t=Object.assign({},N,e);return Promise.resolve(t.createSocket(t)).then(function(e){return new c(e,t)})}catch(e){return Promise.reject(e)}},N={setupRetry:0,createSocket:function(t){if(!t.auth)throw o;var n=t.auth,r=n.expired?n.refreshAccessToken().then(function(){r=void 0},function(){r=void 0}):void 0,s=n.wsUrl;return new Promise(function(o,i){return function t(o,i,c){var u=new WebSocket(s),a=!1,f=function(){if(u.removeEventListener("close",f),a)c(2);else if(0!==o){var e=-1===o?-1:o-1;setTimeout(function(){return t(e,i,c)},1e3)}else c(1)},d=function(t){try{var o=e(function(){function e(){u.send(JSON.stringify({type:"auth",access_token:n.accessToken}))}var t=function(){if(n.expired)return Promise.resolve(r||n.refreshAccessToken()).then(function(){})}();return t&&t.then?t.then(e):e()},function(e){a=2===e,u.close()});return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},h=function(e){try{switch(JSON.parse(e.data).type){case"auth_invalid":a=!0,u.close();break;case"auth_ok":u.removeEventListener("open",d),u.removeEventListener("message",h),u.removeEventListener("close",f),u.removeEventListener("error",f),i(u)}return Promise.resolve()}catch(e){return Promise.reject(e)}};u.addEventListener("open",d),u.addEventListener("message",h),u.addEventListener("close",f),u.addEventListener("error",f)}(t.setupRetry,o,i)})}};
//# sourceMappingURL=haws.es.js.map


/***/ }),

/***/ "./src/common/auth/token_storage.ts":
/*!******************************************!*\
  !*** ./src/common/auth/token_storage.ts ***!
  \******************************************/
/*! exports provided: askWrite, saveTokens, enableWrite, loadTokens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "askWrite", function() { return askWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTokens", function() { return saveTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableWrite", function() { return enableWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTokens", function() { return loadTokens; });
const storage = window.localStorage || {};
// So that core.js and main app hit same shared object.
let tokenCache = window.__tokenCache;
if (!tokenCache) {
    tokenCache = window.__tokenCache = {
        tokens: undefined,
        writeEnabled: undefined,
    };
}
function askWrite() {
    return (tokenCache.tokens !== undefined && tokenCache.writeEnabled === undefined);
}
function saveTokens(tokens) {
    tokenCache.tokens = tokens;
    if (tokenCache.writeEnabled) {
        try {
            storage.hassTokens = JSON.stringify(tokens);
        }
        catch (err) {
            // write failed, ignore it. Happens if storage is full or private mode.
        }
    }
}
function enableWrite() {
    tokenCache.writeEnabled = true;
    if (tokenCache.tokens) {
        saveTokens(tokenCache.tokens);
    }
}
function loadTokens() {
    if (tokenCache.tokens === undefined) {
        try {
            // Delete the old token cache.
            delete storage.tokens;
            const tokens = storage.hassTokens;
            if (tokens) {
                tokenCache.tokens = JSON.parse(tokens);
                tokenCache.writeEnabled = true;
            }
            else {
                tokenCache.tokens = null;
            }
        }
        catch (err) {
            tokenCache.tokens = null;
        }
    }
    return tokenCache.tokens;
}


/***/ }),

/***/ "./src/data/auth.ts":
/*!**************************!*\
  !*** ./src/data/auth.ts ***!
  \**************************/
/*! exports provided: hassUrl, getSignedPath, fetchAuthProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hassUrl", function() { return hassUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignedPath", function() { return getSignedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAuthProviders", function() { return fetchAuthProviders; });
const hassUrl = `${location.protocol}//${location.host}`;
const getSignedPath = (hass, path) => hass.callWS({ type: "auth/sign_path", path });
const fetchAuthProviders = () => fetch("/auth/providers", {
    credentials: "same-origin",
});


/***/ }),

/***/ "./src/data/lovelace.ts":
/*!******************************!*\
  !*** ./src/data/lovelace.ts ***!
  \******************************/
/*! exports provided: fetchConfig, saveConfig, subscribeLovelaceUpdates, getLovelaceCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfig", function() { return fetchConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveConfig", function() { return saveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeLovelaceUpdates", function() { return subscribeLovelaceUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLovelaceCollection", function() { return getLovelaceCollection; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");

const fetchConfig = (conn, force) => conn.sendMessagePromise({
    type: "lovelace/config",
    force,
});
const saveConfig = (hass, config) => hass.callWS({
    type: "lovelace/config/save",
    config,
});
const subscribeLovelaceUpdates = (conn, onChange) => conn.subscribeEvents(onChange, "lovelace_updated");
const getLovelaceCollection = (conn) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_lovelace", (conn2) => fetchConfig(conn2, false), (_conn, store) => subscribeLovelaceUpdates(conn, () => fetchConfig(conn, false).then((config) => store.setState(config, true))));


/***/ }),

/***/ "./src/data/ws-panels.ts":
/*!*******************************!*\
  !*** ./src/data/ws-panels.ts ***!
  \*******************************/
/*! exports provided: subscribePanels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribePanels", function() { return subscribePanels; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");

const fetchPanels = (conn) => conn.sendMessagePromise({
    type: "get_panels",
});
const subscribeUpdates = (conn, store) => conn.subscribeEvents(() => fetchPanels(conn).then((panels) => store.setState(panels, true)), "panels_updated");
const subscribePanels = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_pnl", fetchPanels, subscribeUpdates, conn, onChange);


/***/ }),

/***/ "./src/data/ws-themes.ts":
/*!*******************************!*\
  !*** ./src/data/ws-themes.ts ***!
  \*******************************/
/*! exports provided: subscribeThemes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeThemes", function() { return subscribeThemes; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");

const fetchThemes = (conn) => conn.sendMessagePromise({
    type: "frontend/get_themes",
});
const subscribeUpdates = (conn, store) => conn.subscribeEvents((event) => store.setState(event.data, true), "themes_updated");
const subscribeThemes = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_thm", fetchThemes, subscribeUpdates, conn, onChange);


/***/ }),

/***/ "./src/data/ws-user.ts":
/*!*****************************!*\
  !*** ./src/data/ws-user.ts ***!
  \*****************************/
/*! exports provided: userCollection, subscribeUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCollection", function() { return userCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeUser", function() { return subscribeUser; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");

const userCollection = (conn) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_usr", () => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getUser"])(conn), undefined);
const subscribeUser = (conn, onChange) => userCollection(conn).subscribe(onChange);


/***/ }),

/***/ "./src/entrypoints/core.ts":
/*!*********************************!*\
  !*** ./src/entrypoints/core.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/auth/token_storage */ "./src/common/auth/token_storage.ts");
/* harmony import */ var _data_ws_panels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ws-panels */ "./src/data/ws-panels.ts");
/* harmony import */ var _data_ws_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/ws-themes */ "./src/data/ws-themes.ts");
/* harmony import */ var _data_ws_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/ws-user */ "./src/data/ws-user.ts");
/* harmony import */ var _data_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/auth */ "./src/data/auth.ts");
/* harmony import */ var _data_lovelace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/lovelace */ "./src/data/lovelace.ts");







const isExternal = location.search.includes("external_auth=1");
const authProm = isExternal
    ? () => __webpack_require__.e(/*! import() | external_auth */ "external_auth").then(__webpack_require__.bind(null, /*! ../external_app/external_auth */ "./src/external_app/external_auth.ts")).then(({ createExternalAuth }) => createExternalAuth(_data_auth__WEBPACK_IMPORTED_MODULE_5__["hassUrl"]))
    : () => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getAuth"])({
        hassUrl: _data_auth__WEBPACK_IMPORTED_MODULE_5__["hassUrl"],
        saveTokens: _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__["saveTokens"],
        loadTokens: () => Promise.resolve(Object(_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__["loadTokens"])()),
    });
const connProm = async (auth) => {
    try {
        const conn = await Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createConnection"])({ auth });
        // Clear url if we have been able to establish a connection
        if (location.search.includes("auth_callback=1")) {
            history.replaceState(null, "", location.pathname);
        }
        return { auth, conn };
    }
    catch (err) {
        if (err !== home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["ERR_INVALID_AUTH"]) {
            throw err;
        }
        // We can get invalid auth if auth tokens were stored that are no longer valid
        // Clear stored tokens.
        if (!isExternal) {
            Object(_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__["saveTokens"])(null);
        }
        auth = await authProm();
        const conn = await Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createConnection"])({ auth });
        return { auth, conn };
    }
};
if (true) {
    performance.mark("hass-start");
}
window.hassConnection = authProm().then(connProm);
// Start fetching some of the data that we will need.
window.hassConnection.then(({ conn }) => {
    const noop = () => {
        // do nothing
    };
    Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["subscribeEntities"])(conn, noop);
    Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["subscribeConfig"])(conn, noop);
    Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["subscribeServices"])(conn, noop);
    Object(_data_ws_panels__WEBPACK_IMPORTED_MODULE_2__["subscribePanels"])(conn, noop);
    Object(_data_ws_themes__WEBPACK_IMPORTED_MODULE_3__["subscribeThemes"])(conn, noop);
    Object(_data_ws_user__WEBPACK_IMPORTED_MODULE_4__["subscribeUser"])(conn, noop);
    if (location.pathname === "/" || location.pathname.startsWith("/lovelace/")) {
        window.llConfProm = Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_6__["fetchConfig"])(conn, false);
    }
});
window.addEventListener("error", (e) => {
    const homeAssistant = document.querySelector("home-assistant");
    if (homeAssistant &&
        homeAssistant.hass &&
        homeAssistant.hass.callService) {
        homeAssistant.hass.callService("system_log", "write", {
            logger: `frontend.${ true ? "js_dev" : undefined}.${"latest"}.${"20191002.0".replace(".", "")}`,
            message: `${e.filename}:${e.lineno}:${e.colno} ${e.message}`,
        });
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0L2Rpc3QvaGF3cy5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2F1dGgvdG9rZW5fc3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2xvdmVsYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3dzLXBhbmVscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS93cy10aGVtZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvd3MtdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cnlwb2ludHMvY29yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImNvcmVcIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcImV4dGVybmFsX2F1dGhcIjpcImV4dGVybmFsX2F1dGhcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuY2h1bmsuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Zyb250ZW5kX2xhdGVzdC9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gc2VsZltcIndlYnBhY2tKc29ucFwiXSA9IHNlbGZbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeXBvaW50cy9jb3JlLnRzXCIpO1xuIiwiZnVuY3Rpb24gZShlLHQpe3RyeXt2YXIgbj1lKCl9Y2F0Y2goZSl7cmV0dXJuIHQoZSl9cmV0dXJuIG4mJm4udGhlbj9uLnRoZW4odm9pZCAwLHQpOm59XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmKFN5bWJvbC5pdGVyYXRvcnx8KFN5bWJvbC5pdGVyYXRvcj1TeW1ib2woXCJTeW1ib2wuaXRlcmF0b3JcIikpKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiYoU3ltYm9sLmFzeW5jSXRlcmF0b3J8fChTeW1ib2wuYXN5bmNJdGVyYXRvcj1TeW1ib2woXCJTeW1ib2wuYXN5bmNJdGVyYXRvclwiKSkpO3ZhciB0PTEsbj0yLHI9MyxvPTQscz01O2Z1bmN0aW9uIGkoZSl7cmV0dXJue3R5cGU6XCJ1bnN1YnNjcmliZV9ldmVudHNcIixzdWJzY3JpcHRpb246ZX19dmFyIGM9ZnVuY3Rpb24oZSx0KXt0aGlzLm9wdGlvbnM9dCx0aGlzLmNvbW1hbmRJZD0xLHRoaXMuY29tbWFuZHM9bmV3IE1hcCx0aGlzLmV2ZW50TGlzdGVuZXJzPW5ldyBNYXAsdGhpcy5jbG9zZVJlcXVlc3RlZD0hMSx0aGlzLnNldFNvY2tldChlKX07Yy5wcm90b3R5cGUuc2V0U29ja2V0PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbj10aGlzLnNvY2tldDtpZih0aGlzLnNvY2tldD1lLGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixmdW5jdGlvbihlKXtyZXR1cm4gdC5faGFuZGxlTWVzc2FnZShlKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsZnVuY3Rpb24oZSl7cmV0dXJuIHQuX2hhbmRsZUNsb3NlKGUpfSksbil7dmFyIHI9dGhpcy5jb21tYW5kczt0aGlzLmNvbW1hbmRJZD0xLHRoaXMuY29tbWFuZHM9bmV3IE1hcCxyLmZvckVhY2goZnVuY3Rpb24oZSl7XCJzdWJzY3JpYmVcImluIGUmJmUuc3Vic2NyaWJlKCkudGhlbihmdW5jdGlvbih0KXtlLnVuc3Vic2NyaWJlPXQsZS5yZXNvbHZlKCl9KX0pLHRoaXMuZmlyZUV2ZW50KFwicmVhZHlcIil9fSxjLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5ldmVudExpc3RlbmVycy5nZXQoZSk7bnx8dGhpcy5ldmVudExpc3RlbmVycy5zZXQoZSxuPVtdKSxuLnB1c2godCl9LGMucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmV2ZW50TGlzdGVuZXJzLmdldChlKTtpZihuKXt2YXIgcj1uLmluZGV4T2YodCk7LTEhPT1yJiZuLnNwbGljZShyLDEpfX0sYy5wcm90b3R5cGUuZmlyZUV2ZW50PWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpczsodGhpcy5ldmVudExpc3RlbmVycy5nZXQoZSl8fFtdKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBlKG4sdCl9KX0sYy5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLmNsb3NlUmVxdWVzdGVkPSEwLHRoaXMuc29ja2V0LmNsb3NlKCl9LGMucHJvdG90eXBlLnN1YnNjcmliZUV2ZW50cz1mdW5jdGlvbihlLHQpe3RyeXtyZXR1cm4gdGhpcy5zdWJzY3JpYmVNZXNzYWdlKGUsZnVuY3Rpb24oZSl7dmFyIHQ9e3R5cGU6XCJzdWJzY3JpYmVfZXZlbnRzXCJ9O3JldHVybiBlJiYodC5ldmVudF90eXBlPWUpLHR9KHQpKX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fSxjLnByb3RvdHlwZS5waW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2VuZE1lc3NhZ2VQcm9taXNlKHt0eXBlOlwicGluZ1wifSl9LGMucHJvdG90eXBlLnNlbmRNZXNzYWdlPWZ1bmN0aW9uKGUsdCl7dHx8KHQ9dGhpcy5fZ2VuQ21kSWQoKSksZS5pZD10LHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoZSkpfSxjLnByb3RvdHlwZS5zZW5kTWVzc2FnZVByb21pc2U9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24obixyKXt2YXIgbz10Ll9nZW5DbWRJZCgpO3QuY29tbWFuZHMuc2V0KG8se3Jlc29sdmU6bixyZWplY3Q6cn0pLHQuc2VuZE1lc3NhZ2UoZSxvKX0pfSxjLnByb3RvdHlwZS5zdWJzY3JpYmVNZXNzYWdlPWZ1bmN0aW9uKGUsdCl7dHJ5e3ZhciBuLHI9dGhpcyxvPXIuX2dlbkNtZElkKCk7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgUHJvbWlzZShmdW5jdGlvbihzLGMpe249e3Jlc29sdmU6cyxyZWplY3Q6YyxjYWxsYmFjazplLHN1YnNjcmliZTpmdW5jdGlvbigpe3JldHVybiByLnN1YnNjcmliZU1lc3NhZ2UoZSx0KX0sdW5zdWJzY3JpYmU6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShyLnNlbmRNZXNzYWdlUHJvbWlzZShpKG8pKSkudGhlbihmdW5jdGlvbigpe3IuY29tbWFuZHMuZGVsZXRlKG8pfSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX19LHIuY29tbWFuZHMuc2V0KG8sbik7dHJ5e3Iuc2VuZE1lc3NhZ2UodCxvKX1jYXRjaChlKXt9fSkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbi51bnN1YnNjcmliZSgpfX0pfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19LGMucHJvdG90eXBlLl9oYW5kbGVNZXNzYWdlPWZ1bmN0aW9uKGUpe3ZhciB0PUpTT04ucGFyc2UoZS5kYXRhKSxuPXRoaXMuY29tbWFuZHMuZ2V0KHQuaWQpO3N3aXRjaCh0LnR5cGUpe2Nhc2VcImV2ZW50XCI6bj9uLmNhbGxiYWNrKHQuZXZlbnQpOihjb25zb2xlLndhcm4oXCJSZWNlaXZlZCBldmVudCBmb3IgdW5rbm93biBzdWJzY3JpcHRpb24gXCIrdC5pZCtcIi4gVW5zdWJzY3JpYmluZy5cIiksdGhpcy5zZW5kTWVzc2FnZVByb21pc2UoaSh0LmlkKSkpO2JyZWFrO2Nhc2VcInJlc3VsdFwiOm4mJih0LnN1Y2Nlc3M/KG4ucmVzb2x2ZSh0LnJlc3VsdCksXCJzdWJzY3JpYmVcImluIG58fHRoaXMuY29tbWFuZHMuZGVsZXRlKHQuaWQpKToobi5yZWplY3QodC5lcnJvciksdGhpcy5jb21tYW5kcy5kZWxldGUodC5pZCkpKTticmVhaztjYXNlXCJwb25nXCI6bj8obi5yZXNvbHZlKCksdGhpcy5jb21tYW5kcy5kZWxldGUodC5pZCkpOmNvbnNvbGUud2FybihcIlJlY2VpdmVkIHVua25vd24gcG9uZyByZXNwb25zZSBcIit0LmlkKX19LGMucHJvdG90eXBlLl9oYW5kbGVDbG9zZT1mdW5jdGlvbih0KXt2YXIgbj10aGlzO2lmKHRoaXMuY29tbWFuZHMuZm9yRWFjaChmdW5jdGlvbihlKXtcInN1YnNjcmliZVwiaW4gZXx8ZS5yZWplY3Qoe3R5cGU6XCJyZXN1bHRcIixzdWNjZXNzOiExLGVycm9yOntjb2RlOjMsbWVzc2FnZTpcIkNvbm5lY3Rpb24gbG9zdFwifX0pfSksIXRoaXMuY2xvc2VSZXF1ZXN0ZWQpe3RoaXMuZmlyZUV2ZW50KFwiZGlzY29ubmVjdGVkXCIpO3ZhciByPU9iamVjdC5hc3NpZ24oe30sdGhpcy5vcHRpb25zLHtzZXR1cFJldHJ5OjB9KSxvPWZ1bmN0aW9uKHQpe3ZhciBzPW47c2V0VGltZW91dChmdW5jdGlvbigpe3RyeXt2YXIgbj1lKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShyLmNyZWF0ZVNvY2tldChyKSkudGhlbihmdW5jdGlvbihlKXtzLnNldFNvY2tldChlKX0pfSxmdW5jdGlvbihlKXsyPT09ZT9zLmZpcmVFdmVudChcInJlY29ubmVjdC1lcnJvclwiLGUpOm8odCsxKX0pO3JldHVybiBQcm9taXNlLnJlc29sdmUobiYmbi50aGVuP24udGhlbihmdW5jdGlvbigpe30pOnZvaWQgMCl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0sMWUzKk1hdGgubWluKHQsNSkpfTtvKDApfX0sYy5wcm90b3R5cGUuX2dlbkNtZElkPWZ1bmN0aW9uKCl7cmV0dXJuKyt0aGlzLmNvbW1hbmRJZH07dmFyIHU9ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9e30pO3RyeXtmdW5jdGlvbiB0KCl7ZnVuY3Rpb24gdCgpe2Z1bmN0aW9uIHQoKXtpZihuKXJldHVybiBuZXcgdihuLGUuc2F2ZVRva2Vucyk7aWYodm9pZCAwPT09cil0aHJvdyBvO3JldHVybiBmdW5jdGlvbihlLHQsbixyKXtuKz0obi5pbmNsdWRlcyhcIj9cIik/XCImXCI6XCI/XCIpK1wiYXV0aF9jYWxsYmFjaz0xXCIsZG9jdW1lbnQubG9jYXRpb24uaHJlZj1mdW5jdGlvbihlLHQsbixyKXt2YXIgbz1lK1wiL2F1dGgvYXV0aG9yaXplP3Jlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG4pO3JldHVybiBudWxsIT09dCYmKG8rPVwiJmNsaWVudF9pZD1cIitlbmNvZGVVUklDb21wb25lbnQodCkpLHImJihvKz1cIiZzdGF0ZT1cIitlbmNvZGVVUklDb21wb25lbnQocikpLG99KGUsdCxuLHIpfShyLHMsZS5yZWRpcmVjdFVybHx8bG9jYXRpb24ucHJvdG9jb2wrXCIvL1wiK2xvY2F0aW9uLmhvc3QrbG9jYXRpb24ucGF0aG5hbWUrbG9jYXRpb24uc2VhcmNoLGJ0b2EoSlNPTi5zdHJpbmdpZnkoe2hhc3NVcmw6cixjbGllbnRJZDpzfSkpKSxuZXcgUHJvbWlzZShmdW5jdGlvbigpe30pfXZhciBpPWZ1bmN0aW9uKCl7aWYoIW4mJmUubG9hZFRva2VucylyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUubG9hZFRva2VucygpKS50aGVuKGZ1bmN0aW9uKGUpe249ZX0pfSgpO3JldHVybiBpJiZpLnRoZW4/aS50aGVuKHQpOnQoKX12YXIgaT1mdW5jdGlvbigpe2lmKCFuKXt2YXIgdD1mdW5jdGlvbihlKXtmb3IodmFyIHQ9e30sbj1sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpLnNwbGl0KFwiJlwiKSxyPTA7cjxuLmxlbmd0aDtyKyspe3ZhciBvPW5bcl0uc3BsaXQoXCI9XCIpLHM9ZGVjb2RlVVJJQ29tcG9uZW50KG9bMF0pLGk9by5sZW5ndGg+MT9kZWNvZGVVUklDb21wb25lbnQob1sxXSk6dm9pZCAwO3Rbc109aX1yZXR1cm4gdH0oKSxyPWZ1bmN0aW9uKCl7aWYoXCJhdXRoX2NhbGxiYWNrXCJpbiB0KXt2YXIgcj1KU09OLnBhcnNlKGF0b2IodC5zdGF0ZSkpO3JldHVybiBQcm9taXNlLnJlc29sdmUoaChyLmhhc3NVcmwsci5jbGllbnRJZCx0LmNvZGUpKS50aGVuKGZ1bmN0aW9uKHQpe249dCxlLnNhdmVUb2tlbnMmJmUuc2F2ZVRva2VucyhuKX0pfX0oKTtpZihyJiZyLnRoZW4pcmV0dXJuIHIudGhlbihmdW5jdGlvbigpe30pfX0oKTtyZXR1cm4gaSYmaS50aGVuP2kudGhlbih0KTp0KCl9dmFyIG4scj1lLmhhc3NVcmw7ciYmXCIvXCI9PT1yW3IubGVuZ3RoLTFdJiYocj1yLnN1YnN0cigwLHIubGVuZ3RoLTEpKTt2YXIgcz12b2lkIDAhPT1lLmNsaWVudElkP2UuY2xpZW50SWQ6ZigpLGk9ZnVuY3Rpb24oKXtpZighbiYmZS5hdXRoQ29kZSYmcilyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGgocixzLGUuYXV0aENvZGUpKS50aGVuKGZ1bmN0aW9uKHQpe249dCxlLnNhdmVUb2tlbnMmJmUuc2F2ZVRva2VucyhuKX0pfSgpO3JldHVybiBQcm9taXNlLnJlc29sdmUoaSYmaS50aGVuP2kudGhlbih0KTp0KCkpfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19LGE9ZnVuY3Rpb24oZSx0LG4pe3RyeXt2YXIgcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgbG9jYXRpb24mJmxvY2F0aW9uO2lmKHImJlwiaHR0cHM6XCI9PT1yLnByb3RvY29sKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpZihvLmhyZWY9ZSxcImh0dHA6XCI9PT1vLnByb3RvY29sJiZcImxvY2FsaG9zdFwiIT09by5ob3N0bmFtZSl0aHJvdyA1fXZhciBzPW5ldyBGb3JtRGF0YTtyZXR1cm4gbnVsbCE9PXQmJnMuYXBwZW5kKFwiY2xpZW50X2lkXCIsdCksT2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbihlKXtzLmFwcGVuZChlLG5bZV0pfSksUHJvbWlzZS5yZXNvbHZlKGZldGNoKGUrXCIvYXV0aC90b2tlblwiLHttZXRob2Q6XCJQT1NUXCIsY3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwiLGJvZHk6c30pKS50aGVuKGZ1bmN0aW9uKG4pe2lmKCFuLm9rKXRocm93IDQwMD09PW4uc3RhdHVzfHw0MDM9PT1uLnN0YXR1cz8yOm5ldyBFcnJvcihcIlVuYWJsZSB0byBmZXRjaCB0b2tlbnNcIik7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuLmpzb24oKSkudGhlbihmdW5jdGlvbihuKXtyZXR1cm4gbi5oYXNzVXJsPWUsbi5jbGllbnRJZD10LG4uZXhwaXJlcz1kKG4uZXhwaXJlc19pbiksbn0pfSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0sZj1mdW5jdGlvbigpe3JldHVybiBsb2NhdGlvbi5wcm90b2NvbCtcIi8vXCIrbG9jYXRpb24uaG9zdCtcIi9cIn0sZD1mdW5jdGlvbihlKXtyZXR1cm4gMWUzKmUrRGF0ZS5ub3coKX07ZnVuY3Rpb24gaChlLHQsbil7cmV0dXJuIGEoZSx0LHtjb2RlOm4sZ3JhbnRfdHlwZTpcImF1dGhvcml6YXRpb25fY29kZVwifSl9dmFyIHY9ZnVuY3Rpb24oZSx0KXt0aGlzLmRhdGE9ZSx0aGlzLl9zYXZlVG9rZW5zPXR9LGw9e3dzVXJsOntjb25maWd1cmFibGU6ITB9LGFjY2Vzc1Rva2VuOntjb25maWd1cmFibGU6ITB9LGV4cGlyZWQ6e2NvbmZpZ3VyYWJsZTohMH19O2wud3NVcmwuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuXCJ3c1wiK3RoaXMuZGF0YS5oYXNzVXJsLnN1YnN0cig0KStcIi9hcGkvd2Vic29ja2V0XCJ9LGwuYWNjZXNzVG9rZW4uZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YS5hY2Nlc3NfdG9rZW59LGwuZXhwaXJlZC5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gRGF0ZS5ub3coKT50aGlzLmRhdGEuZXhwaXJlc30sdi5wcm90b3R5cGUucmVmcmVzaEFjY2Vzc1Rva2VuPWZ1bmN0aW9uKCl7dHJ5e3ZhciBlPXRoaXM7cmV0dXJuIFByb21pc2UucmVzb2x2ZShhKGUuZGF0YS5oYXNzVXJsLGUuZGF0YS5jbGllbnRJZCx7Z3JhbnRfdHlwZTpcInJlZnJlc2hfdG9rZW5cIixyZWZyZXNoX3Rva2VuOmUuZGF0YS5yZWZyZXNoX3Rva2VufSkpLnRoZW4oZnVuY3Rpb24odCl7dC5yZWZyZXNoX3Rva2VuPWUuZGF0YS5yZWZyZXNoX3Rva2VuLGUuZGF0YT10LGUuX3NhdmVUb2tlbnMmJmUuX3NhdmVUb2tlbnModCl9KX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fSx2LnByb3RvdHlwZS5yZXZva2U9ZnVuY3Rpb24oKXt0cnl7dmFyIGU9dGhpcyx0PW5ldyBGb3JtRGF0YTtyZXR1cm4gdC5hcHBlbmQoXCJhY3Rpb25cIixcInJldm9rZVwiKSx0LmFwcGVuZChcInRva2VuXCIsZS5kYXRhLnJlZnJlc2hfdG9rZW4pLFByb21pc2UucmVzb2x2ZShmZXRjaChlLmRhdGEuaGFzc1VybCtcIi9hdXRoL3Rva2VuXCIse21ldGhvZDpcIlBPU1RcIixjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCIsYm9keTp0fSkpLnRoZW4oZnVuY3Rpb24oKXtlLl9zYXZlVG9rZW5zJiZlLl9zYXZlVG9rZW5zKG51bGwpfSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0sT2JqZWN0LmRlZmluZVByb3BlcnRpZXModi5wcm90b3R5cGUsbCk7dmFyIG09ZnVuY3Rpb24oZSx0LG4scil7aWYoZVt0XSlyZXR1cm4gZVt0XTt2YXIgbyxzPTAsaT1mdW5jdGlvbihlKXt2YXIgdD1bXTtmdW5jdGlvbiBuKG4scil7ZT1yP246T2JqZWN0LmFzc2lnbih7fSxlLG4pO2Zvcih2YXIgbz10LHM9MDtzPG8ubGVuZ3RoO3MrKylvW3NdKGUpfXJldHVybntnZXQgc3RhdGUoKXtyZXR1cm4gZX0sYWN0aW9uOmZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoZSl7bihlLCExKX1yZXR1cm4gZnVuY3Rpb24oKXtmb3IodmFyIG49YXJndW1lbnRzLG89W2VdLHM9MDtzPGFyZ3VtZW50cy5sZW5ndGg7cysrKW8ucHVzaChuW3NdKTt2YXIgaT10LmFwcGx5KHRoaXMsbyk7aWYobnVsbCE9aSlyZXR1cm4gaS50aGVuP2kudGhlbihyKTpyKGkpfX0sc2V0U3RhdGU6bixzdWJzY3JpYmU6ZnVuY3Rpb24oZSl7cmV0dXJuIHQucHVzaChlKSxmdW5jdGlvbigpeyFmdW5jdGlvbihlKXtmb3IodmFyIG49W10scj0wO3I8dC5sZW5ndGg7cisrKXRbcl09PT1lP2U9bnVsbDpuLnB1c2godFtyXSk7dD1ufShlKX19fX0oKSxjPWZ1bmN0aW9uKCl7cmV0dXJuIG4oZSkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gaS5zZXRTdGF0ZShlLCEwKX0pfSx1PWZ1bmN0aW9uKCl7cmV0dXJuIGMoKS5jYXRjaChmdW5jdGlvbih0KXtpZihlLnNvY2tldC5yZWFkeVN0YXRlPT1lLnNvY2tldC5PUEVOKXRocm93IHR9KX07cmV0dXJuIGVbdF09e2dldCBzdGF0ZSgpe3JldHVybiBpLnN0YXRlfSxyZWZyZXNoOmMsc3Vic2NyaWJlOmZ1bmN0aW9uKHQpezE9PSsrcyYmKHImJihvPXIoZSxpKSksZS5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIix1KSx1KCkpO3ZhciBuPWkuc3Vic2NyaWJlKHQpO3JldHVybiB2b2lkIDAhPT1pLnN0YXRlJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHQoaS5zdGF0ZSl9LDApLGZ1bmN0aW9uKCl7bigpLC0tc3x8KG8mJm8udGhlbihmdW5jdGlvbihlKXtlKCl9KSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLGMpKX19fSxlW3RdfSxwPWZ1bmN0aW9uKGUsdCxuLHIsbyl7cmV0dXJuIG0ocixlLHQsbikuc3Vic2NyaWJlKG8pfSxiPWZ1bmN0aW9uKGUpe3JldHVybiBlLnNlbmRNZXNzYWdlUHJvbWlzZSh7dHlwZTpcImdldF9zdGF0ZXNcIn0pfSx5PWZ1bmN0aW9uKGUpe3JldHVybiBlLnNlbmRNZXNzYWdlUHJvbWlzZSh7dHlwZTpcImdldF9zZXJ2aWNlc1wifSl9LGc9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2VuZE1lc3NhZ2VQcm9taXNlKHt0eXBlOlwiZ2V0X2NvbmZpZ1wifSl9LGs9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2VuZE1lc3NhZ2VQcm9taXNlKHt0eXBlOlwiYXV0aC9jdXJyZW50X3VzZXJcIn0pfSxfPWZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBlLnNlbmRNZXNzYWdlUHJvbWlzZShmdW5jdGlvbihlLHQsbil7dmFyIHI9e3R5cGU6XCJjYWxsX3NlcnZpY2VcIixkb21haW46ZSxzZXJ2aWNlOnR9O3JldHVybiBuJiYoci5zZXJ2aWNlX2RhdGE9bikscn0odCxuLHIpKX07ZnVuY3Rpb24gUChlLHQpe3JldHVybiB2b2lkIDA9PT1lP251bGw6e2NvbXBvbmVudHM6ZS5jb21wb25lbnRzLmNvbmNhdCh0LmRhdGEuY29tcG9uZW50KX19dmFyIEU9ZnVuY3Rpb24oZSl7cmV0dXJuIGcoZSl9LHc9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUHJvbWlzZS5hbGwoW2Uuc3Vic2NyaWJlRXZlbnRzKHQuYWN0aW9uKFApLFwiY29tcG9uZW50X2xvYWRlZFwiKSxlLnN1YnNjcmliZUV2ZW50cyhmdW5jdGlvbigpe3JldHVybiBFKGUpLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIHQuc2V0U3RhdGUoZSwhMCl9KX0sXCJjb3JlX2NvbmZpZ191cGRhdGVkXCIpXSkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBlKCl9KX19KX0sUz1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gbShlLFwiX2NuZlwiLEUsdyl9KGUpLnN1YnNjcmliZSh0KX07ZnVuY3Rpb24gaihlLHQpe3ZhciBuLHI7aWYodm9pZCAwPT09ZSlyZXR1cm4gbnVsbDt2YXIgbz10LmRhdGEscz1vLmRvbWFpbixpPU9iamVjdC5hc3NpZ24oe30sZVtzXSwoKG49e30pW28uc2VydmljZV09e2Rlc2NyaXB0aW9uOlwiXCIsZmllbGRzOnt9fSxuKSk7cmV0dXJuKHI9e30pW3NdPWkscn1mdW5jdGlvbiBUKGUsdCl7dmFyIG47aWYodm9pZCAwPT09ZSlyZXR1cm4gbnVsbDt2YXIgcj10LmRhdGEsbz1yLmRvbWFpbixzPXIuc2VydmljZSxpPWVbb107aWYoIShpJiZzIGluIGkpKXJldHVybiBudWxsO3ZhciBjPXt9O3JldHVybiBPYmplY3Qua2V5cyhpKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UhPT1zJiYoY1tlXT1pW2VdKX0pLChuPXt9KVtvXT1jLG59dmFyIEk9ZnVuY3Rpb24oZSl7cmV0dXJuIHkoZSl9LE09ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUHJvbWlzZS5hbGwoW2Uuc3Vic2NyaWJlRXZlbnRzKHQuYWN0aW9uKGopLFwic2VydmljZV9yZWdpc3RlcmVkXCIpLGUuc3Vic2NyaWJlRXZlbnRzKHQuYWN0aW9uKFQpLFwic2VydmljZV9yZW1vdmVkXCIpXSkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBlKCl9KX19KX0sTD1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gbShlLFwiX3NydlwiLEksTSl9KGUpLnN1YnNjcmliZSh0KX0sTz1mdW5jdGlvbihlKXt0cnl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShiKGUpKS50aGVuKGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD17fSxuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07dFtyLmVudGl0eV9pZF09cn1yZXR1cm4gdH0pfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19LFU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5zdWJzY3JpYmVFdmVudHMoZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQsbil7dmFyIHIsbz10LnN0YXRlO2lmKHZvaWQgMCE9PW8pe3ZhciBzPWUuZGF0YSxpPXMuZW50aXR5X2lkLGM9cy5uZXdfc3RhdGU7aWYoYyl0LnNldFN0YXRlKCgocj17fSlbYy5lbnRpdHlfaWRdPWMscikpO2Vsc2V7dmFyIHU9T2JqZWN0LmFzc2lnbih7fSxvKTtkZWxldGUgdVtpXSx0LnNldFN0YXRlKHUsITApfX19KHQpfSxcInN0YXRlX2NoYW5nZWRcIil9LEM9ZnVuY3Rpb24oZSl7cmV0dXJuIG0oZSxcIl9lbnRcIixPLFUpfSxSPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIEMoZSkuc3Vic2NyaWJlKHQpfSx4PWZ1bmN0aW9uKGUpe3RyeXt2YXIgdD1PYmplY3QuYXNzaWduKHt9LE4sZSk7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0LmNyZWF0ZVNvY2tldCh0KSkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gbmV3IGMoZSx0KX0pfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19LE49e3NldHVwUmV0cnk6MCxjcmVhdGVTb2NrZXQ6ZnVuY3Rpb24odCl7aWYoIXQuYXV0aCl0aHJvdyBvO3ZhciBuPXQuYXV0aCxyPW4uZXhwaXJlZD9uLnJlZnJlc2hBY2Nlc3NUb2tlbigpLnRoZW4oZnVuY3Rpb24oKXtyPXZvaWQgMH0sZnVuY3Rpb24oKXtyPXZvaWQgMH0pOnZvaWQgMCxzPW4ud3NVcmw7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG8saSl7cmV0dXJuIGZ1bmN0aW9uIHQobyxpLGMpe3ZhciB1PW5ldyBXZWJTb2NrZXQocyksYT0hMSxmPWZ1bmN0aW9uKCl7aWYodS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xvc2VcIixmKSxhKWMoMik7ZWxzZSBpZigwIT09byl7dmFyIGU9LTE9PT1vPy0xOm8tMTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHQoZSxpLGMpfSwxZTMpfWVsc2UgYygxKX0sZD1mdW5jdGlvbih0KXt0cnl7dmFyIG89ZShmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt1LnNlbmQoSlNPTi5zdHJpbmdpZnkoe3R5cGU6XCJhdXRoXCIsYWNjZXNzX3Rva2VuOm4uYWNjZXNzVG9rZW59KSl9dmFyIHQ9ZnVuY3Rpb24oKXtpZihuLmV4cGlyZWQpcmV0dXJuIFByb21pc2UucmVzb2x2ZShyfHxuLnJlZnJlc2hBY2Nlc3NUb2tlbigpKS50aGVuKGZ1bmN0aW9uKCl7fSl9KCk7cmV0dXJuIHQmJnQudGhlbj90LnRoZW4oZSk6ZSgpfSxmdW5jdGlvbihlKXthPTI9PT1lLHUuY2xvc2UoKX0pO3JldHVybiBQcm9taXNlLnJlc29sdmUobyYmby50aGVuP28udGhlbihmdW5jdGlvbigpe30pOnZvaWQgMCl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0saD1mdW5jdGlvbihlKXt0cnl7c3dpdGNoKEpTT04ucGFyc2UoZS5kYXRhKS50eXBlKXtjYXNlXCJhdXRoX2ludmFsaWRcIjphPSEwLHUuY2xvc2UoKTticmVhaztjYXNlXCJhdXRoX29rXCI6dS5yZW1vdmVFdmVudExpc3RlbmVyKFwib3BlblwiLGQpLHUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixoKSx1LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGYpLHUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsZiksaSh1KX1yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX07dS5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLGQpLHUuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixoKSx1LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGYpLHUuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsZil9KHQuc2V0dXBSZXRyeSxvLGkpfSl9fTtleHBvcnR7eCBhcyBjcmVhdGVDb25uZWN0aW9uLHUgYXMgZ2V0QXV0aCxmIGFzIGdlbkNsaWVudElkLGQgYXMgZ2VuRXhwaXJlcyx2IGFzIEF1dGgsbSBhcyBnZXRDb2xsZWN0aW9uLHAgYXMgY3JlYXRlQ29sbGVjdGlvbixjIGFzIENvbm5lY3Rpb24sUyBhcyBzdWJzY3JpYmVDb25maWcsTCBhcyBzdWJzY3JpYmVTZXJ2aWNlcyxDIGFzIGVudGl0aWVzQ29sbCxSIGFzIHN1YnNjcmliZUVudGl0aWVzLHQgYXMgRVJSX0NBTk5PVF9DT05ORUNULG4gYXMgRVJSX0lOVkFMSURfQVVUSCxyIGFzIEVSUl9DT05ORUNUSU9OX0xPU1QsbyBhcyBFUlJfSEFTU19IT1NUX1JFUVVJUkVELHMgYXMgRVJSX0lOVkFMSURfSFRUUFNfVE9fSFRUUCxiIGFzIGdldFN0YXRlcyx5IGFzIGdldFNlcnZpY2VzLGcgYXMgZ2V0Q29uZmlnLGsgYXMgZ2V0VXNlcixfIGFzIGNhbGxTZXJ2aWNlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhhd3MuZXMuanMubWFwXG4iLCJpbXBvcnQgeyBBdXRoRGF0YSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuY29uc3Qgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UgfHwge307XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX190b2tlbkNhY2hlOiB7XG4gICAgICAvLyB1bmRlZmluZWQ6IHdlIGhhdmVuJ3QgbG9hZGVkIHlldFxuICAgICAgLy8gbnVsbDogbm9uZSBzdG9yZWRcbiAgICAgIHRva2Vucz86IEF1dGhEYXRhIHwgbnVsbDtcbiAgICAgIHdyaXRlRW5hYmxlZD86IGJvb2xlYW47XG4gICAgfTtcbiAgfVxufVxuXG4vLyBTbyB0aGF0IGNvcmUuanMgYW5kIG1haW4gYXBwIGhpdCBzYW1lIHNoYXJlZCBvYmplY3QuXG5sZXQgdG9rZW5DYWNoZSA9IHdpbmRvdy5fX3Rva2VuQ2FjaGU7XG5pZiAoIXRva2VuQ2FjaGUpIHtcbiAgdG9rZW5DYWNoZSA9IHdpbmRvdy5fX3Rva2VuQ2FjaGUgPSB7XG4gICAgdG9rZW5zOiB1bmRlZmluZWQsXG4gICAgd3JpdGVFbmFibGVkOiB1bmRlZmluZWQsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2tXcml0ZSgpIHtcbiAgcmV0dXJuIChcbiAgICB0b2tlbkNhY2hlLnRva2VucyAhPT0gdW5kZWZpbmVkICYmIHRva2VuQ2FjaGUud3JpdGVFbmFibGVkID09PSB1bmRlZmluZWRcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb2tlbnModG9rZW5zOiBBdXRoRGF0YSB8IG51bGwpIHtcbiAgdG9rZW5DYWNoZS50b2tlbnMgPSB0b2tlbnM7XG4gIGlmICh0b2tlbkNhY2hlLndyaXRlRW5hYmxlZCkge1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlLmhhc3NUb2tlbnMgPSBKU09OLnN0cmluZ2lmeSh0b2tlbnMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gd3JpdGUgZmFpbGVkLCBpZ25vcmUgaXQuIEhhcHBlbnMgaWYgc3RvcmFnZSBpcyBmdWxsIG9yIHByaXZhdGUgbW9kZS5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVdyaXRlKCkge1xuICB0b2tlbkNhY2hlLndyaXRlRW5hYmxlZCA9IHRydWU7XG4gIGlmICh0b2tlbkNhY2hlLnRva2Vucykge1xuICAgIHNhdmVUb2tlbnModG9rZW5DYWNoZS50b2tlbnMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVG9rZW5zKCkge1xuICBpZiAodG9rZW5DYWNoZS50b2tlbnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBEZWxldGUgdGhlIG9sZCB0b2tlbiBjYWNoZS5cbiAgICAgIGRlbGV0ZSBzdG9yYWdlLnRva2VucztcbiAgICAgIGNvbnN0IHRva2VucyA9IHN0b3JhZ2UuaGFzc1Rva2VucztcbiAgICAgIGlmICh0b2tlbnMpIHtcbiAgICAgICAgdG9rZW5DYWNoZS50b2tlbnMgPSBKU09OLnBhcnNlKHRva2Vucyk7XG4gICAgICAgIHRva2VuQ2FjaGUud3JpdGVFbmFibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRva2VuQ2FjaGUudG9rZW5zID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRva2VuQ2FjaGUudG9rZW5zID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRva2VuQ2FjaGUudG9rZW5zO1xufVxuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhQcm92aWRlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWRlbnRpYWwge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmVkUGF0aCB7XG4gIHBhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGhhc3NVcmwgPSBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH1gO1xuXG5leHBvcnQgY29uc3QgZ2V0U2lnbmVkUGF0aCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgcGF0aDogc3RyaW5nXG4pOiBQcm9taXNlPFNpZ25lZFBhdGg+ID0+IGhhc3MuY2FsbFdTKHsgdHlwZTogXCJhdXRoL3NpZ25fcGF0aFwiLCBwYXRoIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBdXRoUHJvdmlkZXJzID0gKCkgPT5cbiAgZmV0Y2goXCIvYXV0aC9wcm92aWRlcnNcIiwge1xuICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gIH0pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiwgZ2V0Q29sbGVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZUNvbmZpZyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB2aWV3czogTG92ZWxhY2VWaWV3Q29uZmlnW107XG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIHJlc291cmNlcz86IEFycmF5PHsgdHlwZTogXCJjc3NcIiB8IFwianNcIiB8IFwibW9kdWxlXCIgfCBcImh0bWxcIjsgdXJsOiBzdHJpbmcgfT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VWaWV3Q29uZmlnIHtcbiAgaW5kZXg/OiBudW1iZXI7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBiYWRnZXM/OiBzdHJpbmdbXTtcbiAgY2FyZHM/OiBMb3ZlbGFjZUNhcmRDb25maWdbXTtcbiAgcGF0aD86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgdGhlbWU/OiBzdHJpbmc7XG4gIHBhbmVsPzogYm9vbGVhbjtcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgdmlzaWJsZT86IGJvb2xlYW4gfCBTaG93Vmlld0NvbmZpZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dWaWV3Q29uZmlnIHtcbiAgdXNlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZUNhcmRDb25maWcge1xuICBpbmRleD86IG51bWJlcjtcbiAgdmlld19pbmRleD86IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9nZ2xlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcInRvZ2dsZVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxTZXJ2aWNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcImNhbGwtc2VydmljZVwiO1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIHNlcnZpY2VfZGF0YT86IHtcbiAgICBlbnRpdHlfaWQ/OiBzdHJpbmcgfCBbc3RyaW5nXTtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGVBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwibmF2aWdhdGVcIjtcbiAgbmF2aWdhdGlvbl9wYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcInVybFwiO1xuICB1cmxfcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vcmVJbmZvQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcIm1vcmUtaW5mb1wiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IHR5cGUgQWN0aW9uQ29uZmlnID1cbiAgfCBUb2dnbGVBY3Rpb25Db25maWdcbiAgfCBDYWxsU2VydmljZUFjdGlvbkNvbmZpZ1xuICB8IE5hdmlnYXRlQWN0aW9uQ29uZmlnXG4gIHwgVXJsQWN0aW9uQ29uZmlnXG4gIHwgTW9yZUluZm9BY3Rpb25Db25maWdcbiAgfCBOb0FjdGlvbkNvbmZpZztcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29uZmlnID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBmb3JjZTogYm9vbGVhblxuKTogUHJvbWlzZTxMb3ZlbGFjZUNvbmZpZz4gPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwibG92ZWxhY2UvY29uZmlnXCIsXG4gICAgZm9yY2UsXG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2F2ZUNvbmZpZyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgY29uZmlnOiBMb3ZlbGFjZUNvbmZpZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9jb25maWcvc2F2ZVwiLFxuICAgIGNvbmZpZyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVMb3ZlbGFjZVVwZGF0ZXMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoKSA9PiB2b2lkXG4pID0+IGNvbm4uc3Vic2NyaWJlRXZlbnRzKG9uQ2hhbmdlLCBcImxvdmVsYWNlX3VwZGF0ZWRcIik7XG5cbmV4cG9ydCBjb25zdCBnZXRMb3ZlbGFjZUNvbGxlY3Rpb24gPSAoY29ubjogQ29ubmVjdGlvbikgPT5cbiAgZ2V0Q29sbGVjdGlvbihcbiAgICBjb25uLFxuICAgIFwiX2xvdmVsYWNlXCIsXG4gICAgKGNvbm4yKSA9PiBmZXRjaENvbmZpZyhjb25uMiwgZmFsc2UpLFxuICAgIChfY29ubiwgc3RvcmUpID0+XG4gICAgICBzdWJzY3JpYmVMb3ZlbGFjZVVwZGF0ZXMoY29ubiwgKCkgPT5cbiAgICAgICAgZmV0Y2hDb25maWcoY29ubiwgZmFsc2UpLnRoZW4oKGNvbmZpZykgPT4gc3RvcmUuc2V0U3RhdGUoY29uZmlnLCB0cnVlKSlcbiAgICAgIClcbiAgKTtcblxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dXaXRoTG92ZWxhY2VQcm9tIGV4dGVuZHMgV2luZG93IHtcbiAgbGxDb25mUHJvbT86IFByb21pc2U8TG92ZWxhY2VDb25maWc+O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IFBhbmVscyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBmZXRjaFBhbmVscyA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJnZXRfcGFuZWxzXCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICAoKSA9PiBmZXRjaFBhbmVscyhjb25uKS50aGVuKChwYW5lbHMpID0+IHN0b3JlLnNldFN0YXRlKHBhbmVscywgdHJ1ZSkpLFxuICAgIFwicGFuZWxzX3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlUGFuZWxzID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKHBhbmVsczogUGFuZWxzKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248UGFuZWxzPihcbiAgICBcIl9wbmxcIixcbiAgICBmZXRjaFBhbmVscyxcbiAgICBzdWJzY3JpYmVVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbGxlY3Rpb24sIENvbm5lY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBUaGVtZXMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgZmV0Y2hUaGVtZXMgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiZnJvbnRlbmQvZ2V0X3RoZW1lc1wiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlVXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgKGV2ZW50KSA9PiBzdG9yZS5zZXRTdGF0ZShldmVudC5kYXRhLCB0cnVlKSxcbiAgICBcInRoZW1lc191cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZVRoZW1lcyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6ICh0aGVtZXM6IFRoZW1lcykgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPFRoZW1lcz4oXG4gICAgXCJfdGhtXCIsXG4gICAgZmV0Y2hUaGVtZXMsXG4gICAgc3Vic2NyaWJlVXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQge1xuICBnZXRVc2VyLFxuICBDb25uZWN0aW9uLFxuICBnZXRDb2xsZWN0aW9uLFxufSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgdXNlckNvbGxlY3Rpb24gPSAoY29ubjogQ29ubmVjdGlvbikgPT5cbiAgZ2V0Q29sbGVjdGlvbihcbiAgICBjb25uLFxuICAgIFwiX3VzclwiLFxuICAgICgpID0+IGdldFVzZXIoY29ubikgYXMgUHJvbWlzZTxDdXJyZW50VXNlcj4sXG4gICAgdW5kZWZpbmVkXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVVc2VyID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKHVzZXI6IEN1cnJlbnRVc2VyKSA9PiB2b2lkXG4pID0+IHVzZXJDb2xsZWN0aW9uKGNvbm4pLnN1YnNjcmliZShvbkNoYW5nZSk7XG4iLCJpbXBvcnQge1xuICBnZXRBdXRoLFxuICBjcmVhdGVDb25uZWN0aW9uLFxuICBzdWJzY3JpYmVDb25maWcsXG4gIHN1YnNjcmliZUVudGl0aWVzLFxuICBzdWJzY3JpYmVTZXJ2aWNlcyxcbiAgRVJSX0lOVkFMSURfQVVUSCxcbiAgQXV0aCxcbiAgQ29ubmVjdGlvbixcbn0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5pbXBvcnQgeyBsb2FkVG9rZW5zLCBzYXZlVG9rZW5zIH0gZnJvbSBcIi4uL2NvbW1vbi9hdXRoL3Rva2VuX3N0b3JhZ2VcIjtcbmltcG9ydCB7IHN1YnNjcmliZVBhbmVscyB9IGZyb20gXCIuLi9kYXRhL3dzLXBhbmVsc1wiO1xuaW1wb3J0IHsgc3Vic2NyaWJlVGhlbWVzIH0gZnJvbSBcIi4uL2RhdGEvd3MtdGhlbWVzXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVVc2VyIH0gZnJvbSBcIi4uL2RhdGEvd3MtdXNlclwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgaGFzc1VybCB9IGZyb20gXCIuLi9kYXRhL2F1dGhcIjtcbmltcG9ydCB7IGZldGNoQ29uZmlnLCBXaW5kb3dXaXRoTG92ZWxhY2VQcm9tIH0gZnJvbSBcIi4uL2RhdGEvbG92ZWxhY2VcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBoYXNzQ29ubmVjdGlvbjogUHJvbWlzZTx7IGF1dGg6IEF1dGg7IGNvbm46IENvbm5lY3Rpb24gfT47XG4gIH1cbn1cblxuY29uc3QgaXNFeHRlcm5hbCA9IGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcyhcImV4dGVybmFsX2F1dGg9MVwiKTtcblxuY29uc3QgYXV0aFByb20gPSBpc0V4dGVybmFsXG4gID8gKCkgPT5cbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImV4dGVybmFsX2F1dGhcIiAqLyBcIi4uL2V4dGVybmFsX2FwcC9leHRlcm5hbF9hdXRoXCIpLnRoZW4oXG4gICAgICAgICh7IGNyZWF0ZUV4dGVybmFsQXV0aCB9KSA9PiBjcmVhdGVFeHRlcm5hbEF1dGgoaGFzc1VybClcbiAgICAgIClcbiAgOiAoKSA9PlxuICAgICAgZ2V0QXV0aCh7XG4gICAgICAgIGhhc3NVcmwsXG4gICAgICAgIHNhdmVUb2tlbnMsXG4gICAgICAgIGxvYWRUb2tlbnM6ICgpID0+IFByb21pc2UucmVzb2x2ZShsb2FkVG9rZW5zKCkpLFxuICAgICAgfSk7XG5cbmNvbnN0IGNvbm5Qcm9tID0gYXN5bmMgKGF1dGgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb25uID0gYXdhaXQgY3JlYXRlQ29ubmVjdGlvbih7IGF1dGggfSk7XG5cbiAgICAvLyBDbGVhciB1cmwgaWYgd2UgaGF2ZSBiZWVuIGFibGUgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvblxuICAgIGlmIChsb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoXCJhdXRoX2NhbGxiYWNrPTFcIikpIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhdXRoLCBjb25uIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIgIT09IEVSUl9JTlZBTElEX0FVVEgpIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgLy8gV2UgY2FuIGdldCBpbnZhbGlkIGF1dGggaWYgYXV0aCB0b2tlbnMgd2VyZSBzdG9yZWQgdGhhdCBhcmUgbm8gbG9uZ2VyIHZhbGlkXG4gICAgLy8gQ2xlYXIgc3RvcmVkIHRva2Vucy5cbiAgICBpZiAoIWlzRXh0ZXJuYWwpIHtcbiAgICAgIHNhdmVUb2tlbnMobnVsbCk7XG4gICAgfVxuICAgIGF1dGggPSBhd2FpdCBhdXRoUHJvbSgpO1xuICAgIGNvbnN0IGNvbm4gPSBhd2FpdCBjcmVhdGVDb25uZWN0aW9uKHsgYXV0aCB9KTtcbiAgICByZXR1cm4geyBhdXRoLCBjb25uIH07XG4gIH1cbn07XG5cbmlmIChfX0RFVl9fKSB7XG4gIHBlcmZvcm1hbmNlLm1hcmsoXCJoYXNzLXN0YXJ0XCIpO1xufVxud2luZG93Lmhhc3NDb25uZWN0aW9uID0gYXV0aFByb20oKS50aGVuKGNvbm5Qcm9tKTtcblxuLy8gU3RhcnQgZmV0Y2hpbmcgc29tZSBvZiB0aGUgZGF0YSB0aGF0IHdlIHdpbGwgbmVlZC5cbndpbmRvdy5oYXNzQ29ubmVjdGlvbi50aGVuKCh7IGNvbm4gfSkgPT4ge1xuICBjb25zdCBub29wID0gKCkgPT4ge1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfTtcbiAgc3Vic2NyaWJlRW50aXRpZXMoY29ubiwgbm9vcCk7XG4gIHN1YnNjcmliZUNvbmZpZyhjb25uLCBub29wKTtcbiAgc3Vic2NyaWJlU2VydmljZXMoY29ubiwgbm9vcCk7XG4gIHN1YnNjcmliZVBhbmVscyhjb25uLCBub29wKTtcbiAgc3Vic2NyaWJlVGhlbWVzKGNvbm4sIG5vb3ApO1xuICBzdWJzY3JpYmVVc2VyKGNvbm4sIG5vb3ApO1xuXG4gIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIgfHwgbG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9sb3ZlbGFjZS9cIikpIHtcbiAgICAod2luZG93IGFzIFdpbmRvd1dpdGhMb3ZlbGFjZVByb20pLmxsQ29uZlByb20gPSBmZXRjaENvbmZpZyhjb25uLCBmYWxzZSk7XG4gIH1cbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChlKSA9PiB7XG4gIGNvbnN0IGhvbWVBc3Npc3RhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaG9tZS1hc3Npc3RhbnRcIikgYXMgYW55O1xuICBpZiAoXG4gICAgaG9tZUFzc2lzdGFudCAmJlxuICAgIGhvbWVBc3Npc3RhbnQuaGFzcyAmJlxuICAgIChob21lQXNzaXN0YW50Lmhhc3MgYXMgSG9tZUFzc2lzdGFudCkuY2FsbFNlcnZpY2VcbiAgKSB7XG4gICAgaG9tZUFzc2lzdGFudC5oYXNzLmNhbGxTZXJ2aWNlKFwic3lzdGVtX2xvZ1wiLCBcIndyaXRlXCIsIHtcbiAgICAgIGxvZ2dlcjogYGZyb250ZW5kLiR7XG4gICAgICAgIF9fREVWX18gPyBcImpzX2RldlwiIDogXCJqc1wiXG4gICAgICB9LiR7X19CVUlMRF9ffS4ke19fVkVSU0lPTl9fLnJlcGxhY2UoXCIuXCIsIFwiXCIpfWAsXG4gICAgICBtZXNzYWdlOiBgJHtlLmZpbGVuYW1lfToke2UubGluZW5vfToke2UuY29sbm99ICR7ZS5tZXNzYWdlfWAsXG4gICAgfSk7XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDck1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUtBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdFQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFLQTs7Ozs7Ozs7Ozs7OztBQ2hHQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBTUE7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBTUE7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFRQTs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9