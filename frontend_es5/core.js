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
/******/ 	__webpack_require__.p = "/frontend_es5/";
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
function e(e, t) {
  try {
    var n = e();
  } catch (e) {
    return t(e);
  }

  return n && n.then ? n.then(void 0, t) : n;
}

"undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
var t = 1,
    n = 2,
    r = 3,
    o = 4,
    s = 5;

function i(e) {
  return {
    type: "unsubscribe_events",
    subscription: e
  };
}

var c = function c(e, t) {
  this.options = t, this.commandId = 1, this.commands = new Map(), this.eventListeners = new Map(), this.closeRequested = !1, this.setSocket(e);
};

c.prototype.setSocket = function (e) {
  var t = this,
      n = this.socket;

  if (this.socket = e, e.addEventListener("message", function (e) {
    return t._handleMessage(e);
  }), e.addEventListener("close", function (e) {
    return t._handleClose(e);
  }), n) {
    var r = this.commands;
    this.commandId = 1, this.commands = new Map(), r.forEach(function (e) {
      "subscribe" in e && e.subscribe().then(function (t) {
        e.unsubscribe = t, e.resolve();
      });
    }), this.fireEvent("ready");
  }
}, c.prototype.addEventListener = function (e, t) {
  var n = this.eventListeners.get(e);
  n || this.eventListeners.set(e, n = []), n.push(t);
}, c.prototype.removeEventListener = function (e, t) {
  var n = this.eventListeners.get(e);

  if (n) {
    var r = n.indexOf(t);
    -1 !== r && n.splice(r, 1);
  }
}, c.prototype.fireEvent = function (e, t) {
  var n = this;
  (this.eventListeners.get(e) || []).forEach(function (e) {
    return e(n, t);
  });
}, c.prototype.close = function () {
  this.closeRequested = !0, this.socket.close();
}, c.prototype.subscribeEvents = function (e, t) {
  try {
    return this.subscribeMessage(e, function (e) {
      var t = {
        type: "subscribe_events"
      };
      return e && (t.event_type = e), t;
    }(t));
  } catch (e) {
    return Promise.reject(e);
  }
}, c.prototype.ping = function () {
  return this.sendMessagePromise({
    type: "ping"
  });
}, c.prototype.sendMessage = function (e, t) {
  t || (t = this._genCmdId()), e.id = t, this.socket.send(JSON.stringify(e));
}, c.prototype.sendMessagePromise = function (e) {
  var t = this;
  return new Promise(function (n, r) {
    var o = t._genCmdId();

    t.commands.set(o, {
      resolve: n,
      reject: r
    }), t.sendMessage(e, o);
  });
}, c.prototype.subscribeMessage = function (e, t) {
  try {
    var n,
        r = this,
        o = r._genCmdId();

    return Promise.resolve(new Promise(function (s, c) {
      n = {
        resolve: s,
        reject: c,
        callback: e,
        subscribe: function subscribe() {
          return r.subscribeMessage(e, t);
        },
        unsubscribe: function unsubscribe() {
          try {
            return Promise.resolve(r.sendMessagePromise(i(o))).then(function () {
              r.commands["delete"](o);
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }
      }, r.commands.set(o, n);

      try {
        r.sendMessage(t, o);
      } catch (e) {}
    })).then(function () {
      return function () {
        return n.unsubscribe();
      };
    });
  } catch (e) {
    return Promise.reject(e);
  }
}, c.prototype._handleMessage = function (e) {
  var t = JSON.parse(e.data),
      n = this.commands.get(t.id);

  switch (t.type) {
    case "event":
      n ? n.callback(t.event) : (console.warn("Received event for unknown subscription " + t.id + ". Unsubscribing."), this.sendMessagePromise(i(t.id)));
      break;

    case "result":
      n && (t.success ? (n.resolve(t.result), "subscribe" in n || this.commands["delete"](t.id)) : (n.reject(t.error), this.commands["delete"](t.id)));
      break;

    case "pong":
      n ? (n.resolve(), this.commands["delete"](t.id)) : console.warn("Received unknown pong response " + t.id);
  }
}, c.prototype._handleClose = function (t) {
  var n = this;

  if (this.commands.forEach(function (e) {
    "subscribe" in e || e.reject({
      type: "result",
      success: !1,
      error: {
        code: 3,
        message: "Connection lost"
      }
    });
  }), !this.closeRequested) {
    this.fireEvent("disconnected");

    var r = Object.assign({}, this.options, {
      setupRetry: 0
    }),
        o = function o(t) {
      var s = n;
      setTimeout(function () {
        try {
          var n = e(function () {
            return Promise.resolve(r.createSocket(r)).then(function (e) {
              s.setSocket(e);
            });
          }, function (e) {
            2 === e ? s.fireEvent("reconnect-error", e) : o(t + 1);
          });
          return Promise.resolve(n && n.then ? n.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      }, 1e3 * Math.min(t, 5));
    };

    o(0);
  }
}, c.prototype._genCmdId = function () {
  return ++this.commandId;
};

var u = function u(e) {
  void 0 === e && (e = {});

  try {
    var _t = function _t() {
      function t() {
        function t() {
          if (n) return new v(n, e.saveTokens);
          if (void 0 === r) throw o;
          return function (e, t, n, r) {
            n += (n.includes("?") ? "&" : "?") + "auth_callback=1", document.location.href = function (e, t, n, r) {
              var o = e + "/auth/authorize?response_type=code&redirect_uri=" + encodeURIComponent(n);
              return null !== t && (o += "&client_id=" + encodeURIComponent(t)), r && (o += "&state=" + encodeURIComponent(r)), o;
            }(e, t, n, r);
          }(r, s, e.redirectUrl || location.protocol + "//" + location.host + location.pathname + location.search, btoa(JSON.stringify({
            hassUrl: r,
            clientId: s
          }))), new Promise(function () {});
        }

        var i = function () {
          if (!n && e.loadTokens) return Promise.resolve(e.loadTokens()).then(function (e) {
            n = e;
          });
        }();

        return i && i.then ? i.then(t) : t();
      }

      var i = function () {
        if (!n) {
          var t = function (e) {
            for (var t = {}, n = location.search.substr(1).split("&"), r = 0; r < n.length; r++) {
              var o = n[r].split("="),
                  s = decodeURIComponent(o[0]),
                  i = o.length > 1 ? decodeURIComponent(o[1]) : void 0;
              t[s] = i;
            }

            return t;
          }(),
              r = function () {
            if ("auth_callback" in t) {
              var r = JSON.parse(atob(t.state));
              return Promise.resolve(h(r.hassUrl, r.clientId, t.code)).then(function (t) {
                n = t, e.saveTokens && e.saveTokens(n);
              });
            }
          }();

          if (r && r.then) return r.then(function () {});
        }
      }();

      return i && i.then ? i.then(t) : t();
    };

    var n,
        r = e.hassUrl;
    r && "/" === r[r.length - 1] && (r = r.substr(0, r.length - 1));

    var s = void 0 !== e.clientId ? e.clientId : f(),
        i = function () {
      if (!n && e.authCode && r) return Promise.resolve(h(r, s, e.authCode)).then(function (t) {
        n = t, e.saveTokens && e.saveTokens(n);
      });
    }();

    return Promise.resolve(i && i.then ? i.then(_t) : _t());
  } catch (e) {
    return Promise.reject(e);
  }
},
    a = function a(e, t, n) {
  try {
    var r = "undefined" != typeof location && location;

    if (r && "https:" === r.protocol) {
      var o = document.createElement("a");
      if (o.href = e, "http:" === o.protocol && "localhost" !== o.hostname) throw 5;
    }

    var s = new FormData();
    return null !== t && s.append("client_id", t), Object.keys(n).forEach(function (e) {
      s.append(e, n[e]);
    }), Promise.resolve(fetch(e + "/auth/token", {
      method: "POST",
      credentials: "same-origin",
      body: s
    })).then(function (n) {
      if (!n.ok) throw 400 === n.status || 403 === n.status ? 2 : new Error("Unable to fetch tokens");
      return Promise.resolve(n.json()).then(function (n) {
        return n.hassUrl = e, n.clientId = t, n.expires = d(n.expires_in), n;
      });
    });
  } catch (e) {
    return Promise.reject(e);
  }
},
    f = function f() {
  return location.protocol + "//" + location.host + "/";
},
    d = function d(e) {
  return 1e3 * e + Date.now();
};

function h(e, t, n) {
  return a(e, t, {
    code: n,
    grant_type: "authorization_code"
  });
}

var v = function v(e, t) {
  this.data = e, this._saveTokens = t;
},
    l = {
  wsUrl: {
    configurable: !0
  },
  accessToken: {
    configurable: !0
  },
  expired: {
    configurable: !0
  }
};

l.wsUrl.get = function () {
  return "ws" + this.data.hassUrl.substr(4) + "/api/websocket";
}, l.accessToken.get = function () {
  return this.data.access_token;
}, l.expired.get = function () {
  return Date.now() > this.data.expires;
}, v.prototype.refreshAccessToken = function () {
  try {
    var e = this;
    return Promise.resolve(a(e.data.hassUrl, e.data.clientId, {
      grant_type: "refresh_token",
      refresh_token: e.data.refresh_token
    })).then(function (t) {
      t.refresh_token = e.data.refresh_token, e.data = t, e._saveTokens && e._saveTokens(t);
    });
  } catch (e) {
    return Promise.reject(e);
  }
}, v.prototype.revoke = function () {
  try {
    var e = this,
        t = new FormData();
    return t.append("action", "revoke"), t.append("token", e.data.refresh_token), Promise.resolve(fetch(e.data.hassUrl + "/auth/token", {
      method: "POST",
      credentials: "same-origin",
      body: t
    })).then(function () {
      e._saveTokens && e._saveTokens(null);
    });
  } catch (e) {
    return Promise.reject(e);
  }
}, Object.defineProperties(v.prototype, l);

var m = function m(e, t, n, r) {
  if (e[t]) return e[t];

  var o,
      s = 0,
      i = function (e) {
    var t = [];

    function n(n, r) {
      e = r ? n : Object.assign({}, e, n);

      for (var o = t, s = 0; s < o.length; s++) {
        o[s](e);
      }
    }

    return {
      get state() {
        return e;
      },

      action: function action(t) {
        function r(e) {
          n(e, !1);
        }

        return function () {
          for (var n = arguments, o = [e], s = 0; s < arguments.length; s++) {
            o.push(n[s]);
          }

          var i = t.apply(this, o);
          if (null != i) return i.then ? i.then(r) : r(i);
        };
      },
      setState: n,
      subscribe: function subscribe(e) {
        return t.push(e), function () {
          !function (e) {
            for (var n = [], r = 0; r < t.length; r++) {
              t[r] === e ? e = null : n.push(t[r]);
            }

            t = n;
          }(e);
        };
      }
    };
  }(),
      c = function c() {
    return n(e).then(function (e) {
      return i.setState(e, !0);
    });
  },
      u = function u() {
    return c()["catch"](function (t) {
      if (e.socket.readyState == e.socket.OPEN) throw t;
    });
  };

  return e[t] = {
    get state() {
      return i.state;
    },

    refresh: c,
    subscribe: function subscribe(t) {
      1 == ++s && (r && (o = r(e, i)), e.addEventListener("ready", u), u());
      var n = i.subscribe(t);
      return void 0 !== i.state && setTimeout(function () {
        return t(i.state);
      }, 0), function () {
        n(), --s || (o && o.then(function (e) {
          e();
        }), e.removeEventListener("ready", c));
      };
    }
  }, e[t];
},
    p = function p(e, t, n, r, o) {
  return m(r, e, t, n).subscribe(o);
},
    b = function b(e) {
  return e.sendMessagePromise({
    type: "get_states"
  });
},
    y = function y(e) {
  return e.sendMessagePromise({
    type: "get_services"
  });
},
    g = function g(e) {
  return e.sendMessagePromise({
    type: "get_config"
  });
},
    k = function k(e) {
  return e.sendMessagePromise({
    type: "auth/current_user"
  });
},
    _ = function _(e, t, n, r) {
  return e.sendMessagePromise(function (e, t, n) {
    var r = {
      type: "call_service",
      domain: e,
      service: t
    };
    return n && (r.service_data = n), r;
  }(t, n, r));
};

function P(e, t) {
  return void 0 === e ? null : {
    components: e.components.concat(t.data.component)
  };
}

var E = function E(e) {
  return g(e);
},
    w = function w(e, t) {
  return Promise.all([e.subscribeEvents(t.action(P), "component_loaded"), e.subscribeEvents(function () {
    return E(e).then(function (e) {
      return t.setState(e, !0);
    });
  }, "core_config_updated")]).then(function (e) {
    return function () {
      return e.forEach(function (e) {
        return e();
      });
    };
  });
},
    S = function S(e, t) {
  return function (e) {
    return m(e, "_cnf", E, w);
  }(e).subscribe(t);
};

function j(e, t) {
  var n, r;
  if (void 0 === e) return null;
  var o = t.data,
      s = o.domain,
      i = Object.assign({}, e[s], ((n = {})[o.service] = {
    description: "",
    fields: {}
  }, n));
  return (r = {})[s] = i, r;
}

function T(e, t) {
  var n;
  if (void 0 === e) return null;
  var r = t.data,
      o = r.domain,
      s = r.service,
      i = e[o];
  if (!(i && s in i)) return null;
  var c = {};
  return Object.keys(i).forEach(function (e) {
    e !== s && (c[e] = i[e]);
  }), (n = {})[o] = c, n;
}

var I = function I(e) {
  return y(e);
},
    M = function M(e, t) {
  return Promise.all([e.subscribeEvents(t.action(j), "service_registered"), e.subscribeEvents(t.action(T), "service_removed")]).then(function (e) {
    return function () {
      return e.forEach(function (e) {
        return e();
      });
    };
  });
},
    L = function L(e, t) {
  return function (e) {
    return m(e, "_srv", I, M);
  }(e).subscribe(t);
},
    O = function O(e) {
  try {
    return Promise.resolve(b(e)).then(function (e) {
      for (var t = {}, n = 0; n < e.length; n++) {
        var r = e[n];
        t[r.entity_id] = r;
      }

      return t;
    });
  } catch (e) {
    return Promise.reject(e);
  }
},
    U = function U(e, t) {
  return e.subscribeEvents(function (e) {
    return function (t, n) {
      var r,
          o = t.state;

      if (void 0 !== o) {
        var s = e.data,
            i = s.entity_id,
            c = s.new_state;
        if (c) t.setState(((r = {})[c.entity_id] = c, r));else {
          var u = Object.assign({}, o);
          delete u[i], t.setState(u, !0);
        }
      }
    }(t);
  }, "state_changed");
},
    C = function C(e) {
  return m(e, "_ent", O, U);
},
    R = function R(e, t) {
  return C(e).subscribe(t);
},
    x = function x(e) {
  try {
    var t = Object.assign({}, N, e);
    return Promise.resolve(t.createSocket(t)).then(function (e) {
      return new c(e, t);
    });
  } catch (e) {
    return Promise.reject(e);
  }
},
    N = {
  setupRetry: 0,
  createSocket: function createSocket(t) {
    if (!t.auth) throw o;
    var n = t.auth,
        r = n.expired ? n.refreshAccessToken().then(function () {
      r = void 0;
    }, function () {
      r = void 0;
    }) : void 0,
        s = n.wsUrl;
    return new Promise(function (o, i) {
      return function t(o, i, c) {
        var u = new WebSocket(s),
            a = !1,
            f = function f() {
          if (u.removeEventListener("close", f), a) c(2);else if (0 !== o) {
            var e = -1 === o ? -1 : o - 1;
            setTimeout(function () {
              return t(e, i, c);
            }, 1e3);
          } else c(1);
        },
            d = function d(t) {
          try {
            var o = e(function () {
              function e() {
                u.send(JSON.stringify({
                  type: "auth",
                  access_token: n.accessToken
                }));
              }

              var t = function () {
                if (n.expired) return Promise.resolve(r || n.refreshAccessToken()).then(function () {});
              }();

              return t && t.then ? t.then(e) : e();
            }, function (e) {
              a = 2 === e, u.close();
            });
            return Promise.resolve(o && o.then ? o.then(function () {}) : void 0);
          } catch (e) {
            return Promise.reject(e);
          }
        },
            h = function h(e) {
          try {
            switch (JSON.parse(e.data).type) {
              case "auth_invalid":
                a = !0, u.close();
                break;

              case "auth_ok":
                u.removeEventListener("open", d), u.removeEventListener("message", h), u.removeEventListener("close", f), u.removeEventListener("error", f), i(u);
            }

            return Promise.resolve();
          } catch (e) {
            return Promise.reject(e);
          }
        };

        u.addEventListener("open", d), u.addEventListener("message", h), u.addEventListener("close", f), u.addEventListener("error", f);
      }(t.setupRetry, o, i);
    });
  }
};



/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return _assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};


function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __exportStar(m, exports) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}
;
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}
;
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
}

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
var storage = window.localStorage || {};
// So that core.js and main app hit same shared object.
var tokenCache = window.__tokenCache;
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
            var tokens = storage.hassTokens;
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
var hassUrl = location.protocol + "//" + location.host;
var getSignedPath = function (hass, path) { return hass.callWS({ type: "auth/sign_path", path: path }); };
var fetchAuthProviders = function () {
    return fetch("/auth/providers", {
        credentials: "same-origin",
    });
};


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

var fetchConfig = function (conn, force) {
    return conn.sendMessagePromise({
        type: "lovelace/config",
        force: force,
    });
};
var saveConfig = function (hass, config) {
    return hass.callWS({
        type: "lovelace/config/save",
        config: config,
    });
};
var subscribeLovelaceUpdates = function (conn, onChange) { return conn.subscribeEvents(onChange, "lovelace_updated"); };
var getLovelaceCollection = function (conn) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_lovelace", function (conn2) { return fetchConfig(conn2, false); }, function (_conn, store) {
        return subscribeLovelaceUpdates(conn, function () {
            return fetchConfig(conn, false).then(function (config) { return store.setState(config, true); });
        });
    });
};


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

