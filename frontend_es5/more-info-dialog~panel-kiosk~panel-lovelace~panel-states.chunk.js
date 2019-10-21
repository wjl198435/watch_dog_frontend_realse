(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog~panel-kiosk~panel-lovelace~panel-states"],{

/***/ "./node_modules/workerize-loader/dist/index.js!./src/resources/markdown_worker.ts":
/*!*******************************************************************************!*\
  !*** ./node_modules/workerize-loader/dist!./src/resources/markdown_worker.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


				var addMethods = __webpack_require__(/*! ../../node_modules/workerize-loader/dist/rpc-wrapper.js */ "./node_modules/workerize-loader/dist/rpc-wrapper.js")
				var methods = ["renderMarkdown"]
				module.exports = function() {
					var w = new Worker(__webpack_require__.p + "1ad83d98797d8f2144f6.worker.js", { name: "[hash].worker.js" })
					addMethods(w, methods)
					
					return w
				}
			

/***/ }),

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
function isComponentLoaded(hass, component) {
    return hass && hass.config.components.indexOf(component) !== -1;
}


/***/ }),

/***/ "./src/common/datetime/duration_to_seconds.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/duration_to_seconds.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return durationToSeconds; });
function durationToSeconds(duration) {
    var parts = duration.split(":").map(Number);
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
}


/***/ }),

/***/ "./src/common/datetime/seconds_to_duration.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/seconds_to_duration.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return secondsToDuration; });
var leftPad = function (num) { return (num < 10 ? "0" + num : num); };
function secondsToDuration(d) {
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);
    if (h > 0) {
        return h + ":" + leftPad(m) + ":" + leftPad(s);
    }
    if (m > 0) {
        return m + ":" + leftPad(s);
    }
    if (s > 0) {
        return "" + s;
    }
    return null;
}


/***/ }),

/***/ "./src/common/dom/stop_propagation.ts":
/*!********************************************!*\
  !*** ./src/common/dom/stop_propagation.ts ***!
  \********************************************/
/*! exports provided: stopPropagation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPropagation", function() { return stopPropagation; });
var stopPropagation = function (ev) { return ev.stopPropagation(); };


/***/ }),

/***/ "./src/common/entity/supports-feature.ts":
/*!***********************************************!*\
  !*** ./src/common/entity/supports-feature.ts ***!
  \***********************************************/
/*! exports provided: supportsFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsFeature", function() { return supportsFeature; });
var supportsFeature = function (stateObj, feature) {
    // tslint:disable-next-line:no-bitwise
    return (stateObj.attributes.supported_features & feature) !== 0;
};


/***/ }),

/***/ "./src/common/entity/timer_time_remaining.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/timer_time_remaining.ts ***!
  \***************************************************/
/*! exports provided: timerTimeRemaining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerTimeRemaining", function() { return timerTimeRemaining; });
/* harmony import */ var _datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datetime/duration_to_seconds */ "./src/common/datetime/duration_to_seconds.ts");

var timerTimeRemaining = function (stateObj) {
    var timeRemaining = Object(_datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.attributes.remaining);
    if (stateObj.state === "active") {
        var now = new Date().getTime();
        var madeActive = new Date(stateObj.last_changed).getTime();
        timeRemaining = Math.max(timeRemaining - (now - madeActive) / 1000, 0);
    }
    return timeRemaining;
};


/***/ }),

/***/ "./src/common/util/time-cache-function-promise.ts":
/*!********************************************************!*\
  !*** ./src/common/util/time-cache-function-promise.ts ***!
  \********************************************************/
/*! exports provided: timeCachePromiseFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeCachePromiseFunc", function() { return timeCachePromiseFunc; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var timeCachePromiseFunc = function (cacheKey, cacheTime, func, hass, entityId) {
    var args = [];
    for (var _i = 5; _i < arguments.length; _i++) {
        args[_i - 5] = arguments[_i];
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
        var cache, lastResult, result;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            cache = hass[cacheKey];
            if (!cache) {
                cache = hass[cacheKey] = {};
            }
            lastResult = cache[entityId];
            if (lastResult) {
                return [2 /*return*/, lastResult];
            }
            result = func.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([hass, entityId], args));
            cache[entityId] = result;
            result.then(
            // When successful, set timer to clear cache
            function () {
                return setTimeout(function () {
                    cache[entityId] = undefined;
                }, cacheTime);
            }, 
            // On failure, clear cache right away
            function () {
                cache[entityId] = undefined;
            });
            return [2 /*return*/, result];
        });
    });
};


/***/ }),

/***/ "./src/components/ha-climate-state.js":
/*!********************************************!*\
  !*** ./src/components/ha-climate-state.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _data_climate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/climate */ "./src/data/climate.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          white-space: nowrap;\n        }\n\n        .target {\n          color: var(--primary-text-color);\n        }\n\n        .current {\n          color: var(--secondary-text-color);\n        }\n\n        .state-label {\n          font-weight: bold;\n          text-transform: capitalize;\n        }\n\n        .unit {\n          display: inline-block;\n          direction: ltr;\n        }\n      </style>\n\n      <div class=\"target\">\n        <template is=\"dom-if\" if=\"[[_hasKnownState(stateObj.state)]]\">\n          <span class=\"state-label\">\n            [[_localizeState(localize, stateObj)]]\n            <template is=\"dom-if\" if=\"[[_renderPreset(stateObj.attributes)]]\">\n              - [[_localizePreset(localize, stateObj.attributes.preset_mode)]]\n            </template>\n          </span>\n        </template>\n        <div class=\"unit\">[[computeTarget(hass, stateObj)]]</div>\n      </div>\n\n      <template is=\"dom-if\" if=\"[[currentStatus]]\">\n        <div class=\"current\">\n          [[localize('ui.card.climate.currently')]]:\n          <div class=\"unit\">[[currentStatus]]</div>\n        </div>\n      </template>\n    "]);

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
 * @appliesMixin LocalizeMixin
 */

var HaClimateState =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaClimateState, _LocalizeMixin);

  function HaClimateState() {
    _classCallCheck(this, HaClimateState);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaClimateState).apply(this, arguments));
  }

  _createClass(HaClimateState, [{
    key: "computeCurrentStatus",
    value: function computeCurrentStatus(hass, stateObj) {
      if (!hass || !stateObj) return null;

      if (stateObj.attributes.current_temperature != null) {
        return "".concat(stateObj.attributes.current_temperature, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.current_humidity != null) {
        return "".concat(stateObj.attributes.current_humidity, " %");
      }

      return null;
    }
  }, {
    key: "computeTarget",
    value: function computeTarget(hass, stateObj) {
      if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

      if (stateObj.attributes.target_temp_low != null && stateObj.attributes.target_temp_high != null) {
        return "".concat(stateObj.attributes.target_temp_low, "-").concat(stateObj.attributes.target_temp_high, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.temperature != null) {
        return "".concat(stateObj.attributes.temperature, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.target_humidity_low != null && stateObj.attributes.target_humidity_high != null) {
        return "".concat(stateObj.attributes.target_humidity_low, "-").concat(stateObj.attributes.target_humidity_high, "%");
      }

      if (stateObj.attributes.humidity != null) {
        return "".concat(stateObj.attributes.humidity, " %");
      }

      return "";
    }
  }, {
    key: "_hasKnownState",
    value: function _hasKnownState(state) {
      return state !== "unknown";
    }
  }, {
    key: "_localizeState",
    value: function _localizeState(localize, stateObj) {
      var stateString = localize("state.climate.".concat(stateObj.state));
      return stateObj.attributes.hvac_action ? "".concat(localize("state_attributes.climate.hvac_action.".concat(stateObj.attributes.hvac_action)), " (").concat(stateString, ")") : stateString;
    }
  }, {
    key: "_localizePreset",
    value: function _localizePreset(localize, preset) {
      return localize("state_attributes.climate.preset_mode.".concat(preset)) || preset;
    }
  }, {
    key: "_renderPreset",
    value: function _renderPreset(attributes) {
      return attributes.preset_mode && attributes.preset_mode !== _data_climate__WEBPACK_IMPORTED_MODULE_3__["CLIMATE_PRESET_NONE"];
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
        hass: Object,
        stateObj: Object,
        currentStatus: {
          type: String,
          computed: "computeCurrentStatus(hass, stateObj)"
        }
      };
    }
  }]);

  return HaClimateState;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-climate-state", HaClimateState);

/***/ }),

/***/ "./src/components/ha-cover-controls.js":
/*!*********************************************!*\
  !*** ./src/components/ha-cover-controls.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .state {\n          white-space: nowrap;\n        }\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n\n      <div class=\"state\">\n        <paper-icon-button\n          aria-label=\"Open cover\"\n          icon=\"hass:arrow-up\"\n          on-click=\"onOpenTap\"\n          invisible$=\"[[!entityObj.supportsOpen]]\"\n          disabled=\"[[computeOpenDisabled(stateObj, entityObj)]]\"\n        ></paper-icon-button>\n        <paper-icon-button\n          aria-label=\"Stop the cover from moving\"\n          icon=\"hass:stop\"\n          on-click=\"onStopTap\"\n          invisible$=\"[[!entityObj.supportsStop]]\"\n        ></paper-icon-button>\n        <paper-icon-button\n          aria-label=\"Close cover\"\n          icon=\"hass:arrow-down\"\n          on-click=\"onCloseTap\"\n          invisible$=\"[[!entityObj.supportsClose]]\"\n          disabled=\"[[computeClosedDisabled(stateObj, entityObj)]]\"\n        ></paper-icon-button>\n      </div>\n    "]);

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






var HaCoverControls =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCoverControls, _PolymerElement);

  function HaCoverControls() {
    _classCallCheck(this, HaCoverControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCoverControls).apply(this, arguments));
  }

  _createClass(HaCoverControls, [{
    key: "computeEntityObj",
    value: function computeEntityObj(hass, stateObj) {
      return new _util_cover_model__WEBPACK_IMPORTED_MODULE_3__["default"](hass, stateObj);
    }
  }, {
    key: "computeOpenDisabled",
    value: function computeOpenDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return (entityObj.isFullyOpen || entityObj.isOpening) && !assumedState;
    }
  }, {
    key: "computeClosedDisabled",
    value: function computeClosedDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return (entityObj.isFullyClosed || entityObj.isClosing) && !assumedState;
    }
  }, {
    key: "onOpenTap",
    value: function onOpenTap(ev) {
      ev.stopPropagation();
      this.entityObj.openCover();
    }
  }, {
    key: "onCloseTap",
    value: function onCloseTap(ev) {
      ev.stopPropagation();
      this.entityObj.closeCover();
    }
  }, {
    key: "onStopTap",
    value: function onStopTap(ev) {
      ev.stopPropagation();
      this.entityObj.stopCover();
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
        stateObj: {
          type: Object
        },
        entityObj: {
          type: Object,
          computed: "computeEntityObj(hass, stateObj)"
        }
      };
    }
  }]);

  return HaCoverControls;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-cover-controls", HaCoverControls);

/***/ }),

