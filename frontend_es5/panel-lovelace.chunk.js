(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-lovelace"],{

/***/ "./src/cast/const.ts":
/*!***************************!*\
  !*** ./src/cast/const.ts ***!
  \***************************/
/*! exports provided: CAST_DEV, CAST_APP_ID, CAST_NS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_DEV", function() { return CAST_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_APP_ID", function() { return CAST_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_NS", function() { return CAST_NS; });
/* harmony import */ var _dev_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dev_const */ "./src/cast/dev_const.ts");

// Guard dev mode with `__dev__` so it can only ever be enabled in dev mode.
var CAST_DEV =  true && true;
var CAST_APP_ID = CAST_DEV ? _dev_const__WEBPACK_IMPORTED_MODULE_0__["CAST_DEV_APP_ID"] : "B12CE3CA";
var CAST_NS = "urn:x-cast:com.nabucasa.hast";


/***/ }),

/***/ "./src/cast/dev_const.ts":
/*!*******************************!*\
  !*** ./src/cast/dev_const.ts ***!
  \*******************************/
/*! exports provided: CAST_DEV_APP_ID, CAST_DEV_HASS_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_DEV_APP_ID", function() { return CAST_DEV_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_DEV_HASS_URL", function() { return CAST_DEV_HASS_URL; });
// Replace this with your own unpublished cast app that points at your local dev
var CAST_DEV_APP_ID = "5FE44367";
// Chromecast SDK will only load on localhost and HTTPS
// So during local development we have to send our dev IP address,
// but then run the UI on localhost.
var CAST_DEV_HASS_URL = "http://192.168.1.234:8123";


/***/ }),

/***/ "./src/cast/receiver_messages.ts":
/*!***************************************!*\
  !*** ./src/cast/receiver_messages.ts ***!
  \***************************************/
/*! exports provided: castSendAuth, castSendShowLovelaceView, castSendShowDemo, ensureConnectedCastSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castSendAuth", function() { return castSendAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castSendShowLovelaceView", function() { return castSendShowLovelaceView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castSendShowDemo", function() { return castSendShowDemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureConnectedCastSession", function() { return ensureConnectedCastSession; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/cast/const.ts");
/* harmony import */ var _dev_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dev_const */ "./src/cast/dev_const.ts");
// Nessages to be processed inside the Cast Receiver app


var castSendAuth = function (cast, auth) {
    return cast.sendMessage({
        type: "connect",
        refreshToken: auth.data.refresh_token,
        clientId: auth.data.clientId,
        hassUrl: _const__WEBPACK_IMPORTED_MODULE_0__["CAST_DEV"] ? _dev_const__WEBPACK_IMPORTED_MODULE_1__["CAST_DEV_HASS_URL"] : auth.data.hassUrl,
    });
};
var castSendShowLovelaceView = function (cast, viewPath) {
    return cast.sendMessage({
        type: "show_lovelace_view",
        viewPath: viewPath,
    });
};
var castSendShowDemo = function (cast) {
    return cast.sendMessage({
        type: "show_demo",
    });
};
var ensureConnectedCastSession = function (cast, auth) {
    if (cast.castConnectedToOurHass) {
        return;
    }
    return new Promise(function (resolve) {
        var unsub = cast.addEventListener("connection-changed", function () {
            if (cast.castConnectedToOurHass) {
                unsub();
                resolve();
            }
        });
        castSendAuth(cast, auth);
    });
};


/***/ }),

/***/ "./src/common/datetime/relative_time.ts":
/*!**********************************************!*\
  !*** ./src/common/datetime/relative_time.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relativeTime; });
/**
 * Calculate a string representing a date object as relative time from now.
 *
 * Example output: 5 minutes ago, in 3 days.
 */
var tests = [60, 60, 24, 7];
var langKey = ["second", "minute", "hour", "day"];
function relativeTime(dateObj, localize, options) {
    if (options === void 0) { options = {}; }
    var compareTime = options.compareTime || new Date();
    var delta = (compareTime.getTime() - dateObj.getTime()) / 1000;
    var tense = delta >= 0 ? "past" : "future";
    delta = Math.abs(delta);
    var timeDesc;
    for (var i = 0; i < tests.length; i++) {
        if (delta < tests[i]) {
            delta = Math.floor(delta);
            timeDesc = localize("ui.components.relative_time.duration." + langKey[i], "count", delta);
            break;
        }
        delta /= tests[i];
    }
    if (timeDesc === undefined) {
        delta = Math.floor(delta);
        timeDesc = localize("ui.components.relative_time.duration.week", "count", delta);
    }
    return options.includeTense === false
        ? timeDesc
        : localize("ui.components.relative_time." + tense, "time", timeDesc);
}


/***/ }),

/***/ "./src/common/dom/load_resource.ts":
/*!*****************************************!*\
  !*** ./src/common/dom/load_resource.ts ***!
  \*****************************************/
/*! exports provided: loadCSS, loadJS, loadImg, loadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCSS", function() { return loadCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadJS", function() { return loadJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImg", function() { return loadImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return loadModule; });
// Load a resource and get a promise when loading done.
// From: https://davidwalsh.name/javascript-loader
var _load = function (tag, url, type) {
    // This promise will be used by Promise.all to determine success or failure
    return new Promise(function (resolve, reject) {
        var element = document.createElement(tag);
        var attr = "src";
        var parent = "body";
        // Important success and error for the promise
        element.onload = function () { return resolve(url); };
        element.onerror = function () { return reject(url); };
        // Need to set different attributes depending on tag type
        switch (tag) {
            case "script":
                element.async = true;
                if (type) {
                    element.type = type;
                }
                break;
            case "link":
                element.type = "text/css";
                element.rel = "stylesheet";
                attr = "href";
                parent = "head";
        }
        // Inject into document to kick off loading
        element[attr] = url;
        document[parent].appendChild(element);
    });
};
var loadCSS = function (url) { return _load("link", url); };
var loadJS = function (url) { return _load("script", url); };
var loadImg = function (url) { return _load("img", url); };
var loadModule = function (url) { return _load("script", url, "module"); };


/***/ }),

/***/ "./src/common/dom/scroll-to-target.ts":
/*!********************************************!*\
  !*** ./src/common/dom/scroll-to-target.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollToTarget; });
/**
 * Scroll to a specific y coordinate.
 *
 * Copied from paper-scroll-header-panel.
 *
 * @method scroll
 * @param {number} top The coordinate to scroll to, along the y-axis.
 * @param {boolean} smooth true if the scroll position should be smoothly adjusted.
 */
function scrollToTarget(element, target) {
    // the scroll event will trigger _updateScrollState directly,
    // However, _updateScrollState relies on the previous `scrollTop` to update the states.
    // Calling _updateScrollState will ensure that the states are synced correctly.
    var top = 0;
    var scroller = target;
    var easingFn = function easeOutQuad(t, b, c, d) {
        /* eslint-disable no-param-reassign, space-infix-ops, no-mixed-operators */
        t /= d;
        return -c * t * (t - 2) + b;
        /* eslint-enable no-param-reassign, space-infix-ops, no-mixed-operators */
    };
    var animationId = Math.random();
    var duration = 200;
    var startTime = Date.now();
    var currentScrollTop = scroller.scrollTop;
    var deltaScrollTop = top - currentScrollTop;
    element._currentAnimationId = animationId;
    (function updateFrame() {
        var now = Date.now();
        var elapsedTime = now - startTime;
        if (elapsedTime > duration) {
            scroller.scrollTop = top;
        }
        else if (element._currentAnimationId === animationId) {
            scroller.scrollTop = easingFn(elapsedTime, currentScrollTop, deltaScrollTop, duration);
            requestAnimationFrame(updateFrame.bind(element));
        }
    }.call(element));
}


/***/ }),

/***/ "./src/common/dom/setup-leaflet-map.ts":
/*!*********************************************!*\
  !*** ./src/common/dom/setup-leaflet-map.ts ***!
  \*********************************************/
/*! exports provided: setupLeafletMap, createTileLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLeafletMap", function() { return setupLeafletMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTileLayer", function() { return createTileLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var setupLeafletMap = function (mapElement, darkMode) {
    if (darkMode === void 0) { darkMode = false; }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
        var Leaflet, map, style;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!mapElement.parentNode) {
                        throw new Error("Cannot setup Leaflet map on disconnected element");
                    }
                    return [4 /*yield*/, __webpack_require__.e(/*! import() | leaflet */ "vendors~leaflet").then(__webpack_require__.t.bind(null, /*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js", 7))];
                case 1:
                    Leaflet = (_a.sent());
                    Leaflet.Icon.Default.imagePath = "/static/images/leaflet/images/";
                    map = Leaflet.map(mapElement);
                    style = document.createElement("link");
                    style.setAttribute("href", "/static/images/leaflet/leaflet.css");
                    style.setAttribute("rel", "stylesheet");
                    mapElement.parentNode.appendChild(style);
                    map.setView([52.3731339, 4.8903147], 13);
                    createTileLayer(Leaflet, darkMode).addTo(map);
                    return [2 /*return*/, [map, Leaflet]];
            }
        });
    });
};
var createTileLayer = function (leaflet, darkMode) {
    return leaflet.tileLayer("https://{s}.basemaps.cartocdn.com/" + (darkMode ? "dark_all" : "light_all") + "/{z}/{x}/{y}" + (leaflet.Browser.retina ? "@2x.png" : ".png"), {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        minZoom: 0,
        maxZoom: 20,
    });
};


/***/ }),

/***/ "./src/common/entity/valid_entity_id.ts":
/*!**********************************************!*\
  !*** ./src/common/entity/valid_entity_id.ts ***!
  \**********************************************/
/*! exports provided: isValidEntityId, createValidEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEntityId", function() { return isValidEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValidEntityId", function() { return createValidEntityId; });
var validEntityId = /^(\w+)\.(\w+)$/;
var isValidEntityId = function (entityId) {
    return validEntityId.test(entityId);
};
var createValidEntityId = function (input) {
    return input
        .toLowerCase()
        .replace(/\s|\'/g, "_") // replace spaces and quotes with underscore
        .replace(/\W/g, "") // remove not allowed chars
        .replace(/_{2,}/g, "_") // replace multiple underscores with 1
        .replace(/_$/, "");
}; // remove underscores at the end


/***/ }),

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
var compare = function (a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};
var caseInsensitiveCompare = function (a, b) {
    return compare(a.toLowerCase(), b.toLowerCase());
};


/***/ }),

/***/ "./src/common/util/parse-aspect-ratio.ts":
/*!***********************************************!*\
  !*** ./src/common/util/parse-aspect-ratio.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseAspectRatio; });
// Handle 16x9, 16:9, 1.78x1, 1.78:1, 1.78
// Ignore everything else
var parseOrThrow = function (num) {
    var parsed = parseFloat(num);
    if (isNaN(parsed)) {
        throw new Error(num + " is not a number");
    }
    return parsed;
};
function parseAspectRatio(input) {
    if (!input) {
        return null;
    }
    try {
        if (input.endsWith("%")) {
            return { w: 100, h: parseOrThrow(input.substr(0, input.length - 1)) };
        }
        var arr = input.replace(":", "x").split("x");
        if (arr.length === 0) {
            return null;
        }
        return arr.length === 1
            ? { w: parseOrThrow(arr[0]), h: 1 }
            : { w: parseOrThrow(arr[0]), h: parseOrThrow(arr[1]) };
    }
    catch (err) {
        // Ignore the error
    }
    return null;
}


/***/ }),

/***/ "./src/common/util/render-status.ts":
/*!******************************************!*\
  !*** ./src/common/util/render-status.ts ***!
  \******************************************/
/*! exports provided: afterNextRender, nextRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterNextRender", function() { return afterNextRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextRender", function() { return nextRender; });
var afterNextRender = function (cb) {
    requestAnimationFrame(function () { return setTimeout(cb, 0); });
};
var nextRender = function () {
    return new Promise(function (resolve) {
        afterNextRender(resolve);
    });
};


/***/ }),

/***/ "./src/common/util/subscribe-one.ts":
/*!******************************************!*\
  !*** ./src/common/util/subscribe-one.ts ***!
  \******************************************/
/*! exports provided: subscribeOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeOne", function() { return subscribeOne; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var subscribeOne = function (conn, subscribe) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                var unsub = subscribe(conn, function (items) {
                    unsub();
                    resolve(items);
                });
            })];
    });
}); };


/***/ }),

/***/ "./src/components/buttons/ha-call-service-button.js":
/*!**********************************************************!*\
  !*** ./src/components/buttons/ha-call-service-button.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <ha-progress-button\n        id=\"progress\"\n        progress=\"[[progress]]\"\n        on-click=\"buttonTapped\"\n        ><slot></slot\n      ></ha-progress-button>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/*
 * @appliesMixin EventsMixin
 */

var HaCallServiceButton =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaCallServiceButton, _EventsMixin);

  function HaCallServiceButton() {
    _classCallCheck(this, HaCallServiceButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCallServiceButton).apply(this, arguments));
  }

  _createClass(HaCallServiceButton, [{
    key: "buttonTapped",
    value: function buttonTapped() {
      if (this.confirmation && !window.confirm(this.confirmation)) {
        return;
      }

      this.progress = true;
      var el = this;
      var eventData = {
        domain: this.domain,
        service: this.service,
        serviceData: this.serviceData
      };
      this.hass.callService(this.domain, this.service, this.serviceData).then(function () {
        el.progress = false;
        el.$.progress.actionSuccess();
        eventData.success = true;
      }, function () {
        el.progress = false;
        el.$.progress.actionError();
        eventData.success = false;
      }).then(function () {
        el.fire("hass-service-called", eventData);
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        progress: {
          type: Boolean,
          value: false
        },
        domain: {
          type: String
        },
        service: {
          type: String
        },
        serviceData: {
          type: Object,
          value: {}
        },
        confirmation: {
          type: String
        }
      };
    }
  }]);

  return HaCallServiceButton;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-call-service-button", HaCallServiceButton);

/***/ }),

/***/ "./src/components/ha-date-input.ts":
/*!*****************************************!*\
  !*** ./src/components/ha-date-input.ts ***!
  \*****************************************/
/*! exports provided: HaDateInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDateInput", function() { return HaDateInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");



var HaDateInput = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaDateInput, _super);
    function HaDateInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    Object.defineProperty(HaDateInput, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: block;\n        font-family: var(--paper-font-common-base_-_font-family);\n        -webkit-font-smoothing: var(\n          --paper-font-common-base_-_-webkit-font-smoothing\n        );\n      }\n\n      paper-input {\n        width: 30px;\n        text-align: center;\n        --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;\n        --paper-input-container-input_-_-moz-appearance: textfield;\n        --paper-input-container-shared-input-style_-_appearance: textfield;\n        --paper-input-container-input-webkit-spinner_-_-webkit-appearance: none;\n        --paper-input-container-input-webkit-spinner_-_margin: 0;\n        --paper-input-container-input-webkit-spinner_-_display: none;\n      }\n\n      paper-input#year {\n        width: 50px;\n      }\n\n      .date-input-wrap {\n        display: flex;\n        flex-direction: row;\n      }\n    "], ["\n      :host {\n        display: block;\n        font-family: var(--paper-font-common-base_-_font-family);\n        -webkit-font-smoothing: var(\n          --paper-font-common-base_-_-webkit-font-smoothing\n        );\n      }\n\n      paper-input {\n        width: 30px;\n        text-align: center;\n        --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;\n        --paper-input-container-input_-_-moz-appearance: textfield;\n        --paper-input-container-shared-input-style_-_appearance: textfield;\n        --paper-input-container-input-webkit-spinner_-_-webkit-appearance: none;\n        --paper-input-container-input-webkit-spinner_-_margin: 0;\n        --paper-input-container-input-webkit-spinner_-_display: none;\n      }\n\n      paper-input#year {\n        width: 50px;\n      }\n\n      .date-input-wrap {\n        display: flex;\n        flex-direction: row;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HaDateInput.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"date-input-wrap\">\n        <paper-input\n          id=\"year\"\n          type=\"number\"\n          .value=", "\n          @change=", "\n          maxlength=\"4\"\n          max=\"9999\"\n          min=\"0\"\n          .disabled=", "\n          no-label-float\n        >\n          <span suffix=\"\" slot=\"suffix\">-</span>\n        </paper-input>\n        <paper-input\n          id=\"month\"\n          type=\"number\"\n          .value=", "\n          @change=", "\n          maxlength=\"2\"\n          max=\"12\"\n          min=\"1\"\n          .disabled=", "\n          no-label-float\n        >\n          <span suffix=\"\" slot=\"suffix\">-</span>\n        </paper-input>\n        <paper-input\n          id=\"day\"\n          type=\"number\"\n          .value=", "\n          @change=", "\n          maxlength=\"2\"\n          max=\"31\"\n          min=\"1\"\n          .disabled=", "\n          no-label-float\n        >\n        </paper-input>\n      </div>\n    "], ["\n      <div class=\"date-input-wrap\">\n        <paper-input\n          id=\"year\"\n          type=\"number\"\n          .value=", "\n          @change=", "\n          maxlength=\"4\"\n          max=\"9999\"\n          min=\"0\"\n          .disabled=", "\n          no-label-float\n        >\n          <span suffix=\"\" slot=\"suffix\">-</span>\n        </paper-input>\n        <paper-input\n          id=\"month\"\n          type=\"number\"\n          .value=", "\n          @change=", "\n          maxlength=\"2\"\n          max=\"12\"\n          min=\"1\"\n          .disabled=", "\n          no-label-float\n        >\n          <span suffix=\"\" slot=\"suffix\">-</span>\n        </paper-input>\n        <paper-input\n          id=\"day\"\n          type=\"number\"\n          .value=", "\n          @change=", "\n          maxlength=\"2\"\n          max=\"31\"\n          min=\"1\"\n          .disabled=", "\n          no-label-float\n        >\n        </paper-input>\n      </div>\n    "])), this.year, this._formatYear, this.disabled, this.month, this._formatMonth, this.disabled, this.day, this._formatDay, this.disabled);
    };
    HaDateInput.prototype._formatYear = function () {
        var yearElement = this.shadowRoot.getElementById("year");
        this.year = yearElement.value;
    };
    HaDateInput.prototype._formatMonth = function () {
        var monthElement = this.shadowRoot.getElementById("month");
        this.month = ("0" + monthElement.value).slice(-2);
    };
    HaDateInput.prototype._formatDay = function () {
        var dayElement = this.shadowRoot.getElementById("day");
        this.day = ("0" + dayElement.value).slice(-2);
    };
    Object.defineProperty(HaDateInput.prototype, "value", {
        get: function () {
            return this.year + "-" + this.month + "-" + this.day;
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaDateInput.prototype, "year", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaDateInput.prototype, "month", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaDateInput.prototype, "day", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
    ], HaDateInput.prototype, "disabled", void 0);
    HaDateInput = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-date-input")
    ], HaDateInput);
    return HaDateInput;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/ha-paper-icon-button-arrow-next.ts":
/*!***********************************************************!*\
  !*** ./src/components/ha-paper-icon-button-arrow-next.ts ***!
  \***********************************************************/
/*! exports provided: HaPaperIconButtonArrowNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperIconButtonArrowNext", function() { return HaPaperIconButtonArrowNext; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");


var paperIconButtonClass = customElements.get("paper-icon-button");
var HaPaperIconButtonArrowNext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaPaperIconButtonArrowNext, _super);
    function HaPaperIconButtonArrowNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaPaperIconButtonArrowNext.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(function () {
            _this.icon =
                window.getComputedStyle(_this).direction === "ltr"
                    ? "hass:arrow-right"
                    : "hass:arrow-left";
        }, 100);
    };
    return HaPaperIconButtonArrowNext;
}(paperIconButtonClass));

customElements.define("ha-paper-icon-button-arrow-next", HaPaperIconButtonArrowNext);


/***/ }),

/***/ "./src/components/ha-relative-time.js":
/*!********************************************!*\
  !*** ./src/components/ha-relative-time.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/*
 * @appliesMixin LocalizeMixin
 */

var HaRelativeTime =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaRelativeTime, _LocalizeMixin);

  _createClass(HaRelativeTime, null, [{
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        datetime: {
          type: String,
          observer: "datetimeChanged"
        },
        datetimeObj: {
          type: Object,
          observer: "datetimeObjChanged"
        },
        parsedDateTime: Object
      };
    }
  }]);

  function HaRelativeTime() {
    var _this;

    _classCallCheck(this, HaRelativeTime);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HaRelativeTime).call(this));
    _this.updateRelative = _this.updateRelative.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HaRelativeTime, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaRelativeTime.prototype), "connectedCallback", this).call(this); // update every 60 seconds


      this.updateInterval = setInterval(this.updateRelative, 60000);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaRelativeTime.prototype), "disconnectedCallback", this).call(this);

      clearInterval(this.updateInterval);
    }
  }, {
    key: "datetimeChanged",
    value: function datetimeChanged(newVal) {
      this.parsedDateTime = newVal ? new Date(newVal) : null;
      this.updateRelative();
    }
  }, {
    key: "datetimeObjChanged",
    value: function datetimeObjChanged(newVal) {
      this.parsedDateTime = newVal;
      this.updateRelative();
    }
  }, {
    key: "updateRelative",
    value: function updateRelative() {
      var root = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this);

      if (!this.parsedDateTime) {
        root.innerHTML = this.localize("ui.components.relative_time.never");
      } else {
        root.innerHTML = Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__["default"])(this.parsedDateTime, this.localize);
      }
    }
  }]);

  return HaRelativeTime;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-relative-time", HaRelativeTime);

/***/ }),

/***/ "./src/data/alarm_control_panel.ts":
/*!*****************************************!*\
  !*** ./src/data/alarm_control_panel.ts ***!
  \*****************************************/
/*! exports provided: FORMAT_TEXT, FORMAT_NUMBER, callAlarmAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMAT_TEXT", function() { return FORMAT_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMAT_NUMBER", function() { return FORMAT_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAlarmAction", function() { return callAlarmAction; });
var FORMAT_TEXT = "text";
var FORMAT_NUMBER = "number";
var callAlarmAction = function (hass, entity, action, code) {
    hass.callService("alarm_control_panel", "alarm_" + action, {
        entity_id: entity,
        code: code,
    });
};


/***/ }),

/***/ "./src/data/area_registry.ts":
/*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
/*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaRegistryEntry", function() { return createAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAreaRegistryEntry", function() { return updateAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAreaRegistryEntry", function() { return deleteAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAreaRegistry", function() { return subscribeAreaRegistry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");




var createAreaRegistryEntry = function (hass, values) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/area_registry/create" }, values));
};
var updateAreaRegistryEntry = function (hass, areaId, updates) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/area_registry/update", area_id: areaId }, updates));
};
var deleteAreaRegistryEntry = function (hass, areaId) {
    return hass.callWS({
        type: "config/area_registry/delete",
        area_id: areaId,
    });
};
var fetchAreaRegistry = function (conn) {
    return conn
        .sendMessagePromise({
        type: "config/area_registry/list",
    })
        .then(function (areas) { return areas.sort(function (ent1, ent2) { return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_2__["compare"])(ent1.name, ent2.name); }); });
};
var subscribeAreaRegistryUpdates = function (conn, store) {
    return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function () {
        return fetchAreaRegistry(conn).then(function (areas) { return store.setState(areas, true); });
    }, 500, true), "area_registry_updated");
};
var subscribeAreaRegistry = function (conn, onChange) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["createCollection"])("_areaRegistry", fetchAreaRegistry, subscribeAreaRegistryUpdates, conn, onChange);
};


/***/ }),

/***/ "./src/data/device_registry.ts":
/*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
/*! exports provided: updateDeviceRegistryEntry, subscribeDeviceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceRegistryEntry", function() { return updateDeviceRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDeviceRegistry", function() { return subscribeDeviceRegistry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



var updateDeviceRegistryEntry = function (hass, deviceId, updates) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/device_registry/update", device_id: deviceId }, updates));
};
var fetchDeviceRegistry = function (conn) {
    return conn.sendMessagePromise({
        type: "config/device_registry/list",
    });
};
var subscribeDeviceRegistryUpdates = function (conn, store) {
    return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () {
        return fetchDeviceRegistry(conn).then(function (devices) {
            return store.setState(devices, true);
        });
    }, 500, true), "device_registry_updated");
};
var subscribeDeviceRegistry = function (conn, onChange) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);
};


/***/ }),

/***/ "./src/data/entity.ts":
/*!****************************!*\
  !*** ./src/data/entity.ts ***!
  \****************************/
/*! exports provided: UNAVAILABLE, ENTITY_COMPONENT_DOMAINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAVAILABLE", function() { return UNAVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITY_COMPONENT_DOMAINS", function() { return ENTITY_COMPONENT_DOMAINS; });
var UNAVAILABLE = "unavailable";
var ENTITY_COMPONENT_DOMAINS = [
    "air_quality",
    "alarm_control_panel",
    "alert",
    "automation",
    "binary_sensor",
    "calendar",
    "camera",
    "counter",
    "cover",
    "dominos",
    "fan",
    "geo_location",
    "group",
    "history_graph",
    "image_processing",
    "input_boolean",
    "input_datetime",
    "input_number",
    "input_select",
    "input_text",
    "light",
    "lock",
    "mailbox",
    "media_player",
    "person",
    "plant",
    "remember_the_milk",
    "remote",
    "scene",
    "script",
    "sensor",
    "switch",
    "timer",
    "utility_meter",
    "vacuum",
    "weather",
    "wink",
    "zha",
    "zwave",
];


/***/ }),

/***/ "./src/data/input_datetime.ts":
/*!************************************!*\
  !*** ./src/data/input_datetime.ts ***!
  \************************************/
/*! exports provided: setInputDateTimeValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputDateTimeValue", function() { return setInputDateTimeValue; });
var setInputDateTimeValue = function (hass, entityId, time, date) {
    if (time === void 0) { time = undefined; }
    if (date === void 0) { date = undefined; }
    var param = { entity_id: entityId, time: time, date: date };
    hass.callService(entityId.split(".", 1)[0], "set_datetime", param);
};


/***/ }),

/***/ "./src/data/input_text.ts":
/*!********************************!*\
  !*** ./src/data/input_text.ts ***!
  \********************************/
/*! exports provided: setValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return setValue; });
var setValue = function (hass, entity, value) {
    return hass.callService(entity.split(".", 1)[0], "set_value", {
        value: value,
        entity_id: entity,
    });
};


/***/ }),

/***/ "./src/data/light.ts":
/*!***************************!*\
  !*** ./src/data/light.ts ***!
  \***************************/
/*! exports provided: SUPPORT_BRIGHTNESS, SUPPORT_COLOR_TEMP, SUPPORT_EFFECT, SUPPORT_FLASH, SUPPORT_COLOR, SUPPORT_TRANSITION, SUPPORT_WHITE_VALUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_BRIGHTNESS", function() { return SUPPORT_BRIGHTNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_COLOR_TEMP", function() { return SUPPORT_COLOR_TEMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_EFFECT", function() { return SUPPORT_EFFECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_FLASH", function() { return SUPPORT_FLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_COLOR", function() { return SUPPORT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_TRANSITION", function() { return SUPPORT_TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_WHITE_VALUE", function() { return SUPPORT_WHITE_VALUE; });
var SUPPORT_BRIGHTNESS = 1;
var SUPPORT_COLOR_TEMP = 2;
var SUPPORT_EFFECT = 4;
var SUPPORT_FLASH = 8;
var SUPPORT_COLOR = 16;
var SUPPORT_TRANSITION = 32;
var SUPPORT_WHITE_VALUE = 128;


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

/***/ "./src/data/shopping-list.ts":
/*!***********************************!*\
  !*** ./src/data/shopping-list.ts ***!
  \***********************************/
/*! exports provided: fetchItems, updateItem, clearItems, addItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchItems", function() { return fetchItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearItems", function() { return clearItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var fetchItems = function (hass) {
    return hass.callWS({
        type: "shopping_list/items",
    });
};
var updateItem = function (hass, itemId, item) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "shopping_list/items/update", item_id: itemId }, item));
};
var clearItems = function (hass) {
    return hass.callWS({
        type: "shopping_list/items/clear",
    });
};
var addItem = function (hass, name) {
    return hass.callWS({
        type: "shopping_list/items/add",
        name: name,
    });
};


/***/ }),

/***/ "./src/data/ws-templates.ts":
/*!**********************************!*\
  !*** ./src/data/ws-templates.ts ***!
  \**********************************/
/*! exports provided: subscribeRenderTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeRenderTemplate", function() { return subscribeRenderTemplate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var subscribeRenderTemplate = function (conn, onChange, params) {
    return conn.subscribeMessage(function (msg) { return onChange(msg.result); }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "render_template" }, params));
};


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-alarm-panel-card.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-alarm-panel-card.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_label_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-label-badge */ "./src/components/ha-label-badge.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _data_alarm_control_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/alarm_control_panel */ "./src/data/alarm_control_panel.ts");







var ICONS = {
    armed_away: "hass:shield-lock",
    armed_custom_bypass: "hass:security",
    armed_home: "hass:shield-home",
    armed_night: "hass:shield-home",
    disarmed: "hass:shield-check",
    pending: "hass:shield-outline",
    triggered: "hass:bell-ring",
};
var BUTTONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "clear"];
var HuiAlarmPanelCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiAlarmPanelCard, _super);
    function HuiAlarmPanelCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiAlarmPanelCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-alarm-panel-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-alarm-panel-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-alarm-panel-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-alarm-panel-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-alarm-panel-card-editor")];
                }
            });
        });
    };
    HuiAlarmPanelCard.getStubConfig = function () {
        return { states: ["arm_home", "arm_away"], entity: "" };
    };
    HuiAlarmPanelCard.prototype.getCardSize = function () {
        if (!this._config || !this.hass) {
            return 0;
        }
        var stateObj = this.hass.states[this._config.entity];
        return !stateObj || stateObj.attributes.code_format !== _data_alarm_control_panel__WEBPACK_IMPORTED_MODULE_6__["FORMAT_NUMBER"]
            ? 3
            : 8;
    };
    HuiAlarmPanelCard.prototype.setConfig = function (config) {
        if (!config ||
            !config.entity ||
            config.entity.split(".")[0] !== "alarm_control_panel") {
            throw new Error("Invalid card configuration");
        }
        var defaults = {
            states: ["arm_away", "arm_home"],
        };
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaults), config);
        this._code = "";
    };
    HuiAlarmPanelCard.prototype.shouldUpdate = function (changedProps) {
        if (changedProps.has("_config") || changedProps.has("_code")) {
            return true;
        }
        var oldHass = changedProps.get("hass");
        if (oldHass) {
            return (oldHass.states[this._config.entity] !==
                this.hass.states[this._config.entity]);
        }
        return true;
    };
    HuiAlarmPanelCard.prototype.render = function () {
        var _a;
        var _this = this;
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card\n        .header=\"", "\"\n      >\n        <ha-label-badge\n          class=\"", "\"\n          .icon=\"", "\"\n          .label=\"", "\"\n        ></ha-label-badge>\n        <div id=\"armActions\" class=\"actions\">\n          ", "\n        </div>\n        ", "\n        ", "\n      </ha-card>\n    "], ["\n      <ha-card\n        .header=\"",
            "\"\n      >\n        <ha-label-badge\n          class=\"", "\"\n          .icon=\"", "\"\n          .label=\"", "\"\n        ></ha-label-badge>\n        <div id=\"armActions\" class=\"actions\">\n          ",
            "\n        </div>\n        ",
            "\n        ",
            "\n      </ha-card>\n    "])), this._config.name ||
            stateObj.attributes.friendly_name ||
            this._label(stateObj.state), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])((_a = {}, _a[stateObj.state] = true, _a)), ICONS[stateObj.state] || "hass:shield-outline", this._stateIconLabel(stateObj.state), (stateObj.state === "disarmed"
            ? this._config.states
            : ["disarm"]).map(function (state) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n                outlined\n              >\n                ", "\n              </mwc-button>\n            "], ["\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n                outlined\n              >\n                ", "\n              </mwc-button>\n            "])), state, _this._handleActionClick, _this._label(state));
        }), !stateObj.attributes.code_format
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-input\n                id=\"alarmCode\"\n                label=\"Alarm Code\"\n                type=\"password\"\n                .value=\"", "\"\n              ></paper-input>\n            "], ["\n              <paper-input\n                id=\"alarmCode\"\n                label=\"Alarm Code\"\n                type=\"password\"\n                .value=\"", "\"\n              ></paper-input>\n            "])), this._code), stateObj.attributes.code_format !== _data_alarm_control_panel__WEBPACK_IMPORTED_MODULE_6__["FORMAT_NUMBER"]
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div id=\"keypad\">\n                ", "\n              </div>\n            "], ["\n              <div id=\"keypad\">\n                ",
            "\n              </div>\n            "])), BUTTONS.map(function (value) {
            return value === ""
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <mwc-button disabled></mwc-button>\n                      "], ["\n                        <mwc-button disabled></mwc-button>\n                      "]))) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <mwc-button\n                          .value=\"", "\"\n                          @click=\"", "\"\n                          dense\n                        >\n                          ", "\n                        </mwc-button>\n                      "], ["\n                        <mwc-button\n                          .value=\"", "\"\n                          @click=\"", "\"\n                          dense\n                        >\n                          ",
                "\n                        </mwc-button>\n                      "])), value, _this._handlePadClick, value === "clear"
                ? _this._label("clear_code")
                : value);
        })));
    };
    HuiAlarmPanelCard.prototype._stateIconLabel = function (state) {
        var stateLabel = state.split("_").pop();
        return stateLabel === "disarmed" ||
            stateLabel === "triggered" ||
            !stateLabel
            ? ""
            : stateLabel;
    };
    HuiAlarmPanelCard.prototype._label = function (state) {
        return (this.hass.localize("state.alarm_control_panel." + state) ||
            this.hass.localize("ui.card.alarm_control_panel." + state));
    };
    HuiAlarmPanelCard.prototype._handlePadClick = function (e) {
        var val = e.currentTarget.value;
        this._code = val === "clear" ? "" : this._code + val;
    };
    HuiAlarmPanelCard.prototype._handleActionClick = function (e) {
        var input = this.shadowRoot.querySelector("#alarmCode");
        var code = this._code ||
            (input && input.value && input.value.length > 0 ? input.value : "");
        Object(_data_alarm_control_panel__WEBPACK_IMPORTED_MODULE_6__["callAlarmAction"])(this.hass, this._config.entity, e.currentTarget.action, code);
        this._code = "";
    };
    Object.defineProperty(HuiAlarmPanelCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-card {\n        padding-bottom: 16px;\n        position: relative;\n        --alarm-color-disarmed: var(--label-badge-green);\n        --alarm-color-pending: var(--label-badge-yellow);\n        --alarm-color-triggered: var(--label-badge-red);\n        --alarm-color-armed: var(--label-badge-red);\n        --alarm-color-autoarm: rgba(0, 153, 255, 0.1);\n        --alarm-state-color: var(--alarm-color-armed);\n        --base-unit: 15px;\n        font-size: calc(var(--base-unit));\n      }\n\n      ha-label-badge {\n        --ha-label-badge-color: var(--alarm-state-color);\n        --label-badge-text-color: var(--alarm-state-color);\n        --label-badge-background-color: var(--paper-card-background-color);\n        color: var(--alarm-state-color);\n        position: absolute;\n        right: 12px;\n        top: 12px;\n      }\n\n      .disarmed {\n        --alarm-state-color: var(--alarm-color-disarmed);\n      }\n\n      .triggered {\n        --alarm-state-color: var(--alarm-color-triggered);\n        animation: pulse 1s infinite;\n      }\n\n      .arming {\n        --alarm-state-color: var(--alarm-color-pending);\n        animation: pulse 1s infinite;\n      }\n\n      .pending {\n        --alarm-state-color: var(--alarm-color-pending);\n        animation: pulse 1s infinite;\n      }\n\n      @keyframes pulse {\n        0% {\n          --ha-label-badge-color: var(--alarm-state-color);\n        }\n        100% {\n          --ha-label-badge-color: rgba(255, 153, 0, 0.3);\n        }\n      }\n\n      paper-input {\n        margin: 0 auto 8px;\n        max-width: 150px;\n        font-size: calc(var(--base-unit));\n        text-align: center;\n      }\n\n      .state {\n        margin-left: 16px;\n        font-size: calc(var(--base-unit) * 0.9);\n        position: relative;\n        bottom: 16px;\n        color: var(--alarm-state-color);\n        animation: none;\n      }\n\n      #keypad {\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        margin: auto;\n        width: 300px;\n      }\n\n      #keypad mwc-button {\n        margin-bottom: 5%;\n        width: 30%;\n        padding: calc(var(--base-unit));\n        font-size: calc(var(--base-unit) * 1.1);\n        box-sizing: border-box;\n      }\n\n      .actions {\n        margin: 0 8px;\n        padding-top: 20px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        font-size: calc(var(--base-unit) * 1);\n      }\n\n      .actions mwc-button {\n        min-width: calc(var(--base-unit) * 9);\n        margin: 0 4px 4px;\n      }\n\n      mwc-button#disarm {\n        color: var(--google-red-500);\n      }\n    "], ["\n      ha-card {\n        padding-bottom: 16px;\n        position: relative;\n        --alarm-color-disarmed: var(--label-badge-green);\n        --alarm-color-pending: var(--label-badge-yellow);\n        --alarm-color-triggered: var(--label-badge-red);\n        --alarm-color-armed: var(--label-badge-red);\n        --alarm-color-autoarm: rgba(0, 153, 255, 0.1);\n        --alarm-state-color: var(--alarm-color-armed);\n        --base-unit: 15px;\n        font-size: calc(var(--base-unit));\n      }\n\n      ha-label-badge {\n        --ha-label-badge-color: var(--alarm-state-color);\n        --label-badge-text-color: var(--alarm-state-color);\n        --label-badge-background-color: var(--paper-card-background-color);\n        color: var(--alarm-state-color);\n        position: absolute;\n        right: 12px;\n        top: 12px;\n      }\n\n      .disarmed {\n        --alarm-state-color: var(--alarm-color-disarmed);\n      }\n\n      .triggered {\n        --alarm-state-color: var(--alarm-color-triggered);\n        animation: pulse 1s infinite;\n      }\n\n      .arming {\n        --alarm-state-color: var(--alarm-color-pending);\n        animation: pulse 1s infinite;\n      }\n\n      .pending {\n        --alarm-state-color: var(--alarm-color-pending);\n        animation: pulse 1s infinite;\n      }\n\n      @keyframes pulse {\n        0% {\n          --ha-label-badge-color: var(--alarm-state-color);\n        }\n        100% {\n          --ha-label-badge-color: rgba(255, 153, 0, 0.3);\n        }\n      }\n\n      paper-input {\n        margin: 0 auto 8px;\n        max-width: 150px;\n        font-size: calc(var(--base-unit));\n        text-align: center;\n      }\n\n      .state {\n        margin-left: 16px;\n        font-size: calc(var(--base-unit) * 0.9);\n        position: relative;\n        bottom: 16px;\n        color: var(--alarm-state-color);\n        animation: none;\n      }\n\n      #keypad {\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        margin: auto;\n        width: 300px;\n      }\n\n      #keypad mwc-button {\n        margin-bottom: 5%;\n        width: 30%;\n        padding: calc(var(--base-unit));\n        font-size: calc(var(--base-unit) * 1.1);\n        box-sizing: border-box;\n      }\n\n      .actions {\n        margin: 0 8px;\n        padding-top: 20px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        font-size: calc(var(--base-unit) * 1);\n      }\n\n      .actions mwc-button {\n        min-width: calc(var(--base-unit) * 9);\n        margin: 0 4px 4px;\n      }\n\n      mwc-button#disarm {\n        color: var(--google-red-500);\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiAlarmPanelCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiAlarmPanelCard.prototype, "_config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiAlarmPanelCard.prototype, "_code", void 0);
    HuiAlarmPanelCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-alarm-panel-card")
    ], HuiAlarmPanelCard);
    return HuiAlarmPanelCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-conditional-card.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-conditional-card.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts");
/* harmony import */ var _common_compute_card_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/compute-card-size */ "./src/panels/lovelace/common/compute-card-size.ts");
/* harmony import */ var _lovelace_common_validate_condition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lovelace/common/validate-condition */ "./src/panels/lovelace/common/validate-condition.ts");




var HuiConditionalCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiConditionalCard, _super);
    function HuiConditionalCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiConditionalCard.prototype.setConfig = function (config) {
        if (!config.card ||
            !config.conditions ||
            !Array.isArray(config.conditions) ||
            !Object(_lovelace_common_validate_condition__WEBPACK_IMPORTED_MODULE_3__["validateConditionalConfig"])(config.conditions)) {
            throw new Error("Error in card configuration.");
        }
        if (this._card && this._card.parentElement) {
            this.removeChild(this._card);
        }
        this._config = config;
        this._card = Object(_common_create_card_element__WEBPACK_IMPORTED_MODULE_1__["createCardElement"])(config.card);
        this.update();
    };
    Object.defineProperty(HuiConditionalCard.prototype, "hass", {
        set: function (hass) {
            this._hass = hass;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    HuiConditionalCard.prototype.getCardSize = function () {
        return Object(_common_compute_card_size__WEBPACK_IMPORTED_MODULE_2__["computeCardSize"])(this._card);
    };
    HuiConditionalCard.prototype.update = function () {
        if (!this._card || !this._hass) {
            return;
        }
        var visible = this._config && Object(_lovelace_common_validate_condition__WEBPACK_IMPORTED_MODULE_3__["checkConditionsMet"])(this._config.conditions, this._hass);
        if (visible) {
            this._card.hass = this._hass;
            if (!this._card.parentElement) {
                this.appendChild(this._card);
            }
        }
        else if (this._card.parentElement) {
            this.removeChild(this._card);
        }
        // This will hide the complete card so it won't get styled by parent
        this.style.setProperty("display", visible ? "" : "none");
    };
    return HuiConditionalCard;
}(HTMLElement));
customElements.define("hui-conditional-card", HuiConditionalCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-entities-card.ts":
/*!********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-entities-card.ts ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_hui_entities_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-entities-toggle */ "./src/panels/lovelace/components/hui-entities-toggle.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var _common_create_row_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/create-row-element */ "./src/panels/lovelace/common/create-row-element.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");










var HuiEntitiesCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiEntitiesCard, _super);
    function HuiEntitiesCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiEntitiesCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-entities-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-entities-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-entities-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-entities-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-entities-card-editor")];
                }
            });
        });
    };
    HuiEntitiesCard.getStubConfig = function () {
        return { entities: [] };
    };
    Object.defineProperty(HuiEntitiesCard.prototype, "hass", {
        set: function (hass) {
            this._hass = hass;
            this.shadowRoot.querySelectorAll("#states > div > *").forEach(function (element) {
                element.hass = hass;
            });
            var entitiesToggle = this.shadowRoot.querySelector("hui-entities-toggle");
            if (entitiesToggle) {
                entitiesToggle.hass = hass;
            }
        },
        enumerable: true,
        configurable: true
    });
    HuiEntitiesCard.prototype.getCardSize = function () {
        if (!this._config) {
            return 0;
        }
        // +1 for the header
        return (this._config.title ? 1 : 0) + this._config.entities.length;
    };
    HuiEntitiesCard.prototype.setConfig = function (config) {
        var entities = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_6__["processConfigEntities"])(config.entities);
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ theme: "default" }, config);
        this._configEntities = entities;
    };
    HuiEntitiesCard.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (this._hass && this._config) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_9__["default"])(this, this._hass.themes, this._config.theme);
        }
    };
    HuiEntitiesCard.prototype.render = function () {
        var _this = this;
        if (!this._config || !this._hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var _a = this._config, show_header_toggle = _a.show_header_toggle, title = _a.title;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card>\n        ", "\n        <div id=\"states\" class=\"card-content\">\n          ", "\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card>\n        ",
            "\n        <div id=\"states\" class=\"card-content\">\n          ",
            "\n        </div>\n      </ha-card>\n    "])), !title && !show_header_toggle
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"card-header\">\n                <div class=\"name\">", "</div>\n                ", "\n              </div>\n            "], ["\n              <div class=\"card-header\">\n                <div class=\"name\">", "</div>\n                ",
            "\n              </div>\n            "])), title, show_header_toggle === false
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <hui-entities-toggle\n                        .hass=\"", "\"\n                        .entities=\"", "\"\n                      ></hui-entities-toggle>\n                    "], ["\n                      <hui-entities-toggle\n                        .hass=\"", "\"\n                        .entities=\"",
            "\"\n                      ></hui-entities-toggle>\n                    "])), this._hass, this._configEntities.map(function (conf) { return conf.entity; }))), this._configEntities.map(function (entityConf) {
            return _this.renderEntity(entityConf);
        }));
    };
    Object.defineProperty(HuiEntitiesCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .card-header {\n        display: flex;\n        justify-content: space-between;\n      }\n\n      .card-header .name {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .card-header hui-entities-toggle {\n        margin: -4px 0;\n      }\n\n      #states > * {\n        margin: 8px 0;\n      }\n\n      #states > div > * {\n        overflow: hidden;\n      }\n\n      .state-card-dialog {\n        cursor: pointer;\n      }\n    "], ["\n      .card-header {\n        display: flex;\n        justify-content: space-between;\n      }\n\n      .card-header .name {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .card-header hui-entities-toggle {\n        margin: -4px 0;\n      }\n\n      #states > * {\n        margin: 8px 0;\n      }\n\n      #states > div > * {\n        overflow: hidden;\n      }\n\n      .state-card-dialog {\n        cursor: pointer;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiEntitiesCard.prototype.renderEntity = function (entityConf) {
        var _this = this;
        var element = Object(_common_create_row_element__WEBPACK_IMPORTED_MODULE_7__["createRowElement"])(entityConf);
        if (this._hass) {
            element.hass = this._hass;
        }
        if (entityConf.entity &&
            !_common_const__WEBPACK_IMPORTED_MODULE_5__["DOMAINS_HIDE_MORE_INFO"].includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_8__["computeDomain"])(entityConf.entity))) {
            element.classList.add("state-card-dialog");
            element.addEventListener("click", function () { return _this._handleClick(entityConf); });
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div>", "</div>\n    "], ["\n      <div>", "</div>\n    "])), element);
    };
    HuiEntitiesCard.prototype._handleClick = function (entityConf) {
        var entityId = entityConf.entity;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "hass-more-info", { entityId: entityId });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEntitiesCard.prototype, "_config", void 0);
    HuiEntitiesCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-entities-card")
    ], HuiEntitiesCard);
    return HuiEntitiesCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-entity-button-card.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-entity-button-card.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var _material_mwc_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-ripple */ "./node_modules/@material/mwc-ripple/mwc-ripple.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");















var HuiEntityButtonCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiEntityButtonCard, _super);
    function HuiEntityButtonCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiEntityButtonCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-entity-button-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e(10), __webpack_require__.e("hui-entity-button-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-entity-button-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-entity-button-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-entity-button-card-editor")];
                }
            });
        });
    };
    HuiEntityButtonCard.getStubConfig = function () {
        return {
            tap_action: { action: "toggle" },
            hold_action: { action: "more-info" },
            show_icon: true,
            show_name: true,
        };
    };
    HuiEntityButtonCard.prototype.getCardSize = function () {
        return 2;
    };
    HuiEntityButtonCard.prototype.setConfig = function (config) {
        if (!Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_6__["isValidEntityId"])(config.entity)) {
            throw new Error("Invalid Entity");
        }
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ theme: "default", hold_action: { action: "more-info" }, show_icon: true, show_name: true }, config);
        if (_common_const__WEBPACK_IMPORTED_MODULE_14__["DOMAINS_TOGGLE"].has(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_11__["computeDomain"])(config.entity))) {
            this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ tap_action: {
                    action: "toggle",
                } }, this._config);
        }
        else {
            this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ tap_action: {
                    action: "more-info",
                } }, this._config);
        }
    };
    HuiEntityButtonCard.prototype.shouldUpdate = function (changedProps) {
        if (changedProps.has("_config")) {
            return true;
        }
        var oldHass = changedProps.get("hass");
        if (oldHass) {
            return (oldHass.states[this._config.entity] !==
                this.hass.states[this._config.entity]);
        }
        return true;
    };
    HuiEntityButtonCard.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n      >\n        ", "\n        ", "\n        <mwc-ripple></mwc-ripple>\n      </ha-card>\n    "], ["\n      <ha-card\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n      >\n        ",
            "\n        ",
            "\n        <mwc-ripple></mwc-ripple>\n      </ha-card>\n    "])), this._handleTap, this._handleHold, Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_12__["longPress"])(), this._config.show_icon
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-icon\n                data-domain=\"", "\"\n                data-state=\"", "\"\n                .icon=\"", "\"\n                style=\"", "\"\n              ></ha-icon>\n            "], ["\n              <ha-icon\n                data-domain=\"", "\"\n                data-state=\"", "\"\n                .icon=\"", "\"\n                style=\"",
                "\"\n              ></ha-icon>\n            "])), Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["computeStateDomain"])(stateObj), stateObj.state, this._config.icon || Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_7__["stateIcon"])(stateObj), Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__["styleMap"])({
                filter: this._computeBrightness(stateObj),
                color: this._computeColor(stateObj),
                height: this._config.icon_height
                    ? this._config.icon_height
                    : "auto",
            })) : "", this._config.show_name
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <span>\n                ", "\n              </span>\n            "], ["\n              <span>\n                ", "\n              </span>\n            "])), this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(stateObj)) : "");
    };
    HuiEntityButtonCard.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (!this._config || !this.hass) {
            return;
        }
        var oldHass = changedProps.get("hass");
        if (!oldHass || oldHass.themes !== this.hass.themes) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_10__["default"])(this, this.hass.themes, this._config.theme);
        }
    };
    Object.defineProperty(HuiEntityButtonCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-card {\n        cursor: pointer;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n        padding: 4% 0;\n        font-size: 1.2rem;\n      }\n\n      ha-icon {\n        width: 40%;\n        height: auto;\n        color: var(--paper-item-icon-color, #44739e);\n      }\n\n      ha-icon[data-domain=\"light\"][data-state=\"on\"],\n      ha-icon[data-domain=\"switch\"][data-state=\"on\"],\n      ha-icon[data-domain=\"binary_sensor\"][data-state=\"on\"],\n      ha-icon[data-domain=\"fan\"][data-state=\"on\"],\n      ha-icon[data-domain=\"sun\"][data-state=\"above_horizon\"] {\n        color: var(--paper-item-icon-active-color, #fdd835);\n      }\n\n      ha-icon[data-state=\"unavailable\"] {\n        color: var(--state-icon-unavailable-color);\n      }\n    "], ["\n      ha-card {\n        cursor: pointer;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n        padding: 4% 0;\n        font-size: 1.2rem;\n      }\n\n      ha-icon {\n        width: 40%;\n        height: auto;\n        color: var(--paper-item-icon-color, #44739e);\n      }\n\n      ha-icon[data-domain=\"light\"][data-state=\"on\"],\n      ha-icon[data-domain=\"switch\"][data-state=\"on\"],\n      ha-icon[data-domain=\"binary_sensor\"][data-state=\"on\"],\n      ha-icon[data-domain=\"fan\"][data-state=\"on\"],\n      ha-icon[data-domain=\"sun\"][data-state=\"above_horizon\"] {\n        color: var(--paper-item-icon-active-color, #fdd835);\n      }\n\n      ha-icon[data-state=\"unavailable\"] {\n        color: var(--state-icon-unavailable-color);\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiEntityButtonCard.prototype._computeBrightness = function (stateObj) {
        if (!stateObj.attributes.brightness) {
            return "";
        }
        var brightness = stateObj.attributes.brightness;
        return "brightness(" + (brightness + 245) / 5 + "%)";
    };
    HuiEntityButtonCard.prototype._computeColor = function (stateObj) {
        if (!stateObj.attributes.hs_color) {
            return "";
        }
        var _a = stateObj.attributes.hs_color, hue = _a[0], sat = _a[1];
        if (sat <= 10) {
            return "";
        }
        return "hsl(" + hue + ", 100%, " + (100 - sat / 2) + "%)";
    };
    HuiEntityButtonCard.prototype._handleTap = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_13__["handleClick"])(this, this.hass, this._config, false);
    };
    HuiEntityButtonCard.prototype._handleHold = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_13__["handleClick"])(this, this.hass, this._config, true);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEntityButtonCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEntityButtonCard.prototype, "_config", void 0);
    HuiEntityButtonCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-entity-button-card")
    ], HuiEntityButtonCard);
    return HuiEntityButtonCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-entity-filter-card.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-entity-filter-card.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var _common_evaluate_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/evaluate-filter */ "./src/panels/lovelace/common/evaluate-filter.ts");




var EntityFilterCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EntityFilterCard, _super);
    function EntityFilterCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntityFilterCard.prototype.getCardSize = function () {
        return this._element ? this._element.getCardSize() : 1;
    };
    EntityFilterCard.prototype.setConfig = function (config) {
        if (!config.entities || !Array.isArray(config.entities)) {
            throw new Error("entities must be specified.");
        }
        if (!(config.state_filter && Array.isArray(config.state_filter)) &&
            !config.entities.every(function (entity) {
                return typeof entity === "object" &&
                    entity.state_filter &&
                    Array.isArray(entity.state_filter);
            })) {
            throw new Error("Incorrect filter config.");
        }
        this._config = config;
        this._configEntities = undefined;
        this._baseCardConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "entities", entities: [] }, this._config.card);
        if (this.lastChild) {
            this.removeChild(this.lastChild);
            this._element = undefined;
        }
    };
    Object.defineProperty(EntityFilterCard.prototype, "hass", {
        set: function (hass) {
            var _this = this;
            if (!hass || !this._config) {
                return;
            }
            if (!this.haveEntitiesChanged(hass)) {
                this._hass = hass;
                return;
            }
            this._hass = hass;
            if (!this._configEntities) {
                this._configEntities = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_2__["processConfigEntities"])(this._config.entities);
            }
            var entitiesList = this._configEntities.filter(function (entityConf) {
                var stateObj = hass.states[entityConf.entity];
                if (!stateObj) {
                    return false;
                }
                if (entityConf.state_filter) {
                    for (var _i = 0, _a = entityConf.state_filter; _i < _a.length; _i++) {
                        var filter = _a[_i];
                        if (Object(_common_evaluate_filter__WEBPACK_IMPORTED_MODULE_3__["evaluateFilter"])(stateObj, filter)) {
                            return true;
                        }
                    }
                }
                else {
                    for (var _b = 0, _c = _this._config.state_filter; _b < _c.length; _b++) {
                        var filter = _c[_b];
                        if (Object(_common_evaluate_filter__WEBPACK_IMPORTED_MODULE_3__["evaluateFilter"])(stateObj, filter)) {
                            return true;
                        }
                    }
                }
                return false;
            });
            if (entitiesList.length === 0 && this._config.show_empty === false) {
                this.style.display = "none";
                return;
            }
            var element = this._cardElement();
            if (!element) {
                return;
            }
            if (element.tagName !== "HUI-ERROR-CARD") {
                var isSame = this._oldEntities &&
                    entitiesList.length === this._oldEntities.length &&
                    entitiesList.every(function (entity, idx) { return entity === _this._oldEntities[idx]; });
                if (!isSame) {
                    this._oldEntities = entitiesList;
                    element.setConfig(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._baseCardConfig), { entities: entitiesList }));
                }
                element.isPanel = this.isPanel;
                element.hass = hass;
            }
            // Attach element if it has never been attached.
            if (!this.lastChild) {
                this.appendChild(element);
            }
            this.style.display = "block";
        },
        enumerable: true,
        configurable: true
    });
    EntityFilterCard.prototype.haveEntitiesChanged = function (hass) {
        if (!this._hass) {
            return true;
        }
        if (!this._configEntities) {
            return true;
        }
        for (var _i = 0, _a = this._configEntities; _i < _a.length; _i++) {
            var config = _a[_i];
            if (this._hass.states[config.entity] !== hass.states[config.entity] ||
                this._hass.localize !== hass.localize) {
                return true;
            }
        }
        return false;
    };
    EntityFilterCard.prototype._cardElement = function () {
        if (!this._element && this._config) {
            var element = Object(_common_create_card_element__WEBPACK_IMPORTED_MODULE_1__["createCardElement"])(this._baseCardConfig);
            this._element = element;
        }
        return this._element;
    };
    return EntityFilterCard;
}(HTMLElement));
customElements.define("hui-entity-filter-card", EntityFilterCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-error-card.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-error-card.ts ***!
  \*****************************************************/
/*! exports provided: createErrorCardElement, createErrorCardConfig, HuiErrorCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErrorCardElement", function() { return createErrorCardElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErrorCardConfig", function() { return createErrorCardConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiErrorCard", function() { return HuiErrorCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


var createErrorCardElement = function (config) {
    var el = document.createElement("hui-error-card");
    el.setConfig(config);
    return el;
};
var createErrorCardConfig = function (error, origConfig) { return ({
    type: "error",
    error: error,
    origConfig: origConfig,
}); };
var HuiErrorCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiErrorCard, _super);
    function HuiErrorCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiErrorCard.prototype.getCardSize = function () {
        return 4;
    };
    HuiErrorCard.prototype.setConfig = function (config) {
        this._config = config;
    };
    HuiErrorCard.prototype.render = function () {
        if (!this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <pre>", "</pre>\n    "], ["\n      ", "\n      <pre>", "</pre>\n    "])), this._config.error, this._toStr(this._config.origConfig));
    };
    Object.defineProperty(HuiErrorCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: block;\n        background-color: #ef5350;\n        color: white;\n        padding: 8px;\n        font-weight: 500;\n        user-select: text;\n        cursor: default;\n      }\n    "], ["\n      :host {\n        display: block;\n        background-color: #ef5350;\n        color: white;\n        padding: 8px;\n        font-weight: 500;\n        user-select: text;\n        cursor: default;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiErrorCard.prototype._toStr = function (config) {
        return JSON.stringify(config, null, 2);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiErrorCard.prototype, "_config", void 0);
    HuiErrorCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-error-card")
    ], HuiErrorCard);
    return HuiErrorCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-gauge-card.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-gauge-card.ts ***!
  \*****************************************************/
/*! exports provided: severityMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "severityMap", function() { return severityMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");










var severityMap = {
    red: "var(--label-badge-red)",
    green: "var(--label-badge-green)",
    yellow: "var(--label-badge-yellow)",
    normal: "var(--label-badge-blue)",
};
var HuiGaugeCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiGaugeCard, _super);
    function HuiGaugeCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._baseUnit = "50px";
        return _this;
    }
    HuiGaugeCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-gauge-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-gauge-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-gauge-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-gauge-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-gauge-card-editor")];
                }
            });
        });
    };
    HuiGaugeCard.getStubConfig = function () {
        return { entity: "" };
    };
    HuiGaugeCard.prototype.getCardSize = function () {
        return 2;
    };
    HuiGaugeCard.prototype.setConfig = function (config) {
        if (!config || !config.entity) {
            throw new Error("Invalid card configuration");
        }
        if (!Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_5__["isValidEntityId"])(config.entity)) {
            throw new Error("Invalid Entity");
        }
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ min: 0, max: 100, theme: "default" }, config);
    };
    HuiGaugeCard.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this._setBaseUnit();
    };
    HuiGaugeCard.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        var state = Number(stateObj.state);
        if (isNaN(state)) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card\n        @click=\"", "\"\n        style=", "\n      >\n        <div class=\"container\">\n          <div class=\"gauge-a\"></div>\n          <div class=\"gauge-b\"></div>\n          <div\n            class=\"gauge-c\"\n            style=", "\n          ></div>\n          <div class=\"gauge-data\">\n            <div id=\"percent\">\n              ", "\n              ", "\n            </div>\n            <div id=\"name\">\n              ", "\n            </div>\n          </div>\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card\n        @click=\"", "\"\n        style=",
            "\n      >\n        <div class=\"container\">\n          <div class=\"gauge-a\"></div>\n          <div class=\"gauge-b\"></div>\n          <div\n            class=\"gauge-c\"\n            style=",
            "\n          ></div>\n          <div class=\"gauge-data\">\n            <div id=\"percent\">\n              ", "\n              ",
            "\n            </div>\n            <div id=\"name\">\n              ", "\n            </div>\n          </div>\n        </div>\n      </ha-card>\n    "])), this._handleClick, Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__["styleMap"])({
            "--base-unit": this._baseUnit,
        }), Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__["styleMap"])({
            transform: "rotate(" + this._translateTurn(state) + "turn)",
            "background-color": this._computeSeverity(state),
        }), stateObj.state, this._config.unit ||
            stateObj.attributes.unit_of_measurement ||
            "", this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(stateObj));
    };
    HuiGaugeCard.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_9__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiGaugeCard.prototype.firstUpdated = function () {
        this._updated = true;
        this._setBaseUnit();
        this.classList.add("init");
    };
    HuiGaugeCard.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (!this._config || !this.hass) {
            return;
        }
        var oldHass = changedProps.get("hass");
        if (!oldHass || oldHass.themes !== this.hass.themes) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_6__["default"])(this, this.hass.themes, this._config.theme);
        }
    };
    HuiGaugeCard.prototype._setBaseUnit = function () {
        if (!this.isConnected || !this._updated) {
            return;
        }
        var baseUnit = this._computeBaseUnit();
        if (baseUnit !== "0px") {
            this._baseUnit = baseUnit;
        }
    };
    HuiGaugeCard.prototype._computeSeverity = function (numberValue) {
        var sections = this._config.severity;
        if (!sections) {
            return severityMap.normal;
        }
        var sectionsArray = Object.keys(sections);
        var sortable = sectionsArray.map(function (severity) { return [
            severity,
            sections[severity],
        ]; });
        for (var _i = 0, sortable_1 = sortable; _i < sortable_1.length; _i++) {
            var severity = sortable_1[_i];
            if (severityMap[severity[0]] == null || isNaN(severity[1])) {
                return severityMap.normal;
            }
        }
        sortable.sort(function (a, b) { return a[1] - b[1]; });
        if (numberValue >= sortable[0][1] && numberValue < sortable[1][1]) {
            return severityMap[sortable[0][0]];
        }
        if (numberValue >= sortable[1][1] && numberValue < sortable[2][1]) {
            return severityMap[sortable[1][0]];
        }
        if (numberValue >= sortable[2][1]) {
            return severityMap[sortable[2][0]];
        }
        return severityMap.normal;
    };
    HuiGaugeCard.prototype._translateTurn = function (value) {
        var _a = this._config, min = _a.min, max = _a.max;
        var maxTurnValue = Math.min(Math.max(value, min), max);
        return (5 * (maxTurnValue - min)) / (max - min) / 10;
    };
    HuiGaugeCard.prototype._computeBaseUnit = function () {
        return this.clientWidth < 200 ? this.clientWidth / 5 + "px" : "50px";
    };
    HuiGaugeCard.prototype._handleClick = function () {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "hass-more-info", { entityId: this._config.entity });
    };
    Object.defineProperty(HuiGaugeCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-card {\n        height: calc(var(--base-unit) * 3);\n        position: relative;\n        cursor: pointer;\n      }\n      .container {\n        width: calc(var(--base-unit) * 4);\n        height: calc(var(--base-unit) * 2);\n        position: absolute;\n        top: calc(var(--base-unit) * 1.5);\n        left: 50%;\n        overflow: hidden;\n        text-align: center;\n        transform: translate(-50%, -50%);\n      }\n      .gauge-a {\n        z-index: 1;\n        position: absolute;\n        background-color: var(--primary-background-color);\n        width: calc(var(--base-unit) * 4);\n        height: calc(var(--base-unit) * 2);\n        top: 0%;\n        border-radius: calc(var(--base-unit) * 2.5) calc(var(--base-unit) * 2.5)\n          0px 0px;\n      }\n      .gauge-b {\n        z-index: 3;\n        position: absolute;\n        background-color: var(--paper-card-background-color);\n        width: calc(var(--base-unit) * 2.5);\n        height: calc(var(--base-unit) * 1.25);\n        top: calc(var(--base-unit) * 0.75);\n        margin-left: calc(var(--base-unit) * 0.75);\n        margin-right: auto;\n        border-radius: calc(var(--base-unit) * 2.5) calc(var(--base-unit) * 2.5)\n          0px 0px;\n      }\n      .gauge-c {\n        z-index: 2;\n        position: absolute;\n        background-color: var(--label-badge-blue);\n        width: calc(var(--base-unit) * 4);\n        height: calc(var(--base-unit) * 2);\n        top: calc(var(--base-unit) * 2);\n        margin-left: auto;\n        margin-right: auto;\n        border-radius: 0px 0px calc(var(--base-unit) * 2)\n          calc(var(--base-unit) * 2);\n        transform-origin: center top;\n      }\n      .init .gauge-c {\n        transition: all 1.3s ease-in-out;\n      }\n      .gauge-data {\n        z-index: 4;\n        color: var(--primary-text-color);\n        line-height: calc(var(--base-unit) * 0.3);\n        position: absolute;\n        width: calc(var(--base-unit) * 4);\n        height: calc(var(--base-unit) * 2.1);\n        top: calc(var(--base-unit) * 1.2);\n        margin-left: auto;\n        margin-right: auto;\n      }\n      .init .gauge-data {\n        transition: all 1s ease-out;\n      }\n      .gauge-data #percent {\n        font-size: calc(var(--base-unit) * 0.55);\n      }\n      .gauge-data #name {\n        padding-top: calc(var(--base-unit) * 0.15);\n        font-size: calc(var(--base-unit) * 0.3);\n      }\n    "], ["\n      ha-card {\n        height: calc(var(--base-unit) * 3);\n        position: relative;\n        cursor: pointer;\n      }\n      .container {\n        width: calc(var(--base-unit) * 4);\n        height: calc(var(--base-unit) * 2);\n        position: absolute;\n        top: calc(var(--base-unit) * 1.5);\n        left: 50%;\n        overflow: hidden;\n        text-align: center;\n        transform: translate(-50%, -50%);\n      }\n      .gauge-a {\n        z-index: 1;\n        position: absolute;\n        background-color: var(--primary-background-color);\n        width: calc(var(--base-unit) * 4);\n        height: calc(var(--base-unit) * 2);\n        top: 0%;\n        border-radius: calc(var(--base-unit) * 2.5) calc(var(--base-unit) * 2.5)\n          0px 0px;\n      }\n      .gauge-b {\n        z-index: 3;\n        position: absolute;\n        background-color: var(--paper-card-background-color);\n        width: calc(var(--base-unit) * 2.5);\n        height: calc(var(--base-unit) * 1.25);\n        top: calc(var(--base-unit) * 0.75);\n        margin-left: calc(var(--base-unit) * 0.75);\n        margin-right: auto;\n        border-radius: calc(var(--base-unit) * 2.5) calc(var(--base-unit) * 2.5)\n          0px 0px;\n      }\n      .gauge-c {\n        z-index: 2;\n        position: absolute;\n        background-color: var(--label-badge-blue);\n        width: calc(var(--base-unit) * 4);\n        height: calc(var(--base-unit) * 2);\n        top: calc(var(--base-unit) * 2);\n        margin-left: auto;\n        margin-right: auto;\n        border-radius: 0px 0px calc(var(--base-unit) * 2)\n          calc(var(--base-unit) * 2);\n        transform-origin: center top;\n      }\n      .init .gauge-c {\n        transition: all 1.3s ease-in-out;\n      }\n      .gauge-data {\n        z-index: 4;\n        color: var(--primary-text-color);\n        line-height: calc(var(--base-unit) * 0.3);\n        position: absolute;\n        width: calc(var(--base-unit) * 4);\n        height: calc(var(--base-unit) * 2.1);\n        top: calc(var(--base-unit) * 1.2);\n        margin-left: auto;\n        margin-right: auto;\n      }\n      .init .gauge-data {\n        transition: all 1s ease-out;\n      }\n      .gauge-data #percent {\n        font-size: calc(var(--base-unit) * 0.55);\n      }\n      .gauge-data #name {\n        padding-top: calc(var(--base-unit) * 0.15);\n        font-size: calc(var(--base-unit) * 0.3);\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiGaugeCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiGaugeCard.prototype, "_baseUnit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiGaugeCard.prototype, "_config", void 0);
    HuiGaugeCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-gauge-card")
    ], HuiGaugeCard);
    return HuiGaugeCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-glance-card.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-glance-card.ts ***!
  \******************************************************/
/*! exports provided: HuiGlanceCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiGlanceCard", function() { return HuiGlanceCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");














var HuiGlanceCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiGlanceCard, _super);
    function HuiGlanceCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiGlanceCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-glance-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-glance-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-glance-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-glance-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-glance-card-editor")];
                }
            });
        });
    };
    HuiGlanceCard.getStubConfig = function () {
        return { entities: [] };
    };
    HuiGlanceCard.prototype.getCardSize = function () {
        return ((this._config.title ? 1 : 0) +
            Math.ceil(this._configEntities.length / 5));
    };
    HuiGlanceCard.prototype.setConfig = function (config) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ theme: "default" }, config);
        var entities = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_12__["processConfigEntities"])(config.entities);
        for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
            var entity = entities_1[_i];
            if ((entity.tap_action &&
                entity.tap_action.action === "call-service" &&
                !entity.tap_action.service) ||
                (entity.hold_action &&
                    entity.hold_action.action === "call-service" &&
                    !entity.hold_action.service)) {
                throw new Error('Missing required property "service" when tap_action or hold_action is call-service');
            }
        }
        var columns = config.columns || Math.min(config.entities.length, 5);
        this.style.setProperty("--glance-column-width", 100 / columns + "%");
        this._configEntities = entities;
        if (this.hass) {
            this.requestUpdate();
        }
    };
    HuiGlanceCard.prototype.shouldUpdate = function (changedProps) {
        if (changedProps.has("_config")) {
            return true;
        }
        var oldHass = changedProps.get("hass");
        if (oldHass && this._configEntities) {
            for (var _i = 0, _a = this._configEntities; _i < _a.length; _i++) {
                var entity = _a[_i];
                if (oldHass.states[entity.entity] !== this.hass.states[entity.entity]) {
                    return true;
                }
            }
            return false;
        }
        return true;
    };
    HuiGlanceCard.prototype.render = function () {
        var _this = this;
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var title = this._config.title;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card .header=\"", "\">\n        <div class=\"", "\">\n          ", "\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card .header=\"", "\">\n        <div class=\"", "\">\n          ",
            "\n        </div>\n      </ha-card>\n    "])), title, Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({ entities: true, "no-header": !title }), this._configEntities.map(function (entityConf) {
            return _this.renderEntity(entityConf);
        }));
    };
    HuiGlanceCard.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (!this._config || !this.hass) {
            return;
        }
        var oldHass = changedProperties.get("hass");
        if (!oldHass || oldHass.themes !== this.hass.themes) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_4__["default"])(this, this.hass.themes, this._config.theme);
        }
    };
    Object.defineProperty(HuiGlanceCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .entities {\n        display: flex;\n        padding: 0 16px 4px;\n        flex-wrap: wrap;\n      }\n      .entities.no-header {\n        padding-top: 16px;\n      }\n      .entity {\n        box-sizing: border-box;\n        padding: 0 4px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        cursor: pointer;\n        margin-bottom: 12px;\n        width: var(--glance-column-width, 20%);\n      }\n      .entity div {\n        width: 100%;\n        text-align: center;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .name {\n        min-height: var(--paper-font-body1_-_line-height, 20px);\n      }\n      state-badge {\n        margin: 8px 0;\n      }\n    "], ["\n      .entities {\n        display: flex;\n        padding: 0 16px 4px;\n        flex-wrap: wrap;\n      }\n      .entities.no-header {\n        padding-top: 16px;\n      }\n      .entity {\n        box-sizing: border-box;\n        padding: 0 4px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        cursor: pointer;\n        margin-bottom: 12px;\n        width: var(--glance-column-width, 20%);\n      }\n      .entity div {\n        width: 100%;\n        text-align: center;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .name {\n        min-height: var(--paper-font-body1_-_line-height, 20px);\n      }\n      state-badge {\n        margin: 8px 0;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiGlanceCard.prototype.renderEntity = function (entityConf) {
        var stateObj = this.hass.states[entityConf.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning-element\n          label=", "\n        ></hui-warning-element>\n      "], ["\n        <hui-warning-element\n          label=",
                "\n        ></hui-warning-element>\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", entityConf.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div\n        class=\"entity\"\n        .entityConf=\"", "\"\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n      >\n        ", "\n        ", "\n        ", "\n      </div>\n    "], ["\n      <div\n        class=\"entity\"\n        .entityConf=\"", "\"\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n      >\n        ",
            "\n        ",
            "\n        ",
            "\n      </div>\n    "])), entityConf, this._handleTap, this._handleHold, Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_11__["longPress"])(), this._config.show_name !== false
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"name\">\n                ", "\n              </div>\n            "], ["\n              <div class=\"name\">\n                ",
                "\n              </div>\n            "])), "name" in entityConf
                ? entityConf.name
                : Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["computeStateName"])(stateObj)) : "", this._config.show_icon !== false
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <state-badge\n                .hass=", "\n                .stateObj=", "\n                .overrideIcon=", "\n                .overrideImage=", "\n              ></state-badge>\n            "], ["\n              <state-badge\n                .hass=", "\n                .stateObj=", "\n                .overrideIcon=", "\n                .overrideImage=", "\n              ></state-badge>\n            "])), this.hass, stateObj, entityConf.icon, entityConf.image) : "", this._config.show_state !== false
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div>\n                ", "\n              </div>\n            "], ["\n              <div>\n                ",
                "\n              </div>\n            "])), entityConf.show_last_changed
                ? Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(stateObj.last_changed), this.hass.localize)
                : Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_10__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language)) : "");
    };
    HuiGlanceCard.prototype._handleTap = function (ev) {
        var config = ev.currentTarget.entityConf;
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_13__["handleClick"])(this, this.hass, config, false);
    };
    HuiGlanceCard.prototype._handleHold = function (ev) {
        var config = ev.currentTarget.entityConf;
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_13__["handleClick"])(this, this.hass, config, true);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiGlanceCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiGlanceCard.prototype, "_config", void 0);
    HuiGlanceCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-glance-card")
    ], HuiGlanceCard);
    return HuiGlanceCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-history-graph-card.js":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-history-graph-card.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/state-history-charts */ "./src/components/state-history-charts.js");
/* harmony import */ var _data_ha_state_history_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/ha-state-history-data */ "./src/data/ha-state-history-data.js");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .content {\n          padding: 16px;\n        }\n        [header] .content {\n          padding-top: 0;\n        }\n      </style>\n\n      <ha-card header$=\"[[_config.title]]\">\n        <div class=\"content\">\n          <ha-state-history-data\n            hass=\"[[hass]]\"\n            filter-type=\"recent-entity\"\n            entity-id=\"[[_entities]]\"\n            data=\"{{_stateHistory}}\"\n            is-loading=\"{{_stateHistoryLoading}}\"\n            cache-config=\"[[_cacheConfig]]\"\n          ></ha-state-history-data>\n          <state-history-charts\n            hass=\"[[hass]]\"\n            history-data=\"[[_stateHistory]]\"\n            is-loading-data=\"[[_stateHistoryLoading]]\"\n            names=\"[[_names]]\"\n            up-to-now\n            no-single\n          ></state-history-charts>\n        </div>\n      </ha-card>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var HuiHistoryGraphCard =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HuiHistoryGraphCard, _PolymerElement);

  function HuiHistoryGraphCard() {
    _classCallCheck(this, HuiHistoryGraphCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HuiHistoryGraphCard).apply(this, arguments));
  }

  _createClass(HuiHistoryGraphCard, [{
    key: "getCardSize",
    value: function getCardSize() {
      return 4;
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      var entities = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_5__["processConfigEntities"])(config.entities);
      this._config = config;
      var _entities = [];
      var _names = {};
      entities.forEach(function (entity) {
        _entities.push(entity.entity);

        if (entity.name) {
          _names[entity.entity] = entity.name;
        }
      });
      this.setProperties({
        _cacheConfig: {
          cacheKey: _entities.join(),
          hoursToShow: config.hours_to_show || 24,
          refresh: config.refresh_interval || 0
        },
        _entities: _entities,
        _names: _names
      });
    }
  }], [{
    key: "getConfigElement",
    value: function () {
      var _getConfigElement = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all(/*! import() | hui-history-graph-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-history-graph-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-history-graph-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-history-graph-card-editor.ts"));

              case 2:
                return _context.abrupt("return", document.createElement("hui-history-graph-card-editor"));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getConfigElement() {
        return _getConfigElement.apply(this, arguments);
      }

      return getConfigElement;
    }()
  }, {
    key: "getStubConfig",
    value: function getStubConfig() {
      return {
        entities: []
      };
    }
  }, {
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        _config: Object,
        _names: Object,
        _entities: Array,
        _stateHistory: Object,
        _stateHistoryLoading: Boolean,
        _cacheConfig: Object
      };
    }
  }]);

  return HuiHistoryGraphCard;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("hui-history-graph-card", HuiHistoryGraphCard);

/***/ }),

/***/ "./src/panels/lovelace/cards/hui-horizontal-stack-card.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-horizontal-stack-card.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_compute_card_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/compute-card-size */ "./src/panels/lovelace/common/compute-card-size.ts");
/* harmony import */ var _hui_stack_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hui-stack-card */ "./src/panels/lovelace/cards/hui-stack-card.ts");




var HuiHorizontalStackCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiHorizontalStackCard, _super);
    function HuiHorizontalStackCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiHorizontalStackCard.prototype.getCardSize = function () {
        var totalSize = 0;
        if (this._cards) {
            for (var _i = 0, _a = this._cards; _i < _a.length; _i++) {
                var element = _a[_i];
                var elementSize = Object(_common_compute_card_size__WEBPACK_IMPORTED_MODULE_2__["computeCardSize"])(element);
                totalSize = elementSize > totalSize ? elementSize : totalSize;
            }
        }
        return totalSize;
    };
    HuiHorizontalStackCard.prototype.renderStyle = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <style>\n        #root {\n          display: flex;\n        }\n        #root > * {\n          flex: 1 1 0;\n          margin: 0 4px;\n          min-width: 0;\n        }\n        #root > *:first-child {\n          margin-left: 0;\n        }\n        #root > *:last-child {\n          margin-right: 0;\n        }\n      </style>\n    "], ["\n      <style>\n        #root {\n          display: flex;\n        }\n        #root > * {\n          flex: 1 1 0;\n          margin: 0 4px;\n          min-width: 0;\n        }\n        #root > *:first-child {\n          margin-left: 0;\n        }\n        #root > *:last-child {\n          margin-right: 0;\n        }\n      </style>\n    "])));
    };
    return HuiHorizontalStackCard;
}(_hui_stack_card__WEBPACK_IMPORTED_MODULE_3__["HuiStackCard"]));
customElements.define("hui-horizontal-stack-card", HuiHorizontalStackCard);
var templateObject_1;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-iframe-card.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-iframe-card.ts ***!
  \******************************************************/
/*! exports provided: HuiIframeCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiIframeCard", function() { return HuiIframeCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");




var HuiIframeCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiIframeCard, _super);
    function HuiIframeCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiIframeCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-iframe-card-editor */[__webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-iframe-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-iframe-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-iframe-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-iframe-card-editor")];
                }
            });
        });
    };
    HuiIframeCard.getStubConfig = function () {
        return { url: "https://www.home-assistant.io", aspect_ratio: "50%" };
    };
    HuiIframeCard.prototype.getCardSize = function () {
        if (!this._config) {
            return 3;
        }
        var aspectRatio = this._config.aspect_ratio
            ? Number(this._config.aspect_ratio.replace("%", ""))
            : 50;
        return 1 + aspectRatio / 25;
    };
    HuiIframeCard.prototype.setConfig = function (config) {
        if (!config.url) {
            throw new Error("URL required");
        }
        this._config = config;
    };
    HuiIframeCard.prototype.render = function () {
        if (!this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var aspectRatio = this._config.aspect_ratio || "50%";
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card .header=\"", "\">\n        <div\n          id=\"root\"\n          style=\"", "\"\n        >\n          <iframe src=\"", "\"></iframe>\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card .header=\"", "\">\n        <div\n          id=\"root\"\n          style=\"",
            "\"\n        >\n          <iframe src=\"", "\"></iframe>\n        </div>\n      </ha-card>\n    "])), this._config.title, Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_3__["styleMap"])({
            "padding-top": aspectRatio,
        }), this._config.url);
    };
    Object.defineProperty(HuiIframeCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-card {\n        overflow: hidden;\n      }\n\n      #root {\n        width: 100%;\n        position: relative;\n      }\n\n      iframe {\n        position: absolute;\n        border: none;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n    "], ["\n      ha-card {\n        overflow: hidden;\n      }\n\n      #root {\n        width: 100%;\n        position: relative;\n      }\n\n      iframe {\n        position: absolute;\n        border: none;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiIframeCard.prototype, "_config", void 0);
    HuiIframeCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-iframe-card")
    ], HuiIframeCard);
    return HuiIframeCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-legacy-wrapper-card.js":
/*!**************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-legacy-wrapper-card.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LegacyWrapperCard; });
/* harmony import */ var _hui_error_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hui-error-card */ "./src/panels/lovelace/cards/hui-error-card.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var LegacyWrapperCard =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(LegacyWrapperCard, _HTMLElement);

  function LegacyWrapperCard(tag, domain) {
    var _this;

    _classCallCheck(this, LegacyWrapperCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LegacyWrapperCard).call(this));
    _this._tag = tag.toUpperCase();
    _this._domain = domain;
    _this._element = null;
    return _this;
  }

  _createClass(LegacyWrapperCard, [{
    key: "getCardSize",
    value: function getCardSize() {
      return 3;
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      if (!config.entity) {
        throw new Error("No entity specified");
      }

      if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_1__["computeDomain"])(config.entity) !== this._domain) {
        throw new Error("Specified entity needs to be of domain ".concat(this._domain, "."));
      }

      this._config = config;
    }
  }, {
    key: "_ensureElement",
    value: function _ensureElement(tag) {
      if (this.lastChild && this.lastChild.tagName === tag) return;

      if (this.lastChild) {
        this.removeChild(this.lastChild);
      }

      this.appendChild(document.createElement(tag));
    }
  }, {
    key: "hass",
    set: function set(hass) {
      var entityId = this._config.entity;

      if (entityId in hass.states) {
        this._ensureElement(this._tag);

        this.lastChild.hass = hass;
        this.lastChild.stateObj = hass.states[entityId];
        this.lastChild.config = this._config;
      } else {
        this._ensureElement("HUI-ERROR-CARD");

        this.lastChild.setConfig(Object(_hui_error_card__WEBPACK_IMPORTED_MODULE_0__["createErrorCardConfig"])("No state available for ".concat(entityId), this._config));
      }
    }
  }]);

  return LegacyWrapperCard;
}(_wrapNativeSuper(HTMLElement));



/***/ }),

/***/ "./src/panels/lovelace/cards/hui-light-card.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-light-card.ts ***!
  \*****************************************************/
/*! exports provided: HuiLightCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiLightCard", function() { return HuiLightCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _thomasloven_round_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @thomasloven/round-slider */ "./node_modules/@thomasloven/round-slider/src/main.js");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _components_hui_unavailable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/hui-unavailable */ "./src/panels/lovelace/components/hui-unavailable.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _common_entity_toggle_entity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/entity/toggle-entity */ "./src/panels/lovelace/common/entity/toggle-entity.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _data_light__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../data/light */ "./src/data/light.ts");

















var HuiLightCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiLightCard, _super);
    function HuiLightCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiLightCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-light-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-light-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-light-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-light-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-light-card-editor")];
                }
            });
        });
    };
    HuiLightCard.getStubConfig = function () {
        return { entity: "" };
    };
    HuiLightCard.prototype.getCardSize = function () {
        return 2;
    };
    HuiLightCard.prototype.setConfig = function (config) {
        if (!config.entity || config.entity.split(".")[0] !== "light") {
            throw new Error("Specify an entity from within the light domain.");
        }
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ theme: "default" }, config);
    };
    HuiLightCard.prototype.render = function () {
        if (!this.hass || !this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        var brightness = Math.round((stateObj.attributes.brightness / 254) * 100) || 0;
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <ha-card>\n        ", "\n        <paper-icon-button\n          icon=\"hass:dots-vertical\"\n          class=\"more-info\"\n          @click=\"", "\"\n        ></paper-icon-button>\n\n        <div id=\"light\">\n          ", "\n          <ha-icon\n            class=\"light-icon\"\n            data-state=\"", "\"\n            .icon=\"", "\"\n            style=\"", "\"\n            @click=\"", "\"\n          ></ha-icon>\n        </div>\n\n        <div id=\"tooltip\">\n          <div class=\"brightness\" @ha-click=\"", "\">\n            ", " %\n          </div>\n          <div class=\"name\">\n            ", "\n          </div>\n        </div>\n      </ha-card>\n    "], ["\n      ", "\n      <ha-card>\n        ",
            "\n        <paper-icon-button\n          icon=\"hass:dots-vertical\"\n          class=\"more-info\"\n          @click=\"", "\"\n        ></paper-icon-button>\n\n        <div id=\"light\">\n          ",
            "\n          <ha-icon\n            class=\"light-icon\"\n            data-state=\"", "\"\n            .icon=\"", "\"\n            style=\"",
            "\"\n            @click=\"", "\"\n          ></ha-icon>\n        </div>\n\n        <div id=\"tooltip\">\n          <div class=\"brightness\" @ha-click=\"", "\">\n            ", " %\n          </div>\n          <div class=\"name\">\n            ", "\n          </div>\n        </div>\n      </ha-card>\n    "])), this.renderStyle(), stateObj.state === "unavailable"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <hui-unavailable\n                .text=\"", "\"\n              ></hui-unavailable>\n            "], ["\n              <hui-unavailable\n                .text=\"", "\"\n              ></hui-unavailable>\n            "])), this.hass.localize("state.default.unavailable")) : "", this._handleMoreInfo, Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_15__["supportsFeature"])(stateObj, _data_light__WEBPACK_IMPORTED_MODULE_16__["SUPPORT_BRIGHTNESS"])
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <round-slider\n                  min=\"1\"\n                  .value=", "\n                  @value-changing=", "\n                  @value-changed=", "\n                ></round-slider>\n              "], ["\n                <round-slider\n                  min=\"1\"\n                  .value=", "\n                  @value-changing=", "\n                  @value-changed=", "\n                ></round-slider>\n              "])), brightness, this._dragEvent, this._setBrightness) : "", stateObj.state, this._config.icon || Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_4__["stateIcon"])(stateObj), Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_12__["styleMap"])({
            filter: this._computeBrightness(stateObj),
            color: this._computeColor(stateObj),
        }), this._handleTap, this._handleTap, brightness, this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(stateObj));
    };
    HuiLightCard.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_13__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiLightCard.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (!this._config || !this.hass) {
            return;
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return;
        }
        var oldHass = changedProps.get("hass");
        if (!oldHass || oldHass.themes !== this.hass.themes) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_6__["default"])(this, this.hass.themes, this._config.theme);
        }
    };
    HuiLightCard.prototype.renderStyle = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <style>\n        :host {\n          display: block;\n        }\n\n        ha-card {\n          position: relative;\n          overflow: hidden;\n          --name-font-size: 1.2rem;\n          --brightness-font-size: 1.2rem;\n          --rail-border-color: transparent;\n        }\n\n        #tooltip {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          height: 100%;\n          text-align: center;\n        }\n\n        #light {\n          margin: auto;\n          padding-top: 0;\n          padding-bottom: 32px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          height: 160px;\n          width: 160px;\n        }\n        #light round-slider {\n          margin: 0 auto;\n          display: inline-block;\n          --round-slider-path-color: var(--disabled-text-color);\n          --round-slider-bar-color: var(--primary-color);\n          z-index: 20;\n        }\n\n        .light-icon {\n          position: absolute;\n          margin: 0 auto;\n          width: 76px;\n          height: 76px;\n          color: var(--paper-item-icon-color, #44739e);\n          cursor: pointer;\n          z-index: 20;\n        }\n\n        .light-icon[data-state=\"on\"] {\n          color: var(--paper-item-icon-active-color, #fdd835);\n        }\n\n        .light-icon[data-state=\"unavailable\"] {\n          color: var(--state-icon-unavailable-color);\n        }\n\n        .name {\n          position: absolute;\n          top: 160px;\n          left: 50%;\n          transform: translate(-50%);\n          font-size: var(--name-font-size);\n        }\n\n        .brightness {\n          font-size: var(--brightness-font-size);\n          position: absolute;\n          margin: 0 auto;\n          top: 135px;\n          left: 50%;\n          transform: translate(-50%);\n          opacity: 0;\n          transition: opacity 0.5s ease-in-out;\n          -moz-transition: opacity 0.5s ease-in-out;\n          -webkit-transition: opacity 0.5s ease-in-out;\n          cursor: pointer;\n          pointer-events: none;\n        }\n\n        .show_brightness {\n          opacity: 1;\n        }\n\n        .more-info {\n          position: absolute;\n          cursor: pointer;\n          top: 0;\n          right: 0;\n          z-index: 25;\n          color: var(--secondary-text-color);\n        }\n      </style>\n    "], ["\n      <style>\n        :host {\n          display: block;\n        }\n\n        ha-card {\n          position: relative;\n          overflow: hidden;\n          --name-font-size: 1.2rem;\n          --brightness-font-size: 1.2rem;\n          --rail-border-color: transparent;\n        }\n\n        #tooltip {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          height: 100%;\n          text-align: center;\n        }\n\n        #light {\n          margin: auto;\n          padding-top: 0;\n          padding-bottom: 32px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          height: 160px;\n          width: 160px;\n        }\n        #light round-slider {\n          margin: 0 auto;\n          display: inline-block;\n          --round-slider-path-color: var(--disabled-text-color);\n          --round-slider-bar-color: var(--primary-color);\n          z-index: 20;\n        }\n\n        .light-icon {\n          position: absolute;\n          margin: 0 auto;\n          width: 76px;\n          height: 76px;\n          color: var(--paper-item-icon-color, #44739e);\n          cursor: pointer;\n          z-index: 20;\n        }\n\n        .light-icon[data-state=\"on\"] {\n          color: var(--paper-item-icon-active-color, #fdd835);\n        }\n\n        .light-icon[data-state=\"unavailable\"] {\n          color: var(--state-icon-unavailable-color);\n        }\n\n        .name {\n          position: absolute;\n          top: 160px;\n          left: 50%;\n          transform: translate(-50%);\n          font-size: var(--name-font-size);\n        }\n\n        .brightness {\n          font-size: var(--brightness-font-size);\n          position: absolute;\n          margin: 0 auto;\n          top: 135px;\n          left: 50%;\n          transform: translate(-50%);\n          opacity: 0;\n          transition: opacity 0.5s ease-in-out;\n          -moz-transition: opacity 0.5s ease-in-out;\n          -webkit-transition: opacity 0.5s ease-in-out;\n          cursor: pointer;\n          pointer-events: none;\n        }\n\n        .show_brightness {\n          opacity: 1;\n        }\n\n        .more-info {\n          position: absolute;\n          cursor: pointer;\n          top: 0;\n          right: 0;\n          z-index: 25;\n          color: var(--secondary-text-color);\n        }\n      </style>\n    "])));
    };
    HuiLightCard.prototype._dragEvent = function (e) {
        this.shadowRoot.querySelector(".brightness").innerHTML =
            e.detail.value + "%";
        this._showBrightness();
        this._hideBrightness();
    };
    HuiLightCard.prototype._showBrightness = function () {
        clearTimeout(this._brightnessTimout);
        this.shadowRoot.querySelector(".brightness").classList.add("show_brightness");
    };
    HuiLightCard.prototype._hideBrightness = function () {
        var _this = this;
        this._brightnessTimout = window.setTimeout(function () {
            _this.shadowRoot.querySelector(".brightness").classList.remove("show_brightness");
        }, 500);
    };
    HuiLightCard.prototype._setBrightness = function (e) {
        this.hass.callService("light", "turn_on", {
            entity_id: this._config.entity,
            brightness_pct: e.detail.value,
        });
    };
    HuiLightCard.prototype._computeBrightness = function (stateObj) {
        if (!stateObj.attributes.brightness) {
            return "";
        }
        var brightness = stateObj.attributes.brightness;
        return "brightness(" + (brightness + 245) / 5 + "%)";
    };
    HuiLightCard.prototype._computeColor = function (stateObj) {
        if (!stateObj.attributes.hs_color) {
            return "";
        }
        var _a = stateObj.attributes.hs_color, hue = _a[0], sat = _a[1];
        if (sat <= 10) {
            return "";
        }
        return "hsl(" + hue + ", 100%, " + (100 - sat / 2) + "%)";
    };
    HuiLightCard.prototype._handleTap = function () {
        Object(_common_entity_toggle_entity__WEBPACK_IMPORTED_MODULE_14__["toggleEntity"])(this.hass, this._config.entity);
    };
    HuiLightCard.prototype._handleMoreInfo = function () {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__["fireEvent"])(this, "hass-more-info", {
            entityId: this._config.entity,
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiLightCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiLightCard.prototype, "_config", void 0);
    HuiLightCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-light-card")
    ], HuiLightCard);
    return HuiLightCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-map-card.ts":
/*!***************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-map-card.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _map_ha_entity_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../map/ha-entity-marker */ "./src/panels/map/ha-entity-marker.js");
/* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var _common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/util/parse-aspect-ratio */ "./src/common/util/parse-aspect-ratio.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");












var HuiMapCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiMapCard, _super);
    function HuiMapCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isPanel = false;
        _this._debouncedResizeListener = Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_7__["debounce"])(function () {
            if (!_this._leafletMap) {
                return;
            }
            _this._leafletMap.invalidateSize();
        }, 100, false);
        _this._mapItems = [];
        _this._connected = false;
        return _this;
    }
    HuiMapCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-map-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-map-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-map-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-map-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-map-card-editor")];
                }
            });
        });
    };
    HuiMapCard.getStubConfig = function () {
        return { entities: [] };
    };
    HuiMapCard.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Error in card configuration.");
        }
        if (!config.entities && !config.geo_location_sources) {
            throw new Error("Either entities or geo_location_sources must be defined");
        }
        if (config.entities && !Array.isArray(config.entities)) {
            throw new Error("Entities need to be an array");
        }
        if (config.geo_location_sources &&
            !Array.isArray(config.geo_location_sources)) {
            throw new Error("Geo_location_sources needs to be an array");
        }
        this._config = config;
        this._configEntities = config.entities
            ? Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_10__["processConfigEntities"])(config.entities)
            : [];
    };
    HuiMapCard.prototype.getCardSize = function () {
        if (!this._config) {
            return 3;
        }
        var ratio = Object(_common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_8__["default"])(this._config.aspect_ratio);
        var ar = ratio && ratio.w > 0 && ratio.h > 0
            ? "" + ((100 * ratio.h) / ratio.w).toFixed(2)
            : "100";
        return 1 + Math.floor(Number(ar) / 25) || 3;
    };
    HuiMapCard.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this._connected = true;
        if (this.hasUpdated) {
            this.loadMap();
            this._attachObserver();
        }
    };
    HuiMapCard.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this._connected = false;
        if (this._leafletMap) {
            this._leafletMap.remove();
            this._leafletMap = undefined;
            this.Leaflet = undefined;
        }
        if (this._resizeObserver) {
            this._resizeObserver.unobserve(this._mapEl);
        }
        else {
            window.removeEventListener("resize", this._debouncedResizeListener);
        }
    };
    HuiMapCard.prototype.render = function () {
        if (!this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card id=\"card\" .header=", ">\n        <div id=\"root\">\n          <div\n            id=\"map\"\n            class=", "\n          ></div>\n          <paper-icon-button\n            @click=", "\n            icon=\"hass:image-filter-center-focus\"\n            title=\"Reset focus\"\n          ></paper-icon-button>\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card id=\"card\" .header=", ">\n        <div id=\"root\">\n          <div\n            id=\"map\"\n            class=", "\n          ></div>\n          <paper-icon-button\n            @click=", "\n            icon=\"hass:image-filter-center-focus\"\n            title=\"Reset focus\"\n          ></paper-icon-button>\n        </div>\n      </ha-card>\n    "])), this._config.title, Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_11__["classMap"])({ dark: this._config.dark_mode === true }), this._fitMap);
    };
    HuiMapCard.prototype.shouldUpdate = function (changedProps) {
        if (!changedProps.has("hass") || changedProps.size > 1) {
            return true;
        }
        var oldHass = changedProps.get("hass");
        if (!oldHass || !this._configEntities) {
            return true;
        }
        // Check if any state has changed
        for (var _i = 0, _a = this._configEntities; _i < _a.length; _i++) {
            var entity = _a[_i];
            if (oldHass.states[entity.entity] !== this.hass.states[entity.entity]) {
                return true;
            }
        }
        return false;
    };
    HuiMapCard.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        this.loadMap();
        var root = this.shadowRoot.getElementById("root");
        if (!this._config || this.isPanel || !root) {
            return;
        }
        if (this._connected) {
            this._attachObserver();
        }
        var ratio = Object(_common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_8__["default"])(this._config.aspect_ratio);
        root.style.paddingBottom =
            ratio && ratio.w > 0 && ratio.h > 0
                ? ((100 * ratio.h) / ratio.w).toFixed(2) + "%"
                : (root.style.paddingBottom = "100%");
    };
    HuiMapCard.prototype.updated = function (changedProps) {
        if (changedProps.has("hass")) {
            this._drawEntities();
        }
        if (changedProps.has("_config") &&
            changedProps.get("_config") !== undefined) {
            this.updateMap(changedProps.get("_config"));
        }
    };
    Object.defineProperty(HuiMapCard.prototype, "_mapEl", {
        get: function () {
            return this.shadowRoot.getElementById("map");
        },
        enumerable: true,
        configurable: true
    });
    HuiMapCard.prototype.loadMap = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_4__["setupLeafletMap"])(this._mapEl, this._config !== undefined ? this._config.dark_mode === true : false)];
                    case 1:
                        _a = _b.sent(), this._leafletMap = _a[0], this.Leaflet = _a[1];
                        this._drawEntities();
                        this._leafletMap.invalidateSize();
                        this._fitMap();
                        return [2 /*return*/];
                }
            });
        });
    };
    HuiMapCard.prototype.updateMap = function (oldConfig) {
        var map = this._leafletMap;
        var config = this._config;
        var Leaflet = this.Leaflet;
        if (!map || !config || !Leaflet) {
            return;
        }
        if (config.dark_mode !== oldConfig.dark_mode) {
            Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_4__["createTileLayer"])(Leaflet, config.dark_mode === true).addTo(map);
        }
        if (config.entities !== oldConfig.entities ||
            config.geo_location_sources !== oldConfig.geo_location_sources) {
            this._drawEntities();
        }
        map.invalidateSize();
        this._fitMap();
    };
    HuiMapCard.prototype._fitMap = function () {
        if (!this._leafletMap || !this.Leaflet || !this._config || !this.hass) {
            return;
        }
        var zoom = this._config.default_zoom;
        if (this._mapItems.length === 0) {
            this._leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude, this.hass.config.longitude), zoom || 14);
            return;
        }
        var bounds = this.Leaflet.latLngBounds(this._mapItems ? this._mapItems.map(function (item) { return item.getLatLng(); }) : []);
        this._leafletMap.fitBounds(bounds.pad(0.5));
        if (zoom && this._leafletMap.getZoom() > zoom) {
            this._leafletMap.setZoom(zoom);
        }
    };
    HuiMapCard.prototype._drawEntities = function () {
        var hass = this.hass;
        var map = this._leafletMap;
        var config = this._config;
        var Leaflet = this.Leaflet;
        if (!hass || !map || !config || !Leaflet) {
            return;
        }
        if (this._mapItems) {
            this._mapItems.forEach(function (marker) { return marker.remove(); });
        }
        var mapItems = (this._mapItems = []);
        var allEntities = this._configEntities.concat();
        // Calculate visible geo location sources
        if (config.geo_location_sources) {
            var includesAll = config.geo_location_sources.includes("all");
            for (var _i = 0, _a = Object.keys(hass.states); _i < _a.length; _i++) {
                var entityId = _a[_i];
                var stateObj = hass.states[entityId];
                if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(entityId) === "geo_location" &&
                    (includesAll ||
                        config.geo_location_sources.includes(stateObj.attributes.source))) {
                    allEntities.push({ entity: entityId });
                }
            }
        }
        for (var _b = 0, allEntities_1 = allEntities; _b < allEntities_1.length; _b++) {
            var entity = allEntities_1[_b];
            var entityId = entity.entity;
            var stateObj = hass.states[entityId];
            if (!stateObj) {
                continue;
            }
            var title = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(stateObj);
            var _c = stateObj.attributes, latitude = _c.latitude, longitude = _c.longitude, passive = _c.passive, icon = _c.icon, radius = _c.radius, entityPicture = _c.entity_picture, gpsAccuracy = _c.gps_accuracy;
            if (!(latitude && longitude)) {
                continue;
            }
            if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(stateObj) === "zone") {
                // DRAW ZONE
                if (passive) {
                    continue;
                }
                // create marker with the icon
                mapItems.push(Leaflet.marker([latitude, longitude], {
                    icon: Leaflet.divIcon({
                        html: icon ? "<ha-icon icon=\"" + icon + "\"></ha-icon>" : title,
                        iconSize: [24, 24],
                        className: "",
                    }),
                    interactive: false,
                    title: title,
                }));
                // create circle around it
                mapItems.push(Leaflet.circle([latitude, longitude], {
                    interactive: false,
                    color: "#FF9800",
                    radius: radius,
                }));
                continue;
            }
            // DRAW ENTITY
            // create icon
            var entityName = title
                .split(" ")
                .map(function (part) { return part[0]; })
                .join("")
                .substr(0, 3);
            // create market with the icon
            mapItems.push(Leaflet.marker([latitude, longitude], {
                icon: Leaflet.divIcon({
                    // Leaflet clones this element before adding it to the map. This messes up
                    // our Polymer object and we can't pass data through. Thus we hack like this.
                    html: "\n              <ha-entity-marker\n                entity-id=\"" + entityId + "\"\n                entity-name=\"" + entityName + "\"\n                entity-picture=\"" + (entityPicture || "") + "\"\n              ></ha-entity-marker>\n            ",
                    iconSize: [48, 48],
                    className: "",
                }),
                title: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(stateObj),
            }));
            // create circle around if entity has accuracy
            if (gpsAccuracy) {
                mapItems.push(Leaflet.circle([latitude, longitude], {
                    interactive: false,
                    color: "#0288D1",
                    radius: gpsAccuracy,
                }));
            }
        }
        this._mapItems.forEach(function (marker) { return map.addLayer(marker); });
    };
    HuiMapCard.prototype._attachObserver = function () {
        // Observe changes to map size and invalidate to prevent broken rendering
        // Uses ResizeObserver in Chrome, otherwise window resize event
        var _this = this;
        // @ts-ignore
        if (typeof ResizeObserver === "function") {
            // @ts-ignore
            this._resizeObserver = new ResizeObserver(function () {
                return _this._debouncedResizeListener();
            });
            this._resizeObserver.observe(this._mapEl);
        }
        else {
            window.addEventListener("resize", this._debouncedResizeListener);
        }
    };
    Object.defineProperty(HuiMapCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host([ispanel]) ha-card {\n        left: 0;\n        top: 0;\n        width: 100%;\n        /**\n       * In panel mode we want a full height map. Since parent #view\n       * only sets min-height, we need absolute positioning here\n       */\n        height: 100%;\n        position: absolute;\n      }\n\n      ha-card {\n        overflow: hidden;\n      }\n\n      #map {\n        z-index: 0;\n        border: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: #fafaf8;\n      }\n\n      #map.dark {\n        background: #090909;\n      }\n\n      paper-icon-button {\n        position: absolute;\n        top: 75px;\n        left: 7px;\n      }\n\n      #root {\n        position: relative;\n      }\n\n      :host([ispanel]) #root {\n        height: 100%;\n      }\n    "], ["\n      :host([ispanel]) ha-card {\n        left: 0;\n        top: 0;\n        width: 100%;\n        /**\n       * In panel mode we want a full height map. Since parent #view\n       * only sets min-height, we need absolute positioning here\n       */\n        height: 100%;\n        position: absolute;\n      }\n\n      ha-card {\n        overflow: hidden;\n      }\n\n      #map {\n        z-index: 0;\n        border: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: #fafaf8;\n      }\n\n      #map.dark {\n        background: #090909;\n      }\n\n      paper-icon-button {\n        position: absolute;\n        top: 75px;\n        left: 7px;\n      }\n\n      #root {\n        position: relative;\n      }\n\n      :host([ispanel]) #root {\n        height: 100%;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
    ], HuiMapCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({ type: Boolean, reflect: true })
    ], HuiMapCard.prototype, "isPanel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
    ], HuiMapCard.prototype, "_config", void 0);
    HuiMapCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("hui-map-card")
    ], HuiMapCard);
    return HuiMapCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-markdown-card.ts":
/*!********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-markdown-card.ts ***!
  \********************************************************/
/*! exports provided: HuiMarkdownCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiMarkdownCard", function() { return HuiMarkdownCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-markdown */ "./src/components/ha-markdown.ts");
/* harmony import */ var _data_ws_templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/ws-templates */ "./src/data/ws-templates.ts");






var HuiMarkdownCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiMarkdownCard, _super);
    function HuiMarkdownCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._content = "";
        return _this;
    }
    HuiMarkdownCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-markdown-card-editor */[__webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e("hui-markdown-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-markdown-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-markdown-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-markdown-card-editor")];
                }
            });
        });
    };
    HuiMarkdownCard.getStubConfig = function () {
        return {
            content: "The **Markdown** card allows you to write any text. You can style it **bold**, *italicized*, ~strikethrough~ etc. You can do images, links, and more.\n\nFor more information see the [Markdown Cheatsheet](https://commonmark.org/help).",
        };
    };
    HuiMarkdownCard.prototype.getCardSize = function () {
        return this._config === undefined
            ? 3
            : this._config.card_size === undefined
                ? this._config.content.split("\n").length + (this._config.title ? 1 : 0)
                : this._config.card_size;
    };
    HuiMarkdownCard.prototype.setConfig = function (config) {
        var _this = this;
        if (!config.content) {
            throw new Error("Invalid Configuration: Content Required");
        }
        this._config = config;
        this._disconnect().then(function () {
            if (_this._hass) {
                _this._connect();
            }
        });
    };
    HuiMarkdownCard.prototype.disconnectedCallback = function () {
        this._disconnect();
    };
    Object.defineProperty(HuiMarkdownCard.prototype, "hass", {
        set: function (hass) {
            this._hass = hass;
            this._connect();
        },
        enumerable: true,
        configurable: true
    });
    HuiMarkdownCard.prototype.render = function () {
        if (!this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card .header=\"", "\">\n        <ha-markdown\n          class=\"markdown ", "\"\n          .content=\"", "\"\n        ></ha-markdown>\n      </ha-card>\n    "], ["\n      <ha-card .header=\"", "\">\n        <ha-markdown\n          class=\"markdown ",
            "\"\n          .content=\"", "\"\n        ></ha-markdown>\n      </ha-card>\n    "])), this._config.title, Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            "no-header": !this._config.title,
        }), this._content);
    };
    HuiMarkdownCard.prototype._connect = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!this._unsubRenderTemplate && this._hass && this._config) {
                    this._unsubRenderTemplate = Object(_data_ws_templates__WEBPACK_IMPORTED_MODULE_5__["subscribeRenderTemplate"])(this._hass.connection, function (result) {
                        _this._content = result;
                    }, {
                        template: this._config.content,
                        entity_ids: this._config.entity_id,
                        variables: { config: this._config },
                    });
                    this._unsubRenderTemplate.catch(function () {
                        _this._content = _this._config.content;
                        _this._unsubRenderTemplate = undefined;
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    HuiMarkdownCard.prototype._disconnect = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var unsub, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._unsubRenderTemplate) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this._unsubRenderTemplate];
                    case 2:
                        unsub = _a.sent();
                        this._unsubRenderTemplate = undefined;
                        return [4 /*yield*/, unsub()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        if (e_1.code === "not_found") {
                            // If we get here, the connection was probably already closed. Ignore.
                        }
                        else {
                            throw e_1;
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HuiMarkdownCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-markdown {\n        display: block;\n        padding: 0 16px 16px;\n        -ms-user-select: initial;\n        -webkit-user-select: initial;\n        -moz-user-select: initial;\n      }\n      .markdown.no-header {\n        padding-top: 16px;\n      }\n      ha-markdown > *:first-child {\n        margin-top: 0;\n      }\n      ha-markdown > *:last-child {\n        margin-bottom: 0;\n      }\n      ha-markdown a {\n        color: var(--primary-color);\n      }\n      ha-markdown img {\n        max-width: 100%;\n      }\n    "], ["\n      ha-markdown {\n        display: block;\n        padding: 0 16px 16px;\n        -ms-user-select: initial;\n        -webkit-user-select: initial;\n        -moz-user-select: initial;\n      }\n      .markdown.no-header {\n        padding-top: 16px;\n      }\n      ha-markdown > *:first-child {\n        margin-top: 0;\n      }\n      ha-markdown > *:last-child {\n        margin-bottom: 0;\n      }\n      ha-markdown a {\n        color: var(--primary-color);\n      }\n      ha-markdown img {\n        max-width: 100%;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiMarkdownCard.prototype, "_config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiMarkdownCard.prototype, "_content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiMarkdownCard.prototype, "_unsubRenderTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiMarkdownCard.prototype, "_hass", void 0);
    HuiMarkdownCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-markdown-card")
    ], HuiMarkdownCard);
    return HuiMarkdownCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-media-control-card.js":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-media-control-card.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards_ha_media_player_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../cards/ha-media_player-card */ "./src/cards/ha-media_player-card.js");
/* harmony import */ var _hui_legacy_wrapper_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hui-legacy-wrapper-card */ "./src/panels/lovelace/cards/hui-legacy-wrapper-card.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var HuiMediaControlCard =
/*#__PURE__*/
function (_LegacyWrapperCard) {
  _inherits(HuiMediaControlCard, _LegacyWrapperCard);

  _createClass(HuiMediaControlCard, null, [{
    key: "getConfigElement",
    value: function () {
      var _getConfigElement = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all(/*! import() | hui-media-control-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-media-control-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-media-control-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-media-control-card-editor.ts"));

              case 2:
                return _context.abrupt("return", document.createElement("hui-media-control-card-editor"));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getConfigElement() {
        return _getConfigElement.apply(this, arguments);
      }

      return getConfigElement;
    }()
  }, {
    key: "getStubConfig",
    value: function getStubConfig() {
      return {
        entity: ""
      };
    }
  }]);

  function HuiMediaControlCard() {
    _classCallCheck(this, HuiMediaControlCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HuiMediaControlCard).call(this, "ha-media_player-card", "media_player"));
  }

  return HuiMediaControlCard;
}(_hui_legacy_wrapper_card__WEBPACK_IMPORTED_MODULE_1__["default"]);

customElements.define("hui-media-control-card", HuiMediaControlCard);

/***/ }),

/***/ "./src/panels/lovelace/cards/hui-picture-card.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-picture-card.ts ***!
  \*******************************************************/
/*! exports provided: HuiPictureCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiPictureCard", function() { return HuiPictureCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");






var HuiPictureCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiPictureCard, _super);
    function HuiPictureCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiPictureCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-picture-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e(10), __webpack_require__.e("hui-picture-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-picture-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-picture-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-picture-card-editor")];
                }
            });
        });
    };
    HuiPictureCard.getStubConfig = function () {
        return {
            image: "https://www.home-assistant.io/images/merchandise/shirt-frontpage.png",
            tap_action: { action: "none" },
            hold_action: { action: "none" },
        };
    };
    HuiPictureCard.prototype.getCardSize = function () {
        return 3;
    };
    HuiPictureCard.prototype.setConfig = function (config) {
        if (!config || !config.image) {
            throw new Error("Invalid Configuration: 'image' required");
        }
        this._config = config;
    };
    HuiPictureCard.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n        class=\"", "\"\n      >\n        <img src=\"", "\" />\n      </ha-card>\n    "], ["\n      <ha-card\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n        class=\"",
            "\"\n      >\n        <img src=\"", "\" />\n      </ha-card>\n    "])), this._handleTap, this._handleHold, Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_5__["longPress"])(), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])({
            clickable: Boolean(this._config.tap_action || this._config.hold_action),
        }), this.hass.hassUrl(this._config.image));
    };
    Object.defineProperty(HuiPictureCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-card {\n        overflow: hidden;\n      }\n\n      ha-card.clickable {\n        cursor: pointer;\n      }\n\n      img {\n        display: block;\n        width: 100%;\n      }\n    "], ["\n      ha-card {\n        overflow: hidden;\n      }\n\n      ha-card.clickable {\n        cursor: pointer;\n      }\n\n      img {\n        display: block;\n        width: 100%;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiPictureCard.prototype._handleTap = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_4__["handleClick"])(this, this.hass, this._config, false);
    };
    HuiPictureCard.prototype._handleHold = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_4__["handleClick"])(this, this.hass, this._config, true);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiPictureCard.prototype, "_config", void 0);
    HuiPictureCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-picture-card")
    ], HuiPictureCard);
    return HuiPictureCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-picture-elements-card.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-picture-elements-card.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _picture_elements_create_styled_hui_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picture-elements/create-styled-hui-element */ "./src/panels/lovelace/cards/picture-elements/create-styled-hui-element.ts");



var HuiPictureElementsCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiPictureElementsCard, _super);
    function HuiPictureElementsCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HuiPictureElementsCard.prototype, "hass", {
        set: function (hass) {
            this._hass = hass;
            for (var _i = 0, _a = Array.from(this.shadowRoot.querySelectorAll("#root > *")); _i < _a.length; _i++) {
                var el = _a[_i];
                var element = el;
                element.hass = this._hass;
            }
        },
        enumerable: true,
        configurable: true
    });
    HuiPictureElementsCard.prototype.getCardSize = function () {
        return 4;
    };
    HuiPictureElementsCard.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Invalid Configuration");
        }
        else if (!(config.image || config.camera_image || config.state_image) ||
            (config.state_image && !config.entity)) {
            throw new Error("Invalid Configuration: image required");
        }
        else if (!Array.isArray(config.elements)) {
            throw new Error("Invalid Configuration: elements required");
        }
        this._config = config;
    };
    HuiPictureElementsCard.prototype.render = function () {
        var _this = this;
        if (!this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card .header=\"", "\">\n        <div id=\"root\">\n          <hui-image\n            .hass=", "\n            .image=", "\n            .stateImage=", "\n            .stateFilter=", "\n            .cameraImage=", "\n            .cameraView=", "\n            .entity=", "\n            .aspectRatio=", "\n          ></hui-image>\n          ", "\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card .header=\"", "\">\n        <div id=\"root\">\n          <hui-image\n            .hass=", "\n            .image=", "\n            .stateImage=", "\n            .stateFilter=", "\n            .cameraImage=", "\n            .cameraView=", "\n            .entity=", "\n            .aspectRatio=", "\n          ></hui-image>\n          ",
            "\n        </div>\n      </ha-card>\n    "])), this._config.title, this._hass, this._config.image, this._config.state_image, this._config.state_filter, this._config.camera_image, this._config.camera_view, this._config.entity, this._config.aspect_ratio, this._config.elements.map(function (elementConfig) {
            var element = Object(_picture_elements_create_styled_hui_element__WEBPACK_IMPORTED_MODULE_2__["createStyledHuiElement"])(elementConfig);
            element.hass = _this._hass;
            return element;
        }));
    };
    Object.defineProperty(HuiPictureElementsCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      #root {\n        position: relative;\n      }\n\n      .element {\n        position: absolute;\n        transform: translate(-50%, -50%);\n      }\n\n      ha-card {\n        overflow: hidden;\n      }\n    "], ["\n      #root {\n        position: relative;\n      }\n\n      .element {\n        position: absolute;\n        transform: translate(-50%, -50%);\n      }\n\n      ha-card {\n        overflow: hidden;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiPictureElementsCard.prototype, "_config", void 0);
    HuiPictureElementsCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-picture-elements-card")
    ], HuiPictureElementsCard);
    return HuiPictureElementsCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-picture-entity-card.ts":
/*!**************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-picture-entity-card.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_hui_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-image */ "./src/panels/lovelace/components/hui-image.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");













var HuiPictureEntityCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiPictureEntityCard, _super);
    function HuiPictureEntityCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiPictureEntityCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-picture-entity-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e(10), __webpack_require__.e("hui-picture-entity-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-picture-entity-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-picture-entity-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-picture-entity-card-editor")];
                }
            });
        });
    };
    HuiPictureEntityCard.getStubConfig = function () {
        return {
            entity: "",
            image: "https://www.home-assistant.io/images/merchandise/shirt-frontpage.png",
        };
    };
    HuiPictureEntityCard.prototype.getCardSize = function () {
        return 3;
    };
    HuiPictureEntityCard.prototype.setConfig = function (config) {
        if (!config || !config.entity) {
            throw new Error("Invalid Configuration: 'entity' required");
        }
        if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_6__["computeDomain"])(config.entity) !== "camera" &&
            (!config.image && !config.state_image && !config.camera_image)) {
            throw new Error("No image source configured.");
        }
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ show_name: true, show_state: true }, config);
    };
    HuiPictureEntityCard.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_12__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiPictureEntityCard.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        var name = this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(stateObj);
        var state = Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_8__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language);
        var footer = "";
        if (this._config.show_name && this._config.show_state) {
            footer = Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <div class=\"footer both\">\n          <div>", "</div>\n          <div>", "</div>\n        </div>\n      "], ["\n        <div class=\"footer both\">\n          <div>", "</div>\n          <div>", "</div>\n        </div>\n      "])), name, state);
        }
        else if (this._config.show_name) {
            footer = Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <div class=\"footer\">", "</div>\n      "], ["\n        <div class=\"footer\">", "</div>\n      "])), name);
        }
        else if (this._config.show_state) {
            footer = Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <div class=\"footer state\">", "</div>\n      "], ["\n        <div class=\"footer state\">", "</div>\n      "])), state);
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card>\n        <hui-image\n          .hass=", "\n          .image=", "\n          .stateImage=", "\n          .stateFilter=", "\n          .cameraImage=", "\n          .cameraView=", "\n          .entity=", "\n          .aspectRatio=", "\n          @ha-click=", "\n          @ha-hold=", "\n          .longPress=", "\n          class=", "\n        ></hui-image>\n        ", "\n      </ha-card>\n    "], ["\n      <ha-card>\n        <hui-image\n          .hass=", "\n          .image=", "\n          .stateImage=", "\n          .stateFilter=", "\n          .cameraImage=",
            "\n          .cameraView=", "\n          .entity=", "\n          .aspectRatio=", "\n          @ha-click=", "\n          @ha-hold=", "\n          .longPress=", "\n          class=",
            "\n        ></hui-image>\n        ", "\n      </ha-card>\n    "])), this.hass, this._config.image, this._config.state_image, this._config.state_filter, Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_6__["computeDomain"])(this._config.entity) === "camera"
            ? this._config.entity
            : this._config.camera_image, this._config.camera_view, this._config.entity, this._config.aspect_ratio, this._handleTap, this._handleHold, Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_9__["longPress"])(), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            clickable: stateObj.state !== _data_entity__WEBPACK_IMPORTED_MODULE_11__["UNAVAILABLE"],
        }), footer);
    };
    Object.defineProperty(HuiPictureEntityCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-card {\n        min-height: 75px;\n        overflow: hidden;\n        position: relative;\n      }\n\n      hui-image.clickable {\n        cursor: pointer;\n      }\n\n      .footer {\n        /* start paper-font-common-nowrap style */\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        /* end paper-font-common-nowrap style */\n\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n        padding: 16px;\n        font-size: 16px;\n        line-height: 16px;\n        color: white;\n      }\n\n      .both {\n        display: flex;\n        justify-content: space-between;\n      }\n\n      .state {\n        text-align: right;\n      }\n    "], ["\n      ha-card {\n        min-height: 75px;\n        overflow: hidden;\n        position: relative;\n      }\n\n      hui-image.clickable {\n        cursor: pointer;\n      }\n\n      .footer {\n        /* start paper-font-common-nowrap style */\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        /* end paper-font-common-nowrap style */\n\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n        padding: 16px;\n        font-size: 16px;\n        line-height: 16px;\n        color: white;\n      }\n\n      .both {\n        display: flex;\n        justify-content: space-between;\n      }\n\n      .state {\n        text-align: right;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiPictureEntityCard.prototype._handleTap = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_10__["handleClick"])(this, this.hass, this._config, false);
    };
    HuiPictureEntityCard.prototype._handleHold = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_10__["handleClick"])(this, this.hass, this._config, true);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiPictureEntityCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiPictureEntityCard.prototype, "_config", void 0);
    HuiPictureEntityCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-picture-entity-card")
    ], HuiPictureEntityCard);
    return HuiPictureEntityCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-picture-glance-card.ts":
/*!**************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-picture-glance-card.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_hui_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hui-image */ "./src/panels/lovelace/components/hui-image.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
















var STATES_OFF = new Set(["closed", "locked", "not_home", "off"]);
var HuiPictureGlanceCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiPictureGlanceCard, _super);
    function HuiPictureGlanceCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiPictureGlanceCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-picture-glance-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e(10), __webpack_require__.e("hui-picture-glance-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-picture-glance-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-picture-glance-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-picture-glance-card-editor")];
                }
            });
        });
    };
    HuiPictureGlanceCard.getStubConfig = function () {
        return {
            image: "https://www.home-assistant.io/images/merchandise/shirt-frontpage.png",
            entities: [],
        };
    };
    HuiPictureGlanceCard.prototype.getCardSize = function () {
        return 3;
    };
    HuiPictureGlanceCard.prototype.setConfig = function (config) {
        var _this = this;
        if (!config ||
            !config.entities ||
            !Array.isArray(config.entities) ||
            !(config.image || config.camera_image || config.state_image) ||
            (config.state_image && !config.entity)) {
            throw new Error("Invalid card configuration");
        }
        var entities = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_13__["processConfigEntities"])(config.entities);
        this._entitiesDialog = [];
        this._entitiesToggle = [];
        entities.forEach(function (item) {
            if (config.force_dialog ||
                !_common_const__WEBPACK_IMPORTED_MODULE_11__["DOMAINS_TOGGLE"].has(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__["computeDomain"])(item.entity))) {
                _this._entitiesDialog.push(item);
            }
            else {
                _this._entitiesToggle.push(item);
            }
        });
        this._config = config;
    };
    HuiPictureGlanceCard.prototype.shouldUpdate = function (changedProps) {
        if (Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_15__["hasConfigOrEntityChanged"])(this, changedProps)) {
            return true;
        }
        var oldHass = changedProps.get("hass");
        if (this._entitiesDialog) {
            for (var _i = 0, _a = this._entitiesDialog; _i < _a.length; _i++) {
                var entity = _a[_i];
                if (oldHass.states[entity.entity] !== this.hass.states[entity.entity]) {
                    return true;
                }
            }
        }
        if (this._entitiesToggle) {
            for (var _b = 0, _c = this._entitiesToggle; _b < _c.length; _b++) {
                var entity = _c[_b];
                if (oldHass.states[entity.entity] !== this.hass.states[entity.entity]) {
                    return true;
                }
            }
        }
        return false;
    };
    HuiPictureGlanceCard.prototype.render = function () {
        var _this = this;
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card>\n        <hui-image\n          class=", "\n          @ha-click=", "\n          @ha-hold=", "\n          .longPress=", "\n          .config=", "\n          .hass=", "\n          .image=", "\n          .stateImage=", "\n          .stateFilter=", "\n          .cameraImage=", "\n          .cameraView=", "\n          .entity=", "\n          .aspectRatio=", "\n        ></hui-image>\n        <div class=\"box\">\n          ", "\n          <div>\n            ", "\n          </div>\n          <div>\n            ", "\n          </div>\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card>\n        <hui-image\n          class=",
            "\n          @ha-click=", "\n          @ha-hold=", "\n          .longPress=", "\n          .config=", "\n          .hass=", "\n          .image=", "\n          .stateImage=", "\n          .stateFilter=", "\n          .cameraImage=", "\n          .cameraView=", "\n          .entity=", "\n          .aspectRatio=", "\n        ></hui-image>\n        <div class=\"box\">\n          ",
            "\n          <div>\n            ",
            "\n          </div>\n          <div>\n            ",
            "\n          </div>\n        </div>\n      </ha-card>\n    "])), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            clickable: Boolean(this._config.tap_action ||
                this._config.hold_action ||
                this._config.camera_image),
        }), this._handleTap, this._handleHold, Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_12__["longPress"])(), this._config, this.hass, this._config.image, this._config.state_image, this._config.state_filter, this._config.camera_image, this._config.camera_view, this._config.entity, this._config.aspect_ratio, this._config.title
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"title\">", "</div>\n              "], ["\n                <div class=\"title\">", "</div>\n              "])), this._config.title + "hha") : "", this._entitiesDialog.map(function (entityConf) {
            return _this.renderEntity(entityConf, true);
        }), this._entitiesToggle.map(function (entityConf) {
            return _this.renderEntity(entityConf, false);
        }));
    };
    HuiPictureGlanceCard.prototype.renderEntity = function (entityConf, dialog) {
        var stateObj = this.hass.states[entityConf.entity];
        entityConf = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ tap_action: { action: dialog ? "more-info" : "toggle" } }, entityConf);
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning-element\n          label=", "\n        ></hui-warning-element>\n      "], ["\n        <hui-warning-element\n          label=",
                "\n        ></hui-warning-element>\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", entityConf.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-icon\n        @ha-click=", "\n        @ha-hold=", "\n        .longPress=", "\n        .config=", "\n        class=\"", "\"\n        .icon=\"", "\"\n        title=\"", "\"\n      ></ha-icon>\n    "], ["\n      <ha-icon\n        @ha-click=", "\n        @ha-hold=", "\n        .longPress=", "\n        .config=", "\n        class=\"",
            "\"\n        .icon=\"", "\"\n        title=\"",
            "\"\n      ></ha-icon>\n    "])), this._handleTap, this._handleHold, Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_12__["longPress"])(), entityConf, Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            "state-on": !STATES_OFF.has(stateObj.state),
        }), entityConf.icon || Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_5__["stateIcon"])(stateObj), "\n            " + Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["computeStateName"])(stateObj) + " : " + Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_10__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language) + "\n          ");
    };
    HuiPictureGlanceCard.prototype._handleTap = function (ev) {
        var config = ev.currentTarget.config;
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_14__["handleClick"])(this, this.hass, config, false);
    };
    HuiPictureGlanceCard.prototype._handleHold = function (ev) {
        var config = ev.currentTarget.config;
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_14__["handleClick"])(this, this.hass, config, true);
    };
    Object.defineProperty(HuiPictureGlanceCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-card {\n        position: relative;\n        min-height: 48px;\n        overflow: hidden;\n      }\n\n      hui-image.clickable {\n        cursor: pointer;\n      }\n\n      .box {\n        /* start paper-font-common-nowrap style */\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        /* end paper-font-common-nowrap style */\n\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n        padding: 4px 8px;\n        font-size: 16px;\n        line-height: 40px;\n        color: white;\n        display: flex;\n        justify-content: space-between;\n      }\n\n      .box .title {\n        font-weight: 500;\n        margin-left: 8px;\n      }\n\n      ha-icon {\n        cursor: pointer;\n        padding: 8px;\n        color: #a9a9a9;\n      }\n\n      ha-icon.state-on {\n        color: white;\n      }\n    "], ["\n      ha-card {\n        position: relative;\n        min-height: 48px;\n        overflow: hidden;\n      }\n\n      hui-image.clickable {\n        cursor: pointer;\n      }\n\n      .box {\n        /* start paper-font-common-nowrap style */\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        /* end paper-font-common-nowrap style */\n\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n        padding: 4px 8px;\n        font-size: 16px;\n        line-height: 40px;\n        color: white;\n        display: flex;\n        justify-content: space-between;\n      }\n\n      .box .title {\n        font-weight: 500;\n        margin-left: 8px;\n      }\n\n      ha-icon {\n        cursor: pointer;\n        padding: 8px;\n        color: #a9a9a9;\n      }\n\n      ha-icon.state-on {\n        color: white;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiPictureGlanceCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiPictureGlanceCard.prototype, "_config", void 0);
    HuiPictureGlanceCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-picture-glance-card")
    ], HuiPictureGlanceCard);
    return HuiPictureGlanceCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-plant-status-card.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-plant-status-card.ts ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");







var SENSORS = {
    moisture: "hass:water",
    temperature: "hass:thermometer",
    brightness: "hass:white-balance-sunny",
    conductivity: "hass:emoticon-poop",
    battery: "hass:battery",
};
var HuiPlantStatusCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiPlantStatusCard, _super);
    function HuiPlantStatusCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiPlantStatusCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-plant-status-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-plant-status-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-plant-status-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-plant-status-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-plant-status-card-editor")];
                }
            });
        });
    };
    HuiPlantStatusCard.getStubConfig = function () {
        return { entity: "" };
    };
    HuiPlantStatusCard.prototype.getCardSize = function () {
        return 3;
    };
    HuiPlantStatusCard.prototype.setConfig = function (config) {
        if (!config.entity || config.entity.split(".")[0] !== "plant") {
            throw new Error("Specify an entity from within the plant domain.");
        }
        this._config = config;
    };
    HuiPlantStatusCard.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_6__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiPlantStatusCard.prototype.render = function () {
        var _this = this;
        if (!this.hass || !this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card\n        class=\"", "\"\n      >\n        <div\n          class=\"banner\"\n          style=\"background-image:url(", ")\"\n        >\n          <div class=\"header\">\n            ", "\n          </div>\n        </div>\n        <div class=\"content\">\n          ", "\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card\n        class=\"", "\"\n      >\n        <div\n          class=\"banner\"\n          style=\"background-image:url(", ")\"\n        >\n          <div class=\"header\">\n            ", "\n          </div>\n        </div>\n        <div class=\"content\">\n          ",
            "\n        </div>\n      </ha-card>\n    "])), stateObj.attributes.entity_picture ? "has-plant-image" : "", stateObj.attributes.entity_picture, this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj), this.computeAttributes(stateObj).map(function (item) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div\n                class=\"attributes\"\n                @click=\"", "\"\n                .value=\"", "\"\n              >\n                <div>\n                  <ha-icon\n                    icon=\"", "\"\n                  ></ha-icon>\n                </div>\n                <div\n                  class=\"", "\"\n                >\n                  ", "\n                </div>\n                <div class=\"uom\">\n                  ", "\n                </div>\n              </div>\n            "], ["\n              <div\n                class=\"attributes\"\n                @click=\"", "\"\n                .value=\"", "\"\n              >\n                <div>\n                  <ha-icon\n                    icon=\"",
            "\"\n                  ></ha-icon>\n                </div>\n                <div\n                  class=\"",
            "\"\n                >\n                  ", "\n                </div>\n                <div class=\"uom\">\n                  ", "\n                </div>\n              </div>\n            "])), _this._handleMoreInfo, item, _this.computeIcon(item, stateObj.attributes.battery), stateObj.attributes.problem.indexOf(item) === -1
            ? ""
            : "problem", stateObj.attributes[item], stateObj.attributes.unit_of_measurement_dict[item] || ""); }));
    };
    Object.defineProperty(HuiPlantStatusCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .banner {\n        display: flex;\n        align-items: flex-end;\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center;\n        padding-top: 12px;\n      }\n\n      .has-plant-image .banner {\n        padding-top: 30%;\n      }\n\n      .header {\n        /* start paper-font-headline style */\n        font-family: \"Roboto\", \"Noto\", sans-serif;\n        -webkit-font-smoothing: antialiased; /* OS X subpixel AA bleed bug */\n        text-rendering: optimizeLegibility;\n        font-size: 24px;\n        font-weight: 400;\n        letter-spacing: -0.012em;\n        /* end paper-font-headline style */\n\n        line-height: 40px;\n        padding: 8px 16px;\n      }\n\n      .has-plant-image .header {\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 16px;\n        padding: 16px;\n        color: white;\n        width: 100%;\n        background: rgba(0, 0, 0, var(--dark-secondary-opacity));\n      }\n\n      .content {\n        display: flex;\n        justify-content: space-between;\n        padding: 16px 32px 24px 32px;\n      }\n\n      .has-plant-image .content {\n        padding-bottom: 16px;\n      }\n\n      ha-icon {\n        color: var(--paper-item-icon-color);\n        margin-bottom: 8px;\n      }\n\n      .attributes {\n        cursor: pointer;\n      }\n\n      .attributes div {\n        text-align: center;\n      }\n\n      .problem {\n        color: var(--google-red-500);\n        font-weight: bold;\n      }\n\n      .uom {\n        color: var(--secondary-text-color);\n      }\n    "], ["\n      .banner {\n        display: flex;\n        align-items: flex-end;\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center;\n        padding-top: 12px;\n      }\n\n      .has-plant-image .banner {\n        padding-top: 30%;\n      }\n\n      .header {\n        /* start paper-font-headline style */\n        font-family: \"Roboto\", \"Noto\", sans-serif;\n        -webkit-font-smoothing: antialiased; /* OS X subpixel AA bleed bug */\n        text-rendering: optimizeLegibility;\n        font-size: 24px;\n        font-weight: 400;\n        letter-spacing: -0.012em;\n        /* end paper-font-headline style */\n\n        line-height: 40px;\n        padding: 8px 16px;\n      }\n\n      .has-plant-image .header {\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 16px;\n        padding: 16px;\n        color: white;\n        width: 100%;\n        background: rgba(0, 0, 0, var(--dark-secondary-opacity));\n      }\n\n      .content {\n        display: flex;\n        justify-content: space-between;\n        padding: 16px 32px 24px 32px;\n      }\n\n      .has-plant-image .content {\n        padding-bottom: 16px;\n      }\n\n      ha-icon {\n        color: var(--paper-item-icon-color);\n        margin-bottom: 8px;\n      }\n\n      .attributes {\n        cursor: pointer;\n      }\n\n      .attributes div {\n        text-align: center;\n      }\n\n      .problem {\n        color: var(--google-red-500);\n        font-weight: bold;\n      }\n\n      .uom {\n        color: var(--secondary-text-color);\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiPlantStatusCard.prototype.computeAttributes = function (stateObj) {
        return Object.keys(SENSORS).filter(function (key) { return key in stateObj.attributes; });
    };
    HuiPlantStatusCard.prototype.computeIcon = function (attr, batLvl) {
        var icon = SENSORS[attr];
        if (attr === "battery") {
            if (batLvl <= 5) {
                return icon + "-alert";
            }
            if (batLvl < 95) {
                return icon + "-" + Math.round(batLvl / 10 - 0.01) * 10;
            }
        }
        return icon;
    };
    HuiPlantStatusCard.prototype._handleMoreInfo = function (ev) {
        var target = ev.currentTarget;
        var stateObj = this.hass.states[this._config.entity];
        if (target.value) {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "hass-more-info", {
                entityId: stateObj.attributes.sensors[target.value],
            });
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiPlantStatusCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiPlantStatusCard.prototype, "_config", void 0);
    HuiPlantStatusCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-plant-status-card")
    ], HuiPlantStatusCard);
    return HuiPlantStatusCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-sensor-card.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-sensor-card.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/history */ "./src/data/history.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");












var midPoint = function (_Ax, _Ay, _Bx, _By) {
    var _Zx = (_Ax - _Bx) / 2 + _Bx;
    var _Zy = (_Ay - _By) / 2 + _By;
    return [_Zx, _Zy];
};
var getPath = function (coords) {
    var next;
    var Z;
    var X = 0;
    var Y = 1;
    var path = "";
    var last = coords.filter(Boolean)[0];
    path += "M " + last[X] + "," + last[Y];
    for (var _i = 0, coords_1 = coords; _i < coords_1.length; _i++) {
        var coord = coords_1[_i];
        next = coord;
        Z = midPoint(last[X], last[Y], next[X], next[Y]);
        path += " " + Z[X] + "," + Z[Y];
        path += " Q" + next[X] + "," + next[Y];
        last = next;
    }
    path += " " + next[X] + "," + next[Y];
    return path;
};
var calcPoints = function (history, hours, width, detail, min, max) {
    var coords = [];
    var margin = 5;
    var height = 80;
    width -= 10;
    var yRatio = (max - min) / height;
    yRatio = yRatio !== 0 ? yRatio : height;
    var xRatio = width / (hours - (detail === 1 ? 1 : 0));
    xRatio = isFinite(xRatio) ? xRatio : width;
    var getCoords = function (item, i, offset, depth) {
        if (offset === void 0) { offset = 0; }
        if (depth === void 0) { depth = 1; }
        if (depth > 1) {
            return item.forEach(function (subItem, index) {
                return getCoords(subItem, i, index, depth - 1);
            });
        }
        var average = item.reduce(function (sum, entry) { return sum + parseFloat(entry.state); }, 0) /
            item.length;
        var x = xRatio * (i + offset / 6) + margin;
        var y = height - (average - min) / yRatio + margin * 2;
        return coords.push([x, y]);
    };
    history.forEach(function (item, i) { return getCoords(item, i, 0, detail); });
    if (coords.length === 1) {
        coords[1] = [width + margin, coords[0][1]];
    }
    coords.push([width + margin, coords[coords.length - 1][1]]);
    return coords;
};
var coordinates = function (history, hours, width, detail) {
    history.forEach(function (item) { return (item.state = Number(item.state)); });
    history = history.filter(function (item) { return !Number.isNaN(item.state); });
    var min = Math.min.apply(Math, history.map(function (item) { return item.state; }));
    var max = Math.max.apply(Math, history.map(function (item) { return item.state; }));
    var now = new Date().getTime();
    var reduce = function (res, item, point) {
        var age = now - new Date(item.last_changed).getTime();
        var key = Math.abs(age / (1000 * 3600) - hours);
        if (point) {
            key = (key - Math.floor(key)) * 60;
            key = Number((Math.round(key / 10) * 10).toString()[0]);
        }
        else {
            key = Math.floor(key);
        }
        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(item);
        return res;
    };
    history = history.reduce(function (res, item) { return reduce(res, item, false); }, []);
    if (detail > 1) {
        history = history.map(function (entry) {
            return entry.reduce(function (res, item) { return reduce(res, item, true); }, []);
        });
    }
    return calcPoints(history, hours, width, detail, min, max);
};
var HuiSensorCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiSensorCard, _super);
    function HuiSensorCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiSensorCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-sensor-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-sensor-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-sensor-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-sensor-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-sensor-card-editor")];
                }
            });
        });
    };
    HuiSensorCard.getStubConfig = function () {
        return { entity: "" };
    };
    HuiSensorCard.prototype.setConfig = function (config) {
        if (!config.entity || config.entity.split(".")[0] !== "sensor") {
            throw new Error("Specify an entity from within the sensor domain.");
        }
        var cardConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ detail: 1, theme: "default", hours_to_show: 24 }, config);
        cardConfig.hours_to_show = Number(cardConfig.hours_to_show);
        cardConfig.detail =
            cardConfig.detail === 1 || cardConfig.detail === 2
                ? cardConfig.detail
                : 1;
        this._config = cardConfig;
    };
    HuiSensorCard.prototype.getCardSize = function () {
        return 3;
    };
    HuiSensorCard.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        var graph;
        if (stateObj && this._config.graph === "line") {
            if (!stateObj.attributes.unit_of_measurement) {
                return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          <hui-warning\n            >Entity: ", " - Has no Unit of Measurement and\n            therefore can not display a line graph.</hui-warning\n          >\n        "], ["\n          <hui-warning\n            >Entity: ", " - Has no Unit of Measurement and\n            therefore can not display a line graph.</hui-warning\n          >\n        "])), this._config.entity);
            }
            else if (!this._history) {
                graph = Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["svg"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 500 100\"></svg>\n        "], ["\n          <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 500 100\"></svg>\n        "])));
            }
            else {
                graph = Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["svg"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 500 100\">\n            <path\n              d=\"", "\"\n              fill=\"none\"\n              stroke=\"var(--accent-color)\"\n              stroke-width=\"5\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n            />\n          </svg>\n        "], ["\n          <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 500 100\">\n            <path\n              d=\"", "\"\n              fill=\"none\"\n              stroke=\"var(--accent-color)\"\n              stroke-width=\"5\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n            />\n          </svg>\n        "])), this._history);
            }
        }
        else {
            graph = "";
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card @click=\"", "\">\n        <div class=\"flex\">\n          <div class=\"icon\">\n            <ha-icon\n              .icon=\"", "\"\n            ></ha-icon>\n          </div>\n          <div class=\"header\">\n            <span class=\"name\"\n              >", "</span\n            >\n          </div>\n        </div>\n        <div class=\"flex info\">\n          <span id=\"value\">", "</span>\n          <span id=\"measurement\"\n            >", "</span\n          >\n        </div>\n        <div class=\"graph\"><div>", "</div></div>\n      </ha-card>\n    "], ["\n      <ha-card @click=\"", "\">\n        <div class=\"flex\">\n          <div class=\"icon\">\n            <ha-icon\n              .icon=\"", "\"\n            ></ha-icon>\n          </div>\n          <div class=\"header\">\n            <span class=\"name\"\n              >", "</span\n            >\n          </div>\n        </div>\n        <div class=\"flex info\">\n          <span id=\"value\">", "</span>\n          <span id=\"measurement\"\n            >",
            "</span\n          >\n        </div>\n        <div class=\"graph\"><div>", "</div></div>\n      </ha-card>\n    "])), this._handleClick, this._config.icon || Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_5__["stateIcon"])(stateObj), this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj), stateObj.state, this._config.unit ||
            stateObj.attributes.unit_of_measurement, graph);
    };
    HuiSensorCard.prototype.firstUpdated = function () {
        this._date = new Date();
    };
    HuiSensorCard.prototype.shouldUpdate = function (changedProps) {
        if (changedProps.has("_history")) {
            return true;
        }
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_11__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiSensorCard.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (!this._config || this._config.graph !== "line" || !this.hass) {
            return;
        }
        var oldHass = changedProps.get("hass");
        if (!oldHass || oldHass.themes !== this.hass.themes) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_3__["default"])(this, this.hass.themes, this._config.theme);
        }
        var minute = 60000;
        if (changedProps.has("_config")) {
            this._getHistory();
        }
        else if (Date.now() - this._date.getTime() >= minute) {
            this._getHistory();
        }
    };
    HuiSensorCard.prototype._handleClick = function () {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "hass-more-info", { entityId: this._config.entity });
    };
    HuiSensorCard.prototype._getHistory = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var endTime, startTime, stateHistory, coords;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endTime = new Date();
                        startTime = new Date();
                        startTime.setHours(endTime.getHours() - this._config.hours_to_show);
                        return [4 /*yield*/, Object(_data_history__WEBPACK_IMPORTED_MODULE_10__["fetchRecent"])(this.hass, this._config.entity, startTime, endTime)];
                    case 1:
                        stateHistory = _a.sent();
                        if (stateHistory.length < 1 || stateHistory[0].length < 1) {
                            return [2 /*return*/];
                        }
                        coords = coordinates(stateHistory[0], this._config.hours_to_show, 500, this._config.detail);
                        this._history = getPath(coords);
                        this._date = new Date();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HuiSensorCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: flex;\n        flex-direction: column;\n      }\n\n      ha-card {\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        padding: 16px;\n        position: relative;\n        cursor: pointer;\n      }\n\n      .flex {\n        display: flex;\n      }\n\n      .header {\n        align-items: center;\n        display: flex;\n        min-width: 0;\n        opacity: 0.8;\n        position: relative;\n      }\n\n      .name {\n        display: block;\n        display: -webkit-box;\n        font-size: 1.2rem;\n        font-weight: 500;\n        max-height: 1.4rem;\n        margin-top: 2px;\n        opacity: 0.8;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        -webkit-line-clamp: 1;\n        -webkit-box-orient: vertical;\n        word-wrap: break-word;\n        word-break: break-all;\n      }\n\n      .icon {\n        color: var(--paper-item-icon-color, #44739e);\n        display: inline-block;\n        flex: 0 0 40px;\n        line-height: 40px;\n        position: relative;\n        text-align: center;\n        width: 40px;\n      }\n\n      .info {\n        flex-wrap: wrap;\n        margin: 16px 0 16px 8px;\n      }\n\n      #value {\n        display: inline-block;\n        font-size: 2rem;\n        font-weight: 400;\n        line-height: 1em;\n        margin-right: 4px;\n      }\n\n      #measurement {\n        align-self: flex-end;\n        display: inline-block;\n        font-size: 1.3rem;\n        line-height: 1.2em;\n        margin-top: 0.1em;\n        opacity: 0.6;\n        vertical-align: bottom;\n      }\n\n      .graph {\n        align-self: flex-end;\n        margin: auto;\n        margin-bottom: 0px;\n        position: relative;\n        width: 100%;\n      }\n\n      .graph > div {\n        align-self: flex-end;\n        margin: auto 8px;\n      }\n    "], ["\n      :host {\n        display: flex;\n        flex-direction: column;\n      }\n\n      ha-card {\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        padding: 16px;\n        position: relative;\n        cursor: pointer;\n      }\n\n      .flex {\n        display: flex;\n      }\n\n      .header {\n        align-items: center;\n        display: flex;\n        min-width: 0;\n        opacity: 0.8;\n        position: relative;\n      }\n\n      .name {\n        display: block;\n        display: -webkit-box;\n        font-size: 1.2rem;\n        font-weight: 500;\n        max-height: 1.4rem;\n        margin-top: 2px;\n        opacity: 0.8;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        -webkit-line-clamp: 1;\n        -webkit-box-orient: vertical;\n        word-wrap: break-word;\n        word-break: break-all;\n      }\n\n      .icon {\n        color: var(--paper-item-icon-color, #44739e);\n        display: inline-block;\n        flex: 0 0 40px;\n        line-height: 40px;\n        position: relative;\n        text-align: center;\n        width: 40px;\n      }\n\n      .info {\n        flex-wrap: wrap;\n        margin: 16px 0 16px 8px;\n      }\n\n      #value {\n        display: inline-block;\n        font-size: 2rem;\n        font-weight: 400;\n        line-height: 1em;\n        margin-right: 4px;\n      }\n\n      #measurement {\n        align-self: flex-end;\n        display: inline-block;\n        font-size: 1.3rem;\n        line-height: 1.2em;\n        margin-top: 0.1em;\n        opacity: 0.6;\n        vertical-align: bottom;\n      }\n\n      .graph {\n        align-self: flex-end;\n        margin: auto;\n        margin-bottom: 0px;\n        position: relative;\n        width: 100%;\n      }\n\n      .graph > div {\n        align-self: flex-end;\n        margin: auto 8px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiSensorCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiSensorCard.prototype, "_config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiSensorCard.prototype, "_history", void 0);
    HuiSensorCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-sensor-card")
    ], HuiSensorCard);
    return HuiSensorCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-shopping-list-card.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-shopping-list-card.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/repeat */ "./node_modules/lit-html/directives/repeat.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _data_shopping_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/shopping-list */ "./src/data/shopping-list.ts");







var HuiShoppingListCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiShoppingListCard, _super);
    function HuiShoppingListCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiShoppingListCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-shopping-list-editor */[__webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-shopping-list-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-shopping-list-editor */ "./src/panels/lovelace/editor/config-elements/hui-shopping-list-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-shopping-list-card-editor")];
                }
            });
        });
    };
    HuiShoppingListCard.getStubConfig = function () {
        return {};
    };
    HuiShoppingListCard.prototype.getCardSize = function () {
        return (this._config ? (this._config.title ? 1 : 0) : 0) + 3;
    };
    HuiShoppingListCard.prototype.setConfig = function (config) {
        this._config = config;
        this._uncheckedItems = [];
        this._checkedItems = [];
        this._fetchData();
    };
    HuiShoppingListCard.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        if (this.hass) {
            this._unsubEvents = this.hass.connection.subscribeEvents(function () { return _this._fetchData(); }, "shopping_list_updated");
            this._fetchData();
        }
    };
    HuiShoppingListCard.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        if (this._unsubEvents) {
            this._unsubEvents.then(function (unsub) { return unsub(); });
        }
    };
    HuiShoppingListCard.prototype.render = function () {
        var _this = this;
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card .header=\"", "\">\n        <div class=\"addRow\">\n          <ha-icon\n            class=\"addButton\"\n            @click=\"", "\"\n            icon=\"hass:plus\"\n            .title=\"", "\"\n          >\n          </ha-icon>\n          <paper-item-body>\n            <paper-input\n              no-label-float\n              class=\"addBox\"\n              placeholder=\"", "\"\n              @keydown=\"", "\"\n            ></paper-input>\n          </paper-item-body>\n        </div>\n        ", "\n        ", "\n      </ha-card>\n    "], ["\n      <ha-card .header=\"", "\">\n        <div class=\"addRow\">\n          <ha-icon\n            class=\"addButton\"\n            @click=\"", "\"\n            icon=\"hass:plus\"\n            .title=\"",
            "\"\n          >\n          </ha-icon>\n          <paper-item-body>\n            <paper-input\n              no-label-float\n              class=\"addBox\"\n              placeholder=\"",
            "\"\n              @keydown=\"", "\"\n            ></paper-input>\n          </paper-item-body>\n        </div>\n        ",
            "\n        ",
            "\n      </ha-card>\n    "])), this._config.title, this._addItem, this.hass.localize("ui.panel.lovelace.cards.shopping-list.add_item"), this.hass.localize("ui.panel.lovelace.cards.shopping-list.add_item"), this._addKeyPress, Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_2__["repeat"])(this._uncheckedItems, function (item) { return item.id; }, function (item, index) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"editRow\">\n                <paper-checkbox\n                  slot=\"item-icon\"\n                  id=\"", "\"\n                  ?checked=\"", "\"\n                  .itemId=\"", "\"\n                  @click=\"", "\"\n                  tabindex=\"0\"\n                ></paper-checkbox>\n                <paper-item-body>\n                  <paper-input\n                    no-label-float\n                    .value=\"", "\"\n                    .itemId=\"", "\"\n                    @change=\"", "\"\n                  ></paper-input>\n                </paper-item-body>\n              </div>\n            "], ["\n              <div class=\"editRow\">\n                <paper-checkbox\n                  slot=\"item-icon\"\n                  id=\"", "\"\n                  ?checked=\"", "\"\n                  .itemId=\"", "\"\n                  @click=\"", "\"\n                  tabindex=\"0\"\n                ></paper-checkbox>\n                <paper-item-body>\n                  <paper-input\n                    no-label-float\n                    .value=\"", "\"\n                    .itemId=\"", "\"\n                    @change=\"", "\"\n                  ></paper-input>\n                </paper-item-body>\n              </div>\n            "])), index, item.complete, item.id, _this._completeItem, item.name, item.id, _this._saveEdit);
        }), this._checkedItems.length > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"divider\"></div>\n              <div class=\"checked\">\n                <span class=\"label\">\n                  ", "\n                </span>\n                <ha-icon\n                  class=\"clearall\"\n                  @click=\"", "\"\n                  icon=\"hass:notification-clear-all\"\n                  .title=\"", "\"\n                >\n                </ha-icon>\n              </div>\n              ", "\n            "], ["\n              <div class=\"divider\"></div>\n              <div class=\"checked\">\n                <span class=\"label\">\n                  ",
                "\n                </span>\n                <ha-icon\n                  class=\"clearall\"\n                  @click=\"", "\"\n                  icon=\"hass:notification-clear-all\"\n                  .title=\"",
                "\"\n                >\n                </ha-icon>\n              </div>\n              ",
                "\n            "])), this.hass.localize("ui.panel.lovelace.cards.shopping-list.checked_items"), this._clearItems, this.hass.localize("ui.panel.lovelace.cards.shopping-list.clear_items"), Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_2__["repeat"])(this._checkedItems, function (item) { return item.id; }, function (item, index) {
                return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    <div class=\"editRow\">\n                      <paper-checkbox\n                        slot=\"item-icon\"\n                        id=\"", "\"\n                        ?checked=\"", "\"\n                        .itemId=\"", "\"\n                        @click=\"", "\"\n                        tabindex=\"0\"\n                      ></paper-checkbox>\n                      <paper-item-body>\n                        <paper-input\n                          no-label-float\n                          .value=\"", "\"\n                          .itemId=\"", "\"\n                          @change=\"", "\"\n                        ></paper-input>\n                      </paper-item-body>\n                    </div>\n                  "], ["\n                    <div class=\"editRow\">\n                      <paper-checkbox\n                        slot=\"item-icon\"\n                        id=\"", "\"\n                        ?checked=\"", "\"\n                        .itemId=\"", "\"\n                        @click=\"", "\"\n                        tabindex=\"0\"\n                      ></paper-checkbox>\n                      <paper-item-body>\n                        <paper-input\n                          no-label-float\n                          .value=\"", "\"\n                          .itemId=\"", "\"\n                          @change=\"", "\"\n                        ></paper-input>\n                      </paper-item-body>\n                    </div>\n                  "])), index, item.complete, item.id, _this._completeItem, item.name, item.id, _this._saveEdit);
            })) : "");
    };
    Object.defineProperty(HuiShoppingListCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .editRow,\n      .addRow {\n        display: flex;\n        flex-direction: row;\n      }\n\n      .addButton {\n        padding: 9px 15px 11px 15px;\n        cursor: pointer;\n      }\n\n      paper-item-body {\n        width: 75%;\n      }\n\n      paper-checkbox {\n        padding: 11px 11px 11px 18px;\n      }\n\n      paper-input {\n        --paper-input-container-underline: {\n          display: none;\n        }\n        --paper-input-container-underline-focus: {\n          display: none;\n        }\n        --paper-input-container-underline-disabled: {\n          display: none;\n        }\n        position: relative;\n        top: 1px;\n      }\n\n      .checked {\n        margin-left: 17px;\n        margin-bottom: 11px;\n        margin-top: 11px;\n      }\n\n      .label {\n        color: var(--primary-color);\n      }\n\n      .divider {\n        height: 1px;\n        background-color: var(--divider-color);\n        margin: 10px;\n      }\n\n      .clearall {\n        cursor: pointer;\n        margin-bottom: 3px;\n        float: right;\n        padding-right: 10px;\n      }\n\n      .addRow > ha-icon {\n        color: var(--secondary-text-color);\n      }\n    "], ["\n      .editRow,\n      .addRow {\n        display: flex;\n        flex-direction: row;\n      }\n\n      .addButton {\n        padding: 9px 15px 11px 15px;\n        cursor: pointer;\n      }\n\n      paper-item-body {\n        width: 75%;\n      }\n\n      paper-checkbox {\n        padding: 11px 11px 11px 18px;\n      }\n\n      paper-input {\n        --paper-input-container-underline: {\n          display: none;\n        }\n        --paper-input-container-underline-focus: {\n          display: none;\n        }\n        --paper-input-container-underline-disabled: {\n          display: none;\n        }\n        position: relative;\n        top: 1px;\n      }\n\n      .checked {\n        margin-left: 17px;\n        margin-bottom: 11px;\n        margin-top: 11px;\n      }\n\n      .label {\n        color: var(--primary-color);\n      }\n\n      .divider {\n        height: 1px;\n        background-color: var(--divider-color);\n        margin: 10px;\n      }\n\n      .clearall {\n        cursor: pointer;\n        margin-bottom: 3px;\n        float: right;\n        padding-right: 10px;\n      }\n\n      .addRow > ha-icon {\n        color: var(--secondary-text-color);\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiShoppingListCard.prototype._fetchData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var checkedItems, uncheckedItems, items, key;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hass) return [3 /*break*/, 2];
                        checkedItems = [];
                        uncheckedItems = [];
                        return [4 /*yield*/, Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_6__["fetchItems"])(this.hass)];
                    case 1:
                        items = _a.sent();
                        for (key in items) {
                            if (items[key].complete) {
                                checkedItems.push(items[key]);
                            }
                            else {
                                uncheckedItems.push(items[key]);
                            }
                        }
                        this._checkedItems = checkedItems;
                        this._uncheckedItems = uncheckedItems;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HuiShoppingListCard.prototype._completeItem = function (ev) {
        var _this = this;
        Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_6__["updateItem"])(this.hass, ev.target.itemId, {
            complete: ev.target.checked,
        }).catch(function () { return _this._fetchData(); });
    };
    HuiShoppingListCard.prototype._saveEdit = function (ev) {
        var _this = this;
        Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_6__["updateItem"])(this.hass, ev.target.itemId, {
            name: ev.target.value,
        }).catch(function () { return _this._fetchData(); });
        ev.target.blur();
    };
    HuiShoppingListCard.prototype._clearItems = function () {
        var _this = this;
        if (this.hass) {
            Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_6__["clearItems"])(this.hass).catch(function () { return _this._fetchData(); });
        }
    };
    Object.defineProperty(HuiShoppingListCard.prototype, "_newItem", {
        get: function () {
            return this.shadowRoot.querySelector(".addBox");
        },
        enumerable: true,
        configurable: true
    });
    HuiShoppingListCard.prototype._addItem = function (ev) {
        var _this = this;
        var newItem = this._newItem;
        if (newItem.value.length > 0) {
            Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_6__["addItem"])(this.hass, newItem.value).catch(function () { return _this._fetchData(); });
        }
        newItem.value = "";
        if (ev) {
            newItem.focus();
        }
    };
    HuiShoppingListCard.prototype._addKeyPress = function (ev) {
        if (ev.keyCode === 13) {
            this._addItem(null);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiShoppingListCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiShoppingListCard.prototype, "_config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiShoppingListCard.prototype, "_uncheckedItems", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiShoppingListCard.prototype, "_checkedItems", void 0);
    HuiShoppingListCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-shopping-list-card")
    ], HuiShoppingListCard);
    return HuiShoppingListCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-stack-card.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-stack-card.ts ***!
  \*****************************************************/
/*! exports provided: HuiStackCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiStackCard", function() { return HuiStackCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts");



var HuiStackCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiStackCard, _super);
    function HuiStackCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HuiStackCard, "properties", {
        get: function () {
            return {
                _config: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiStackCard.prototype, "hass", {
        set: function (hass) {
            this._hass = hass;
            if (!this._cards) {
                return;
            }
            for (var _i = 0, _a = this._cards; _i < _a.length; _i++) {
                var element = _a[_i];
                element.hass = this._hass;
            }
        },
        enumerable: true,
        configurable: true
    });
    HuiStackCard.prototype.setConfig = function (config) {
        var _this = this;
        if (!config || !config.cards || !Array.isArray(config.cards)) {
            throw new Error("Card config incorrect");
        }
        this._config = config;
        this._cards = config.cards.map(function (card) {
            var element = _this._createCardElement(card);
            return element;
        });
    };
    HuiStackCard.prototype.render = function () {
        if (!this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      ", "\n      <div id=\"root\">", "</div>\n    "], ["\n      ", "\n      ",
            "\n      <div id=\"root\">", "</div>\n    "])), this.renderStyle(), this._config.title
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <div class=\"card-header\">", "</div>\n          "], ["\n            <div class=\"card-header\">", "</div>\n          "])), this._config.title) : "", this._cards);
    };
    Object.defineProperty(HuiStackCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .card-header {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        display: block;\n        padding: 24px 16px 16px;\n      }\n    "], ["\n      .card-header {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        display: block;\n        padding: 24px 16px 16px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiStackCard.prototype._createCardElement = function (cardConfig) {
        var _this = this;
        var element = Object(_common_create_card_element__WEBPACK_IMPORTED_MODULE_2__["createCardElement"])(cardConfig);
        if (this._hass) {
            element.hass = this._hass;
        }
        element.addEventListener("ll-rebuild", function (ev) {
            ev.stopPropagation();
            _this._rebuildCard(element, cardConfig);
        }, { once: true });
        return element;
    };
    HuiStackCard.prototype._rebuildCard = function (cardElToReplace, config) {
        var newCardEl = this._createCardElement(config);
        cardElToReplace.parentElement.replaceChild(newCardEl, cardElToReplace);
        this._cards = this._cards.map(function (curCardEl) {
            return curCardEl === cardElToReplace ? newCardEl : curCardEl;
        });
    };
    return HuiStackCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-thermostat-card.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-thermostat-card.ts ***!
  \**********************************************************/
/*! exports provided: HuiThermostatCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiThermostatCard", function() { return HuiThermostatCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _resources_jquery_roundslider_ondemand__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../resources/jquery.roundslider.ondemand */ "./src/resources/jquery.roundslider.ondemand.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_climate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/climate */ "./src/data/climate.ts");














var thermostatConfig = {
    radius: 150,
    circleShape: "pie",
    startAngle: 315,
    width: 5,
    lineCap: "round",
    handleSize: "+10",
    showTooltip: false,
    animation: false,
};
var modeIcons = {
    auto: "hass:calendar-repeat",
    heat_cool: "hass:autorenew",
    heat: "hass:fire",
    cool: "hass:snowflake",
    off: "hass:power",
    fan_only: "hass:fan",
    dry: "hass:water-percent",
};
var HuiThermostatCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiThermostatCard, _super);
    function HuiThermostatCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiThermostatCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-thermostat-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-thermostat-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-thermostat-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-thermostat-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-thermostat-card-editor")];
                }
            });
        });
    };
    HuiThermostatCard.getStubConfig = function () {
        return { entity: "" };
    };
    HuiThermostatCard.prototype.getCardSize = function () {
        return 4;
    };
    HuiThermostatCard.prototype.setConfig = function (config) {
        if (!config.entity || config.entity.split(".")[0] !== "climate") {
            throw new Error("Specify an entity from within the climate domain.");
        }
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ theme: "default" }, config);
    };
    HuiThermostatCard.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (this._updated && !this._loaded) {
            this._initialLoad();
        }
    };
    HuiThermostatCard.prototype.render = function () {
        var _a;
        var _this = this;
        if (!this.hass || !this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        var mode = stateObj.state in modeIcons ? stateObj.state : "unknown-mode";
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <ha-card\n        class=\"", "\"\n      >\n        <div id=\"root\">\n          <paper-icon-button\n            icon=\"hass:dots-vertical\"\n            class=\"more-info\"\n            @click=\"", "\"\n          ></paper-icon-button>\n          <div id=\"thermostat\"></div>\n          <div id=\"tooltip\">\n            <div class=\"title\">\n              ", "\n            </div>\n            <div class=\"current-temperature\">\n              <span class=\"current-temperature-text\">\n                ", "\n                ", "\n              </span>\n            </div>\n            <div class=\"climate-info\">\n              <div id=\"set-temperature\"></div>\n              <div class=\"current-mode\">\n                ", "\n                ", "\n              </div>\n              <div class=\"modes\">\n                ", "\n              </div>\n            </div>\n          </div>\n        </div>\n      </ha-card>\n    "], ["\n      ", "\n      <ha-card\n        class=\"",
            "\"\n      >\n        <div id=\"root\">\n          <paper-icon-button\n            icon=\"hass:dots-vertical\"\n            class=\"more-info\"\n            @click=\"", "\"\n          ></paper-icon-button>\n          <div id=\"thermostat\"></div>\n          <div id=\"tooltip\">\n            <div class=\"title\">\n              ", "\n            </div>\n            <div class=\"current-temperature\">\n              <span class=\"current-temperature-text\">\n                ", "\n                ",
            "\n              </span>\n            </div>\n            <div class=\"climate-info\">\n              <div id=\"set-temperature\"></div>\n              <div class=\"current-mode\">\n                ",
            "\n                ",
            "\n              </div>\n              <div class=\"modes\">\n                ",
            "\n              </div>\n            </div>\n          </div>\n        </div>\n      </ha-card>\n    "])), this.renderStyle(), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])((_a = {},
            _a[mode] = true,
            _a.large = this._broadCard,
            _a.small = !this._broadCard,
            _a)), this._handleMoreInfo, this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(stateObj), stateObj.attributes.current_temperature, stateObj.attributes.current_temperature
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <span class=\"uom\"\n                        >", "</span\n                      >\n                    "], ["\n                      <span class=\"uom\"\n                        >", "</span\n                      >\n                    "])), this.hass.config.unit_system.temperature) : "", stateObj.attributes.hvac_action
            ? this.hass.localize("state_attributes.climate.hvac_action." + stateObj.attributes.hvac_action)
            : this.hass.localize("state.climate." + stateObj.state), stateObj.attributes.preset_mode &&
            stateObj.attributes.preset_mode !== _data_climate__WEBPACK_IMPORTED_MODULE_13__["CLIMATE_PRESET_NONE"]
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      -\n                      ", "\n                    "], ["\n                      -\n                      ",
                "\n                    "])), this.hass.localize("state_attributes.climate.preset_mode." + stateObj.attributes.preset_mode) || stateObj.attributes.preset_mode) : "", (stateObj.attributes.hvac_modes || [])
            .concat()
            .sort(_data_climate__WEBPACK_IMPORTED_MODULE_13__["compareClimateHvacModes"])
            .map(function (modeItem) { return _this._renderIcon(modeItem, mode); }));
    };
    HuiThermostatCard.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_9__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiThermostatCard.prototype.firstUpdated = function () {
        this._updated = true;
        if (this.isConnected && !this._loaded) {
            this._initialLoad();
        }
    };
    HuiThermostatCard.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (!this._config || !this.hass || !changedProps.has("hass")) {
            return;
        }
        var oldHass = changedProps.get("hass");
        if (!oldHass || oldHass.themes !== this.hass.themes) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_7__["default"])(this, this.hass.themes, this._config.theme);
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return;
        }
        if (this._jQuery &&
            // If jQuery changed, we just rendered in firstUpdated
            !changedProps.has("_jQuery") &&
            (!oldHass || oldHass.states[this._config.entity] !== stateObj)) {
            var _a = this._genSliderValue(stateObj), sliderValue = _a[0], uiValue = _a[1], sliderType = _a[2];
            this._jQuery("#thermostat", this.shadowRoot).roundSlider({
                sliderType: sliderType,
                value: sliderValue,
                disabled: sliderValue === null,
                min: stateObj.attributes.min_temp,
                max: stateObj.attributes.max_temp,
            });
            this._updateSetTemp(uiValue);
        }
    };
    Object.defineProperty(HuiThermostatCard.prototype, "_stepSize", {
        get: function () {
            var stateObj = this.hass.states[this._config.entity];
            if (stateObj.attributes.target_temp_step) {
                return stateObj.attributes.target_temp_step;
            }
            return this.hass.config.unit_system.temperature === _common_const__WEBPACK_IMPORTED_MODULE_11__["UNIT_F"] ? 1 : 0.5;
        },
        enumerable: true,
        configurable: true
    });
    HuiThermostatCard.prototype._initialLoad = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var stateObj, radius, loaded, _a, sliderValue, uiValue, sliderType;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        stateObj = this.hass.states[this._config.entity];
                        if (!stateObj) {
                            // Card will require refresh to work again
                            return [2 /*return*/];
                        }
                        this._loaded = true;
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _b.sent();
                        radius = this.clientWidth / 3.2;
                        this._broadCard = this.clientWidth > 390;
                        if (radius === 0) {
                            radius = 100;
                        }
                        this.shadowRoot.querySelector("#thermostat").style.height = radius * 2 + "px";
                        return [4 /*yield*/, Object(_resources_jquery_roundslider_ondemand__WEBPACK_IMPORTED_MODULE_10__["loadRoundslider"])()];
                    case 2:
                        loaded = _b.sent();
                        this._roundSliderStyle = loaded.roundSliderStyle;
                        this._jQuery = loaded.jQuery;
                        _a = this._genSliderValue(stateObj), sliderValue = _a[0], uiValue = _a[1], sliderType = _a[2];
                        this._jQuery("#thermostat", this.shadowRoot).roundSlider(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, thermostatConfig), { radius: radius, min: stateObj.attributes.min_temp, max: stateObj.attributes.max_temp, sliderType: sliderType, change: function (value) { return _this._setTemperature(value); }, drag: function (value) { return _this._dragEvent(value); }, value: sliderValue, disabled: sliderValue === null, step: this._stepSize }));
                        this._updateSetTemp(uiValue);
                        return [2 /*return*/];
                }
            });
        });
    };
    HuiThermostatCard.prototype._genSliderValue = function (stateObj) {
        var sliderType;
        var sliderValue;
        var uiValue;
        if (stateObj.state === "unavailable") {
            sliderType = "min-range";
            sliderValue = null;
            uiValue = this.hass.localize("state.default.unavailable");
        }
        else if (stateObj.attributes.target_temp_low &&
            stateObj.attributes.target_temp_high) {
            sliderType = "range";
            sliderValue = stateObj.attributes.target_temp_low + ", " + stateObj.attributes.target_temp_high;
            uiValue = this.formatTemp([
                String(stateObj.attributes.target_temp_low),
                String(stateObj.attributes.target_temp_high),
            ], false);
        }
        else {
            sliderType = "min-range";
            sliderValue = Number.isFinite(Number(stateObj.attributes.temperature))
                ? stateObj.attributes.temperature
                : null;
            uiValue = sliderValue !== null ? String(sliderValue) : "";
        }
        return [sliderValue, uiValue, sliderType];
    };
    HuiThermostatCard.prototype._updateSetTemp = function (value) {
        this.shadowRoot.querySelector("#set-temperature").innerHTML = value;
    };
    HuiThermostatCard.prototype._dragEvent = function (e) {
        this._updateSetTemp(this.formatTemp(String(e.value).split(","), true));
    };
    HuiThermostatCard.prototype._setTemperature = function (e) {
        var stateObj = this.hass.states[this._config.entity];
        if (stateObj.attributes.target_temp_low &&
            stateObj.attributes.target_temp_high) {
            if (e.handle.index === 1) {
                this.hass.callService("climate", "set_temperature", {
                    entity_id: this._config.entity,
                    target_temp_low: e.handle.value,
                    target_temp_high: stateObj.attributes.target_temp_high,
                });
            }
            else {
                this.hass.callService("climate", "set_temperature", {
                    entity_id: this._config.entity,
                    target_temp_low: stateObj.attributes.target_temp_low,
                    target_temp_high: e.handle.value,
                });
            }
        }
        else {
            this.hass.callService("climate", "set_temperature", {
                entity_id: this._config.entity,
                temperature: e.value,
            });
        }
    };
    HuiThermostatCard.prototype._renderIcon = function (mode, currentMode) {
        if (!modeIcons[mode]) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-icon\n        class=\"", "\"\n        .mode=\"", "\"\n        .icon=\"", "\"\n        @click=\"", "\"\n      ></ha-icon>\n    "], ["\n      <ha-icon\n        class=\"", "\"\n        .mode=\"", "\"\n        .icon=\"", "\"\n        @click=\"", "\"\n      ></ha-icon>\n    "])), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({ "selected-icon": currentMode === mode }), mode, modeIcons[mode], this._handleModeClick);
    };
    HuiThermostatCard.prototype._handleMoreInfo = function () {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(this, "hass-more-info", {
            entityId: this._config.entity,
        });
    };
    HuiThermostatCard.prototype._handleModeClick = function (e) {
        this.hass.callService("climate", "set_hvac_mode", {
            entity_id: this._config.entity,
            hvac_mode: e.currentTarget.mode,
        });
    };
    HuiThermostatCard.prototype.formatTemp = function (temps, spaceStepSize) {
        temps = temps.filter(Boolean);
        // If we are sliding the slider, append 0 to the temperatures if we're
        // having a 0.5 step size, so that the text doesn't jump while sliding
        if (spaceStepSize) {
            var stepSize_1 = this._stepSize;
            temps = temps.map(function (val) {
                return val.includes(".") || stepSize_1 === 1 ? val : val + ".0";
            });
        }
        return temps.join("-");
    };
    HuiThermostatCard.prototype.renderStyle = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <style>\n        :host {\n          display: block;\n        }\n        ha-card {\n          overflow: hidden;\n          --rail-border-color: transparent;\n          --auto-color: green;\n          --eco-color: springgreen;\n          --cool-color: #2b9af9;\n          --heat-color: #ff8100;\n          --manual-color: #44739e;\n          --off-color: #8a8a8a;\n          --fan_only-color: #8a8a8a;\n          --dry-color: #efbd07;\n          --idle-color: #8a8a8a;\n          --unknown-color: #bac;\n        }\n        #root {\n          position: relative;\n          overflow: hidden;\n        }\n        .auto,\n        .heat_cool {\n          --mode-color: var(--auto-color);\n        }\n        .cool {\n          --mode-color: var(--cool-color);\n        }\n        .heat {\n          --mode-color: var(--heat-color);\n        }\n        .manual {\n          --mode-color: var(--manual-color);\n        }\n        .off {\n          --mode-color: var(--off-color);\n        }\n        .fan_only {\n          --mode-color: var(--fan_only-color);\n        }\n        .eco {\n          --mode-color: var(--eco-color);\n        }\n        .dry {\n          --mode-color: var(--dry-color);\n        }\n        .idle {\n          --mode-color: var(--idle-color);\n        }\n        .unknown-mode {\n          --mode-color: var(--unknown-color);\n        }\n        .no-title {\n          --title-position-top: 33% !important;\n        }\n        .large {\n          --thermostat-padding-top: 25px;\n          --thermostat-margin-bottom: 25px;\n          --title-font-size: 28px;\n          --title-position-top: 27%;\n          --climate-info-position-top: 81%;\n          --set-temperature-font-size: 25px;\n          --current-temperature-font-size: 71px;\n          --current-temperature-position-top: 10%;\n          --current-temperature-text-padding-left: 15px;\n          --uom-font-size: 20px;\n          --uom-margin-left: -18px;\n          --current-mode-font-size: 18px;\n          --set-temperature-margin-bottom: -5px;\n        }\n        .small {\n          --thermostat-padding-top: 15px;\n          --thermostat-margin-bottom: 15px;\n          --title-font-size: 18px;\n          --title-position-top: 28%;\n          --climate-info-position-top: 79%;\n          --set-temperature-font-size: 16px;\n          --current-temperature-font-size: 25px;\n          --current-temperature-position-top: 5%;\n          --current-temperature-text-padding-left: 7px;\n          --uom-font-size: 12px;\n          --uom-margin-left: -5px;\n          --current-mode-font-size: 14px;\n          --set-temperature-margin-bottom: 0px;\n        }\n        #thermostat {\n          margin: 0 auto var(--thermostat-margin-bottom);\n          padding-top: var(--thermostat-padding-top);\n        }\n        #thermostat .rs-range-color {\n          background-color: var(--mode-color, var(--disabled-text-color));\n        }\n        #thermostat .rs-path-color {\n          background-color: var(--disabled-text-color);\n        }\n        #thermostat .rs-handle {\n          background-color: var(--paper-card-background-color, white);\n          padding: 10px;\n          margin: -10px 0 0 -8px !important;\n          border: 2px solid var(--disabled-text-color);\n        }\n        #thermostat .rs-handle.rs-focus {\n          border-color: var(--mode-color, var(--disabled-text-color));\n        }\n        #thermostat .rs-handle:after {\n          border-color: var(--mode-color, var(--disabled-text-color));\n          background-color: var(--mode-color, var(--disabled-text-color));\n        }\n        #thermostat .rs-border {\n          border-color: var(--rail-border-color);\n        }\n        #thermostat .rs-bar.rs-transition.rs-first,\n        .rs-bar.rs-transition.rs-second {\n          z-index: 20 !important;\n        }\n        #thermostat .rs-readonly {\n          z-index: 10;\n          top: auto;\n        }\n        #thermostat .rs-inner.rs-bg-color.rs-border,\n        #thermostat .rs-overlay.rs-transition.rs-bg-color {\n          background-color: var(--paper-card-background-color, white);\n        }\n        #tooltip {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          height: 100%;\n          text-align: center;\n          z-index: 15;\n          color: var(--primary-text-color);\n        }\n        #set-temperature {\n          font-size: var(--set-temperature-font-size);\n          margin-bottom: var(--set-temperature-margin-bottom);\n          min-height: 1.2em;\n        }\n        .title {\n          font-size: var(--title-font-size);\n          position: absolute;\n          top: var(--title-position-top);\n          left: 50%;\n          transform: translate(-50%, -50%);\n        }\n        .climate-info {\n          position: absolute;\n          top: var(--climate-info-position-top);\n          left: 50%;\n          transform: translate(-50%, -50%);\n          width: 100%;\n        }\n        .current-mode {\n          font-size: var(--current-mode-font-size);\n          color: var(--secondary-text-color);\n        }\n        .modes {\n          margin-top: 16px;\n        }\n        .modes ha-icon {\n          color: var(--disabled-text-color);\n          cursor: pointer;\n          display: inline-block;\n          margin: 0 10px;\n        }\n        .modes ha-icon.selected-icon {\n          color: var(--mode-color);\n        }\n        .current-temperature {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          font-size: var(--current-temperature-font-size);\n        }\n        .current-temperature-text {\n          padding-left: var(--current-temperature-text-padding-left);\n        }\n        .uom {\n          font-size: var(--uom-font-size);\n          vertical-align: top;\n          margin-left: var(--uom-margin-left);\n        }\n        .more-info {\n          position: absolute;\n          cursor: pointer;\n          top: 0;\n          right: 0;\n          z-index: 25;\n          color: var(--secondary-text-color);\n        }\n      </style>\n    "], ["\n      ", "\n      <style>\n        :host {\n          display: block;\n        }\n        ha-card {\n          overflow: hidden;\n          --rail-border-color: transparent;\n          --auto-color: green;\n          --eco-color: springgreen;\n          --cool-color: #2b9af9;\n          --heat-color: #ff8100;\n          --manual-color: #44739e;\n          --off-color: #8a8a8a;\n          --fan_only-color: #8a8a8a;\n          --dry-color: #efbd07;\n          --idle-color: #8a8a8a;\n          --unknown-color: #bac;\n        }\n        #root {\n          position: relative;\n          overflow: hidden;\n        }\n        .auto,\n        .heat_cool {\n          --mode-color: var(--auto-color);\n        }\n        .cool {\n          --mode-color: var(--cool-color);\n        }\n        .heat {\n          --mode-color: var(--heat-color);\n        }\n        .manual {\n          --mode-color: var(--manual-color);\n        }\n        .off {\n          --mode-color: var(--off-color);\n        }\n        .fan_only {\n          --mode-color: var(--fan_only-color);\n        }\n        .eco {\n          --mode-color: var(--eco-color);\n        }\n        .dry {\n          --mode-color: var(--dry-color);\n        }\n        .idle {\n          --mode-color: var(--idle-color);\n        }\n        .unknown-mode {\n          --mode-color: var(--unknown-color);\n        }\n        .no-title {\n          --title-position-top: 33% !important;\n        }\n        .large {\n          --thermostat-padding-top: 25px;\n          --thermostat-margin-bottom: 25px;\n          --title-font-size: 28px;\n          --title-position-top: 27%;\n          --climate-info-position-top: 81%;\n          --set-temperature-font-size: 25px;\n          --current-temperature-font-size: 71px;\n          --current-temperature-position-top: 10%;\n          --current-temperature-text-padding-left: 15px;\n          --uom-font-size: 20px;\n          --uom-margin-left: -18px;\n          --current-mode-font-size: 18px;\n          --set-temperature-margin-bottom: -5px;\n        }\n        .small {\n          --thermostat-padding-top: 15px;\n          --thermostat-margin-bottom: 15px;\n          --title-font-size: 18px;\n          --title-position-top: 28%;\n          --climate-info-position-top: 79%;\n          --set-temperature-font-size: 16px;\n          --current-temperature-font-size: 25px;\n          --current-temperature-position-top: 5%;\n          --current-temperature-text-padding-left: 7px;\n          --uom-font-size: 12px;\n          --uom-margin-left: -5px;\n          --current-mode-font-size: 14px;\n          --set-temperature-margin-bottom: 0px;\n        }\n        #thermostat {\n          margin: 0 auto var(--thermostat-margin-bottom);\n          padding-top: var(--thermostat-padding-top);\n        }\n        #thermostat .rs-range-color {\n          background-color: var(--mode-color, var(--disabled-text-color));\n        }\n        #thermostat .rs-path-color {\n          background-color: var(--disabled-text-color);\n        }\n        #thermostat .rs-handle {\n          background-color: var(--paper-card-background-color, white);\n          padding: 10px;\n          margin: -10px 0 0 -8px !important;\n          border: 2px solid var(--disabled-text-color);\n        }\n        #thermostat .rs-handle.rs-focus {\n          border-color: var(--mode-color, var(--disabled-text-color));\n        }\n        #thermostat .rs-handle:after {\n          border-color: var(--mode-color, var(--disabled-text-color));\n          background-color: var(--mode-color, var(--disabled-text-color));\n        }\n        #thermostat .rs-border {\n          border-color: var(--rail-border-color);\n        }\n        #thermostat .rs-bar.rs-transition.rs-first,\n        .rs-bar.rs-transition.rs-second {\n          z-index: 20 !important;\n        }\n        #thermostat .rs-readonly {\n          z-index: 10;\n          top: auto;\n        }\n        #thermostat .rs-inner.rs-bg-color.rs-border,\n        #thermostat .rs-overlay.rs-transition.rs-bg-color {\n          background-color: var(--paper-card-background-color, white);\n        }\n        #tooltip {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          height: 100%;\n          text-align: center;\n          z-index: 15;\n          color: var(--primary-text-color);\n        }\n        #set-temperature {\n          font-size: var(--set-temperature-font-size);\n          margin-bottom: var(--set-temperature-margin-bottom);\n          min-height: 1.2em;\n        }\n        .title {\n          font-size: var(--title-font-size);\n          position: absolute;\n          top: var(--title-position-top);\n          left: 50%;\n          transform: translate(-50%, -50%);\n        }\n        .climate-info {\n          position: absolute;\n          top: var(--climate-info-position-top);\n          left: 50%;\n          transform: translate(-50%, -50%);\n          width: 100%;\n        }\n        .current-mode {\n          font-size: var(--current-mode-font-size);\n          color: var(--secondary-text-color);\n        }\n        .modes {\n          margin-top: 16px;\n        }\n        .modes ha-icon {\n          color: var(--disabled-text-color);\n          cursor: pointer;\n          display: inline-block;\n          margin: 0 10px;\n        }\n        .modes ha-icon.selected-icon {\n          color: var(--mode-color);\n        }\n        .current-temperature {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          font-size: var(--current-temperature-font-size);\n        }\n        .current-temperature-text {\n          padding-left: var(--current-temperature-text-padding-left);\n        }\n        .uom {\n          font-size: var(--uom-font-size);\n          vertical-align: top;\n          margin-left: var(--uom-margin-left);\n        }\n        .more-info {\n          position: absolute;\n          cursor: pointer;\n          top: 0;\n          right: 0;\n          z-index: 25;\n          color: var(--secondary-text-color);\n        }\n      </style>\n    "])), this._roundSliderStyle);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiThermostatCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiThermostatCard.prototype, "_config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiThermostatCard.prototype, "_roundSliderStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiThermostatCard.prototype, "_jQuery", void 0);
    HuiThermostatCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-thermostat-card")
    ], HuiThermostatCard);
    return HuiThermostatCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-vertical-stack-card.ts":
/*!**************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-vertical-stack-card.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_compute_card_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/compute-card-size */ "./src/panels/lovelace/common/compute-card-size.ts");
/* harmony import */ var _hui_stack_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hui-stack-card */ "./src/panels/lovelace/cards/hui-stack-card.ts");




var HuiVerticalStackCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiVerticalStackCard, _super);
    function HuiVerticalStackCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiVerticalStackCard.prototype.getCardSize = function () {
        var totalSize = 0;
        if (!this._cards) {
            return totalSize;
        }
        for (var _i = 0, _a = this._cards; _i < _a.length; _i++) {
            var element = _a[_i];
            totalSize += Object(_common_compute_card_size__WEBPACK_IMPORTED_MODULE_2__["computeCardSize"])(element);
        }
        return totalSize;
    };
    HuiVerticalStackCard.prototype.renderStyle = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <style>\n        #root {\n          display: flex;\n          flex-direction: column;\n        }\n        #root > * {\n          margin: 4px 0 4px 0;\n        }\n        #root > *:first-child {\n          margin-top: 0;\n        }\n        #root > *:last-child {\n          margin-bottom: 0;\n        }\n      </style>\n    "], ["\n      <style>\n        #root {\n          display: flex;\n          flex-direction: column;\n        }\n        #root > * {\n          margin: 4px 0 4px 0;\n        }\n        #root > *:first-child {\n          margin-top: 0;\n        }\n        #root > *:last-child {\n          margin-bottom: 0;\n        }\n      </style>\n    "])));
    };
    return HuiVerticalStackCard;
}(_hui_stack_card__WEBPACK_IMPORTED_MODULE_3__["HuiStackCard"]));
customElements.define("hui-vertical-stack-card", HuiVerticalStackCard);
var templateObject_1;


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-weather-forecast-card.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-weather-forecast-card.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/dom/toggle_attribute */ "./src/common/dom/toggle_attribute.ts");










var cardinalDirections = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
];
var weatherIcons = {
    "clear-night": "hass:weather-night",
    cloudy: "hass:weather-cloudy",
    exceptional: "hass:alert-circle-outline",
    fog: "hass:weather-fog",
    hail: "hass:weather-hail",
    lightning: "hass:weather-lightning",
    "lightning-rainy": "hass:weather-lightning-rainy",
    partlycloudy: "hass:weather-partly-cloudy",
    pouring: "hass:weather-pouring",
    rainy: "hass:weather-rainy",
    snowy: "hass:weather-snowy",
    "snowy-rainy": "hass:weather-snowy-rainy",
    sunny: "hass:weather-sunny",
    windy: "hass:weather-windy",
    "windy-variant": "hass:weather-windy-variant",
};
var HuiWeatherForecastCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiWeatherForecastCard, _super);
    function HuiWeatherForecastCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiWeatherForecastCard.getConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(/*! import() | hui-weather-forecast-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-weather-forecast-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-weather-forecast-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-weather-forecast-card-editor.ts"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, document.createElement("hui-weather-forecast-card-editor")];
                }
            });
        });
    };
    HuiWeatherForecastCard.getStubConfig = function () {
        return { entity: "" };
    };
    HuiWeatherForecastCard.prototype.getCardSize = function () {
        return 4;
    };
    HuiWeatherForecastCard.prototype.setConfig = function (config) {
        if (!config || !config.entity) {
            throw new Error("Invalid card configuration");
        }
        if (!Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_4__["isValidEntityId"])(config.entity)) {
            throw new Error("Invalid Entity");
        }
        this._config = config;
    };
    HuiWeatherForecastCard.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("hass")) {
            Object(_common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_9__["toggleAttribute"])(this, "rtl", Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(this.hass));
        }
    };
    HuiWeatherForecastCard.prototype.render = function () {
        var _this = this;
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        var forecast = stateObj.attributes.forecast
            ? stateObj.attributes.forecast.slice(0, 5)
            : undefined;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card @click=\"", "\">\n        <div class=\"header\">\n          ", "\n          <div class=\"name\">\n            ", "\n          </div>\n        </div>\n        <div class=\"content\">\n          <div class=\"now\">\n            <div class=\"main\">\n              ", "\n              <div class=\"temp\">\n                ", "<span\n                  >", "</span\n                >\n              </div>\n            </div>\n            <div class=\"attributes\">\n              ", "\n              ", "\n              ", "\n            </div>\n          </div>\n          ", "\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card @click=\"", "\">\n        <div class=\"header\">\n          ",
            "\n          <div class=\"name\">\n            ", "\n          </div>\n        </div>\n        <div class=\"content\">\n          <div class=\"now\">\n            <div class=\"main\">\n              ",
            "\n              <div class=\"temp\">\n                ", "<span\n                  >", "</span\n                >\n              </div>\n            </div>\n            <div class=\"attributes\">\n              ",
            "\n              ",
            "\n              ",
            "\n            </div>\n          </div>\n          ",
            "\n        </div>\n      </ha-card>\n    "])), this.handleClick, this.hass.localize("state.weather." + stateObj.state) ||
            stateObj.state, (this._config && this._config.name) || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(stateObj), stateObj.state in weatherIcons
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    <ha-icon icon=\"", "\"></ha-icon>\n                  "], ["\n                    <ha-icon icon=\"", "\"></ha-icon>\n                  "])), weatherIcons[stateObj.state]) : "", stateObj.attributes.temperature, this.getUnit("temperature"), this._showValue(stateObj.attributes.pressure)
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    <div>\n                      ", ":\n                      <span class=\"measurand\">\n                        ", "\n                        ", "\n                      </span>\n                    </div>\n                  "], ["\n                    <div>\n                      ",
                ":\n                      <span class=\"measurand\">\n                        ", "\n                        ", "\n                      </span>\n                    </div>\n                  "])), this.hass.localize("ui.card.weather.attributes.air_pressure"), stateObj.attributes.pressure, this.getUnit("air_pressure")) : "", this._showValue(stateObj.attributes.humidity)
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    <div>\n                      ", ":\n                      <span class=\"measurand\"\n                        >", " %</span\n                      >\n                    </div>\n                  "], ["\n                    <div>\n                      ",
                ":\n                      <span class=\"measurand\"\n                        >", " %</span\n                      >\n                    </div>\n                  "])), this.hass.localize("ui.card.weather.attributes.humidity"), stateObj.attributes.humidity) : "", this._showValue(stateObj.attributes.wind_speed)
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    <div>\n                      ", ":\n                      <span class=\"measurand\">\n                        ", "\n                        ", "/h\n                      </span>\n                      ", "\n                    </div>\n                  "], ["\n                    <div>\n                      ",
                ":\n                      <span class=\"measurand\">\n                        ", "\n                        ", "/h\n                      </span>\n                      ", "\n                    </div>\n                  "])), this.hass.localize("ui.card.weather.attributes.wind_speed"), stateObj.attributes.wind_speed, this.getUnit("length"), this.getWindBearing(stateObj.attributes.wind_bearing)) : "", forecast
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"forecast\">\n                  ", "\n                </div>\n              "], ["\n                <div class=\"forecast\">\n                  ",
                "\n                </div>\n              "])), forecast.map(function (item) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <div>\n                        <div class=\"weekday\">\n                          ", "<br />\n                          ", "\n                        </div>\n                        ", "\n                        ", "\n                        ", "\n                        ", "\n                      </div>\n                    "], ["\n                      <div>\n                        <div class=\"weekday\">\n                          ",
                "<br />\n                          ",
                "\n                        </div>\n                        ",
                "\n                        ",
                "\n                        ",
                "\n                        ",
                "\n                      </div>\n                    "])), new Date(item.datetime).toLocaleDateString(_this.hass.language, { weekday: "short" }), !_this._showValue(item.templow)
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                                ", "\n                              "], ["\n                                ",
                    "\n                              "])), new Date(item.datetime).toLocaleTimeString(_this.hass.language, { hour: "numeric" })) : "", _this._showValue(item.condition)
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                              <div class=\"icon\">\n                                <ha-icon\n                                  .icon=\"", "\"\n                                ></ha-icon>\n                              </div>\n                            "], ["\n                              <div class=\"icon\">\n                                <ha-icon\n                                  .icon=\"", "\"\n                                ></ha-icon>\n                              </div>\n                            "])), weatherIcons[item.condition]) : "", _this._showValue(item.temperature)
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                              <div class=\"temp\">\n                                ", "\n                                ", "\n                              </div>\n                            "], ["\n                              <div class=\"temp\">\n                                ", "\n                                ", "\n                              </div>\n                            "])), item.temperature, _this.getUnit("temperature")) : "", _this._showValue(item.templow)
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                              <div class=\"templow\">\n                                ", " ", "\n                              </div>\n                            "], ["\n                              <div class=\"templow\">\n                                ", " ", "\n                              </div>\n                            "])), item.templow, _this.getUnit("temperature")) : "", _this._showValue(item.precipitation)
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                              <div class=\"precipitation\">\n                                ", "\n                                ", "\n                              </div>\n                            "], ["\n                              <div class=\"precipitation\">\n                                ", "\n                                ", "\n                              </div>\n                            "])), item.precipitation, _this.getUnit("precipitation")) : ""); })) : "");
    };
    HuiWeatherForecastCard.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_6__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiWeatherForecastCard.prototype.handleClick = function () {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "hass-more-info", { entityId: this._config.entity });
    };
    HuiWeatherForecastCard.prototype.getUnit = function (measure) {
        var lengthUnit = this.hass.config.unit_system.length || "";
        switch (measure) {
            case "air_pressure":
                return lengthUnit === "km" ? "hPa" : "inHg";
            case "length":
                return lengthUnit;
            case "precipitation":
                return lengthUnit === "km" ? "mm" : "in";
            default:
                return this.hass.config.unit_system[measure] || "";
        }
    };
    HuiWeatherForecastCard.prototype.windBearingToText = function (degree) {
        var degreenum = parseInt(degree, 10);
        if (isFinite(degreenum)) {
            // tslint:disable-next-line: no-bitwise
            return cardinalDirections[(((degreenum + 11.25) / 22.5) | 0) % 16];
        }
        return degree;
    };
    HuiWeatherForecastCard.prototype.getWindBearing = function (bearing) {
        if (bearing != null) {
            var cardinalDirection = this.windBearingToText(bearing);
            return "(" + (this.hass.localize("ui.card.weather.cardinal_direction." + cardinalDirection.toLowerCase()) || cardinalDirection) + ")";
        }
        return "";
    };
    HuiWeatherForecastCard.prototype._showValue = function (item) {
        return typeof item !== "undefined" && item !== null;
    };
    Object.defineProperty(HuiWeatherForecastCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_15 || (templateObject_15 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        cursor: pointer;\n      }\n\n      .content {\n        padding: 0 20px 20px;\n      }\n\n      ha-icon {\n        color: var(--paper-item-icon-color);\n      }\n\n      .header {\n        font-family: var(--paper-font-headline_-_font-family);\n        -webkit-font-smoothing: var(\n          --paper-font-headline_-_-webkit-font-smoothing\n        );\n        font-size: var(--paper-font-headline_-_font-size);\n        font-weight: var(--paper-font-headline_-_font-weight);\n        letter-spacing: var(--paper-font-headline_-_letter-spacing);\n        line-height: var(--paper-font-headline_-_line-height);\n        text-rendering: var(\n          --paper-font-common-expensive-kerning_-_text-rendering\n        );\n        opacity: var(--dark-primary-opacity);\n        padding: 24px 16px 16px;\n        display: flex;\n        align-items: baseline;\n      }\n\n      .name {\n        margin-left: 16px;\n        font-size: 16px;\n        color: var(--secondary-text-color);\n      }\n\n      :host([rtl]) .name {\n        margin-left: 0px;\n        margin-right: 16px;\n      }\n\n      .now {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n\n      .main {\n        display: flex;\n        align-items: center;\n        margin-right: 32px;\n      }\n\n      :host([rtl]) .main {\n        margin-right: 0px;\n      }\n\n      .main ha-icon {\n        --iron-icon-height: 72px;\n        --iron-icon-width: 72px;\n        margin-right: 8px;\n      }\n\n      :host([rtl]) .main ha-icon {\n        margin-right: 0px;\n      }\n\n      .main .temp {\n        font-size: 52px;\n        line-height: 1em;\n        position: relative;\n      }\n\n      :host([rtl]) .main .temp {\n        direction: ltr;\n        margin-right: 28px;\n      }\n\n      .main .temp span {\n        font-size: 24px;\n        line-height: 1em;\n        position: absolute;\n        top: 4px;\n      }\n\n      .measurand {\n        display: inline-block;\n      }\n\n      :host([rtl]) .measurand {\n        direction: ltr;\n      }\n\n      .forecast {\n        margin-top: 16px;\n        display: flex;\n        justify-content: space-between;\n      }\n\n      .forecast div {\n        flex: 0 0 auto;\n        text-align: center;\n      }\n\n      .forecast .icon {\n        margin: 4px 0;\n        text-align: center;\n      }\n\n      :host([rtl]) .forecast .temp {\n        direction: ltr;\n      }\n\n      .weekday {\n        font-weight: bold;\n      }\n\n      .attributes,\n      .templow,\n      .precipitation {\n        color: var(--secondary-text-color);\n      }\n\n      :host([rtl]) .precipitation {\n        direction: ltr;\n      }\n    "], ["\n      :host {\n        cursor: pointer;\n      }\n\n      .content {\n        padding: 0 20px 20px;\n      }\n\n      ha-icon {\n        color: var(--paper-item-icon-color);\n      }\n\n      .header {\n        font-family: var(--paper-font-headline_-_font-family);\n        -webkit-font-smoothing: var(\n          --paper-font-headline_-_-webkit-font-smoothing\n        );\n        font-size: var(--paper-font-headline_-_font-size);\n        font-weight: var(--paper-font-headline_-_font-weight);\n        letter-spacing: var(--paper-font-headline_-_letter-spacing);\n        line-height: var(--paper-font-headline_-_line-height);\n        text-rendering: var(\n          --paper-font-common-expensive-kerning_-_text-rendering\n        );\n        opacity: var(--dark-primary-opacity);\n        padding: 24px 16px 16px;\n        display: flex;\n        align-items: baseline;\n      }\n\n      .name {\n        margin-left: 16px;\n        font-size: 16px;\n        color: var(--secondary-text-color);\n      }\n\n      :host([rtl]) .name {\n        margin-left: 0px;\n        margin-right: 16px;\n      }\n\n      .now {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n\n      .main {\n        display: flex;\n        align-items: center;\n        margin-right: 32px;\n      }\n\n      :host([rtl]) .main {\n        margin-right: 0px;\n      }\n\n      .main ha-icon {\n        --iron-icon-height: 72px;\n        --iron-icon-width: 72px;\n        margin-right: 8px;\n      }\n\n      :host([rtl]) .main ha-icon {\n        margin-right: 0px;\n      }\n\n      .main .temp {\n        font-size: 52px;\n        line-height: 1em;\n        position: relative;\n      }\n\n      :host([rtl]) .main .temp {\n        direction: ltr;\n        margin-right: 28px;\n      }\n\n      .main .temp span {\n        font-size: 24px;\n        line-height: 1em;\n        position: absolute;\n        top: 4px;\n      }\n\n      .measurand {\n        display: inline-block;\n      }\n\n      :host([rtl]) .measurand {\n        direction: ltr;\n      }\n\n      .forecast {\n        margin-top: 16px;\n        display: flex;\n        justify-content: space-between;\n      }\n\n      .forecast div {\n        flex: 0 0 auto;\n        text-align: center;\n      }\n\n      .forecast .icon {\n        margin: 4px 0;\n        text-align: center;\n      }\n\n      :host([rtl]) .forecast .temp {\n        direction: ltr;\n      }\n\n      .weekday {\n        font-weight: bold;\n      }\n\n      .attributes,\n      .templow,\n      .precipitation {\n        color: var(--secondary-text-color);\n      }\n\n      :host([rtl]) .precipitation {\n        direction: ltr;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiWeatherForecastCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiWeatherForecastCard.prototype, "_config", void 0);
    HuiWeatherForecastCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-weather-forecast-card")
    ], HuiWeatherForecastCard);
    return HuiWeatherForecastCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;


/***/ }),

/***/ "./src/panels/lovelace/cards/picture-elements/create-styled-hui-element.ts":
/*!*********************************************************************************!*\
  !*** ./src/panels/lovelace/cards/picture-elements/create-styled-hui-element.ts ***!
  \*********************************************************************************/
/*! exports provided: createStyledHuiElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyledHuiElement", function() { return createStyledHuiElement; });
/* harmony import */ var _common_create_hui_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/create-hui-element */ "./src/panels/lovelace/common/create-hui-element.ts");

function createStyledHuiElement(elementConfig) {
    var element = Object(_common_create_hui_element__WEBPACK_IMPORTED_MODULE_0__["createHuiElement"])(elementConfig);
    // keep conditional card as a transparent container so let its position remain static
    if (element.tagName !== "HUI-CONDITIONAL-ELEMENT") {
        element.classList.add("element");
    }
    if (elementConfig.style) {
        Object.keys(elementConfig.style).forEach(function (prop) {
            element.style.setProperty(prop, elementConfig.style[prop]);
        });
    }
    return element;
}


/***/ }),

/***/ "./src/panels/lovelace/common/call-service.ts":
/*!****************************************************!*\
  !*** ./src/panels/lovelace/common/call-service.ts ***!
  \****************************************************/
/*! exports provided: callService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callService", function() { return callService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var callService = function (config, hass) {
    var entityId = config.entity;
    var _a = config.service.split(".", 2), domain = _a[0], service = _a[1];
    var serviceData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ entity_id: entityId }, config.service_data);
    hass.callService(domain, service, serviceData);
};


/***/ }),

/***/ "./src/panels/lovelace/common/compute-card-size.ts":
/*!*********************************************************!*\
  !*** ./src/panels/lovelace/common/compute-card-size.ts ***!
  \*********************************************************/
/*! exports provided: computeCardSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeCardSize", function() { return computeCardSize; });
var computeCardSize = function (card) {
    return typeof card.getCardSize === "function" ? card.getCardSize() : 1;
};


/***/ }),

/***/ "./src/panels/lovelace/common/compute-tooltip.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/compute-tooltip.ts ***!
  \*******************************************************/
/*! exports provided: computeTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeTooltip", function() { return computeTooltip; });
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");

var computeTooltip = function (hass, config) {
    if (config.title === null) {
        return "";
    }
    if (config.title) {
        return config.title;
    }
    var stateName = "";
    var tooltip = "";
    if (config.entity) {
        stateName =
            config.entity in hass.states
                ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(hass.states[config.entity])
                : config.entity;
    }
    var tapTooltip = config.tap_action
        ? computeActionTooltip(hass, stateName, config.tap_action, false)
        : "";
    var holdTooltip = config.hold_action
        ? computeActionTooltip(hass, stateName, config.hold_action, true)
        : "";
    var newline = tapTooltip && holdTooltip ? "\n" : "";
    tooltip = tapTooltip + newline + holdTooltip;
    return tooltip;
};
function computeActionTooltip(hass, state, config, isHold) {
    if (!config || !config.action || config.action === "none") {
        return "";
    }
    var tooltip = (isHold
        ? hass.localize("ui.panel.lovelace.cards.picture-elements.hold")
        : hass.localize("ui.panel.lovelace.cards.picture-elements.tap")) + " ";
    switch (config.action) {
        case "navigate":
            tooltip += "" + hass.localize("ui.panel.lovelace.cards.picture-elements.navigate_to", "location", config.navigation_path);
            break;
        case "url":
            tooltip += "" + hass.localize("ui.panel.lovelace.cards.picture-elements.url", "url_path", config.url_path);
            break;
        case "toggle":
            tooltip += "" + hass.localize("ui.panel.lovelace.cards.picture-elements.toggle", "name", state);
            break;
        case "call-service":
            tooltip += "" + hass.localize("ui.panel.lovelace.cards.picture-elements.call_service", "name", config.service);
            break;
        case "more-info":
            tooltip += "" + hass.localize("ui.panel.lovelace.cards.picture-elements.more_info", "name", state);
            break;
    }
    return tooltip;
}


/***/ }),

/***/ "./src/panels/lovelace/common/create-card-element.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lovelace/common/create-card-element.ts ***!
  \***********************************************************/
/*! exports provided: createCardElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardElement", function() { return createCardElement; });
/* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _cards_hui_alarm_panel_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards/hui-alarm-panel-card */ "./src/panels/lovelace/cards/hui-alarm-panel-card.ts");
/* harmony import */ var _cards_hui_conditional_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/hui-conditional-card */ "./src/panels/lovelace/cards/hui-conditional-card.ts");
/* harmony import */ var _cards_hui_entities_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cards/hui-entities-card */ "./src/panels/lovelace/cards/hui-entities-card.ts");
/* harmony import */ var _cards_hui_entity_button_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cards/hui-entity-button-card */ "./src/panels/lovelace/cards/hui-entity-button-card.ts");
/* harmony import */ var _cards_hui_entity_filter_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cards/hui-entity-filter-card */ "./src/panels/lovelace/cards/hui-entity-filter-card.ts");
/* harmony import */ var _cards_hui_error_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cards/hui-error-card */ "./src/panels/lovelace/cards/hui-error-card.ts");
/* harmony import */ var _cards_hui_glance_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cards/hui-glance-card */ "./src/panels/lovelace/cards/hui-glance-card.ts");
/* harmony import */ var _cards_hui_history_graph_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cards/hui-history-graph-card */ "./src/panels/lovelace/cards/hui-history-graph-card.js");
/* harmony import */ var _cards_hui_horizontal_stack_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cards/hui-horizontal-stack-card */ "./src/panels/lovelace/cards/hui-horizontal-stack-card.ts");
/* harmony import */ var _cards_hui_iframe_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cards/hui-iframe-card */ "./src/panels/lovelace/cards/hui-iframe-card.ts");
/* harmony import */ var _cards_hui_light_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cards/hui-light-card */ "./src/panels/lovelace/cards/hui-light-card.ts");
/* harmony import */ var _cards_hui_map_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../cards/hui-map-card */ "./src/panels/lovelace/cards/hui-map-card.ts");
/* harmony import */ var _cards_hui_markdown_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../cards/hui-markdown-card */ "./src/panels/lovelace/cards/hui-markdown-card.ts");
/* harmony import */ var _cards_hui_media_control_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../cards/hui-media-control-card */ "./src/panels/lovelace/cards/hui-media-control-card.js");
/* harmony import */ var _cards_hui_picture_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../cards/hui-picture-card */ "./src/panels/lovelace/cards/hui-picture-card.ts");
/* harmony import */ var _cards_hui_picture_elements_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../cards/hui-picture-elements-card */ "./src/panels/lovelace/cards/hui-picture-elements-card.ts");
/* harmony import */ var _cards_hui_picture_entity_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../cards/hui-picture-entity-card */ "./src/panels/lovelace/cards/hui-picture-entity-card.ts");
/* harmony import */ var _cards_hui_picture_glance_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../cards/hui-picture-glance-card */ "./src/panels/lovelace/cards/hui-picture-glance-card.ts");
/* harmony import */ var _cards_hui_plant_status_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../cards/hui-plant-status-card */ "./src/panels/lovelace/cards/hui-plant-status-card.ts");
/* harmony import */ var _cards_hui_sensor_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../cards/hui-sensor-card */ "./src/panels/lovelace/cards/hui-sensor-card.ts");
/* harmony import */ var _cards_hui_vertical_stack_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../cards/hui-vertical-stack-card */ "./src/panels/lovelace/cards/hui-vertical-stack-card.ts");
/* harmony import */ var _cards_hui_shopping_list_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../cards/hui-shopping-list-card */ "./src/panels/lovelace/cards/hui-shopping-list-card.ts");
/* harmony import */ var _cards_hui_thermostat_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../cards/hui-thermostat-card */ "./src/panels/lovelace/cards/hui-thermostat-card.ts");
/* harmony import */ var _cards_hui_weather_forecast_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../cards/hui-weather-forecast-card */ "./src/panels/lovelace/cards/hui-weather-forecast-card.ts");
/* harmony import */ var _cards_hui_gauge_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../cards/hui-gauge-card */ "./src/panels/lovelace/cards/hui-gauge-card.ts");



























var CARD_TYPES = new Set([
    "alarm-panel",
    "conditional",
    "entities",
    "entity-button",
    "entity-filter",
    "error",
    "gauge",
    "glance",
    "history-graph",
    "horizontal-stack",
    "iframe",
    "light",
    "map",
    "markdown",
    "media-control",
    "picture",
    "picture-elements",
    "picture-entity",
    "picture-glance",
    "plant-status",
    "sensor",
    "shopping-list",
    "thermostat",
    "vertical-stack",
    "weather-forecast",
]);
var CUSTOM_TYPE_PREFIX = "custom:";
var TIMEOUT = 2000;
var _createElement = function (tag, config) {
    var element = document.createElement(tag);
    try {
        element.setConfig(Object(deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__["default"])(config));
    }
    catch (err) {
        // tslint:disable-next-line
        console.error(tag, err);
        return _createErrorElement(err.message, config);
    }
    return element;
};
var _createErrorElement = function (error, config) { return Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_7__["createErrorCardElement"])(Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_7__["createErrorCardConfig"])(error, config)); };
var createCardElement = function (config) {
    if (!config || typeof config !== "object" || !config.type) {
        return _createErrorElement("No card type configured.", config);
    }
    if (config.type.startsWith(CUSTOM_TYPE_PREFIX)) {
        var tag = config.type.substr(CUSTOM_TYPE_PREFIX.length);
        if (customElements.get(tag)) {
            return _createElement(tag, config);
        }
        var element_1 = _createErrorElement("Custom element doesn't exist: " + tag + ".", config);
        element_1.style.display = "None";
        var timer_1 = window.setTimeout(function () {
            element_1.style.display = "";
        }, TIMEOUT);
        customElements.whenDefined(tag).then(function () {
            clearTimeout(timer_1);
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(element_1, "ll-rebuild");
        });
        return element_1;
    }
    if (!CARD_TYPES.has(config.type)) {
        return _createErrorElement("Unknown card type encountered: " + config.type + ".", config);
    }
    return _createElement("hui-" + config.type + "-card", config);
};


/***/ }),

/***/ "./src/panels/lovelace/common/create-hui-element.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/common/create-hui-element.ts ***!
  \**********************************************************/
/*! exports provided: createHuiElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHuiElement", function() { return createHuiElement; });
/* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js");
/* harmony import */ var _elements_hui_conditional_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/hui-conditional-element */ "./src/panels/lovelace/elements/hui-conditional-element.ts");
/* harmony import */ var _elements_hui_icon_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/hui-icon-element */ "./src/panels/lovelace/elements/hui-icon-element.ts");
/* harmony import */ var _elements_hui_image_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/hui-image-element */ "./src/panels/lovelace/elements/hui-image-element.ts");
/* harmony import */ var _elements_hui_service_button_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/hui-service-button-element */ "./src/panels/lovelace/elements/hui-service-button-element.ts");
/* harmony import */ var _elements_hui_state_badge_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/hui-state-badge-element */ "./src/panels/lovelace/elements/hui-state-badge-element.ts");
/* harmony import */ var _elements_hui_state_icon_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements/hui-state-icon-element */ "./src/panels/lovelace/elements/hui-state-icon-element.ts");
/* harmony import */ var _elements_hui_state_label_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../elements/hui-state-label-element */ "./src/panels/lovelace/elements/hui-state-label-element.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _cards_hui_error_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cards/hui-error-card */ "./src/panels/lovelace/cards/hui-error-card.ts");










var CUSTOM_TYPE_PREFIX = "custom:";
var ELEMENT_TYPES = new Set([
    "conditional",
    "icon",
    "image",
    "service-button",
    "state-badge",
    "state-icon",
    "state-label",
]);
var TIMEOUT = 2000;
var _createElement = function (tag, config) {
    var element = document.createElement(tag);
    try {
        element.setConfig(Object(deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__["default"])(config));
    }
    catch (err) {
        // tslint:disable-next-line
        console.error(tag, err);
        return _createErrorElement(err.message, config);
    }
    return element;
};
var _createErrorElement = function (error, config) { return Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_9__["createErrorCardElement"])(Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_9__["createErrorCardConfig"])(error, config)); };
function _hideErrorElement(element) {
    element.style.display = "None";
    return window.setTimeout(function () {
        element.style.display = "";
    }, TIMEOUT);
}
var createHuiElement = function (config) {
    if (!config || typeof config !== "object" || !config.type) {
        return _createErrorElement("No element type configured.", config);
    }
    if (config.type.startsWith(CUSTOM_TYPE_PREFIX)) {
        var tag = config.type.substr(CUSTOM_TYPE_PREFIX.length);
        if (customElements.get(tag)) {
            return _createElement(tag, config);
        }
        var element_1 = _createErrorElement("Custom element doesn't exist: " + tag + ".", config);
        var timer_1 = _hideErrorElement(element_1);
        customElements.whenDefined(tag).then(function () {
            clearTimeout(timer_1);
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(element_1, "ll-rebuild");
        });
        return element_1;
    }
    if (!ELEMENT_TYPES.has(config.type)) {
        return _createErrorElement("Unknown element type encountered: " + config.type + ".", config);
    }
    return _createElement("hui-" + config.type + "-element", config);
};


/***/ }),

/***/ "./src/panels/lovelace/common/create-row-element.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/common/create-row-element.ts ***!
  \**********************************************************/
/*! exports provided: createRowElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRowElement", function() { return createRowElement; });
/* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _cards_hui_error_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards/hui-error-card */ "./src/panels/lovelace/cards/hui-error-card.ts");
/* harmony import */ var _entity_rows_hui_climate_entity_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity-rows/hui-climate-entity-row */ "./src/panels/lovelace/entity-rows/hui-climate-entity-row.ts");
/* harmony import */ var _entity_rows_hui_cover_entity_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity-rows/hui-cover-entity-row */ "./src/panels/lovelace/entity-rows/hui-cover-entity-row.ts");
/* harmony import */ var _entity_rows_hui_group_entity_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entity-rows/hui-group-entity-row */ "./src/panels/lovelace/entity-rows/hui-group-entity-row.ts");
/* harmony import */ var _entity_rows_hui_input_datetime_entity_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entity-rows/hui-input-datetime-entity-row */ "./src/panels/lovelace/entity-rows/hui-input-datetime-entity-row.ts");
/* harmony import */ var _entity_rows_hui_input_number_entity_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../entity-rows/hui-input-number-entity-row */ "./src/panels/lovelace/entity-rows/hui-input-number-entity-row.ts");
/* harmony import */ var _entity_rows_hui_input_select_entity_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../entity-rows/hui-input-select-entity-row */ "./src/panels/lovelace/entity-rows/hui-input-select-entity-row.ts");
/* harmony import */ var _entity_rows_hui_input_text_entity_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../entity-rows/hui-input-text-entity-row */ "./src/panels/lovelace/entity-rows/hui-input-text-entity-row.ts");
/* harmony import */ var _entity_rows_hui_lock_entity_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../entity-rows/hui-lock-entity-row */ "./src/panels/lovelace/entity-rows/hui-lock-entity-row.ts");
/* harmony import */ var _entity_rows_hui_media_player_entity_row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../entity-rows/hui-media-player-entity-row */ "./src/panels/lovelace/entity-rows/hui-media-player-entity-row.ts");
/* harmony import */ var _entity_rows_hui_scene_entity_row__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../entity-rows/hui-scene-entity-row */ "./src/panels/lovelace/entity-rows/hui-scene-entity-row.ts");
/* harmony import */ var _entity_rows_hui_script_entity_row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../entity-rows/hui-script-entity-row */ "./src/panels/lovelace/entity-rows/hui-script-entity-row.ts");
/* harmony import */ var _entity_rows_hui_sensor_entity_row__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../entity-rows/hui-sensor-entity-row */ "./src/panels/lovelace/entity-rows/hui-sensor-entity-row.ts");
/* harmony import */ var _entity_rows_hui_text_entity_row__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../entity-rows/hui-text-entity-row */ "./src/panels/lovelace/entity-rows/hui-text-entity-row.ts");
/* harmony import */ var _entity_rows_hui_timer_entity_row__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../entity-rows/hui-timer-entity-row */ "./src/panels/lovelace/entity-rows/hui-timer-entity-row.ts");
/* harmony import */ var _entity_rows_hui_toggle_entity_row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../entity-rows/hui-toggle-entity-row */ "./src/panels/lovelace/entity-rows/hui-toggle-entity-row.ts");
/* harmony import */ var _special_rows_hui_call_service_row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../special-rows/hui-call-service-row */ "./src/panels/lovelace/special-rows/hui-call-service-row.ts");
/* harmony import */ var _special_rows_hui_divider_row__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../special-rows/hui-divider-row */ "./src/panels/lovelace/special-rows/hui-divider-row.ts");
/* harmony import */ var _special_rows_hui_section_row__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../special-rows/hui-section-row */ "./src/panels/lovelace/special-rows/hui-section-row.ts");
/* harmony import */ var _special_rows_hui_weblink_row__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../special-rows/hui-weblink-row */ "./src/panels/lovelace/special-rows/hui-weblink-row.ts");
/* harmony import */ var _special_rows_hui_cast_row__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../special-rows/hui-cast-row */ "./src/panels/lovelace/special-rows/hui-cast-row.ts");























var CUSTOM_TYPE_PREFIX = "custom:";
var SPECIAL_TYPES = new Set([
    "call-service",
    "divider",
    "section",
    "weblink",
    "cast",
    "select",
]);
var DOMAIN_TO_ELEMENT_TYPE = {
    alert: "toggle",
    automation: "toggle",
    climate: "climate",
    cover: "cover",
    fan: "toggle",
    group: "group",
    input_boolean: "toggle",
    input_number: "input-number",
    input_select: "input-select",
    input_text: "input-text",
    light: "toggle",
    lock: "lock",
    media_player: "media-player",
    remote: "toggle",
    scene: "scene",
    script: "script",
    sensor: "sensor",
    timer: "timer",
    switch: "toggle",
    vacuum: "toggle",
    // Temporary. Once climate is rewritten,
    // water heater should get it's own row.
    water_heater: "climate",
    input_datetime: "input-datetime",
};
var TIMEOUT = 2000;
var _createElement = function (tag, config) {
    var element = document.createElement(tag);
    try {
        element.setConfig(Object(deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__["default"])(config));
    }
    catch (err) {
        // tslint:disable-next-line
        console.error(tag, err);
        return _createErrorElement(err.message, config);
    }
    return element;
};
var _createErrorElement = function (error, config) { return Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_2__["createErrorCardElement"])(Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_2__["createErrorCardConfig"])(error, config)); };
var _hideErrorElement = function (element) {
    element.style.display = "None";
    return window.setTimeout(function () {
        element.style.display = "";
    }, TIMEOUT);
};
var createRowElement = function (config) {
    var tag;
    if (!config ||
        typeof config !== "object" ||
        (!config.entity && !config.type)) {
        return _createErrorElement("Invalid config given.", config);
    }
    var type = config.type || "default";
    if (SPECIAL_TYPES.has(type)) {
        return _createElement("hui-" + type + "-row", config);
    }
    if (type.startsWith(CUSTOM_TYPE_PREFIX)) {
        tag = type.substr(CUSTOM_TYPE_PREFIX.length);
        if (customElements.get(tag)) {
            return _createElement(tag, config);
        }
        var element_1 = _createErrorElement("Custom element doesn't exist: " + tag + ".", config);
        var timer_1 = _hideErrorElement(element_1);
        customElements.whenDefined(tag).then(function () {
            clearTimeout(timer_1);
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(element_1, "ll-rebuild");
        });
        return element_1;
    }
    if (!config.entity) {
        return _createErrorElement("Invalid config given.", config);
    }
    var domain = config.entity.split(".", 1)[0];
    tag = "hui-" + (DOMAIN_TO_ELEMENT_TYPE[domain] || "text") + "-entity-row";
    return _createElement(tag, config);
};


/***/ }),

/***/ "./src/panels/lovelace/common/directives/long-press-directive.ts":
/*!***********************************************************************!*\
  !*** ./src/panels/lovelace/common/directives/long-press-directive.ts ***!
  \***********************************************************************/
/*! exports provided: longPressBind, longPress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longPressBind", function() { return longPressBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longPress", function() { return longPress; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var _material_mwc_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-ripple */ "./node_modules/@material/mwc-ripple/mwc-ripple.js");



var isTouch = "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
var LongPress = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LongPress, _super);
    function LongPress() {
        var _this = _super.call(this) || this;
        _this.holdTime = 500;
        _this.ripple = document.createElement("mwc-ripple");
        _this.timer = undefined;
        _this.held = false;
        _this.cooldownStart = false;
        _this.cooldownEnd = false;
        return _this;
    }
    LongPress.prototype.connectedCallback = function () {
        var _this = this;
        Object.assign(this.style, {
            position: "absolute",
            width: isTouch ? "100px" : "50px",
            height: isTouch ? "100px" : "50px",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
        });
        this.appendChild(this.ripple);
        this.ripple.primary = true;
        [
            "touchcancel",
            "mouseout",
            "mouseup",
            "touchmove",
            "mousewheel",
            "wheel",
            "scroll",
        ].forEach(function (ev) {
            document.addEventListener(ev, function () {
                clearTimeout(_this.timer);
                _this.stopAnimation();
                _this.timer = undefined;
            }, { passive: true });
        });
    };
    LongPress.prototype.bind = function (element) {
        var _this = this;
        if (element.longPress) {
            return;
        }
        element.longPress = true;
        element.addEventListener("contextmenu", function (ev) {
            var e = ev || window.event;
            if (e.preventDefault) {
                e.preventDefault();
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
        });
        var clickStart = function (ev) {
            if (_this.cooldownStart) {
                return;
            }
            _this.held = false;
            var x;
            var y;
            if (ev.touches) {
                x = ev.touches[0].pageX;
                y = ev.touches[0].pageY;
            }
            else {
                x = ev.pageX;
                y = ev.pageY;
            }
            _this.timer = window.setTimeout(function () {
                _this.startAnimation(x, y);
                _this.held = true;
            }, _this.holdTime);
            _this.cooldownStart = true;
            window.setTimeout(function () { return (_this.cooldownStart = false); }, 100);
        };
        var clickEnd = function (ev) {
            if (_this.cooldownEnd ||
                (["touchend", "touchcancel"].includes(ev.type) &&
                    _this.timer === undefined)) {
                return;
            }
            clearTimeout(_this.timer);
            _this.stopAnimation();
            _this.timer = undefined;
            if (_this.held) {
                element.dispatchEvent(new Event("ha-hold"));
            }
            else {
                element.dispatchEvent(new Event("ha-click"));
            }
            _this.cooldownEnd = true;
            window.setTimeout(function () { return (_this.cooldownEnd = false); }, 100);
        };
        element.addEventListener("touchstart", clickStart, { passive: true });
        element.addEventListener("touchend", clickEnd);
        element.addEventListener("touchcancel", clickEnd);
        // iOS 13 sends a complete normal touchstart-touchend series of events followed by a mousedown-click series.
        // That might be a bug, but until it's fixed, this should make long-press work.
        // If it's not a bug that is fixed, this might need updating with the next iOS version.
        // Note that all events (both touch and mouse) must be listened for in order to work on computers with both mouse and touchscreen.
        var isIOS13 = window.navigator.userAgent.match(/iPhone OS 13_/);
        if (!isIOS13) {
            element.addEventListener("mousedown", clickStart, { passive: true });
            element.addEventListener("click", clickEnd);
        }
    };
    LongPress.prototype.startAnimation = function (x, y) {
        Object.assign(this.style, {
            left: x + "px",
            top: y + "px",
            display: null,
        });
        this.ripple.disabled = false;
        this.ripple.active = true;
        this.ripple.unbounded = true;
    };
    LongPress.prototype.stopAnimation = function () {
        this.ripple.active = false;
        this.ripple.disabled = true;
        this.style.display = "none";
    };
    return LongPress;
}(HTMLElement));
customElements.define("long-press", LongPress);
var getLongPress = function () {
    var body = document.body;
    if (body.querySelector("long-press")) {
        return body.querySelector("long-press");
    }
    var longpress = document.createElement("long-press");
    body.appendChild(longpress);
    return longpress;
};
var longPressBind = function (element) {
    var longpress = getLongPress();
    if (!longpress) {
        return;
    }
    longpress.bind(element);
};
var longPress = Object(lit_html__WEBPACK_IMPORTED_MODULE_1__["directive"])(function () { return function (part) {
    longPressBind(part.committer.element);
}; });


/***/ }),

/***/ "./src/panels/lovelace/common/entity/toggle-entity.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/common/entity/toggle-entity.ts ***!
  \************************************************************/
/*! exports provided: toggleEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEntity", function() { return toggleEntity; });
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _turn_on_off_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turn-on-off-entity */ "./src/panels/lovelace/common/entity/turn-on-off-entity.ts");


var toggleEntity = function (hass, entityId) {
    var turnOn = _common_const__WEBPACK_IMPORTED_MODULE_0__["STATES_OFF"].includes(hass.states[entityId].state);
    return Object(_turn_on_off_entity__WEBPACK_IMPORTED_MODULE_1__["turnOnOffEntity"])(hass, entityId, turnOn);
};


/***/ }),

/***/ "./src/panels/lovelace/common/entity/turn-on-off-entities.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/common/entity/turn-on-off-entities.ts ***!
  \*******************************************************************/
/*! exports provided: turnOnOffEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnOnOffEntities", function() { return turnOnOffEntities; });
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/const */ "./src/common/const.ts");


var turnOnOffEntities = function (hass, entityIds, turnOn) {
    if (turnOn === void 0) { turnOn = true; }
    var domainsToCall = {};
    entityIds.forEach(function (entityId) {
        if (_common_const__WEBPACK_IMPORTED_MODULE_1__["STATES_OFF"].includes(hass.states[entityId].state) === turnOn) {
            var stateDomain = Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId);
            var serviceDomain = ["cover", "lock"].includes(stateDomain)
                ? stateDomain
                : "homeassistant";
            if (!(serviceDomain in domainsToCall)) {
                domainsToCall[serviceDomain] = [];
            }
            domainsToCall[serviceDomain].push(entityId);
        }
    });
    Object.keys(domainsToCall).forEach(function (domain) {
        var service;
        switch (domain) {
            case "lock":
                service = turnOn ? "unlock" : "lock";
                break;
            case "cover":
                service = turnOn ? "open_cover" : "close_cover";
                break;
            default:
                service = turnOn ? "turn_on" : "turn_off";
        }
        var entities = domainsToCall[domain];
        hass.callService(domain, service, { entity_id: entities });
    });
};


/***/ }),

/***/ "./src/panels/lovelace/common/entity/turn-on-off-entity.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/common/entity/turn-on-off-entity.ts ***!
  \*****************************************************************/
/*! exports provided: turnOnOffEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnOnOffEntity", function() { return turnOnOffEntity; });
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");

var turnOnOffEntity = function (hass, entityId, turnOn) {
    if (turnOn === void 0) { turnOn = true; }
    var stateDomain = Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId);
    var serviceDomain = stateDomain === "group" ? "homeassistant" : stateDomain;
    var service;
    switch (stateDomain) {
        case "lock":
            service = turnOn ? "unlock" : "lock";
            break;
        case "cover":
            service = turnOn ? "open_cover" : "close_cover";
            break;
        default:
            service = turnOn ? "turn_on" : "turn_off";
    }
    return hass.callService(serviceDomain, service, { entity_id: entityId });
};


/***/ }),

/***/ "./src/panels/lovelace/common/evaluate-filter.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/evaluate-filter.ts ***!
  \*******************************************************/
/*! exports provided: evaluateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluateFilter", function() { return evaluateFilter; });
var evaluateFilter = function (stateObj, filter) {
    var operator = filter.operator || "==";
    var value = filter.value || filter;
    var state = filter.attribute
        ? stateObj.attributes[filter.attribute]
        : stateObj.state;
    switch (operator) {
        case "==":
            return state === value;
        case "<=":
            return state <= value;
        case "<":
            return state < value;
        case ">=":
            return state >= value;
        case ">":
            return state > value;
        case "!=":
            return state !== value;
        case "regex": {
            return state.match(value);
        }
        default:
            return false;
    }
};


/***/ }),

/***/ "./src/panels/lovelace/common/generate-lovelace-config.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/common/generate-lovelace-config.ts ***!
  \****************************************************************/
/*! exports provided: generateDefaultViewConfig, generateLovelaceConfigFromHass, generateLovelaceConfigFromData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDefaultViewConfig", function() { return generateDefaultViewConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateLovelaceConfigFromHass", function() { return generateLovelaceConfigFromHass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateLovelaceConfigFromData", function() { return generateLovelaceConfigFromData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_entity_extract_views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/entity/extract_views */ "./src/common/entity/extract_views.ts");
/* harmony import */ var _common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/entity/get_view_entities */ "./src/common/entity/get_view_entities.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/split_by_groups */ "./src/common/entity/split_by_groups.ts");
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _common_util_subscribe_one__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/util/subscribe-one */ "./src/common/util/subscribe-one.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");












var DEFAULT_VIEW_ENTITY_ID = "group.default_view";
var DOMAINS_BADGES = [
    "binary_sensor",
    "person",
    "device_tracker",
    "mailbox",
    "sensor",
    "sun",
    "timer",
];
var HIDE_DOMAIN = new Set([
    "persistent_notification",
    "configurator",
    "geo_location",
]);
var subscribedRegistries = false;
var splitByAreas = function (areaEntries, deviceEntries, entityEntries, entities) {
    var allEntities = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, entities);
    var areasWithEntities = [];
    var _loop_1 = function (area) {
        var areaEntities = [];
        var areaDevices = new Set(deviceEntries
            .filter(function (device) { return device.area_id === area.area_id; })
            .map(function (device) { return device.id; }));
        for (var _i = 0, entityEntries_1 = entityEntries; _i < entityEntries_1.length; _i++) {
            var entity = entityEntries_1[_i];
            if (areaDevices.has(
            // @ts-ignore
            entity.device_id) &&
                entity.entity_id in allEntities) {
                areaEntities.push(allEntities[entity.entity_id]);
                delete allEntities[entity.entity_id];
            }
        }
        if (areaEntities.length > 0) {
            areasWithEntities.push([area, areaEntities]);
        }
    };
    for (var _i = 0, areaEntries_1 = areaEntries; _i < areaEntries_1.length; _i++) {
        var area = areaEntries_1[_i];
        _loop_1(area);
    }
    return {
        areasWithEntities: areasWithEntities,
        otherEntities: allEntities,
    };
};
var computeCards = function (states, entityCardOptions) {
    var cards = [];
    // For entity card
    var entities = [];
    for (var _i = 0, states_1 = states; _i < states_1.length; _i++) {
        var _a = states_1[_i], entityId = _a[0], stateObj = _a[1];
        var domain = Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_7__["computeDomain"])(entityId);
        if (domain === "alarm_control_panel") {
            cards.push({
                type: "alarm-panel",
                entity: entityId,
            });
        }
        else if (domain === "camera") {
            cards.push({
                type: "picture-entity",
                entity: entityId,
            });
        }
        else if (domain === "climate") {
            cards.push({
                type: "thermostat",
                entity: entityId,
            });
        }
        else if (domain === "history_graph" && stateObj) {
            cards.push({
                type: "history-graph",
                entities: stateObj.attributes.entity_id,
                hours_to_show: stateObj.attributes.hours_to_show,
                title: stateObj.attributes.friendly_name,
                refresh_interval: stateObj.attributes.refresh,
            });
        }
        else if (domain === "media_player") {
            cards.push({
                type: "media-control",
                entity: entityId,
            });
        }
        else if (domain === "plant") {
            cards.push({
                type: "plant-status",
                entity: entityId,
            });
        }
        else if (domain === "weather") {
            cards.push({
                type: "weather-forecast",
                entity: entityId,
            });
        }
        else if (domain === "weblink" && stateObj) {
            var conf = {
                type: "weblink",
                url: stateObj.state,
                name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["computeStateName"])(stateObj),
            };
            if ("icon" in stateObj.attributes) {
                conf.icon = stateObj.attributes.icon;
            }
            entities.push(conf);
        }
        else {
            entities.push(entityId);
        }
    }
    if (entities.length > 0) {
        cards.unshift(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "entities", entities: entities }, entityCardOptions));
    }
    return cards;
};
var computeDefaultViewStates = function (entities) {
    var states = {};
    Object.keys(entities).forEach(function (entityId) {
        var stateObj = entities[entityId];
        if (!stateObj.attributes.hidden &&
            !HIDE_DOMAIN.has(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["computeStateDomain"])(stateObj))) {
            states[entityId] = entities[entityId];
        }
    });
    return states;
};
var generateDefaultViewConfig = function (areaEntries, deviceEntries, entityEntries, entities, localize) {
    var _a;
    var states = computeDefaultViewStates(entities);
    var path = "default_view";
    var title = "Home";
    var icon = undefined;
    // In the case of a default view, we want to use the group order attribute
    var groupOrders = {};
    Object.keys(states).forEach(function (entityId) {
        var stateObj = states[entityId];
        if (stateObj.attributes.order) {
            groupOrders[entityId] = stateObj.attributes.order;
        }
    });
    var splittedByAreas = splitByAreas(areaEntries, deviceEntries, entityEntries, states);
    var config = generateViewConfig(localize, path, title, icon, splittedByAreas.otherEntities, groupOrders);
    var areaCards = [];
    splittedByAreas.areasWithEntities.forEach(function (_a) {
        var area = _a[0], areaEntities = _a[1];
        areaCards.push.apply(areaCards, computeCards(areaEntities.map(function (entity) { return [entity.entity_id, entity]; }), {
            title: area.name,
            show_header_toggle: true,
        }));
    });
    (_a = config.cards).unshift.apply(_a, areaCards);
    return config;
};
var generateViewConfig = function (localize, path, title, icon, entities, groupOrders) {
    var splitted = Object(_common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_4__["splitByGroups"])(entities);
    splitted.groups.sort(function (gr1, gr2) { return groupOrders[gr1.entity_id] - groupOrders[gr2.entity_id]; });
    var badgeEntities = {};
    var ungroupedEntitites = {};
    // Organize ungrouped entities in badges/ungrouped things
    Object.keys(splitted.ungrouped).forEach(function (entityId) {
        var state = splitted.ungrouped[entityId];
        var domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["computeStateDomain"])(state);
        var coll = DOMAINS_BADGES.includes(domain)
            ? badgeEntities
            : ungroupedEntitites;
        if (!(domain in coll)) {
            coll[domain] = [];
        }
        coll[domain].push(state.entity_id);
    });
    var badges = [];
    DOMAINS_BADGES.forEach(function (domain) {
        if (domain in badgeEntities) {
            badges = badges.concat(badgeEntities[domain]);
        }
    });
    var cards = [];
    splitted.groups.forEach(function (groupEntity) {
        cards = cards.concat(computeCards(groupEntity.attributes.entity_id.map(function (entityId) { return [entityId, entities[entityId]]; }), {
            title: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["computeStateName"])(groupEntity),
            show_header_toggle: groupEntity.attributes.control !== "hidden",
        }));
    });
    Object.keys(ungroupedEntitites)
        .sort()
        .forEach(function (domain) {
        cards = cards.concat(computeCards(ungroupedEntitites[domain].map(function (entityId) { return [entityId, entities[entityId]]; }), {
            title: localize("domain." + domain),
        }));
    });
    var view = {
        path: path,
        title: title,
        badges: badges,
        cards: cards,
    };
    if (icon) {
        view.icon = icon;
    }
    return view;
};
var generateLovelaceConfigFromHass = function (hass) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var _a, areaEntries, deviceEntries, entityEntries;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
        switch (_b.label) {
            case 0:
                // We want to keep the registry subscriptions alive after generating the UI
                // so that we don't serve up stale data after changing areas.
                if (!subscribedRegistries) {
                    subscribedRegistries = true;
                    Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_8__["subscribeAreaRegistry"])(hass.connection, function () { return undefined; });
                    Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_10__["subscribeDeviceRegistry"])(hass.connection, function () { return undefined; });
                    Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_11__["subscribeEntityRegistry"])(hass.connection, function () { return undefined; });
                }
                return [4 /*yield*/, Promise.all([
                        Object(_common_util_subscribe_one__WEBPACK_IMPORTED_MODULE_9__["subscribeOne"])(hass.connection, _data_area_registry__WEBPACK_IMPORTED_MODULE_8__["subscribeAreaRegistry"]),
                        Object(_common_util_subscribe_one__WEBPACK_IMPORTED_MODULE_9__["subscribeOne"])(hass.connection, _data_device_registry__WEBPACK_IMPORTED_MODULE_10__["subscribeDeviceRegistry"]),
                        Object(_common_util_subscribe_one__WEBPACK_IMPORTED_MODULE_9__["subscribeOne"])(hass.connection, _data_entity_registry__WEBPACK_IMPORTED_MODULE_11__["subscribeEntityRegistry"]),
                    ])];
            case 1:
                _a = _b.sent(), areaEntries = _a[0], deviceEntries = _a[1], entityEntries = _a[2];
                return [2 /*return*/, generateLovelaceConfigFromData(hass.config, areaEntries, deviceEntries, entityEntries, hass.states, hass.localize)];
        }
    });
}); };
var generateLovelaceConfigFromData = function (config, areaEntries, deviceEntries, entityEntries, entities, localize) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var viewEntities, views, title;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        viewEntities = Object(_common_entity_extract_views__WEBPACK_IMPORTED_MODULE_1__["extractViews"])(entities);
        views = viewEntities.map(function (viewEntity) {
            var states = Object(_common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_2__["getViewEntities"])(entities, viewEntity);
            // In the case of a normal view, we use group order as specified in view
            var groupOrders = {};
            Object.keys(states).forEach(function (entityId, idx) {
                groupOrders[entityId] = idx;
            });
            return generateViewConfig(localize, Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_5__["computeObjectId"])(viewEntity.entity_id), Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["computeStateName"])(viewEntity), viewEntity.attributes.icon, states, groupOrders);
        });
        title = config.location_name;
        // User can override default view. If they didn't, we will add one
        // that contains all entities.
        if (viewEntities.length === 0 ||
            viewEntities[0].entity_id !== DEFAULT_VIEW_ENTITY_ID) {
            views.unshift(generateDefaultViewConfig(areaEntries, deviceEntries, entityEntries, entities, localize));
            // Add map of geo locations to default view if loaded
            if (config.components.includes("geo_location")) {
                if (views[0] && views[0].cards) {
                    views[0].cards.push({
                        type: "map",
                        geo_location_sources: ["all"],
                    });
                }
            }
            // Make sure we don't have Home as title and first tab.
            if (views.length > 1 && title === "Home") {
                title = "牧养犬";
            }
        }
        // User has no entities
        if (views.length === 1 && views[0].cards.length === 0) {
            __webpack_require__.e(/*! import() | hui-empty-state-card */ "hui-empty-state-card").then(__webpack_require__.bind(null, /*! ../cards/hui-empty-state-card */ "./src/panels/lovelace/cards/hui-empty-state-card.ts"));
            views[0].cards.push({
                type: "custom:hui-empty-state-card",
            });
        }
        return [2 /*return*/, {
                title: title,
                views: views,
            }];
    });
}); };


/***/ }),

/***/ "./src/panels/lovelace/common/handle-click.ts":
/*!****************************************************!*\
  !*** ./src/panels/lovelace/common/handle-click.ts ***!
  \****************************************************/
/*! exports provided: handleClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleClick", function() { return handleClick; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _src_panels_lovelace_common_entity_toggle_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/panels/lovelace/common/entity/toggle-entity */ "./src/panels/lovelace/common/entity/toggle-entity.ts");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/haptics */ "./src/data/haptics.ts");




var handleClick = function (node, hass, config, hold) {
    var actionConfig;
    if (hold && config.hold_action) {
        actionConfig = config.hold_action;
    }
    else if (!hold && config.tap_action) {
        actionConfig = config.tap_action;
    }
    if (!actionConfig) {
        actionConfig = {
            action: "more-info",
        };
    }
    switch (actionConfig.action) {
        case "more-info":
            if (config.entity || config.camera_image) {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(node, "hass-more-info", {
                    entityId: config.entity ? config.entity : config.camera_image,
                });
            }
            break;
        case "navigate":
            if (actionConfig.navigation_path) {
                Object(_common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])(node, actionConfig.navigation_path);
            }
            break;
        case "url":
            if (actionConfig.url_path) {
                window.open(actionConfig.url_path);
            }
            break;
        case "toggle":
            if (config.entity) {
                Object(_src_panels_lovelace_common_entity_toggle_entity__WEBPACK_IMPORTED_MODULE_2__["toggleEntity"])(hass, config.entity);
            }
            break;
        case "call-service": {
            if (!actionConfig.service) {
                Object(_data_haptics__WEBPACK_IMPORTED_MODULE_3__["forwardHaptic"])("failure");
                return;
            }
            var _a = actionConfig.service.split(".", 2), domain = _a[0], service = _a[1];
            hass.callService(domain, service, actionConfig.service_data);
        }
    }
    Object(_data_haptics__WEBPACK_IMPORTED_MODULE_3__["forwardHaptic"])("light");
};


/***/ }),

/***/ "./src/panels/lovelace/common/has-changed.ts":
/*!***************************************************!*\
  !*** ./src/panels/lovelace/common/has-changed.ts ***!
  \***************************************************/
/*! exports provided: hasConfigOrEntityChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasConfigOrEntityChanged", function() { return hasConfigOrEntityChanged; });
// Check if config or Entity changed
function hasConfigOrEntityChanged(element, changedProps) {
    if (changedProps.has("_config")) {
        return true;
    }
    var oldHass = changedProps.get("hass");
    if (!oldHass) {
        return true;
    }
    return (oldHass.states[element._config.entity] !==
        element.hass.states[element._config.entity] ||
        oldHass.localize !== element.hass.localize);
}


/***/ }),

/***/ "./src/panels/lovelace/common/load-resources.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/common/load-resources.ts ***!
  \******************************************************/
/*! exports provided: loadLovelaceResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLovelaceResources", function() { return loadLovelaceResources; });
/* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/load_resource */ "./src/common/dom/load_resource.ts");

// CSS and JS should only be imported once. Modules and HTML are safe.
var CSS_CACHE = {};
var JS_CACHE = {};
var loadLovelaceResources = function (resources, hassUrl) {
    return resources.forEach(function (resource) {
        var normalizedUrl = new URL(resource.url, hassUrl).toString();
        switch (resource.type) {
            case "css":
                if (normalizedUrl in CSS_CACHE) {
                    break;
                }
                CSS_CACHE[normalizedUrl] = Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadCSS"])(normalizedUrl);
                break;
            case "js":
                if (normalizedUrl in JS_CACHE) {
                    break;
                }
                JS_CACHE[normalizedUrl] = Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"])(normalizedUrl);
                break;
            case "module":
                Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadModule"])(normalizedUrl);
                break;
            case "html":
                __webpack_require__.e(/*! import() | import-href-polyfill */ "import-href-polyfill").then(__webpack_require__.bind(null, /*! ../../../resources/html-import/import-href */ "./src/resources/html-import/import-href.js")).then(function (_a) {
                    var importHref = _a.importHref;
                    return importHref(normalizedUrl);
                });
                break;
            default:
                // tslint:disable-next-line
                console.warn("Unknown resource type specified: " + resource.type);
        }
    });
};


/***/ }),

/***/ "./src/panels/lovelace/common/process-config-entities.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/common/process-config-entities.ts ***!
  \***************************************************************/
/*! exports provided: processConfigEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processConfigEntities", function() { return processConfigEntities; });
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
// Parse array of entity objects from config

var processConfigEntities = function (entities) {
    if (!entities || !Array.isArray(entities)) {
        throw new Error("Entities need to be an array");
    }
    return entities.map(function (entityConf, index) {
        if (typeof entityConf === "object" &&
            !Array.isArray(entityConf) &&
            entityConf.type) {
            return entityConf;
        }
        var config;
        if (typeof entityConf === "string") {
            // tslint:disable-next-line:no-object-literal-type-assertion
            config = { entity: entityConf };
        }
        else if (typeof entityConf === "object" && !Array.isArray(entityConf)) {
            if (!entityConf.entity) {
                throw new Error("Entity object at position " + index + " is missing entity field.");
            }
            config = entityConf;
        }
        else {
            throw new Error("Invalid entity specified at position " + index + ".");
        }
        if (!Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_0__["isValidEntityId"])(config.entity)) {
            throw new Error("Invalid entity ID at position " + index + ": " + config.entity);
        }
        return config;
    });
};


/***/ }),

/***/ "./src/panels/lovelace/common/validate-condition.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/common/validate-condition.ts ***!
  \**********************************************************/
/*! exports provided: checkConditionsMet, validateConditionalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkConditionsMet", function() { return checkConditionsMet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateConditionalConfig", function() { return validateConditionalConfig; });
function checkConditionsMet(conditions, hass) {
    return conditions.every(function (c) {
        var state = hass.states[c.entity]
            ? hass.states[c.entity].state
            : "unavailable";
        return c.state ? state === c.state : state !== c.state_not;
    });
}
function validateConditionalConfig(conditions) {
    return conditions.every(function (c) { return (c.entity && (c.state || c.state_not)); });
}


/***/ }),

/***/ "./src/panels/lovelace/components/hui-entities-toggle.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-entities-toggle.ts ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_entity_turn_on_off_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/entity/turn-on-off-entities */ "./src/panels/lovelace/common/entity/turn-on-off-entities.ts");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/haptics */ "./src/data/haptics.ts");






var HuiEntitiesToggle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiEntitiesToggle, _super);
    function HuiEntitiesToggle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiEntitiesToggle.prototype.updated = function (changedProperties) {
        var _this = this;
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has("entities")) {
            this._toggleEntities = this.entities.filter(function (entityId) {
                return entityId in _this.hass.states &&
                    _common_const__WEBPACK_IMPORTED_MODULE_3__["DOMAINS_TOGGLE"].has(entityId.split(".", 1)[0]);
            });
        }
    };
    HuiEntitiesToggle.prototype.render = function () {
        var _this = this;
        if (!this._toggleEntities) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-switch\n        aria-label=\"Toggle entities.\"\n        ?checked=\"", "\"\n        @change=\"", "\"\n      ></ha-switch>\n    "], ["\n      <ha-switch\n        aria-label=\"Toggle entities.\"\n        ?checked=\"",
            "\"\n        @change=\"", "\"\n      ></ha-switch>\n    "])), this._toggleEntities.some(function (entityId) {
            var stateObj = _this.hass.states[entityId];
            return stateObj && stateObj.state === "on";
        }), this._callService);
    };
    Object.defineProperty(HuiEntitiesToggle, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        width: 38px;\n        display: block;\n      }\n      ha-switch {\n        padding: 13px 5px;\n        margin: -4px -5px;\n      }\n    "], ["\n      :host {\n        width: 38px;\n        display: block;\n      }\n      ha-switch {\n        padding: 13px 5px;\n        margin: -4px -5px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiEntitiesToggle.prototype._callService = function (ev) {
        Object(_data_haptics__WEBPACK_IMPORTED_MODULE_5__["forwardHaptic"])("light");
        var turnOn = ev.target.checked;
        Object(_common_entity_turn_on_off_entities__WEBPACK_IMPORTED_MODULE_4__["turnOnOffEntities"])(this.hass, this._toggleEntities, turnOn);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEntitiesToggle.prototype, "entities", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEntitiesToggle.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEntitiesToggle.prototype, "_toggleEntities", void 0);
    HuiEntitiesToggle = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-entities-toggle")
    ], HuiEntitiesToggle);
    return HuiEntitiesToggle;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/components/hui-generic-entity-row.ts":
/*!******************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-generic-entity-row.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/dom/toggle_attribute */ "./src/common/dom/toggle_attribute.ts");









var HuiGenericEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiGenericEntityRow, _super);
    function HuiGenericEntityRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showSecondary = true;
        return _this;
    }
    HuiGenericEntityRow.prototype.render = function () {
        if (!this.hass || !this.config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.config.entity
            ? this.hass.states[this.config.entity]
            : undefined;
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this.config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <state-badge\n        .hass=", "\n        .stateObj=", "\n        .overrideIcon=", "\n        .overrideImage=", "\n      ></state-badge>\n      <div class=\"flex\">\n        <div class=\"info\">\n          ", "\n          <div class=\"secondary\">\n            ", "\n          </div>\n        </div>\n\n        <slot></slot>\n      </div>\n    "], ["\n      <state-badge\n        .hass=", "\n        .stateObj=", "\n        .overrideIcon=", "\n        .overrideImage=", "\n      ></state-badge>\n      <div class=\"flex\">\n        <div class=\"info\">\n          ", "\n          <div class=\"secondary\">\n            ",
            "\n          </div>\n        </div>\n\n        <slot></slot>\n      </div>\n    "])), this.hass, stateObj, this.config.icon, this.config.image, this.config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(stateObj), !this.showSecondary
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <slot name=\"secondary\"></slot>\n                "], ["\n                  <slot name=\"secondary\"></slot>\n                "]))) : this.config.secondary_info === "entity-id"
            ? stateObj.entity_id
            : this.config.secondary_info === "last-changed"
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <ha-relative-time\n                    .hass=", "\n                    .datetime=", "\n                  ></ha-relative-time>\n                "], ["\n                  <ha-relative-time\n                    .hass=", "\n                    .datetime=", "\n                  ></ha-relative-time>\n                "])), this.hass, stateObj.last_changed) : "");
    };
    HuiGenericEntityRow.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("hass")) {
            Object(_common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_8__["toggleAttribute"])(this, "rtl", Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(this.hass));
        }
    };
    Object.defineProperty(HuiGenericEntityRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: flex;\n        align-items: center;\n      }\n      .flex {\n        flex: 1;\n        margin-left: 16px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        min-width: 0;\n      }\n      .info {\n        flex: 1 0 60px;\n      }\n      .info,\n      .info > * {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .flex ::slotted(*) {\n        margin-left: 8px;\n        min-width: 0;\n      }\n      .flex ::slotted([slot=\"secondary\"]) {\n        margin-left: 0;\n      }\n      .secondary,\n      ha-relative-time {\n        display: block;\n        color: var(--secondary-text-color);\n      }\n      state-badge {\n        flex: 0 0 40px;\n      }\n      :host([rtl]) .flex {\n        margin-left: 0;\n        margin-right: 16px;\n      }\n      :host([rtl]) .flex ::slotted(*) {\n        margin-left: 0;\n        margin-right: 8px;\n      }\n    "], ["\n      :host {\n        display: flex;\n        align-items: center;\n      }\n      .flex {\n        flex: 1;\n        margin-left: 16px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        min-width: 0;\n      }\n      .info {\n        flex: 1 0 60px;\n      }\n      .info,\n      .info > * {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .flex ::slotted(*) {\n        margin-left: 8px;\n        min-width: 0;\n      }\n      .flex ::slotted([slot=\"secondary\"]) {\n        margin-left: 0;\n      }\n      .secondary,\n      ha-relative-time {\n        display: block;\n        color: var(--secondary-text-color);\n      }\n      state-badge {\n        flex: 0 0 40px;\n      }\n      :host([rtl]) .flex {\n        margin-left: 0;\n        margin-right: 16px;\n      }\n      :host([rtl]) .flex ::slotted(*) {\n        margin-left: 0;\n        margin-right: 8px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
    ], HuiGenericEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
    ], HuiGenericEntityRow.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
    ], HuiGenericEntityRow.prototype, "showSecondary", void 0);
    return HuiGenericEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]));
customElements.define("hui-generic-entity-row", HuiGenericEntityRow);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/panels/lovelace/components/hui-image.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/components/hui-image.ts ***!
  \*****************************************************/
/*! exports provided: HuiImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiImage", function() { return HuiImage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/util/parse-aspect-ratio */ "./src/common/util/parse-aspect-ratio.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/camera */ "./src/data/camera.ts");







var UPDATE_INTERVAL = 10000;
var DEFAULT_FILTER = "grayscale(100%)";
var HuiImage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiImage, _super);
    function HuiImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiImage.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this._attached = true;
        if (this.cameraImage && this.cameraView !== "live") {
            this._startUpdateCameraInterval();
        }
    };
    HuiImage.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this._attached = false;
        this._stopUpdateCameraInterval();
    };
    HuiImage.prototype.render = function () {
        var ratio = this.aspectRatio ? Object(_common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_2__["default"])(this.aspectRatio) : null;
        var stateObj = this.hass && this.entity ? this.hass.states[this.entity] : undefined;
        var state = stateObj ? stateObj.state : "unavailable";
        // Figure out image source to use
        var imageSrc;
        var cameraObj;
        // Track if we are we using a fallback image, used for filter.
        var imageFallback = !this.stateImage;
        if (this.cameraImage) {
            if (this.cameraView === "live") {
                cameraObj =
                    this.hass && this.hass.states[this.cameraImage];
            }
            else {
                imageSrc = this._cameraImageSrc;
            }
        }
        else if (this.stateImage) {
            var stateImage = this.stateImage[state];
            if (stateImage) {
                imageSrc = stateImage;
            }
            else {
                imageSrc = this.image;
                imageFallback = true;
            }
        }
        else {
            imageSrc = this.image;
        }
        if (imageSrc) {
            imageSrc = this.hass.hassUrl(imageSrc);
        }
        // Figure out filter to use
        var filter = this.filter || "";
        if (this.stateFilter && this.stateFilter[state]) {
            filter = this.stateFilter[state];
        }
        if (!filter && this.entity) {
            var isOff = !stateObj || _common_const__WEBPACK_IMPORTED_MODULE_1__["STATES_OFF"].includes(state);
            filter = isOff && imageFallback ? DEFAULT_FILTER : "";
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div\n        style=", "\n        class=", "\n      >\n        ", "\n        <div\n          id=\"brokenImage\"\n          style=", "\n        ></div>\n      </div>\n    "], ["\n      <div\n        style=",
            "\n        class=",
            "\n      >\n        ",
            "\n        <div\n          id=\"brokenImage\"\n          style=",
            "\n        ></div>\n      </div>\n    "])), Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
            paddingBottom: ratio && ratio.w > 0 && ratio.h > 0
                ? ((100 * ratio.h) / ratio.w).toFixed(2) + "%"
                : "",
        }), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__["classMap"])({
            ratio: Boolean(ratio && ratio.w > 0 && ratio.h > 0),
        }), this.cameraImage && this.cameraView === "live"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-camera-stream\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-camera-stream>\n            "], ["\n              <ha-camera-stream\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-camera-stream>\n            "])), this.hass, cameraObj) : Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <img\n                id=\"image\"\n                src=", "\n                @error=", "\n                @load=", "\n                style=", "\n              />\n            "], ["\n              <img\n                id=\"image\"\n                src=", "\n                @error=", "\n                @load=", "\n                style=",
            "\n              />\n            "])), imageSrc, this._onImageError, this._onImageLoad, Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
            filter: filter,
            display: this._loadError ? "none" : "block",
        })), Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
            height: (this._lastImageHeight || "100") + "px",
            display: this._loadError ? "block" : "none",
        }));
    };
    HuiImage.prototype.updated = function (changedProps) {
        if (changedProps.has("cameraImage") && this.cameraView !== "live") {
            this._updateCameraImageSrc();
            this._startUpdateCameraInterval();
            return;
        }
    };
    HuiImage.prototype._startUpdateCameraInterval = function () {
        var _this = this;
        this._stopUpdateCameraInterval();
        if (this.cameraImage && this._attached) {
            this._cameraUpdater = window.setInterval(function () { return _this._updateCameraImageSrc(); }, UPDATE_INTERVAL);
        }
    };
    HuiImage.prototype._stopUpdateCameraInterval = function () {
        if (this._cameraUpdater) {
            clearInterval(this._cameraUpdater);
        }
    };
    HuiImage.prototype._onImageError = function () {
        this._loadError = true;
    };
    HuiImage.prototype._onImageLoad = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._loadError = false;
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this._lastImageHeight = this._image.offsetHeight;
                        return [2 /*return*/];
                }
            });
        });
    };
    HuiImage.prototype._updateCameraImageSrc = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var cameraState, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.hass || !this.cameraImage) {
                            return [2 /*return*/];
                        }
                        cameraState = this.hass.states[this.cameraImage];
                        if (!cameraState) {
                            this._onImageError();
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, Object(_data_camera__WEBPACK_IMPORTED_MODULE_6__["fetchThumbnailUrlWithCache"])(this.hass, this.cameraImage)];
                    case 1:
                        _a._cameraImageSrc = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HuiImage, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      img {\n        display: block;\n        height: auto;\n        transition: filter 0.2s linear;\n        width: 100%;\n      }\n\n      .ratio {\n        position: relative;\n        width: 100%;\n        height: 0;\n      }\n\n      .ratio img,\n      .ratio div {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      #brokenImage {\n        background: grey url(\"/static/images/image-broken.svg\") center/36px\n          no-repeat;\n      }\n    "], ["\n      img {\n        display: block;\n        height: auto;\n        transition: filter 0.2s linear;\n        width: 100%;\n      }\n\n      .ratio {\n        position: relative;\n        width: 100%;\n        height: 0;\n      }\n\n      .ratio img,\n      .ratio div {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      #brokenImage {\n        background: grey url(\"/static/images/image-broken.svg\") center/36px\n          no-repeat;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HuiImage.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HuiImage.prototype, "entity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HuiImage.prototype, "image", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HuiImage.prototype, "stateImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HuiImage.prototype, "cameraImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HuiImage.prototype, "cameraView", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HuiImage.prototype, "aspectRatio", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HuiImage.prototype, "filter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HuiImage.prototype, "stateFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HuiImage.prototype, "_loadError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HuiImage.prototype, "_cameraImageSrc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["query"])("img")
    ], HuiImage.prototype, "_image", void 0);
    HuiImage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("hui-image")
    ], HuiImage);
    return HuiImage;
}(lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/lovelace/components/hui-timestamp-display.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-timestamp-display.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
/* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts");






var FORMATS = {
    date: _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__["default"],
    datetime: _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_3__["default"],
    time: _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_4__["default"],
};
var INTERVAL_FORMAT = ["relative", "total"];
var HuiTimestampDisplay = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiTimestampDisplay, _super);
    function HuiTimestampDisplay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiTimestampDisplay.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this._connected = true;
        this._startInterval();
    };
    HuiTimestampDisplay.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this._connected = false;
        this._clearInterval();
    };
    HuiTimestampDisplay.prototype.render = function () {
        if (!this.ts || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        if (isNaN(this.ts.getTime())) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        Invalid date\n      "], ["\n        Invalid date\n      "])));
        }
        var format = this._format;
        if (INTERVAL_FORMAT.includes(format)) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        ", "\n      "], ["\n        ", "\n      "])), this._relative);
        }
        if (format in FORMATS) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        ", "\n      "], ["\n        ", "\n      "])), FORMATS[format](this.ts, this.hass.language));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      Invalid format\n    "], ["\n      Invalid format\n    "])));
    };
    HuiTimestampDisplay.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (!changedProperties.has("format") || !this._connected) {
            return;
        }
        if (INTERVAL_FORMAT.includes("relative")) {
            this._startInterval();
        }
        else {
            this._clearInterval();
        }
    };
    Object.defineProperty(HuiTimestampDisplay.prototype, "_format", {
        get: function () {
            return this.format || "relative";
        },
        enumerable: true,
        configurable: true
    });
    HuiTimestampDisplay.prototype._startInterval = function () {
        var _this = this;
        this._clearInterval();
        if (this._connected && INTERVAL_FORMAT.includes(this._format)) {
            this._updateRelative();
            this._interval = window.setInterval(function () { return _this._updateRelative(); }, 1000);
        }
    };
    HuiTimestampDisplay.prototype._clearInterval = function () {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = undefined;
        }
    };
    HuiTimestampDisplay.prototype._updateRelative = function () {
        if (this.ts && this.hass.localize) {
            this._relative =
                this._format === "relative"
                    ? Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_5__["default"])(this.ts, this.hass.localize)
                    : (this._relative = Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), this.hass.localize, {
                        compareTime: this.ts,
                        includeTense: false,
                    }));
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiTimestampDisplay.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiTimestampDisplay.prototype, "ts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiTimestampDisplay.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiTimestampDisplay.prototype, "_relative", void 0);
    HuiTimestampDisplay = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-timestamp-display")
    ], HuiTimestampDisplay);
    return HuiTimestampDisplay;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/panels/lovelace/components/hui-unavailable.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lovelace/components/hui-unavailable.ts ***!
  \***********************************************************/
/*! exports provided: HuiUnavailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiUnavailable", function() { return HuiUnavailable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


var HuiUnavailable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiUnavailable, _super);
    function HuiUnavailable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiUnavailable.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"disabled-overlay\">\n        <div>", "</div>\n      </div>\n    "], ["\n      <div class=\"disabled-overlay\">\n        <div>", "</div>\n      </div>\n    "])), this.text);
    };
    Object.defineProperty(HuiUnavailable, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .disabled-overlay {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: var(--state-icon-unavailable-color);\n        opacity: 0.5;\n        z-index: 50;\n      }\n\n      .disabled-overlay div {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        font-size: 24px;\n        color: var(--primary-text-color);\n        transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n      }\n    "], ["\n      .disabled-overlay {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: var(--state-icon-unavailable-color);\n        opacity: 0.5;\n        z-index: 50;\n      }\n\n      .disabled-overlay div {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        font-size: 24px;\n        color: var(--primary-text-color);\n        transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiUnavailable.prototype, "text", void 0);
    HuiUnavailable = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-unavailable")
    ], HuiUnavailable);
    return HuiUnavailable;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/panels/lovelace/components/hui-warning-element.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-warning-element.ts ***!
  \***************************************************************/
/*! exports provided: HuiWarningElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiWarningElement", function() { return HuiWarningElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");



var HuiWarningElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiWarningElement, _super);
    function HuiWarningElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiWarningElement.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-icon icon=\"hass:alert\" .title=\"", "\"></ha-icon>\n    "], ["\n      <ha-icon icon=\"hass:alert\" .title=\"", "\"></ha-icon>\n    "])), this.label);
    };
    Object.defineProperty(HuiWarningElement, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-icon {\n        color: #fce588;\n      }\n    "], ["\n      ha-icon {\n        color: #fce588;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiWarningElement.prototype, "label", void 0);
    HuiWarningElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-warning-element")
    ], HuiWarningElement);
    return HuiWarningElement;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/panels/lovelace/components/hui-warning.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/components/hui-warning.ts ***!
  \*******************************************************/
/*! exports provided: HuiWarning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiWarning", function() { return HuiWarning; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


var HuiWarning = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiWarning, _super);
    function HuiWarning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiWarning.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <slot></slot>\n    "], ["\n      <slot></slot>\n    "])));
    };
    Object.defineProperty(HuiWarning, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: block;\n        color: black;\n        background-color: #fce588;\n        padding: 8px;\n      }\n    "], ["\n      :host {\n        display: block;\n        color: black;\n        background-color: #fce588;\n        padding: 8px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiWarning = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-warning")
    ], HuiWarning);
    return HuiWarning;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts":
/*!*************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts ***!
  \*************************************************************************/
/*! exports provided: showEditCardDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEditCardDialog", function() { return showEditCardDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var registeredDialog = false;
var dialogShowEvent = "show-edit-card";
var dialogTag = "hui-dialog-edit-card";
var registerEditCardDialog = function (element) {
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
        dialogShowEvent: dialogShowEvent,
        dialogTag: dialogTag,
        dialogImport: function () {
            return Promise.all(/*! import() | hui-dialog-edit-card */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e(9), __webpack_require__.e("hui-dialog-edit-card")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-edit-card */ "./src/panels/lovelace/editor/card-editor/hui-dialog-edit-card.ts"));
        },
    });
};
var showEditCardDialog = function (element, editCardDialogParams) {
    if (!registeredDialog) {
        registeredDialog = true;
        registerEditCardDialog(element);
    }
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, dialogShowEvent, editCardDialogParams);
};


/***/ }),

/***/ "./src/panels/lovelace/editor/config-util.ts":
/*!***************************************************!*\
  !*** ./src/panels/lovelace/editor/config-util.ts ***!
  \***************************************************/
/*! exports provided: addCard, replaceCard, deleteCard, swapCard, moveCard, addView, replaceView, swapView, deleteView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return addCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceCard", function() { return replaceCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCard", function() { return deleteCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapCard", function() { return swapCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveCard", function() { return moveCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addView", function() { return addView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceView", function() { return replaceView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapView", function() { return swapView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteView", function() { return deleteView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var addCard = function (config, path, cardConfig) {
    var viewIndex = path[0];
    var views = [];
    config.views.forEach(function (viewConf, index) {
        if (index !== viewIndex) {
            views.push(config.views[index]);
            return;
        }
        var cards = viewConf.cards
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(viewConf.cards, [cardConfig]) : [cardConfig];
        views.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, viewConf), { cards: cards }));
    });
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config), { views: views });
};
var replaceCard = function (config, path, cardConfig) {
    var viewIndex = path[0], cardIndex = path[1];
    var views = [];
    config.views.forEach(function (viewConf, index) {
        if (index !== viewIndex) {
            views.push(config.views[index]);
            return;
        }
        views.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, viewConf), { cards: (viewConf.cards || []).map(function (origConf, ind) {
                return ind === cardIndex ? cardConfig : origConf;
            }) }));
    });
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config), { views: views });
};
var deleteCard = function (config, path) {
    var viewIndex = path[0], cardIndex = path[1];
    var views = [];
    config.views.forEach(function (viewConf, index) {
        if (index !== viewIndex) {
            views.push(config.views[index]);
            return;
        }
        views.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, viewConf), { cards: (viewConf.cards || []).filter(function (_origConf, ind) { return ind !== cardIndex; }) }));
    });
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config), { views: views });
};
var swapCard = function (config, path1, path2) {
    var card1 = config.views[path1[0]].cards[path1[1]];
    var card2 = config.views[path2[0]].cards[path2[1]];
    var origView1 = config.views[path1[0]];
    var newView1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, origView1), { cards: origView1.cards.map(function (origCard, index) {
            return index === path1[1] ? card2 : origCard;
        }) });
    var origView2 = path1[0] === path2[0] ? newView1 : config.views[path2[0]];
    var newView2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, origView2), { cards: origView2.cards.map(function (origCard, index) {
            return index === path2[1] ? card1 : origCard;
        }) });
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config), { views: config.views.map(function (origView, index) {
            return index === path2[0] ? newView2 : index === path1[0] ? newView1 : origView;
        }) });
};
var moveCard = function (config, fromPath, toPath) {
    if (fromPath[0] === toPath[0]) {
        throw new Error("You can not move a card to the view it is in.");
    }
    var fromView = config.views[fromPath[0]];
    var card = fromView.cards[fromPath[1]];
    var newView1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fromView), { cards: (fromView.cards || []).filter(function (_origConf, ind) { return ind !== fromPath[1]; }) });
    var toView = config.views[toPath[0]];
    var cards = toView.cards ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(toView.cards, [card]) : [card];
    var newView2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, toView), { cards: cards });
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config), { views: config.views.map(function (origView, index) {
            return index === toPath[0]
                ? newView2
                : index === fromPath[0]
                    ? newView1
                    : origView;
        }) });
};
var addView = function (config, viewConfig) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config), { views: config.views.concat(viewConfig) })); };
var replaceView = function (config, viewIndex, viewConfig) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config), { views: config.views.map(function (origView, index) {
        return index === viewIndex ? viewConfig : origView;
    }) })); };
var swapView = function (config, path1, path2) {
    var view1 = config.views[path1];
    var view2 = config.views[path2];
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config), { views: config.views.map(function (origView, index) {
            return index === path2 ? view1 : index === path1 ? view2 : origView;
        }) });
};
var deleteView = function (config, viewIndex) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config), { views: config.views.filter(function (_origView, index) { return index !== viewIndex; }) })); };


/***/ }),

/***/ "./src/panels/lovelace/editor/lovelace-editor/show-edit-lovelace-dialog.ts":
/*!*********************************************************************************!*\
  !*** ./src/panels/lovelace/editor/lovelace-editor/show-edit-lovelace-dialog.ts ***!
  \*********************************************************************************/
/*! exports provided: showEditLovelaceDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEditLovelaceDialog", function() { return showEditLovelaceDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var registeredDialog = false;
var dialogShowEvent = "show-edit-lovelace";
var dialogTag = "hui-dialog-edit-lovelace";
var registerEditLovelaceDialog = function (element) {
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
        dialogShowEvent: dialogShowEvent,
        dialogTag: dialogTag,
        dialogImport: function () {
            return Promise.all(/*! import() | hui-dialog-edit-lovelace */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("hui-dialog-edit-lovelace")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-edit-lovelace */ "./src/panels/lovelace/editor/lovelace-editor/hui-dialog-edit-lovelace.ts"));
        },
    });
};
var showEditLovelaceDialog = function (element, lovelace) {
    if (!registeredDialog) {
        registeredDialog = true;
        registerEditLovelaceDialog(element);
    }
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, dialogShowEvent, lovelace);
};


/***/ }),

/***/ "./src/panels/lovelace/editor/show-save-config-dialog.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/editor/show-save-config-dialog.ts ***!
  \***************************************************************/
/*! exports provided: showSaveDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSaveDialog", function() { return showSaveDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var dialogShowEvent = "show-save-config";
var dialogTag = "hui-dialog-save-config";
var registeredDialog = false;
var showSaveDialog = function (element, saveDialogParams) {
    if (!registeredDialog) {
        registeredDialog = true;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
            dialogShowEvent: dialogShowEvent,
            dialogTag: dialogTag,
            dialogImport: function () {
                return Promise.all(/*! import() | hui-dialog-save-config */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("hui-dialog-save-config")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-save-config */ "./src/panels/lovelace/editor/hui-dialog-save-config.ts"));
            },
        });
    }
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, dialogShowEvent, saveDialogParams);
};


/***/ }),

/***/ "./src/panels/lovelace/editor/view-editor/show-edit-view-dialog.ts":
/*!*************************************************************************!*\
  !*** ./src/panels/lovelace/editor/view-editor/show-edit-view-dialog.ts ***!
  \*************************************************************************/
/*! exports provided: showEditViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEditViewDialog", function() { return showEditViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var registeredDialog = false;
var dialogShowEvent = "show-edit-view";
var dialogTag = "hui-dialog-edit-view";
var registerEditViewDialog = function (element) {
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
        dialogShowEvent: dialogShowEvent,
        dialogTag: dialogTag,
        dialogImport: function () {
            return Promise.all(/*! import() | hui-dialog-edit-view */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~hui-dialog-edit-view"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-dialog-edit-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-edit-view */ "./src/panels/lovelace/editor/view-editor/hui-dialog-edit-view.ts"));
        },
    });
};
var showEditViewDialog = function (element, editViewDialogParams) {
    if (!registeredDialog) {
        registeredDialog = true;
        registerEditViewDialog(element);
    }
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, dialogShowEvent, editViewDialogParams);
};


/***/ }),

/***/ "./src/panels/lovelace/elements/hui-conditional-element.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-conditional-element.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lovelace_common_validate_condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lovelace/common/validate-condition */ "./src/panels/lovelace/common/validate-condition.ts");
/* harmony import */ var _cards_picture_elements_create_styled_hui_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards/picture-elements/create-styled-hui-element */ "./src/panels/lovelace/cards/picture-elements/create-styled-hui-element.ts");



var HuiConditionalElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiConditionalElement, _super);
    function HuiConditionalElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._elements = [];
        return _this;
    }
    HuiConditionalElement.prototype.setConfig = function (config) {
        var _this = this;
        if (!config.conditions ||
            !Array.isArray(config.conditions) ||
            !config.elements ||
            !Array.isArray(config.elements) ||
            !Object(_lovelace_common_validate_condition__WEBPACK_IMPORTED_MODULE_1__["validateConditionalConfig"])(config.conditions)) {
            throw new Error("Error in card configuration.");
        }
        if (this._elements.length > 0) {
            this._elements.map(function (el) {
                if (el.parentElement) {
                    el.parentElement.removeChild(el);
                }
            });
            this._elements = [];
        }
        this._config = config;
        this._config.elements.map(function (elementConfig) {
            _this._elements.push(Object(_cards_picture_elements_create_styled_hui_element__WEBPACK_IMPORTED_MODULE_2__["createStyledHuiElement"])(elementConfig));
        });
        this.updateElements();
    };
    Object.defineProperty(HuiConditionalElement.prototype, "hass", {
        set: function (hass) {
            this._hass = hass;
            this.updateElements();
        },
        enumerable: true,
        configurable: true
    });
    HuiConditionalElement.prototype.updateElements = function () {
        var _this = this;
        if (!this._hass || !this._config) {
            return;
        }
        var visible = Object(_lovelace_common_validate_condition__WEBPACK_IMPORTED_MODULE_1__["checkConditionsMet"])(this._config.conditions, this._hass);
        this._elements.map(function (el) {
            if (visible) {
                el.hass = _this._hass;
                if (!el.parentElement) {
                    _this.appendChild(el);
                }
            }
            else if (el.parentElement) {
                el.parentElement.removeChild(el);
            }
        });
    };
    return HuiConditionalElement;
}(HTMLElement));
customElements.define("hui-conditional-element", HuiConditionalElement);


/***/ }),

/***/ "./src/panels/lovelace/elements/hui-icon-element.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-icon-element.ts ***!
  \**********************************************************/
/*! exports provided: HuiIconElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiIconElement", function() { return HuiIconElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/compute-tooltip */ "./src/panels/lovelace/common/compute-tooltip.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");






var HuiIconElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiIconElement, _super);
    function HuiIconElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiIconElement.prototype.setConfig = function (config) {
        if (!config.icon) {
            throw Error("Invalid Configuration: 'icon' required");
        }
        this._config = config;
    };
    HuiIconElement.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-icon\n        .icon=\"", "\"\n        .title=\"", "\"\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n      ></ha-icon>\n    "], ["\n      <ha-icon\n        .icon=\"", "\"\n        .title=\"", "\"\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n      ></ha-icon>\n    "])), this._config.icon, Object(_common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__["computeTooltip"])(this.hass, this._config), this._handleTap, this._handleHold, Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_5__["longPress"])());
    };
    HuiIconElement.prototype._handleTap = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_4__["handleClick"])(this, this.hass, this._config, false);
    };
    HuiIconElement.prototype._handleHold = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_4__["handleClick"])(this, this.hass, this._config, true);
    };
    Object.defineProperty(HuiIconElement, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        cursor: pointer;\n      }\n    "], ["\n      :host {\n        cursor: pointer;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiIconElement.prototype, "_config", void 0);
    HuiIconElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-icon-element")
    ], HuiIconElement);
    return HuiIconElement;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/elements/hui-image-element.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-image-element.ts ***!
  \***********************************************************/
/*! exports provided: HuiImageElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiImageElement", function() { return HuiImageElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-image */ "./src/panels/lovelace/components/hui-image.ts");
/* harmony import */ var _common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/compute-tooltip */ "./src/panels/lovelace/common/compute-tooltip.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");






var HuiImageElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiImageElement, _super);
    function HuiImageElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiImageElement.prototype.setConfig = function (config) {
        if (!config) {
            throw Error("Error in element configuration");
        }
        this.classList.toggle("clickable", config.tap_action && config.tap_action.action !== "none");
        this._config = config;
    };
    HuiImageElement.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-image\n        .hass=\"", "\"\n        .entity=\"", "\"\n        .image=\"", "\"\n        .stateImage=\"", "\"\n        .cameraImage=\"", "\"\n        .filter=\"", "\"\n        .stateFilter=\"", "\"\n        .title=\"", "\"\n        .aspectRatio=\"", "\"\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n      ></hui-image>\n    "], ["\n      <hui-image\n        .hass=\"", "\"\n        .entity=\"", "\"\n        .image=\"", "\"\n        .stateImage=\"", "\"\n        .cameraImage=\"", "\"\n        .filter=\"", "\"\n        .stateFilter=\"", "\"\n        .title=\"", "\"\n        .aspectRatio=\"", "\"\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n      ></hui-image>\n    "])), this.hass, this._config.entity, this._config.image, this._config.state_image, this._config.camera_image, this._config.filter, this._config.state_filter, Object(_common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__["computeTooltip"])(this.hass, this._config), this._config.aspect_ratio, this._handleTap, this._handleHold, Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_5__["longPress"])());
    };
    Object.defineProperty(HuiImageElement, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host(.clickable) {\n        cursor: pointer;\n        overflow: hidden;\n        -webkit-touch-callout: none !important;\n      }\n      hui-image {\n        -webkit-user-select: none !important;\n      }\n    "], ["\n      :host(.clickable) {\n        cursor: pointer;\n        overflow: hidden;\n        -webkit-touch-callout: none !important;\n      }\n      hui-image {\n        -webkit-user-select: none !important;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiImageElement.prototype._handleTap = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_4__["handleClick"])(this, this.hass, this._config, false);
    };
    HuiImageElement.prototype._handleHold = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_4__["handleClick"])(this, this.hass, this._config, true);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiImageElement.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiImageElement.prototype, "_config", void 0);
    HuiImageElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-image-element")
    ], HuiImageElement);
    return HuiImageElement;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/elements/hui-service-button-element.ts":
/*!********************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-service-button-element.ts ***!
  \********************************************************************/
/*! exports provided: HuiServiceButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiServiceButtonElement", function() { return HuiServiceButtonElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");



var HuiServiceButtonElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiServiceButtonElement, _super);
    function HuiServiceButtonElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HuiServiceButtonElement, "properties", {
        get: function () {
            return { _config: {} };
        },
        enumerable: true,
        configurable: true
    });
    HuiServiceButtonElement.prototype.setConfig = function (config) {
        var _a;
        if (!config || !config.service) {
            throw Error("Invalid Configuration: 'service' required");
        }
        _a = config.service.split(".", 2), this._domain = _a[0], this._service = _a[1];
        if (!this._domain) {
            throw Error("Invalid Configuration: 'service' does not have a domain");
        }
        if (!this._service) {
            throw Error("Invalid Configuration: 'service' does not have a service name");
        }
        this._config = config;
    };
    HuiServiceButtonElement.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-call-service-button\n        .hass=\"", "\"\n        .domain=\"", "\"\n        .service=\"", "\"\n        .serviceData=\"", "\"\n        >", "</ha-call-service-button\n      >\n    "], ["\n      <ha-call-service-button\n        .hass=\"", "\"\n        .domain=\"", "\"\n        .service=\"", "\"\n        .serviceData=\"", "\"\n        >", "</ha-call-service-button\n      >\n    "])), this.hass, this._domain, this._service, this._config.service_data, this._config.title);
    };
    Object.defineProperty(HuiServiceButtonElement, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-call-service-button {\n        color: var(--primary-color);\n        white-space: nowrap;\n      }\n    "], ["\n      ha-call-service-button {\n        color: var(--primary-color);\n        white-space: nowrap;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiServiceButtonElement.prototype, "_config", void 0);
    HuiServiceButtonElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-service-button-element")
    ], HuiServiceButtonElement);
    return HuiServiceButtonElement;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/elements/hui-state-badge-element.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-state-badge-element.ts ***!
  \*****************************************************************/
/*! exports provided: HuiStateBadgeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiStateBadgeElement", function() { return HuiStateBadgeElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_entity_ha_state_label_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/entity/ha-state-label-badge */ "./src/components/entity/ha-state-label-badge.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");






var HuiStateBadgeElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiStateBadgeElement, _super);
    function HuiStateBadgeElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiStateBadgeElement.prototype.setConfig = function (config) {
        if (!config.entity) {
            throw Error("Invalid Configuration: 'entity' required");
        }
        this._config = config;
    };
    HuiStateBadgeElement.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiStateBadgeElement.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning-element\n          label=\"", "\"\n        ></hui-warning-element>\n      "], ["\n        <hui-warning-element\n          label=\"",
                "\"\n        ></hui-warning-element>\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-state-label-badge\n        .hass=\"", "\"\n        .state=\"", "\"\n        .title=\"", "\"\n      ></ha-state-label-badge>\n    "], ["\n      <ha-state-label-badge\n        .hass=\"", "\"\n        .state=\"", "\"\n        .title=\"",
            "\"\n      ></ha-state-label-badge>\n    "])), this.hass, stateObj, this._config.title === undefined
            ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj)
            : this._config.title === null
                ? ""
                : this._config.title);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiStateBadgeElement.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiStateBadgeElement.prototype, "_config", void 0);
    HuiStateBadgeElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-state-badge-element")
    ], HuiStateBadgeElement);
    return HuiStateBadgeElement;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/elements/hui-state-icon-element.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-state-icon-element.ts ***!
  \****************************************************************/
/*! exports provided: HuiStateIconElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiStateIconElement", function() { return HuiStateIconElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
/* harmony import */ var _common_compute_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/compute-tooltip */ "./src/panels/lovelace/common/compute-tooltip.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");








var HuiStateIconElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiStateIconElement, _super);
    function HuiStateIconElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiStateIconElement.prototype.setConfig = function (config) {
        if (!config.entity) {
            throw Error("Invalid Configuration: 'entity' required");
        }
        this._config = config;
    };
    HuiStateIconElement.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_7__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiStateIconElement.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning-element\n          label=", "\n        ></hui-warning-element>\n      "], ["\n        <hui-warning-element\n          label=",
                "\n        ></hui-warning-element>\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <state-badge\n        .stateObj=\"", "\"\n        .title=\"", "\"\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n        .overrideIcon=", "\n      ></state-badge>\n    "], ["\n      <state-badge\n        .stateObj=\"", "\"\n        .title=\"", "\"\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n        .overrideIcon=", "\n      ></state-badge>\n    "])), stateObj, Object(_common_compute_tooltip__WEBPACK_IMPORTED_MODULE_4__["computeTooltip"])(this.hass, this._config), this._handleClick, this._handleHold, Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_6__["longPress"])(), this._config.icon);
    };
    Object.defineProperty(HuiStateIconElement, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        cursor: pointer;\n      }\n    "], ["\n      :host {\n        cursor: pointer;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiStateIconElement.prototype._handleClick = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_5__["handleClick"])(this, this.hass, this._config, false);
    };
    HuiStateIconElement.prototype._handleHold = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_5__["handleClick"])(this, this.hass, this._config, true);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiStateIconElement.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiStateIconElement.prototype, "_config", void 0);
    HuiStateIconElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-state-icon-element")
    ], HuiStateIconElement);
    return HuiStateIconElement;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/lovelace/elements/hui-state-label-element.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-state-label-element.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_entity_ha_state_label_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/entity/ha-state-label-badge */ "./src/components/entity/ha-state-label-badge.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_compute_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/compute-tooltip */ "./src/panels/lovelace/common/compute-tooltip.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");









var HuiStateLabelElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiStateLabelElement, _super);
    function HuiStateLabelElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiStateLabelElement.prototype.setConfig = function (config) {
        if (!config.entity) {
            throw Error("Invalid Configuration: 'entity' required");
        }
        this._config = config;
    };
    HuiStateLabelElement.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_8__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiStateLabelElement.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning-element\n          label=", "\n        ></hui-warning-element>\n      "], ["\n        <hui-warning-element\n          label=",
                "\n        ></hui-warning-element>\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div\n        .title=\"", "\"\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n      >\n        ", "", "", "\n      </div>\n    "], ["\n      <div\n        .title=\"", "\"\n        @ha-click=\"", "\"\n        @ha-hold=\"", "\"\n        .longPress=\"", "\"\n      >\n        ", "",
            "", "\n      </div>\n    "])), Object(_common_compute_tooltip__WEBPACK_IMPORTED_MODULE_5__["computeTooltip"])(this.hass, this._config), this._handleTap, this._handleHold, Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_7__["longPress"])(), this._config.prefix, stateObj
            ? Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_4__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language)
            : "-", this._config.suffix);
    };
    HuiStateLabelElement.prototype._handleTap = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_6__["handleClick"])(this, this.hass, this._config, false);
    };
    HuiStateLabelElement.prototype._handleHold = function () {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_6__["handleClick"])(this, this.hass, this._config, true);
    };
    Object.defineProperty(HuiStateLabelElement, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        cursor: pointer;\n      }\n      div {\n        padding: 8px;\n        white-space: nowrap;\n      }\n    "], ["\n      :host {\n        cursor: pointer;\n      }\n      div {\n        padding: 8px;\n        white-space: nowrap;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiStateLabelElement.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiStateLabelElement.prototype, "_config", void 0);
    HuiStateLabelElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-state-label-element")
    ], HuiStateLabelElement);
    return HuiStateLabelElement;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-climate-entity-row.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-climate-entity-row.ts ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_climate_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-climate-state */ "./src/components/ha-climate-state.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");






var HuiClimateEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiClimateEntityRow, _super);
    function HuiClimateEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiClimateEntityRow.prototype.setConfig = function (config) {
        if (!config || !config.entity) {
            throw new Error("Invalid Configuration: 'entity' required");
        }
        this._config = config;
    };
    HuiClimateEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiClimateEntityRow.prototype.render = function () {
        if (!this.hass || !this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <ha-climate-state\n          .hass=\"", "\"\n          .stateObj=\"", "\"\n        ></ha-climate-state>\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <ha-climate-state\n          .hass=\"", "\"\n          .stateObj=\"", "\"\n        ></ha-climate-state>\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, this.hass, stateObj);
    };
    Object.defineProperty(HuiClimateEntityRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-climate-state {\n        text-align: right;\n      }\n    "], ["\n      ha-climate-state {\n        text-align: right;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiClimateEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiClimateEntityRow.prototype, "_config", void 0);
    HuiClimateEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-climate-entity-row")
    ], HuiClimateEntityRow);
    return HuiClimateEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-cover-entity-row.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-cover-entity-row.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_ha_cover_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-cover-controls */ "./src/components/ha-cover-controls.js");
/* harmony import */ var _components_ha_cover_tilt_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-cover-tilt-controls */ "./src/components/ha-cover-tilt-controls.js");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/cover-model */ "./src/util/cover-model.js");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");








var HuiCoverEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiCoverEntityRow, _super);
    function HuiCoverEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiCoverEntityRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    };
    HuiCoverEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_7__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiCoverEntityRow.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        ", "\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        ",
            "\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, Object(_util_cover_model__WEBPACK_IMPORTED_MODULE_6__["isTiltOnly"])(stateObj)
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-cover-tilt-controls\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-cover-tilt-controls>\n            "], ["\n              <ha-cover-tilt-controls\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-cover-tilt-controls>\n            "])), this.hass, stateObj) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-cover-controls\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-cover-controls>\n            "], ["\n              <ha-cover-controls\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-cover-controls>\n            "])), this.hass, stateObj));
    };
    Object.defineProperty(HuiCoverEntityRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-cover-controls,\n      ha-cover-tilt-controls {\n        margin-right: -0.57em;\n      }\n    "], ["\n      ha-cover-controls,\n      ha-cover-tilt-controls {\n        margin-right: -0.57em;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCoverEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCoverEntityRow.prototype, "_config", void 0);
    HuiCoverEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-cover-entity-row")
    ], HuiCoverEntityRow);
    return HuiCoverEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-group-entity-row.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-group-entity-row.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");








var HuiGroupEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiGroupEntityRow, _super);
    function HuiGroupEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiGroupEntityRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    };
    HuiGroupEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_7__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiGroupEntityRow.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        ", "\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        ",
            "\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, this._computeCanToggle(stateObj.attributes.entity_id)
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-entity-toggle\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-entity-toggle>\n            "], ["\n              <ha-entity-toggle\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-entity-toggle>\n            "])), this.hass, stateObj) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div>\n                ", "\n              </div>\n            "], ["\n              <div>\n                ",
            "\n              </div>\n            "])), Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_5__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language)));
    };
    HuiGroupEntityRow.prototype._computeCanToggle = function (entityIds) {
        return entityIds.some(function (entityId) {
            return _common_const__WEBPACK_IMPORTED_MODULE_6__["DOMAINS_TOGGLE"].has(entityId.split(".", 1)[0]);
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiGroupEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiGroupEntityRow.prototype, "_config", void 0);
    HuiGroupEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-group-entity-row")
    ], HuiGroupEntityRow);
    return HuiGroupEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-input-datetime-entity-row.ts":
/*!**************************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-input-datetime-entity-row.ts ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_paper_time_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/paper-time-input.js */ "./src/components/paper-time-input.js");
/* harmony import */ var _components_ha_date_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-date-input */ "./src/components/ha-date-input.ts");
/* harmony import */ var _data_input_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/input_datetime */ "./src/data/input_datetime.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");







var HuiInputDatetimeEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiInputDatetimeEntityRow, _super);
    function HuiInputDatetimeEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiInputDatetimeEntityRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    };
    HuiInputDatetimeEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_6__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiInputDatetimeEntityRow.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        ", "\n        ", "\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        ",
            "\n        ",
            "\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, stateObj.attributes.has_date
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-date-input\n                .year=", "\n                .month=", "\n                .day=", "\n                @change=", "\n                @click=", "\n              ></ha-date-input>\n              ", "\n            "], ["\n              <ha-date-input\n                .year=", "\n                .month=", "\n                .day=", "\n                @change=", "\n                @click=", "\n              ></ha-date-input>\n              ", "\n            "])), stateObj.attributes.year, ("0" + stateObj.attributes.month).slice(-2), ("0" + stateObj.attributes.day).slice(-2), this._selectedValueChanged, this._stopEventPropagation, stateObj.attributes.has_time ? "," : "") : "", stateObj.attributes.has_time
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-time-input\n                .hour=", "\n                .min=", "\n                .amPm=", "\n                @change=", "\n                @click=", "\n                hide-label\n                format=\"24\"\n              ></paper-time-input>\n            "], ["\n              <paper-time-input\n                .hour=",
                "\n                .min=",
                "\n                .amPm=", "\n                @change=", "\n                @click=", "\n                hide-label\n                format=\"24\"\n              ></paper-time-input>\n            "])), stateObj.state === "unknown"
                ? ""
                : ("0" + stateObj.attributes.hour).slice(-2), stateObj.state === "unknown"
                ? ""
                : ("0" + stateObj.attributes.minute).slice(-2), false, this._selectedValueChanged, this._stopEventPropagation) : "");
    };
    HuiInputDatetimeEntityRow.prototype._stopEventPropagation = function (ev) {
        ev.stopPropagation();
    };
    Object.defineProperty(HuiInputDatetimeEntityRow.prototype, "_timeInputEl", {
        get: function () {
            return this.shadowRoot.querySelector("paper-time-input");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiInputDatetimeEntityRow.prototype, "_dateInputEl", {
        get: function () {
            return this.shadowRoot.querySelector("ha-date-input");
        },
        enumerable: true,
        configurable: true
    });
    HuiInputDatetimeEntityRow.prototype._selectedValueChanged = function (ev) {
        var stateObj = this.hass.states[this._config.entity];
        var time = this._timeInputEl !== null
            ? this._timeInputEl.value.trim() + ":00"
            : undefined;
        var date = this._dateInputEl !== null ? this._dateInputEl.value : undefined;
        if (time !== stateObj.state) {
            Object(_data_input_datetime__WEBPACK_IMPORTED_MODULE_5__["setInputDateTimeValue"])(this.hass, stateObj.entity_id, time, date);
        }
        ev.target.blur();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiInputDatetimeEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiInputDatetimeEntityRow.prototype, "_config", void 0);
    HuiInputDatetimeEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-input-datetime-entity-row")
    ], HuiInputDatetimeEntityRow);
    return HuiInputDatetimeEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-input-number-entity-row.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-input-number-entity-row.ts ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_ha_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-slider */ "./src/components/ha-slider.js");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _data_input_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/input_text */ "./src/data/input_text.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");








var HuiInputNumberEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiInputNumberEntityRow, _super);
    function HuiInputNumberEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiInputNumberEntityRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    };
    HuiInputNumberEntityRow.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (this._updated && !this._loaded) {
            this._initialLoad();
        }
    };
    HuiInputNumberEntityRow.prototype.firstUpdated = function () {
        this._updated = true;
        if (this.isConnected && !this._loaded) {
            this._initialLoad();
        }
    };
    HuiInputNumberEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_7__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiInputNumberEntityRow.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <div>\n          ", "\n        </div>\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <div>\n          ",
            "\n        </div>\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, stateObj.attributes.mode === "slider"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"flex\">\n                  <ha-slider\n                    .dir=\"", "\"\n                    .step=\"", "\"\n                    .min=\"", "\"\n                    .max=\"", "\"\n                    .value=\"", "\"\n                    pin\n                    @change=\"", "\"\n                    ignore-bar-touch\n                    id=\"input\"\n                  ></ha-slider>\n                  <span class=\"state\">\n                    ", "\n                    ", "\n                  </span>\n                </div>\n              "], ["\n                <div class=\"flex\">\n                  <ha-slider\n                    .dir=\"", "\"\n                    .step=\"", "\"\n                    .min=\"", "\"\n                    .max=\"", "\"\n                    .value=\"", "\"\n                    pin\n                    @change=\"", "\"\n                    ignore-bar-touch\n                    id=\"input\"\n                  ></ha-slider>\n                  <span class=\"state\">\n                    ", "\n                    ", "\n                  </span>\n                </div>\n              "])), Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__["computeRTLDirection"])(this.hass), Number(stateObj.attributes.step), Number(stateObj.attributes.min), Number(stateObj.attributes.max), Number(stateObj.state), this._selectedValueChanged, Number(stateObj.state), stateObj.attributes.unit_of_measurement) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <paper-input\n                  no-label-float\n                  auto-validate\n                  .pattern=\"[0-9]+([\\.][0-9]+)?\"\n                  .step=\"", "\"\n                  .min=\"", "\"\n                  .max=\"", "\"\n                  .value=\"", "\"\n                  type=\"number\"\n                  @change=\"", "\"\n                  id=\"input\"\n                ></paper-input>\n              "], ["\n                <paper-input\n                  no-label-float\n                  auto-validate\n                  .pattern=\"[0-9]+([\\\\.][0-9]+)?\"\n                  .step=\"", "\"\n                  .min=\"", "\"\n                  .max=\"", "\"\n                  .value=\"", "\"\n                  type=\"number\"\n                  @change=\"", "\"\n                  id=\"input\"\n                ></paper-input>\n              "])), Number(stateObj.attributes.step), Number(stateObj.attributes.min), Number(stateObj.attributes.max), Number(stateObj.state), this._selectedValueChanged));
    };
    Object.defineProperty(HuiInputNumberEntityRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .flex {\n        display: flex;\n        align-items: center;\n      }\n      .state {\n        min-width: 45px;\n        text-align: end;\n      }\n      paper-input {\n        text-align: end;\n      }\n    "], ["\n      .flex {\n        display: flex;\n        align-items: center;\n      }\n      .state {\n        min-width: 45px;\n        text-align: end;\n      }\n      paper-input {\n        text-align: end;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiInputNumberEntityRow.prototype._initialLoad = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var element;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._loaded = true;
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        element = this.shadowRoot.querySelector(".state");
                        if (!element || !this.parentElement) {
                            return [2 /*return*/];
                        }
                        element.hidden = this.parentElement.clientWidth <= 350;
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HuiInputNumberEntityRow.prototype, "_inputElement", {
        get: function () {
            // linter recommended the following syntax
            return this.shadowRoot.getElementById("input");
        },
        enumerable: true,
        configurable: true
    });
    HuiInputNumberEntityRow.prototype._selectedValueChanged = function () {
        var element = this._inputElement;
        var stateObj = this.hass.states[this._config.entity];
        if (element.value !== stateObj.state) {
            Object(_data_input_text__WEBPACK_IMPORTED_MODULE_6__["setValue"])(this.hass, stateObj.entity_id, element.value);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiInputNumberEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiInputNumberEntityRow.prototype, "_config", void 0);
    HuiInputNumberEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-input-number-entity-row")
    ], HuiInputNumberEntityRow);
    return HuiInputNumberEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-input-select-entity-row.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-input-select-entity-row.ts ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _data_input_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/input-select */ "./src/data/input-select.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/haptics */ "./src/data/haptics.ts");
/* harmony import */ var _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/dom/stop_propagation */ "./src/common/dom/stop_propagation.ts");












var HuiInputSelectEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiInputSelectEntityRow, _super);
    function HuiInputSelectEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiInputSelectEntityRow.prototype.setConfig = function (config) {
        if (!config || !config.entity) {
            throw new Error("Invalid Configuration: 'entity' required");
        }
        this._config = config;
    };
    HuiInputSelectEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_9__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiInputSelectEntityRow.prototype.render = function () {
        if (!this.hass || !this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <state-badge .stateObj=\"", "\"></state-badge>\n      <ha-paper-dropdown-menu\n        .label=", "\n        .value=", "\n        @iron-select=", "\n        @click=", "\n      >\n        <paper-listbox slot=\"dropdown-content\">\n          ", "\n        </paper-listbox>\n      </ha-paper-dropdown-menu>\n    "], ["\n      <state-badge .stateObj=\"", "\"></state-badge>\n      <ha-paper-dropdown-menu\n        .label=", "\n        .value=", "\n        @iron-select=", "\n        @click=", "\n      >\n        <paper-listbox slot=\"dropdown-content\">\n          ",
            "\n        </paper-listbox>\n      </ha-paper-dropdown-menu>\n    "])), stateObj, this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(stateObj), stateObj.state, this._selectedChanged, _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_11__["stopPropagation"], stateObj.attributes.options.map(function (option) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-item>", "</paper-item>\n            "], ["\n              <paper-item>", "</paper-item>\n            "])), option); }));
    };
    HuiInputSelectEntityRow.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (!this.hass || !this._config) {
            return;
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return;
        }
        // Update selected after rendering the items or else it won't work in Firefox
        this.shadowRoot.querySelector("paper-listbox").selected = stateObj.attributes.options.indexOf(stateObj.state);
    };
    Object.defineProperty(HuiInputSelectEntityRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: flex;\n        align-items: center;\n      }\n      ha-paper-dropdown-menu {\n        margin-left: 16px;\n        flex: 1;\n      }\n\n      paper-item {\n        cursor: pointer;\n        min-width: 200px;\n      }\n    "], ["\n      :host {\n        display: flex;\n        align-items: center;\n      }\n      ha-paper-dropdown-menu {\n        margin-left: 16px;\n        flex: 1;\n      }\n\n      paper-item {\n        cursor: pointer;\n        min-width: 200px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiInputSelectEntityRow.prototype._selectedChanged = function (ev) {
        var stateObj = this.hass.states[this._config.entity];
        var option = ev.target.selectedItem.innerText.trim();
        if (option === stateObj.state) {
            return;
        }
        Object(_data_haptics__WEBPACK_IMPORTED_MODULE_10__["forwardHaptic"])("light");
        Object(_data_input_select__WEBPACK_IMPORTED_MODULE_8__["setInputSelectOption"])(this.hass, stateObj.entity_id, option);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiInputSelectEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiInputSelectEntityRow.prototype, "_config", void 0);
    HuiInputSelectEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-input-select-entity-row")
    ], HuiInputSelectEntityRow);
    return HuiInputSelectEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-input-text-entity-row.ts":
/*!**********************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-input-text-entity-row.ts ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _data_input_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/input_text */ "./src/data/input_text.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");






var HuiInputTextEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiInputTextEntityRow, _super);
    function HuiInputTextEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiInputTextEntityRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    };
    HuiInputTextEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiInputTextEntityRow.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <paper-input\n          no-label-float\n          .value=\"", "\"\n          .minlength=\"", "\"\n          .maxlength=\"", "\"\n          .autoValidate=\"", "\"\n          .pattern=\"", "\"\n          .type=\"", "\"\n          @change=\"", "\"\n          placeholder=\"(empty value)\"\n        ></paper-input>\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <paper-input\n          no-label-float\n          .value=\"", "\"\n          .minlength=\"", "\"\n          .maxlength=\"", "\"\n          .autoValidate=\"", "\"\n          .pattern=\"", "\"\n          .type=\"", "\"\n          @change=\"", "\"\n          placeholder=\"(empty value)\"\n        ></paper-input>\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, stateObj.state, stateObj.attributes.min, stateObj.attributes.max, stateObj.attributes.pattern, stateObj.attributes.pattern, stateObj.attributes.mode, this._selectedValueChanged);
    };
    Object.defineProperty(HuiInputTextEntityRow.prototype, "_inputEl", {
        get: function () {
            return this.shadowRoot.querySelector("paper-input");
        },
        enumerable: true,
        configurable: true
    });
    HuiInputTextEntityRow.prototype._selectedValueChanged = function (ev) {
        var element = this._inputEl;
        var stateObj = this.hass.states[this._config.entity];
        if (element.value !== stateObj.state) {
            Object(_data_input_text__WEBPACK_IMPORTED_MODULE_4__["setValue"])(this.hass, stateObj.entity_id, element.value);
        }
        ev.target.blur();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiInputTextEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiInputTextEntityRow.prototype, "_config", void 0);
    HuiInputTextEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-input-text-entity-row")
    ], HuiInputTextEntityRow);
    return HuiInputTextEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-lock-entity-row.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-lock-entity-row.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");





var HuiLockEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiLockEntityRow, _super);
    function HuiLockEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiLockEntityRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    };
    HuiLockEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_4__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiLockEntityRow.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <mwc-button @click=\"", "\">\n          ", "\n        </mwc-button>\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <mwc-button @click=\"", "\">\n          ",
            "\n        </mwc-button>\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, this._callService, stateObj.state === "locked"
            ? this.hass.localize("ui.card.lock.unlock")
            : this.hass.localize("ui.card.lock.lock"));
    };
    Object.defineProperty(HuiLockEntityRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      mwc-button {\n        margin-right: -0.57em;\n      }\n    "], ["\n      mwc-button {\n        margin-right: -0.57em;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiLockEntityRow.prototype._callService = function (ev) {
        ev.stopPropagation();
        var stateObj = this.hass.states[this._config.entity];
        this.hass.callService("lock", stateObj.state === "locked" ? "unlock" : "lock", { entity_id: stateObj.entity_id });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiLockEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiLockEntityRow.prototype, "_config", void 0);
    HuiLockEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-lock-entity-row")
    ], HuiLockEntityRow);
    return HuiLockEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-media-player-entity-row.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-media-player-entity-row.ts ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _data_media_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/media-player */ "./src/data/media-player.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");








var HuiMediaPlayerEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiMediaPlayerEntityRow, _super);
    function HuiMediaPlayerEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiMediaPlayerEntityRow.prototype.setConfig = function (config) {
        if (!config || !config.entity) {
            throw new Error("Invalid Configuration: 'entity' required");
        }
        this._config = config;
    };
    HuiMediaPlayerEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_7__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiMediaPlayerEntityRow.prototype.render = function () {
        if (!this.hass || !this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row\n        .hass=\"", "\"\n        .config=\"", "\"\n        .showSecondary=", "\n      >\n        ", "\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row\n        .hass=\"", "\"\n        .config=\"", "\"\n        .showSecondary=", "\n      >\n        ",
            "\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, false, _data_media_player__WEBPACK_IMPORTED_MODULE_6__["OFF_STATES"].includes(stateObj.state)
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div>\n                ", "\n              </div>\n            "], ["\n              <div>\n                ",
                "\n              </div>\n            "])), this.hass.localize("state.media_player." + stateObj.state) ||
                this.hass.localize("state.default." + stateObj.state) ||
                stateObj.state) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"controls\">\n                ", "\n                ", "\n              </div>\n              <div slot=\"secondary\">", "</div>\n            "], ["\n              <div class=\"controls\">\n                ",
            "\n                ",
            "\n              </div>\n              <div slot=\"secondary\">", "</div>\n            "])), stateObj.state !== "playing" &&
            !Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_6__["SUPPORTS_PLAY"])
            ? ""
            : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <paper-icon-button\n                        icon=\"", "\"\n                        @click=\"", "\"\n                      ></paper-icon-button>\n                    "], ["\n                      <paper-icon-button\n                        icon=\"", "\"\n                        @click=\"", "\"\n                      ></paper-icon-button>\n                    "])), this._computeControlIcon(stateObj), this._playPause), Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_6__["SUPPORT_NEXT_TRACK"])
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <paper-icon-button\n                        icon=\"hass:skip-next\"\n                        @click=\"", "\"\n                      ></paper-icon-button>\n                    "], ["\n                      <paper-icon-button\n                        icon=\"hass:skip-next\"\n                        @click=\"", "\"\n                      ></paper-icon-button>\n                    "])), this._nextTrack) : "", this._computeMediaTitle(stateObj)));
    };
    Object.defineProperty(HuiMediaPlayerEntityRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .controls {\n        white-space: nowrap;\n      }\n    "], ["\n      .controls {\n        white-space: nowrap;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiMediaPlayerEntityRow.prototype._computeControlIcon = function (stateObj) {
        if (stateObj.state !== "playing") {
            return "hass:play";
        }
        // tslint:disable-next-line:no-bitwise
        return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_6__["SUPPORT_PAUSE"])
            ? "hass:pause"
            : "hass:stop";
    };
    HuiMediaPlayerEntityRow.prototype._computeMediaTitle = function (stateObj) {
        var prefix;
        var suffix;
        switch (stateObj.attributes.media_content_type) {
            case "music":
                prefix = stateObj.attributes.media_artist;
                suffix = stateObj.attributes.media_title;
                break;
            case "tvshow":
                prefix = stateObj.attributes.media_series_title;
                suffix = stateObj.attributes.media_title;
                break;
            default:
                prefix =
                    stateObj.attributes.media_title ||
                        stateObj.attributes.app_name ||
                        stateObj.state;
                suffix = "";
        }
        return prefix && suffix ? prefix + ": " + suffix : prefix || suffix || "";
    };
    HuiMediaPlayerEntityRow.prototype._playPause = function (ev) {
        ev.stopPropagation();
        this.hass.callService("media_player", "media_play_pause", {
            entity_id: this._config.entity,
        });
    };
    HuiMediaPlayerEntityRow.prototype._nextTrack = function (ev) {
        ev.stopPropagation();
        this.hass.callService("media_player", "media_next_track", {
            entity_id: this._config.entity,
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiMediaPlayerEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiMediaPlayerEntityRow.prototype, "_config", void 0);
    HuiMediaPlayerEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-media-player-entity-row")
    ], HuiMediaPlayerEntityRow);
    return HuiMediaPlayerEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-scene-entity-row.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-scene-entity-row.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");






var HuiSceneEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiSceneEntityRow, _super);
    function HuiSceneEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiSceneEntityRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    };
    HuiSceneEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiSceneEntityRow.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        ", "\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        ",
            "\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, stateObj.attributes.can_cancel
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-entity-toggle\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-entity-toggle>\n            "], ["\n              <ha-entity-toggle\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-entity-toggle>\n            "])), this.hass, stateObj) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <mwc-button @click=\"", "\">\n                ", "\n              </mwc-button>\n            "], ["\n              <mwc-button @click=\"", "\">\n                ", "\n              </mwc-button>\n            "])), this._callService, this.hass.localize("ui.card.scene.activate")));
    };
    Object.defineProperty(HuiSceneEntityRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      mwc-button {\n        margin-right: -0.57em;\n      }\n    "], ["\n      mwc-button {\n        margin-right: -0.57em;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiSceneEntityRow.prototype._callService = function (ev) {
        ev.stopPropagation();
        this.hass.callService("scene", "turn_on", {
            entity_id: this._config.entity,
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiSceneEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiSceneEntityRow.prototype, "_config", void 0);
    HuiSceneEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-scene-entity-row")
    ], HuiSceneEntityRow);
    return HuiSceneEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-script-entity-row.ts":
/*!******************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-script-entity-row.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");






var HuiScriptEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiScriptEntityRow, _super);
    function HuiScriptEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiScriptEntityRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    };
    HuiScriptEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiScriptEntityRow.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        ", "\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        ",
            "\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, stateObj.attributes.can_cancel
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-entity-toggle\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-entity-toggle>\n            "], ["\n              <ha-entity-toggle\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-entity-toggle>\n            "])), this.hass, stateObj) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <mwc-button @click=\"", "\">\n                ", "\n              </mwc-button>\n            "], ["\n              <mwc-button @click=\"", "\">\n                ", "\n              </mwc-button>\n            "])), this._callService, this.hass.localize("ui.card.script.execute")));
    };
    Object.defineProperty(HuiScriptEntityRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      mwc-button {\n        margin-right: -0.57em;\n      }\n    "], ["\n      mwc-button {\n        margin-right: -0.57em;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiScriptEntityRow.prototype._callService = function (ev) {
        ev.stopPropagation();
        this.hass.callService("script", "turn_on", {
            entity_id: this._config.entity,
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiScriptEntityRow.prototype, "_config", void 0);
    HuiScriptEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-script-entity-row")
    ], HuiScriptEntityRow);
    return HuiScriptEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-sensor-entity-row.ts":
/*!******************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-sensor-entity-row.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_timestamp_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-timestamp-display */ "./src/panels/lovelace/components/hui-timestamp-display.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");







var HuiSensorEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiSensorEntityRow, _super);
    function HuiSensorEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiSensorEntityRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    };
    HuiSensorEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiSensorEntityRow.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <div>\n          ", "\n        </div>\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <div>\n          ",
            "\n        </div>\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, stateObj.attributes.device_class === "timestamp" &&
            stateObj.state !== "unavailable"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <hui-timestamp-display\n                  .hass=\"", "\"\n                  .ts=\"", "\"\n                  .format=\"", "\"\n                ></hui-timestamp-display>\n              "], ["\n                <hui-timestamp-display\n                  .hass=\"", "\"\n                  .ts=\"", "\"\n                  .format=\"", "\"\n                ></hui-timestamp-display>\n              "])), this.hass, new Date(stateObj.state), this._config.format) : Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_6__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language));
    };
    Object.defineProperty(HuiSensorEntityRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      div {\n        text-align: right;\n      }\n    "], ["\n      div {\n        text-align: right;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiSensorEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiSensorEntityRow.prototype, "_config", void 0);
    HuiSensorEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-sensor-entity-row")
    ], HuiSensorEntityRow);
    return HuiSensorEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-text-entity-row.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-text-entity-row.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");






var HuiTextEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiTextEntityRow, _super);
    function HuiTextEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiTextEntityRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    };
    HuiTextEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiTextEntityRow.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <div>\n          ", "\n        </div>\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <div>\n          ",
            "\n        </div>\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_4__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language));
    };
    Object.defineProperty(HuiTextEntityRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      div {\n        text-align: right;\n      }\n    "], ["\n      div {\n        text-align: right;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiTextEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiTextEntityRow.prototype, "_config", void 0);
    HuiTextEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-text-entity-row")
    ], HuiTextEntityRow);
    return HuiTextEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-timer-entity-row.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-timer-entity-row.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/timer_time_remaining */ "./src/common/entity/timer_time_remaining.ts");
/* harmony import */ var _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/datetime/seconds_to_duration */ "./src/common/datetime/seconds_to_duration.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");







var HuiTimerEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiTimerEntityRow, _super);
    function HuiTimerEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiTimerEntityRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    };
    HuiTimerEntityRow.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this._clearInterval();
    };
    HuiTimerEntityRow.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (this._config && this._config.entity) {
            var stateObj = this.hass.states[this._config.entity];
            if (stateObj) {
                this._startInterval(stateObj);
            }
        }
    };
    HuiTimerEntityRow.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <div>", "</div>\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        <div>", "</div>\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, this._computeDisplay(stateObj));
    };
    HuiTimerEntityRow.prototype.shouldUpdate = function (changedProps) {
        if (changedProps.has("_timeRemaining")) {
            return true;
        }
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_6__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiTimerEntityRow.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("hass")) {
            var stateObj = this.hass.states[this._config.entity];
            var oldHass = changedProps.get("hass");
            var oldStateObj = oldHass
                ? oldHass.states[this._config.entity]
                : undefined;
            if (oldStateObj !== stateObj) {
                this._startInterval(stateObj);
            }
            else if (!stateObj) {
                this._clearInterval();
            }
        }
    };
    HuiTimerEntityRow.prototype._clearInterval = function () {
        if (this._interval) {
            window.clearInterval(this._interval);
            this._interval = undefined;
        }
    };
    HuiTimerEntityRow.prototype._startInterval = function (stateObj) {
        var _this = this;
        this._clearInterval();
        this._calculateRemaining(stateObj);
        if (stateObj.state === "active") {
            this._interval = window.setInterval(function () { return _this._calculateRemaining(stateObj); }, 1000);
        }
    };
    HuiTimerEntityRow.prototype._calculateRemaining = function (stateObj) {
        this._timeRemaining = Object(_common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_4__["timerTimeRemaining"])(stateObj);
    };
    HuiTimerEntityRow.prototype._computeDisplay = function (stateObj) {
        if (!stateObj) {
            return null;
        }
        if (stateObj.state === "idle" || this._timeRemaining === 0) {
            return this.hass.localize("state.timer." + stateObj.state);
        }
        var display = Object(_common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_5__["default"])(this._timeRemaining || 0);
        if (stateObj.state === "paused") {
            display += " (" + this.hass.localize("state.timer.paused") + ")";
        }
        return display;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiTimerEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiTimerEntityRow.prototype, "_config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiTimerEntityRow.prototype, "_timeRemaining", void 0);
    HuiTimerEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-timer-entity-row")
    ], HuiTimerEntityRow);
    return HuiTimerEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-toggle-entity-row.ts":
/*!******************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-toggle-entity-row.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");







var HuiToggleEntityRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiToggleEntityRow, _super);
    function HuiToggleEntityRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiToggleEntityRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    };
    HuiToggleEntityRow.prototype.shouldUpdate = function (changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_6__["hasConfigOrEntityChanged"])(this, changedProps);
    };
    HuiToggleEntityRow.prototype.render = function () {
        if (!this._config || !this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-warning\n          >", "</hui-warning\n        >\n      "], ["\n        <hui-warning\n          >",
                "</hui-warning\n        >\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        ", "\n      </hui-generic-entity-row>\n    "], ["\n      <hui-generic-entity-row .hass=\"", "\" .config=\"", "\">\n        ",
            "\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, stateObj.state === "on" || stateObj.state === "off"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-entity-toggle\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-entity-toggle>\n            "], ["\n              <ha-entity-toggle\n                .hass=\"", "\"\n                .stateObj=\"", "\"\n              ></ha-entity-toggle>\n            "])), this.hass, stateObj) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div>\n                ", "\n              </div>\n            "], ["\n              <div>\n                ",
            "\n              </div>\n            "])), Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_5__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language)));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiToggleEntityRow.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiToggleEntityRow.prototype, "_config", void 0);
    HuiToggleEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-toggle-entity-row")
    ], HuiToggleEntityRow);
    return HuiToggleEntityRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/panels/lovelace/ha-panel-lovelace.ts":
/*!**************************************************!*\
  !*** ./src/panels/lovelace/ha-panel-lovelace.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _data_lovelace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/lovelace */ "./src/data/lovelace.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _layouts_hass_error_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/hass-error-screen */ "./src/layouts/hass-error-screen.ts");
/* harmony import */ var _hui_root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hui-root */ "./src/panels/lovelace/hui-root.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _editor_show_save_config_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor/show-save-config-dialog */ "./src/panels/lovelace/editor/show-save-config-dialog.ts");
/* harmony import */ var _common_generate_lovelace_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/generate-lovelace-config */ "./src/panels/lovelace/common/generate-lovelace-config.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util/toast */ "./src/util/toast.ts");










var editorLoaded = false;
var LovelacePanel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LovelacePanel, _super);
    function LovelacePanel() {
        var _this = _super.call(this) || this;
        _this._state = "loading";
        _this._ignoreNextUpdateEvent = false;
        _this._closeEditor = _this._closeEditor.bind(_this);
        return _this;
    }
    LovelacePanel.prototype.render = function () {
        var state = this._state;
        if (state === "loaded") {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-root\n          .hass=\"", "\"\n          .lovelace=\"", "\"\n          .route=\"", "\"\n          .columns=\"", "\"\n          .narrow=", "\n          @config-refresh=\"", "\"\n        ></hui-root>\n      "], ["\n        <hui-root\n          .hass=\"", "\"\n          .lovelace=\"", "\"\n          .route=\"", "\"\n          .columns=\"", "\"\n          .narrow=", "\n          @config-refresh=\"", "\"\n        ></hui-root>\n      "])), this.hass, this.lovelace, this.route, this._columns, this.narrow, this._forceFetchConfig);
        }
        if (state === "error") {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hass-error-screen title=\"Lovelace\" .error=\"", "\">\n          <mwc-button on-click=\"_forceFetchConfig\"\n            >", "</mwc-button\n          >\n        </hass-error-screen>\n      "], ["\n        <hass-error-screen title=\"Lovelace\" .error=\"", "\">\n          <mwc-button on-click=\"_forceFetchConfig\"\n            >",
                "</mwc-button\n          >\n        </hass-error-screen>\n      "])), this._errorMsg, this.hass.localize("ui.panel.lovelace.reload_lovelace"));
        }
        if (state === "yaml-editor") {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hui-editor\n          .hass=\"", "\"\n          .lovelace=\"", "\"\n          .closeEditor=\"", "\"\n        ></hui-editor>\n      "], ["\n        <hui-editor\n          .hass=\"", "\"\n          .lovelace=\"", "\"\n          .closeEditor=\"", "\"\n        ></hui-editor>\n      "])), this.hass, this.lovelace, this._closeEditor);
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hass-loading-screen\n        rootnav\n        .hass=", "\n        .narrow=", "\n      ></hass-loading-screen>\n    "], ["\n      <hass-loading-screen\n        rootnav\n        .hass=", "\n        .narrow=", "\n      ></hass-loading-screen>\n    "])), this.hass, this.narrow);
    };
    LovelacePanel.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("narrow")) {
            this._updateColumns();
            return;
        }
        if (!changedProps.has("hass")) {
            return;
        }
        var oldHass = changedProps.get("hass");
        if (oldHass && this.hass.dockedSidebar !== oldHass.dockedSidebar) {
            this._updateColumns();
        }
    };
    LovelacePanel.prototype.firstUpdated = function () {
        var _this = this;
        this._fetchConfig(false);
        // we don't want to unsub as we want to stay informed of updates
        Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_2__["subscribeLovelaceUpdates"])(this.hass.connection, function () {
            return _this._lovelaceChanged();
        });
        // reload lovelace on reconnect so we are sure we have the latest config
        window.addEventListener("connection-status", function (ev) {
            if (ev.detail === "connected") {
                _this._fetchConfig(false);
            }
        });
        this._updateColumns = this._updateColumns.bind(this);
        this.mqls = [300, 600, 900, 1200].map(function (width) {
            var mql = matchMedia("(min-width: " + width + "px)");
            mql.addListener(_this._updateColumns);
            return mql;
        });
        this._updateColumns();
    };
    LovelacePanel.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (this.lovelace &&
            this.hass &&
            this.lovelace.language !== this.hass.language) {
            // language has been changed, rebuild UI
            this._setLovelaceConfig(this.lovelace.config, this.lovelace.mode);
        }
        else if (this.lovelace && this.lovelace.mode === "generated") {
            // When lovelace is generated, we re-generate each time a user goes
            // to the states panel to make sure new entities are shown.
            this._state = "loading";
            this._regenerateConfig();
        }
    };
    LovelacePanel.prototype._regenerateConfig = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var conf;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_common_generate_lovelace_config__WEBPACK_IMPORTED_MODULE_8__["generateLovelaceConfigFromHass"])(this.hass)];
                    case 1:
                        conf = _a.sent();
                        this._setLovelaceConfig(conf, "generated");
                        this._state = "loaded";
                        return [2 /*return*/];
                }
            });
        });
    };
    LovelacePanel.prototype._closeEditor = function () {
        this._state = "loaded";
    };
    LovelacePanel.prototype._updateColumns = function () {
        var matchColumns = this.mqls.reduce(function (cols, mql) { return cols + Number(mql.matches); }, 0);
        // Do -1 column if the menu is docked and open
        this._columns = Math.max(1, matchColumns -
            Number(!this.narrow && this.hass.dockedSidebar === "docked"));
    };
    LovelacePanel.prototype._lovelaceChanged = function () {
        var _this = this;
        if (this._ignoreNextUpdateEvent) {
            this._ignoreNextUpdateEvent = false;
            return;
        }
        Object(_util_toast__WEBPACK_IMPORTED_MODULE_9__["showToast"])(this, {
            message: this.hass.localize("ui.panel.lovelace.changed_toast.message"),
            action: {
                action: function () { return _this._fetchConfig(false); },
                text: this.hass.localize("ui.panel.lovelace.changed_toast.refresh"),
            },
            duration: 0,
            dismissable: false,
        });
    };
    LovelacePanel.prototype._forceFetchConfig = function () {
        this._fetchConfig(true);
    };
    LovelacePanel.prototype._fetchConfig = function (forceDiskRefresh) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var conf, confMode, confProm, llWindow, err_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confMode = this.panel.config.mode;
                        llWindow = window;
                        // On first load, we speed up loading page by having LL promise ready
                        if (llWindow.llConfProm) {
                            confProm = llWindow.llConfProm;
                            llWindow.llConfProm = undefined;
                        }
                        else {
                            // Refreshing a YAML config can trigger an update event. We will ignore
                            // all update events while fetching the config and for 2 seconds after the cnofig is back.
                            // We ignore because we already have the latest config.
                            if (this.lovelace && this.lovelace.mode === "yaml") {
                                this._ignoreNextUpdateEvent = true;
                            }
                            confProm = Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_2__["fetchConfig"])(this.hass.connection, forceDiskRefresh);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 5, 6]);
                        return [4 /*yield*/, confProm];
                    case 2:
                        conf = _a.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        err_1 = _a.sent();
                        if (err_1.code !== "config_not_found") {
                            // tslint:disable-next-line
                            console.log(err_1);
                            this._state = "error";
                            this._errorMsg = err_1.message;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Object(_common_generate_lovelace_config__WEBPACK_IMPORTED_MODULE_8__["generateLovelaceConfigFromHass"])(this.hass)];
                    case 4:
                        conf = _a.sent();
                        confMode = "generated";
                        return [3 /*break*/, 6];
                    case 5:
                        // Ignore updates for another 2 seconds.
                        if (this.lovelace && this.lovelace.mode === "yaml") {
                            setTimeout(function () {
                                _this._ignoreNextUpdateEvent = false;
                            }, 2000);
                        }
                        return [7 /*endfinally*/];
                    case 6:
                        this._state = "loaded";
                        this._setLovelaceConfig(conf, confMode);
                        return [2 /*return*/];
                }
            });
        });
    };
    LovelacePanel.prototype._checkLovelaceConfig = function (config) {
        // Somehow there can be badges with value null, we remove those
        config.views.forEach(function (view) {
            if (view.badges) {
                view.badges = view.badges.filter(Boolean);
            }
        });
    };
    LovelacePanel.prototype._setLovelaceConfig = function (config, mode) {
        var _this = this;
        this._checkLovelaceConfig(config);
        this.lovelace = {
            config: config,
            mode: mode,
            editMode: this.lovelace ? this.lovelace.editMode : false,
            language: this.hass.language,
            enableFullEditMode: function () {
                if (!editorLoaded) {
                    editorLoaded = true;
                    Promise.all(/*! import() | lovelace-yaml-editor */[__webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e(9), __webpack_require__.e("lovelace-yaml-editor")]).then(__webpack_require__.bind(null, /*! ./hui-editor */ "./src/panels/lovelace/hui-editor.ts"));
                }
                _this._state = "yaml-editor";
            },
            setEditMode: function (editMode) {
                if (!editMode || _this.lovelace.mode !== "generated") {
                    _this._updateLovelace({ editMode: editMode });
                    return;
                }
                Object(_editor_show_save_config_dialog__WEBPACK_IMPORTED_MODULE_7__["showSaveDialog"])(_this, {
                    lovelace: _this.lovelace,
                });
            },
            saveConfig: function (newConfig) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var _a, previousConfig, previousMode, err_2;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.lovelace, previousConfig = _a.config, previousMode = _a.mode;
                            this._checkLovelaceConfig(newConfig);
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            // Optimistic update
                            this._updateLovelace({
                                config: newConfig,
                                mode: "storage",
                            });
                            this._ignoreNextUpdateEvent = true;
                            return [4 /*yield*/, Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_2__["saveConfig"])(this.hass, newConfig)];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_2 = _b.sent();
                            // tslint:disable-next-line
                            console.error(err_2);
                            // Rollback the optimistic update
                            this._updateLovelace({
                                config: previousConfig,
                                mode: previousMode,
                            });
                            throw err_2;
                        case 4: return [2 /*return*/];
                    }
                });
            }); },
        };
    };
    LovelacePanel.prototype._updateLovelace = function (props) {
        this.lovelace = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.lovelace), props);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
    ], LovelacePanel.prototype, "panel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
    ], LovelacePanel.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
    ], LovelacePanel.prototype, "narrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
    ], LovelacePanel.prototype, "route", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
    ], LovelacePanel.prototype, "_columns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
    ], LovelacePanel.prototype, "_state", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
    ], LovelacePanel.prototype, "_errorMsg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
    ], LovelacePanel.prototype, "lovelace", void 0);
    return LovelacePanel;
}(lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"]));
customElements.define("ha-panel-lovelace", LovelacePanel);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/lovelace/hui-root.ts":
/*!*****************************************!*\
  !*** ./src/panels/lovelace/hui-root.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_scroll_effects_effects_waterfall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/app-layout/app-scroll-effects/effects/waterfall */ "./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _common_dom_scroll_to_target__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/dom/scroll-to-target */ "./src/common/dom/scroll-to-target.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _components_ha_start_voice_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/ha-start-voice-button */ "./src/components/ha-start-voice-button.js");
/* harmony import */ var _components_ha_paper_icon_button_arrow_next__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/ha-paper-icon-button-arrow-next */ "./src/components/ha-paper-icon-button-arrow-next.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _editor_config_util__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./editor/config-util */ "./src/panels/lovelace/editor/config-util.ts");
/* harmony import */ var _views_hui_view__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/hui-view */ "./src/panels/lovelace/views/hui-view.ts");
/* harmony import */ var _views_hui_panel_view__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/hui-panel-view */ "./src/panels/lovelace/views/hui-panel-view.ts");
/* harmony import */ var _editor_view_editor_show_edit_view_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./editor/view-editor/show-edit-view-dialog */ "./src/panels/lovelace/editor/view-editor/show-edit-view-dialog.ts");
/* harmony import */ var _editor_lovelace_editor_show_edit_lovelace_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./editor/lovelace-editor/show-edit-lovelace-dialog */ "./src/panels/lovelace/editor/lovelace-editor/show-edit-lovelace-dialog.ts");
/* harmony import */ var _common_util_render_status__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../common/util/render-status */ "./src/common/util/render-status.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _common_load_resources__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./common/load-resources */ "./src/panels/lovelace/common/load-resources.ts");


























// Not a duplicate import, this one is for type
// tslint:disable-next-line








var HUIRoot = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HUIRoot, _super);
    function HUIRoot() {
        var _this = _super.call(this) || this;
        // The view can trigger a re-render when it knows that certain
        // web components have been loaded.
        _this._debouncedConfigChanged = Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_21__["debounce"])(function () { return _this._selectView(_this._curView, true); }, 100, false);
        return _this;
    }
    HUIRoot.prototype.firstUpdated = function (changedProperties) {
        _super.prototype.firstUpdated.call(this, changedProperties);
        this.classList.toggle("disable-text-select", /Chrome/.test(navigator.userAgent) && /Android/.test(navigator.userAgent));
    };
    HUIRoot.prototype.render = function () {
        var _this = this;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n    <app-route .route=\"", "\" pattern=\"/:view\" data=\"", "\" @data-changed=\"", "\"></app-route>\n    <ha-app-layout id=\"layout\">\n      <app-header slot=\"header\" effects=\"waterfall\" class=\"", "\" fixed condenses>\n        ", "\n\n        ", "\n      </app-header>\n      <div id='view' class=\"", "\" @ll-rebuild='", "'></div>\n    </app-header-layout>\n    "], ["\n    <app-route .route=\"", "\" pattern=\"/:view\" data=\"",
            "\" @data-changed=\"", "\"></app-route>\n    <ha-app-layout id=\"layout\">\n      <app-header slot=\"header\" effects=\"waterfall\" class=\"",
            "\" fixed condenses>\n        ",
            "\n\n        ",
            "\n      </app-header>\n      <div id='view' class=\"",
            "\" @ll-rebuild='", "'></div>\n    </app-header-layout>\n    "])), this.route, this._routeData, this._routeDataChanged, Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            "edit-mode": this._editMode,
        }), this._editMode
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <app-toolbar class=\"edit-mode\">\n                  <paper-icon-button\n                    icon=\"hass:close\"\n                    @click=\"", "\"\n                  ></paper-icon-button>\n                  <div main-title>\n                    ", "\n                    <paper-icon-button\n                      icon=\"hass:pencil\"\n                      class=\"edit-icon\"\n                      @click=\"", "\"\n                    ></paper-icon-button>\n                  </div>\n                  <paper-icon-button\n                    icon=\"hass:help-circle\"\n                    title=\"Help\"\n                    @click=\"", "\"\n                  ></paper-icon-button>\n                  <paper-menu-button\n                    no-animations\n                    horizontal-align=\"right\"\n                    horizontal-offset=\"-5\"\n                  >\n                    <paper-icon-button\n                      aria-label=\"Open Lovelace menu\"\n                      icon=\"hass:dots-vertical\"\n                      slot=\"dropdown-trigger\"\n                    ></paper-icon-button>\n                    <paper-listbox\n                      @iron-select=\"", "\"\n                      slot=\"dropdown-content\"\n                    >\n                      ", "\n                      <paper-item @tap=\"", "\">\n                        ", "\n                      </paper-item>\n                    </paper-listbox>\n                  </paper-menu-button>\n                </app-toolbar>\n              "], ["\n                <app-toolbar class=\"edit-mode\">\n                  <paper-icon-button\n                    icon=\"hass:close\"\n                    @click=\"", "\"\n                  ></paper-icon-button>\n                  <div main-title>\n                    ",
                "\n                    <paper-icon-button\n                      icon=\"hass:pencil\"\n                      class=\"edit-icon\"\n                      @click=\"", "\"\n                    ></paper-icon-button>\n                  </div>\n                  <paper-icon-button\n                    icon=\"hass:help-circle\"\n                    title=\"Help\"\n                    @click=\"", "\"\n                  ></paper-icon-button>\n                  <paper-menu-button\n                    no-animations\n                    horizontal-align=\"right\"\n                    horizontal-offset=\"-5\"\n                  >\n                    <paper-icon-button\n                      aria-label=\"Open Lovelace menu\"\n                      icon=\"hass:dots-vertical\"\n                      slot=\"dropdown-trigger\"\n                    ></paper-icon-button>\n                    <paper-listbox\n                      @iron-select=\"", "\"\n                      slot=\"dropdown-content\"\n                    >\n                      ",
                "\n                      <paper-item @tap=\"", "\">\n                        ",
                "\n                      </paper-item>\n                    </paper-listbox>\n                  </paper-menu-button>\n                </app-toolbar>\n              "])), this._editModeDisable, this.config.title ||
                this.hass.localize("ui.panel.lovelace.editor.header"), this._editLovelace, this._handleHelp, this._deselect,  false /* No unused entities available in the demo */
                ? undefined
                : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                            <paper-item\n                              aria-label=", "\n                              @tap=\"", "\"\n                            >\n                              ", "\n                            </paper-item>\n                          "], ["\n                            <paper-item\n                              aria-label=",
                    "\n                              @tap=\"", "\"\n                            >\n                              ",
                    "\n                            </paper-item>\n                          "])), this.hass.localize("ui.panel.lovelace.menu.unused_entities"), this._handleUnusedEntities, this.hass.localize("ui.panel.lovelace.menu.unused_entities")), this.lovelace.enableFullEditMode, this.hass.localize("ui.panel.lovelace.editor.menu.raw_editor")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <app-toolbar>\n                  <ha-menu-button\n                    .hass=", "\n                    .narrow=", "\n                  ></ha-menu-button>\n                  <div main-title>", "</div>\n                  <ha-start-voice-button\n                    .hass=\"", "\"\n                  ></ha-start-voice-button>\n                  <paper-menu-button\n                    no-animations\n                    horizontal-align=\"right\"\n                    horizontal-offset=\"-5\"\n                  >\n                    <paper-icon-button\n                      icon=\"hass:dots-vertical\"\n                      slot=\"dropdown-trigger\"\n                    ></paper-icon-button>\n                    <paper-listbox\n                      @iron-select=\"", "\"\n                      slot=\"dropdown-content\"\n                    >\n                      ", "\n                      ", "\n                      <paper-item\n                        aria-label=", "\n                        @tap=\"", "\"\n                      >\n                        ", "\n                      </paper-item>\n                    </paper-listbox>\n                  </paper-menu-button>\n                </app-toolbar>\n              "], ["\n                <app-toolbar>\n                  <ha-menu-button\n                    .hass=", "\n                    .narrow=", "\n                  ></ha-menu-button>\n                  <div main-title>", "</div>\n                  <ha-start-voice-button\n                    .hass=\"", "\"\n                  ></ha-start-voice-button>\n                  <paper-menu-button\n                    no-animations\n                    horizontal-align=\"right\"\n                    horizontal-offset=\"-5\"\n                  >\n                    <paper-icon-button\n                      icon=\"hass:dots-vertical\"\n                      slot=\"dropdown-trigger\"\n                    ></paper-icon-button>\n                    <paper-listbox\n                      @iron-select=\"", "\"\n                      slot=\"dropdown-content\"\n                    >\n                      ",
            "\n                      ",
            "\n                      <paper-item\n                        aria-label=",
            "\n                        @tap=\"", "\"\n                      >\n                        ", "\n                      </paper-item>\n                    </paper-listbox>\n                  </paper-menu-button>\n                </app-toolbar>\n              "])), this.hass, this.narrow, this.config.title || "牧养犬", this.hass, this._deselect, this._yamlMode
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                            <paper-item\n                              aria-label=", "\n                              @tap=\"", "\"\n                            >\n                              ", "\n                            </paper-item>\n                            <paper-item\n                              aria-label=", "\n                              @tap=\"", "\"\n                            >\n                              ", "\n                            </paper-item>\n                          "], ["\n                            <paper-item\n                              aria-label=",
                "\n                              @tap=\"", "\"\n                            >\n                              ",
                "\n                            </paper-item>\n                            <paper-item\n                              aria-label=",
                "\n                              @tap=\"", "\"\n                            >\n                              ",
                "\n                            </paper-item>\n                          "])), this.hass.localize("ui.panel.lovelace.menu.refresh"), this._handleRefresh, this.hass.localize("ui.panel.lovelace.menu.refresh"), this.hass.localize("ui.panel.lovelace.menu.unused_entities"), this._handleUnusedEntities, this.hass.localize("ui.panel.lovelace.menu.unused_entities")) : "", this.hass.user.is_admin
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                            <paper-item\n                              aria-label=", "\n                              @tap=\"", "\"\n                            >\n                              ", "\n                            </paper-item>\n                          "], ["\n                            <paper-item\n                              aria-label=",
                "\n                              @tap=\"", "\"\n                            >\n                              ",
                "\n                            </paper-item>\n                          "])), this.hass.localize("ui.panel.lovelace.menu.configure_ui"), this._editModeEnable, this.hass.localize("ui.panel.lovelace.menu.configure_ui")) : "", this.hass.localize("ui.panel.lovelace.menu.help"), this._handleHelp, this.hass.localize("ui.panel.lovelace.menu.help")), this.lovelace.config.views.length > 1 || this._editMode
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div sticky>\n                  <paper-tabs\n                    scrollable\n                    .selected=\"", "\"\n                    @iron-activate=\"", "\"\n                    dir=\"", "\"\n                  >\n                    ", "\n                    ", "\n                  </paper-tabs>\n                </div>\n              "], ["\n                <div sticky>\n                  <paper-tabs\n                    scrollable\n                    .selected=\"", "\"\n                    @iron-activate=\"", "\"\n                    dir=\"", "\"\n                  >\n                    ",
                "\n                    ",
                "\n                  </paper-tabs>\n                </div>\n              "])), this._curView, this._handleViewSelected, Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_31__["computeRTLDirection"])(this.hass), this.lovelace.config.views.map(function (view) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <paper-tab\n                          aria-label=\"", "\"\n                          class=\"", "\"\n                        >\n                          ", "\n                          ", "\n                          ", "\n                        </paper-tab>\n                      "], ["\n                        <paper-tab\n                          aria-label=\"", "\"\n                          class=\"",
                "\"\n                        >\n                          ",
                "\n                          ",
                "\n                          ",
                "\n                        </paper-tab>\n                      "])), view.title, Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
                "hide-tab": Boolean(!_this._editMode &&
                    view.visible !== undefined &&
                    ((Array.isArray(view.visible) &&
                        !view.visible.some(function (e) { return e.user === _this.hass.user.id; })) ||
                        view.visible === false)),
            }), _this._editMode
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                                <ha-paper-icon-button-arrow-prev\n                                  title=\"Move view left\"\n                                  class=\"edit-icon view\"\n                                  @click=\"", "\"\n                                  ?disabled=\"", "\"\n                                ></ha-paper-icon-button-arrow-prev>\n                              "], ["\n                                <ha-paper-icon-button-arrow-prev\n                                  title=\"Move view left\"\n                                  class=\"edit-icon view\"\n                                  @click=\"", "\"\n                                  ?disabled=\"", "\"\n                                ></ha-paper-icon-button-arrow-prev>\n                              "])), _this._moveViewLeft, _this._curView === 0) : "", view.icon
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                                <ha-icon\n                                  title=\"", "\"\n                                  .icon=\"", "\"\n                                ></ha-icon>\n                              "], ["\n                                <ha-icon\n                                  title=\"", "\"\n                                  .icon=\"", "\"\n                                ></ha-icon>\n                              "])), view.title, view.icon) : view.title || "Unnamed view", _this._editMode
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                                <ha-icon\n                                  title=\"Edit view\"\n                                  class=\"edit-icon view\"\n                                  icon=\"hass:pencil\"\n                                  @click=\"", "\"\n                                ></ha-icon>\n                                <ha-paper-icon-button-arrow-next\n                                  title=\"Move view right\"\n                                  class=\"edit-icon view\"\n                                  @click=\"", "\"\n                                  ?disabled=\"", "\"\n                                ></ha-paper-icon-button-arrow-next>\n                              "], ["\n                                <ha-icon\n                                  title=\"Edit view\"\n                                  class=\"edit-icon view\"\n                                  icon=\"hass:pencil\"\n                                  @click=\"", "\"\n                                ></ha-icon>\n                                <ha-paper-icon-button-arrow-next\n                                  title=\"Move view right\"\n                                  class=\"edit-icon view\"\n                                  @click=\"", "\"\n                                  ?disabled=\"",
                    "\"\n                                ></ha-paper-icon-button-arrow-next>\n                              "])), _this._editView, _this._moveViewRight, _this._curView +
                    1 ===
                    _this.lovelace.config.views.length) : ""); }), this._editMode
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                          <paper-icon-button\n                            id=\"add-view\"\n                            @click=\"", "\"\n                            title=\"", "\"\n                            icon=\"hass:plus\"\n                          ></paper-icon-button>\n                        "], ["\n                          <paper-icon-button\n                            id=\"add-view\"\n                            @click=\"", "\"\n                            title=\"",
                    "\"\n                            icon=\"hass:plus\"\n                          ></paper-icon-button>\n                        "])), this._addView, this.hass.localize("ui.panel.lovelace.editor.edit_view.add")) : "") : "", Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            "tabs-hidden": this.lovelace.config.views.length < 2,
        }), this._debouncedConfigChanged);
    };
    Object.defineProperty(HUIRoot, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_30__["haStyle"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        :host {\n          --dark-color: #455a64;\n          --text-dark-color: #fff;\n        }\n\n        :host(.disable-text-select) {\n          -ms-user-select: none;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n        }\n\n        ha-app-layout {\n          min-height: 100%;\n        }\n        paper-menu-button {\n          padding: 0;\n        }\n        paper-tabs {\n          margin-left: 12px;\n          --paper-tabs-selection-bar-color: var(--text-primary-color, #fff);\n          text-transform: uppercase;\n        }\n        .edit-mode {\n          background-color: var(--dark-color, #455a64);\n          color: var(--text-dark-color);\n        }\n        .edit-mode div[main-title] {\n          pointer-events: auto;\n        }\n        paper-tab.iron-selected .edit-icon {\n          display: inline-flex;\n        }\n        .edit-icon {\n          color: var(--accent-color);\n          padding-left: 8px;\n        }\n        .edit-icon[disabled] {\n          color: var(--disabled-text-color);\n        }\n        .edit-icon.view {\n          display: none;\n        }\n        #add-view {\n          position: absolute;\n          height: 44px;\n        }\n        #add-view ha-icon {\n          background-color: var(--accent-color);\n          border-radius: 5px;\n          margin-top: 4px;\n        }\n        app-toolbar a {\n          color: var(--text-primary-color, white);\n        }\n        mwc-button.warning:not([disabled]) {\n          color: var(--google-red-500);\n        }\n        #view {\n          min-height: calc(100vh - 112px);\n          /**\n          * Since we only set min-height, if child nodes need percentage\n          * heights they must use absolute positioning so we need relative\n          * positioning here.\n          *\n          * https://www.w3.org/TR/CSS2/visudet.html#the-height-property\n          */\n          position: relative;\n          display: flex;\n        }\n        #view > * {\n          /**\n          * The view could get larger than the window in Firefox\n          * to prevent that we set the max-width to 100%\n          * flex-grow: 1 and flex-basis: 100% should make sure the view\n          * stays full width.\n          *\n          * https://github.com/home-assistant/home-assistant-polymer/pull/3806\n          */\n          flex: 1 1 100%;\n          max-width: 100%;\n        }\n        #view.tabs-hidden {\n          min-height: calc(100vh - 64px);\n        }\n        paper-item {\n          cursor: pointer;\n        }\n        .hide-tab {\n          display: none;\n        }\n      "], ["\n        :host {\n          --dark-color: #455a64;\n          --text-dark-color: #fff;\n        }\n\n        :host(.disable-text-select) {\n          -ms-user-select: none;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n        }\n\n        ha-app-layout {\n          min-height: 100%;\n        }\n        paper-menu-button {\n          padding: 0;\n        }\n        paper-tabs {\n          margin-left: 12px;\n          --paper-tabs-selection-bar-color: var(--text-primary-color, #fff);\n          text-transform: uppercase;\n        }\n        .edit-mode {\n          background-color: var(--dark-color, #455a64);\n          color: var(--text-dark-color);\n        }\n        .edit-mode div[main-title] {\n          pointer-events: auto;\n        }\n        paper-tab.iron-selected .edit-icon {\n          display: inline-flex;\n        }\n        .edit-icon {\n          color: var(--accent-color);\n          padding-left: 8px;\n        }\n        .edit-icon[disabled] {\n          color: var(--disabled-text-color);\n        }\n        .edit-icon.view {\n          display: none;\n        }\n        #add-view {\n          position: absolute;\n          height: 44px;\n        }\n        #add-view ha-icon {\n          background-color: var(--accent-color);\n          border-radius: 5px;\n          margin-top: 4px;\n        }\n        app-toolbar a {\n          color: var(--text-primary-color, white);\n        }\n        mwc-button.warning:not([disabled]) {\n          color: var(--google-red-500);\n        }\n        #view {\n          min-height: calc(100vh - 112px);\n          /**\n          * Since we only set min-height, if child nodes need percentage\n          * heights they must use absolute positioning so we need relative\n          * positioning here.\n          *\n          * https://www.w3.org/TR/CSS2/visudet.html#the-height-property\n          */\n          position: relative;\n          display: flex;\n        }\n        #view > * {\n          /**\n          * The view could get larger than the window in Firefox\n          * to prevent that we set the max-width to 100%\n          * flex-grow: 1 and flex-basis: 100% should make sure the view\n          * stays full width.\n          *\n          * https://github.com/home-assistant/home-assistant-polymer/pull/3806\n          */\n          flex: 1 1 100%;\n          max-width: 100%;\n        }\n        #view.tabs-hidden {\n          min-height: calc(100vh - 64px);\n        }\n        paper-item {\n          cursor: pointer;\n        }\n        .hide-tab {\n          display: none;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    HUIRoot.prototype.updated = function (changedProperties) {
        var _this = this;
        _super.prototype.updated.call(this, changedProperties);
        var view = this._viewRoot;
        var huiView = view.lastChild;
        if (changedProperties.has("columns") &&
            huiView &&
            huiView instanceof _views_hui_view__WEBPACK_IMPORTED_MODULE_25__["HUIView"]) {
            huiView.columns = this.columns;
        }
        if (changedProperties.has("hass") && huiView) {
            huiView.hass = this.hass;
        }
        var newSelectView;
        var force = false;
        if (changedProperties.has("route")) {
            var views = this.config && this.config.views;
            if (this.route.path === "" &&
                this.route.prefix === "/lovelace" &&
                views) {
                Object(_common_navigate__WEBPACK_IMPORTED_MODULE_22__["navigate"])(this, "/lovelace/" + (views[0].path || 0), true);
                newSelectView = 0;
            }
            else if (this._routeData.view === "hass-unused-entities") {
                newSelectView = "hass-unused-entities";
            }
            else if (this._routeData.view) {
                var selectedView = this._routeData.view;
                var selectedViewInt = parseInt(selectedView, 10);
                var index = 0;
                for (var i = 0; i < views.length; i++) {
                    if (views[i].path === selectedView || i === selectedViewInt) {
                        index = i;
                        break;
                    }
                }
                newSelectView = index;
            }
        }
        if (changedProperties.has("lovelace")) {
            var oldLovelace = changedProperties.get("lovelace");
            if (!oldLovelace || oldLovelace.config !== this.lovelace.config) {
                if (this.lovelace.config.resources) {
                    Object(_common_load_resources__WEBPACK_IMPORTED_MODULE_32__["loadLovelaceResources"])(this.lovelace.config.resources, this.hass.auth.data.hassUrl);
                }
                // On config change, recreate the current view from scratch.
                force = true;
                // Recalculate to see if we need to adjust content area for tab bar
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__["fireEvent"])(this, "iron-resize");
            }
            if (!oldLovelace || oldLovelace.editMode !== this.lovelace.editMode) {
                // Leave unused entities when leaving edit mode
                if (this.lovelace.mode === "storage" &&
                    this._routeData.view === "hass-unused-entities") {
                    var views = this.config && this.config.views;
                    Object(_common_navigate__WEBPACK_IMPORTED_MODULE_22__["navigate"])(this, "/lovelace/" + (views[0].path || 0));
                    newSelectView = 0;
                }
                // On edit mode change, recreate the current view from scratch
                force = true;
                // Recalculate to see if we need to adjust content area for tab bar
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__["fireEvent"])(this, "iron-resize");
            }
        }
        if (newSelectView !== undefined || force) {
            if (force && newSelectView === undefined) {
                newSelectView = this._curView;
            }
            // Will allow for ripples to start rendering
            Object(_common_util_render_status__WEBPACK_IMPORTED_MODULE_29__["afterNextRender"])(function () { return _this._selectView(newSelectView, force); });
        }
    };
    Object.defineProperty(HUIRoot.prototype, "config", {
        get: function () {
            return this.lovelace.config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HUIRoot.prototype, "_yamlMode", {
        get: function () {
            return this.lovelace.mode === "yaml";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HUIRoot.prototype, "_editMode", {
        get: function () {
            return this.lovelace.editMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HUIRoot.prototype, "_layout", {
        get: function () {
            return this.shadowRoot.getElementById("layout");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HUIRoot.prototype, "_viewRoot", {
        get: function () {
            return this.shadowRoot.getElementById("view");
        },
        enumerable: true,
        configurable: true
    });
    HUIRoot.prototype._routeDataChanged = function (ev) {
        this._routeData = ev.detail.value;
    };
    HUIRoot.prototype._handleRefresh = function () {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__["fireEvent"])(this, "config-refresh");
    };
    HUIRoot.prototype._handleUnusedEntities = function () {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_22__["navigate"])(this, "/lovelace/hass-unused-entities");
    };
    HUIRoot.prototype._deselect = function (ev) {
        ev.target.selected = null;
    };
    HUIRoot.prototype._handleHelp = function () {
        window.open("https://www.home-assistant.io/lovelace/", "_blank");
    };
    HUIRoot.prototype._editModeEnable = function () {
        if (this._yamlMode) {
            window.alert("The edit UI is not available when in YAML mode.");
            return;
        }
        this.lovelace.setEditMode(true);
        if (this.config.views.length < 2) {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__["fireEvent"])(this, "iron-resize");
        }
    };
    HUIRoot.prototype._editModeDisable = function () {
        this.lovelace.setEditMode(false);
        if (this.config.views.length < 2) {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__["fireEvent"])(this, "iron-resize");
        }
    };
    HUIRoot.prototype._editLovelace = function () {
        Object(_editor_lovelace_editor_show_edit_lovelace_dialog__WEBPACK_IMPORTED_MODULE_28__["showEditLovelaceDialog"])(this, this.lovelace);
    };
    HUIRoot.prototype._editView = function () {
        Object(_editor_view_editor_show_edit_view_dialog__WEBPACK_IMPORTED_MODULE_27__["showEditViewDialog"])(this, {
            lovelace: this.lovelace,
            viewIndex: this._curView,
        });
    };
    HUIRoot.prototype._moveViewLeft = function () {
        var lovelace = this.lovelace;
        var oldIndex = this._curView;
        var newIndex = this._curView - 1;
        this._curView = newIndex;
        lovelace.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_24__["swapView"])(lovelace.config, oldIndex, newIndex));
    };
    HUIRoot.prototype._moveViewRight = function () {
        var lovelace = this.lovelace;
        var oldIndex = this._curView;
        var newIndex = this._curView + 1;
        this._curView = newIndex;
        lovelace.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_24__["swapView"])(lovelace.config, oldIndex, newIndex));
    };
    HUIRoot.prototype._addView = function () {
        Object(_editor_view_editor_show_edit_view_dialog__WEBPACK_IMPORTED_MODULE_27__["showEditViewDialog"])(this, {
            lovelace: this.lovelace,
        });
    };
    HUIRoot.prototype._handleViewSelected = function (ev) {
        var viewIndex = ev.detail.selected;
        if (viewIndex !== this._curView) {
            var path = this.config.views[viewIndex].path || viewIndex;
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_22__["navigate"])(this, "/lovelace/" + path);
        }
        Object(_common_dom_scroll_to_target__WEBPACK_IMPORTED_MODULE_15__["default"])(this, this._layout.header.scrollTarget);
    };
    HUIRoot.prototype._selectView = function (viewIndex, force) {
        var _this = this;
        if (!force && this._curView === viewIndex) {
            return;
        }
        viewIndex = viewIndex === undefined ? 0 : viewIndex;
        this._curView = viewIndex;
        if (force) {
            this._viewCache = {};
        }
        // Recreate a new element to clear the applied themes.
        var root = this._viewRoot;
        if (root.lastChild) {
            root.removeChild(root.lastChild);
        }
        if (viewIndex === "hass-unused-entities") {
            var unusedEntities_1 = document.createElement("hui-unused-entities");
            // Wait for promise to resolve so that the element has been upgraded.
            Promise.all(/*! import() | hui-unused-entities */[__webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~pan~6ac00806"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("hui-unused-entities")]).then(__webpack_require__.bind(null, /*! ./editor/unused-entities/hui-unused-entities */ "./src/panels/lovelace/editor/unused-entities/hui-unused-entities.ts")).then(function () {
                unusedEntities_1.hass = _this.hass;
                unusedEntities_1.lovelace = _this.lovelace;
                unusedEntities_1.narrow = _this.narrow;
            });
            if (this.config.background) {
                unusedEntities_1.style.setProperty("--lovelace-background", this.config.background);
            }
            root.append(unusedEntities_1);
            return;
        }
        var view;
        var viewConfig = this.config.views[viewIndex];
        if (!viewConfig) {
            this._editModeEnable();
            return;
        }
        if (!force && this._viewCache[viewIndex]) {
            view = this._viewCache[viewIndex];
        }
        else {
            if (viewConfig.panel && viewConfig.cards && viewConfig.cards.length > 0) {
                view = document.createElement("hui-panel-view");
                view.config = viewConfig;
            }
            else {
                view = document.createElement("hui-view");
                view.lovelace = this.lovelace;
                view.columns = this.columns;
                view.index = viewIndex;
            }
            this._viewCache[viewIndex] = view;
        }
        view.hass = this.hass;
        var configBackground = viewConfig.background || this.config.background;
        if (configBackground) {
            view.style.setProperty("--lovelace-background", configBackground);
        }
        root.append(view);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HUIRoot.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HUIRoot.prototype, "lovelace", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HUIRoot.prototype, "columns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HUIRoot.prototype, "narrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HUIRoot.prototype, "route", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HUIRoot.prototype, "_routeData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HUIRoot.prototype, "_curView", void 0);
    return HUIRoot;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("hui-root", HUIRoot);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;


/***/ }),

/***/ "./src/panels/lovelace/special-rows/hui-call-service-row.ts":
/*!******************************************************************!*\
  !*** ./src/panels/lovelace/special-rows/hui-call-service-row.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/call-service */ "./src/panels/lovelace/common/call-service.ts");





var HuiCallServiceRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiCallServiceRow, _super);
    function HuiCallServiceRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiCallServiceRow.prototype.setConfig = function (config) {
        if (!config || !config.name || !config.service) {
            throw new Error("Error in card configuration.");
        }
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ icon: "hass:remote", action_name: "Run" }, config);
    };
    HuiCallServiceRow.prototype.render = function () {
        if (!this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-icon .icon=\"", "\"></ha-icon>\n      <div class=\"flex\">\n        <div>", "</div>\n        <mwc-button @click=\"", "\"\n          >", "</mwc-button\n        >\n      </div>\n    "], ["\n      <ha-icon .icon=\"", "\"></ha-icon>\n      <div class=\"flex\">\n        <div>", "</div>\n        <mwc-button @click=\"", "\"\n          >", "</mwc-button\n        >\n      </div>\n    "])), this._config.icon, this._config.name, this._callService, this._config.action_name);
    };
    Object.defineProperty(HuiCallServiceRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: flex;\n        align-items: center;\n      }\n      ha-icon {\n        padding: 8px;\n        color: var(--paper-item-icon-color);\n      }\n      .flex {\n        flex: 1;\n        overflow: hidden;\n        margin-left: 16px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      .flex div {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      mwc-button {\n        margin-right: -0.57em;\n      }\n    "], ["\n      :host {\n        display: flex;\n        align-items: center;\n      }\n      ha-icon {\n        padding: 8px;\n        color: var(--paper-item-icon-color);\n      }\n      .flex {\n        flex: 1;\n        overflow: hidden;\n        margin-left: 16px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      .flex div {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      mwc-button {\n        margin-right: -0.57em;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiCallServiceRow.prototype._callService = function () {
        Object(_common_call_service__WEBPACK_IMPORTED_MODULE_4__["callService"])(this._config, this.hass);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCallServiceRow.prototype, "_config", void 0);
    HuiCallServiceRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-call-service-row")
    ], HuiCallServiceRow);
    return HuiCallServiceRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/special-rows/hui-cast-row.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/special-rows/hui-cast-row.ts ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _cast_receiver_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../cast/receiver_messages */ "./src/cast/receiver_messages.ts");





var HuiCastRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiCastRow, _super);
    function HuiCastRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._noHTTPS = false;
        return _this;
    }
    HuiCastRow.prototype.setConfig = function (config) {
        if (!config || config.view === undefined || config.view === null) {
            throw new Error("Invalid Configuration: 'view' required");
        }
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ icon: "hass:television", name: "牧养犬 Cast" }, config);
    };
    HuiCastRow.prototype.render = function () {
        if (!this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var active = this._castManager &&
            this._castManager.status &&
            this._config.view === this._castManager.status.lovelacePath;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-icon .icon=\"", "\"></ha-icon>\n      <div class=\"flex\">\n        <div class=\"name\">", "</div>\n        ", "\n      </div>\n    "], ["\n      <ha-icon .icon=\"", "\"></ha-icon>\n      <div class=\"flex\">\n        <div class=\"name\">", "</div>\n        ",
            "\n      </div>\n    "])), this._config.icon, this._config.name, this._noHTTPS
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              Cast requires HTTPS\n            "], ["\n              Cast requires HTTPS\n            "]))) : this._castManager === undefined
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))) : this._castManager === null
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              Cast API unavailable\n            "], ["\n              Cast API unavailable\n            "]))) : this._castManager.castState === "NO_DEVICES_AVAILABLE"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              No devices found\n            "], ["\n              No devices found\n            "]))) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"controls\">\n                <google-cast-launcher></google-cast-launcher>\n                <mwc-button\n                  @click=", "\n                  class=", "\n                  .unelevated=", "\n                  .disabled=", "\n                >\n                  SHOW\n                </mwc-button>\n              </div>\n            "], ["\n              <div class=\"controls\">\n                <google-cast-launcher></google-cast-launcher>\n                <mwc-button\n                  @click=", "\n                  class=", "\n                  .unelevated=", "\n                  .disabled=", "\n                >\n                  SHOW\n                </mwc-button>\n              </div>\n            "])), this._sendLovelace, Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({ inactive: !Boolean(active) }), active, !this._castManager.status));
    };
    HuiCastRow.prototype.firstUpdated = function (changedProps) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProps);
        if (location.protocol === "http:" && location.hostname !== "localhost") {
            this._noHTTPS = true;
        }
        __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ../../../cast/cast_manager */ "./src/cast/cast_manager.ts")).then(function (_a) {
            var getCastManager = _a.getCastManager;
            return getCastManager(_this.hass.auth).then(function (mgr) {
                _this._castManager = mgr;
                mgr.addEventListener("connection-changed", function () {
                    _this.requestUpdate();
                });
                mgr.addEventListener("state-changed", function () {
                    _this.requestUpdate();
                });
            }, function () {
                _this._castManager = null;
            });
        });
    };
    HuiCastRow.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (this._config && this._config.hide_if_unavailable) {
            this.style.display =
                !this._castManager ||
                    this._castManager.castState === "NO_DEVICES_AVAILABLE"
                    ? "none"
                    : "";
        }
    };
    HuiCastRow.prototype._sendLovelace = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_cast_receiver_messages__WEBPACK_IMPORTED_MODULE_4__["ensureConnectedCastSession"])(this._castManager, this.hass.auth)];
                    case 1:
                        _a.sent();
                        Object(_cast_receiver_messages__WEBPACK_IMPORTED_MODULE_4__["castSendShowLovelaceView"])(this._castManager, this._config.view);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HuiCastRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: flex;\n        align-items: center;\n      }\n      ha-icon {\n        padding: 8px;\n        color: var(--paper-item-icon-color);\n      }\n      .flex {\n        flex: 1;\n        margin-left: 16px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      .name {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .controls {\n        display: flex;\n        align-items: center;\n      }\n      google-cast-launcher {\n        margin-right: 0.57em;\n        cursor: pointer;\n        display: inline-block;\n        height: 24px;\n        width: 24px;\n      }\n      .inactive {\n        padding: 0 4px;\n      }\n    "], ["\n      :host {\n        display: flex;\n        align-items: center;\n      }\n      ha-icon {\n        padding: 8px;\n        color: var(--paper-item-icon-color);\n      }\n      .flex {\n        flex: 1;\n        margin-left: 16px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      .name {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .controls {\n        display: flex;\n        align-items: center;\n      }\n      google-cast-launcher {\n        margin-right: 0.57em;\n        cursor: pointer;\n        display: inline-block;\n        height: 24px;\n        width: 24px;\n      }\n      .inactive {\n        padding: 0 4px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCastRow.prototype, "_config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCastRow.prototype, "_castManager", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCastRow.prototype, "_noHTTPS", void 0);
    HuiCastRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-cast-row")
    ], HuiCastRow);
    return HuiCastRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "./src/panels/lovelace/special-rows/hui-divider-row.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/special-rows/hui-divider-row.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


var HuiDividerRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiDividerRow, _super);
    function HuiDividerRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiDividerRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Error in card configuration.");
        }
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ style: {
                height: "1px",
                "background-color": "var(--secondary-text-color)",
            } }, config);
    };
    HuiDividerRow.prototype.render = function () {
        var _this = this;
        if (!this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var el = document.createElement("div");
        Object.keys(this._config.style).forEach(function (prop) {
            el.style.setProperty(prop, _this._config.style[prop]);
        });
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n    "], ["\n      ", "\n    "])), el);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiDividerRow.prototype, "_config", void 0);
    HuiDividerRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-divider-row")
    ], HuiDividerRow);
    return HuiDividerRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/panels/lovelace/special-rows/hui-section-row.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/special-rows/hui-section-row.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");



var HuiSectionRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiSectionRow, _super);
    function HuiSectionRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiSectionRow.prototype.setConfig = function (config) {
        if (!config) {
            throw new Error("Error in card configuration.");
        }
        this._config = config;
    };
    HuiSectionRow.prototype.render = function () {
        if (!this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"divider\"></div>\n      ", "\n    "], ["\n      <div class=\"divider\"></div>\n      ",
            "\n    "])), this._config.label
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <div class=\"label\">", "</div>\n          "], ["\n            <div class=\"label\">", "</div>\n          "])), this._config.label) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))));
    };
    Object.defineProperty(HuiSectionRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .label {\n        color: var(--primary-color);\n        margin-left: 8px;\n        margin-bottom: 16px;\n        margin-top: 16px;\n      }\n      .divider {\n        height: 1px;\n        background-color: var(--secondary-text-color);\n        opacity: 0.25;\n        margin-left: -16px;\n        margin-right: -16px;\n        margin-top: 8px;\n      }\n    "], ["\n      .label {\n        color: var(--primary-color);\n        margin-left: 8px;\n        margin-bottom: 16px;\n        margin-top: 16px;\n      }\n      .divider {\n        height: 1px;\n        background-color: var(--secondary-text-color);\n        opacity: 0.25;\n        margin-left: -16px;\n        margin-right: -16px;\n        margin-top: 8px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiSectionRow.prototype, "_config", void 0);
    HuiSectionRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-section-row")
    ], HuiSectionRow);
    return HuiSectionRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/panels/lovelace/special-rows/hui-weblink-row.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/special-rows/hui-weblink-row.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");



var HuiWeblinkRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiWeblinkRow, _super);
    function HuiWeblinkRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiWeblinkRow.prototype.setConfig = function (config) {
        if (!config || !config.url) {
            throw new Error("Invalid Configuration: 'url' required");
        }
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ icon: "hass:link", name: config.url }, config);
    };
    HuiWeblinkRow.prototype.render = function () {
        if (!this._config) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <a\n        href=", "\n        target=", "\n      >\n        <ha-icon .icon=\"", "\"></ha-icon>\n        <div>", "</div>\n      </a>\n    "], ["\n      <a\n        href=", "\n        target=", "\n      >\n        <ha-icon .icon=\"", "\"></ha-icon>\n        <div>", "</div>\n      </a>\n    "])), this._config.url, this._config.url.indexOf("://") !== -1 ? "_blank" : "", this._config.icon, this._config.name);
    };
    Object.defineProperty(HuiWeblinkRow, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      a {\n        display: flex;\n        align-items: center;\n        color: var(--primary-color);\n      }\n      ha-icon {\n        padding: 8px;\n        color: var(--paper-item-icon-color);\n      }\n      div {\n        flex: 1;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-left: 16px;\n      }\n    "], ["\n      a {\n        display: flex;\n        align-items: center;\n        color: var(--primary-color);\n      }\n      ha-icon {\n        padding: 8px;\n        color: var(--paper-item-icon-color);\n      }\n      div {\n        flex: 1;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-left: 16px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiWeblinkRow.prototype, "_config", void 0);
    HuiWeblinkRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-weblink-row")
    ], HuiWeblinkRow);
    return HuiWeblinkRow;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/views/hui-panel-view.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/views/hui-panel-view.ts ***!
  \*****************************************************/
/*! exports provided: HUIPanelView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUIPanelView", function() { return HUIPanelView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts");




var HUIPanelView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HUIPanelView, _super);
    function HUIPanelView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HUIPanelView.prototype.firstUpdated = function (changedProperties) {
        _super.prototype.firstUpdated.call(this, changedProperties);
        this.style.setProperty("background", "var(--lovelace-background)");
    };
    HUIPanelView.prototype.update = function (changedProperties) {
        _super.prototype.update.call(this, changedProperties);
        var hass = this.hass;
        var hassChanged = changedProperties.has("hass");
        var oldHass = changedProperties.get("hass");
        var configChanged = changedProperties.has("config");
        if (configChanged) {
            this._createCard();
        }
        else if (hassChanged) {
            this.lastChild.hass = this.hass;
        }
        if (configChanged ||
            (hassChanged &&
                oldHass &&
                (hass.themes !== oldHass.themes ||
                    hass.selectedTheme !== oldHass.selectedTheme))) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_2__["default"])(this, hass.themes, this.config.theme);
        }
    };
    HUIPanelView.prototype._createCard = function () {
        if (this.lastChild) {
            this.removeChild(this.lastChild);
        }
        var card = Object(_common_create_card_element__WEBPACK_IMPORTED_MODULE_3__["createCardElement"])(this.config.cards[0]);
        card.hass = this.hass;
        card.isPanel = true;
        this.append(card);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HUIPanelView.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HUIPanelView.prototype, "config", void 0);
    HUIPanelView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-panel-view")
    ], HUIPanelView);
    return HUIPanelView;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"]));



/***/ }),

/***/ "./src/panels/lovelace/views/hui-view.ts":
/*!***********************************************!*\
  !*** ./src/panels/lovelace/views/hui-view.ts ***!
  \***********************************************/
/*! exports provided: HUIView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUIView", function() { return HUIView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_entity_ha_state_label_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/entity/ha-state-label-badge */ "./src/components/entity/ha-state-label-badge.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts");
/* harmony import */ var _common_compute_card_size__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/compute-card-size */ "./src/panels/lovelace/common/compute-card-size.ts");
/* harmony import */ var _editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editor/card-editor/show-edit-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");










var editCodeLoaded = false;
// Find column with < 5 entities, else column with lowest count
var getColumnIndex = function (columnEntityCount, size) {
    var minIndex = 0;
    for (var i = 0; i < columnEntityCount.length; i++) {
        if (columnEntityCount[i] < 5) {
            minIndex = i;
            break;
        }
        if (columnEntityCount[i] < columnEntityCount[minIndex]) {
            minIndex = i;
        }
    }
    columnEntityCount[minIndex] += size;
    return minIndex;
};
var HUIView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HUIView, _super);
    function HUIView() {
        var _this = _super.call(this) || this;
        _this._cards = [];
        _this._badges = [];
        return _this;
    }
    Object.defineProperty(HUIView, "properties", {
        get: function () {
            return {
                hass: {},
                lovelace: {},
                columns: { type: Number },
                index: { type: Number },
                _cards: {},
                _badges: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    // Public to make demo happy
    HUIView.prototype.createCardElement = function (cardConfig) {
        var _this = this;
        var element = Object(_common_create_card_element__WEBPACK_IMPORTED_MODULE_5__["createCardElement"])(cardConfig);
        element.hass = this.hass;
        element.addEventListener("ll-rebuild", function (ev) {
            // In edit mode let it go to hui-root and rebuild whole view.
            if (!_this.lovelace.editMode) {
                ev.stopPropagation();
                _this._rebuildCard(element, cardConfig);
            }
        }, { once: true });
        return element;
    };
    HUIView.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <div id=\"badges\"></div>\n      <div id=\"columns\"></div>\n      ", "\n    "], ["\n      ", "\n      <div id=\"badges\"></div>\n      <div id=\"columns\"></div>\n      ",
            "\n    "])), this.renderStyles(), this.lovelace.editMode
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <ha-fab\n              icon=\"hass:plus\"\n              title=\"", "\"\n              @click=\"", "\"\n              class=\"", "\"\n            ></ha-fab>\n          "], ["\n            <ha-fab\n              icon=\"hass:plus\"\n              title=\"",
                "\"\n              @click=\"", "\"\n              class=\"",
                "\"\n            ></ha-fab>\n          "])), this.hass.localize("ui.panel.lovelace.editor.edit_card.add"), this._addCard, Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__["classMap"])({
                rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_8__["computeRTL"])(this.hass),
            })) : "");
    };
    HUIView.prototype.renderStyles = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <style>\n        :host {\n          display: block;\n          box-sizing: border-box;\n          padding: 4px 4px 0;\n          transform: translateZ(0);\n          position: relative;\n          background: var(--lovelace-background);\n        }\n\n        #badges {\n          margin: 8px 16px;\n          font-size: 85%;\n          text-align: center;\n        }\n\n        #columns {\n          display: flex;\n          flex-direction: row;\n          justify-content: center;\n        }\n\n        .column {\n          flex-basis: 0;\n          flex-grow: 1;\n          max-width: 500px;\n        }\n\n        .column > * {\n          display: block;\n          margin: 4px 4px 8px;\n        }\n\n        ha-fab {\n          position: sticky;\n          float: right;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n        }\n\n        ha-fab.rtl {\n          float: left;\n          right: auto;\n          left: 16px;\n        }\n\n        @media (max-width: 500px) {\n          :host {\n            padding-left: 0;\n            padding-right: 0;\n          }\n\n          .column > * {\n            margin-left: 0;\n            margin-right: 0;\n          }\n        }\n\n        @media (max-width: 599px) {\n          .column {\n            max-width: 600px;\n          }\n        }\n      </style>\n    "], ["\n      <style>\n        :host {\n          display: block;\n          box-sizing: border-box;\n          padding: 4px 4px 0;\n          transform: translateZ(0);\n          position: relative;\n          background: var(--lovelace-background);\n        }\n\n        #badges {\n          margin: 8px 16px;\n          font-size: 85%;\n          text-align: center;\n        }\n\n        #columns {\n          display: flex;\n          flex-direction: row;\n          justify-content: center;\n        }\n\n        .column {\n          flex-basis: 0;\n          flex-grow: 1;\n          max-width: 500px;\n        }\n\n        .column > * {\n          display: block;\n          margin: 4px 4px 8px;\n        }\n\n        ha-fab {\n          position: sticky;\n          float: right;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n        }\n\n        ha-fab.rtl {\n          float: left;\n          right: auto;\n          left: 16px;\n        }\n\n        @media (max-width: 500px) {\n          :host {\n            padding-left: 0;\n            padding-right: 0;\n          }\n\n          .column > * {\n            margin-left: 0;\n            margin-right: 0;\n          }\n        }\n\n        @media (max-width: 599px) {\n          .column {\n            max-width: 600px;\n          }\n        }\n      </style>\n    "])));
    };
    HUIView.prototype.updated = function (changedProperties) {
        var _this = this;
        _super.prototype.updated.call(this, changedProperties);
        var hass = this.hass;
        var lovelace = this.lovelace;
        if (lovelace.editMode && !editCodeLoaded) {
            editCodeLoaded = true;
            Promise.all(/*! import() | hui-view-editable */[__webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~pan~6ac00806"), __webpack_require__.e("hui-view-editable")]).then(__webpack_require__.bind(null, /*! ./hui-view-editable */ "./src/panels/lovelace/views/hui-view-editable.ts"));
        }
        var hassChanged = changedProperties.has("hass");
        var editModeChanged = false;
        var configChanged = false;
        if (changedProperties.has("index")) {
            configChanged = true;
        }
        else if (changedProperties.has("lovelace")) {
            var oldLovelace = changedProperties.get("lovelace");
            editModeChanged =
                !oldLovelace || lovelace.editMode !== oldLovelace.editMode;
            configChanged = !oldLovelace || lovelace.config !== oldLovelace.config;
        }
        if (configChanged) {
            this._createBadges(lovelace.config.views[this.index]);
        }
        else if (hassChanged) {
            this._badges.forEach(function (badge) {
                var element = badge.element, entityId = badge.entityId;
                element.hass = hass;
                element.state = hass.states[entityId];
            });
        }
        if (configChanged || editModeChanged || changedProperties.has("columns")) {
            this._createCards(lovelace.config.views[this.index]);
        }
        else if (hassChanged) {
            this._cards.forEach(function (element) {
                element.hass = _this.hass;
            });
        }
        var oldHass = changedProperties.get("hass");
        if (configChanged ||
            editModeChanged ||
            (hassChanged &&
                oldHass &&
                (hass.themes !== oldHass.themes ||
                    hass.selectedTheme !== oldHass.selectedTheme))) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_3__["default"])(this, hass.themes, lovelace.config.views[this.index].theme);
        }
    };
    HUIView.prototype._addCard = function () {
        Object(_editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_7__["showEditCardDialog"])(this, {
            lovelace: this.lovelace,
            path: [this.index],
        });
    };
    HUIView.prototype._createBadges = function (config) {
        var root = this.shadowRoot.getElementById("badges");
        while (root.lastChild) {
            root.removeChild(root.lastChild);
        }
        if (!config || !config.badges || !Array.isArray(config.badges)) {
            root.style.display = "none";
            this._badges = [];
            return;
        }
        var elements = [];
        var badges = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_9__["processConfigEntities"])(config.badges);
        for (var _i = 0, badges_1 = badges; _i < badges_1.length; _i++) {
            var badge = badges_1[_i];
            var element = document.createElement("ha-state-label-badge");
            var entityId = badge.entity;
            element.hass = this.hass;
            element.state = this.hass.states[entityId];
            element.name = badge.name;
            element.icon = badge.icon;
            element.image = badge.image;
            elements.push({ element: element, entityId: entityId });
            root.appendChild(element);
        }
        this._badges = elements;
        root.style.display = elements.length > 0 ? "block" : "none";
    };
    HUIView.prototype._createCards = function (config) {
        var _this = this;
        var root = this.shadowRoot.getElementById("columns");
        while (root.lastChild) {
            root.removeChild(root.lastChild);
        }
        if (!config || !config.cards || !Array.isArray(config.cards)) {
            this._cards = [];
            return;
        }
        var elements = [];
        var elementsToAppend = [];
        config.cards.forEach(function (cardConfig, cardIndex) {
            var element = _this.createCardElement(cardConfig);
            elements.push(element);
            if (!_this.lovelace.editMode) {
                elementsToAppend.push(element);
                return;
            }
            var wrapper = document.createElement("hui-card-options");
            wrapper.hass = _this.hass;
            wrapper.lovelace = _this.lovelace;
            wrapper.path = [_this.index, cardIndex];
            wrapper.appendChild(element);
            elementsToAppend.push(wrapper);
        });
        var columns = [];
        var columnEntityCount = [];
        for (var i = 0; i < this.columns; i++) {
            columns.push([]);
            columnEntityCount.push(0);
        }
        elements.forEach(function (el, index) {
            var cardSize = Object(_common_compute_card_size__WEBPACK_IMPORTED_MODULE_6__["computeCardSize"])(el);
            // Element to append might be the wrapped card when we're editing.
            columns[getColumnIndex(columnEntityCount, cardSize)].push(elementsToAppend[index]);
        });
        // Remove empty columns
        columns = columns.filter(function (val) { return val.length > 0; });
        columns.forEach(function (column) {
            var columnEl = document.createElement("div");
            columnEl.classList.add("column");
            column.forEach(function (el) { return columnEl.appendChild(el); });
            root.appendChild(columnEl);
        });
        this._cards = elements;
    };
    HUIView.prototype._rebuildCard = function (cardElToReplace, config) {
        var newCardEl = this.createCardElement(config);
        cardElToReplace.parentElement.replaceChild(newCardEl, cardElToReplace);
        this._cards = this._cards.map(function (curCardEl) {
            return curCardEl === cardElToReplace ? newCardEl : curCardEl;
        });
    };
    return HUIView;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

customElements.define("hui-view", HUIView);
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/map/ha-entity-marker.js":
/*!********************************************!*\
  !*** ./src/panels/map/ha-entity-marker.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_image_iron_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-image/iron-image */ "./node_modules/@polymer/iron-image/iron-image.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-positioning\"></style>\n      <style>\n        .marker {\n          vertical-align: top;\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          width: 2.5em;\n          text-align: center;\n          height: 2.5em;\n          line-height: 2.5em;\n          font-size: 1.5em;\n          border-radius: 50%;\n          border: 0.1em solid\n            var(--ha-marker-color, var(--default-primary-color));\n          color: rgb(76, 76, 76);\n          background-color: white;\n        }\n        iron-image {\n          border-radius: 50%;\n        }\n      </style>\n\n      <div class=\"marker\">\n        <template is=\"dom-if\" if=\"[[entityName]]\"\n          >[[entityName]]</template\n        >\n        <template is=\"dom-if\" if=\"[[entityPicture]]\">\n          <iron-image\n            sizing=\"cover\"\n            class=\"fit\"\n            src=\"[[entityPicture]]\"\n          ></iron-image>\n        </template>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/*
 * @appliesMixin EventsMixin
 */

var HaEntityMarker =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaEntityMarker, _EventsMixin);

  function HaEntityMarker() {
    _classCallCheck(this, HaEntityMarker);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaEntityMarker).apply(this, arguments));
  }

  _createClass(HaEntityMarker, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaEntityMarker.prototype), "ready", this).call(this);

      this.addEventListener("click", function (ev) {
        return _this.badgeTap(ev);
      });
    }
  }, {
    key: "badgeTap",
    value: function badgeTap(ev) {
      ev.stopPropagation();

      if (this.entityId) {
        this.fire("hass-more-info", {
          entityId: this.entityId
        });
      }
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        entityId: {
          type: String,
          value: ""
        },
        entityName: {
          type: String,
          value: null
        },
        entityPicture: {
          type: String,
          value: null
        }
      };
    }
  }]);

  return HaEntityMarker;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-entity-marker", HaEntityMarker);

/***/ }),

/***/ "./src/resources/jquery.roundslider.ondemand.ts":
/*!******************************************************!*\
  !*** ./src/resources/jquery.roundslider.ondemand.ts ***!
  \******************************************************/
/*! exports provided: loadRoundslider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRoundslider", function() { return loadRoundslider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var loaded;
var loadRoundslider = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (!loaded) {
            loaded = Promise.all(/*! import() | jquery-roundslider */[__webpack_require__.e("vendors~jquery-roundslider"), __webpack_require__.e("jquery-roundslider")]).then(__webpack_require__.bind(null, /*! ./jquery.roundslider */ "./src/resources/jquery.roundslider.js"));
        }
        return [2 /*return*/, loaded];
    });
}); };


/***/ })

}]);