var fetchPanels = function (conn) {
    return conn.sendMessagePromise({
        type: "get_panels",
    });
};
var subscribeUpdates = function (conn, store) {
    return conn.subscribeEvents(function () { return fetchPanels(conn).then(function (panels) { return store.setState(panels, true); }); }, "panels_updated");
};
var subscribePanels = function (conn, onChange) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_pnl", fetchPanels, subscribeUpdates, conn, onChange);
};


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

var fetchThemes = function (conn) {
    return conn.sendMessagePromise({
        type: "frontend/get_themes",
    });
};
var subscribeUpdates = function (conn, store) {
    return conn.subscribeEvents(function (event) { return store.setState(event.data, true); }, "themes_updated");
};
var subscribeThemes = function (conn, onChange) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_thm", fetchThemes, subscribeUpdates, conn, onChange);
};


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

var userCollection = function (conn) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_usr", function () { return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getUser"])(conn); }, undefined);
};
var subscribeUser = function (conn, onChange) { return userCollection(conn).subscribe(onChange); };


/***/ }),

/***/ "./src/entrypoints/core.ts":
/*!*********************************!*\
  !*** ./src/entrypoints/core.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth/token_storage */ "./src/common/auth/token_storage.ts");
/* harmony import */ var _data_ws_panels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/ws-panels */ "./src/data/ws-panels.ts");
/* harmony import */ var _data_ws_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/ws-themes */ "./src/data/ws-themes.ts");
/* harmony import */ var _data_ws_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/ws-user */ "./src/data/ws-user.ts");
/* harmony import */ var _data_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/auth */ "./src/data/auth.ts");
/* harmony import */ var _data_lovelace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/lovelace */ "./src/data/lovelace.ts");