/***/ "./src/components/ha-cover-tilt-controls.js":
/*!**************************************************!*\
  !*** ./src/components/ha-cover-tilt-controls.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        :host {\n          white-space: nowrap;\n        }\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n      <paper-icon-button\n        aria-label=\"Open cover tilt\"\n        icon=\"hass:arrow-top-right\"\n        on-click=\"onOpenTiltTap\"\n        title=\"Open tilt\"\n        invisible$=\"[[!entityObj.supportsOpenTilt]]\"\n        disabled=\"[[computeOpenDisabled(stateObj, entityObj)]]\"\n      ></paper-icon-button>\n      <paper-icon-button\n        aria-label=\"Stop cover from moving\"\n        icon=\"hass:stop\"\n        on-click=\"onStopTiltTap\"\n        invisible$=\"[[!entityObj.supportsStopTilt]]\"\n        title=\"Stop tilt\"\n      ></paper-icon-button>\n      <paper-icon-button\n        aria-label=\"Close cover tilt\"\n        icon=\"hass:arrow-bottom-left\"\n        on-click=\"onCloseTiltTap\"\n        title=\"Close tilt\"\n        invisible$=\"[[!entityObj.supportsCloseTilt]]\"\n        disabled=\"[[computeClosedDisabled(stateObj, entityObj)]]\"\n      ></paper-icon-button>\n    "]);

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







var HaCoverTiltControls =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCoverTiltControls, _PolymerElement);

  function HaCoverTiltControls() {
    _classCallCheck(this, HaCoverTiltControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCoverTiltControls).apply(this, arguments));
  }

  _createClass(HaCoverTiltControls, [{
    key: "computeEntityObj",
    value: function computeEntityObj(hass, stateObj) {
      return new _util_cover_model__WEBPACK_IMPORTED_MODULE_4__["default"](hass, stateObj);
    }
  }, {
    key: "computeOpenDisabled",
    value: function computeOpenDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return entityObj.isFullyOpenTilt && !assumedState;
    }
  }, {
    key: "computeClosedDisabled",
    value: function computeClosedDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return entityObj.isFullyClosedTilt && !assumedState;
    }
  }, {
    key: "onOpenTiltTap",
    value: function onOpenTiltTap(ev) {
      ev.stopPropagation();
      this.entityObj.openCoverTilt();
    }
  }, {
    key: "onCloseTiltTap",
    value: function onCloseTiltTap(ev) {
      ev.stopPropagation();
      this.entityObj.closeCoverTilt();
    }
  }, {
    key: "onStopTiltTap",
    value: function onStopTiltTap(ev) {
      ev.stopPropagation();
      this.entityObj.stopCoverTilt();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        stateObj: {
          type: Object
        },
        entityObj: {
          type: Object,
          computed: "computeEntityObj(hass, stateObj)"
        }
      };
    }
  }]);

  return HaCoverTiltControls;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]);

customElements.define("ha-cover-tilt-controls", HaCoverTiltControls);

/***/ }),

/***/ "./src/components/ha-markdown.ts":
/*!***************************************!*\
  !*** ./src/components/ha-markdown.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var workerize_loader_resources_markdown_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workerize-loader!../resources/markdown_worker */ "./node_modules/workerize-loader/dist/index.js!./src/resources/markdown_worker.ts");
/* harmony import */ var workerize_loader_resources_markdown_worker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(workerize_loader_resources_markdown_worker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");


// eslint-disable-next-line import/no-webpack-loader-syntax
// @ts-ignore
// tslint:disable-next-line: no-implicit-dependencies


var worker;
var HaMarkdown = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaMarkdown, _super);
    function HaMarkdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = "";
        _this.allowSvg = false;
        _this._resize = function () { return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(_this, "iron-resize"); };
        return _this;
    }
    HaMarkdown.prototype.update = function (changedProps) {
        _super.prototype.update.call(this, changedProps);
        if (!worker) {
            worker = workerize_loader_resources_markdown_worker__WEBPACK_IMPORTED_MODULE_2___default()();
        }
        this._render();
    };
    HaMarkdown.prototype._render = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, walker, node;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, worker.renderMarkdown(this.content, {
                                breaks: true,
                                gfm: true,
                                tables: true,
                            }, {
                                allowSvg: this.allowSvg,
                            })];
                    case 1:
                        _a.innerHTML = _b.sent();
                        this._resize();
                        walker = document.createTreeWalker(this, 1 /* SHOW_ELEMENT */, null, false);
                        while (walker.nextNode()) {
                            node = walker.currentNode;
                            // Open external links in a new window
                            if (node instanceof HTMLAnchorElement &&
                                node.host !== document.location.host) {
                                node.target = "_blank";
                                // protect referrer on external links and deny window.opener access for security reasons
                                // (see https://mathiasbynens.github.io/rel-noopener/)
                                node.rel = "noreferrer noopener";
                                // Fire a resize event when images loaded to notify content resized
                            }
                            else if (node) {
                                node.addEventListener("load", this._resize);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaMarkdown.prototype, "content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
    ], HaMarkdown.prototype, "allowSvg", void 0);
    HaMarkdown = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-markdown")
    ], HaMarkdown);
    return HaMarkdown;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"]));


/***/ }),

/***/ "./src/components/ha-slider.js":
/*!*************************************!*\
  !*** ./src/components/ha-slider.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var PaperSliderClass = customElements.get("paper-slider");
var subTemplate;

var HaSlider =
/*#__PURE__*/
function (_PaperSliderClass) {
  _inherits(HaSlider, _PaperSliderClass);

  function HaSlider() {
    _classCallCheck(this, HaSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaSlider).apply(this, arguments));
  }

  _createClass(HaSlider, [{
    key: "_calcStep",
    value: function _calcStep(value) {
      if (!this.step) {
        return parseFloat(value);
      }

      var numSteps = Math.round((value - this.min) / this.step);
      var stepStr = this.step.toString();
      var stepPointAt = stepStr.indexOf(".");

      if (stepPointAt !== -1) {
        /**
         * For small values of this.step, if we calculate the step using
         * For non-integer values of this.step, if we calculate the step using
         * `Math.round(value / step) * step` we may hit a precision point issue
         * eg. 0.1 * 0.2 =  0.020000000000000004
         * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
         *
         * as a work around we can round with the decimal precision of `step`
         */
        var precision = Math.pow(10, stepStr.length - stepPointAt - 1);
        return Math.round((numSteps * this.step + this.min) * precision) / precision;
      }

      return numSteps * this.step + this.min;
    }
  }], [{
    key: "template",
    get: function get() {
      if (!subTemplate) {
        subTemplate = PaperSliderClass.template.cloneNode(true);
        var superStyle = subTemplate.content.querySelector("style"); // append style to add mirroring of pin in RTL

        superStyle.appendChild(document.createTextNode("\n          :host([dir=\"rtl\"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n        "));
      }

      return subTemplate;
    }
  }]);

  return HaSlider;
}(PaperSliderClass);

customElements.define("ha-slider", HaSlider);

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

/***/ "./src/data/camera.ts":
/*!****************************!*\
  !*** ./src/data/camera.ts ***!
  \****************************/
/*! exports provided: CAMERA_SUPPORT_ON_OFF, CAMERA_SUPPORT_STREAM, computeMJPEGStreamUrl, fetchThumbnailUrlWithCache, fetchThumbnailUrl, fetchThumbnail, fetchStreamUrl, fetchCameraPrefs, updateCameraPrefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_SUPPORT_ON_OFF", function() { return CAMERA_SUPPORT_ON_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_SUPPORT_STREAM", function() { return CAMERA_SUPPORT_STREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeMJPEGStreamUrl", function() { return computeMJPEGStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnailUrlWithCache", function() { return fetchThumbnailUrlWithCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnailUrl", function() { return fetchThumbnailUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnail", function() { return fetchThumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStreamUrl", function() { return fetchStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCameraPrefs", function() { return fetchCameraPrefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCameraPrefs", function() { return updateCameraPrefs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util/time-cache-function-promise */ "./src/common/util/time-cache-function-promise.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/data/auth.ts");



var CAMERA_SUPPORT_ON_OFF = 1;
var CAMERA_SUPPORT_STREAM = 2;
var computeMJPEGStreamUrl = function (entity) {
    return "/api/camera_proxy_stream/" + entity.entity_id + "?token=" + entity.attributes.access_token;
};
var fetchThumbnailUrlWithCache = function (hass, entityId) {
    return Object(_common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_1__["timeCachePromiseFunc"])("_cameraTmbUrl", 9000, fetchThumbnailUrl, hass, entityId);
};
var fetchThumbnailUrl = function (hass, entityId) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var path;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Object(_auth__WEBPACK_IMPORTED_MODULE_2__["getSignedPath"])(hass, "/api/camera_proxy/" + entityId)];
            case 1:
                path = _a.sent();
                return [2 /*return*/, hass.hassUrl(path.path)];
        }
    });
}); };
var fetchThumbnail = function (hass, entityId) {
    // tslint:disable-next-line: no-console
    console.warn("This method has been deprecated.");
    return hass.callWS({
        type: "camera_thumbnail",
        entity_id: entityId,
    });
};
var fetchStreamUrl = function (hass, entityId, format) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var data, stream;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = {
                    type: "camera/stream",
                    entity_id: entityId,
                };
                if (format) {
                    // @ts-ignore
                    data.format = format;
                }
                return [4 /*yield*/, hass.callWS(data)];
            case 1:
                stream = _a.sent();
                stream.url = hass.hassUrl(stream.url);
                return [2 /*return*/, stream];
        }
    });
}); };
var fetchCameraPrefs = function (hass, entityId) {
    return hass.callWS({
        type: "camera/get_prefs",
        entity_id: entityId,
    });
};
var updateCameraPrefs = function (hass, entityId, prefs) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "camera/update_prefs", entity_id: entityId }, prefs));
};