var isExternal = location.search.includes("external_auth=1");
var authProm = isExternal
    ? function () {
        return __webpack_require__.e(/*! import() | external_auth */ "external_auth").then(__webpack_require__.bind(null, /*! ../external_app/external_auth */ "./src/external_app/external_auth.ts")).then(function (_a) {
            var createExternalAuth = _a.createExternalAuth;
            return createExternalAuth(_data_auth__WEBPACK_IMPORTED_MODULE_6__["hassUrl"]);
        });
    }
    : function () {
        return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["getAuth"])({
            hassUrl: _data_auth__WEBPACK_IMPORTED_MODULE_6__["hassUrl"],
            saveTokens: _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_2__["saveTokens"],
            loadTokens: function () { return Promise.resolve(Object(_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_2__["loadTokens"])()); },
        });
    };
var connProm = function (auth) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var conn, err_1, conn;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 5]);
                return [4 /*yield*/, Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["createConnection"])({ auth: auth })];
            case 1:
                conn = _a.sent();
                // Clear url if we have been able to establish a connection
                if (location.search.includes("auth_callback=1")) {
                    history.replaceState(null, "", location.pathname);
                }
                return [2 /*return*/, { auth: auth, conn: conn }];
            case 2:
                err_1 = _a.sent();
                if (err_1 !== home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["ERR_INVALID_AUTH"]) {
                    throw err_1;
                }
                // We can get invalid auth if auth tokens were stored that are no longer valid
                // Clear stored tokens.
                if (!isExternal) {
                    Object(_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_2__["saveTokens"])(null);
                }
                return [4 /*yield*/, authProm()];
            case 3:
                auth = _a.sent();
                return [4 /*yield*/, Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["createConnection"])({ auth: auth })];
            case 4:
                conn = _a.sent();
                return [2 /*return*/, { auth: auth, conn: conn }];
            case 5: return [2 /*return*/];
        }
    });
}); };
if (true) {
    performance.mark("hass-start");
}
window.hassConnection = authProm().then(connProm);
// Start fetching some of the data that we will need.
window.hassConnection.then(function (_a) {
    var conn = _a.conn;
    var noop = function () {
        // do nothing
    };
    Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["subscribeEntities"])(conn, noop);
    Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["subscribeConfig"])(conn, noop);
    Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["subscribeServices"])(conn, noop);
    Object(_data_ws_panels__WEBPACK_IMPORTED_MODULE_3__["subscribePanels"])(conn, noop);
    Object(_data_ws_themes__WEBPACK_IMPORTED_MODULE_4__["subscribeThemes"])(conn, noop);
    Object(_data_ws_user__WEBPACK_IMPORTED_MODULE_5__["subscribeUser"])(conn, noop);
    if (location.pathname === "/" || location.pathname.startsWith("/lovelace/")) {
        window.llConfProm = Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_7__["fetchConfig"])(conn, false);
    }
});
window.addEventListener("error", function (e) {
    var homeAssistant = document.querySelector("home-assistant");
    if (homeAssistant &&
        homeAssistant.hass &&
        homeAssistant.hass.callService) {
        homeAssistant.hass.callService("system_log", "write", {
            logger: "frontend." + ( true ? "js_dev" : undefined) + "." + "es5" + "." + "20191002.0".replace(".", ""),
            message: e.filename + ":" + e.lineno + ":" + e.colno + " " + e.message,
        });
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0L2Rpc3QvaGF3cy5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXV0aC90b2tlbl9zdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2F1dGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvbG92ZWxhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvd3MtcGFuZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3dzLXRoZW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS93cy11c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRyeXBvaW50cy9jb3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY29yZVwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wiZXh0ZXJuYWxfYXV0aFwiOlwiZXh0ZXJuYWxfYXV0aFwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5jaHVuay5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZnJvbnRlbmRfZXM1L1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSBzZWxmW1wid2VicGFja0pzb25wXCJdID0gc2VsZltcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5cG9pbnRzL2NvcmUudHNcIik7XG4iLCJmdW5jdGlvbiBlKGUsdCl7dHJ5e3ZhciBuPWUoKX1jYXRjaChlKXtyZXR1cm4gdChlKX1yZXR1cm4gbiYmbi50aGVuP24udGhlbih2b2lkIDAsdCk6bn1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiYoU3ltYm9sLml0ZXJhdG9yfHwoU3ltYm9sLml0ZXJhdG9yPVN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSkpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJihTeW1ib2wuYXN5bmNJdGVyYXRvcnx8KFN5bWJvbC5hc3luY0l0ZXJhdG9yPVN5bWJvbChcIlN5bWJvbC5hc3luY0l0ZXJhdG9yXCIpKSk7dmFyIHQ9MSxuPTIscj0zLG89NCxzPTU7ZnVuY3Rpb24gaShlKXtyZXR1cm57dHlwZTpcInVuc3Vic2NyaWJlX2V2ZW50c1wiLHN1YnNjcmlwdGlvbjplfX12YXIgYz1mdW5jdGlvbihlLHQpe3RoaXMub3B0aW9ucz10LHRoaXMuY29tbWFuZElkPTEsdGhpcy5jb21tYW5kcz1uZXcgTWFwLHRoaXMuZXZlbnRMaXN0ZW5lcnM9bmV3IE1hcCx0aGlzLmNsb3NlUmVxdWVzdGVkPSExLHRoaXMuc2V0U29ja2V0KGUpfTtjLnByb3RvdHlwZS5zZXRTb2NrZXQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxuPXRoaXMuc29ja2V0O2lmKHRoaXMuc29ja2V0PWUsZS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGZ1bmN0aW9uKGUpe3JldHVybiB0Ll9oYW5kbGVNZXNzYWdlKGUpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixmdW5jdGlvbihlKXtyZXR1cm4gdC5faGFuZGxlQ2xvc2UoZSl9KSxuKXt2YXIgcj10aGlzLmNvbW1hbmRzO3RoaXMuY29tbWFuZElkPTEsdGhpcy5jb21tYW5kcz1uZXcgTWFwLHIuZm9yRWFjaChmdW5jdGlvbihlKXtcInN1YnNjcmliZVwiaW4gZSYmZS5zdWJzY3JpYmUoKS50aGVuKGZ1bmN0aW9uKHQpe2UudW5zdWJzY3JpYmU9dCxlLnJlc29sdmUoKX0pfSksdGhpcy5maXJlRXZlbnQoXCJyZWFkeVwiKX19LGMucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmV2ZW50TGlzdGVuZXJzLmdldChlKTtufHx0aGlzLmV2ZW50TGlzdGVuZXJzLnNldChlLG49W10pLG4ucHVzaCh0KX0sYy5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuZXZlbnRMaXN0ZW5lcnMuZ2V0KGUpO2lmKG4pe3ZhciByPW4uaW5kZXhPZih0KTstMSE9PXImJm4uc3BsaWNlKHIsMSl9fSxjLnByb3RvdHlwZS5maXJlRXZlbnQ9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzOyh0aGlzLmV2ZW50TGlzdGVuZXJzLmdldChlKXx8W10pLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUobix0KX0pfSxjLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuY2xvc2VSZXF1ZXN0ZWQ9ITAsdGhpcy5zb2NrZXQuY2xvc2UoKX0sYy5wcm90b3R5cGUuc3Vic2NyaWJlRXZlbnRzPWZ1bmN0aW9uKGUsdCl7dHJ5e3JldHVybiB0aGlzLnN1YnNjcmliZU1lc3NhZ2UoZSxmdW5jdGlvbihlKXt2YXIgdD17dHlwZTpcInN1YnNjcmliZV9ldmVudHNcIn07cmV0dXJuIGUmJih0LmV2ZW50X3R5cGU9ZSksdH0odCkpfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19LGMucHJvdG90eXBlLnBpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZW5kTWVzc2FnZVByb21pc2Uoe3R5cGU6XCJwaW5nXCJ9KX0sYy5wcm90b3R5cGUuc2VuZE1lc3NhZ2U9ZnVuY3Rpb24oZSx0KXt0fHwodD10aGlzLl9nZW5DbWRJZCgpKSxlLmlkPXQsdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShlKSl9LGMucHJvdG90eXBlLnNlbmRNZXNzYWdlUHJvbWlzZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihuLHIpe3ZhciBvPXQuX2dlbkNtZElkKCk7dC5jb21tYW5kcy5zZXQobyx7cmVzb2x2ZTpuLHJlamVjdDpyfSksdC5zZW5kTWVzc2FnZShlLG8pfSl9LGMucHJvdG90eXBlLnN1YnNjcmliZU1lc3NhZ2U9ZnVuY3Rpb24oZSx0KXt0cnl7dmFyIG4scj10aGlzLG89ci5fZ2VuQ21kSWQoKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBQcm9taXNlKGZ1bmN0aW9uKHMsYyl7bj17cmVzb2x2ZTpzLHJlamVjdDpjLGNhbGxiYWNrOmUsc3Vic2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJuIHIuc3Vic2NyaWJlTWVzc2FnZShlLHQpfSx1bnN1YnNjcmliZTpmdW5jdGlvbigpe3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHIuc2VuZE1lc3NhZ2VQcm9taXNlKGkobykpKS50aGVuKGZ1bmN0aW9uKCl7ci5jb21tYW5kcy5kZWxldGUobyl9KX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fX0sci5jb21tYW5kcy5zZXQobyxuKTt0cnl7ci5zZW5kTWVzc2FnZSh0LG8pfWNhdGNoKGUpe319KSkudGhlbihmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBuLnVuc3Vic2NyaWJlKCl9fSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0sYy5wcm90b3R5cGUuX2hhbmRsZU1lc3NhZ2U9ZnVuY3Rpb24oZSl7dmFyIHQ9SlNPTi5wYXJzZShlLmRhdGEpLG49dGhpcy5jb21tYW5kcy5nZXQodC5pZCk7c3dpdGNoKHQudHlwZSl7Y2FzZVwiZXZlbnRcIjpuP24uY2FsbGJhY2sodC5ldmVudCk6KGNvbnNvbGUud2FybihcIlJlY2VpdmVkIGV2ZW50IGZvciB1bmtub3duIHN1YnNjcmlwdGlvbiBcIit0LmlkK1wiLiBVbnN1YnNjcmliaW5nLlwiKSx0aGlzLnNlbmRNZXNzYWdlUHJvbWlzZShpKHQuaWQpKSk7YnJlYWs7Y2FzZVwicmVzdWx0XCI6biYmKHQuc3VjY2Vzcz8obi5yZXNvbHZlKHQucmVzdWx0KSxcInN1YnNjcmliZVwiaW4gbnx8dGhpcy5jb21tYW5kcy5kZWxldGUodC5pZCkpOihuLnJlamVjdCh0LmVycm9yKSx0aGlzLmNvbW1hbmRzLmRlbGV0ZSh0LmlkKSkpO2JyZWFrO2Nhc2VcInBvbmdcIjpuPyhuLnJlc29sdmUoKSx0aGlzLmNvbW1hbmRzLmRlbGV0ZSh0LmlkKSk6Y29uc29sZS53YXJuKFwiUmVjZWl2ZWQgdW5rbm93biBwb25nIHJlc3BvbnNlIFwiK3QuaWQpfX0sYy5wcm90b3R5cGUuX2hhbmRsZUNsb3NlPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7aWYodGhpcy5jb21tYW5kcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe1wic3Vic2NyaWJlXCJpbiBlfHxlLnJlamVjdCh7dHlwZTpcInJlc3VsdFwiLHN1Y2Nlc3M6ITEsZXJyb3I6e2NvZGU6MyxtZXNzYWdlOlwiQ29ubmVjdGlvbiBsb3N0XCJ9fSl9KSwhdGhpcy5jbG9zZVJlcXVlc3RlZCl7dGhpcy5maXJlRXZlbnQoXCJkaXNjb25uZWN0ZWRcIik7dmFyIHI9T2JqZWN0LmFzc2lnbih7fSx0aGlzLm9wdGlvbnMse3NldHVwUmV0cnk6MH0pLG89ZnVuY3Rpb24odCl7dmFyIHM9bjtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHJ5e3ZhciBuPWUoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHIuY3JlYXRlU29ja2V0KHIpKS50aGVuKGZ1bmN0aW9uKGUpe3Muc2V0U29ja2V0KGUpfSl9LGZ1bmN0aW9uKGUpezI9PT1lP3MuZmlyZUV2ZW50KFwicmVjb25uZWN0LWVycm9yXCIsZSk6byh0KzEpfSk7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuJiZuLnRoZW4/bi50aGVuKGZ1bmN0aW9uKCl7fSk6dm9pZCAwKX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fSwxZTMqTWF0aC5taW4odCw1KSl9O28oMCl9fSxjLnByb3RvdHlwZS5fZ2VuQ21kSWQ9ZnVuY3Rpb24oKXtyZXR1cm4rK3RoaXMuY29tbWFuZElkfTt2YXIgdT1mdW5jdGlvbihlKXt2b2lkIDA9PT1lJiYoZT17fSk7dHJ5e2Z1bmN0aW9uIHQoKXtmdW5jdGlvbiB0KCl7ZnVuY3Rpb24gdCgpe2lmKG4pcmV0dXJuIG5ldyB2KG4sZS5zYXZlVG9rZW5zKTtpZih2b2lkIDA9PT1yKXRocm93IG87cmV0dXJuIGZ1bmN0aW9uKGUsdCxuLHIpe24rPShuLmluY2x1ZGVzKFwiP1wiKT9cIiZcIjpcIj9cIikrXCJhdXRoX2NhbGxiYWNrPTFcIixkb2N1bWVudC5sb2NhdGlvbi5ocmVmPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPWUrXCIvYXV0aC9hdXRob3JpemU/cmVzcG9uc2VfdHlwZT1jb2RlJnJlZGlyZWN0X3VyaT1cIitlbmNvZGVVUklDb21wb25lbnQobik7cmV0dXJuIG51bGwhPT10JiYobys9XCImY2xpZW50X2lkPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0KSksciYmKG8rPVwiJnN0YXRlPVwiK2VuY29kZVVSSUNvbXBvbmVudChyKSksb30oZSx0LG4scil9KHIscyxlLnJlZGlyZWN0VXJsfHxsb2NhdGlvbi5wcm90b2NvbCtcIi8vXCIrbG9jYXRpb24uaG9zdCtsb2NhdGlvbi5wYXRobmFtZStsb2NhdGlvbi5zZWFyY2gsYnRvYShKU09OLnN0cmluZ2lmeSh7aGFzc1VybDpyLGNsaWVudElkOnN9KSkpLG5ldyBQcm9taXNlKGZ1bmN0aW9uKCl7fSl9dmFyIGk9ZnVuY3Rpb24oKXtpZighbiYmZS5sb2FkVG9rZW5zKXJldHVybiBQcm9taXNlLnJlc29sdmUoZS5sb2FkVG9rZW5zKCkpLnRoZW4oZnVuY3Rpb24oZSl7bj1lfSl9KCk7cmV0dXJuIGkmJmkudGhlbj9pLnRoZW4odCk6dCgpfXZhciBpPWZ1bmN0aW9uKCl7aWYoIW4pe3ZhciB0PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD17fSxuPWxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkuc3BsaXQoXCImXCIpLHI9MDtyPG4ubGVuZ3RoO3IrKyl7dmFyIG89bltyXS5zcGxpdChcIj1cIikscz1kZWNvZGVVUklDb21wb25lbnQob1swXSksaT1vLmxlbmd0aD4xP2RlY29kZVVSSUNvbXBvbmVudChvWzFdKTp2b2lkIDA7dFtzXT1pfXJldHVybiB0fSgpLHI9ZnVuY3Rpb24oKXtpZihcImF1dGhfY2FsbGJhY2tcImluIHQpe3ZhciByPUpTT04ucGFyc2UoYXRvYih0LnN0YXRlKSk7cmV0dXJuIFByb21pc2UucmVzb2x2ZShoKHIuaGFzc1VybCxyLmNsaWVudElkLHQuY29kZSkpLnRoZW4oZnVuY3Rpb24odCl7bj10LGUuc2F2ZVRva2VucyYmZS5zYXZlVG9rZW5zKG4pfSl9fSgpO2lmKHImJnIudGhlbilyZXR1cm4gci50aGVuKGZ1bmN0aW9uKCl7fSl9fSgpO3JldHVybiBpJiZpLnRoZW4/aS50aGVuKHQpOnQoKX12YXIgbixyPWUuaGFzc1VybDtyJiZcIi9cIj09PXJbci5sZW5ndGgtMV0mJihyPXIuc3Vic3RyKDAsci5sZW5ndGgtMSkpO3ZhciBzPXZvaWQgMCE9PWUuY2xpZW50SWQ/ZS5jbGllbnRJZDpmKCksaT1mdW5jdGlvbigpe2lmKCFuJiZlLmF1dGhDb2RlJiZyKXJldHVybiBQcm9taXNlLnJlc29sdmUoaChyLHMsZS5hdXRoQ29kZSkpLnRoZW4oZnVuY3Rpb24odCl7bj10LGUuc2F2ZVRva2VucyYmZS5zYXZlVG9rZW5zKG4pfSl9KCk7cmV0dXJuIFByb21pc2UucmVzb2x2ZShpJiZpLnRoZW4/aS50aGVuKHQpOnQoKSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0sYT1mdW5jdGlvbihlLHQsbil7dHJ5e3ZhciByPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBsb2NhdGlvbiYmbG9jYXRpb247aWYociYmXCJodHRwczpcIj09PXIucHJvdG9jb2wpe3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2lmKG8uaHJlZj1lLFwiaHR0cDpcIj09PW8ucHJvdG9jb2wmJlwibG9jYWxob3N0XCIhPT1vLmhvc3RuYW1lKXRocm93IDV9dmFyIHM9bmV3IEZvcm1EYXRhO3JldHVybiBudWxsIT09dCYmcy5hcHBlbmQoXCJjbGllbnRfaWRcIix0KSxPYmplY3Qua2V5cyhuKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3MuYXBwZW5kKGUsbltlXSl9KSxQcm9taXNlLnJlc29sdmUoZmV0Y2goZStcIi9hdXRoL3Rva2VuXCIse21ldGhvZDpcIlBPU1RcIixjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCIsYm9keTpzfSkpLnRoZW4oZnVuY3Rpb24obil7aWYoIW4ub2spdGhyb3cgNDAwPT09bi5zdGF0dXN8fDQwMz09PW4uc3RhdHVzPzI6bmV3IEVycm9yKFwiVW5hYmxlIHRvIGZldGNoIHRva2Vuc1wiKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG4uanNvbigpKS50aGVuKGZ1bmN0aW9uKG4pe3JldHVybiBuLmhhc3NVcmw9ZSxuLmNsaWVudElkPXQsbi5leHBpcmVzPWQobi5leHBpcmVzX2luKSxufSl9KX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fSxmPWZ1bmN0aW9uKCl7cmV0dXJuIGxvY2F0aW9uLnByb3RvY29sK1wiLy9cIitsb2NhdGlvbi5ob3N0K1wiL1wifSxkPWZ1bmN0aW9uKGUpe3JldHVybiAxZTMqZStEYXRlLm5vdygpfTtmdW5jdGlvbiBoKGUsdCxuKXtyZXR1cm4gYShlLHQse2NvZGU6bixncmFudF90eXBlOlwiYXV0aG9yaXphdGlvbl9jb2RlXCJ9KX12YXIgdj1mdW5jdGlvbihlLHQpe3RoaXMuZGF0YT1lLHRoaXMuX3NhdmVUb2tlbnM9dH0sbD17d3NVcmw6e2NvbmZpZ3VyYWJsZTohMH0sYWNjZXNzVG9rZW46e2NvbmZpZ3VyYWJsZTohMH0sZXhwaXJlZDp7Y29uZmlndXJhYmxlOiEwfX07bC53c1VybC5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm5cIndzXCIrdGhpcy5kYXRhLmhhc3NVcmwuc3Vic3RyKDQpK1wiL2FwaS93ZWJzb2NrZXRcIn0sbC5hY2Nlc3NUb2tlbi5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYXRhLmFjY2Vzc190b2tlbn0sbC5leHBpcmVkLmdldD1mdW5jdGlvbigpe3JldHVybiBEYXRlLm5vdygpPnRoaXMuZGF0YS5leHBpcmVzfSx2LnByb3RvdHlwZS5yZWZyZXNoQWNjZXNzVG9rZW49ZnVuY3Rpb24oKXt0cnl7dmFyIGU9dGhpcztyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGEoZS5kYXRhLmhhc3NVcmwsZS5kYXRhLmNsaWVudElkLHtncmFudF90eXBlOlwicmVmcmVzaF90b2tlblwiLHJlZnJlc2hfdG9rZW46ZS5kYXRhLnJlZnJlc2hfdG9rZW59KSkudGhlbihmdW5jdGlvbih0KXt0LnJlZnJlc2hfdG9rZW49ZS5kYXRhLnJlZnJlc2hfdG9rZW4sZS5kYXRhPXQsZS5fc2F2ZVRva2VucyYmZS5fc2F2ZVRva2Vucyh0KX0pfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19LHYucHJvdG90eXBlLnJldm9rZT1mdW5jdGlvbigpe3RyeXt2YXIgZT10aGlzLHQ9bmV3IEZvcm1EYXRhO3JldHVybiB0LmFwcGVuZChcImFjdGlvblwiLFwicmV2b2tlXCIpLHQuYXBwZW5kKFwidG9rZW5cIixlLmRhdGEucmVmcmVzaF90b2tlbiksUHJvbWlzZS5yZXNvbHZlKGZldGNoKGUuZGF0YS5oYXNzVXJsK1wiL2F1dGgvdG9rZW5cIix7bWV0aG9kOlwiUE9TVFwiLGNyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIixib2R5OnR9KSkudGhlbihmdW5jdGlvbigpe2UuX3NhdmVUb2tlbnMmJmUuX3NhdmVUb2tlbnMobnVsbCl9KX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh2LnByb3RvdHlwZSxsKTt2YXIgbT1mdW5jdGlvbihlLHQsbixyKXtpZihlW3RdKXJldHVybiBlW3RdO3ZhciBvLHM9MCxpPWZ1bmN0aW9uKGUpe3ZhciB0PVtdO2Z1bmN0aW9uIG4obixyKXtlPXI/bjpPYmplY3QuYXNzaWduKHt9LGUsbik7Zm9yKHZhciBvPXQscz0wO3M8by5sZW5ndGg7cysrKW9bc10oZSl9cmV0dXJue2dldCBzdGF0ZSgpe3JldHVybiBlfSxhY3Rpb246ZnVuY3Rpb24odCl7ZnVuY3Rpb24gcihlKXtuKGUsITEpfXJldHVybiBmdW5jdGlvbigpe2Zvcih2YXIgbj1hcmd1bWVudHMsbz1bZV0scz0wO3M8YXJndW1lbnRzLmxlbmd0aDtzKyspby5wdXNoKG5bc10pO3ZhciBpPXQuYXBwbHkodGhpcyxvKTtpZihudWxsIT1pKXJldHVybiBpLnRoZW4/aS50aGVuKHIpOnIoaSl9fSxzZXRTdGF0ZTpuLHN1YnNjcmliZTpmdW5jdGlvbihlKXtyZXR1cm4gdC5wdXNoKGUpLGZ1bmN0aW9uKCl7IWZ1bmN0aW9uKGUpe2Zvcih2YXIgbj1bXSxyPTA7cjx0Lmxlbmd0aDtyKyspdFtyXT09PWU/ZT1udWxsOm4ucHVzaCh0W3JdKTt0PW59KGUpfX19fSgpLGM9ZnVuY3Rpb24oKXtyZXR1cm4gbihlKS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBpLnNldFN0YXRlKGUsITApfSl9LHU9ZnVuY3Rpb24oKXtyZXR1cm4gYygpLmNhdGNoKGZ1bmN0aW9uKHQpe2lmKGUuc29ja2V0LnJlYWR5U3RhdGU9PWUuc29ja2V0Lk9QRU4pdGhyb3cgdH0pfTtyZXR1cm4gZVt0XT17Z2V0IHN0YXRlKCl7cmV0dXJuIGkuc3RhdGV9LHJlZnJlc2g6YyxzdWJzY3JpYmU6ZnVuY3Rpb24odCl7MT09KytzJiYociYmKG89cihlLGkpKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLHUpLHUoKSk7dmFyIG49aS5zdWJzY3JpYmUodCk7cmV0dXJuIHZvaWQgMCE9PWkuc3RhdGUmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gdChpLnN0YXRlKX0sMCksZnVuY3Rpb24oKXtuKCksLS1zfHwobyYmby50aGVuKGZ1bmN0aW9uKGUpe2UoKX0pLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsYykpfX19LGVbdF19LHA9ZnVuY3Rpb24oZSx0LG4scixvKXtyZXR1cm4gbShyLGUsdCxuKS5zdWJzY3JpYmUobyl9LGI9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2VuZE1lc3NhZ2VQcm9taXNlKHt0eXBlOlwiZ2V0X3N0YXRlc1wifSl9LHk9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2VuZE1lc3NhZ2VQcm9taXNlKHt0eXBlOlwiZ2V0X3NlcnZpY2VzXCJ9KX0sZz1mdW5jdGlvbihlKXtyZXR1cm4gZS5zZW5kTWVzc2FnZVByb21pc2Uoe3R5cGU6XCJnZXRfY29uZmlnXCJ9KX0saz1mdW5jdGlvbihlKXtyZXR1cm4gZS5zZW5kTWVzc2FnZVByb21pc2Uoe3R5cGU6XCJhdXRoL2N1cnJlbnRfdXNlclwifSl9LF89ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIGUuc2VuZE1lc3NhZ2VQcm9taXNlKGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj17dHlwZTpcImNhbGxfc2VydmljZVwiLGRvbWFpbjplLHNlcnZpY2U6dH07cmV0dXJuIG4mJihyLnNlcnZpY2VfZGF0YT1uKSxyfSh0LG4scikpfTtmdW5jdGlvbiBQKGUsdCl7cmV0dXJuIHZvaWQgMD09PWU/bnVsbDp7Y29tcG9uZW50czplLmNvbXBvbmVudHMuY29uY2F0KHQuZGF0YS5jb21wb25lbnQpfX12YXIgRT1mdW5jdGlvbihlKXtyZXR1cm4gZyhlKX0sdz1mdW5jdGlvbihlLHQpe3JldHVybiBQcm9taXNlLmFsbChbZS5zdWJzY3JpYmVFdmVudHModC5hY3Rpb24oUCksXCJjb21wb25lbnRfbG9hZGVkXCIpLGUuc3Vic2NyaWJlRXZlbnRzKGZ1bmN0aW9uKCl7cmV0dXJuIEUoZSkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gdC5zZXRTdGF0ZShlLCEwKX0pfSxcImNvcmVfY29uZmlnX3VwZGF0ZWRcIildKS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUoKX0pfX0pfSxTPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBtKGUsXCJfY25mXCIsRSx3KX0oZSkuc3Vic2NyaWJlKHQpfTtmdW5jdGlvbiBqKGUsdCl7dmFyIG4scjtpZih2b2lkIDA9PT1lKXJldHVybiBudWxsO3ZhciBvPXQuZGF0YSxzPW8uZG9tYWluLGk9T2JqZWN0LmFzc2lnbih7fSxlW3NdLCgobj17fSlbby5zZXJ2aWNlXT17ZGVzY3JpcHRpb246XCJcIixmaWVsZHM6e319LG4pKTtyZXR1cm4ocj17fSlbc109aSxyfWZ1bmN0aW9uIFQoZSx0KXt2YXIgbjtpZih2b2lkIDA9PT1lKXJldHVybiBudWxsO3ZhciByPXQuZGF0YSxvPXIuZG9tYWluLHM9ci5zZXJ2aWNlLGk9ZVtvXTtpZighKGkmJnMgaW4gaSkpcmV0dXJuIG51bGw7dmFyIGM9e307cmV0dXJuIE9iamVjdC5rZXlzKGkpLmZvckVhY2goZnVuY3Rpb24oZSl7ZSE9PXMmJihjW2VdPWlbZV0pfSksKG49e30pW29dPWMsbn12YXIgST1mdW5jdGlvbihlKXtyZXR1cm4geShlKX0sTT1mdW5jdGlvbihlLHQpe3JldHVybiBQcm9taXNlLmFsbChbZS5zdWJzY3JpYmVFdmVudHModC5hY3Rpb24oaiksXCJzZXJ2aWNlX3JlZ2lzdGVyZWRcIiksZS5zdWJzY3JpYmVFdmVudHModC5hY3Rpb24oVCksXCJzZXJ2aWNlX3JlbW92ZWRcIildKS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUoKX0pfX0pfSxMPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBtKGUsXCJfc3J2XCIsSSxNKX0oZSkuc3Vic2NyaWJlKHQpfSxPPWZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGIoZSkpLnRoZW4oZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXt9LG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTt0W3IuZW50aXR5X2lkXT1yfXJldHVybiB0fSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0sVT1mdW5jdGlvbihlLHQpe3JldHVybiBlLnN1YnNjcmliZUV2ZW50cyhmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCxuKXt2YXIgcixvPXQuc3RhdGU7aWYodm9pZCAwIT09byl7dmFyIHM9ZS5kYXRhLGk9cy5lbnRpdHlfaWQsYz1zLm5ld19zdGF0ZTtpZihjKXQuc2V0U3RhdGUoKChyPXt9KVtjLmVudGl0eV9pZF09YyxyKSk7ZWxzZXt2YXIgdT1PYmplY3QuYXNzaWduKHt9LG8pO2RlbGV0ZSB1W2ldLHQuc2V0U3RhdGUodSwhMCl9fX0odCl9LFwic3RhdGVfY2hhbmdlZFwiKX0sQz1mdW5jdGlvbihlKXtyZXR1cm4gbShlLFwiX2VudFwiLE8sVSl9LFI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gQyhlKS5zdWJzY3JpYmUodCl9LHg9ZnVuY3Rpb24oZSl7dHJ5e3ZhciB0PU9iamVjdC5hc3NpZ24oe30sTixlKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHQuY3JlYXRlU29ja2V0KHQpKS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBuZXcgYyhlLHQpfSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0sTj17c2V0dXBSZXRyeTowLGNyZWF0ZVNvY2tldDpmdW5jdGlvbih0KXtpZighdC5hdXRoKXRocm93IG87dmFyIG49dC5hdXRoLHI9bi5leHBpcmVkP24ucmVmcmVzaEFjY2Vzc1Rva2VuKCkudGhlbihmdW5jdGlvbigpe3I9dm9pZCAwfSxmdW5jdGlvbigpe3I9dm9pZCAwfSk6dm9pZCAwLHM9bi53c1VybDtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24obyxpKXtyZXR1cm4gZnVuY3Rpb24gdChvLGksYyl7dmFyIHU9bmV3IFdlYlNvY2tldChzKSxhPSExLGY9ZnVuY3Rpb24oKXtpZih1LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGYpLGEpYygyKTtlbHNlIGlmKDAhPT1vKXt2YXIgZT0tMT09PW8/LTE6by0xO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gdChlLGksYyl9LDFlMyl9ZWxzZSBjKDEpfSxkPWZ1bmN0aW9uKHQpe3RyeXt2YXIgbz1lKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3Uuc2VuZChKU09OLnN0cmluZ2lmeSh7dHlwZTpcImF1dGhcIixhY2Nlc3NfdG9rZW46bi5hY2Nlc3NUb2tlbn0pKX12YXIgdD1mdW5jdGlvbigpe2lmKG4uZXhwaXJlZClyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJ8fG4ucmVmcmVzaEFjY2Vzc1Rva2VuKCkpLnRoZW4oZnVuY3Rpb24oKXt9KX0oKTtyZXR1cm4gdCYmdC50aGVuP3QudGhlbihlKTplKCl9LGZ1bmN0aW9uKGUpe2E9Mj09PWUsdS5jbG9zZSgpfSk7cmV0dXJuIFByb21pc2UucmVzb2x2ZShvJiZvLnRoZW4/by50aGVuKGZ1bmN0aW9uKCl7fSk6dm9pZCAwKX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fSxoPWZ1bmN0aW9uKGUpe3RyeXtzd2l0Y2goSlNPTi5wYXJzZShlLmRhdGEpLnR5cGUpe2Nhc2VcImF1dGhfaW52YWxpZFwiOmE9ITAsdS5jbG9zZSgpO2JyZWFrO2Nhc2VcImF1dGhfb2tcIjp1LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsZCksdS5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGgpLHUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsZiksdS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIixmKSxpKHUpfXJldHVybiBQcm9taXNlLnJlc29sdmUoKX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fTt1LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsZCksdS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGgpLHUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsZiksdS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixmKX0odC5zZXR1cFJldHJ5LG8saSl9KX19O2V4cG9ydHt4IGFzIGNyZWF0ZUNvbm5lY3Rpb24sdSBhcyBnZXRBdXRoLGYgYXMgZ2VuQ2xpZW50SWQsZCBhcyBnZW5FeHBpcmVzLHYgYXMgQXV0aCxtIGFzIGdldENvbGxlY3Rpb24scCBhcyBjcmVhdGVDb2xsZWN0aW9uLGMgYXMgQ29ubmVjdGlvbixTIGFzIHN1YnNjcmliZUNvbmZpZyxMIGFzIHN1YnNjcmliZVNlcnZpY2VzLEMgYXMgZW50aXRpZXNDb2xsLFIgYXMgc3Vic2NyaWJlRW50aXRpZXMsdCBhcyBFUlJfQ0FOTk9UX0NPTk5FQ1QsbiBhcyBFUlJfSU5WQUxJRF9BVVRILHIgYXMgRVJSX0NPTk5FQ1RJT05fTE9TVCxvIGFzIEVSUl9IQVNTX0hPU1RfUkVRVUlSRUQscyBhcyBFUlJfSU5WQUxJRF9IVFRQU19UT19IVFRQLGIgYXMgZ2V0U3RhdGVzLHkgYXMgZ2V0U2VydmljZXMsZyBhcyBnZXRDb25maWcsayBhcyBnZXRVc2VyLF8gYXMgY2FsbFNlcnZpY2V9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGF3cy5lcy5qcy5tYXBcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEF1dGhEYXRhIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5jb25zdCBzdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZSB8fCB7fTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX3Rva2VuQ2FjaGU6IHtcbiAgICAgIC8vIHVuZGVmaW5lZDogd2UgaGF2ZW4ndCBsb2FkZWQgeWV0XG4gICAgICAvLyBudWxsOiBub25lIHN0b3JlZFxuICAgICAgdG9rZW5zPzogQXV0aERhdGEgfCBudWxsO1xuICAgICAgd3JpdGVFbmFibGVkPzogYm9vbGVhbjtcbiAgICB9O1xuICB9XG59XG5cbi8vIFNvIHRoYXQgY29yZS5qcyBhbmQgbWFpbiBhcHAgaGl0IHNhbWUgc2hhcmVkIG9iamVjdC5cbmxldCB0b2tlbkNhY2hlID0gd2luZG93Ll9fdG9rZW5DYWNoZTtcbmlmICghdG9rZW5DYWNoZSkge1xuICB0b2tlbkNhY2hlID0gd2luZG93Ll9fdG9rZW5DYWNoZSA9IHtcbiAgICB0b2tlbnM6IHVuZGVmaW5lZCxcbiAgICB3cml0ZUVuYWJsZWQ6IHVuZGVmaW5lZCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFza1dyaXRlKCkge1xuICByZXR1cm4gKFxuICAgIHRva2VuQ2FjaGUudG9rZW5zICE9PSB1bmRlZmluZWQgJiYgdG9rZW5DYWNoZS53cml0ZUVuYWJsZWQgPT09IHVuZGVmaW5lZFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRva2Vucyh0b2tlbnM6IEF1dGhEYXRhIHwgbnVsbCkge1xuICB0b2tlbkNhY2hlLnRva2VucyA9IHRva2VucztcbiAgaWYgKHRva2VuQ2FjaGUud3JpdGVFbmFibGVkKSB7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UuaGFzc1Rva2VucyA9IEpTT04uc3RyaW5naWZ5KHRva2Vucyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyB3cml0ZSBmYWlsZWQsIGlnbm9yZSBpdC4gSGFwcGVucyBpZiBzdG9yYWdlIGlzIGZ1bGwgb3IgcHJpdmF0ZSBtb2RlLlxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlV3JpdGUoKSB7XG4gIHRva2VuQ2FjaGUud3JpdGVFbmFibGVkID0gdHJ1ZTtcbiAgaWYgKHRva2VuQ2FjaGUudG9rZW5zKSB7XG4gICAgc2F2ZVRva2Vucyh0b2tlbkNhY2hlLnRva2Vucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUb2tlbnMoKSB7XG4gIGlmICh0b2tlbkNhY2hlLnRva2VucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIERlbGV0ZSB0aGUgb2xkIHRva2VuIGNhY2hlLlxuICAgICAgZGVsZXRlIHN0b3JhZ2UudG9rZW5zO1xuICAgICAgY29uc3QgdG9rZW5zID0gc3RvcmFnZS5oYXNzVG9rZW5zO1xuICAgICAgaWYgKHRva2Vucykge1xuICAgICAgICB0b2tlbkNhY2hlLnRva2VucyA9IEpTT04ucGFyc2UodG9rZW5zKTtcbiAgICAgICAgdG9rZW5DYWNoZS53cml0ZUVuYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW5DYWNoZS50b2tlbnMgPSBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdG9rZW5DYWNoZS50b2tlbnMgPSBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9rZW5DYWNoZS50b2tlbnM7XG59XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aFByb3ZpZGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlZGVudGlhbCB7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWduZWRQYXRoIHtcbiAgcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgaGFzc1VybCA9IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fWA7XG5cbmV4cG9ydCBjb25zdCBnZXRTaWduZWRQYXRoID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBwYXRoOiBzdHJpbmdcbik6IFByb21pc2U8U2lnbmVkUGF0aD4gPT4gaGFzcy5jYWxsV1MoeyB0eXBlOiBcImF1dGgvc2lnbl9wYXRoXCIsIHBhdGggfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF1dGhQcm92aWRlcnMgPSAoKSA9PlxuICBmZXRjaChcIi9hdXRoL3Byb3ZpZGVyc1wiLCB7XG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgfSk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uLCBnZXRDb2xsZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlQ29uZmlnIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHZpZXdzOiBMb3ZlbGFjZVZpZXdDb25maWdbXTtcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgcmVzb3VyY2VzPzogQXJyYXk8eyB0eXBlOiBcImNzc1wiIHwgXCJqc1wiIHwgXCJtb2R1bGVcIiB8IFwiaHRtbFwiOyB1cmw6IHN0cmluZyB9Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZVZpZXdDb25maWcge1xuICBpbmRleD86IG51bWJlcjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGJhZGdlcz86IHN0cmluZ1tdO1xuICBjYXJkcz86IExvdmVsYWNlQ2FyZENvbmZpZ1tdO1xuICBwYXRoPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICB0aGVtZT86IHN0cmluZztcbiAgcGFuZWw/OiBib29sZWFuO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICB2aXNpYmxlPzogYm9vbGVhbiB8IFNob3dWaWV3Q29uZmlnW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvd1ZpZXdDb25maWcge1xuICB1c2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlQ2FyZENvbmZpZyB7XG4gIGluZGV4PzogbnVtYmVyO1xuICB2aWV3X2luZGV4PzogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2dnbGVBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwidG9nZ2xlXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbFNlcnZpY2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwiY2FsbC1zZXJ2aWNlXCI7XG4gIHNlcnZpY2U6IHN0cmluZztcbiAgc2VydmljZV9kYXRhPzoge1xuICAgIGVudGl0eV9pZD86IHN0cmluZyB8IFtzdHJpbmddO1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJuYXZpZ2F0ZVwiO1xuICBuYXZpZ2F0aW9uX3BhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcmxBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwidXJsXCI7XG4gIHVybF9wYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9yZUluZm9BY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwibW9yZS1pbmZvXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9BY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwibm9uZVwiO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25Db25maWcgPVxuICB8IFRvZ2dsZUFjdGlvbkNvbmZpZ1xuICB8IENhbGxTZXJ2aWNlQWN0aW9uQ29uZmlnXG4gIHwgTmF2aWdhdGVBY3Rpb25Db25maWdcbiAgfCBVcmxBY3Rpb25Db25maWdcbiAgfCBNb3JlSW5mb0FjdGlvbkNvbmZpZ1xuICB8IE5vQWN0aW9uQ29uZmlnO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDb25maWcgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIGZvcmNlOiBib29sZWFuXG4pOiBQcm9taXNlPExvdmVsYWNlQ29uZmlnPiA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9jb25maWdcIixcbiAgICBmb3JjZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzYXZlQ29uZmlnID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWc6IExvdmVsYWNlQ29uZmlnXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL2NvbmZpZy9zYXZlXCIsXG4gICAgY29uZmlnLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUxvdmVsYWNlVXBkYXRlcyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6ICgpID0+IHZvaWRcbikgPT4gY29ubi5zdWJzY3JpYmVFdmVudHMob25DaGFuZ2UsIFwibG92ZWxhY2VfdXBkYXRlZFwiKTtcblxuZXhwb3J0IGNvbnN0IGdldExvdmVsYWNlQ29sbGVjdGlvbiA9IChjb25uOiBDb25uZWN0aW9uKSA9PlxuICBnZXRDb2xsZWN0aW9uKFxuICAgIGNvbm4sXG4gICAgXCJfbG92ZWxhY2VcIixcbiAgICAoY29ubjIpID0+IGZldGNoQ29uZmlnKGNvbm4yLCBmYWxzZSksXG4gICAgKF9jb25uLCBzdG9yZSkgPT5cbiAgICAgIHN1YnNjcmliZUxvdmVsYWNlVXBkYXRlcyhjb25uLCAoKSA9PlxuICAgICAgICBmZXRjaENvbmZpZyhjb25uLCBmYWxzZSkudGhlbigoY29uZmlnKSA9PiBzdG9yZS5zZXRTdGF0ZShjb25maWcsIHRydWUpKVxuICAgICAgKVxuICApO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd1dpdGhMb3ZlbGFjZVByb20gZXh0ZW5kcyBXaW5kb3cge1xuICBsbENvbmZQcm9tPzogUHJvbWlzZTxMb3ZlbGFjZUNvbmZpZz47XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgUGFuZWxzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IGZldGNoUGFuZWxzID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImdldF9wYW5lbHNcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgICgpID0+IGZldGNoUGFuZWxzKGNvbm4pLnRoZW4oKHBhbmVscykgPT4gc3RvcmUuc2V0U3RhdGUocGFuZWxzLCB0cnVlKSksXG4gICAgXCJwYW5lbHNfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVQYW5lbHMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAocGFuZWxzOiBQYW5lbHMpID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxQYW5lbHM+KFxuICAgIFwiX3BubFwiLFxuICAgIGZldGNoUGFuZWxzLFxuICAgIHN1YnNjcmliZVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IFRoZW1lcyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBmZXRjaFRoZW1lcyA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJmcm9udGVuZC9nZXRfdGhlbWVzXCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICAoZXZlbnQpID0+IHN0b3JlLnNldFN0YXRlKGV2ZW50LmRhdGEsIHRydWUpLFxuICAgIFwidGhlbWVzX3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlVGhlbWVzID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKHRoZW1lczogVGhlbWVzKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248VGhlbWVzPihcbiAgICBcIl90aG1cIixcbiAgICBmZXRjaFRoZW1lcyxcbiAgICBzdWJzY3JpYmVVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsImltcG9ydCB7XG4gIGdldFVzZXIsXG4gIENvbm5lY3Rpb24sXG4gIGdldENvbGxlY3Rpb24sXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VyQ29sbGVjdGlvbiA9IChjb25uOiBDb25uZWN0aW9uKSA9PlxuICBnZXRDb2xsZWN0aW9uKFxuICAgIGNvbm4sXG4gICAgXCJfdXNyXCIsXG4gICAgKCkgPT4gZ2V0VXNlcihjb25uKSBhcyBQcm9taXNlPEN1cnJlbnRVc2VyPixcbiAgICB1bmRlZmluZWRcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZVVzZXIgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAodXNlcjogQ3VycmVudFVzZXIpID0+IHZvaWRcbikgPT4gdXNlckNvbGxlY3Rpb24oY29ubikuc3Vic2NyaWJlKG9uQ2hhbmdlKTtcbiIsImltcG9ydCB7XG4gIGdldEF1dGgsXG4gIGNyZWF0ZUNvbm5lY3Rpb24sXG4gIHN1YnNjcmliZUNvbmZpZyxcbiAgc3Vic2NyaWJlRW50aXRpZXMsXG4gIHN1YnNjcmliZVNlcnZpY2VzLFxuICBFUlJfSU5WQUxJRF9BVVRILFxuICBBdXRoLFxuICBDb25uZWN0aW9uLFxufSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCB7IGxvYWRUb2tlbnMsIHNhdmVUb2tlbnMgfSBmcm9tIFwiLi4vY29tbW9uL2F1dGgvdG9rZW5fc3RvcmFnZVwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlUGFuZWxzIH0gZnJvbSBcIi4uL2RhdGEvd3MtcGFuZWxzXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVUaGVtZXMgfSBmcm9tIFwiLi4vZGF0YS93cy10aGVtZXNcIjtcbmltcG9ydCB7IHN1YnNjcmliZVVzZXIgfSBmcm9tIFwiLi4vZGF0YS93cy11c2VyXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBoYXNzVXJsIH0gZnJvbSBcIi4uL2RhdGEvYXV0aFwiO1xuaW1wb3J0IHsgZmV0Y2hDb25maWcsIFdpbmRvd1dpdGhMb3ZlbGFjZVByb20gfSBmcm9tIFwiLi4vZGF0YS9sb3ZlbGFjZVwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGhhc3NDb25uZWN0aW9uOiBQcm9taXNlPHsgYXV0aDogQXV0aDsgY29ubjogQ29ubmVjdGlvbiB9PjtcbiAgfVxufVxuXG5jb25zdCBpc0V4dGVybmFsID0gbG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKFwiZXh0ZXJuYWxfYXV0aD0xXCIpO1xuXG5jb25zdCBhdXRoUHJvbSA9IGlzRXh0ZXJuYWxcbiAgPyAoKSA9PlxuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZXh0ZXJuYWxfYXV0aFwiICovIFwiLi4vZXh0ZXJuYWxfYXBwL2V4dGVybmFsX2F1dGhcIikudGhlbihcbiAgICAgICAgKHsgY3JlYXRlRXh0ZXJuYWxBdXRoIH0pID0+IGNyZWF0ZUV4dGVybmFsQXV0aChoYXNzVXJsKVxuICAgICAgKVxuICA6ICgpID0+XG4gICAgICBnZXRBdXRoKHtcbiAgICAgICAgaGFzc1VybCxcbiAgICAgICAgc2F2ZVRva2VucyxcbiAgICAgICAgbG9hZFRva2VuczogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGxvYWRUb2tlbnMoKSksXG4gICAgICB9KTtcblxuY29uc3QgY29ublByb20gPSBhc3luYyAoYXV0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbm4gPSBhd2FpdCBjcmVhdGVDb25uZWN0aW9uKHsgYXV0aCB9KTtcblxuICAgIC8vIENsZWFyIHVybCBpZiB3ZSBoYXZlIGJlZW4gYWJsZSB0byBlc3RhYmxpc2ggYSBjb25uZWN0aW9uXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcyhcImF1dGhfY2FsbGJhY2s9MVwiKSkge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgbG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGF1dGgsIGNvbm4gfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyciAhPT0gRVJSX0lOVkFMSURfQVVUSCkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICAvLyBXZSBjYW4gZ2V0IGludmFsaWQgYXV0aCBpZiBhdXRoIHRva2VucyB3ZXJlIHN0b3JlZCB0aGF0IGFyZSBubyBsb25nZXIgdmFsaWRcbiAgICAvLyBDbGVhciBzdG9yZWQgdG9rZW5zLlxuICAgIGlmICghaXNFeHRlcm5hbCkge1xuICAgICAgc2F2ZVRva2VucyhudWxsKTtcbiAgICB9XG4gICAgYXV0aCA9IGF3YWl0IGF1dGhQcm9tKCk7XG4gICAgY29uc3QgY29ubiA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oeyBhdXRoIH0pO1xuICAgIHJldHVybiB7IGF1dGgsIGNvbm4gfTtcbiAgfVxufTtcblxuaWYgKF9fREVWX18pIHtcbiAgcGVyZm9ybWFuY2UubWFyayhcImhhc3Mtc3RhcnRcIik7XG59XG53aW5kb3cuaGFzc0Nvbm5lY3Rpb24gPSBhdXRoUHJvbSgpLnRoZW4oY29ublByb20pO1xuXG4vLyBTdGFydCBmZXRjaGluZyBzb21lIG9mIHRoZSBkYXRhIHRoYXQgd2Ugd2lsbCBuZWVkLlxud2luZG93Lmhhc3NDb25uZWN0aW9uLnRoZW4oKHsgY29ubiB9KSA9PiB7XG4gIGNvbnN0IG5vb3AgPSAoKSA9PiB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9O1xuICBzdWJzY3JpYmVFbnRpdGllcyhjb25uLCBub29wKTtcbiAgc3Vic2NyaWJlQ29uZmlnKGNvbm4sIG5vb3ApO1xuICBzdWJzY3JpYmVTZXJ2aWNlcyhjb25uLCBub29wKTtcbiAgc3Vic2NyaWJlUGFuZWxzKGNvbm4sIG5vb3ApO1xuICBzdWJzY3JpYmVUaGVtZXMoY29ubiwgbm9vcCk7XG4gIHN1YnNjcmliZVVzZXIoY29ubiwgbm9vcCk7XG5cbiAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIiB8fCBsb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2xvdmVsYWNlL1wiKSkge1xuICAgICh3aW5kb3cgYXMgV2luZG93V2l0aExvdmVsYWNlUHJvbSkubGxDb25mUHJvbSA9IGZldGNoQ29uZmlnKGNvbm4sIGZhbHNlKTtcbiAgfVxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGUpID0+IHtcbiAgY29uc3QgaG9tZUFzc2lzdGFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJob21lLWFzc2lzdGFudFwiKSBhcyBhbnk7XG4gIGlmIChcbiAgICBob21lQXNzaXN0YW50ICYmXG4gICAgaG9tZUFzc2lzdGFudC5oYXNzICYmXG4gICAgKGhvbWVBc3Npc3RhbnQuaGFzcyBhcyBIb21lQXNzaXN0YW50KS5jYWxsU2VydmljZVxuICApIHtcbiAgICBob21lQXNzaXN0YW50Lmhhc3MuY2FsbFNlcnZpY2UoXCJzeXN0ZW1fbG9nXCIsIFwid3JpdGVcIiwge1xuICAgICAgbG9nZ2VyOiBgZnJvbnRlbmQuJHtcbiAgICAgICAgX19ERVZfXyA/IFwianNfZGV2XCIgOiBcImpzXCJcbiAgICAgIH0uJHtfX0JVSUxEX199LiR7X19WRVJTSU9OX18ucmVwbGFjZShcIi5cIiwgXCJcIil9YCxcbiAgICAgIG1lc3NhZ2U6IGAke2UuZmlsZW5hbWV9OiR7ZS5saW5lbm99OiR7ZS5jb2xub30gJHtlLm1lc3NhZ2V9YCxcbiAgICB9KTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFYQTtBQUNBO0FBWUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQkE7QUFDQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF3RUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBREE7QUFMQTs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFLQTtBQUlBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBS0E7QUFJQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7Ozs7QUFFQTs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9