/***/ }),

/***/ "./src/data/climate.ts":
/*!*****************************!*\
  !*** ./src/data/climate.ts ***!
  \*****************************/
/*! exports provided: CLIMATE_PRESET_NONE, CLIMATE_SUPPORT_TARGET_TEMPERATURE, CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE, CLIMATE_SUPPORT_TARGET_HUMIDITY, CLIMATE_SUPPORT_FAN_MODE, CLIMATE_SUPPORT_PRESET_MODE, CLIMATE_SUPPORT_SWING_MODE, CLIMATE_SUPPORT_AUX_HEAT, compareClimateHvacModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_PRESET_NONE", function() { return CLIMATE_PRESET_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_TEMPERATURE", function() { return CLIMATE_SUPPORT_TARGET_TEMPERATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE", function() { return CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_HUMIDITY", function() { return CLIMATE_SUPPORT_TARGET_HUMIDITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_FAN_MODE", function() { return CLIMATE_SUPPORT_FAN_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_PRESET_MODE", function() { return CLIMATE_SUPPORT_PRESET_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_SWING_MODE", function() { return CLIMATE_SUPPORT_SWING_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_AUX_HEAT", function() { return CLIMATE_SUPPORT_AUX_HEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareClimateHvacModes", function() { return compareClimateHvacModes; });
var CLIMATE_PRESET_NONE = "none";
var CLIMATE_SUPPORT_TARGET_TEMPERATURE = 1;
var CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE = 2;
var CLIMATE_SUPPORT_TARGET_HUMIDITY = 4;
var CLIMATE_SUPPORT_FAN_MODE = 8;
var CLIMATE_SUPPORT_PRESET_MODE = 16;
var CLIMATE_SUPPORT_SWING_MODE = 32;
var CLIMATE_SUPPORT_AUX_HEAT = 64;
var hvacModeOrdering = {
    auto: 1,
    heat_cool: 2,
    heat: 3,
    cool: 4,
    dry: 5,
    fan_only: 6,
    off: 7,
};
var compareClimateHvacModes = function (mode1, mode2) {
    return hvacModeOrdering[mode1] - hvacModeOrdering[mode2];
};


/***/ }),

/***/ "./src/data/input-select.ts":
/*!**********************************!*\
  !*** ./src/data/input-select.ts ***!
  \**********************************/
/*! exports provided: setInputSelectOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputSelectOption", function() { return setInputSelectOption; });
var setInputSelectOption = function (hass, entity, option) {
    return hass.callService("input_select", "select_option", {
        option: option,
        entity_id: entity,
    });
};


/***/ }),

/***/ "./src/util/cover-model.js":
/*!*********************************!*\
  !*** ./src/util/cover-model.js ***!
  \*********************************/
/*! exports provided: default, supportsOpen, supportsClose, supportsSetPosition, supportsStop, supportsOpenTilt, supportsCloseTilt, supportsStopTilt, supportsSetTiltPosition, isTiltOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoverEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpen", function() { return supportsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsClose", function() { return supportsClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetPosition", function() { return supportsSetPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStop", function() { return supportsStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpenTilt", function() { return supportsOpenTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCloseTilt", function() { return supportsCloseTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStopTilt", function() { return supportsStopTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetTiltPosition", function() { return supportsSetTiltPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTiltOnly", function() { return isTiltOnly; });
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/* eslint-enable no-bitwise */

var CoverEntity =
/*#__PURE__*/
function () {
  function CoverEntity(hass, stateObj) {
    _classCallCheck(this, CoverEntity);

    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  _createClass(CoverEntity, [{
    key: "openCover",
    value: function openCover() {
      this.callService("open_cover");
    }
  }, {
    key: "closeCover",
    value: function closeCover() {
      this.callService("close_cover");
    }
  }, {
    key: "stopCover",
    value: function stopCover() {
      this.callService("stop_cover");
    }
  }, {
    key: "openCoverTilt",
    value: function openCoverTilt() {
      this.callService("open_cover_tilt");
    }
  }, {
    key: "closeCoverTilt",
    value: function closeCoverTilt() {
      this.callService("close_cover_tilt");
    }
  }, {
    key: "stopCoverTilt",
    value: function stopCoverTilt() {
      this.callService("stop_cover_tilt");
    }
  }, {
    key: "setCoverPosition",
    value: function setCoverPosition(position) {
      this.callService("set_cover_position", {
        position: position
      });
    }
  }, {
    key: "setCoverTiltPosition",
    value: function setCoverTiltPosition(tiltPosition) {
      this.callService("set_cover_tilt_position", {
        tilt_position: tiltPosition
      });
    } // helper method

  }, {
    key: "callService",
    value: function callService(service) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.entity_id = this.stateObj.entity_id;
      this.hass.callService("cover", service, data);
    }
  }, {
    key: "isFullyOpen",
    get: function get() {
      if (this._attr.current_position !== undefined) {
        return this._attr.current_position === 100;
      }

      return this.stateObj.state === "open";
    }
  }, {
    key: "isFullyClosed",
    get: function get() {
      if (this._attr.current_position !== undefined) {
        return this._attr.current_position === 0;
      }

      return this.stateObj.state === "closed";
    }
  }, {
    key: "isFullyOpenTilt",
    get: function get() {
      return this._attr.current_tilt_position === 100;
    }
  }, {
    key: "isFullyClosedTilt",
    get: function get() {
      return this._attr.current_tilt_position === 0;
    }
  }, {
    key: "isOpening",
    get: function get() {
      return this.stateObj.state === "opening";
    }
  }, {
    key: "isClosing",
    get: function get() {
      return this.stateObj.state === "closing";
    }
  }, {
    key: "supportsOpen",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
    }
  }, {
    key: "supportsClose",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2);
    }
  }, {
    key: "supportsSetPosition",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
    }
  }, {
    key: "supportsStop",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
    }
  }, {
    key: "supportsOpenTilt",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
    }
  }, {
    key: "supportsCloseTilt",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
    }
  }, {
    key: "supportsStopTilt",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 64);
    }
  }, {
    key: "supportsSetTiltPosition",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
    }
  }, {
    key: "isTiltOnly",
    get: function get() {
      var supportsCover = this.supportsOpen || this.supportsClose || this.supportsStop;
      var supportsTilt = this.supportsOpenTilt || this.supportsCloseTilt || this.supportsStopTilt;
      return supportsTilt && !supportsCover;
    }
  }]);

  return CoverEntity;
}();


var supportsOpen = function supportsOpen(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 1);
};
var supportsClose = function supportsClose(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 2);
};
var supportsSetPosition = function supportsSetPosition(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 4);
};
var supportsStop = function supportsStop(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 8);
};
var supportsOpenTilt = function supportsOpenTilt(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 16);
};
var supportsCloseTilt = function supportsCloseTilt(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 32);
};
var supportsStopTilt = function supportsStopTilt(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 64);
};
var supportsSetTiltPosition = function supportsSetTiltPosition(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 128);
};
function isTiltOnly(stateObj) {
  var supportsCover = supportsOpen(stateObj) || supportsClose(stateObj) || supportsStop(stateObj);
  var supportsTilt = supportsOpenTilt(stateObj) || supportsCloseTilt(stateObj) || supportsStopTilt(stateObj);
  return supportsTilt && !supportsCover;
}

/***/ }),

/***/ "./src/util/hass-media-player-model.js":
/*!*********************************************!*\
  !*** ./src/util/hass-media-player-model.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaPlayerEntity; });
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MediaPlayerEntity =
/*#__PURE__*/
function () {
  function MediaPlayerEntity(hass, stateObj) {
    _classCallCheck(this, MediaPlayerEntity);

    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  _createClass(MediaPlayerEntity, [{
    key: "mediaPlayPause",
    value: function mediaPlayPause() {
      this.callService("media_play_pause");
    }
  }, {
    key: "nextTrack",
    value: function nextTrack() {
      this.callService("media_next_track");
    }
  }, {
    key: "playbackControl",
    value: function playbackControl() {
      this.callService("media_play_pause");
    }
  }, {
    key: "previousTrack",
    value: function previousTrack() {
      this.callService("media_previous_track");
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      this.callService("volume_set", {
        volume_level: volume
      });
    }
  }, {
    key: "togglePower",
    value: function togglePower() {
      if (this.isOff) {
        this.turnOn();
      } else {
        this.turnOff();
      }
    }
  }, {
    key: "turnOff",
    value: function turnOff() {
      this.callService("turn_off");
    }
  }, {
    key: "turnOn",
    value: function turnOn() {
      this.callService("turn_on");
    }
  }, {
    key: "volumeDown",
    value: function volumeDown() {
      this.callService("volume_down");
    }
  }, {
    key: "volumeMute",
    value: function volumeMute(mute) {
      if (!this.supportsVolumeMute) {
        throw new Error("Muting volume not supported");
      }

      this.callService("volume_mute", {
        is_volume_muted: mute
      });
    }
  }, {
    key: "volumeUp",
    value: function volumeUp() {
      this.callService("volume_up");
    }
  }, {
    key: "selectSource",
    value: function selectSource(source) {
      this.callService("select_source", {
        source: source
      });
    }
  }, {
    key: "selectSoundMode",
    value: function selectSoundMode(soundMode) {
      this.callService("select_sound_mode", {
        sound_mode: soundMode
      });
    } // helper method

  }, {
    key: "callService",
    value: function callService(service) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.entity_id = this.stateObj.entity_id;
      this.hass.callService("media_player", service, data);
    }
  }, {
    key: "isOff",
    get: function get() {
      return this.stateObj.state === "off";
    }
  }, {
    key: "isIdle",
    get: function get() {
      return this.stateObj.state === "idle";
    }
  }, {
    key: "isMuted",
    get: function get() {
      return this._attr.is_volume_muted;
    }
  }, {
    key: "isPaused",
    get: function get() {
      return this.stateObj.state === "paused";
    }
  }, {
    key: "isPlaying",
    get: function get() {
      return this.stateObj.state === "playing";
    }
  }, {
    key: "isMusic",
    get: function get() {
      return this._attr.media_content_type === "music";
    }
  }, {
    key: "isTVShow",
    get: function get() {
      return this._attr.media_content_type === "tvshow";
    }
  }, {
    key: "hasMediaControl",
    get: function get() {
      return ["playing", "paused", "unknown", "on"].indexOf(this.stateObj.state) !== -1;
    }
  }, {
    key: "volumeSliderValue",
    get: function get() {
      return this._attr.volume_level * 100;
    }
  }, {
    key: "showProgress",
    get: function get() {
      return (this.isPlaying || this.isPaused) && "media_duration" in this.stateObj.attributes && "media_position" in this.stateObj.attributes && "media_position_updated_at" in this.stateObj.attributes;
    }
  }, {
    key: "currentProgress",
    get: function get() {
      var progress = this._attr.media_position;

      if (this.isPlaying) {
        progress += (Date.now() - new Date(this._attr.media_position_updated_at).getTime()) / 1000.0;
      }

      return progress;
    }
  }, {
    key: "supportsPause",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
    }
  }, {
    key: "supportsVolumeSet",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
    }
  }, {
    key: "supportsVolumeMute",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
    }
  }, {
    key: "supportsPreviousTrack",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
    }
  }, {
    key: "supportsNextTrack",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
    }
  }, {
    key: "supportsTurnOn",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
    }
  }, {
    key: "supportsTurnOff",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 256);
    }
  }, {
    key: "supportsPlayMedia",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 512);
    }
  }, {
    key: "supportsVolumeButtons",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1024);
    }
  }, {
    key: "supportsSelectSource",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2048);
    }
  }, {
    key: "supportsSelectSoundMode",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 65536);
    }
  }, {
    key: "supportsPlay",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16384);
    }
  }, {
    key: "primaryTitle",
    get: function get() {
      return this._attr.media_title;
    }
  }, {
    key: "secondaryTitle",
    get: function get() {
      if (this.isMusic) {
        return this._attr.media_artist;
      }

      if (this.isTVShow) {
        var text = this._attr.media_series_title;

        if (this._attr.media_season) {
          text += " S" + this._attr.media_season;

          if (this._attr.media_episode) {
            text += "E" + this._attr.media_episode;
          }
        }

        return text;
      }

      if (this._attr.app_name) {
        return this._attr.app_name;
      }

      return "";
    }
  }, {
    key: "source",
    get: function get() {
      return this._attr.source;
    }
  }, {
    key: "sourceList",
    get: function get() {
      return this._attr.source_list;
    }
  }, {
    key: "soundMode",
    get: function get() {
      return this._attr.sound_mode;
    }
  }, {
    key: "soundModeList",
    get: function get() {
      return this._attr.sound_mode_list;
    }
  }]);

  return MediaPlayerEntity;
}();



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1raW9za35wYW5lbC1sb3ZlbGFjZX5wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL21hcmtkb3duX3dvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZHVyYXRpb25fdG9fc2Vjb25kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL3NlY29uZHNfdG9fZHVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vc3RvcF9wcm9wYWdhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3RpbWVyX3RpbWVfcmVtYWluaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC90aW1lLWNhY2hlLWZ1bmN0aW9uLXByb21pc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY2xpbWF0ZS1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb3Zlci1jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb3Zlci10aWx0LWNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLW1hcmtkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jbGltYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2lucHV0LXNlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb3Zlci1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9oYXNzLW1lZGlhLXBsYXllci1tb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblx0XHRcdFx0dmFyIGFkZE1ldGhvZHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL3dvcmtlcml6ZS1sb2FkZXIvZGlzdC9ycGMtd3JhcHBlci5qc1wiKVxuXHRcdFx0XHR2YXIgbWV0aG9kcyA9IFtcInJlbmRlck1hcmtkb3duXCJdXG5cdFx0XHRcdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIHcgPSBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYWQ4M2Q5ODc5N2Q4ZjIxNDRmNi53b3JrZXIuanNcIiwgeyBuYW1lOiBcIltoYXNoXS53b3JrZXIuanNcIiB9KVxuXHRcdFx0XHRcdGFkZE1ldGhvZHModywgbWV0aG9kcylcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gd1xuXHRcdFx0XHR9XG5cdFx0XHQiLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8qKiBSZXR1cm4gaWYgYSBjb21wb25lbnQgaXMgbG9hZGVkLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNDb21wb25lbnRMb2FkZWQoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbXBvbmVudDogc3RyaW5nXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGhhc3MgJiYgaGFzcy5jb25maWcuY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCkgIT09IC0xO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHVyYXRpb25Ub1NlY29uZHMoZHVyYXRpb246IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IHBhcnRzID0gZHVyYXRpb24uc3BsaXQoXCI6XCIpLm1hcChOdW1iZXIpO1xuICByZXR1cm4gcGFydHNbMF0gKiAzNjAwICsgcGFydHNbMV0gKiA2MCArIHBhcnRzWzJdO1xufVxuIiwiY29uc3QgbGVmdFBhZCA9IChudW06IG51bWJlcikgPT4gKG51bSA8IDEwID8gYDAke251bX1gIDogbnVtKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Vjb25kc1RvRHVyYXRpb24oZDogbnVtYmVyKSB7XG4gIGNvbnN0IGggPSBNYXRoLmZsb29yKGQgLyAzNjAwKTtcbiAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGQgJSAzNjAwKSAvIDYwKTtcbiAgY29uc3QgcyA9IE1hdGguZmxvb3IoKGQgJSAzNjAwKSAlIDYwKTtcblxuICBpZiAoaCA+IDApIHtcbiAgICByZXR1cm4gYCR7aH06JHtsZWZ0UGFkKG0pfToke2xlZnRQYWQocyl9YDtcbiAgfVxuICBpZiAobSA+IDApIHtcbiAgICByZXR1cm4gYCR7bX06JHtsZWZ0UGFkKHMpfWA7XG4gIH1cbiAgaWYgKHMgPiAwKSB7XG4gICAgcmV0dXJuIFwiXCIgKyBzO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuIiwiZXhwb3J0IGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IChldikgPT4gZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNGZWF0dXJlID0gKFxuICBzdGF0ZU9iajogSGFzc0VudGl0eSxcbiAgZmVhdHVyZTogbnVtYmVyXG4pOiBib29sZWFuID0+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgcmV0dXJuIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcyEgJiBmZWF0dXJlKSAhPT0gMDtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGR1cmF0aW9uVG9TZWNvbmRzIGZyb20gXCIuLi9kYXRldGltZS9kdXJhdGlvbl90b19zZWNvbmRzXCI7XG5cbmV4cG9ydCBjb25zdCB0aW1lclRpbWVSZW1haW5pbmcgPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpID0+IHtcbiAgbGV0IHRpbWVSZW1haW5pbmcgPSBkdXJhdGlvblRvU2Vjb25kcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLnJlbWFpbmluZyk7XG5cbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgbWFkZUFjdGl2ZSA9IG5ldyBEYXRlKHN0YXRlT2JqLmxhc3RfY2hhbmdlZCkuZ2V0VGltZSgpO1xuICAgIHRpbWVSZW1haW5pbmcgPSBNYXRoLm1heCh0aW1lUmVtYWluaW5nIC0gKG5vdyAtIG1hZGVBY3RpdmUpIC8gMTAwMCwgMCk7XG4gIH1cblxuICByZXR1cm4gdGltZVJlbWFpbmluZztcbn07XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBSZXN1bHRDYWNoZTxUPiB7XG4gIFtlbnRpdHlJZDogc3RyaW5nXTogUHJvbWlzZTxUPiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IHRpbWVDYWNoZVByb21pc2VGdW5jID0gYXN5bmMgPFQ+KFxuICBjYWNoZUtleTogc3RyaW5nLFxuICBjYWNoZVRpbWU6IG51bWJlcixcbiAgZnVuYzogKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgZW50aXR5SWQ6IHN0cmluZyxcbiAgICAuLi5hcmdzOiB1bmtub3duW11cbiAgKSA9PiBQcm9taXNlPFQ+LFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICAuLi5hcmdzOiB1bmtub3duW11cbik6IFByb21pc2U8VD4gPT4ge1xuICBsZXQgY2FjaGU6IFJlc3VsdENhY2hlPFQ+IHwgdW5kZWZpbmVkID0gKGhhc3MgYXMgYW55KVtjYWNoZUtleV07XG5cbiAgaWYgKCFjYWNoZSkge1xuICAgIGNhY2hlID0gaGFzc1tjYWNoZUtleV0gPSB7fTtcbiAgfVxuXG4gIGNvbnN0IGxhc3RSZXN1bHQgPSBjYWNoZVtlbnRpdHlJZF07XG5cbiAgaWYgKGxhc3RSZXN1bHQpIHtcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGZ1bmMoaGFzcywgZW50aXR5SWQsIC4uLmFyZ3MpO1xuICBjYWNoZVtlbnRpdHlJZF0gPSByZXN1bHQ7XG5cbiAgcmVzdWx0LnRoZW4oXG4gICAgLy8gV2hlbiBzdWNjZXNzZnVsLCBzZXQgdGltZXIgdG8gY2xlYXIgY2FjaGVcbiAgICAoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhY2hlIVtlbnRpdHlJZF0gPSB1bmRlZmluZWQ7XG4gICAgICB9LCBjYWNoZVRpbWUpLFxuICAgIC8vIE9uIGZhaWx1cmUsIGNsZWFyIGNhY2hlIHJpZ2h0IGF3YXlcbiAgICAoKSA9PiB7XG4gICAgICBjYWNoZSFbZW50aXR5SWRdID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IENMSU1BVEVfUFJFU0VUX05PTkUgfSBmcm9tIFwiLi4vZGF0YS9jbGltYXRlXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFDbGltYXRlU3RhdGUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YXJnZXQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmN1cnJlbnQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdGUtbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVuaXQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cInRhcmdldFwiPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2hhc0tub3duU3RhdGUoc3RhdGVPYmouc3RhdGUpXV1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXRlLWxhYmVsXCI+XG4gICAgICAgICAgICBbW19sb2NhbGl6ZVN0YXRlKGxvY2FsaXplLCBzdGF0ZU9iaildXVxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19yZW5kZXJQcmVzZXQoc3RhdGVPYmouYXR0cmlidXRlcyldXVwiPlxuICAgICAgICAgICAgICAtIFtbX2xvY2FsaXplUHJlc2V0KGxvY2FsaXplLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNldF9tb2RlKV1dXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVuaXRcIj5bW2NvbXB1dGVUYXJnZXQoaGFzcywgc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY3VycmVudFN0YXR1c11dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50XCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5jbGltYXRlLmN1cnJlbnRseScpXV06XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVuaXRcIj5bW2N1cnJlbnRTdGF0dXNdXTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGN1cnJlbnRTdGF0dXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlQ3VycmVudFN0YXR1cyhoYXNzLCBzdGF0ZU9iailcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDdXJyZW50U3RhdHVzKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgaWYgKCFoYXNzIHx8ICFzdGF0ZU9iaikgcmV0dXJuIG51bGw7XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF90ZW1wZXJhdHVyZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy5jdXJyZW50X3RlbXBlcmF0dXJlfSAke1xuICAgICAgICBoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZVxuICAgICAgfWA7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfaHVtaWRpdHkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF9odW1pZGl0eX0gJWA7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29tcHV0ZVRhcmdldChoYXNzLCBzdGF0ZU9iaikge1xuICAgIGlmICghaGFzcyB8fCAhc3RhdGVPYmopIHJldHVybiBudWxsO1xuICAgIC8vIFdlJ3JlIHVzaW5nIFwiIT0gbnVsbFwiIG9uIHB1cnBvc2Ugc28gdGhhdCB3ZSBtYXRjaCBib3RoIG51bGwgYW5kIHVuZGVmaW5lZC5cbiAgICBpZiAoXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvdyAhPSBudWxsICYmXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2ggIT0gbnVsbFxuICAgICkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93fS0ke1xuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2hcbiAgICAgIH0gJHtoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1gO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZX0gJHtcbiAgICAgICAgaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmVcbiAgICAgIH1gO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF9odW1pZGl0eV9sb3cgIT0gbnVsbCAmJlxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfaHVtaWRpdHlfaGlnaCAhPSBudWxsXG4gICAgKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfaHVtaWRpdHlfbG93fS0ke1xuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF9odW1pZGl0eV9oaWdoXG4gICAgICB9JWA7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5fSAlYDtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIF9oYXNLbm93blN0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlICE9PSBcInVua25vd25cIjtcbiAgfVxuXG4gIF9sb2NhbGl6ZVN0YXRlKGxvY2FsaXplLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IHN0YXRlU3RyaW5nID0gbG9jYWxpemUoYHN0YXRlLmNsaW1hdGUuJHtzdGF0ZU9iai5zdGF0ZX1gKTtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5odmFjX2FjdGlvblxuICAgICAgPyBgJHtsb2NhbGl6ZShcbiAgICAgICAgICBgc3RhdGVfYXR0cmlidXRlcy5jbGltYXRlLmh2YWNfYWN0aW9uLiR7XG4gICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmh2YWNfYWN0aW9uXG4gICAgICAgICAgfWBcbiAgICAgICAgKX0gKCR7c3RhdGVTdHJpbmd9KWBcbiAgICAgIDogc3RhdGVTdHJpbmc7XG4gIH1cblxuICBfbG9jYWxpemVQcmVzZXQobG9jYWxpemUsIHByZXNldCkge1xuICAgIHJldHVybiBsb2NhbGl6ZShgc3RhdGVfYXR0cmlidXRlcy5jbGltYXRlLnByZXNldF9tb2RlLiR7cHJlc2V0fWApIHx8IHByZXNldDtcbiAgfVxuXG4gIF9yZW5kZXJQcmVzZXQoYXR0cmlidXRlcykge1xuICAgIHJldHVybiAoXG4gICAgICBhdHRyaWJ1dGVzLnByZXNldF9tb2RlICYmIGF0dHJpYnV0ZXMucHJlc2V0X21vZGUgIT09IENMSU1BVEVfUFJFU0VUX05PTkVcbiAgICApO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jbGltYXRlLXN0YXRlXCIsIEhhQ2xpbWF0ZVN0YXRlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgQ292ZXJFbnRpdHkgZnJvbSBcIi4uL3V0aWwvY292ZXItbW9kZWxcIjtcblxuY2xhc3MgSGFDb3ZlckNvbnRyb2xzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgW2ludmlzaWJsZV0ge1xuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdGVcIj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gY292ZXJcIlxuICAgICAgICAgIGljb249XCJoYXNzOmFycm93LXVwXCJcbiAgICAgICAgICBvbi1jbGljaz1cIm9uT3BlblRhcFwiXG4gICAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c09wZW5dXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVPcGVuRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaildXVwiXG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU3RvcCB0aGUgY292ZXIgZnJvbSBtb3ZpbmdcIlxuICAgICAgICAgIGljb249XCJoYXNzOnN0b3BcIlxuICAgICAgICAgIG9uLWNsaWNrPVwib25TdG9wVGFwXCJcbiAgICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzU3RvcF1dXCJcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBjb3ZlclwiXG4gICAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctZG93blwiXG4gICAgICAgICAgb24tY2xpY2s9XCJvbkNsb3NlVGFwXCJcbiAgICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzQ2xvc2VdXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVDbG9zZWREaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgZW50aXR5T2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUVudGl0eU9iaihoYXNzLCBzdGF0ZU9iailcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IENvdmVyRW50aXR5KGhhc3MsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIGNvbXB1dGVPcGVuRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaikge1xuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XG4gICAgcmV0dXJuIChlbnRpdHlPYmouaXNGdWxseU9wZW4gfHwgZW50aXR5T2JqLmlzT3BlbmluZykgJiYgIWFzc3VtZWRTdGF0ZTtcbiAgfVxuXG4gIGNvbXB1dGVDbG9zZWREaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKSB7XG4gICAgdmFyIGFzc3VtZWRTdGF0ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gKGVudGl0eU9iai5pc0Z1bGx5Q2xvc2VkIHx8IGVudGl0eU9iai5pc0Nsb3NpbmcpICYmICFhc3N1bWVkU3RhdGU7XG4gIH1cblxuICBvbk9wZW5UYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5vcGVuQ292ZXIoKTtcbiAgfVxuXG4gIG9uQ2xvc2VUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5jbG9zZUNvdmVyKCk7XG4gIH1cblxuICBvblN0b3BUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5zdG9wQ292ZXIoKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb3Zlci1jb250cm9sc1wiLCBIYUNvdmVyQ29udHJvbHMpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgQ292ZXJFbnRpdHkgZnJvbSBcIi4uL3V0aWwvY292ZXItbW9kZWxcIjtcblxuY2xhc3MgSGFDb3ZlclRpbHRDb250cm9scyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgW2ludmlzaWJsZV0ge1xuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIGNvdmVyIHRpbHRcIlxuICAgICAgICBpY29uPVwiaGFzczphcnJvdy10b3AtcmlnaHRcIlxuICAgICAgICBvbi1jbGljaz1cIm9uT3BlblRpbHRUYXBcIlxuICAgICAgICB0aXRsZT1cIk9wZW4gdGlsdFwiXG4gICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNPcGVuVGlsdF1dXCJcbiAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVPcGVuRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaildXVwiXG4gICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiU3RvcCBjb3ZlciBmcm9tIG1vdmluZ1wiXG4gICAgICAgIGljb249XCJoYXNzOnN0b3BcIlxuICAgICAgICBvbi1jbGljaz1cIm9uU3RvcFRpbHRUYXBcIlxuICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzU3RvcFRpbHRdXVwiXG4gICAgICAgIHRpdGxlPVwiU3RvcCB0aWx0XCJcbiAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBjb3ZlciB0aWx0XCJcbiAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctYm90dG9tLWxlZnRcIlxuICAgICAgICBvbi1jbGljaz1cIm9uQ2xvc2VUaWx0VGFwXCJcbiAgICAgICAgdGl0bGU9XCJDbG9zZSB0aWx0XCJcbiAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c0Nsb3NlVGlsdF1dXCJcbiAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVDbG9zZWREaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcbiAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgICBlbnRpdHlPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUVudGl0eU9iaihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHJldHVybiBuZXcgQ292ZXJFbnRpdHkoaGFzcywgc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZU9wZW5EaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKSB7XG4gICAgdmFyIGFzc3VtZWRTdGF0ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gZW50aXR5T2JqLmlzRnVsbHlPcGVuVGlsdCAmJiAhYXNzdW1lZFN0YXRlO1xuICB9XG5cbiAgY29tcHV0ZUNsb3NlZERpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcbiAgICB2YXIgYXNzdW1lZFN0YXRlID0gc3RhdGVPYmouYXR0cmlidXRlcy5hc3N1bWVkX3N0YXRlID09PSB0cnVlO1xuICAgIHJldHVybiBlbnRpdHlPYmouaXNGdWxseUNsb3NlZFRpbHQgJiYgIWFzc3VtZWRTdGF0ZTtcbiAgfVxuXG4gIG9uT3BlblRpbHRUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5vcGVuQ292ZXJUaWx0KCk7XG4gIH1cblxuICBvbkNsb3NlVGlsdFRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLmNsb3NlQ292ZXJUaWx0KCk7XG4gIH1cblxuICBvblN0b3BUaWx0VGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmouc3RvcENvdmVyVGlsdCgpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvdmVyLXRpbHQtY29udHJvbHNcIiwgSGFDb3ZlclRpbHRDb250cm9scyk7XG4iLCJpbXBvcnQgeyBVcGRhdGluZ0VsZW1lbnQsIHByb3BlcnR5LCBjdXN0b21FbGVtZW50IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXdlYnBhY2stbG9hZGVyLXN5bnRheFxuLy8gQHRzLWlnbm9yZVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbXBsaWNpdC1kZXBlbmRlbmNpZXNcbmltcG9ydCBtYXJrZG93bldvcmtlciBmcm9tIFwid29ya2VyaXplLWxvYWRlciEuLi9yZXNvdXJjZXMvbWFya2Rvd25fd29ya2VyXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmxldCB3b3JrZXI6IGFueSB8IHVuZGVmaW5lZDtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1tYXJrZG93blwiKVxuY2xhc3MgSGFNYXJrZG93biBleHRlbmRzIFVwZGF0aW5nRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjb250ZW50ID0gXCJcIjtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgYWxsb3dTdmcgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKCF3b3JrZXIpIHtcbiAgICAgIHdvcmtlciA9IG1hcmtkb3duV29ya2VyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZW5kZXIoKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBhd2FpdCB3b3JrZXIucmVuZGVyTWFya2Rvd24oXG4gICAgICB0aGlzLmNvbnRlbnQsXG4gICAgICB7XG4gICAgICAgIGJyZWFrczogdHJ1ZSxcbiAgICAgICAgZ2ZtOiB0cnVlLFxuICAgICAgICB0YWJsZXM6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbGxvd1N2ZzogdGhpcy5hbGxvd1N2ZyxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5fcmVzaXplKCk7XG5cbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgdGhpcyxcbiAgICAgIDEgLyogU0hPV19FTEVNRU5UICovLFxuICAgICAgbnVsbCxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgY29uc3Qgbm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcblxuICAgICAgLy8gT3BlbiBleHRlcm5hbCBsaW5rcyBpbiBhIG5ldyB3aW5kb3dcbiAgICAgIGlmIChcbiAgICAgICAgbm9kZSBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmXG4gICAgICAgIG5vZGUuaG9zdCAhPT0gZG9jdW1lbnQubG9jYXRpb24uaG9zdFxuICAgICAgKSB7XG4gICAgICAgIG5vZGUudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblxuICAgICAgICAvLyBwcm90ZWN0IHJlZmVycmVyIG9uIGV4dGVybmFsIGxpbmtzIGFuZCBkZW55IHdpbmRvdy5vcGVuZXIgYWNjZXNzIGZvciBzZWN1cml0eSByZWFzb25zXG4gICAgICAgIC8vIChzZWUgaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmdpdGh1Yi5pby9yZWwtbm9vcGVuZXIvKVxuICAgICAgICBub2RlLnJlbCA9IFwibm9yZWZlcnJlciBub29wZW5lclwiO1xuXG4gICAgICAgIC8vIEZpcmUgYSByZXNpemUgZXZlbnQgd2hlbiBpbWFnZXMgbG9hZGVkIHRvIG5vdGlmeSBjb250ZW50IHJlc2l6ZWRcbiAgICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHRoaXMuX3Jlc2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzaXplID0gKCkgPT4gZmlyZUV2ZW50KHRoaXMsIFwiaXJvbi1yZXNpemVcIik7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1tYXJrZG93blwiOiBIYU1hcmtkb3duO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zbGlkZXJcIjtcblxuY29uc3QgUGFwZXJTbGlkZXJDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLXNsaWRlclwiKTtcbmxldCBzdWJUZW1wbGF0ZTtcblxuY2xhc3MgSGFTbGlkZXIgZXh0ZW5kcyBQYXBlclNsaWRlckNsYXNzIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBpZiAoIXN1YlRlbXBsYXRlKSB7XG4gICAgICBzdWJUZW1wbGF0ZSA9IFBhcGVyU2xpZGVyQ2xhc3MudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICBjb25zdCBzdXBlclN0eWxlID0gc3ViVGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIik7XG5cbiAgICAgIC8vIGFwcGVuZCBzdHlsZSB0byBhZGQgbWlycm9yaW5nIG9mIHBpbiBpbiBSVExcbiAgICAgIHN1cGVyU3R5bGUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBcbiAgICAgICAgICA6aG9zdChbZGlyPVwicnRsXCJdKSAjc2xpZGVyQ29udGFpbmVyLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTE3cHgpIHNjYWxlWCgtMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIGApXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc3ViVGVtcGxhdGU7XG4gIH1cblxuICBfY2FsY1N0ZXAodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuc3RlcCkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IG51bVN0ZXBzID0gTWF0aC5yb3VuZCgodmFsdWUgLSB0aGlzLm1pbikgLyB0aGlzLnN0ZXApO1xuICAgIGNvbnN0IHN0ZXBTdHIgPSB0aGlzLnN0ZXAudG9TdHJpbmcoKTtcbiAgICBjb25zdCBzdGVwUG9pbnRBdCA9IHN0ZXBTdHIuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKHN0ZXBQb2ludEF0ICE9PSAtMSkge1xuICAgICAgLyoqXG4gICAgICAgKiBGb3Igc21hbGwgdmFsdWVzIG9mIHRoaXMuc3RlcCwgaWYgd2UgY2FsY3VsYXRlIHRoZSBzdGVwIHVzaW5nXG4gICAgICAgKiBGb3Igbm9uLWludGVnZXIgdmFsdWVzIG9mIHRoaXMuc3RlcCwgaWYgd2UgY2FsY3VsYXRlIHRoZSBzdGVwIHVzaW5nXG4gICAgICAgKiBgTWF0aC5yb3VuZCh2YWx1ZSAvIHN0ZXApICogc3RlcGAgd2UgbWF5IGhpdCBhIHByZWNpc2lvbiBwb2ludCBpc3N1ZVxuICAgICAgICogZWcuIDAuMSAqIDAuMiA9ICAwLjAyMDAwMDAwMDAwMDAwMDAwNFxuICAgICAgICogaHR0cDovL2RvY3Mub3JhY2xlLmNvbS9jZC9FMTk5NTctMDEvODA2LTM1NjgvbmNnX2dvbGRiZXJnLmh0bWxcbiAgICAgICAqXG4gICAgICAgKiBhcyBhIHdvcmsgYXJvdW5kIHdlIGNhbiByb3VuZCB3aXRoIHRoZSBkZWNpbWFsIHByZWNpc2lvbiBvZiBgc3RlcGBcbiAgICAgICAqL1xuICAgICAgY29uc3QgcHJlY2lzaW9uID0gMTAgKiogKHN0ZXBTdHIubGVuZ3RoIC0gc3RlcFBvaW50QXQgLSAxKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIE1hdGgucm91bmQoKG51bVN0ZXBzICogdGhpcy5zdGVwICsgdGhpcy5taW4pICogcHJlY2lzaW9uKSAvIHByZWNpc2lvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtU3RlcHMgKiB0aGlzLnN0ZXAgKyB0aGlzLm1pbjtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc2xpZGVyXCIsIEhhU2xpZGVyKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoUHJvdmlkZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVkZW50aWFsIHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25lZFBhdGgge1xuICBwYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNzVXJsID0gYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9YDtcblxuZXhwb3J0IGNvbnN0IGdldFNpZ25lZFBhdGggPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHBhdGg6IHN0cmluZ1xuKTogUHJvbWlzZTxTaWduZWRQYXRoPiA9PiBoYXNzLmNhbGxXUyh7IHR5cGU6IFwiYXV0aC9zaWduX3BhdGhcIiwgcGF0aCB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXV0aFByb3ZpZGVycyA9ICgpID0+XG4gIGZldGNoKFwiL2F1dGgvcHJvdmlkZXJzXCIsIHtcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICB9KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIENhbWVyYUVudGl0eSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgdGltZUNhY2hlUHJvbWlzZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvdGltZS1jYWNoZS1mdW5jdGlvbi1wcm9taXNlXCI7XG5pbXBvcnQgeyBnZXRTaWduZWRQYXRoIH0gZnJvbSBcIi4vYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgQ0FNRVJBX1NVUFBPUlRfT05fT0ZGID0gMTtcbmV4cG9ydCBjb25zdCBDQU1FUkFfU1VQUE9SVF9TVFJFQU0gPSAyO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVByZWZlcmVuY2VzIHtcbiAgcHJlbG9hZF9zdHJlYW06IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhVGh1bWJuYWlsIHtcbiAgY29udGVudF90eXBlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHJlYW0ge1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVNSlBFR1N0cmVhbVVybCA9IChlbnRpdHk6IENhbWVyYUVudGl0eSkgPT5cbiAgYC9hcGkvY2FtZXJhX3Byb3h5X3N0cmVhbS8ke2VudGl0eS5lbnRpdHlfaWR9P3Rva2VuPSR7XG4gICAgZW50aXR5LmF0dHJpYnV0ZXMuYWNjZXNzX3Rva2VuXG4gIH1gO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hUaHVtYm5haWxVcmxXaXRoQ2FjaGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbikgPT5cbiAgdGltZUNhY2hlUHJvbWlzZUZ1bmMoXG4gICAgXCJfY2FtZXJhVG1iVXJsXCIsXG4gICAgOTAwMCxcbiAgICBmZXRjaFRodW1ibmFpbFVybCxcbiAgICBoYXNzLFxuICAgIGVudGl0eUlkXG4gICk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRodW1ibmFpbFVybCA9IGFzeW5jIChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IHBhdGggPSBhd2FpdCBnZXRTaWduZWRQYXRoKGhhc3MsIGAvYXBpL2NhbWVyYV9wcm94eS8ke2VudGl0eUlkfWApO1xuICByZXR1cm4gaGFzcy5oYXNzVXJsKHBhdGgucGF0aCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hUaHVtYm5haWwgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZW50aXR5SWQ6IHN0cmluZykgPT4ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbnNvbGVcbiAgY29uc29sZS53YXJuKFwiVGhpcyBtZXRob2QgaGFzIGJlZW4gZGVwcmVjYXRlZC5cIik7XG4gIHJldHVybiBoYXNzLmNhbGxXUzxDYW1lcmFUaHVtYm5haWw+KHtcbiAgICB0eXBlOiBcImNhbWVyYV90aHVtYm5haWxcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFN0cmVhbVVybCA9IGFzeW5jIChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgZm9ybWF0PzogXCJobHNcIlxuKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdHlwZTogXCJjYW1lcmEvc3RyZWFtXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfTtcbiAgaWYgKGZvcm1hdCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBkYXRhLmZvcm1hdCA9IGZvcm1hdDtcbiAgfVxuICBjb25zdCBzdHJlYW0gPSBhd2FpdCBoYXNzLmNhbGxXUzxTdHJlYW0+KGRhdGEpO1xuICBzdHJlYW0udXJsID0gaGFzcy5oYXNzVXJsKHN0cmVhbS51cmwpO1xuICByZXR1cm4gc3RyZWFtO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FtZXJhUHJlZnMgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZW50aXR5SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1M8Q2FtZXJhUHJlZmVyZW5jZXM+KHtcbiAgICB0eXBlOiBcImNhbWVyYS9nZXRfcHJlZnNcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhbWVyYVByZWZzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICBwcmVmczoge1xuICAgIHByZWxvYWRfc3RyZWFtPzogYm9vbGVhbjtcbiAgfVxuKSA9PlxuICBoYXNzLmNhbGxXUzxDYW1lcmFQcmVmZXJlbmNlcz4oe1xuICAgIHR5cGU6IFwiY2FtZXJhL3VwZGF0ZV9wcmVmc1wiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4ucHJlZnMsXG4gIH0pO1xuIiwiaW1wb3J0IHtcbiAgSGFzc0VudGl0eUJhc2UsXG4gIEhhc3NFbnRpdHlBdHRyaWJ1dGVCYXNlLFxufSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCB0eXBlIEh2YWNNb2RlID1cbiAgfCBcIm9mZlwiXG4gIHwgXCJoZWF0XCJcbiAgfCBcImNvb2xcIlxuICB8IFwiaGVhdF9jb29sXCJcbiAgfCBcImF1dG9cIlxuICB8IFwiZHJ5XCJcbiAgfCBcImZhbl9vbmx5XCI7XG5cbmV4cG9ydCBjb25zdCBDTElNQVRFX1BSRVNFVF9OT05FID0gXCJub25lXCI7XG5cbmV4cG9ydCB0eXBlIEh2YWNBY3Rpb24gPSBcIm9mZlwiIHwgXCJoZWF0aW5nXCIgfCBcImNvb2xpbmdcIiB8IFwiZHJ5aW5nXCIgfCBcImlkbGVcIjtcblxuZXhwb3J0IHR5cGUgQ2xpbWF0ZUVudGl0eSA9IEhhc3NFbnRpdHlCYXNlICYge1xuICBhdHRyaWJ1dGVzOiBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSAmIHtcbiAgICBodmFjX21vZGU6IEh2YWNNb2RlO1xuICAgIGh2YWNfbW9kZXM6IEh2YWNNb2RlW107XG4gICAgaHZhY19hY3Rpb24/OiBIdmFjQWN0aW9uO1xuICAgIGN1cnJlbnRfdGVtcGVyYXR1cmU6IG51bWJlcjtcbiAgICBtaW5fdGVtcDogbnVtYmVyO1xuICAgIG1heF90ZW1wOiBudW1iZXI7XG4gICAgdGVtcGVyYXR1cmU6IG51bWJlcjtcbiAgICB0YXJnZXRfdGVtcF9zdGVwPzogbnVtYmVyO1xuICAgIHRhcmdldF90ZW1wX2hpZ2g/OiBudW1iZXI7XG4gICAgdGFyZ2V0X3RlbXBfbG93PzogbnVtYmVyO1xuICAgIGh1bWlkaXR5PzogbnVtYmVyO1xuICAgIGN1cnJlbnRfaHVtaWRpdHk/OiBudW1iZXI7XG4gICAgdGFyZ2V0X2h1bWlkaXR5X2xvdz86IG51bWJlcjtcbiAgICB0YXJnZXRfaHVtaWRpdHlfaGlnaD86IG51bWJlcjtcbiAgICBtaW5faHVtaWRpdHk/OiBudW1iZXI7XG4gICAgbWF4X2h1bWlkaXR5PzogbnVtYmVyO1xuICAgIGZhbl9tb2RlPzogc3RyaW5nO1xuICAgIGZhbl9tb2Rlcz86IHN0cmluZ1tdO1xuICAgIHByZXNldF9tb2RlPzogc3RyaW5nO1xuICAgIHByZXNldF9tb2Rlcz86IHN0cmluZ1tdO1xuICAgIHN3aW5nX21vZGU/OiBzdHJpbmc7XG4gICAgc3dpbmdfbW9kZXM/OiBzdHJpbmdbXTtcbiAgICBhdXhfaGVhdD86IFwib25cIiB8IFwib2ZmXCI7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRSA9IDE7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRV9SQU5HRSA9IDI7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9IVU1JRElUWSA9IDQ7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX0ZBTl9NT0RFID0gODtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfUFJFU0VUX01PREUgPSAxNjtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfU1dJTkdfTU9ERSA9IDMyO1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9BVVhfSEVBVCA9IDY0O1xuXG5jb25zdCBodmFjTW9kZU9yZGVyaW5nOiB7IFtrZXkgaW4gSHZhY01vZGVdOiBudW1iZXIgfSA9IHtcbiAgYXV0bzogMSxcbiAgaGVhdF9jb29sOiAyLFxuICBoZWF0OiAzLFxuICBjb29sOiA0LFxuICBkcnk6IDUsXG4gIGZhbl9vbmx5OiA2LFxuICBvZmY6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgY29tcGFyZUNsaW1hdGVIdmFjTW9kZXMgPSAobW9kZTE6IEh2YWNNb2RlLCBtb2RlMjogSHZhY01vZGUpID0+XG4gIGh2YWNNb2RlT3JkZXJpbmdbbW9kZTFdIC0gaHZhY01vZGVPcmRlcmluZ1ttb2RlMl07XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRJbnB1dFNlbGVjdE9wdGlvbiA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5OiBzdHJpbmcsXG4gIG9wdGlvbjogc3RyaW5nXG4pID0+XG4gIGhhc3MuY2FsbFNlcnZpY2UoXCJpbnB1dF9zZWxlY3RcIiwgXCJzZWxlY3Rfb3B0aW9uXCIsIHtcbiAgICBvcHRpb24sXG4gICAgZW50aXR5X2lkOiBlbnRpdHksXG4gIH0pO1xuIiwiaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG4vKiBlc2xpbnQtZW5hYmxlIG5vLWJpdHdpc2UgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdmVyRW50aXR5IHtcbiAgY29uc3RydWN0b3IoaGFzcywgc3RhdGVPYmopIHtcbiAgICB0aGlzLmhhc3MgPSBoYXNzO1xuICAgIHRoaXMuc3RhdGVPYmogPSBzdGF0ZU9iajtcbiAgICB0aGlzLl9hdHRyID0gc3RhdGVPYmouYXR0cmlidXRlcztcbiAgICB0aGlzLl9mZWF0ID0gdGhpcy5fYXR0ci5zdXBwb3J0ZWRfZmVhdHVyZXM7XG4gIH1cblxuICBnZXQgaXNGdWxseU9wZW4oKSB7XG4gICAgaWYgKHRoaXMuX2F0dHIuY3VycmVudF9wb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0ci5jdXJyZW50X3Bvc2l0aW9uID09PSAxMDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcIm9wZW5cIjtcbiAgfVxuXG4gIGdldCBpc0Z1bGx5Q2xvc2VkKCkge1xuICAgIGlmICh0aGlzLl9hdHRyLmN1cnJlbnRfcG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dHIuY3VycmVudF9wb3NpdGlvbiA9PT0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiY2xvc2VkXCI7XG4gIH1cblxuICBnZXQgaXNGdWxseU9wZW5UaWx0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLmN1cnJlbnRfdGlsdF9wb3NpdGlvbiA9PT0gMTAwO1xuICB9XG5cbiAgZ2V0IGlzRnVsbHlDbG9zZWRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLmN1cnJlbnRfdGlsdF9wb3NpdGlvbiA9PT0gMDtcbiAgfVxuXG4gIGdldCBpc09wZW5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwib3BlbmluZ1wiO1xuICB9XG5cbiAgZ2V0IGlzQ2xvc2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJjbG9zaW5nXCI7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNPcGVuKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMSk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNDbG9zZSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDIpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA0KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1N0b3AoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA4KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c09wZW5UaWx0KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTYpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzQ2xvc2VUaWx0KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMzIpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU3RvcFRpbHQoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA2NCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTZXRUaWx0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxMjgpO1xuICB9XG5cbiAgZ2V0IGlzVGlsdE9ubHkoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNDb3ZlciA9XG4gICAgICB0aGlzLnN1cHBvcnRzT3BlbiB8fCB0aGlzLnN1cHBvcnRzQ2xvc2UgfHwgdGhpcy5zdXBwb3J0c1N0b3A7XG4gICAgY29uc3Qgc3VwcG9ydHNUaWx0ID1cbiAgICAgIHRoaXMuc3VwcG9ydHNPcGVuVGlsdCB8fCB0aGlzLnN1cHBvcnRzQ2xvc2VUaWx0IHx8IHRoaXMuc3VwcG9ydHNTdG9wVGlsdDtcbiAgICByZXR1cm4gc3VwcG9ydHNUaWx0ICYmICFzdXBwb3J0c0NvdmVyO1xuICB9XG5cbiAgb3BlbkNvdmVyKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJvcGVuX2NvdmVyXCIpO1xuICB9XG5cbiAgY2xvc2VDb3ZlcigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwiY2xvc2VfY292ZXJcIik7XG4gIH1cblxuICBzdG9wQ292ZXIoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInN0b3BfY292ZXJcIik7XG4gIH1cblxuICBvcGVuQ292ZXJUaWx0KCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJvcGVuX2NvdmVyX3RpbHRcIik7XG4gIH1cblxuICBjbG9zZUNvdmVyVGlsdCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwiY2xvc2VfY292ZXJfdGlsdFwiKTtcbiAgfVxuXG4gIHN0b3BDb3ZlclRpbHQoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInN0b3BfY292ZXJfdGlsdFwiKTtcbiAgfVxuXG4gIHNldENvdmVyUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2V0X2NvdmVyX3Bvc2l0aW9uXCIsIHsgcG9zaXRpb24gfSk7XG4gIH1cblxuICBzZXRDb3ZlclRpbHRQb3NpdGlvbih0aWx0UG9zaXRpb24pIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2V0X2NvdmVyX3RpbHRfcG9zaXRpb25cIiwge1xuICAgICAgdGlsdF9wb3NpdGlvbjogdGlsdFBvc2l0aW9uLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gaGVscGVyIG1ldGhvZFxuXG4gIGNhbGxTZXJ2aWNlKHNlcnZpY2UsIGRhdGEgPSB7fSkge1xuICAgIGRhdGEuZW50aXR5X2lkID0gdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQ7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiY292ZXJcIiwgc2VydmljZSwgZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzT3BlbiA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxKTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzQ2xvc2UgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMik7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1NldFBvc2l0aW9uID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNTdG9wID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDgpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNPcGVuVGlsdCA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxNik7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Nsb3NlVGlsdCA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAzMik7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1N0b3BUaWx0ID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDY0KTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzU2V0VGlsdFBvc2l0aW9uID0gKHN0YXRlT2JqKSA9PlxuICBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDEyOCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RpbHRPbmx5KHN0YXRlT2JqKSB7XG4gIGNvbnN0IHN1cHBvcnRzQ292ZXIgPVxuICAgIHN1cHBvcnRzT3BlbihzdGF0ZU9iaikgfHwgc3VwcG9ydHNDbG9zZShzdGF0ZU9iaikgfHwgc3VwcG9ydHNTdG9wKHN0YXRlT2JqKTtcbiAgY29uc3Qgc3VwcG9ydHNUaWx0ID1cbiAgICBzdXBwb3J0c09wZW5UaWx0KHN0YXRlT2JqKSB8fFxuICAgIHN1cHBvcnRzQ2xvc2VUaWx0KHN0YXRlT2JqKSB8fFxuICAgIHN1cHBvcnRzU3RvcFRpbHQoc3RhdGVPYmopO1xuICByZXR1cm4gc3VwcG9ydHNUaWx0ICYmICFzdXBwb3J0c0NvdmVyO1xufVxuIiwiaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVBsYXllckVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgdGhpcy5oYXNzID0gaGFzcztcbiAgICB0aGlzLnN0YXRlT2JqID0gc3RhdGVPYmo7XG4gICAgdGhpcy5fYXR0ciA9IHN0YXRlT2JqLmF0dHJpYnV0ZXM7XG4gICAgdGhpcy5fZmVhdCA9IHRoaXMuX2F0dHIuc3VwcG9ydGVkX2ZlYXR1cmVzO1xuICB9XG5cbiAgZ2V0IGlzT2ZmKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcIm9mZlwiO1xuICB9XG5cbiAgZ2V0IGlzSWRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJpZGxlXCI7XG4gIH1cblxuICBnZXQgaXNNdXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5pc192b2x1bWVfbXV0ZWQ7XG4gIH1cblxuICBnZXQgaXNQYXVzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwicGF1c2VkXCI7XG4gIH1cblxuICBnZXQgaXNQbGF5aW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcInBsYXlpbmdcIjtcbiAgfVxuXG4gIGdldCBpc011c2ljKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLm1lZGlhX2NvbnRlbnRfdHlwZSA9PT0gXCJtdXNpY1wiO1xuICB9XG5cbiAgZ2V0IGlzVFZTaG93KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLm1lZGlhX2NvbnRlbnRfdHlwZSA9PT0gXCJ0dnNob3dcIjtcbiAgfVxuXG4gIGdldCBoYXNNZWRpYUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFtcInBsYXlpbmdcIiwgXCJwYXVzZWRcIiwgXCJ1bmtub3duXCIsIFwib25cIl0uaW5kZXhPZih0aGlzLnN0YXRlT2JqLnN0YXRlKSAhPT0gLTFcbiAgICApO1xuICB9XG5cbiAgZ2V0IHZvbHVtZVNsaWRlclZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLnZvbHVtZV9sZXZlbCAqIDEwMDtcbiAgfVxuXG4gIGdldCBzaG93UHJvZ3Jlc3MoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzUGxheWluZyB8fCB0aGlzLmlzUGF1c2VkKSAmJlxuICAgICAgXCJtZWRpYV9kdXJhdGlvblwiIGluIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcyAmJlxuICAgICAgXCJtZWRpYV9wb3NpdGlvblwiIGluIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcyAmJlxuICAgICAgXCJtZWRpYV9wb3NpdGlvbl91cGRhdGVkX2F0XCIgaW4gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzXG4gICAgKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50UHJvZ3Jlc3MoKSB7XG4gICAgdmFyIHByb2dyZXNzID0gdGhpcy5fYXR0ci5tZWRpYV9wb3NpdGlvbjtcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgIHByb2dyZXNzICs9XG4gICAgICAgIChEYXRlLm5vdygpIC1cbiAgICAgICAgICBuZXcgRGF0ZSh0aGlzLl9hdHRyLm1lZGlhX3Bvc2l0aW9uX3VwZGF0ZWRfYXQpLmdldFRpbWUoKSkgL1xuICAgICAgICAxMDAwLjA7XG4gICAgfVxuICAgIHJldHVybiBwcm9ncmVzcztcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1BhdXNlKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMSk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNWb2x1bWVTZXQoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA0KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1ZvbHVtZU11dGUoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA4KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1ByZXZpb3VzVHJhY2soKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxNik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNOZXh0VHJhY2soKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAzMik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNUdXJuT24oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxMjgpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzVHVybk9mZigpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDI1Nik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNQbGF5TWVkaWEoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA1MTIpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzVm9sdW1lQnV0dG9ucygpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDEwMjQpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU2VsZWN0U291cmNlKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMjA0OCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTZWxlY3RTb3VuZE1vZGUoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA2NTUzNik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNQbGF5KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTYzODQpO1xuICB9XG5cbiAgZ2V0IHByaW1hcnlUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5tZWRpYV90aXRsZTtcbiAgfVxuXG4gIGdldCBzZWNvbmRhcnlUaXRsZSgpIHtcbiAgICBpZiAodGhpcy5pc011c2ljKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0ci5tZWRpYV9hcnRpc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzVFZTaG93KSB7XG4gICAgICB2YXIgdGV4dCA9IHRoaXMuX2F0dHIubWVkaWFfc2VyaWVzX3RpdGxlO1xuXG4gICAgICBpZiAodGhpcy5fYXR0ci5tZWRpYV9zZWFzb24pIHtcbiAgICAgICAgdGV4dCArPSBcIiBTXCIgKyB0aGlzLl9hdHRyLm1lZGlhX3NlYXNvbjtcblxuICAgICAgICBpZiAodGhpcy5fYXR0ci5tZWRpYV9lcGlzb2RlKSB7XG4gICAgICAgICAgdGV4dCArPSBcIkVcIiArIHRoaXMuX2F0dHIubWVkaWFfZXBpc29kZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F0dHIuYXBwX25hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRyLmFwcF9uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGdldCBzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuc291cmNlO1xuICB9XG5cbiAgZ2V0IHNvdXJjZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuc291cmNlX2xpc3Q7XG4gIH1cblxuICBnZXQgc291bmRNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLnNvdW5kX21vZGU7XG4gIH1cblxuICBnZXQgc291bmRNb2RlTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5zb3VuZF9tb2RlX2xpc3Q7XG4gIH1cblxuICBtZWRpYVBsYXlQYXVzZSgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwibWVkaWFfcGxheV9wYXVzZVwiKTtcbiAgfVxuXG4gIG5leHRUcmFjaygpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwibWVkaWFfbmV4dF90cmFja1wiKTtcbiAgfVxuXG4gIHBsYXliYWNrQ29udHJvbCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwibWVkaWFfcGxheV9wYXVzZVwiKTtcbiAgfVxuXG4gIHByZXZpb3VzVHJhY2soKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm1lZGlhX3ByZXZpb3VzX3RyYWNrXCIpO1xuICB9XG5cbiAgc2V0Vm9sdW1lKHZvbHVtZSkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ2b2x1bWVfc2V0XCIsIHsgdm9sdW1lX2xldmVsOiB2b2x1bWUgfSk7XG4gIH1cblxuICB0b2dnbGVQb3dlcigpIHtcbiAgICBpZiAodGhpcy5pc09mZikge1xuICAgICAgdGhpcy50dXJuT24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50dXJuT2ZmKCk7XG4gICAgfVxuICB9XG5cbiAgdHVybk9mZigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwidHVybl9vZmZcIik7XG4gIH1cblxuICB0dXJuT24oKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInR1cm5fb25cIik7XG4gIH1cblxuICB2b2x1bWVEb3duKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ2b2x1bWVfZG93blwiKTtcbiAgfVxuXG4gIHZvbHVtZU11dGUobXV0ZSkge1xuICAgIGlmICghdGhpcy5zdXBwb3J0c1ZvbHVtZU11dGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11dGluZyB2b2x1bWUgbm90IHN1cHBvcnRlZFwiKTtcbiAgICB9XG4gICAgdGhpcy5jYWxsU2VydmljZShcInZvbHVtZV9tdXRlXCIsIHsgaXNfdm9sdW1lX211dGVkOiBtdXRlIH0pO1xuICB9XG5cbiAgdm9sdW1lVXAoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInZvbHVtZV91cFwiKTtcbiAgfVxuXG4gIHNlbGVjdFNvdXJjZShzb3VyY2UpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2VsZWN0X3NvdXJjZVwiLCB7IHNvdXJjZSB9KTtcbiAgfVxuXG4gIHNlbGVjdFNvdW5kTW9kZShzb3VuZE1vZGUpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2VsZWN0X3NvdW5kX21vZGVcIiwgeyBzb3VuZF9tb2RlOiBzb3VuZE1vZGUgfSk7XG4gIH1cblxuICAvLyBoZWxwZXIgbWV0aG9kXG5cbiAgY2FsbFNlcnZpY2Uoc2VydmljZSwgZGF0YSA9IHt9KSB7XG4gICAgZGF0YS5lbnRpdHlfaWQgPSB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZDtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJtZWRpYV9wbGF5ZXJcIiwgc2VydmljZSwgZGF0YSk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQVVBO0FBQUE7QUFBQTs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUE4REE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7OztBQWhJQTtBQUNBO0FBK0NBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTs7OztBQTVEQTtBQUNBO0FBa0lBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFvREE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQTlFQTtBQUNBO0FBaUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQVlBOzs7O0FBbERBO0FBQ0E7QUFpRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQXFEQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBL0VBO0FBQ0E7QUFrQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7Ozs7QUFuREE7QUFDQTtBQWtGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQXVEQTs7QUFDQTtBQXREQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVRBO0FBWUE7QUFFQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQXREQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBQ0E7QUEwREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUE1Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFsQkE7QUFDQTtBQThDQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBRUE7QUFDQTtBQWVBO0FBQ0E7QUFBQTtBQUlBO0FBSUE7QUFBQTtBQVFBOzs7O0FBSUE7O0FBQUE7QUFDQTs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU9BO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUN2RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUNBO0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBdUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTs7Ozs7O0FBNUVBO0FBd0hBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BKQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBc0pBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQXJOQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=