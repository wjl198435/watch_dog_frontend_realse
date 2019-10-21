(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog"],{

/***/ "./src/common/const.ts":
/*!*****************************!*\
  !*** ./src/common/const.ts ***!
  \*****************************/
/*! exports provided: DEFAULT_DOMAIN_ICON, DEFAULT_PANEL, DOMAINS_WITH_CARD, DOMAINS_WITH_MORE_INFO, DOMAINS_HIDE_MORE_INFO, DOMAINS_MORE_INFO_NO_HISTORY, STATES_OFF, DOMAINS_TOGGLE, UNIT_C, UNIT_F, DEFAULT_VIEW_ENTITY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DOMAIN_ICON", function() { return DEFAULT_DOMAIN_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PANEL", function() { return DEFAULT_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_CARD", function() { return DOMAINS_WITH_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_MORE_INFO", function() { return DOMAINS_WITH_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_HIDE_MORE_INFO", function() { return DOMAINS_HIDE_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_MORE_INFO_NO_HISTORY", function() { return DOMAINS_MORE_INFO_NO_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_OFF", function() { return STATES_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_TOGGLE", function() { return DOMAINS_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_C", function() { return UNIT_C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_F", function() { return UNIT_F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIEW_ENTITY_ID", function() { return DEFAULT_VIEW_ENTITY_ID; });
/** Constants to be used in the frontend. */
// Constants should be alphabetically sorted by name.
// Arrays with values should be alphabetically sorted if order doesn't matter.
// Each constant should have a description what it is supposed to be used for.
/** Icon to use when no icon specified for domain. */
var DEFAULT_DOMAIN_ICON = "hass:bookmark";
/** Panel to show when no panel is picked. */
var DEFAULT_PANEL = "lovelace";
/** Domains that have a state card. */
var DOMAINS_WITH_CARD = [
    "climate",
    "cover",
    "configurator",
    "input_select",
    "input_number",
    "input_text",
    "lock",
    "media_player",
    "scene",
    "script",
    "timer",
    "vacuum",
    "water_heater",
    "weblink",
];
/** Domains with separate more info dialog. */
var DOMAINS_WITH_MORE_INFO = [
    "alarm_control_panel",
    "automation",
    "camera",
    "climate",
    "configurator",
    "cover",
    "fan",
    "group",
    "history_graph",
    "input_datetime",
    "light",
    "lock",
    "media_player",
    "script",
    "sun",
    "timer",
    "updater",
    "vacuum",
    "water_heater",
    "weather",
];
/** Domains that show no more info dialog. */
var DOMAINS_HIDE_MORE_INFO = [
    "input_number",
    "input_select",
    "input_text",
    "scene",
    "weblink",
];
/** Domains that should have the history hidden in the more info dialog. */
var DOMAINS_MORE_INFO_NO_HISTORY = [
    "camera",
    "configurator",
    "history_graph",
    "scene",
];
/** States that we consider "off". */
var STATES_OFF = ["closed", "locked", "off"];
/** Domains where we allow toggle in Lovelace. */
var DOMAINS_TOGGLE = new Set([
    "fan",
    "input_boolean",
    "light",
    "switch",
    "group",
    "automation",
]);
/** Temperature units. */
var UNIT_C = "°C";
var UNIT_F = "°F";
/** Entity ID of the default view. */
var DEFAULT_VIEW_ENTITY_ID = "group.default_view";


/***/ }),

/***/ "./src/common/entity/compute_domain.ts":
/*!*********************************************!*\
  !*** ./src/common/entity/compute_domain.ts ***!
  \*********************************************/
/*! exports provided: computeDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeDomain", function() { return computeDomain; });
var computeDomain = function (entityId) {
    return entityId.substr(0, entityId.indexOf("."));
};


/***/ }),

/***/ "./src/common/entity/feature_class_names.ts":
/*!**************************************************!*\
  !*** ./src/common/entity/feature_class_names.ts ***!
  \**************************************************/
/*! exports provided: featureClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureClassNames", function() { return featureClassNames; });
/* harmony import */ var _supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supports-feature */ "./src/common/entity/supports-feature.ts");

// Expects classNames to be an object mapping feature-bit -> className
var featureClassNames = function (stateObj, classNames) {
    if (!stateObj || !stateObj.attributes.supported_features) {
        return "";
    }
    return Object.keys(classNames)
        .map(function (feature) {
        return Object(_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, Number(feature)) ? classNames[feature] : "";
    })
        .filter(function (attr) { return attr !== ""; })
        .join(" ");
};


/***/ }),

/***/ "./src/components/ha-attributes.js":
/*!*****************************************!*\
  !*** ./src/components/ha-attributes.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/hass-attributes-util */ "./src/util/hass-attributes-util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        .data-entry .value {\n          max-width: 200px;\n          overflow-wrap: break-word;\n        }\n        .attribution {\n          color: var(--secondary-text-color);\n          text-align: right;\n        }\n      </style>\n\n      <div class=\"layout vertical\">\n        <template\n          is=\"dom-repeat\"\n          items=\"[[computeDisplayAttributes(stateObj, filtersArray)]]\"\n          as=\"attribute\"\n        >\n          <div class=\"data-entry layout justified horizontal\">\n            <div class=\"key\">[[formatAttribute(attribute)]]</div>\n            <div class=\"value\">\n              [[formatAttributeValue(stateObj, attribute)]]\n            </div>\n          </div>\n        </template>\n        <div class=\"attribution\" hidden$=\"[[!computeAttribution(stateObj)]]\">\n          [[computeAttribution(stateObj)]]\n        </div>\n      </div>\n    "]);

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






var HaAttributes =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaAttributes, _PolymerElement);

  function HaAttributes() {
    _classCallCheck(this, HaAttributes);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaAttributes).apply(this, arguments));
  }

  _createClass(HaAttributes, [{
    key: "computeFiltersArray",
    value: function computeFiltersArray(extraFilters) {
      return Object.keys(_util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__["default"].LOGIC_STATE_ATTRIBUTES).concat(extraFilters ? extraFilters.split(",") : []);
    }
  }, {
    key: "computeDisplayAttributes",
    value: function computeDisplayAttributes(stateObj, filtersArray) {
      if (!stateObj) {
        return [];
      }

      return Object.keys(stateObj.attributes).filter(function (key) {
        return filtersArray.indexOf(key) === -1;
      });
    }
  }, {
    key: "formatAttribute",
    value: function formatAttribute(attribute) {
      return attribute.replace(/_/g, " ");
    }
  }, {
    key: "formatAttributeValue",
    value: function formatAttributeValue(stateObj, attribute) {
      var value = stateObj.attributes[attribute];
      if (value === null) return "-";

      if (Array.isArray(value)) {
        return value.join(", ");
      }

      return value instanceof Object ? JSON.stringify(value, null, 2) : value;
    }
  }, {
    key: "computeAttribution",
    value: function computeAttribution(stateObj) {
      return stateObj.attributes.attribution;
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
        stateObj: {
          type: Object
        },
        extraFilters: {
          type: String,
          value: ""
        },
        filtersArray: {
          type: Array,
          computed: "computeFiltersArray(extraFilters)"
        }
      };
    }
  }]);

  return HaAttributes;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-attributes", HaAttributes);

/***/ }),

/***/ "./src/components/ha-camera-stream.ts":
/*!********************************************!*\
  !*** ./src/components/ha-camera-stream.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/camera */ "./src/data/camera.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");






var HaCameraStream = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaCameraStream, _super);
    function HaCameraStream() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showControls = false;
        _this._attached = false;
        // We keep track if we should force MJPEG with a string
        // that way it automatically resets if we change entity.
        _this._forceMJPEG = undefined;
        return _this;
    }
    HaCameraStream.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this._attached = true;
    };
    HaCameraStream.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this._attached = false;
    };
    HaCameraStream.prototype.render = function () {
        if (!this.stateObj || !this._attached) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n    "], ["\n      ",
            "\n    "])),  false || this._shouldRenderMJPEG
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <img\n              @load=", "\n              .src=", "\n              .alt=", "\n            />\n          "], ["\n            <img\n              @load=", "\n              .src=",
                "\n              .alt=",
                "\n            />\n          "])), this._elementResized,  false
                ? undefined
                : Object(_data_camera__WEBPACK_IMPORTED_MODULE_4__["computeMJPEGStreamUrl"])(this.stateObj), "Preview of the " + Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(this.stateObj) + " camera.") : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <video\n              autoplay\n              muted\n              playsinline\n              ?controls=", "\n              @loadeddata=", "\n            ></video>\n          "], ["\n            <video\n              autoplay\n              muted\n              playsinline\n              ?controls=", "\n              @loadeddata=", "\n            ></video>\n          "])), this.showControls, this._elementResized));
    };
    HaCameraStream.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        var stateObjChanged = changedProps.has("stateObj");
        var attachedChanged = changedProps.has("_attached");
        var oldState = changedProps.get("stateObj");
        var oldEntityId = oldState ? oldState.entity_id : undefined;
        var curEntityId = this.stateObj ? this.stateObj.entity_id : undefined;
        if ((!stateObjChanged && !attachedChanged) ||
            (stateObjChanged && oldEntityId === curEntityId)) {
            return;
        }
        // If we are no longer attached, destroy polyfill.
        if (attachedChanged && !this._attached) {
            this._destroyPolyfill();
            return;
        }
        // Nothing to do if we are render MJPEG.
        if (this._shouldRenderMJPEG) {
            return;
        }
        // Tear down existing polyfill, if available
        this._destroyPolyfill();
        if (curEntityId) {
            this._startHls();
        }
    };
    Object.defineProperty(HaCameraStream.prototype, "_shouldRenderMJPEG", {
        get: function () {
            return (this._forceMJPEG === this.stateObj.entity_id ||
                !this.hass.config.components.includes("stream") ||
                !Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__["supportsFeature"])(this.stateObj, _data_camera__WEBPACK_IMPORTED_MODULE_4__["CAMERA_SUPPORT_STREAM"]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaCameraStream.prototype, "_videoEl", {
        get: function () {
            return this.shadowRoot.querySelector("video");
        },
        enumerable: true,
        configurable: true
    });
    HaCameraStream.prototype._startHls = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var Hls, hlsSupported, videoEl, url, err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __webpack_require__.e(/*! import() | hls.js */ "vendors~hls.js").then(__webpack_require__.t.bind(null, /*! hls.js */ "./node_modules/hls.js/dist/hls.js", 7))];
                    case 1:
                        Hls = (_a.sent())
                            .default;
                        hlsSupported = Hls.isSupported();
                        videoEl = this._videoEl;
                        if (!hlsSupported) {
                            hlsSupported =
                                videoEl.canPlayType("application/vnd.apple.mpegurl") !== "";
                        }
                        if (!hlsSupported) {
                            this._forceMJPEG = this.stateObj.entity_id;
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Object(_data_camera__WEBPACK_IMPORTED_MODULE_4__["fetchStreamUrl"])(this.hass, this.stateObj.entity_id)];
                    case 3:
                        url = (_a.sent()).url;
                        if (Hls.isSupported()) {
                            this._renderHLSPolyfill(videoEl, Hls, url);
                        }
                        else {
                            this._renderHLSNative(videoEl, url);
                        }
                        return [2 /*return*/];
                    case 4:
                        err_1 = _a.sent();
                        // Fails if we were unable to get a stream
                        // tslint:disable-next-line
                        console.error(err_1);
                        this._forceMJPEG = this.stateObj.entity_id;
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HaCameraStream.prototype._renderHLSNative = function (videoEl, url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        videoEl.src = url;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                return videoEl.addEventListener("loadedmetadata", resolve);
                            })];
                    case 1:
                        _a.sent();
                        videoEl.play();
                        return [2 /*return*/];
                }
            });
        });
    };
    HaCameraStream.prototype._renderHLSPolyfill = function (videoEl, 
    // tslint:disable-next-line
    Hls, url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var hls;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                hls = new Hls();
                this._hlsPolyfillInstance = hls;
                hls.attachMedia(videoEl);
                hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                    hls.loadSource(url);
                });
                return [2 /*return*/];
            });
        });
    };
    HaCameraStream.prototype._elementResized = function () {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "iron-resize");
    };
    HaCameraStream.prototype._destroyPolyfill = function () {
        if (this._hlsPolyfillInstance) {
            this._hlsPolyfillInstance.destroy();
            this._hlsPolyfillInstance = undefined;
        }
    };
    Object.defineProperty(HaCameraStream, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host,\n      img,\n      video {\n        display: block;\n      }\n\n      img,\n      video {\n        width: 100%;\n      }\n    "], ["\n      :host,\n      img,\n      video {\n        display: block;\n      }\n\n      img,\n      video {\n        width: 100%;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaCameraStream.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaCameraStream.prototype, "stateObj", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
    ], HaCameraStream.prototype, "showControls", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaCameraStream.prototype, "_attached", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaCameraStream.prototype, "_forceMJPEG", void 0);
    HaCameraStream = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-camera-stream")
    ], HaCameraStream);
    return HaCameraStream;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/ha-climate-control.js":
/*!**********************************************!*\
  !*** ./src/components/ha-climate-control.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        /* local DOM styles go here */\n        :host {\n          @apply --layout-flex;\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n        }\n        .in-flux#target_temperature {\n          color: var(--google-red-500);\n        }\n        #target_temperature {\n          @apply --layout-self-center;\n          font-size: 200%;\n          direction: ltr;\n        }\n        .control-buttons {\n          font-size: 200%;\n          text-align: right;\n        }\n        paper-icon-button {\n          height: 48px;\n          width: 48px;\n        }\n      </style>\n\n      <!-- local DOM goes here -->\n      <div id=\"target_temperature\">[[value]] [[units]]</div>\n      <div class=\"control-buttons\">\n        <div>\n          <paper-icon-button\n            icon=\"hass:chevron-up\"\n            on-click=\"incrementValue\"\n          ></paper-icon-button>\n        </div>\n        <div>\n          <paper-icon-button\n            icon=\"hass:chevron-down\"\n            on-click=\"decrementValue\"\n          ></paper-icon-button>\n        </div>\n      </div>\n    "]);

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

var HaClimateControl =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaClimateControl, _EventsMixin);

  function HaClimateControl() {
    _classCallCheck(this, HaClimateControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaClimateControl).apply(this, arguments));
  }

  _createClass(HaClimateControl, [{
    key: "temperatureStateInFlux",
    value: function temperatureStateInFlux(inFlux) {
      this.$.target_temperature.classList.toggle("in-flux", inFlux);
    }
  }, {
    key: "_round",
    value: function _round(val) {
      // round value to precision derived from step
      // insired by https://github.com/soundar24/roundSlider/blob/master/src/roundslider.js
      var s = this.step.toString().split(".");
      return s[1] ? parseFloat(val.toFixed(s[1].length)) : Math.round(val);
    }
  }, {
    key: "incrementValue",
    value: function incrementValue() {
      var newval = this._round(this.value + this.step);

      if (this.value < this.max) {
        this.last_changed = Date.now();
        this.temperatureStateInFlux(true);
      }

      if (newval <= this.max) {
        // If no initial target_temp
        // this forces control to start
        // from the min configured instead of 0
        if (newval <= this.min) {
          this.value = this.min;
        } else {
          this.value = newval;
        }
      } else {
        this.value = this.max;
      }
    }
  }, {
    key: "decrementValue",
    value: function decrementValue() {
      var newval = this._round(this.value - this.step);

      if (this.value > this.min) {
        this.last_changed = Date.now();
        this.temperatureStateInFlux(true);
      }

      if (newval >= this.min) {
        this.value = newval;
      } else {
        this.value = this.min;
      }
    }
  }, {
    key: "valueChanged",
    value: function valueChanged() {
      var _this = this;

      // when the last_changed timestamp is changed,
      // trigger a potential event fire in
      // the future, as long as last changed is far enough in the
      // past.
      if (this.last_changed) {
        window.setTimeout(function () {
          var now = Date.now();

          if (now - _this.last_changed >= 2000) {
            _this.fire("change");

            _this.temperatureStateInFlux(false);

            _this.last_changed = null;
          }
        }, 2010);
      }
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
        value: {
          type: Number,
          observer: "valueChanged"
        },
        units: {
          type: String
        },
        min: {
          type: Number
        },
        max: {
          type: Number
        },
        step: {
          type: Number,
          value: 1
        }
      };
    }
  }]);

  return HaClimateControl;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("ha-climate-control", HaClimateControl);

/***/ }),

/***/ "./src/components/ha-color-picker.js":
/*!*******************************************!*\
  !*** ./src/components/ha-color-picker.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          user-select: none;\n          -webkit-user-select: none;\n        }\n\n        #canvas {\n          position: relative;\n          width: 100%;\n          max-width: 330px;\n        }\n        #canvas > * {\n          display: block;\n        }\n        #interactionLayer {\n          color: white;\n          position: absolute;\n          cursor: crosshair;\n          width: 100%;\n          height: 100%;\n          overflow: visible;\n        }\n        #backgroundLayer {\n          width: 100%;\n          overflow: visible;\n          --wheel-bordercolor: var(--ha-color-picker-wheel-bordercolor, white);\n          --wheel-borderwidth: var(--ha-color-picker-wheel-borderwidth, 3);\n          --wheel-shadow: var(\n            --ha-color-picker-wheel-shadow,\n            rgb(15, 15, 15) 10px 5px 5px 0px\n          );\n        }\n\n        #marker {\n          fill: currentColor;\n          stroke: var(--ha-color-picker-marker-bordercolor, white);\n          stroke-width: var(--ha-color-picker-marker-borderwidth, 3);\n          filter: url(#marker-shadow);\n        }\n        .dragging #marker {\n        }\n\n        #colorTooltip {\n          display: none;\n          fill: currentColor;\n          stroke: var(--ha-color-picker-tooltip-bordercolor, white);\n          stroke-width: var(--ha-color-picker-tooltip-borderwidth, 3);\n        }\n\n        .touch.dragging #colorTooltip {\n          display: inherit;\n        }\n      </style>\n      <div id=\"canvas\">\n        <svg id=\"interactionLayer\">\n          <defs>\n            <filter\n              id=\"marker-shadow\"\n              x=\"-50%\"\n              y=\"-50%\"\n              width=\"200%\"\n              height=\"200%\"\n              filterUnits=\"objectBoundingBox\"\n            >\n              <feOffset\n                result=\"offOut\"\n                in=\"SourceAlpha\"\n                dx=\"2\"\n                dy=\"2\"\n              ></feOffset>\n              <feGaussianBlur\n                result=\"blurOut\"\n                in=\"offOut\"\n                stdDeviation=\"2\"\n              ></feGaussianBlur>\n              <feComponentTransfer in=\"blurOut\" result=\"alphaOut\">\n                <feFuncA type=\"linear\" slope=\"0.3\"></feFuncA>\n              </feComponentTransfer>\n              <feBlend\n                in=\"SourceGraphic\"\n                in2=\"alphaOut\"\n                mode=\"normal\"\n              ></feBlend>\n            </filter>\n          </defs>\n        </svg>\n        <canvas id=\"backgroundLayer\"></canvas>\n      </div>\n    "]);

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




/**
 * Color-picker custom element
 *
 * @appliesMixin EventsMixin
 */

var HaColorPicker =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaColorPicker, _EventsMixin);

  function HaColorPicker() {
    _classCallCheck(this, HaColorPicker);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaColorPicker).apply(this, arguments));
  }

  _createClass(HaColorPicker, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaColorPicker.prototype), "ready", this).call(this);

      this.setupLayers();
      this.drawColorWheel();
      this.drawMarker();
      this.interactionLayer.addEventListener("mousedown", function (ev) {
        return _this.onMouseDown(ev);
      });
      this.interactionLayer.addEventListener("touchstart", function (ev) {
        return _this.onTouchStart(ev);
      });
    } // converts browser coordinates to canvas canvas coordinates
    // origin is wheel center
    // returns {x: X, y: Y} object

  }, {
    key: "convertToCanvasCoordinates",
    value: function convertToCanvasCoordinates(clientX, clientY) {
      var svgPoint = this.interactionLayer.createSVGPoint();
      svgPoint.x = clientX;
      svgPoint.y = clientY;
      var cc = svgPoint.matrixTransform(this.interactionLayer.getScreenCTM().inverse());
      return {
        x: cc.x,
        y: cc.y
      };
    } // Mouse events

  }, {
    key: "onMouseDown",
    value: function onMouseDown(ev) {
      var cc = this.convertToCanvasCoordinates(ev.clientX, ev.clientY); // return if we're not on the wheel

      if (!this.isInWheel(cc.x, cc.y)) {
        return;
      } // a mousedown in wheel is always a color select action


      this.onMouseSelect(ev); // allow dragging

      this.canvas.classList.add("mouse", "dragging");
      this.addEventListener("mousemove", this.onMouseSelect);
      this.addEventListener("mouseup", this.onMouseUp);
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      this.canvas.classList.remove("mouse", "dragging");
      this.removeEventListener("mousemove", this.onMouseSelect);
    }
  }, {
    key: "onMouseSelect",
    value: function onMouseSelect(ev) {
      var _this2 = this;

      requestAnimationFrame(function () {
        return _this2.processUserSelect(ev);
      });
    } // Touch events

  }, {
    key: "onTouchStart",
    value: function onTouchStart(ev) {
      var _this3 = this;

      var touch = ev.changedTouches[0];
      var cc = this.convertToCanvasCoordinates(touch.clientX, touch.clientY); // return if we're not on the wheel

      if (!this.isInWheel(cc.x, cc.y)) {
        return;
      }

      if (ev.target === this.marker) {
        // drag marker
        ev.preventDefault();
        this.canvas.classList.add("touch", "dragging");
        this.addEventListener("touchmove", this.onTouchSelect);
        this.addEventListener("touchend", this.onTouchEnd);
        return;
      } // don't fire color selection immediately,
      // wait for touchend and invalidate when we scroll


      this.tapBecameScroll = false;
      this.addEventListener("touchend", this.onTap);
      this.addEventListener("touchmove", function () {
        _this3.tapBecameScroll = true;
      }, {
        passive: true
      });
    }
  }, {
    key: "onTap",
    value: function onTap(ev) {
      if (this.tapBecameScroll) {
        return;
      }

      ev.preventDefault();
      this.onTouchSelect(ev);
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd() {
      this.canvas.classList.remove("touch", "dragging");
      this.removeEventListener("touchmove", this.onTouchSelect);
    }
  }, {
    key: "onTouchSelect",
    value: function onTouchSelect(ev) {
      var _this4 = this;

      requestAnimationFrame(function () {
        return _this4.processUserSelect(ev.changedTouches[0]);
      });
    }
    /*
     * General event/selection handling
     */
    // Process user input to color

  }, {
    key: "processUserSelect",
    value: function processUserSelect(ev) {
      var canvasXY = this.convertToCanvasCoordinates(ev.clientX, ev.clientY);
      var hs = this.getColor(canvasXY.x, canvasXY.y);
      this.onColorSelect(hs);
    } // apply color to marker position and canvas

  }, {
    key: "onColorSelect",
    value: function onColorSelect(hs) {
      var _this5 = this;

      this.setMarkerOnColor(hs); // marker always follows mounse 'raw' hs value (= mouse position)

      if (!this.ignoreSegments) {
        // apply segments if needed
        hs = this.applySegmentFilter(hs);
      } // always apply the new color to the interface / canvas


      this.applyColorToCanvas(hs); // throttling is applied to updating the exposed colors (properties)
      // and firing of events

      if (this.colorSelectIsThrottled) {
        // make sure we apply the last selected color
        // eventually after throttle limit has passed
        clearTimeout(this.ensureFinalSelect);
        this.ensureFinalSelect = setTimeout(function () {
          _this5.fireColorSelected(hs); // do it for the final time

        }, this.throttle);
        return;
      }

      this.fireColorSelected(hs); // do it

      this.colorSelectIsThrottled = true;
      setTimeout(function () {
        _this5.colorSelectIsThrottled = false;
      }, this.throttle);
    } // set color values and fire colorselected event

  }, {
    key: "fireColorSelected",
    value: function fireColorSelected(hs) {
      this.hsColor = hs;
      this.fire("colorselected", {
        hs: {
          h: hs.h,
          s: hs.s
        }
      });
    }
    /*
     * Interface updating
     */
    // set marker position to the given color

  }, {
    key: "setMarkerOnColor",
    value: function setMarkerOnColor(hs) {
      var dist = hs.s * this.radius;
      var theta = (hs.h - 180) / 180 * Math.PI;
      var markerdX = -dist * Math.cos(theta);
      var markerdY = -dist * Math.sin(theta);
      var translateString = "translate(".concat(markerdX, ",").concat(markerdY, ")");
      this.marker.setAttribute("transform", translateString);
      this.tooltip.setAttribute("transform", translateString);
    } // apply given color to interface elements

  }, {
    key: "applyColorToCanvas",
    value: function applyColorToCanvas(hs) {
      // we're not really converting hs to hsl here, but we keep it cheap
      // setting the color on the interactionLayer, the svg elements can inherit
      this.interactionLayer.style.color = "hsl(".concat(hs.h, ", 100%, ").concat(100 - hs.s * 50, "%)");
    }
  }, {
    key: "applyHsColor",
    value: function applyHsColor(hs) {
      // do nothing is we already have the same color
      if (this.hsColor && this.hsColor.h === hs.h && this.hsColor.s === hs.s) {
        return;
      }

      this.setMarkerOnColor(hs); // marker is always set on 'raw' hs position

      if (!this.ignoreSegments) {
        // apply segments if needed
        hs = this.applySegmentFilter(hs);
      }

      this.hsColor = hs; // always apply the new color to the interface / canvas

      this.applyColorToCanvas(hs);
    }
    /*
     * input processing helpers
     */
    // get angle (degrees)

  }, {
    key: "getAngle",
    value: function getAngle(dX, dY) {
      var theta = Math.atan2(-dY, -dX); // radians from the left edge, clockwise = positive

      var angle = theta / Math.PI * 180 + 180; // degrees, clockwise from right

      return angle;
    } // returns true when coordinates are in the colorwheel

  }, {
    key: "isInWheel",
    value: function isInWheel(x, y) {
      return this.getDistance(x, y) <= 1;
    } // returns distance from wheel center, 0 = center, 1 = edge, >1 = outside

  }, {
    key: "getDistance",
    value: function getDistance(dX, dY) {
      return Math.sqrt(dX * dX + dY * dY) / this.radius;
    }
    /*
     * Getting colors
     */

  }, {
    key: "getColor",
    value: function getColor(x, y) {
      var hue = this.getAngle(x, y); // degrees, clockwise from right

      var relativeDistance = this.getDistance(x, y); // edge of radius = 1

      var sat = Math.min(relativeDistance, 1); // Distance from center

      return {
        h: hue,
        s: sat
      };
    }
  }, {
    key: "applySegmentFilter",
    value: function applySegmentFilter(hs) {
      // apply hue segment steps
      if (this.hueSegments) {
        var angleStep = 360 / this.hueSegments;
        var halfAngleStep = angleStep / 2;
        hs.h -= halfAngleStep; // take the 'centered segemnts' into account

        if (hs.h < 0) {
          hs.h += 360;
        } // don't end up below 0


        var rest = hs.h % angleStep;
        hs.h -= rest - angleStep;
      } // apply saturation segment steps


      if (this.saturationSegments) {
        if (this.saturationSegments === 1) {
          hs.s = 1;
        } else {
          var segmentSize = 1 / this.saturationSegments;
          var saturationStep = 1 / (this.saturationSegments - 1);
          var calculatedSat = Math.floor(hs.s / segmentSize) * saturationStep;
          hs.s = Math.min(calculatedSat, 1);
        }
      }

      return hs;
    }
    /*
     * Drawing related stuff
     */

  }, {
    key: "setupLayers",
    value: function setupLayers() {
      this.canvas = this.$.canvas;
      this.backgroundLayer = this.$.backgroundLayer;
      this.interactionLayer = this.$.interactionLayer; // coordinate origin position (center of the wheel)

      this.originX = this.width / 2;
      this.originY = this.originX; // synchronise width/height coordinates

      this.backgroundLayer.width = this.width;
      this.backgroundLayer.height = this.height;
      this.interactionLayer.setAttribute("viewBox", "".concat(-this.originX, " ").concat(-this.originY, " ").concat(this.width, " ").concat(this.height));
    }
  }, {
    key: "drawColorWheel",
    value: function drawColorWheel() {
      /*
       *  Setting up all paremeters
       */
      var shadowColor;
      var shadowOffsetX;
      var shadowOffsetY;
      var shadowBlur;
      var context = this.backgroundLayer.getContext("2d"); // postioning and sizing

      var cX = this.originX;
      var cY = this.originY;
      var radius = this.radius;
      var counterClockwise = false; // styling of the wheel

      var wheelStyle = window.getComputedStyle(this.backgroundLayer, null);
      var borderWidth = parseInt(wheelStyle.getPropertyValue("--wheel-borderwidth"), 10);
      var borderColor = wheelStyle.getPropertyValue("--wheel-bordercolor").trim();
      var wheelShadow = wheelStyle.getPropertyValue("--wheel-shadow").trim(); // extract shadow properties from  CCS variable
      // the shadow should be defined as: "10px 5px 5px 0px COLOR"

      if (wheelShadow !== "none") {
        var values = wheelShadow.split("px ");
        shadowColor = values.pop();
        shadowOffsetX = parseInt(values[0], 10);
        shadowOffsetY = parseInt(values[1], 10);
        shadowBlur = parseInt(values[2], 10) || 0;
      }

      var borderRadius = radius + borderWidth / 2;
      var wheelRadius = radius;
      var shadowRadius = radius + borderWidth;
      /*
       *  Drawing functions
       */

      function drawCircle(hueSegments, saturationSegments) {
        hueSegments = hueSegments || 360; // reset 0 segments to 360

        var angleStep = 360 / hueSegments;
        var halfAngleStep = angleStep / 2; // center segments on color

        for (var angle = 0; angle <= 360; angle += angleStep) {
          var startAngle = (angle - halfAngleStep) * (Math.PI / 180);
          var endAngle = (angle + halfAngleStep + 1) * (Math.PI / 180);
          context.beginPath();
          context.moveTo(cX, cY);
          context.arc(cX, cY, wheelRadius, startAngle, endAngle, counterClockwise);
          context.closePath(); // gradient

          var gradient = context.createRadialGradient(cX, cY, 0, cX, cY, wheelRadius);
          var lightness = 100; // first gradient stop

          gradient.addColorStop(0, "hsl(".concat(angle, ", 100%, ").concat(lightness, "%)")); // segment gradient stops

          if (saturationSegments > 0) {
            var ratioStep = 1 / saturationSegments;
            var ratio = 0;

            for (var stop = 1; stop < saturationSegments; stop += 1) {
              var prevLighness = lightness;
              ratio = stop * ratioStep;
              lightness = 100 - 50 * ratio;
              gradient.addColorStop(ratio, "hsl(".concat(angle, ", 100%, ").concat(prevLighness, "%)"));
              gradient.addColorStop(ratio, "hsl(".concat(angle, ", 100%, ").concat(lightness, "%)"));
            }

            gradient.addColorStop(ratio, "hsl(".concat(angle, ", 100%, 50%)"));
          } // last gradient stop


          gradient.addColorStop(1, "hsl(".concat(angle, ", 100%, 50%)"));
          context.fillStyle = gradient;
          context.fill();
        }
      }

      function drawShadow() {
        context.save();
        context.beginPath();
        context.arc(cX, cY, shadowRadius, 0, 2 * Math.PI, false);
        context.shadowColor = shadowColor;
        context.shadowOffsetX = shadowOffsetX;
        context.shadowOffsetY = shadowOffsetY;
        context.shadowBlur = shadowBlur;
        context.fillStyle = "white";
        context.fill();
        context.restore();
      }

      function drawBorder() {
        context.beginPath();
        context.arc(cX, cY, borderRadius, 0, 2 * Math.PI, false);
        context.lineWidth = borderWidth;
        context.strokeStyle = borderColor;
        context.stroke();
      }
      /*
       *   Call the drawing functions
       *   draws the shadow, wheel and border
       */


      if (wheelStyle.shadow !== "none") {
        drawShadow();
      }

      drawCircle(this.hueSegments, this.saturationSegments);

      if (borderWidth > 0) {
        drawBorder();
      }
    }
    /*
     *   Draw the (draggable) marker and tooltip
     *   on the interactionLayer)
     */

  }, {
    key: "drawMarker",
    value: function drawMarker() {
      var svgElement = this.interactionLayer;
      var markerradius = this.radius * 0.08;
      var tooltipradius = this.radius * 0.15;
      var TooltipOffsetY = -(tooltipradius * 3);
      var TooltipOffsetX = 0;
      svgElement.marker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      svgElement.marker.setAttribute("id", "marker");
      svgElement.marker.setAttribute("r", markerradius);
      this.marker = svgElement.marker;
      svgElement.appendChild(svgElement.marker);
      svgElement.tooltip = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      svgElement.tooltip.setAttribute("id", "colorTooltip");
      svgElement.tooltip.setAttribute("r", tooltipradius);
      svgElement.tooltip.setAttribute("cx", TooltipOffsetX);
      svgElement.tooltip.setAttribute("cy", TooltipOffsetY);
      this.tooltip = svgElement.tooltip;
      svgElement.appendChild(svgElement.tooltip);
    }
  }, {
    key: "segmentationChange",
    value: function segmentationChange() {
      if (this.backgroundLayer) {
        this.drawColorWheel();
      }
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
        hsColor: {
          type: Object
        },
        // use these properties to update the state via attributes
        desiredHsColor: {
          type: Object,
          observer: "applyHsColor"
        },
        // width, height and radius apply to the coordinates of
        // of the canvas.
        // border width are relative to these numbers
        // the onscreen displayed size should be controlled with css
        // and should be the same or smaller
        width: {
          type: Number,
          value: 500
        },
        height: {
          type: Number,
          value: 500
        },
        radius: {
          type: Number,
          value: 225
        },
        // the amount segments for the hue
        // 0 = continuous gradient
        // other than 0 gives 'pie-pieces'
        hueSegments: {
          type: Number,
          value: 0,
          observer: "segmentationChange"
        },
        // the amount segments for the hue
        // 0 = continuous gradient
        // 1 = only fully saturated
        // > 1 = segments from white to fully saturated
        saturationSegments: {
          type: Number,
          value: 0,
          observer: "segmentationChange"
        },
        // set to true to make the segments purely esthetical
        // this allows selection off all collors, also
        // interpolated between the segments
        ignoreSegments: {
          type: Boolean,
          value: false
        },
        // throttle te amount of 'colorselected' events fired
        // value is timeout in milliseconds
        throttle: {
          type: Number,
          value: 500
        }
      };
    }
  }]);

  return HaColorPicker;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-color-picker", HaColorPicker);

/***/ }),

/***/ "./src/components/ha-icon.ts":
/*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
/*! exports provided: HaIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIcon", function() { return HaIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");


var ironIconClass = customElements.get("iron-icon");
var loaded = false;
var HaIcon = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaIcon, _super);
    function HaIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaIcon.prototype.listen = function (node, eventName, methodName) {
        _super.prototype.listen.call(this, node, eventName, methodName);
        if (!loaded && this._iconsetName === "mdi") {
            loaded = true;
            __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
        }
    };
    return HaIcon;
}(ironIconClass));

customElements.define("ha-icon", HaIcon);


/***/ }),

/***/ "./src/components/ha-labeled-slider.js":
/*!*********************************************!*\
  !*** ./src/components/ha-labeled-slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_paper_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n\n        .title {\n          margin-bottom: 16px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        ha-icon {\n          float: left;\n          margin-top: 4px;\n          opacity: var(--dark-secondary-opacity);\n        }\n\n        ha-paper-slider {\n          background-image: var(--ha-slider-background);\n        }\n      </style>\n\n      <div class=\"title\">[[caption]]</div>\n      <div class=\"extra-container\"><slot name=\"extra\"></slot></div>\n      <div class=\"slider-container\">\n        <ha-icon icon=\"[[icon]]\" hidden$=\"[[!icon]]\"></ha-icon>\n        <ha-paper-slider\n          min=\"[[min]]\"\n          max=\"[[max]]\"\n          step=\"[[step]]\"\n          pin=\"[[pin]]\"\n          disabled=\"[[disabled]]\"\n          disabled=\"[[disabled]]\"\n          value=\"{{value}}\"\n        ></ha-paper-slider>\n      </div>\n    "]);

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






var HaLabeledSlider =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaLabeledSlider, _PolymerElement);

  function HaLabeledSlider() {
    _classCallCheck(this, HaLabeledSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaLabeledSlider).apply(this, arguments));
  }

  _createClass(HaLabeledSlider, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        caption: String,
        disabled: Boolean,
        min: Number,
        max: Number,
        pin: Boolean,
        step: Number,
        extra: {
          type: Boolean,
          value: false
        },
        ignoreBarTouch: {
          type: Boolean,
          value: true
        },
        icon: {
          type: String,
          value: ""
        },
        value: {
          type: Number,
          notify: true
        }
      };
    }
  }]);

  return HaLabeledSlider;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-labeled-slider", HaLabeledSlider);

/***/ }),

/***/ "./src/components/ha-paper-icon-button-arrow-prev.ts":
/*!***********************************************************!*\
  !*** ./src/components/ha-paper-icon-button-arrow-prev.ts ***!
  \***********************************************************/
/*! exports provided: HaPaperIconButtonArrowPrev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperIconButtonArrowPrev", function() { return HaPaperIconButtonArrowPrev; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");


var paperIconButtonClass = customElements.get("paper-icon-button");
var HaPaperIconButtonArrowPrev = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaPaperIconButtonArrowPrev, _super);
    function HaPaperIconButtonArrowPrev() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaPaperIconButtonArrowPrev.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(function () {
            _this.icon =
                window.getComputedStyle(_this).direction === "ltr"
                    ? _this.hassio
                        ? "hassio:arrow-left"
                        : "hass:arrow-left"
                    : _this.hassio
                        ? "hassio:arrow-right"
                        : "hass:arrow-right";
        }, 100);
    };
    return HaPaperIconButtonArrowPrev;
}(paperIconButtonClass));

customElements.define("ha-paper-icon-button-arrow-prev", HaPaperIconButtonArrowPrev);


/***/ }),

/***/ "./src/components/ha-paper-slider.js":
/*!*******************************************!*\
  !*** ./src/components/ha-paper-slider.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * @polymer
 * @customElement
 * @appliesMixin paper-slider
 */

var PaperSliderClass = customElements.get("paper-slider");

var HaPaperSlider =
/*#__PURE__*/
function (_PaperSliderClass) {
  _inherits(HaPaperSlider, _PaperSliderClass);

  function HaPaperSlider() {
    _classCallCheck(this, HaPaperSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPaperSlider).apply(this, arguments));
  }

  _createClass(HaPaperSlider, null, [{
    key: "template",
    get: function get() {
      var tpl = document.createElement("template");
      tpl.innerHTML = PaperSliderClass.template.innerHTML;
      var styleEl = document.createElement("style");
      styleEl.innerHTML = "\n      .pin > .slider-knob > .slider-knob-inner {\n        font-size:  var(--ha-paper-slider-pin-font-size, 10px);\n        line-height: normal;\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::before {\n        top: unset;\n        margin-left: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        width: 2.2em;\n        height: 2.2em;\n\n        -webkit-transform-origin: left bottom;\n        transform-origin: left bottom;\n        -webkit-transform: rotate(-45deg) scale(0) translate(0);\n        transform: rotate(-45deg) scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::before {\n        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n        transform: rotate(-45deg) scale(1) translate(7px, -7px);\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::after {\n        top: unset;\n        font-size: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        margin-left: -1.1em;\n        width: 2.2em;\n        height: 2.1em;\n\n        -webkit-transform-origin: center bottom;\n        transform-origin: center bottom;\n        -webkit-transform: scale(0) translate(0);\n        transform: scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -10px);\n        transform: scale(1) translate(0, -10px);\n      }\n\n      :host([dir=\"rtl\"]) .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        }\n    ";
      tpl.content.appendChild(styleEl);
      return tpl;
    }
  }]);

  return HaPaperSlider;
}(PaperSliderClass);

customElements.define("ha-paper-slider", HaPaperSlider);

/***/ }),

/***/ "./src/components/ha-water_heater-control.js":
/*!***************************************************!*\
  !*** ./src/components/ha-water_heater-control.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        /* local DOM styles go here */\n        :host {\n          @apply --layout-flex;\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n        }\n        .in-flux#target_temperature {\n          color: var(--google-red-500);\n        }\n        #target_temperature {\n          @apply --layout-self-center;\n          font-size: 200%;\n        }\n        .control-buttons {\n          font-size: 200%;\n          text-align: right;\n        }\n        paper-icon-button {\n          height: 48px;\n          width: 48px;\n        }\n      </style>\n\n      <!-- local DOM goes here -->\n      <div id=\"target_temperature\">[[value]] [[units]]</div>\n      <div class=\"control-buttons\">\n        <div>\n          <paper-icon-button\n            icon=\"hass:chevron-up\"\n            on-click=\"incrementValue\"\n          ></paper-icon-button>\n        </div>\n        <div>\n          <paper-icon-button\n            icon=\"hass:chevron-down\"\n            on-click=\"decrementValue\"\n          ></paper-icon-button>\n        </div>\n      </div>\n    "]);

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

var HaWaterHeaterControl =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaWaterHeaterControl, _EventsMixin);

  function HaWaterHeaterControl() {
    _classCallCheck(this, HaWaterHeaterControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaWaterHeaterControl).apply(this, arguments));
  }

  _createClass(HaWaterHeaterControl, [{
    key: "temperatureStateInFlux",
    value: function temperatureStateInFlux(inFlux) {
      this.$.target_temperature.classList.toggle("in-flux", inFlux);
    }
  }, {
    key: "incrementValue",
    value: function incrementValue() {
      var newval = this.value + this.step;

      if (this.value < this.max) {
        this.last_changed = Date.now();
        this.temperatureStateInFlux(true);
      }

      if (newval <= this.max) {
        // If no initial target_temp
        // this forces control to start
        // from the min configured instead of 0
        if (newval <= this.min) {
          this.value = this.min;
        } else {
          this.value = newval;
        }
      } else {
        this.value = this.max;
      }
    }
  }, {
    key: "decrementValue",
    value: function decrementValue() {
      var newval = this.value - this.step;

      if (this.value > this.min) {
        this.last_changed = Date.now();
        this.temperatureStateInFlux(true);
      }

      if (newval >= this.min) {
        this.value = newval;
      } else {
        this.value = this.min;
      }
    }
  }, {
    key: "valueChanged",
    value: function valueChanged() {
      var _this = this;

      // when the last_changed timestamp is changed,
      // trigger a potential event fire in
      // the future, as long as last changed is far enough in the
      // past.
      if (this.last_changed) {
        window.setTimeout(function () {
          var now = Date.now();

          if (now - _this.last_changed >= 2000) {
            _this.fire("change");

            _this.temperatureStateInFlux(false);

            _this.last_changed = null;
          }
        }, 2010);
      }
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
        value: {
          type: Number,
          observer: "valueChanged"
        },
        units: {
          type: String
        },
        min: {
          type: Number
        },
        max: {
          type: Number
        },
        step: {
          type: Number,
          value: 1
        }
      };
    }
  }]);

  return HaWaterHeaterControl;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("ha-water_heater-control", HaWaterHeaterControl);

/***/ }),

/***/ "./src/dialogs/ha-more-info-dialog.js":
/*!********************************************!*\
  !*** ./src/dialogs/ha-more-info-dialog.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_shared_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-shared-styles */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _more_info_more_info_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-info/more-info-controls */ "./src/dialogs/more-info/more-info-controls.js");
/* harmony import */ var _more_info_more_info_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-info/more-info-settings */ "./src/dialogs/more-info/more-info-settings.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/dialog-mixin */ "./src/mixins/dialog-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style-dialog paper-dialog-shared-styles\">\n        :host {\n          font-size: 14px;\n          width: 365px;\n          border-radius: 2px;\n        }\n\n        more-info-controls,\n        more-info-settings {\n          --more-info-header-background: var(--secondary-background-color);\n          --more-info-header-color: var(--primary-text-color);\n          --ha-more-info-app-toolbar-title: {\n            /* Design guideline states 24px, changed to 16 to align with state info */\n            margin-left: 16px;\n            line-height: 1.3em;\n            max-height: 2.6em;\n            overflow: hidden;\n            /* webkit and blink still support simple multiline text-overflow */\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n            text-overflow: ellipsis;\n          }\n        }\n\n        /* overrule the ha-style-dialog max-height on small screens */\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          more-info-controls,\n          more-info-settings {\n            --more-info-header-background: var(--primary-color);\n            --more-info-header-color: var(--text-primary-color);\n          }\n          :host {\n            width: 100% !important;\n            border-radius: 0px;\n            position: fixed !important;\n            margin: 0;\n          }\n          :host::before {\n            content: \"\";\n            position: fixed;\n            z-index: -1;\n            top: 0px;\n            left: 0px;\n            right: 0px;\n            bottom: 0px;\n            background-color: inherit;\n          }\n        }\n\n        :host([data-domain=\"camera\"]) {\n          width: auto;\n        }\n\n        :host([data-domain=\"history_graph\"]),\n        :host([large]) {\n          width: 90%;\n        }\n      </style>\n\n      <template is=\"dom-if\" if=\"[[!_page]]\">\n        <more-info-controls\n          class=\"no-padding\"\n          hass=\"[[hass]]\"\n          state-obj=\"[[stateObj]]\"\n          dialog-element=\"[[_dialogElement]]\"\n          can-configure=\"[[_registryInfo]]\"\n          large=\"{{large}}\"\n        ></more-info-controls>\n      </template>\n      <template is=\"dom-if\" if='[[_equals(_page, \"settings\")]]'>\n        <more-info-settings\n          class=\"no-padding\"\n          hass=\"[[hass]]\"\n          state-obj=\"[[stateObj]]\"\n          registry-info=\"{{_registryInfo}}\"\n        ></more-info-settings>\n      </template>\n    "]);

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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











/*
 * @appliesMixin DialogMixin
 */

var HaMoreInfoDialog =
/*#__PURE__*/
function (_DialogMixin) {
  _inherits(HaMoreInfoDialog, _DialogMixin);

  function HaMoreInfoDialog() {
    _classCallCheck(this, HaMoreInfoDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaMoreInfoDialog).apply(this, arguments));
  }

  _createClass(HaMoreInfoDialog, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaMoreInfoDialog.prototype), "ready", this).call(this);

      this._dialogElement = this;
      this.addEventListener("more-info-page", function (ev) {
        _this._page = ev.detail.page;
      });
    }
  }, {
    key: "_computeDomain",
    value: function _computeDomain(stateObj) {
      return stateObj ? Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["computeStateDomain"])(stateObj) : "";
    }
  }, {
    key: "_computeStateObj",
    value: function _computeStateObj(hass) {
      return hass.states[hass.moreInfoEntityId] || null;
    }
  }, {
    key: "_stateObjChanged",
    value: function () {
      var _stateObjChanged2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(newVal, oldVal) {
        var _this2 = this;

        var info;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (newVal) {
                  _context.next = 3;
                  break;
                }

                this.setProperties({
                  opened: false,
                  _page: null,
                  _registryInfo: null,
                  large: false
                });
                return _context.abrupt("return");

              case 3:
                requestAnimationFrame(function () {
                  return requestAnimationFrame(function () {
                    // allow dialog to render content before showing it so it will be
                    // positioned correctly.
                    _this2.opened = true;
                  });
                });

                if (!(!Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(this.hass, "config") || oldVal && oldVal.entity_id === newVal.entity_id)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                if (!this.hass.user.is_admin) {
                  _context.next = 17;
                  break;
                }

                _context.prev = 7;
                _context.next = 10;
                return this.hass.callWS({
                  type: "config/entity_registry/get",
                  entity_id: newVal.entity_id
                });

              case 10:
                info = _context.sent;
                this._registryInfo = info;
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](7);
                this._registryInfo = null;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 14]]);
      }));

      function _stateObjChanged(_x, _x2) {
        return _stateObjChanged2.apply(this, arguments);
      }

      return _stateObjChanged;
    }()
  }, {
    key: "_dialogOpenChanged",
    value: function _dialogOpenChanged(newVal) {
      if (!newVal && this.stateObj) {
        this.fire("hass-more-info", {
          entityId: null
        });
      }
    }
  }, {
    key: "_equals",
    value: function _equals(a, b) {
      return a === b;
    }
  }, {
    key: "_largeChanged",
    value: function _largeChanged() {
      this.notifyResize();
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
        hass: Object,
        stateObj: {
          type: Object,
          computed: "_computeStateObj(hass)",
          observer: "_stateObjChanged"
        },
        large: {
          type: Boolean,
          reflectToAttribute: true,
          observer: "_largeChanged"
        },
        _dialogElement: Object,
        _registryInfo: Object,
        _page: {
          type: String,
          value: null
        },
        dataDomain: {
          computed: "_computeDomain(stateObj)",
          reflectToAttribute: true
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["_dialogOpenChanged(opened)"];
    }
  }]);

  return HaMoreInfoDialog;
}(Object(_mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("ha-more-info-dialog", HaMoreInfoDialog);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-alarm_control_panel.js":
/*!*************************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-alarm_control_panel.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        paper-input {\n          margin: auto;\n          max-width: 200px;\n        }\n        .pad {\n          display: flex;\n          justify-content: center;\n          margin-bottom: 24px;\n        }\n        .pad div {\n          display: flex;\n          flex-direction: column;\n        }\n        .pad mwc-button {\n          width: 80px;\n        }\n        .actions mwc-button {\n          min-width: 160px;\n          margin-bottom: 16px;\n        }\n        mwc-button.disarm {\n          color: var(--google-red-500);\n        }\n      </style>\n\n      <template is=\"dom-if\" if=\"[[_codeFormat]]\">\n        <paper-input\n          label=\"[[localize('ui.card.alarm_control_panel.code')]]\"\n          value=\"{{_enteredCode}}\"\n          type=\"password\"\n          disabled=\"[[!_inputEnabled]]\"\n        ></paper-input>\n\n        <template is=\"dom-if\" if=\"[[_isNumber(_codeFormat)]]\">\n          <div class=\"pad\">\n            <div>\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"1\"\n                raised\n                >1</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"4\"\n                raised\n                >4</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"7\"\n                raised\n                >7</mwc-button\n              >\n            </div>\n            <div>\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"2\"\n                raised\n                >2</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"5\"\n                raised\n                >5</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"8\"\n                raised\n                >8</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"0\"\n                raised\n                >0</mwc-button\n              >\n            </div>\n            <div>\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"3\"\n                raised\n                >3</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"6\"\n                raised\n                >6</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"9\"\n                raised\n                >9</mwc-button\n              >\n              <mwc-button\n                on-click=\"_clearEnteredCode\"\n                disabled=\"[[!_inputEnabled]]\"\n                raised\n              >\n                [[localize('ui.card.alarm_control_panel.clear_code')]]\n              </mwc-button>\n            </div>\n          </div>\n        </template>\n      </template>\n\n      <div class=\"layout horizontal center-justified actions\">\n        <template is=\"dom-if\" if=\"[[_disarmVisible]]\">\n          <mwc-button\n            raised\n            class=\"disarm\"\n            on-click=\"_callService\"\n            data-service=\"alarm_disarm\"\n            disabled=\"[[!_codeValid]]\"\n          >\n            [[localize('ui.card.alarm_control_panel.disarm')]]\n          </mwc-button>\n        </template>\n        <template is=\"dom-if\" if=\"[[_armVisible]]\">\n          <mwc-button\n            raised\n            on-click=\"_callService\"\n            data-service=\"alarm_arm_home\"\n            disabled=\"[[!_codeValid]]\"\n          >\n            [[localize('ui.card.alarm_control_panel.arm_home')]]\n          </mwc-button>\n          <mwc-button\n            raised\n            on-click=\"_callService\"\n            data-service=\"alarm_arm_away\"\n            disabled=\"[[!_codeValid]]\"\n          >\n            [[localize('ui.card.alarm_control_panel.arm_away')]]\n          </mwc-button>\n        </template>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var MoreInfoAlarmControlPanel =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoAlarmControlPanel, _LocalizeMixin);

  _createClass(MoreInfoAlarmControlPanel, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: {
          type: Object,
          observer: "_stateObjChanged"
        },
        _enteredCode: {
          type: String,
          value: ""
        },
        _codeFormat: {
          type: String,
          value: ""
        },
        _codeValid: {
          type: Boolean,
          computed: "_validateCode(_enteredCode,  _codeFormat,  _armVisible, _codeArmRequired)"
        },
        _disarmVisible: {
          type: Boolean,
          value: false
        },
        _armVisible: {
          type: Boolean,
          value: false
        },
        _inputEnabled: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  function MoreInfoAlarmControlPanel() {
    var _this;

    _classCallCheck(this, MoreInfoAlarmControlPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoAlarmControlPanel).call(this));
    _this._armedStates = ["armed_home", "armed_away", "armed_night", "armed_custom_bypass"];
    return _this;
  }

  _createClass(MoreInfoAlarmControlPanel, [{
    key: "_stateObjChanged",
    value: function _stateObjChanged(newVal, oldVal) {
      var _this2 = this;

      if (newVal) {
        var state = newVal.state;
        var props = {
          _codeFormat: newVal.attributes.code_format,
          _armVisible: state === "disarmed",
          _codeArmRequired: newVal.attributes.code_arm_required,
          _disarmVisible: this._armedStates.includes(state) || state === "pending" || state === "triggered" || state === "arming"
        };
        props._inputEnabled = props._disarmVisible || props._armVisible;
        this.setProperties(props);
      }

      if (oldVal) {
        setTimeout(function () {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(_this2, "iron-resize");
        }, 500);
      }
    }
  }, {
    key: "_isNumber",
    value: function _isNumber(format) {
      return format === "Number";
    }
  }, {
    key: "_validateCode",
    value: function _validateCode(code, format, armVisible, codeArmRequired) {
      return !format || code.length > 0 || armVisible && !codeArmRequired;
    }
  }, {
    key: "_digitClicked",
    value: function _digitClicked(ev) {
      this._enteredCode += ev.target.getAttribute("data-digit");
    }
  }, {
    key: "_clearEnteredCode",
    value: function _clearEnteredCode() {
      this._enteredCode = "";
    }
  }, {
    key: "_callService",
    value: function _callService(ev) {
      var _this3 = this;

      var service = ev.target.getAttribute("data-service");
      var data = {
        entity_id: this.stateObj.entity_id,
        code: this._enteredCode
      };
      this.hass.callService("alarm_control_panel", service, data).then(function () {
        _this3._enteredCode = "";
      });
    }
  }]);

  return MoreInfoAlarmControlPanel;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]));

customElements.define("more-info-alarm_control_panel", MoreInfoAlarmControlPanel);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-automation.js":
/*!****************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-automation.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .flex {\n          display: flex;\n          justify-content: space-between;\n        }\n        .actions {\n          margin: 36px 0 8px 0;\n          text-align: right;\n        }\n      </style>\n\n      <div class=\"flex\">\n        <div>[[localize('ui.card.automation.last_triggered')]]:</div>\n        <ha-relative-time\n          hass=\"[[hass]]\"\n          datetime=\"[[stateObj.attributes.last_triggered]]\"\n        ></ha-relative-time>\n      </div>\n\n      <div class=\"actions\">\n        <mwc-button on-click=\"handleTriggerTapped\">\n          [[localize('ui.card.automation.trigger')]]\n        </mwc-button>\n      </div>\n    "]);

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







var MoreInfoAutomation =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoAutomation, _LocalizeMixin);

  function MoreInfoAutomation() {
    _classCallCheck(this, MoreInfoAutomation);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoAutomation).apply(this, arguments));
  }

  _createClass(MoreInfoAutomation, [{
    key: "handleTriggerTapped",
    value: function handleTriggerTapped() {
      this.hass.callService("automation", "trigger", {
        entity_id: this.stateObj.entity_id
      });
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
        hass: Object,
        stateObj: Object
      };
    }
  }]);

  return MoreInfoAutomation;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("more-info-automation", MoreInfoAutomation);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-camera.ts":
/*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-camera.ts ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/camera */ "./src/data/camera.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _components_ha_camera_stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-camera-stream */ "./src/components/ha-camera-stream.ts");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");






var MoreInfoCamera = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MoreInfoCamera, _super);
    function MoreInfoCamera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._attached = false;
        return _this;
    }
    MoreInfoCamera.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this._attached = true;
    };
    MoreInfoCamera.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this._attached = false;
    };
    MoreInfoCamera.prototype.render = function () {
        if (!this._attached || !this.hass || !this.stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-camera-stream\n        .hass=\"", "\"\n        .stateObj=\"", "\"\n        showcontrols\n      ></ha-camera-stream>\n      ", "\n    "], ["\n      <ha-camera-stream\n        .hass=\"", "\"\n        .stateObj=\"", "\"\n        showcontrols\n      ></ha-camera-stream>\n      ",
            "\n    "])), this.hass, this.stateObj, this._cameraPrefs
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <paper-checkbox\n              .checked=", "\n              @change=", "\n            >\n              Preload stream\n            </paper-checkbox>\n          "], ["\n            <paper-checkbox\n              .checked=", "\n              @change=", "\n            >\n              Preload stream\n            </paper-checkbox>\n          "])), this._cameraPrefs.preload_stream, this._handleCheckboxChanged) : undefined);
    };
    MoreInfoCamera.prototype.updated = function (changedProps) {
        if (!changedProps.has("stateObj")) {
            return;
        }
        var oldState = changedProps.get("stateObj");
        var oldEntityId = oldState ? oldState.entity_id : undefined;
        var curEntityId = this.stateObj ? this.stateObj.entity_id : undefined;
        // Same entity, ignore.
        if (curEntityId === oldEntityId) {
            return;
        }
        if (curEntityId &&
            this.hass.config.components.includes("stream") &&
            Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_3__["supportsFeature"])(this.stateObj, _data_camera__WEBPACK_IMPORTED_MODULE_2__["CAMERA_SUPPORT_STREAM"])) {
            // Fetch in background while we set up the video.
            this._fetchCameraPrefs();
        }
    };
    MoreInfoCamera.prototype._fetchCameraPrefs = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, Object(_data_camera__WEBPACK_IMPORTED_MODULE_2__["fetchCameraPrefs"])(this.hass, this.stateObj.entity_id)];
                    case 1:
                        _a._cameraPrefs = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoreInfoCamera.prototype._handleCheckboxChanged = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var checkbox, _a, err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        checkbox = ev.currentTarget;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, Object(_data_camera__WEBPACK_IMPORTED_MODULE_2__["updateCameraPrefs"])(this.hass, this.stateObj.entity_id, {
                                preload_stream: checkbox.checked,
                            })];
                    case 2:
                        _a._cameraPrefs = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        alert(err_1.message);
                        checkbox.checked = !checkbox.checked;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MoreInfoCamera, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      paper-checkbox {\n        position: absolute;\n        top: 0;\n        right: 0;\n        background-color: var(--secondary-background-color);\n        padding: 5px;\n        border-bottom-left-radius: 6px;\n      }\n    "], ["\n      paper-checkbox {\n        position: absolute;\n        top: 0;\n        right: 0;\n        background-color: var(--secondary-background-color);\n        padding: 5px;\n        border-bottom-left-radius: 6px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], MoreInfoCamera.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], MoreInfoCamera.prototype, "stateObj", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], MoreInfoCamera.prototype, "_cameraPrefs", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], MoreInfoCamera.prototype, "_attached", void 0);
    return MoreInfoCamera;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("more-info-camera", MoreInfoCamera);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-climate.ts":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-climate.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_climate_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-climate-control */ "./src/components/ha-climate-control.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _data_climate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/climate */ "./src/data/climate.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");














var MoreInfoClimate = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MoreInfoClimate, _super);
    function MoreInfoClimate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoreInfoClimate.prototype.render = function () {
        if (!this.stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var hass = this.hass;
        var stateObj = this.stateObj;
        var supportTargetTemperature = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_TARGET_TEMPERATURE"]);
        var supportTargetTemperatureRange = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE"]);
        var supportTargetHumidity = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_TARGET_HUMIDITY"]);
        var supportFanMode = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_FAN_MODE"]);
        var supportPresetMode = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_PRESET_MODE"]);
        var supportSwingMode = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_SWING_MODE"]);
        var supportAuxHeat = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_AUX_HEAT"]);
        var temperatureStepSize = stateObj.attributes.target_temp_step ||
            (hass.config.unit_system.temperature.indexOf("F") === -1 ? 0.5 : 1);
        var rtlDirection = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__["computeRTLDirection"])(hass);
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div\n        class=", "\n      >\n        <div class=\"container-temperature\">\n          <div class=", ">\n            ", "\n            ", "\n            ", "\n          </div>\n        </div>\n\n        ", "\n\n        <div class=\"container-hvac_modes\">\n          <div class=\"controls\">\n            <ha-paper-dropdown-menu\n              label-float\n              dynamic-align\n              .label=", "\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                attr-for-selected=\"item-name\"\n                .selected=", "\n                @selected-changed=", "\n              >\n                ", "\n              </paper-listbox>\n            </ha-paper-dropdown-menu>\n          </div>\n        </div>\n\n        ", "\n        ", "\n        ", "\n        ", "\n      </div>\n    "], ["\n      <div\n        class=",
            "\n      >\n        <div class=\"container-temperature\">\n          <div class=", ">\n            ",
            "\n            ",
            "\n            ",
            "\n          </div>\n        </div>\n\n        ",
            "\n\n        <div class=\"container-hvac_modes\">\n          <div class=\"controls\">\n            <ha-paper-dropdown-menu\n              label-float\n              dynamic-align\n              .label=", "\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                attr-for-selected=\"item-name\"\n                .selected=", "\n                @selected-changed=", "\n              >\n                ",
            "\n              </paper-listbox>\n            </ha-paper-dropdown-menu>\n          </div>\n        </div>\n\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n      </div>\n    "])), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_13__["classMap"])({
            "has-current_temperature": "current_temperature" in stateObj.attributes,
            "has-current_humidity": "current_humidity" in stateObj.attributes,
            "has-target_temperature": supportTargetTemperature,
            "has-target_temperature_range": supportTargetTemperatureRange,
            "has-target_humidity": supportTargetHumidity,
            "has-fan_mode": supportFanMode,
            "has-swing_mode": supportSwingMode,
            "has-aux_heat": supportAuxHeat,
            "has-preset_mode": supportPresetMode,
        }), stateObj.state, supportTargetTemperature || supportTargetTemperatureRange
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <div>\n                    ", "\n                  </div>\n                "], ["\n                  <div>\n                    ", "\n                  </div>\n                "])), hass.localize("ui.card.climate.target_temperature")) : "", stateObj.attributes.temperature
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <ha-climate-control\n                    .value=", "\n                    .units=", "\n                    .step=", "\n                    .min=", "\n                    .max=", "\n                    @change=", "\n                  ></ha-climate-control>\n                "], ["\n                  <ha-climate-control\n                    .value=", "\n                    .units=", "\n                    .step=", "\n                    .min=", "\n                    .max=", "\n                    @change=", "\n                  ></ha-climate-control>\n                "])), stateObj.attributes.temperature, hass.config.unit_system.temperature, temperatureStepSize, stateObj.attributes.min_temp, stateObj.attributes.max_temp, this._targetTemperatureChanged) : "", stateObj.attributes.target_temp_low ||
            stateObj.attributes.target_temp_high
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <ha-climate-control\n                    .value=", "\n                    .units=", "\n                    .step=", "\n                    .min=", "\n                    .max=", "\n                    class=\"range-control-left\"\n                    @change=", "\n                  ></ha-climate-control>\n                  <ha-climate-control\n                    .value=", "\n                    .units=", "\n                    .step=", "\n                    .min=", "\n                    .max=", "\n                    class=\"range-control-right\"\n                    @change=", "\n                  ></ha-climate-control>\n                "], ["\n                  <ha-climate-control\n                    .value=", "\n                    .units=", "\n                    .step=", "\n                    .min=", "\n                    .max=", "\n                    class=\"range-control-left\"\n                    @change=", "\n                  ></ha-climate-control>\n                  <ha-climate-control\n                    .value=", "\n                    .units=", "\n                    .step=", "\n                    .min=", "\n                    .max=", "\n                    class=\"range-control-right\"\n                    @change=", "\n                  ></ha-climate-control>\n                "])), stateObj.attributes.target_temp_low, hass.config.unit_system.temperature, temperatureStepSize, stateObj.attributes.min_temp, stateObj.attributes.target_temp_high, this._targetTemperatureLowChanged, stateObj.attributes.target_temp_high, hass.config.unit_system.temperature, temperatureStepSize, stateObj.attributes.target_temp_low, stateObj.attributes.max_temp, this._targetTemperatureHighChanged) : "", supportTargetHumidity
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"container-humidity\">\n                <div>", "</div>\n                <div class=\"single-row\">\n                  <div class=\"target-humidity\">\n                    ", " %\n                  </div>\n                  <ha-paper-slider\n                    class=\"humidity\"\n                    step=\"1\"\n                    pin\n                    ignore-bar-touch\n                    dir=", "\n                    .min=", "\n                    .max=", "\n                    .secondaryProgress=", "\n                    .value=", "\n                    @change=", "\n                  >\n                  </ha-paper-slider>\n                </div>\n              </div>\n            "], ["\n              <div class=\"container-humidity\">\n                <div>", "</div>\n                <div class=\"single-row\">\n                  <div class=\"target-humidity\">\n                    ", " %\n                  </div>\n                  <ha-paper-slider\n                    class=\"humidity\"\n                    step=\"1\"\n                    pin\n                    ignore-bar-touch\n                    dir=", "\n                    .min=", "\n                    .max=", "\n                    .secondaryProgress=", "\n                    .value=", "\n                    @change=", "\n                  >\n                  </ha-paper-slider>\n                </div>\n              </div>\n            "])), hass.localize("ui.card.climate.target_humidity"), stateObj.attributes.humidity, rtlDirection, stateObj.attributes.min_humidity, stateObj.attributes.max_humidity, stateObj.attributes.max_humidity, stateObj.attributes.humidity, this._targetHumiditySliderChanged) : "", hass.localize("ui.card.climate.operation"), stateObj.state, this._handleOperationmodeChanged, stateObj.attributes.hvac_modes
            .concat()
            .sort(_data_climate__WEBPACK_IMPORTED_MODULE_11__["compareClimateHvacModes"])
            .map(function (mode) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <paper-item item-name=", ">\n                        ", "\n                      </paper-item>\n                    "], ["\n                      <paper-item item-name=", ">\n                        ", "\n                      </paper-item>\n                    "])), mode, hass.localize("state.climate." + mode)); }), supportPresetMode
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"container-preset_modes\">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=", "\n                >\n                  <paper-listbox\n                    slot=\"dropdown-content\"\n                    attr-for-selected=\"item-name\"\n                    .selected=", "\n                    @selected-changed=", "\n                  >\n                    ", "\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "], ["\n              <div class=\"container-preset_modes\">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=", "\n                >\n                  <paper-listbox\n                    slot=\"dropdown-content\"\n                    attr-for-selected=\"item-name\"\n                    .selected=", "\n                    @selected-changed=", "\n                  >\n                    ",
                "\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "])), hass.localize("ui.card.climate.preset_mode"), stateObj.attributes.preset_mode, this._handlePresetmodeChanged, stateObj.attributes.preset_modes.map(function (mode) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <paper-item item-name=", ">\n                          ", "\n                        </paper-item>\n                      "], ["\n                        <paper-item item-name=", ">\n                          ",
                "\n                        </paper-item>\n                      "])), mode, hass.localize("state_attributes.climate.preset_mode." + mode) || mode); })) : "", supportFanMode
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"container-fan_list\">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=", "\n                >\n                  <paper-listbox\n                    slot=\"dropdown-content\"\n                    attr-for-selected=\"item-name\"\n                    .selected=", "\n                    @selected-changed=", "\n                  >\n                    ", "\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "], ["\n              <div class=\"container-fan_list\">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=", "\n                >\n                  <paper-listbox\n                    slot=\"dropdown-content\"\n                    attr-for-selected=\"item-name\"\n                    .selected=", "\n                    @selected-changed=", "\n                  >\n                    ",
                "\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "])), hass.localize("ui.card.climate.fan_mode"), stateObj.attributes.fan_mode, this._handleFanmodeChanged, stateObj.attributes.fan_modes.map(function (mode) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <paper-item item-name=", ">\n                          ", "\n                        </paper-item>\n                      "], ["\n                        <paper-item item-name=", ">\n                          ",
                "\n                        </paper-item>\n                      "])), mode, hass.localize("state_attributes.climate.fan_mode." + mode) || mode); })) : "", supportSwingMode
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"container-swing_list\">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=", "\n                >\n                  <paper-listbox\n                    slot=\"dropdown-content\"\n                    attr-for-selected=\"item-name\"\n                    .selected=", "\n                    @selected-changed=", "\n                  >\n                    ", "\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "], ["\n              <div class=\"container-swing_list\">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=", "\n                >\n                  <paper-listbox\n                    slot=\"dropdown-content\"\n                    attr-for-selected=\"item-name\"\n                    .selected=", "\n                    @selected-changed=", "\n                  >\n                    ",
                "\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "])), hass.localize("ui.card.climate.swing_mode"), stateObj.attributes.swing_mode, this._handleSwingmodeChanged, stateObj.attributes.swing_modes.map(function (mode) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <paper-item item-name=", ">", "</paper-item>\n                      "], ["\n                        <paper-item item-name=", ">", "</paper-item>\n                      "])), mode, mode); })) : "", supportAuxHeat
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"container-aux_heat\">\n                <div class=\"center horizontal layout single-row\">\n                  <div class=\"flex\">\n                    ", "\n                  </div>\n                  <ha-switch\n                    .checked=", "\n                    @change=", "\n                  ></ha-switch>\n                </div>\n              </div>\n            "], ["\n              <div class=\"container-aux_heat\">\n                <div class=\"center horizontal layout single-row\">\n                  <div class=\"flex\">\n                    ", "\n                  </div>\n                  <ha-switch\n                    .checked=", "\n                    @change=", "\n                  ></ha-switch>\n                </div>\n              </div>\n            "])), hass.localize("ui.card.climate.aux_heat"), stateObj.attributes.aux_heat === "on", this._auxToggleChanged) : "");
    };
    MoreInfoClimate.prototype.updated = function (changedProps) {
        var _this = this;
        _super.prototype.updated.call(this, changedProps);
        if (!changedProps.has("stateObj") || !this.stateObj) {
            return;
        }
        if (this._resizeDebounce) {
            clearTimeout(this._resizeDebounce);
        }
        this._resizeDebounce = window.setTimeout(function () {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(_this, "iron-resize");
            _this._resizeDebounce = undefined;
        }, 500);
    };
    MoreInfoClimate.prototype._targetTemperatureChanged = function (ev) {
        var newVal = ev.target.value;
        this._callServiceHelper(this.stateObj.attributes.temperature, newVal, "set_temperature", { temperature: newVal });
    };
    MoreInfoClimate.prototype._targetTemperatureLowChanged = function (ev) {
        var newVal = ev.currentTarget.value;
        this._callServiceHelper(this.stateObj.attributes.target_temp_low, newVal, "set_temperature", {
            target_temp_low: newVal,
            target_temp_high: this.stateObj.attributes.target_temp_high,
        });
    };
    MoreInfoClimate.prototype._targetTemperatureHighChanged = function (ev) {
        var newVal = ev.currentTarget.value;
        this._callServiceHelper(this.stateObj.attributes.target_temp_high, newVal, "set_temperature", {
            target_temp_low: this.stateObj.attributes.target_temp_low,
            target_temp_high: newVal,
        });
    };
    MoreInfoClimate.prototype._targetHumiditySliderChanged = function (ev) {
        var newVal = ev.target.value;
        this._callServiceHelper(this.stateObj.attributes.humidity, newVal, "set_humidity", { humidity: newVal });
    };
    MoreInfoClimate.prototype._auxToggleChanged = function (ev) {
        var newVal = ev.target.checked;
        this._callServiceHelper(this.stateObj.attributes.aux_heat === "on", newVal, "set_aux_heat", { aux_heat: newVal });
    };
    MoreInfoClimate.prototype._handleFanmodeChanged = function (ev) {
        var newVal = ev.detail.value;
        this._callServiceHelper(this.stateObj.attributes.fan_mode, newVal, "set_fan_mode", { fan_mode: newVal });
    };
    MoreInfoClimate.prototype._handleOperationmodeChanged = function (ev) {
        var newVal = ev.detail.value;
        this._callServiceHelper(this.stateObj.state, newVal, "set_hvac_mode", {
            hvac_mode: newVal,
        });
    };
    MoreInfoClimate.prototype._handleSwingmodeChanged = function (ev) {
        var newVal = ev.detail.value;
        this._callServiceHelper(this.stateObj.attributes.swing_mode, newVal, "set_swing_mode", { swing_mode: newVal });
    };
    MoreInfoClimate.prototype._handlePresetmodeChanged = function (ev) {
        var newVal = ev.detail.value || null;
        this._callServiceHelper(this.stateObj.attributes.preset_mode, newVal, "set_preset_mode", { preset_mode: newVal });
    };
    MoreInfoClimate.prototype._callServiceHelper = function (oldVal, newVal, service, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var curState;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (oldVal === newVal) {
                            return [2 /*return*/];
                        }
                        data.entity_id = this.stateObj.entity_id;
                        curState = this.stateObj;
                        return [4 /*yield*/, this.hass.callService("climate", service, data)];
                    case 1:
                        _a.sent();
                        // We reset stateObj to re-sync the inputs with the state. It will be out
                        // of sync if our service call did not result in the entity to be turned
                        // on. Since the state is not changing, the resync is not called automatic.
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 2000); })];
                    case 2:
                        // We reset stateObj to re-sync the inputs with the state. It will be out
                        // of sync if our service call did not result in the entity to be turned
                        // on. Since the state is not changing, the resync is not called automatic.
                        _a.sent();
                        // No need to resync if we received a new state.
                        if (this.stateObj !== curState) {
                            return [2 /*return*/];
                        }
                        this.stateObj = undefined;
                        return [4 /*yield*/, this.updateComplete];
                    case 3:
                        _a.sent();
                        // Only restore if not set yet by a state change
                        if (this.stateObj === undefined) {
                            this.stateObj = curState;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MoreInfoClimate, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["css"])(templateObject_15 || (templateObject_15 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        color: var(--primary-text-color);\n      }\n\n      .container-hvac_modes iron-icon,\n      .container-fan_list iron-icon,\n      .container-swing_list iron-icon {\n        margin: 22px 16px 0 0;\n      }\n\n      ha-paper-dropdown-menu {\n        width: 100%;\n      }\n\n      paper-item {\n        cursor: pointer;\n      }\n\n      ha-paper-slider {\n        width: 100%;\n      }\n\n      .container-humidity .single-row {\n        display: flex;\n        height: 50px;\n      }\n\n      .target-humidity {\n        width: 90px;\n        font-size: 200%;\n        margin: auto;\n        direction: ltr;\n      }\n\n      ha-climate-control.range-control-left,\n      ha-climate-control.range-control-right {\n        float: left;\n        width: 46%;\n      }\n      ha-climate-control.range-control-left {\n        margin-right: 4%;\n      }\n      ha-climate-control.range-control-right {\n        margin-left: 4%;\n      }\n\n      .humidity {\n        --paper-slider-active-color: var(--paper-blue-400);\n        --paper-slider-secondary-color: var(--paper-blue-400);\n      }\n\n      .single-row {\n        padding: 8px 0;\n      }\n    "], ["\n      :host {\n        color: var(--primary-text-color);\n      }\n\n      .container-hvac_modes iron-icon,\n      .container-fan_list iron-icon,\n      .container-swing_list iron-icon {\n        margin: 22px 16px 0 0;\n      }\n\n      ha-paper-dropdown-menu {\n        width: 100%;\n      }\n\n      paper-item {\n        cursor: pointer;\n      }\n\n      ha-paper-slider {\n        width: 100%;\n      }\n\n      .container-humidity .single-row {\n        display: flex;\n        height: 50px;\n      }\n\n      .target-humidity {\n        width: 90px;\n        font-size: 200%;\n        margin: auto;\n        direction: ltr;\n      }\n\n      ha-climate-control.range-control-left,\n      ha-climate-control.range-control-right {\n        float: left;\n        width: 46%;\n      }\n      ha-climate-control.range-control-left {\n        margin-right: 4%;\n      }\n      ha-climate-control.range-control-right {\n        margin-left: 4%;\n      }\n\n      .humidity {\n        --paper-slider-active-color: var(--paper-blue-400);\n        --paper-slider-secondary-color: var(--paper-blue-400);\n      }\n\n      .single-row {\n        padding: 8px 0;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
    ], MoreInfoClimate.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
    ], MoreInfoClimate.prototype, "stateObj", void 0);
    return MoreInfoClimate;
}(lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]));
customElements.define("more-info-climate", MoreInfoClimate);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-configurator.js":
/*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-configurator.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_input_iron_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-input/iron-input */ "./node_modules/@polymer/iron-input/iron-input.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-markdown */ "./src/components/ha-markdown.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        p {\n          margin: 8px 0;\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n\n        p > img {\n          max-width: 100%;\n        }\n\n        p.center {\n          text-align: center;\n        }\n\n        p.error {\n          color: #c62828;\n        }\n\n        p.submit {\n          text-align: center;\n          height: 41px;\n        }\n\n        paper-spinner {\n          width: 14px;\n          height: 14px;\n          margin-right: 20px;\n        }\n\n        [hidden] {\n          display: none;\n        }\n      </style>\n\n      <div class=\"layout vertical\">\n        <template is=\"dom-if\" if=\"[[isConfigurable]]\">\n          <ha-markdown\n            content=\"[[stateObj.attributes.description]]\"\n          ></ha-markdown>\n\n          <p class=\"error\" hidden$=\"[[!stateObj.attributes.errors]]\">\n            [[stateObj.attributes.errors]]\n          </p>\n\n          <template is=\"dom-repeat\" items=\"[[stateObj.attributes.fields]]\">\n            <paper-input\n              label=\"[[item.name]]\"\n              name=\"[[item.id]]\"\n              type=\"[[item.type]]\"\n              on-change=\"fieldChanged\"\n            ></paper-input>\n          </template>\n\n          <p class=\"submit\" hidden$=\"[[!stateObj.attributes.submit_caption]]\">\n            <mwc-button\n              raised=\"\"\n              disabled=\"[[isConfiguring]]\"\n              on-click=\"submitClicked\"\n            >\n              <paper-spinner\n                active=\"[[isConfiguring]]\"\n                hidden=\"[[!isConfiguring]]\"\n                alt=\"Configuring\"\n              ></paper-spinner>\n              [[stateObj.attributes.submit_caption]]\n            </mwc-button>\n          </p>\n        </template>\n      </div>\n    "]);

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










var MoreInfoConfigurator =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoConfigurator, _PolymerElement);

  function MoreInfoConfigurator() {
    _classCallCheck(this, MoreInfoConfigurator);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoConfigurator).apply(this, arguments));
  }

  _createClass(MoreInfoConfigurator, [{
    key: "computeIsConfigurable",
    value: function computeIsConfigurable(stateObj) {
      return stateObj.state === "configure";
    }
  }, {
    key: "fieldChanged",
    value: function fieldChanged(ev) {
      var el = ev.target;
      this.fieldInput[el.name] = el.value;
    }
  }, {
    key: "submitClicked",
    value: function submitClicked() {
      var data = {
        configure_id: this.stateObj.attributes.configure_id,
        fields: this.fieldInput
      };
      this.isConfiguring = true;
      this.hass.callService("configurator", "configure", data).then(function () {
        this.isConfiguring = false;
      }.bind(this), function () {
        this.isConfiguring = false;
      }.bind(this));
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        stateObj: {
          type: Object
        },
        action: {
          type: String,
          value: "display"
        },
        isConfigurable: {
          type: Boolean,
          computed: "computeIsConfigurable(stateObj)"
        },
        isConfiguring: {
          type: Boolean,
          value: false
        },
        fieldInput: {
          type: Object,
          value: function value() {
            return {};
          }
        }
      };
    }
  }]);

  return MoreInfoConfigurator;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"]);

customElements.define("more-info-configurator", MoreInfoConfigurator);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-content.ts":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-content.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _more_info_alarm_control_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./more-info-alarm_control_panel */ "./src/dialogs/more-info/controls/more-info-alarm_control_panel.js");
/* harmony import */ var _more_info_automation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more-info-automation */ "./src/dialogs/more-info/controls/more-info-automation.js");
/* harmony import */ var _more_info_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more-info-camera */ "./src/dialogs/more-info/controls/more-info-camera.ts");
/* harmony import */ var _more_info_climate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-info-climate */ "./src/dialogs/more-info/controls/more-info-climate.ts");
/* harmony import */ var _more_info_configurator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-info-configurator */ "./src/dialogs/more-info/controls/more-info-configurator.js");
/* harmony import */ var _more_info_cover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./more-info-cover */ "./src/dialogs/more-info/controls/more-info-cover.js");
/* harmony import */ var _more_info_default__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./more-info-default */ "./src/dialogs/more-info/controls/more-info-default.js");
/* harmony import */ var _more_info_fan__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./more-info-fan */ "./src/dialogs/more-info/controls/more-info-fan.js");
/* harmony import */ var _more_info_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./more-info-group */ "./src/dialogs/more-info/controls/more-info-group.js");
/* harmony import */ var _more_info_history_graph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./more-info-history_graph */ "./src/dialogs/more-info/controls/more-info-history_graph.js");
/* harmony import */ var _more_info_input_datetime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./more-info-input_datetime */ "./src/dialogs/more-info/controls/more-info-input_datetime.js");
/* harmony import */ var _more_info_light__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./more-info-light */ "./src/dialogs/more-info/controls/more-info-light.js");
/* harmony import */ var _more_info_lock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./more-info-lock */ "./src/dialogs/more-info/controls/more-info-lock.js");
/* harmony import */ var _more_info_media_player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./more-info-media_player */ "./src/dialogs/more-info/controls/more-info-media_player.js");
/* harmony import */ var _more_info_script__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./more-info-script */ "./src/dialogs/more-info/controls/more-info-script.js");
/* harmony import */ var _more_info_sun__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./more-info-sun */ "./src/dialogs/more-info/controls/more-info-sun.js");
/* harmony import */ var _more_info_timer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./more-info-timer */ "./src/dialogs/more-info/controls/more-info-timer.ts");
/* harmony import */ var _more_info_updater__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./more-info-updater */ "./src/dialogs/more-info/controls/more-info-updater.js");
/* harmony import */ var _more_info_vacuum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./more-info-vacuum */ "./src/dialogs/more-info/controls/more-info-vacuum.js");
/* harmony import */ var _more_info_water_heater__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./more-info-water_heater */ "./src/dialogs/more-info/controls/more-info-water_heater.js");
/* harmony import */ var _more_info_weather__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./more-info-weather */ "./src/dialogs/more-info/controls/more-info-weather.js");
/* harmony import */ var _common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/entity/state_more_info_type */ "./src/common/entity/state_more_info_type.ts");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");

























var MoreInfoContent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MoreInfoContent, _super);
    function MoreInfoContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MoreInfoContent, "properties", {
        get: function () {
            return {
                hass: {},
                stateObj: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    MoreInfoContent.prototype.firstUpdated = function () {
        this.style.position = "relative";
        this.style.display = "block";
    };
    // This is not a lit element, but an updating element, so we implement update
    MoreInfoContent.prototype.update = function (changedProps) {
        _super.prototype.update.call(this, changedProps);
        var stateObj = this.stateObj;
        var hass = this.hass;
        if (!stateObj || !hass) {
            if (this.lastChild) {
                this._detachedChild = this.lastChild;
                // Detach child to prevent it from doing work.
                this.removeChild(this.lastChild);
            }
            return;
        }
        if (this._detachedChild) {
            this.appendChild(this._detachedChild);
            this._detachedChild = undefined;
        }
        var moreInfoType = stateObj.attributes && "custom_ui_more_info" in stateObj.attributes
            ? stateObj.attributes.custom_ui_more_info
            : "more-info-" + Object(_common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_23__["stateMoreInfoType"])(stateObj);
        Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_24__["default"])(this, moreInfoType.toUpperCase(), {
            hass: hass,
            stateObj: stateObj,
        });
    };
    return MoreInfoContent;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"]));
customElements.define("more-info-content", MoreInfoContent);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-cover.js":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-cover.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_cover_tilt_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-cover-tilt-controls */ "./src/components/ha-cover-tilt-controls.js");
/* harmony import */ var _components_ha_labeled_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-labeled-slider */ "./src/components/ha-labeled-slider.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/cover-model */ "./src/util/cover-model.js");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        .current_position,\n        .tilt {\n          max-height: 0px;\n          overflow: hidden;\n        }\n\n        .has-current_position .current_position,\n        .has-set_tilt_position .tilt,\n        .has-current_tilt_position .tilt {\n          max-height: 208px;\n        }\n\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"current_position\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.cover.position')]]\"\n            pin=\"\"\n            value=\"{{coverPositionSliderValue}}\"\n            disabled=\"[[!entityObj.supportsSetPosition]]\"\n            on-change=\"coverPositionSliderChanged\"\n          ></ha-labeled-slider>\n        </div>\n\n        <div class=\"tilt\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.cover.tilt_position')]]\"\n            pin=\"\"\n            extra=\"\"\n            value=\"{{coverTiltPositionSliderValue}}\"\n            disabled=\"[[!entityObj.supportsSetTiltPosition]]\"\n            on-change=\"coverTiltPositionSliderChanged\"\n          >\n            <ha-cover-tilt-controls\n              slot=\"extra\"\n              hidden$=\"[[entityObj.isTiltOnly]]\"\n              hass=\"[[hass]]\"\n              state-obj=\"[[stateObj]]\"\n            ></ha-cover-tilt-controls>\n          </ha-labeled-slider>\n        </div>\n      </div>\n    "]);

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











var FEATURE_CLASS_NAMES = {
  128: "has-set_tilt_position"
};

var MoreInfoCover =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoCover, _LocalizeMixin);

  function MoreInfoCover() {
    _classCallCheck(this, MoreInfoCover);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoCover).apply(this, arguments));
  }

  _createClass(MoreInfoCover, [{
    key: "computeEntityObj",
    value: function computeEntityObj(hass, stateObj) {
      return new _util_cover_model__WEBPACK_IMPORTED_MODULE_6__["default"](hass, stateObj);
    }
  }, {
    key: "stateObjChanged",
    value: function stateObjChanged(newVal) {
      if (newVal) {
        this.setProperties({
          coverPositionSliderValue: newVal.attributes.current_position,
          coverTiltPositionSliderValue: newVal.attributes.current_tilt_position
        });
      }
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      var classes = [Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_9__["attributeClassNames"])(stateObj, ["current_position", "current_tilt_position"]), Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_7__["featureClassNames"])(stateObj, FEATURE_CLASS_NAMES)];
      return classes.join(" ");
    }
  }, {
    key: "coverPositionSliderChanged",
    value: function coverPositionSliderChanged(ev) {
      this.entityObj.setCoverPosition(ev.target.value);
    }
  }, {
    key: "coverTiltPositionSliderChanged",
    value: function coverTiltPositionSliderChanged(ev) {
      this.entityObj.setCoverTiltPosition(ev.target.value);
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
        hass: Object,
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        entityObj: {
          type: Object,
          computed: "computeEntityObj(hass, stateObj)"
        },
        coverPositionSliderValue: Number,
        coverTiltPositionSliderValue: Number
      };
    }
  }]);

  return MoreInfoCover;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("more-info-cover", MoreInfoCover);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-default.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-default.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <ha-attributes state-obj=\"[[stateObj]]\"></ha-attributes>\n    "]);

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





var MoreInfoDefault =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoDefault, _PolymerElement);

  function MoreInfoDefault() {
    _classCallCheck(this, MoreInfoDefault);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoDefault).apply(this, arguments));
  }

  _createClass(MoreInfoDefault, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        stateObj: {
          type: Object
        }
      };
    }
  }]);

  return MoreInfoDefault;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("more-info-default", MoreInfoDefault);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-fan.js":
/*!*********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-fan.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        .container-speed_list,\n        .container-direction,\n        .container-oscillating {\n          display: none;\n        }\n\n        .has-speed_list .container-speed_list,\n        .has-direction .container-direction,\n        .has-oscillating .container-oscillating {\n          display: block;\n        }\n\n        ha-paper-dropdown-menu {\n          width: 100%;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"container-speed_list\">\n          <ha-paper-dropdown-menu\n            label-float=\"\"\n            dynamic-align=\"\"\n            label=\"[[localize('ui.card.fan.speed')]]\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              selected=\"[[stateObj.attributes.speed]]\"\n              on-selected-changed=\"speedChanged\"\n              attr-for-selected=\"item-name\"\n            >\n              <template\n                is=\"dom-repeat\"\n                items=\"[[stateObj.attributes.speed_list]]\"\n              >\n                <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n        </div>\n\n        <div class=\"container-oscillating\">\n          <div class=\"center horizontal layout single-row\">\n            <div class=\"flex\">[[localize('ui.card.fan.oscillate')]]</div>\n            <ha-switch\n              checked=\"[[oscillationToggleChecked]]\"\n              on-change=\"oscillationToggleChanged\"\n            >\n            </ha-switch>\n          </div>\n        </div>\n\n        <div class=\"container-direction\">\n          <div class=\"direction\">\n            <div>[[localize('ui.card.fan.direction')]]</div>\n            <paper-icon-button\n              icon=\"hass:rotate-left\"\n              on-click=\"onDirectionReverse\"\n              title=\"[[localize('ui.card.fan.reverse')]]\"\n              disabled=\"[[computeIsRotatingReverse(stateObj)]]\"\n            ></paper-icon-button>\n            <paper-icon-button\n              icon=\"hass:rotate-right\"\n              on-click=\"onDirectionForward\"\n              title=\"[[localize('ui.card.fan.forward')]]\"\n              disabled=\"[[computeIsRotatingForward(stateObj)]]\"\n            ></paper-icon-button>\n          </div>\n        </div>\n      </div>\n\n      <ha-attributes\n        state-obj=\"[[stateObj]]\"\n        extra-filters=\"speed,speed_list,oscillating,direction\"\n      ></ha-attributes>\n    "]);

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

var MoreInfoFan =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoFan, _LocalizeMixin);

  function MoreInfoFan() {
    _classCallCheck(this, MoreInfoFan);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoFan).apply(this, arguments));
  }

  _createClass(MoreInfoFan, [{
    key: "stateObjChanged",
    value: function stateObjChanged(newVal, oldVal) {
      var _this = this;

      if (newVal) {
        this.setProperties({
          oscillationToggleChecked: newVal.attributes.oscillating
        });
      }

      if (oldVal) {
        setTimeout(function () {
          _this.fire("iron-resize");
        }, 500);
      }
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      return "more-info-fan " + Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__["attributeClassNames"])(stateObj, ["oscillating", "speed_list", "direction"]);
    }
  }, {
    key: "speedChanged",
    value: function speedChanged(ev) {
      var oldVal = this.stateObj.attributes.speed;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.hass.callService("fan", "turn_on", {
        entity_id: this.stateObj.entity_id,
        speed: newVal
      });
    }
  }, {
    key: "oscillationToggleChanged",
    value: function oscillationToggleChanged(ev) {
      var oldVal = this.stateObj.attributes.oscillating;
      var newVal = ev.target.checked;
      if (oldVal === newVal) return;
      this.hass.callService("fan", "oscillate", {
        entity_id: this.stateObj.entity_id,
        oscillating: newVal
      });
    }
  }, {
    key: "onDirectionReverse",
    value: function onDirectionReverse() {
      this.hass.callService("fan", "set_direction", {
        entity_id: this.stateObj.entity_id,
        direction: "reverse"
      });
    }
  }, {
    key: "onDirectionForward",
    value: function onDirectionForward() {
      this.hass.callService("fan", "set_direction", {
        entity_id: this.stateObj.entity_id,
        direction: "forward"
      });
    }
  }, {
    key: "computeIsRotatingReverse",
    value: function computeIsRotatingReverse(stateObj) {
      return stateObj.attributes.direction === "reverse";
    }
  }, {
    key: "computeIsRotatingForward",
    value: function computeIsRotatingForward(stateObj) {
      return stateObj.attributes.direction === "forward";
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        oscillationToggleChecked: {
          type: Boolean
        }
      };
    }
  }]);

  return MoreInfoFan;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])));

customElements.define("more-info-fan", MoreInfoFan);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-group.js":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-group.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../state-summary/state-card-content */ "./src/state-summary/state-card-content.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .child-card {\n          margin-bottom: 8px;\n        }\n\n        .child-card:last-child {\n          margin-bottom: 0;\n        }\n      </style>\n\n      <div id=\"groupedControlDetails\"></div>\n      <template is=\"dom-repeat\" items=\"[[states]]\" as=\"state\">\n        <div class=\"child-card\">\n          <state-card-content\n            state-obj=\"[[state]]\"\n            hass=\"[[hass]]\"\n          ></state-card-content>\n        </div>\n      </template>\n    "]);

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








var MoreInfoGroup =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoGroup, _PolymerElement);

  function MoreInfoGroup() {
    _classCallCheck(this, MoreInfoGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoGroup).apply(this, arguments));
  }

  _createClass(MoreInfoGroup, [{
    key: "computeStates",
    value: function computeStates(stateObj, hass) {
      var states = [];
      var entIds = stateObj.attributes.entity_id || [];

      for (var i = 0; i < entIds.length; i++) {
        var state = hass.states[entIds[i]];

        if (state) {
          states.push(state);
        }
      }

      return states;
    }
  }, {
    key: "statesChanged",
    value: function statesChanged(stateObj, states) {
      var groupDomainStateObj = false;
      var groupDomain = false;

      if (states && states.length > 0) {
        var baseStateObj = states.find(function (s) {
          return s.state === "on";
        }) || states[0];
        groupDomain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(baseStateObj); // Groups need to be filtered out or we'll show content of
        // first child above the children of the current group

        if (groupDomain !== "group") {
          groupDomainStateObj = Object.assign({}, baseStateObj, {
            entity_id: stateObj.entity_id,
            attributes: Object.assign({}, baseStateObj.attributes)
          });

          for (var i = 0; i < states.length; i++) {
            if (groupDomain !== Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(states[i])) {
              groupDomainStateObj = false;
              break;
            }
          }
        }
      }

      if (!groupDomainStateObj) {
        var el = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this.$.groupedControlDetails);

        if (el.lastChild) {
          el.removeChild(el.lastChild);
        }
      } else {
        Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_5__["default"])(this.$.groupedControlDetails, "MORE-INFO-" + groupDomain.toUpperCase(), {
          stateObj: groupDomainStateObj,
          hass: this.hass
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
        stateObj: {
          type: Object
        },
        states: {
          type: Array,
          computed: "computeStates(stateObj, hass)"
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["statesChanged(stateObj, states)"];
    }
  }]);

  return MoreInfoGroup;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("more-info-group", MoreInfoGroup);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-history_graph.js":
/*!*******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-history_graph.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _cards_ha_history_graph_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cards/ha-history_graph-card */ "./src/cards/ha-history_graph-card.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          margin-bottom: 6px;\n        }\n      </style>\n      <ha-history_graph-card\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"\"\n      >\n        <ha-attributes state-obj=\"[[stateObj]]\"></ha-attributes>\n      </ha-history_graph-card>\n    "]);

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






var MoreInfoHistoryGraph =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoHistoryGraph, _PolymerElement);

  function MoreInfoHistoryGraph() {
    _classCallCheck(this, MoreInfoHistoryGraph);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoHistoryGraph).apply(this, arguments));
  }

  _createClass(MoreInfoHistoryGraph, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object
      };
    }
  }]);

  return MoreInfoHistoryGraph;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("more-info-history_graph", MoreInfoHistoryGraph);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-input_datetime.js":
/*!********************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-input_datetime.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_date_picker_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-date-picker/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _components_paper_time_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/paper-time-input */ "./src/components/paper-time-input.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <template is=\"dom-if\" if=\"[[doesHaveDate(stateObj)]]\" restamp=\"\">\n          <div>\n            <vaadin-date-picker\n              id=\"dateInput\"\n              on-value-changed=\"dateTimeChanged\"\n              label=\"Date\"\n              value=\"{{selectedDate}}\"\n            ></vaadin-date-picker>\n          </div>\n        </template>\n        <template is=\"dom-if\" if=\"[[doesHaveTime(stateObj)]]\" restamp=\"\">\n          <div>\n            <paper-time-input\n              hour=\"{{selectedHour}}\"\n              min=\"{{selectedMinute}}\"\n              format=\"24\"\n            ></paper-time-input>\n          </div>\n        </template>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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










var DatetimeInput =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(DatetimeInput, _PolymerElement);

  _createClass(DatetimeInput, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }]);

  function DatetimeInput() {
    var _this;

    _classCallCheck(this, DatetimeInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatetimeInput).call(this));
    _this.is_ready = false;
    return _this;
  }

  _createClass(DatetimeInput, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(DatetimeInput.prototype), "ready", this).call(this);

      this.is_ready = true;
    }
    /* Convert the date in the stateObj into a string useable by vaadin-date-picker */

  }, {
    key: "getDateString",
    value: function getDateString(stateObj) {
      if (stateObj.state === "unknown") {
        return "";
      }

      var monthFiller;

      if (stateObj.attributes.month < 10) {
        monthFiller = "0";
      } else {
        monthFiller = "";
      }

      var dayFiller;

      if (stateObj.attributes.day < 10) {
        dayFiller = "0";
      } else {
        dayFiller = "";
      }

      return stateObj.attributes.year + "-" + monthFiller + stateObj.attributes.month + "-" + dayFiller + stateObj.attributes.day;
    }
    /* Should fire when any value was changed *by the user*, not b/c of setting
     * initial values. */

  }, {
    key: "dateTimeChanged",
    value: function dateTimeChanged() {
      // Check if the change is really coming from the user
      if (!this.is_ready) {
        return;
      }

      var changed = false;
      var minuteFiller;
      var serviceData = {
        entity_id: this.stateObj.entity_id
      };

      if (this.stateObj.attributes.has_time) {
        changed |= parseInt(this.selectedMinute) !== this.stateObj.attributes.minute;
        changed |= parseInt(this.selectedHour) !== this.stateObj.attributes.hour;

        if (this.selectedMinute < 10) {
          minuteFiller = "0";
        } else {
          minuteFiller = "";
        }

        var timeStr = this.selectedHour + ":" + minuteFiller + this.selectedMinute;
        serviceData.time = timeStr;
      }

      if (this.stateObj.attributes.has_date) {
        if (this.selectedDate.length === 0) {
          return; // Date was not set
        }

        var dateValInput = new Date(this.selectedDate);
        var dateValState = new Date(this.stateObj.attributes.year, this.stateObj.attributes.month - 1, this.stateObj.attributes.day);
        changed |= dateValState !== dateValInput;
        serviceData.date = this.selectedDate;
      }

      if (changed) {
        this.hass.callService("input_datetime", "set_datetime", serviceData);
      }
    }
  }, {
    key: "stateObjChanged",
    value: function stateObjChanged(newVal) {
      // Set to non-ready s.t. dateTimeChanged does not fire
      this.is_ready = false;

      if (newVal.attributes.has_time) {
        this.selectedHour = newVal.attributes.hour;
        this.selectedMinute = newVal.attributes.minute;
      }

      if (newVal.attributes.has_date) {
        this.selectedDate = this.getDateString(newVal);
      }

      this.is_ready = true;
    }
  }, {
    key: "doesHaveDate",
    value: function doesHaveDate(stateObj) {
      return stateObj.attributes.has_date;
    }
  }, {
    key: "doesHaveTime",
    value: function doesHaveTime(stateObj) {
      return stateObj.attributes.has_time;
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      return "more-info-input_datetime " + Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__["attributeClassNames"])(stateObj, ["has_time", "has_date"]);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        selectedDate: {
          type: String,
          observer: "dateTimeChanged"
        },
        selectedHour: {
          type: Number,
          observer: "dateTimeChanged"
        },
        selectedMinute: {
          type: Number,
          observer: "dateTimeChanged"
        }
      };
    }
  }]);

  return DatetimeInput;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]);

customElements.define("more-info-input_datetime", DatetimeInput);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-light.js":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-light.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _components_ha_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-color-picker */ "./src/components/ha-color-picker.js");
/* harmony import */ var _components_ha_labeled_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-labeled-slider */ "./src/components/ha-labeled-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        .effect_list,\n        .brightness,\n        .color_temp,\n        .white_value {\n          max-height: 0px;\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .color_temp {\n          --ha-slider-background: -webkit-linear-gradient(\n            right,\n            rgb(255, 160, 0) 0%,\n            white 50%,\n            rgb(166, 209, 255) 100%\n          );\n          /* The color temp minimum value shouldn't be rendered differently. It's not \"off\". */\n          --paper-slider-knob-start-border-color: var(--primary-color);\n        }\n\n        .segmentationContainer {\n          position: relative;\n          width: 100%;\n        }\n\n        ha-color-picker {\n          display: block;\n          width: 100%;\n\n          max-height: 0px;\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .segmentationButton {\n          position: absolute;\n          top: 11%;\n          transform: translate(0%, 0%);\n          padding: 0px;\n          max-height: 0px;\n          width: 23px;\n          height: 23px;\n          opacity: var(--dark-secondary-opacity);\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .has-color.is-on .segmentationContainer .segmentationButton {\n          position: absolute;\n          top: 11%;\n          transform: translate(0%, 0%);\n          width: 23px;\n          height: 23px;\n          padding: 0px;\n          opacity: var(--dark-secondary-opacity);\n        }\n\n        .has-effect_list.is-on .effect_list,\n        .has-brightness .brightness,\n        .has-color_temp.is-on .color_temp,\n        .has-white_value.is-on .white_value {\n          max-height: 84px;\n        }\n\n        .has-brightness .has-color_temp.is-on,\n        .has-white_value.is-on {\n          margin-top: -16px;\n        }\n\n        .has-brightness .brightness,\n        .has-color_temp.is-on .color_temp,\n        .has-white_value.is-on .white_value {\n          padding-top: 16px;\n        }\n\n        .has-color.is-on .segmentationButton {\n          max-height: 100px;\n          overflow: visible;\n        }\n\n        .has-color.is-on ha-color-picker {\n          max-height: 500px;\n          overflow: visible;\n          --ha-color-picker-wheel-borderwidth: 5;\n          --ha-color-picker-wheel-bordercolor: white;\n          --ha-color-picker-wheel-shadow: none;\n          --ha-color-picker-marker-borderwidth: 2;\n          --ha-color-picker-marker-bordercolor: white;\n        }\n\n        .is-unavailable .control {\n          max-height: 0px;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"control brightness\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.light.brightness')]]\"\n            icon=\"hass:brightness-5\"\n            min=\"1\"\n            max=\"255\"\n            value=\"{{brightnessSliderValue}}\"\n            on-change=\"brightnessSliderChanged\"\n          ></ha-labeled-slider>\n        </div>\n\n        <div class=\"control color_temp\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.light.color_temperature')]]\"\n            icon=\"hass:thermometer\"\n            min=\"[[stateObj.attributes.min_mireds]]\"\n            max=\"[[stateObj.attributes.max_mireds]]\"\n            value=\"{{ctSliderValue}}\"\n            on-change=\"ctSliderChanged\"\n          ></ha-labeled-slider>\n        </div>\n\n        <div class=\"control white_value\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.light.white_value')]]\"\n            icon=\"hass:file-word-box\"\n            max=\"255\"\n            value=\"{{wvSliderValue}}\"\n            on-change=\"wvSliderChanged\"\n          ></ha-labeled-slider>\n        </div>\n        <div class=\"segmentationContainer\">\n          <ha-color-picker\n            class=\"control color\"\n            on-colorselected=\"colorPicked\"\n            desired-hs-color=\"{{colorPickerColor}}\"\n            throttle=\"500\"\n            hue-segments=\"{{hueSegments}}\"\n            saturation-segments=\"{{saturationSegments}}\"\n          >\n          </ha-color-picker>\n          <paper-icon-button\n            icon=\"mdi:palette\"\n            on-click=\"segmentClick\"\n            class=\"control segmentationButton\"\n          ></paper-icon-button>\n        </div>\n\n        <div class=\"control effect_list\">\n          <ha-paper-dropdown-menu\n            label-float=\"\"\n            dynamic-align=\"\"\n            label=\"[[localize('ui.card.light.effect')]]\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              selected=\"[[stateObj.attributes.effect]]\"\n              on-selected-changed=\"effectChanged\"\n              attr-for-selected=\"item-name\"\n            >\n              <template\n                is=\"dom-repeat\"\n                items=\"[[stateObj.attributes.effect_list]]\"\n              >\n                <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n        </div>\n\n        <ha-attributes\n          state-obj=\"[[stateObj]]\"\n          extra-filters=\"brightness,color_temp,white_value,effect_list,effect,hs_color,rgb_color,xy_color,min_mireds,max_mireds\"\n        ></ha-attributes>\n      </div>\n    "]);

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













var FEATURE_CLASS_NAMES = {
  1: "has-brightness",
  2: "has-color_temp",
  4: "has-effect_list",
  16: "has-color",
  128: "has-white_value"
};
/*
 * @appliesMixin EventsMixin
 */

var MoreInfoLight =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoLight, _LocalizeMixin);

  function MoreInfoLight() {
    _classCallCheck(this, MoreInfoLight);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoLight).apply(this, arguments));
  }

  _createClass(MoreInfoLight, [{
    key: "stateObjChanged",
    value: function stateObjChanged(newVal, oldVal) {
      var _this = this;

      var props = {
        brightnessSliderValue: 0
      };

      if (newVal && newVal.state === "on") {
        props.brightnessSliderValue = newVal.attributes.brightness;
        props.ctSliderValue = newVal.attributes.color_temp;
        props.wvSliderValue = newVal.attributes.white_value;

        if (newVal.attributes.hs_color) {
          props.colorPickerColor = {
            h: newVal.attributes.hs_color[0],
            s: newVal.attributes.hs_color[1] / 100
          };
        }
      }

      this.setProperties(props);

      if (oldVal) {
        setTimeout(function () {
          _this.fire("iron-resize");
        }, 500);
      }
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      var classes = [Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_9__["featureClassNames"])(stateObj, FEATURE_CLASS_NAMES)];

      if (stateObj && stateObj.state === "on") {
        classes.push("is-on");
      }

      if (stateObj && stateObj.state === "unavailable") {
        classes.push("is-unavailable");
      }

      return classes.join(" ");
    }
  }, {
    key: "effectChanged",
    value: function effectChanged(ev) {
      var oldVal = this.stateObj.attributes.effect;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        effect: newVal
      });
    }
  }, {
    key: "brightnessSliderChanged",
    value: function brightnessSliderChanged(ev) {
      var bri = parseInt(ev.target.value, 10);
      if (isNaN(bri)) return;
      this.hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        brightness: bri
      });
    }
  }, {
    key: "ctSliderChanged",
    value: function ctSliderChanged(ev) {
      var ct = parseInt(ev.target.value, 10);
      if (isNaN(ct)) return;
      this.hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        color_temp: ct
      });
    }
  }, {
    key: "wvSliderChanged",
    value: function wvSliderChanged(ev) {
      var wv = parseInt(ev.target.value, 10);
      if (isNaN(wv)) return;
      this.hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        white_value: wv
      });
    }
  }, {
    key: "segmentClick",
    value: function segmentClick() {
      if (this.hueSegments === 24 && this.saturationSegments === 8) {
        this.setProperties({
          hueSegments: 0,
          saturationSegments: 0
        });
      } else {
        this.setProperties({
          hueSegments: 24,
          saturationSegments: 8
        });
      }
    }
  }, {
    key: "serviceChangeColor",
    value: function serviceChangeColor(hass, entityId, color) {
      hass.callService("light", "turn_on", {
        entity_id: entityId,
        hs_color: [color.h, color.s * 100]
      });
    }
    /**
     * Called when a new color has been picked.
     * should be throttled with the 'throttle=' attribute of the color picker
     */

  }, {
    key: "colorPicked",
    value: function colorPicked(ev) {
      this.serviceChangeColor(this.hass, this.stateObj.entity_id, ev.detail.hs);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        brightnessSliderValue: {
          type: Number,
          value: 0
        },
        ctSliderValue: {
          type: Number,
          value: 0
        },
        wvSliderValue: {
          type: Number,
          value: 0
        },
        hueSegments: {
          type: Number,
          value: 24
        },
        saturationSegments: {
          type: Number,
          value: 8
        },
        colorPickerColor: {
          type: Object
        }
      };
    }
  }]);

  return MoreInfoLight;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

customElements.define("more-info-light", MoreInfoLight);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-lock.js":
/*!**********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-lock.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        paper-input {\n          display: inline-block;\n        }\n      </style>\n\n      <template is=\"dom-if\" if=\"[[stateObj.attributes.code_format]]\">\n        <paper-input\n          label=\"[[localize('ui.card.lock.code')]]\"\n          value=\"{{enteredCode}}\"\n          pattern=\"[[stateObj.attributes.code_format]]\"\n          type=\"password\"\n        ></paper-input>\n        <mwc-button\n          on-click=\"callService\"\n          data-service=\"unlock\"\n          hidden$=\"[[!isLocked]]\"\n          >[[localize('ui.card.lock.unlock')]]</mwc-button\n        >\n        <mwc-button\n          on-click=\"callService\"\n          data-service=\"lock\"\n          hidden$=\"[[isLocked]]\"\n          >[[localize('ui.card.lock.lock')]]</mwc-button\n        >\n      </template>\n      <ha-attributes\n        state-obj=\"[[stateObj]]\"\n        extra-filters=\"code_format\"\n      ></ha-attributes>\n    "]);

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

var MoreInfoLock =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoLock, _LocalizeMixin);

  function MoreInfoLock() {
    _classCallCheck(this, MoreInfoLock);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoLock).apply(this, arguments));
  }

  _createClass(MoreInfoLock, [{
    key: "stateObjChanged",
    value: function stateObjChanged(newVal) {
      if (newVal) {
        this.isLocked = newVal.state === "locked";
      }
    }
  }, {
    key: "callService",
    value: function callService(ev) {
      var service = ev.target.getAttribute("data-service");
      var data = {
        entity_id: this.stateObj.entity_id,
        code: this.enteredCode
      };
      this.hass.callService("lock", service, data);
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
        hass: Object,
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        enteredCode: {
          type: String,
          value: ""
        },
        isLocked: Boolean
      };
    }
  }]);

  return MoreInfoLock;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("more-info-lock", MoreInfoLock);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-media_player.js":
/*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-media_player.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/hass-media-player-model */ "./src/util/hass-media-player-model.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        .media-state {\n          text-transform: capitalize;\n        }\n\n        paper-icon-button[highlight] {\n          color: var(--accent-color);\n        }\n\n        .volume {\n          margin-bottom: 8px;\n\n          max-height: 0px;\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .has-volume_level .volume {\n          max-height: 40px;\n        }\n\n        iron-icon.source-input {\n          padding: 7px;\n          margin-top: 15px;\n        }\n\n        ha-paper-dropdown-menu.source-input {\n          margin-left: 10px;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"layout horizontal\">\n          <div class=\"flex\">\n            <paper-icon-button\n              icon=\"hass:power\"\n              highlight$=\"[[playerObj.isOff]]\"\n              on-click=\"handleTogglePower\"\n              hidden$=\"[[computeHidePowerButton(playerObj)]]\"\n            ></paper-icon-button>\n          </div>\n          <div>\n            <template\n              is=\"dom-if\"\n              if=\"[[computeShowPlaybackControls(playerObj)]]\"\n            >\n              <paper-icon-button\n                icon=\"hass:skip-previous\"\n                on-click=\"handlePrevious\"\n                hidden$=\"[[!playerObj.supportsPreviousTrack]]\"\n              ></paper-icon-button>\n              <paper-icon-button\n                icon=\"[[computePlaybackControlIcon(playerObj)]]\"\n                on-click=\"handlePlaybackControl\"\n                hidden$=\"[[!computePlaybackControlIcon(playerObj)]]\"\n                highlight=\"\"\n              ></paper-icon-button>\n              <paper-icon-button\n                icon=\"hass:skip-next\"\n                on-click=\"handleNext\"\n                hidden$=\"[[!playerObj.supportsNextTrack]]\"\n              ></paper-icon-button>\n            </template>\n          </div>\n        </div>\n        <!-- VOLUME -->\n        <div\n          class=\"volume_buttons center horizontal layout\"\n          hidden$=\"[[computeHideVolumeButtons(playerObj)]]\"\n        >\n          <paper-icon-button\n            on-click=\"handleVolumeTap\"\n            icon=\"hass:volume-off\"\n          ></paper-icon-button>\n          <paper-icon-button\n            id=\"volumeDown\"\n            disabled$=\"[[playerObj.isMuted]]\"\n            on-mousedown=\"handleVolumeDown\"\n            on-touchstart=\"handleVolumeDown\"\n            on-touchend=\"handleVolumeTouchEnd\"\n            icon=\"hass:volume-medium\"\n          ></paper-icon-button>\n          <paper-icon-button\n            id=\"volumeUp\"\n            disabled$=\"[[playerObj.isMuted]]\"\n            on-mousedown=\"handleVolumeUp\"\n            on-touchstart=\"handleVolumeUp\"\n            on-touchend=\"handleVolumeTouchEnd\"\n            icon=\"hass:volume-high\"\n          ></paper-icon-button>\n        </div>\n        <div\n          class=\"volume center horizontal layout\"\n          hidden$=\"[[!playerObj.supportsVolumeSet]]\"\n        >\n          <paper-icon-button\n            on-click=\"handleVolumeTap\"\n            hidden$=\"[[playerObj.supportsVolumeButtons]]\"\n            icon=\"[[computeMuteVolumeIcon(playerObj)]]\"\n          ></paper-icon-button>\n          <ha-paper-slider\n            disabled$=\"[[playerObj.isMuted]]\"\n            min=\"0\"\n            max=\"100\"\n            value=\"[[playerObj.volumeSliderValue]]\"\n            on-change=\"volumeSliderChanged\"\n            class=\"flex\"\n            ignore-bar-touch=\"\"\n            dir=\"{{rtl}}\"\n          >\n          </ha-paper-slider>\n        </div>\n        <!-- SOURCE PICKER -->\n        <div\n          class=\"controls layout horizontal justified\"\n          hidden$=\"[[computeHideSelectSource(playerObj)]]\"\n        >\n          <iron-icon class=\"source-input\" icon=\"hass:login-variant\"></iron-icon>\n          <ha-paper-dropdown-menu\n            class=\"flex source-input\"\n            dynamic-align=\"\"\n            label-float=\"\"\n            label=\"[[localize('ui.card.media_player.source')]]\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              attr-for-selected=\"item-name\"\n              selected=\"[[playerObj.source]]\"\n              on-selected-changed=\"handleSourceChanged\"\n            >\n              <template is=\"dom-repeat\" items=\"[[playerObj.sourceList]]\">\n                <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n        </div>\n        <!-- SOUND MODE PICKER -->\n        <template is=\"dom-if\" if=\"[[!computeHideSelectSoundMode(playerObj)]]\">\n          <div class=\"controls layout horizontal justified\">\n            <iron-icon class=\"source-input\" icon=\"hass:music-note\"></iron-icon>\n            <ha-paper-dropdown-menu\n              class=\"flex source-input\"\n              dynamic-align\n              label-float\n              label=\"[[localize('ui.card.media_player.sound_mode')]]\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                attr-for-selected=\"item-name\"\n                selected=\"[[playerObj.soundMode]]\"\n                on-selected-changed=\"handleSoundModeChanged\"\n              >\n                <template is=\"dom-repeat\" items=\"[[playerObj.soundModeList]]\">\n                  <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n                </template>\n              </paper-listbox>\n            </ha-paper-dropdown-menu>\n          </div>\n        </template>\n        <!-- TTS -->\n        <div\n          hidden$=\"[[computeHideTTS(ttsLoaded, playerObj)]]\"\n          class=\"layout horizontal end\"\n        >\n          <paper-input\n            id=\"ttsInput\"\n            label=\"[[localize('ui.card.media_player.text_to_speak')]]\"\n            class=\"flex\"\n            value=\"{{ttsMessage}}\"\n            on-keydown=\"ttsCheckForEnter\"\n          ></paper-input>\n          <paper-icon-button\n            icon=\"hass:send\"\n            on-click=\"sendTTS\"\n          ></paper-icon-button>\n        </div>\n      </div>\n    "]);

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
 * @appliesMixin EventsMixin
 */

var MoreInfoMediaPlayer =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoMediaPlayer, _LocalizeMixin);

  function MoreInfoMediaPlayer() {
    _classCallCheck(this, MoreInfoMediaPlayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoMediaPlayer).apply(this, arguments));
  }

  _createClass(MoreInfoMediaPlayer, [{
    key: "computePlayerObj",
    value: function computePlayerObj(hass, stateObj) {
      return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_9__["default"](hass, stateObj);
    }
  }, {
    key: "playerObjChanged",
    value: function playerObjChanged(newVal, oldVal) {
      var _this = this;

      if (oldVal) {
        setTimeout(function () {
          _this.fire("iron-resize");
        }, 500);
      }
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      return Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__["attributeClassNames"])(stateObj, ["volume_level"]);
    }
  }, {
    key: "computeMuteVolumeIcon",
    value: function computeMuteVolumeIcon(playerObj) {
      return playerObj.isMuted ? "hass:volume-off" : "hass:volume-high";
    }
  }, {
    key: "computeHideVolumeButtons",
    value: function computeHideVolumeButtons(playerObj) {
      return !playerObj.supportsVolumeButtons || playerObj.isOff;
    }
  }, {
    key: "computeShowPlaybackControls",
    value: function computeShowPlaybackControls(playerObj) {
      return !playerObj.isOff && playerObj.hasMediaControl;
    }
  }, {
    key: "computePlaybackControlIcon",
    value: function computePlaybackControlIcon(playerObj) {
      if (playerObj.isPlaying) {
        return playerObj.supportsPause ? "hass:pause" : "hass:stop";
      }

      if (playerObj.hasMediaControl || playerObj.isOff || playerObj.isIdle) {
        if (playerObj.hasMediaControl && playerObj.supportsPause && !playerObj.isPaused) {
          return "hass:play-pause";
        }

        return playerObj.supportsPlay ? "hass:play" : null;
      }

      return "";
    }
  }, {
    key: "computeHidePowerButton",
    value: function computeHidePowerButton(playerObj) {
      return playerObj.isOff ? !playerObj.supportsTurnOn : !playerObj.supportsTurnOff;
    }
  }, {
    key: "computeHideSelectSource",
    value: function computeHideSelectSource(playerObj) {
      return playerObj.isOff || !playerObj.supportsSelectSource || !playerObj.sourceList;
    }
  }, {
    key: "computeHideSelectSoundMode",
    value: function computeHideSelectSoundMode(playerObj) {
      return playerObj.isOff || !playerObj.supportsSelectSoundMode || !playerObj.soundModeList;
    }
  }, {
    key: "computeHideTTS",
    value: function computeHideTTS(ttsLoaded, playerObj) {
      return !ttsLoaded || !playerObj.supportsPlayMedia;
    }
  }, {
    key: "computeTTSLoaded",
    value: function computeTTSLoaded(hass) {
      return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_11__["default"])(hass, "tts");
    }
  }, {
    key: "handleTogglePower",
    value: function handleTogglePower() {
      this.playerObj.togglePower();
    }
  }, {
    key: "handlePrevious",
    value: function handlePrevious() {
      this.playerObj.previousTrack();
    }
  }, {
    key: "handlePlaybackControl",
    value: function handlePlaybackControl() {
      this.playerObj.mediaPlayPause();
    }
  }, {
    key: "handleNext",
    value: function handleNext() {
      this.playerObj.nextTrack();
    }
  }, {
    key: "handleSourceChanged",
    value: function handleSourceChanged(ev) {
      if (!this.playerObj) return;
      var oldVal = this.playerObj.source;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.playerObj.selectSource(newVal);
    }
  }, {
    key: "handleSoundModeChanged",
    value: function handleSoundModeChanged(ev) {
      if (!this.playerObj) return;
      var oldVal = this.playerObj.soundMode;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.playerObj.selectSoundMode(newVal);
    }
  }, {
    key: "handleVolumeTap",
    value: function handleVolumeTap() {
      if (!this.playerObj.supportsVolumeMute) {
        return;
      }

      this.playerObj.volumeMute(!this.playerObj.isMuted);
    }
  }, {
    key: "handleVolumeTouchEnd",
    value: function handleVolumeTouchEnd(ev) {
      /* when touch ends, we must prevent this from
       * becoming a mousedown, up, click by emulation */
      ev.preventDefault();
    }
  }, {
    key: "handleVolumeUp",
    value: function handleVolumeUp() {
      var obj = this.$.volumeUp;
      this.handleVolumeWorker("volume_up", obj, true);
    }
  }, {
    key: "handleVolumeDown",
    value: function handleVolumeDown() {
      var obj = this.$.volumeDown;
      this.handleVolumeWorker("volume_down", obj, true);
    }
  }, {
    key: "handleVolumeWorker",
    value: function handleVolumeWorker(service, obj, force) {
      var _this2 = this;

      if (force || obj !== undefined && obj.pointerDown) {
        this.playerObj.callService(service);
        setTimeout(function () {
          return _this2.handleVolumeWorker(service, obj, false);
        }, 500);
      }
    }
  }, {
    key: "volumeSliderChanged",
    value: function volumeSliderChanged(ev) {
      var volPercentage = parseFloat(ev.target.value);
      var volume = volPercentage > 0 ? volPercentage / 100 : 0;
      this.playerObj.setVolume(volume);
    }
  }, {
    key: "ttsCheckForEnter",
    value: function ttsCheckForEnter(ev) {
      if (ev.keyCode === 13) this.sendTTS();
    }
  }, {
    key: "sendTTS",
    value: function sendTTS() {
      var services = this.hass.services.tts;
      var serviceKeys = Object.keys(services).sort();
      var service;
      var i;

      for (i = 0; i < serviceKeys.length; i++) {
        if (serviceKeys[i].indexOf("_say") !== -1) {
          service = serviceKeys[i];
          break;
        }
      }

      if (!service) {
        return;
      }

      this.hass.callService("tts", service, {
        entity_id: this.stateObj.entity_id,
        message: this.ttsMessage
      });
      this.ttsMessage = "";
      this.$.ttsInput.focus();
    }
  }, {
    key: "_computeRTLDirection",
    value: function _computeRTLDirection(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__["computeRTLDirection"])(hass);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        playerObj: {
          type: Object,
          computed: "computePlayerObj(hass, stateObj)",
          observer: "playerObjChanged"
        },
        ttsLoaded: {
          type: Boolean,
          computed: "computeTTSLoaded(hass)"
        },
        ttsMessage: {
          type: String,
          value: ""
        },
        rtl: {
          type: String,
          computed: "_computeRTLDirection(hass)"
        }
      };
    }
  }]);

  return MoreInfoMediaPlayer;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"])));

customElements.define("more-info-media_player", MoreInfoMediaPlayer);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-script.js":
/*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-script.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n\n      <div class=\"layout vertical\">\n        <div class=\"data-entry layout justified horizontal\">\n          <div class=\"key\">\n            [[localize('ui.dialogs.more_info_control.script.last_action')]]\n          </div>\n          <div class=\"value\">[[stateObj.attributes.last_action]]</div>\n        </div>\n      </div>\n    "]);

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






var MoreInfoScript =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoScript, _LocalizeMixin);

  function MoreInfoScript() {
    _classCallCheck(this, MoreInfoScript);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoScript).apply(this, arguments));
  }

  _createClass(MoreInfoScript, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        stateObj: {
          type: Object
        }
      };
    }
  }]);

  return MoreInfoScript;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("more-info-script", MoreInfoScript);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-sun.js":
/*!*********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-sun.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n\n      <template\n        is=\"dom-repeat\"\n        items=\"[[computeOrder(risingDate, settingDate)]]\"\n      >\n        <div class=\"data-entry layout justified horizontal\">\n          <div class=\"key\">\n            <span>[[itemCaption(item)]]</span>\n            <ha-relative-time\n              hass=\"[[hass]]\"\n              datetime-obj=\"[[itemDate(item)]]\"\n            ></ha-relative-time>\n          </div>\n          <div class=\"value\">[[itemValue(item)]]</div>\n        </div>\n      </template>\n      <div class=\"data-entry layout justified horizontal\">\n        <div class=\"key\">\n          [[localize('ui.dialogs.more_info_control.sun.elevation')]]\n        </div>\n        <div class=\"value\">[[stateObj.attributes.elevation]]</div>\n      </div>\n    "]);

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








var MoreInfoSun =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoSun, _LocalizeMixin);

  function MoreInfoSun() {
    _classCallCheck(this, MoreInfoSun);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoSun).apply(this, arguments));
  }

  _createClass(MoreInfoSun, [{
    key: "computeRising",
    value: function computeRising(stateObj) {
      return new Date(stateObj.attributes.next_rising);
    }
  }, {
    key: "computeSetting",
    value: function computeSetting(stateObj) {
      return new Date(stateObj.attributes.next_setting);
    }
  }, {
    key: "computeOrder",
    value: function computeOrder(risingDate, settingDate) {
      return risingDate > settingDate ? ["set", "ris"] : ["ris", "set"];
    }
  }, {
    key: "itemCaption",
    value: function itemCaption(type) {
      if (type === "ris") {
        return this.localize("ui.dialogs.more_info_control.sun.rising");
      }

      return this.localize("ui.dialogs.more_info_control.sun.setting");
    }
  }, {
    key: "itemDate",
    value: function itemDate(type) {
      return type === "ris" ? this.risingDate : this.settingDate;
    }
  }, {
    key: "itemValue",
    value: function itemValue(type) {
      return Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__["default"])(this.itemDate(type), this.hass.language);
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
        hass: Object,
        stateObj: Object,
        risingDate: {
          type: Object,
          computed: "computeRising(stateObj)"
        },
        settingDate: {
          type: Object,
          computed: "computeSetting(stateObj)"
        }
      };
    }
  }]);

  return MoreInfoSun;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("more-info-sun", MoreInfoSun);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-timer.ts":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-timer.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");



var MoreInfoTimer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MoreInfoTimer, _super);
    function MoreInfoTimer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoreInfoTimer.prototype.render = function () {
        if (!this.hass || !this.stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-attributes\n        .stateObj=", "\n        .extraFilters=", "\n      ></ha-attributes>\n      <div class=\"actions\">\n        ", "\n        ", "\n        ", "\n      </div>\n    "], ["\n      <ha-attributes\n        .stateObj=", "\n        .extraFilters=", "\n      ></ha-attributes>\n      <div class=\"actions\">\n        ",
            "\n        ",
            "\n        ",
            "\n      </div>\n    "])), this.stateObj, "remaining", this.stateObj.state === "idle" || this.stateObj.state === "paused"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n              >\n                ", "\n              </mwc-button>\n            "], ["\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n              >\n                ", "\n              </mwc-button>\n            "])), "start", this._handleActionClick, this.hass.localize("ui.card.timer.actions.start")) : "", this.stateObj.state === "active"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n              >\n                ", "\n              </mwc-button>\n            "], ["\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n              >\n                ", "\n              </mwc-button>\n            "])), "pause", this._handleActionClick, this.hass.localize("ui.card.timer.actions.pause")) : "", this.stateObj.state === "active" || this.stateObj.state === "paused"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n              >\n                ", "\n              </mwc-button>\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n              >\n                ", "\n              </mwc-button>\n            "], ["\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n              >\n                ", "\n              </mwc-button>\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n              >\n                ", "\n              </mwc-button>\n            "])), "cancel", this._handleActionClick, this.hass.localize("ui.card.timer.actions.cancel"), "finish", this._handleActionClick, this.hass.localize("ui.card.timer.actions.finish")) : "");
    };
    MoreInfoTimer.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (!changedProps.has("stateObj") || !this.stateObj) {
            return;
        }
    };
    MoreInfoTimer.prototype._handleActionClick = function (e) {
        var action = e.currentTarget.action;
        this.hass.callService("timer", action, {
            entity_id: this.stateObj.entity_id,
        });
    };
    Object.defineProperty(MoreInfoTimer, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .actions {\n        margin: 0 8px;\n        padding-top: 20px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n      }\n    "], ["\n      .actions {\n        margin: 0 8px;\n        padding-top: 20px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], MoreInfoTimer.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], MoreInfoTimer.prototype, "stateObj", void 0);
    MoreInfoTimer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("more-info-timer")
    ], MoreInfoTimer);
    return MoreInfoTimer;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-updater.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-updater.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .link {\n          color: #03a9f4;\n        }\n      </style>\n\n      <div>\n        <a\n          class=\"link\"\n          href=\"https://www.home-assistant.io/docs/installation/updating/\"\n          target=\"_blank\"\n          >[[localize('ui.dialogs.more_info_control.updater.title')]]</a\n        >\n      </div>\n    "]);

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





var MoreInfoUpdater =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoUpdater, _LocalizeMixin);

  function MoreInfoUpdater() {
    _classCallCheck(this, MoreInfoUpdater);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoUpdater).apply(this, arguments));
  }

  _createClass(MoreInfoUpdater, [{
    key: "computeReleaseNotes",
    value: function computeReleaseNotes(stateObj) {
      return stateObj.attributes.release_notes || "https://www.home-assistant.io/docs/installation/updating/";
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
        stateObj: {
          type: Object
        }
      };
    }
  }]);

  return MoreInfoUpdater;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("more-info-updater", MoreInfoUpdater);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-vacuum.js":
/*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-vacuum.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        :host {\n          @apply --paper-font-body1;\n          line-height: 1.5;\n        }\n\n        .status-subtitle {\n          color: var(--secondary-text-color);\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        <div hidden$=\"[[!supportsStatus(stateObj)]]\">\n          <span class=\"status-subtitle\">Status: </span\n          ><span><strong>[[stateObj.attributes.status]]</strong></span>\n        </div>\n        <div hidden$=\"[[!supportsBattery(stateObj)]]\">\n          <span\n            ><iron-icon icon=\"[[stateObj.attributes.battery_icon]]\"></iron-icon>\n            [[stateObj.attributes.battery_level]] %</span\n          >\n        </div>\n      </div>\n      <div hidden$=\"[[!supportsCommandBar(stateObj)]]\">\n        <p></p>\n        <div class=\"status-subtitle\">Vacuum cleaner commands:</div>\n        <div class=\"horizontal justified layout\">\n          <template is=\"dom-if\" if=\"[[supportsStart(stateObj)]]\">\n            <div>\n              <paper-icon-button\n                icon=\"hass:play\"\n                on-click=\"onStart\"\n                title=\"Start\"\n              ></paper-icon-button>\n            </div>\n            <div hidden$=\"[[!supportsPause(stateObj)]]\">\n              <paper-icon-button\n                icon=\"hass:pause\"\n                on-click=\"onPause\"\n                title=\"Pause\"\n              ></paper-icon-button>\n            </div>\n          </template>\n          <template is=\"dom-if\" if=\"[[!supportsStart(stateObj)]]\">\n            <div hidden$=\"[[!supportsPause(stateObj)]]\">\n              <paper-icon-button\n                icon=\"hass:play-pause\"\n                on-click=\"onPlayPause\"\n                title=\"Pause\"\n              ></paper-icon-button>\n            </div>\n          </template>\n\n          <div hidden$=\"[[!supportsStop(stateObj)]]\">\n            <paper-icon-button\n              icon=\"hass:stop\"\n              on-click=\"onStop\"\n              title=\"Stop\"\n            ></paper-icon-button>\n          </div>\n          <div hidden$=\"[[!supportsCleanSpot(stateObj)]]\">\n            <paper-icon-button\n              icon=\"hass:broom\"\n              on-click=\"onCleanSpot\"\n              title=\"Clean spot\"\n            ></paper-icon-button>\n          </div>\n          <div hidden$=\"[[!supportsLocate(stateObj)]]\">\n            <paper-icon-button\n              icon=\"hass:map-marker\"\n              on-click=\"onLocate\"\n              title=\"Locate\"\n            ></paper-icon-button>\n          </div>\n          <div hidden$=\"[[!supportsReturnHome(stateObj)]]\">\n            <paper-icon-button\n              icon=\"hass:home-map-marker\"\n              on-click=\"onReturnHome\"\n              title=\"Return home\"\n            ></paper-icon-button>\n          </div>\n        </div>\n      </div>\n\n      <div hidden$=\"[[!supportsFanSpeed(stateObj)]]\">\n        <div class=\"horizontal justified layout\">\n          <ha-paper-dropdown-menu\n            label-float=\"\"\n            dynamic-align=\"\"\n            label=\"Fan speed\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              selected=\"[[stateObj.attributes.fan_speed]]\"\n              on-selected-changed=\"fanSpeedChanged\"\n              attr-for-selected=\"item-name\"\n            >\n              <template\n                is=\"dom-repeat\"\n                items=\"[[stateObj.attributes.fan_speed_list]]\"\n              >\n                <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n          <div\n            style=\"justify-content: center; align-self: center; padding-top: 1.3em\"\n          >\n            <span\n              ><iron-icon icon=\"hass:fan\"></iron-icon>\n              [[stateObj.attributes.fan_speed]]</span\n            >\n          </div>\n        </div>\n        <p></p>\n      </div>\n      <ha-attributes\n        state-obj=\"[[stateObj]]\"\n        extra-filters=\"fan_speed,fan_speed_list,status,battery_level,battery_icon\"\n      ></ha-attributes>\n    "]);

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












var MoreInfoVacuum =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoVacuum, _PolymerElement);

  function MoreInfoVacuum() {
    _classCallCheck(this, MoreInfoVacuum);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoVacuum).apply(this, arguments));
  }

  _createClass(MoreInfoVacuum, [{
    key: "supportsPause",
    value: function supportsPause(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 4);
    }
  }, {
    key: "supportsStop",
    value: function supportsStop(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8);
    }
  }, {
    key: "supportsReturnHome",
    value: function supportsReturnHome(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 16);
    }
  }, {
    key: "supportsFanSpeed",
    value: function supportsFanSpeed(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 32);
    }
  }, {
    key: "supportsBattery",
    value: function supportsBattery(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 64);
    }
  }, {
    key: "supportsStatus",
    value: function supportsStatus(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 128);
    }
  }, {
    key: "supportsLocate",
    value: function supportsLocate(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 512);
    }
  }, {
    key: "supportsCleanSpot",
    value: function supportsCleanSpot(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 1024);
    }
  }, {
    key: "supportsStart",
    value: function supportsStart(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8192);
    }
  }, {
    key: "supportsCommandBar",
    value: function supportsCommandBar(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 4) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 16) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 512) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 1024) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8192);
    }
  }, {
    key: "fanSpeedChanged",
    value: function fanSpeedChanged(ev) {
      var oldVal = this.stateObj.attributes.fan_speed;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.hass.callService("vacuum", "set_fan_speed", {
        entity_id: this.stateObj.entity_id,
        fan_speed: newVal
      });
    }
  }, {
    key: "onStop",
    value: function onStop() {
      this.hass.callService("vacuum", "stop", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onPlayPause",
    value: function onPlayPause() {
      this.hass.callService("vacuum", "start_pause", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onPause",
    value: function onPause() {
      this.hass.callService("vacuum", "pause", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onStart",
    value: function onStart() {
      this.hass.callService("vacuum", "start", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onLocate",
    value: function onLocate() {
      this.hass.callService("vacuum", "locate", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onCleanSpot",
    value: function onCleanSpot() {
      this.hass.callService("vacuum", "clean_spot", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onReturnHome",
    value: function onReturnHome() {
      this.hass.callService("vacuum", "return_to_base", {
        entity_id: this.stateObj.entity_id
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        inDialog: {
          type: Boolean,
          value: false
        },
        stateObj: {
          type: Object
        }
      };
    }
  }]);

  return MoreInfoVacuum;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"]);

customElements.define("more-info-vacuum", MoreInfoVacuum);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-water_heater.js":
/*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-water_heater.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_water_heater_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-water_heater-control */ "./src/components/ha-water_heater-control.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        :host {\n          color: var(--primary-text-color);\n        }\n\n        .container-away_mode,\n        .container-temperature,\n        .container-operation_list,\n\n        .has-away_mode .container-away_mode,\n        .has-target_temperature .container-temperature,\n        .has-operation_mode .container-operation_list,\n\n        .container-operation_list iron-icon,\n\n        ha-paper-dropdown-menu {\n          width: 100%;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n\n        ha-paper-slider {\n          width: 100%;\n        }\n\n        ha-water_heater-control.range-control-left,\n        ha-water_heater-control.range-control-right {\n          float: left;\n          width: 46%;\n        }\n        ha-water_heater-control.range-control-left {\n          margin-right: 4%;\n        }\n        ha-water_heater-control.range-control-right {\n          margin-left: 4%;\n        }\n\n        .single-row {\n          padding: 8px 0;\n        }\n        }\n      </style>\n\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"container-temperature\">\n          <div class$=\"[[stateObj.attributes.operation_mode]]\">\n            <div hidden$=\"[[!supportsTemperatureControls(stateObj)]]\">\n              [[localize('ui.card.water_heater.target_temperature')]]\n            </div>\n            <template is=\"dom-if\" if=\"[[supportsTemperature(stateObj)]]\">\n              <ha-water_heater-control\n                value=\"[[stateObj.attributes.temperature]]\"\n                units=\"[[hass.config.unit_system.temperature]]\"\n                step=\"[[computeTemperatureStepSize(hass, stateObj)]]\"\n                min=\"[[stateObj.attributes.min_temp]]\"\n                max=\"[[stateObj.attributes.max_temp]]\"\n                on-change=\"targetTemperatureChanged\"\n              >\n              </ha-water_heater-control>\n            </template>\n          </div>\n        </div>\n\n        <template is=\"dom-if\" if=\"[[supportsOperationMode(stateObj)]]\">\n          <div class=\"container-operation_list\">\n            <div class=\"controls\">\n              <ha-paper-dropdown-menu\n                label-float=\"\"\n                dynamic-align=\"\"\n                label=\"[[localize('ui.card.water_heater.operation')]]\"\n              >\n                <paper-listbox\n                  slot=\"dropdown-content\"\n                  selected=\"[[stateObj.attributes.operation_mode]]\"\n                  attr-for-selected=\"item-name\"\n                  on-selected-changed=\"handleOperationmodeChanged\"\n                >\n                  <template\n                    is=\"dom-repeat\"\n                    items=\"[[stateObj.attributes.operation_list]]\"\n                  >\n                    <paper-item item-name$=\"[[item]]\"\n                      >[[_localizeOperationMode(localize, item)]]</paper-item\n                    >\n                  </template>\n                </paper-listbox>\n              </ha-paper-dropdown-menu>\n            </div>\n          </div>\n        </template>\n\n        <template is=\"dom-if\" if=\"[[supportsAwayMode(stateObj)]]\">\n          <div class=\"container-away_mode\">\n            <div class=\"center horizontal layout single-row\">\n              <div class=\"flex\">\n                [[localize('ui.card.water_heater.away_mode')]]\n              </div>\n              <ha-switch\n                checked=\"[[awayToggleChecked]]\"\n                on-change=\"awayToggleChanged\"\n              >\n              </ha-switch>\n            </div>\n          </div>\n        </template>\n      </div>\n    "]);

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
 * @appliesMixin LocalizeMixin
 */

var MoreInfoWaterHeater =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoWaterHeater, _LocalizeMixin);

  function MoreInfoWaterHeater() {
    _classCallCheck(this, MoreInfoWaterHeater);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoWaterHeater).apply(this, arguments));
  }

  _createClass(MoreInfoWaterHeater, [{
    key: "stateObjChanged",
    value: function stateObjChanged(newVal, oldVal) {
      var _this = this;

      if (newVal) {
        this.setProperties({
          awayToggleChecked: newVal.attributes.away_mode === "on"
        });
      }

      if (oldVal) {
        this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_3__["timeOut"].after(500), function () {
          _this.fire("iron-resize");
        });
      }
    }
  }, {
    key: "computeTemperatureStepSize",
    value: function computeTemperatureStepSize(hass, stateObj) {
      if (stateObj.attributes.target_temp_step) {
        return stateObj.attributes.target_temp_step;
      }

      if (hass.config.unit_system.temperature.indexOf("F") !== -1) {
        return 1;
      }

      return 0.5;
    }
  }, {
    key: "supportsTemperatureControls",
    value: function supportsTemperatureControls(stateObj) {
      return this.supportsTemperature(stateObj);
    }
  }, {
    key: "supportsTemperature",
    value: function supportsTemperature(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_11__["supportsFeature"])(stateObj, 1) && typeof stateObj.attributes.temperature === "number";
    }
  }, {
    key: "supportsOperationMode",
    value: function supportsOperationMode(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_11__["supportsFeature"])(stateObj, 2);
    }
  }, {
    key: "supportsAwayMode",
    value: function supportsAwayMode(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_11__["supportsFeature"])(stateObj, 4);
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      var _featureClassNames = {
        1: "has-target_temperature",
        2: "has-operation_mode",
        4: "has-away_mode"
      };
      var classes = [Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_13__["featureClassNames"])(stateObj, _featureClassNames)];
      classes.push("more-info-water_heater");
      return classes.join(" ");
    }
  }, {
    key: "targetTemperatureChanged",
    value: function targetTemperatureChanged(ev) {
      var temperature = ev.target.value;
      if (temperature === this.stateObj.attributes.temperature) return;
      this.callServiceHelper("set_temperature", {
        temperature: temperature
      });
    }
  }, {
    key: "awayToggleChanged",
    value: function awayToggleChanged(ev) {
      var oldVal = this.stateObj.attributes.away_mode === "on";
      var newVal = ev.target.checked;
      if (oldVal === newVal) return;
      this.callServiceHelper("set_away_mode", {
        away_mode: newVal
      });
    }
  }, {
    key: "handleOperationmodeChanged",
    value: function handleOperationmodeChanged(ev) {
      var oldVal = this.stateObj.attributes.operation_mode;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.callServiceHelper("set_operation_mode", {
        operation_mode: newVal
      });
    }
  }, {
    key: "callServiceHelper",
    value: function callServiceHelper(service, data) {
      var _this2 = this;

      // We call stateChanged after a successful call to re-sync the inputs
      // with the state. It will be out of sync if our service call did not
      // result in the entity to be turned on. Since the state is not changing,
      // the resync is not called automatic.

      /* eslint-disable no-param-reassign */
      data.entity_id = this.stateObj.entity_id;
      /* eslint-enable no-param-reassign */

      this.hass.callService("water_heater", service, data).then(function () {
        _this2.stateObjChanged(_this2.stateObj);
      });
    }
  }, {
    key: "_localizeOperationMode",
    value: function _localizeOperationMode(localize, mode) {
      return localize("state.water_heater.".concat(mode)) || mode;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        awayToggleChecked: Boolean
      };
    }
  }]);

  return MoreInfoWaterHeater;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"])));

customElements.define("more-info-water_heater", MoreInfoWaterHeater);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-weather.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-weather.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        iron-icon {\n          color: var(--paper-item-icon-color);\n        }\n        .section {\n          margin: 16px 0 8px 0;\n          font-size: 1.2em;\n        }\n\n        .flex {\n          display: flex;\n          height: 32px;\n          align-items: center;\n        }\n\n        .main {\n          flex: 1;\n          margin-left: 24px;\n        }\n\n        .temp,\n        .templow {\n          min-width: 48px;\n          text-align: right;\n        }\n\n        .templow {\n          margin: 0 16px;\n          color: var(--secondary-text-color);\n        }\n\n        .attribution {\n          color: var(--secondary-text-color);\n          text-align: center;\n        }\n      </style>\n\n      <div class=\"flex\">\n        <iron-icon icon=\"hass:thermometer\"></iron-icon>\n        <div class=\"main\">\n          [[localize('ui.card.weather.attributes.temperature')]]\n        </div>\n        <div>\n          [[stateObj.attributes.temperature]] [[getUnit('temperature')]]\n        </div>\n      </div>\n      <template is=\"dom-if\" if=\"[[_showValue(stateObj.attributes.pressure)]]\">\n        <div class=\"flex\">\n          <iron-icon icon=\"hass:gauge\"></iron-icon>\n          <div class=\"main\">\n            [[localize('ui.card.weather.attributes.air_pressure')]]\n          </div>\n          <div>\n            [[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]\n          </div>\n        </div>\n      </template>\n      <template is=\"dom-if\" if=\"[[_showValue(stateObj.attributes.humidity)]]\">\n        <div class=\"flex\">\n          <iron-icon icon=\"hass:water-percent\"></iron-icon>\n          <div class=\"main\">\n            [[localize('ui.card.weather.attributes.humidity')]]\n          </div>\n          <div>[[stateObj.attributes.humidity]] %</div>\n        </div>\n      </template>\n      <template is=\"dom-if\" if=\"[[_showValue(stateObj.attributes.wind_speed)]]\">\n        <div class=\"flex\">\n          <iron-icon icon=\"hass:weather-windy\"></iron-icon>\n          <div class=\"main\">\n            [[localize('ui.card.weather.attributes.wind_speed')]]\n          </div>\n          <div>\n            [[getWind(stateObj.attributes.wind_speed,\n            stateObj.attributes.wind_bearing, localize)]]\n          </div>\n        </div>\n      </template>\n      <template is=\"dom-if\" if=\"[[_showValue(stateObj.attributes.visibility)]]\">\n        <div class=\"flex\">\n          <iron-icon icon=\"hass:eye\"></iron-icon>\n          <div class=\"main\">\n            [[localize('ui.card.weather.attributes.visibility')]]\n          </div>\n          <div>[[stateObj.attributes.visibility]] [[getUnit('length')]]</div>\n        </div>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[stateObj.attributes.forecast]]\">\n        <div class=\"section\">[[localize('ui.card.weather.forecast')]]:</div>\n        <template is=\"dom-repeat\" items=\"[[stateObj.attributes.forecast]]\">\n          <div class=\"flex\">\n            <template is=\"dom-if\" if=\"[[_showValue(item.condition)]]\">\n              <iron-icon icon=\"[[getWeatherIcon(item.condition)]]\"></iron-icon>\n            </template>\n            <template is=\"dom-if\" if=\"[[!_showValue(item.templow)]]\">\n              <div class=\"main\">[[computeDateTime(item.datetime)]]</div>\n            </template>\n            <template is=\"dom-if\" if=\"[[_showValue(item.templow)]]\">\n              <div class=\"main\">[[computeDate(item.datetime)]]</div>\n              <div class=\"templow\">\n                [[item.templow]] [[getUnit('temperature')]]\n              </div>\n            </template>\n            <div class=\"temp\">\n              [[item.temperature]] [[getUnit('temperature')]]\n            </div>\n          </div>\n        </template>\n      </template>\n\n      <template is=\"dom-if\" if=\"stateObj.attributes.attribution\">\n        <div class=\"attribution\">[[stateObj.attributes.attribution]]</div>\n      </template>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/*
 * @appliesMixin LocalizeMixin
 */

var MoreInfoWeather =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoWeather, _LocalizeMixin);

  _createClass(MoreInfoWeather, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object
      };
    }
  }]);

  function MoreInfoWeather() {
    var _this;

    _classCallCheck(this, MoreInfoWeather);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoWeather).call(this));
    _this.cardinalDirections = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
    _this.weatherIcons = {
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
      "windy-variant": "hass:weather-windy-variant"
    };
    return _this;
  }

  _createClass(MoreInfoWeather, [{
    key: "computeDate",
    value: function computeDate(data) {
      var date = new Date(data);
      return date.toLocaleDateString(this.hass.language, {
        weekday: "long",
        month: "short",
        day: "numeric"
      });
    }
  }, {
    key: "computeDateTime",
    value: function computeDateTime(data) {
      var date = new Date(data);
      return date.toLocaleDateString(this.hass.language, {
        weekday: "long",
        hour: "numeric"
      });
    }
  }, {
    key: "getUnit",
    value: function getUnit(measure) {
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
    }
  }, {
    key: "windBearingToText",
    value: function windBearingToText(degree) {
      var degreenum = parseInt(degree);

      if (isFinite(degreenum)) {
        return this.cardinalDirections[((degreenum + 11.25) / 22.5 | 0) % 16];
      }

      return degree;
    }
  }, {
    key: "getWind",
    value: function getWind(speed, bearing, localize) {
      if (bearing != null) {
        var cardinalDirection = this.windBearingToText(bearing);
        return "".concat(speed, " ").concat(this.getUnit("length"), "/h (").concat(localize("ui.card.weather.cardinal_direction.".concat(cardinalDirection.toLowerCase())) || cardinalDirection, ")");
      }

      return "".concat(speed, " ").concat(this.getUnit("length"), "/h");
    }
  }, {
    key: "getWeatherIcon",
    value: function getWeatherIcon(condition) {
      return this.weatherIcons[condition];
    }
  }, {
    key: "_showValue",
    value: function _showValue(item) {
      return typeof item !== "undefined" && item !== null;
    }
  }]);

  return MoreInfoWeather;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("more-info-weather", MoreInfoWeather);

/***/ }),

/***/ "./src/dialogs/more-info/more-info-controls.js":
/*!*****************************************************!*\
  !*** ./src/dialogs/more-info/more-info-controls.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/state-history-charts */ "./src/components/state-history-charts.js");
/* harmony import */ var _data_ha_state_history_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/ha-state-history-data */ "./src/data/ha-state-history-data.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state-summary/state-card-content */ "./src/state-summary/state-card-content.js");
/* harmony import */ var _controls_more_info_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/more-info-content */ "./src/dialogs/more-info/controls/more-info-content.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style-dialog\">\n        app-toolbar {\n          color: var(--more-info-header-color);\n          background-color: var(--more-info-header-background);\n        }\n\n        app-toolbar [main-title] {\n          @apply --ha-more-info-app-toolbar-title;\n        }\n\n        state-card-content {\n          display: block;\n          padding: 16px;\n        }\n\n        state-history-charts {\n          max-width: 100%;\n          margin-bottom: 16px;\n        }\n\n        @media all and (min-width: 451px) and (min-height: 501px) {\n          .main-title {\n            pointer-events: auto;\n            cursor: default;\n          }\n        }\n\n        paper-dialog-scrollable {\n          padding-bottom: 16px;\n        }\n\n        :host([domain=\"camera\"]) paper-dialog-scrollable {\n          margin: 0 -24px -21px;\n        }\n\n        :host([rtl]) app-toolbar {\n          direction: rtl;\n          text-align: right;\n        }\n      </style>\n\n      <app-toolbar>\n        <paper-icon-button\n          aria-label=\"Dismiss dialog\"\n          icon=\"hass:close\"\n          dialog-dismiss\n        ></paper-icon-button>\n        <div class=\"main-title\" main-title=\"\" on-click=\"enlarge\">\n          [[_computeStateName(stateObj)]]\n        </div>\n        <template is=\"dom-if\" if=\"[[canConfigure]]\">\n          <paper-icon-button\n            icon=\"hass:settings\"\n            on-click=\"_gotoSettings\"\n          ></paper-icon-button>\n        </template>\n      </app-toolbar>\n\n      <template is=\"dom-if\" if=\"[[_computeShowStateInfo(stateObj)]]\" restamp=\"\">\n        <state-card-content\n          state-obj=\"[[stateObj]]\"\n          hass=\"[[hass]]\"\n          in-dialog=\"\"\n        ></state-card-content>\n      </template>\n      <paper-dialog-scrollable dialog-element=\"[[dialogElement]]\">\n        <template\n          is=\"dom-if\"\n          if=\"[[_computeShowHistoryComponent(hass, stateObj)]]\"\n          restamp=\"\"\n        >\n          <ha-state-history-data\n            hass=\"[[hass]]\"\n            filter-type=\"recent-entity\"\n            entity-id=\"[[stateObj.entity_id]]\"\n            data=\"{{_stateHistory}}\"\n            is-loading=\"{{_stateHistoryLoading}}\"\n            cache-config=\"[[_cacheConfig]]\"\n          ></ha-state-history-data>\n          <state-history-charts\n            hass=\"[[hass]]\"\n            history-data=\"[[_stateHistory]]\"\n            is-loading-data=\"[[_stateHistoryLoading]]\"\n            up-to-now\n          ></state-history-charts>\n        </template>\n        <more-info-content\n          state-obj=\"[[stateObj]]\"\n          hass=\"[[hass]]\"\n        ></more-info-content>\n      </paper-dialog-scrollable>\n    "]);

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

















var DOMAINS_NO_INFO = ["camera", "configurator", "history_graph"];
/*
 * @appliesMixin EventsMixin
 */

var MoreInfoControls =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(MoreInfoControls, _EventsMixin);

  function MoreInfoControls() {
    _classCallCheck(this, MoreInfoControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoControls).apply(this, arguments));
  }

  _createClass(MoreInfoControls, [{
    key: "enlarge",
    value: function enlarge() {
      this.large = !this.large;
    }
  }, {
    key: "_computeShowStateInfo",
    value: function _computeShowStateInfo(stateObj) {
      return !stateObj || !DOMAINS_NO_INFO.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["computeStateDomain"])(stateObj));
    }
  }, {
    key: "_computeShowHistoryComponent",
    value: function _computeShowHistoryComponent(hass, stateObj) {
      return hass && stateObj && Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_12__["default"])(hass, "history") && !_common_const__WEBPACK_IMPORTED_MODULE_13__["DOMAINS_MORE_INFO_NO_HISTORY"].includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["computeStateDomain"])(stateObj));
    }
  }, {
    key: "_computeDomain",
    value: function _computeDomain(stateObj) {
      return stateObj ? Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["computeStateDomain"])(stateObj) : "";
    }
  }, {
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      return stateObj ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__["computeStateName"])(stateObj) : "";
    }
  }, {
    key: "_stateObjChanged",
    value: function _stateObjChanged(newVal) {
      if (!newVal) {
        return;
      }

      if (this._cacheConfig.cacheKey !== "more_info.".concat(newVal.entity_id)) {
        this._cacheConfig = Object.assign({}, this._cacheConfig, {
          cacheKey: "more_info.".concat(newVal.entity_id)
        });
      }
    }
  }, {
    key: "_gotoSettings",
    value: function _gotoSettings() {
      this.fire("more-info-page", {
        page: "settings"
      });
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(hass);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: {
          type: Object,
          observer: "_stateObjChanged"
        },
        dialogElement: Object,
        canConfigure: Boolean,
        domain: {
          type: String,
          reflectToAttribute: true,
          computed: "_computeDomain(stateObj)"
        },
        _stateHistory: Object,
        _stateHistoryLoading: Boolean,
        large: {
          type: Boolean,
          value: false,
          notify: true
        },
        _cacheConfig: {
          type: Object,
          value: {
            refresh: 60,
            cacheKey: null,
            hoursToShow: 24
          }
        },
        rtl: {
          type: Boolean,
          reflectToAttribute: true,
          computed: "_computeRTL(hass)"
        }
      };
    }
  }]);

  return MoreInfoControls;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]));

customElements.define("more-info-controls", MoreInfoControls);

/***/ }),

/***/ "./src/dialogs/more-info/more-info-settings.js":
/*!*****************************************************!*\
  !*** ./src/dialogs/more-info/more-info-settings.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _util_toast_saved_success__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/toast-saved-success */ "./src/util/toast-saved-success.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        app-toolbar {\n          color: var(--more-info-header-color);\n          background-color: var(--more-info-header-background);\n\n          /* to fit save button */\n          padding-right: 0;\n        }\n\n        app-toolbar [main-title] {\n          @apply --ha-more-info-app-toolbar-title;\n        }\n\n        app-toolbar mwc-button {\n          font-size: 0.8em;\n          margin: 0;\n          --mdc-theme-primary: var(--more-info-header-color);\n        }\n\n        .form {\n          padding: 0 24px 24px;\n        }\n      </style>\n\n      <app-toolbar>\n        <ha-paper-icon-button-arrow-prev\n          on-click=\"_backTapped\"\n        ></ha-paper-icon-button-arrow-prev>\n        <div main-title=\"\">[[_computeStateName(stateObj)]]</div>\n        <mwc-button on-click=\"_save\" disabled=\"[[_computeInvalid(_entityId)]]\"\n          >[[localize('ui.dialogs.more_info_settings.save')]]</mwc-button\n        >\n      </app-toolbar>\n\n      <div class=\"form\">\n        <paper-input\n          value=\"{{_name}}\"\n          label=\"[[localize('ui.dialogs.more_info_settings.name')]]\"\n        ></paper-input>\n        <paper-input\n          value=\"{{_entityId}}\"\n          label=\"[[localize('ui.dialogs.more_info_settings.entity_id')]]\"\n          error-message=\"Domain needs to stay the same\"\n          invalid=\"[[_computeInvalid(_entityId)]]\"\n        ></paper-input>\n      </div>\n    "]);

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














/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var MoreInfoSettings =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoSettings, _LocalizeMixin);

  function MoreInfoSettings() {
    _classCallCheck(this, MoreInfoSettings);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoSettings).apply(this, arguments));
  }

  _createClass(MoreInfoSettings, [{
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      if (!stateObj) return "";
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(stateObj);
    }
  }, {
    key: "_computeInvalid",
    value: function _computeInvalid(entityId) {
      return Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(this.stateObj.entity_id) !== Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(entityId);
    }
  }, {
    key: "_registryInfoChanged",
    value: function _registryInfoChanged(newVal) {
      if (newVal) {
        this.setProperties({
          _name: newVal.name,
          _entityId: newVal.entity_id
        });
      } else {
        this.setProperties({
          _name: "",
          _entityId: ""
        });
      }
    }
  }, {
    key: "_backTapped",
    value: function _backTapped() {
      this.fire("more-info-page", {
        page: null
      });
    }
  }, {
    key: "_save",
    value: function () {
      var _save2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var info;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_10__["updateEntityRegistryEntry"])(this.hass, this.stateObj.entity_id, {
                  name: this._name,
                  new_entity_id: this._entityId
                });

              case 3:
                info = _context.sent;
                Object(_util_toast_saved_success__WEBPACK_IMPORTED_MODULE_11__["showSaveSuccessToast"])(this, this.hass);
                this.registryInfo = info; // Keep the more info dialog open at the new entity.

                if (this.stateObj.entity_id !== this._entityId) {
                  this.fire("hass-more-info", {
                    entityId: this._entityId
                  });
                }

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                alert("save failed: ".concat(_context.t0.message));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function _save() {
        return _save2.apply(this, arguments);
      }

      return _save;
    }()
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        registryInfo: {
          type: Object,
          observer: "_registryInfoChanged",
          notify: true
        },
        _name: String,
        _entityId: String
      };
    }
  }]);

  return MoreInfoSettings;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])));

customElements.define("more-info-settings", MoreInfoSettings);

/***/ }),

/***/ "./src/mixins/dialog-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/dialog-mixin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @polymerMixin
 * @appliesMixin EventsMixin
 * @appliesMixin PaperDialogBehavior
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_mixinBehaviors) {
      _inherits(_class, _mixinBehaviors);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, null, [{
        key: "properties",
        get: function get() {
          return {
            withBackdrop: {
              type: Boolean,
              value: true
            }
          };
        }
      }]);

      return _class;
    }(Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__["mixinBehaviors"])([_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"], _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__["PaperDialogBehavior"]], superClass))
  );
}));

/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "__computeLocalize",
        value: function __computeLocalize(localize) {
          return localize;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            hass: Object,

            /**
             * Translates a string to the current `language`. Any parameters to the
             * string should be passed in order, as follows:
             * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
             */
            localize: {
              type: Function,
              computed: "__computeLocalize(hass.localize)"
            }
          };
        }
      }]);

      return _class;
    }(superClass)
  );
}));

/***/ }),

/***/ "./src/util/hass-attributes-util.js":
/*!******************************************!*\
  !*** ./src/util/hass-attributes-util.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var hassAttributeUtil = {};
hassAttributeUtil.DOMAIN_DEVICE_CLASS = {
  binary_sensor: ["battery", "cold", "connectivity", "door", "garage_door", "gas", "heat", "light", "lock", "moisture", "motion", "moving", "occupancy", "opening", "plug", "power", "presence", "problem", "safety", "smoke", "sound", "vibration", "window"],
  cover: ["awning", "blind", "curtain", "damper", "door", "garage", "shade", "shutter", "window"],
  sensor: ["battery", "humidity", "illuminance", "temperature", "pressure", "power", "signal_strength"],
  "switch": ["switch", "outlet"]
};
hassAttributeUtil.UNKNOWN_TYPE = "json";
hassAttributeUtil.ADD_TYPE = "key-value";
hassAttributeUtil.TYPE_TO_TAG = {
  string: "ha-customize-string",
  json: "ha-customize-string",
  icon: "ha-customize-icon",
  "boolean": "ha-customize-boolean",
  array: "ha-customize-array",
  "key-value": "ha-customize-key-value"
}; // Attributes here serve dual purpose:
// 1) Any key of this object won't be shown in more-info window.
// 2) Any key which has value other than undefined will appear in customization
//    config according to its value.

hassAttributeUtil.LOGIC_STATE_ATTRIBUTES = hassAttributeUtil.LOGIC_STATE_ATTRIBUTES || {
  entity_picture: undefined,
  friendly_name: {
    type: "string",
    description: "Name"
  },
  icon: {
    type: "icon"
  },
  emulated_hue: {
    type: "boolean",
    domains: ["emulated_hue"]
  },
  emulated_hue_name: {
    type: "string",
    domains: ["emulated_hue"]
  },
  haaska_hidden: undefined,
  haaska_name: undefined,
  homebridge_hidden: {
    type: "boolean"
  },
  homebridge_name: {
    type: "string"
  },
  supported_features: undefined,
  attribution: undefined,
  custom_ui_more_info: {
    type: "string"
  },
  custom_ui_state_card: {
    type: "string"
  },
  device_class: {
    type: "array",
    options: hassAttributeUtil.DOMAIN_DEVICE_CLASS,
    description: "Device class",
    domains: ["binary_sensor", "cover", "sensor", "switch"]
  },
  hidden: {
    type: "boolean",
    description: "Hide from UI"
  },
  assumed_state: {
    type: "boolean",
    domains: ["switch", "light", "cover", "climate", "fan", "group", "water_heater"]
  },
  initial_state: {
    type: "string",
    domains: ["automation"]
  },
  unit_of_measurement: {
    type: "string"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (hassAttributeUtil);

/***/ }),

/***/ "./src/util/toast-saved-success.ts":
/*!*****************************************!*\
  !*** ./src/util/toast-saved-success.ts ***!
  \*****************************************/
/*! exports provided: showSaveSuccessToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSaveSuccessToast", function() { return showSaveSuccessToast; });
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast */ "./src/util/toast.ts");

var showSaveSuccessToast = function (el, hass) {
    return Object(_toast__WEBPACK_IMPORTED_MODULE_0__["showToast"])(el, {
        message: hass.localize("ui.common.successfully_saved"),
    });
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZmVhdHVyZV9jbGFzc19uYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNhbWVyYS1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY2xpbWF0ZS1jb250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNvbG9yLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWxhYmVsZWQtc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcGFwZXItc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXdhdGVyX2hlYXRlci1jb250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2hhLW1vcmUtaW5mby1kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1hbGFybV9jb250cm9sX3BhbmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tYXV0b21hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWNhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWNsaW1hdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1jb25maWd1cmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1jb250ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tY292ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tZmFuLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1oaXN0b3J5X2dyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8taW5wdXRfZGF0ZXRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1saWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1tZWRpYV9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1zdW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby10aW1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLXVwZGF0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby12YWN1dW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby13YXRlcl9oZWF0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby13ZWF0aGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9tb3JlLWluZm8tY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL21vcmUtaW5mby1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2RpYWxvZy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2hhc3MtYXR0cmlidXRlcy11dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3RvYXN0LXNhdmVkLXN1Y2Nlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIENvbnN0YW50cyB0byBiZSB1c2VkIGluIHRoZSBmcm9udGVuZC4gKi9cblxuLy8gQ29uc3RhbnRzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgYnkgbmFtZS5cbi8vIEFycmF5cyB3aXRoIHZhbHVlcyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGlmIG9yZGVyIGRvZXNuJ3QgbWF0dGVyLlxuLy8gRWFjaCBjb25zdGFudCBzaG91bGQgaGF2ZSBhIGRlc2NyaXB0aW9uIHdoYXQgaXQgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBmb3IuXG5cbi8qKiBJY29uIHRvIHVzZSB3aGVuIG5vIGljb24gc3BlY2lmaWVkIGZvciBkb21haW4uICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9ET01BSU5fSUNPTiA9IFwiaGFzczpib29rbWFya1wiO1xuXG4vKiogUGFuZWwgdG8gc2hvdyB3aGVuIG5vIHBhbmVsIGlzIHBpY2tlZC4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BBTkVMID0gXCJsb3ZlbGFjZVwiO1xuXG4vKiogRG9tYWlucyB0aGF0IGhhdmUgYSBzdGF0ZSBjYXJkLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9DQVJEID0gW1xuICBcImNsaW1hdGVcIixcbiAgXCJjb3ZlclwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJsb2NrXCIsXG4gIFwibWVkaWFfcGxheWVyXCIsXG4gIFwic2NlbmVcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJ0aW1lclwiLFxuICBcInZhY3V1bVwiLFxuICBcIndhdGVyX2hlYXRlclwiLFxuICBcIndlYmxpbmtcIixcbl07XG5cbi8qKiBEb21haW5zIHdpdGggc2VwYXJhdGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfTU9SRV9JTkZPID0gW1xuICBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIixcbiAgXCJhdXRvbWF0aW9uXCIsXG4gIFwiY2FtZXJhXCIsXG4gIFwiY2xpbWF0ZVwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImNvdmVyXCIsXG4gIFwiZmFuXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwiaW5wdXRfZGF0ZXRpbWVcIixcbiAgXCJsaWdodFwiLFxuICBcImxvY2tcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJzdW5cIixcbiAgXCJ0aW1lclwiLFxuICBcInVwZGF0ZXJcIixcbiAgXCJ2YWN1dW1cIixcbiAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgXCJ3ZWF0aGVyXCIsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3cgbm8gbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX0hJREVfTU9SRV9JTkZPID0gW1xuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJzY2VuZVwiLFxuICBcIndlYmxpbmtcIixcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdWxkIGhhdmUgdGhlIGhpc3RvcnkgaGlkZGVuIGluIHRoZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgPSBbXG4gIFwiY2FtZXJhXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiaGlzdG9yeV9ncmFwaFwiLFxuICBcInNjZW5lXCIsXG5dO1xuXG4vKiogU3RhdGVzIHRoYXQgd2UgY29uc2lkZXIgXCJvZmZcIi4gKi9cbmV4cG9ydCBjb25zdCBTVEFURVNfT0ZGID0gW1wiY2xvc2VkXCIsIFwibG9ja2VkXCIsIFwib2ZmXCJdO1xuXG4vKiogRG9tYWlucyB3aGVyZSB3ZSBhbGxvdyB0b2dnbGUgaW4gTG92ZWxhY2UuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19UT0dHTEUgPSBuZXcgU2V0KFtcbiAgXCJmYW5cIixcbiAgXCJpbnB1dF9ib29sZWFuXCIsXG4gIFwibGlnaHRcIixcbiAgXCJzd2l0Y2hcIixcbiAgXCJncm91cFwiLFxuICBcImF1dG9tYXRpb25cIixcbl0pO1xuXG4vKiogVGVtcGVyYXR1cmUgdW5pdHMuICovXG5leHBvcnQgY29uc3QgVU5JVF9DID0gXCLCsENcIjtcbmV4cG9ydCBjb25zdCBVTklUX0YgPSBcIsKwRlwiO1xuXG4vKiogRW50aXR5IElEIG9mIHRoZSBkZWZhdWx0IHZpZXcuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9WSUVXX0VOVElUWV9JRCA9IFwiZ3JvdXAuZGVmYXVsdF92aWV3XCI7XG4iLCJleHBvcnQgY29uc3QgY29tcHV0ZURvbWFpbiA9IChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cigwLCBlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSk7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuL3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuLy8gRXhwZWN0cyBjbGFzc05hbWVzIHRvIGJlIGFuIG9iamVjdCBtYXBwaW5nIGZlYXR1cmUtYml0IC0+IGNsYXNzTmFtZVxuZXhwb3J0IGNvbnN0IGZlYXR1cmVDbGFzc05hbWVzID0gKFxuICBzdGF0ZU9iajogSGFzc0VudGl0eSxcbiAgY2xhc3NOYW1lczogeyBbZmVhdHVyZTogbnVtYmVyXTogc3RyaW5nIH1cbikgPT4ge1xuICBpZiAoIXN0YXRlT2JqIHx8ICFzdGF0ZU9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcykge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNsYXNzTmFtZXMpXG4gICAgLm1hcCgoZmVhdHVyZSkgPT5cbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgTnVtYmVyKGZlYXR1cmUpKSA/IGNsYXNzTmFtZXNbZmVhdHVyZV0gOiBcIlwiXG4gICAgKVxuICAgIC5maWx0ZXIoKGF0dHIpID0+IGF0dHIgIT09IFwiXCIpXG4gICAgLmpvaW4oXCIgXCIpO1xufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgaGFzc0F0dHJpYnV0ZVV0aWwgZnJvbSBcIi4uL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWxcIjtcblxuY2xhc3MgSGFBdHRyaWJ1dGVzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5kYXRhLWVudHJ5IC52YWx1ZSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB9XG4gICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImxheW91dCB2ZXJ0aWNhbFwiPlxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgIGl0ZW1zPVwiW1tjb21wdXRlRGlzcGxheUF0dHJpYnV0ZXMoc3RhdGVPYmosIGZpbHRlcnNBcnJheSldXVwiXG4gICAgICAgICAgYXM9XCJhdHRyaWJ1dGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtZW50cnkgbGF5b3V0IGp1c3RpZmllZCBob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCI+W1tmb3JtYXRBdHRyaWJ1dGUoYXR0cmlidXRlKV1dPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAgICAgICAgW1tmb3JtYXRBdHRyaWJ1dGVWYWx1ZShzdGF0ZU9iaiwgYXR0cmlidXRlKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImF0dHJpYnV0aW9uXCIgaGlkZGVuJD1cIltbIWNvbXB1dGVBdHRyaWJ1dGlvbihzdGF0ZU9iaildXVwiPlxuICAgICAgICAgIFtbY29tcHV0ZUF0dHJpYnV0aW9uKHN0YXRlT2JqKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIGV4dHJhRmlsdGVyczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIGZpbHRlcnNBcnJheToge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUZpbHRlcnNBcnJheShleHRyYUZpbHRlcnMpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRmlsdGVyc0FycmF5KGV4dHJhRmlsdGVycykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhoYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKS5jb25jYXQoXG4gICAgICBleHRyYUZpbHRlcnMgPyBleHRyYUZpbHRlcnMuc3BsaXQoXCIsXCIpIDogW11cbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZURpc3BsYXlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBmaWx0ZXJzQXJyYXkpIHtcbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdGF0ZU9iai5hdHRyaWJ1dGVzKS5maWx0ZXIoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZmlsdGVyc0FycmF5LmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG4gIH1cblxuICBmb3JtYXRBdHRyaWJ1dGUoYXR0cmlidXRlKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZS5yZXBsYWNlKC9fL2csIFwiIFwiKTtcbiAgfVxuXG4gIGZvcm1hdEF0dHJpYnV0ZVZhbHVlKHN0YXRlT2JqLCBhdHRyaWJ1dGUpIHtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gXCItXCI7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWUuam9pbihcIiwgXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMikgOiB2YWx1ZTtcbiAgfVxuXG4gIGNvbXB1dGVBdHRyaWJ1dGlvbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmF0dHJpYnV0aW9uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWF0dHJpYnV0ZXNcIiwgSGFBdHRyaWJ1dGVzKTtcbiIsImltcG9ydCB7XG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgQ2FtZXJhRW50aXR5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQge1xuICBDQU1FUkFfU1VQUE9SVF9TVFJFQU0sXG4gIGZldGNoU3RyZWFtVXJsLFxuICBjb21wdXRlTUpQRUdTdHJlYW1VcmwsXG59IGZyb20gXCIuLi9kYXRhL2NhbWVyYVwiO1xuaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG50eXBlIEhMU01vZHVsZSA9IHR5cGVvZiBpbXBvcnQoXCJobHMuanNcIik7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY2FtZXJhLXN0cmVhbVwiKVxuY2xhc3MgSGFDYW1lcmFTdHJlYW0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmo/OiBDYW1lcmFFbnRpdHk7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIHNob3dDb250cm9scyA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hdHRhY2hlZCA9IGZhbHNlO1xuICAvLyBXZSBrZWVwIHRyYWNrIGlmIHdlIHNob3VsZCBmb3JjZSBNSlBFRyB3aXRoIGEgc3RyaW5nXG4gIC8vIHRoYXQgd2F5IGl0IGF1dG9tYXRpY2FsbHkgcmVzZXRzIGlmIHdlIGNoYW5nZSBlbnRpdHkuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2ZvcmNlTUpQRUc6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfaGxzUG9seWZpbGxJbnN0YW5jZT86IEhscztcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9hdHRhY2hlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9hdHRhY2hlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5zdGF0ZU9iaiB8fCAhdGhpcy5fYXR0YWNoZWQpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke19fREVNT19fIHx8IHRoaXMuX3Nob3VsZFJlbmRlck1KUEVHXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgQGxvYWQ9JHt0aGlzLl9lbGVtZW50UmVzaXplZH1cbiAgICAgICAgICAgICAgLnNyYz0ke19fREVNT19fXG4gICAgICAgICAgICAgICAgPyBgL2FwaS9jYW1lcmFfcHJveHlfc3RyZWFtLyR7dGhpcy5zdGF0ZU9iai5lbnRpdHlfaWR9YFxuICAgICAgICAgICAgICAgIDogY29tcHV0ZU1KUEVHU3RyZWFtVXJsKHRoaXMuc3RhdGVPYmopfVxuICAgICAgICAgICAgICAuYWx0PSR7YFByZXZpZXcgb2YgdGhlICR7Y29tcHV0ZVN0YXRlTmFtZShcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlT2JqXG4gICAgICAgICAgICAgICl9IGNhbWVyYS5gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICBgXG4gICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICBhdXRvcGxheVxuICAgICAgICAgICAgICBtdXRlZFxuICAgICAgICAgICAgICBwbGF5c2lubGluZVxuICAgICAgICAgICAgICA/Y29udHJvbHM9JHt0aGlzLnNob3dDb250cm9sc31cbiAgICAgICAgICAgICAgQGxvYWRlZGRhdGE9JHt0aGlzLl9lbGVtZW50UmVzaXplZH1cbiAgICAgICAgICAgID48L3ZpZGVvPlxuICAgICAgICAgIGB9XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBjb25zdCBzdGF0ZU9iakNoYW5nZWQgPSBjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIik7XG4gICAgY29uc3QgYXR0YWNoZWRDaGFuZ2VkID0gY2hhbmdlZFByb3BzLmhhcyhcIl9hdHRhY2hlZFwiKTtcblxuICAgIGNvbnN0IG9sZFN0YXRlID0gY2hhbmdlZFByb3BzLmdldChcInN0YXRlT2JqXCIpIGFzIHRoaXNbXCJzdGF0ZU9ialwiXTtcbiAgICBjb25zdCBvbGRFbnRpdHlJZCA9IG9sZFN0YXRlID8gb2xkU3RhdGUuZW50aXR5X2lkIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGN1ckVudGl0eUlkID0gdGhpcy5zdGF0ZU9iaiA/IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKFxuICAgICAgKCFzdGF0ZU9iakNoYW5nZWQgJiYgIWF0dGFjaGVkQ2hhbmdlZCkgfHxcbiAgICAgIChzdGF0ZU9iakNoYW5nZWQgJiYgb2xkRW50aXR5SWQgPT09IGN1ckVudGl0eUlkKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGFyZSBubyBsb25nZXIgYXR0YWNoZWQsIGRlc3Ryb3kgcG9seWZpbGwuXG4gICAgaWYgKGF0dGFjaGVkQ2hhbmdlZCAmJiAhdGhpcy5fYXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lQb2x5ZmlsbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE5vdGhpbmcgdG8gZG8gaWYgd2UgYXJlIHJlbmRlciBNSlBFRy5cbiAgICBpZiAodGhpcy5fc2hvdWxkUmVuZGVyTUpQRUcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUZWFyIGRvd24gZXhpc3RpbmcgcG9seWZpbGwsIGlmIGF2YWlsYWJsZVxuICAgIHRoaXMuX2Rlc3Ryb3lQb2x5ZmlsbCgpO1xuXG4gICAgaWYgKGN1ckVudGl0eUlkKSB7XG4gICAgICB0aGlzLl9zdGFydEhscygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9zaG91bGRSZW5kZXJNSlBFRygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fZm9yY2VNSlBFRyA9PT0gdGhpcy5zdGF0ZU9iaiEuZW50aXR5X2lkIHx8XG4gICAgICAhdGhpcy5oYXNzIS5jb25maWcuY29tcG9uZW50cy5pbmNsdWRlcyhcInN0cmVhbVwiKSB8fFxuICAgICAgIXN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqISwgQ0FNRVJBX1NVUFBPUlRfU1RSRUFNKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdmlkZW9FbCgpOiBIVE1MVmlkZW9FbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIikhO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc3RhcnRIbHMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3QgSGxzID0gKChhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJobHMuanNcIiAqLyBcImhscy5qc1wiKSkgYXMgYW55KVxuICAgICAgLmRlZmF1bHQgYXMgSExTTW9kdWxlO1xuICAgIGxldCBobHNTdXBwb3J0ZWQgPSBIbHMuaXNTdXBwb3J0ZWQoKTtcbiAgICBjb25zdCB2aWRlb0VsID0gdGhpcy5fdmlkZW9FbDtcblxuICAgIGlmICghaGxzU3VwcG9ydGVkKSB7XG4gICAgICBobHNTdXBwb3J0ZWQgPVxuICAgICAgICB2aWRlb0VsLmNhblBsYXlUeXBlKFwiYXBwbGljYXRpb24vdm5kLmFwcGxlLm1wZWd1cmxcIikgIT09IFwiXCI7XG4gICAgfVxuXG4gICAgaWYgKCFobHNTdXBwb3J0ZWQpIHtcbiAgICAgIHRoaXMuX2ZvcmNlTUpQRUcgPSB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgdXJsIH0gPSBhd2FpdCBmZXRjaFN0cmVhbVVybChcbiAgICAgICAgdGhpcy5oYXNzISxcbiAgICAgICAgdGhpcy5zdGF0ZU9iaiEuZW50aXR5X2lkXG4gICAgICApO1xuXG4gICAgICBpZiAoSGxzLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVySExTUG9seWZpbGwodmlkZW9FbCwgSGxzLCB1cmwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVySExTTmF0aXZlKHZpZGVvRWwsIHVybCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBGYWlscyBpZiB3ZSB3ZXJlIHVuYWJsZSB0byBnZXQgYSBzdHJlYW1cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgdGhpcy5fZm9yY2VNSlBFRyA9IHRoaXMuc3RhdGVPYmohLmVudGl0eV9pZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZW5kZXJITFNOYXRpdmUodmlkZW9FbDogSFRNTFZpZGVvRWxlbWVudCwgdXJsOiBzdHJpbmcpIHtcbiAgICB2aWRlb0VsLnNyYyA9IHVybDtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cbiAgICAgIHZpZGVvRWwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlZG1ldGFkYXRhXCIsIHJlc29sdmUpXG4gICAgKTtcbiAgICB2aWRlb0VsLnBsYXkoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlbmRlckhMU1BvbHlmaWxsKFxuICAgIHZpZGVvRWw6IEhUTUxWaWRlb0VsZW1lbnQsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgSGxzOiBITFNNb2R1bGUsXG4gICAgdXJsOiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3QgaGxzID0gbmV3IEhscygpO1xuICAgIHRoaXMuX2hsc1BvbHlmaWxsSW5zdGFuY2UgPSBobHM7XG4gICAgaGxzLmF0dGFjaE1lZGlhKHZpZGVvRWwpO1xuICAgIGhscy5vbihIbHMuRXZlbnRzLk1FRElBX0FUVEFDSEVELCAoKSA9PiB7XG4gICAgICBobHMubG9hZFNvdXJjZSh1cmwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZWxlbWVudFJlc2l6ZWQoKSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaXJvbi1yZXNpemVcIik7XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95UG9seWZpbGwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2hsc1BvbHlmaWxsSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2hsc1BvbHlmaWxsSW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgdGhpcy5faGxzUG9seWZpbGxJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCxcbiAgICAgIGltZyxcbiAgICAgIHZpZGVvIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIGltZyxcbiAgICAgIHZpZGVvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY2FtZXJhLXN0cmVhbVwiOiBIYUNhbWVyYVN0cmVhbTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ2xpbWF0ZUNvbnRyb2wgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC8qIGxvY2FsIERPTSBzdHlsZXMgZ28gaGVyZSAqL1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWp1c3RpZmllZDtcbiAgICAgICAgfVxuICAgICAgICAuaW4tZmx1eCN0YXJnZXRfdGVtcGVyYXR1cmUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgI3RhcmdldF90ZW1wZXJhdHVyZSB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXNlbGYtY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbC1idXR0b25zIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPCEtLSBsb2NhbCBET00gZ29lcyBoZXJlIC0tPlxuICAgICAgPGRpdiBpZD1cInRhcmdldF90ZW1wZXJhdHVyZVwiPltbdmFsdWVdXSBbW3VuaXRzXV08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLWJ1dHRvbnNcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249XCJoYXNzOmNoZXZyb24tdXBcIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJpbmNyZW1lbnRWYWx1ZVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2hldnJvbi1kb3duXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwiZGVjcmVtZW50VmFsdWVcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgb2JzZXJ2ZXI6IFwidmFsdWVDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB9LFxuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIH0sXG4gICAgICBzdGVwOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICB0ZW1wZXJhdHVyZVN0YXRlSW5GbHV4KGluRmx1eCkge1xuICAgIHRoaXMuJC50YXJnZXRfdGVtcGVyYXR1cmUuY2xhc3NMaXN0LnRvZ2dsZShcImluLWZsdXhcIiwgaW5GbHV4KTtcbiAgfVxuXG4gIF9yb3VuZCh2YWwpIHtcbiAgICAvLyByb3VuZCB2YWx1ZSB0byBwcmVjaXNpb24gZGVyaXZlZCBmcm9tIHN0ZXBcbiAgICAvLyBpbnNpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9zb3VuZGFyMjQvcm91bmRTbGlkZXIvYmxvYi9tYXN0ZXIvc3JjL3JvdW5kc2xpZGVyLmpzXG4gICAgY29uc3QgcyA9IHRoaXMuc3RlcC50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtcbiAgICByZXR1cm4gc1sxXSA/IHBhcnNlRmxvYXQodmFsLnRvRml4ZWQoc1sxXS5sZW5ndGgpKSA6IE1hdGgucm91bmQodmFsKTtcbiAgfVxuXG4gIGluY3JlbWVudFZhbHVlKCkge1xuICAgIGNvbnN0IG5ld3ZhbCA9IHRoaXMuX3JvdW5kKHRoaXMudmFsdWUgKyB0aGlzLnN0ZXApO1xuICAgIGlmICh0aGlzLnZhbHVlIDwgdGhpcy5tYXgpIHtcbiAgICAgIHRoaXMubGFzdF9jaGFuZ2VkID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMudGVtcGVyYXR1cmVTdGF0ZUluRmx1eCh0cnVlKTtcbiAgICB9XG4gICAgaWYgKG5ld3ZhbCA8PSB0aGlzLm1heCkge1xuICAgICAgLy8gSWYgbm8gaW5pdGlhbCB0YXJnZXRfdGVtcFxuICAgICAgLy8gdGhpcyBmb3JjZXMgY29udHJvbCB0byBzdGFydFxuICAgICAgLy8gZnJvbSB0aGUgbWluIGNvbmZpZ3VyZWQgaW5zdGVhZCBvZiAwXG4gICAgICBpZiAobmV3dmFsIDw9IHRoaXMubWluKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1pbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXd2YWw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1heDtcbiAgICB9XG4gIH1cblxuICBkZWNyZW1lbnRWYWx1ZSgpIHtcbiAgICBjb25zdCBuZXd2YWwgPSB0aGlzLl9yb3VuZCh0aGlzLnZhbHVlIC0gdGhpcy5zdGVwKTtcbiAgICBpZiAodGhpcy52YWx1ZSA+IHRoaXMubWluKSB7XG4gICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlU3RhdGVJbkZsdXgodHJ1ZSk7XG4gICAgfVxuICAgIGlmIChuZXd2YWwgPj0gdGhpcy5taW4pIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXd2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1pbjtcbiAgICB9XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgLy8gd2hlbiB0aGUgbGFzdF9jaGFuZ2VkIHRpbWVzdGFtcCBpcyBjaGFuZ2VkLFxuICAgIC8vIHRyaWdnZXIgYSBwb3RlbnRpYWwgZXZlbnQgZmlyZSBpblxuICAgIC8vIHRoZSBmdXR1cmUsIGFzIGxvbmcgYXMgbGFzdCBjaGFuZ2VkIGlzIGZhciBlbm91Z2ggaW4gdGhlXG4gICAgLy8gcGFzdC5cbiAgICBpZiAodGhpcy5sYXN0X2NoYW5nZWQpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKG5vdyAtIHRoaXMubGFzdF9jaGFuZ2VkID49IDIwMDApIHtcbiAgICAgICAgICB0aGlzLmZpcmUoXCJjaGFuZ2VcIik7XG4gICAgICAgICAgdGhpcy50ZW1wZXJhdHVyZVN0YXRlSW5GbHV4KGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwMTApO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jbGltYXRlLWNvbnRyb2xcIiwgSGFDbGltYXRlQ29udHJvbCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qKlxuICogQ29sb3ItcGlja2VyIGN1c3RvbSBlbGVtZW50XG4gKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNvbG9yUGlja2VyIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAjY2FudmFzIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICAgICAgfVxuICAgICAgICAjY2FudmFzID4gKiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgI2ludGVyYWN0aW9uTGF5ZXIge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICAgICNiYWNrZ3JvdW5kTGF5ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAgIC0td2hlZWwtYm9yZGVyY29sb3I6IHZhcigtLWhhLWNvbG9yLXBpY2tlci13aGVlbC1ib3JkZXJjb2xvciwgd2hpdGUpO1xuICAgICAgICAgIC0td2hlZWwtYm9yZGVyd2lkdGg6IHZhcigtLWhhLWNvbG9yLXBpY2tlci13aGVlbC1ib3JkZXJ3aWR0aCwgMyk7XG4gICAgICAgICAgLS13aGVlbC1zaGFkb3c6IHZhcihcbiAgICAgICAgICAgIC0taGEtY29sb3ItcGlja2VyLXdoZWVsLXNoYWRvdyxcbiAgICAgICAgICAgIHJnYigxNSwgMTUsIDE1KSAxMHB4IDVweCA1cHggMHB4XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgICNtYXJrZXIge1xuICAgICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICBzdHJva2U6IHZhcigtLWhhLWNvbG9yLXBpY2tlci1tYXJrZXItYm9yZGVyY29sb3IsIHdoaXRlKTtcbiAgICAgICAgICBzdHJva2Utd2lkdGg6IHZhcigtLWhhLWNvbG9yLXBpY2tlci1tYXJrZXItYm9yZGVyd2lkdGgsIDMpO1xuICAgICAgICAgIGZpbHRlcjogdXJsKCNtYXJrZXItc2hhZG93KTtcbiAgICAgICAgfVxuICAgICAgICAuZHJhZ2dpbmcgI21hcmtlciB7XG4gICAgICAgIH1cblxuICAgICAgICAjY29sb3JUb29sdGlwIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICBzdHJva2U6IHZhcigtLWhhLWNvbG9yLXBpY2tlci10b29sdGlwLWJvcmRlcmNvbG9yLCB3aGl0ZSk7XG4gICAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1oYS1jb2xvci1waWNrZXItdG9vbHRpcC1ib3JkZXJ3aWR0aCwgMyk7XG4gICAgICAgIH1cblxuICAgICAgICAudG91Y2guZHJhZ2dpbmcgI2NvbG9yVG9vbHRpcCB7XG4gICAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgaWQ9XCJjYW52YXNcIj5cbiAgICAgICAgPHN2ZyBpZD1cImludGVyYWN0aW9uTGF5ZXJcIj5cbiAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgIDxmaWx0ZXJcbiAgICAgICAgICAgICAgaWQ9XCJtYXJrZXItc2hhZG93XCJcbiAgICAgICAgICAgICAgeD1cIi01MCVcIlxuICAgICAgICAgICAgICB5PVwiLTUwJVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjIwMCVcIlxuICAgICAgICAgICAgICBmaWx0ZXJVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGZlT2Zmc2V0XG4gICAgICAgICAgICAgICAgcmVzdWx0PVwib2ZmT3V0XCJcbiAgICAgICAgICAgICAgICBpbj1cIlNvdXJjZUFscGhhXCJcbiAgICAgICAgICAgICAgICBkeD1cIjJcIlxuICAgICAgICAgICAgICAgIGR5PVwiMlwiXG4gICAgICAgICAgICAgID48L2ZlT2Zmc2V0PlxuICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXJcbiAgICAgICAgICAgICAgICByZXN1bHQ9XCJibHVyT3V0XCJcbiAgICAgICAgICAgICAgICBpbj1cIm9mZk91dFwiXG4gICAgICAgICAgICAgICAgc3RkRGV2aWF0aW9uPVwiMlwiXG4gICAgICAgICAgICAgID48L2ZlR2F1c3NpYW5CbHVyPlxuICAgICAgICAgICAgICA8ZmVDb21wb25lbnRUcmFuc2ZlciBpbj1cImJsdXJPdXRcIiByZXN1bHQ9XCJhbHBoYU91dFwiPlxuICAgICAgICAgICAgICAgIDxmZUZ1bmNBIHR5cGU9XCJsaW5lYXJcIiBzbG9wZT1cIjAuM1wiPjwvZmVGdW5jQT5cbiAgICAgICAgICAgICAgPC9mZUNvbXBvbmVudFRyYW5zZmVyPlxuICAgICAgICAgICAgICA8ZmVCbGVuZFxuICAgICAgICAgICAgICAgIGluPVwiU291cmNlR3JhcGhpY1wiXG4gICAgICAgICAgICAgICAgaW4yPVwiYWxwaGFPdXRcIlxuICAgICAgICAgICAgICAgIG1vZGU9XCJub3JtYWxcIlxuICAgICAgICAgICAgICA+PC9mZUJsZW5kPlxuICAgICAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgICAgPC9kZWZzPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGNhbnZhcyBpZD1cImJhY2tncm91bmRMYXllclwiPjwvY2FudmFzPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHNDb2xvcjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICAvLyB1c2UgdGhlc2UgcHJvcGVydGllcyB0byB1cGRhdGUgdGhlIHN0YXRlIHZpYSBhdHRyaWJ1dGVzXG4gICAgICBkZXNpcmVkSHNDb2xvcjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImFwcGx5SHNDb2xvclwiLFxuICAgICAgfSxcblxuICAgICAgLy8gd2lkdGgsIGhlaWdodCBhbmQgcmFkaXVzIGFwcGx5IHRvIHRoZSBjb29yZGluYXRlcyBvZlxuICAgICAgLy8gb2YgdGhlIGNhbnZhcy5cbiAgICAgIC8vIGJvcmRlciB3aWR0aCBhcmUgcmVsYXRpdmUgdG8gdGhlc2UgbnVtYmVyc1xuICAgICAgLy8gdGhlIG9uc2NyZWVuIGRpc3BsYXllZCBzaXplIHNob3VsZCBiZSBjb250cm9sbGVkIHdpdGggY3NzXG4gICAgICAvLyBhbmQgc2hvdWxkIGJlIHRoZSBzYW1lIG9yIHNtYWxsZXJcbiAgICAgIHdpZHRoOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDUwMCxcbiAgICAgIH0sXG5cbiAgICAgIGhlaWdodDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiA1MDAsXG4gICAgICB9LFxuXG4gICAgICByYWRpdXM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMjI1LFxuICAgICAgfSxcblxuICAgICAgLy8gdGhlIGFtb3VudCBzZWdtZW50cyBmb3IgdGhlIGh1ZVxuICAgICAgLy8gMCA9IGNvbnRpbnVvdXMgZ3JhZGllbnRcbiAgICAgIC8vIG90aGVyIHRoYW4gMCBnaXZlcyAncGllLXBpZWNlcydcbiAgICAgIGh1ZVNlZ21lbnRzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIG9ic2VydmVyOiBcInNlZ21lbnRhdGlvbkNoYW5nZVwiLFxuICAgICAgfSxcblxuICAgICAgLy8gdGhlIGFtb3VudCBzZWdtZW50cyBmb3IgdGhlIGh1ZVxuICAgICAgLy8gMCA9IGNvbnRpbnVvdXMgZ3JhZGllbnRcbiAgICAgIC8vIDEgPSBvbmx5IGZ1bGx5IHNhdHVyYXRlZFxuICAgICAgLy8gPiAxID0gc2VnbWVudHMgZnJvbSB3aGl0ZSB0byBmdWxseSBzYXR1cmF0ZWRcbiAgICAgIHNhdHVyYXRpb25TZWdtZW50czoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBvYnNlcnZlcjogXCJzZWdtZW50YXRpb25DaGFuZ2VcIixcbiAgICAgIH0sXG5cbiAgICAgIC8vIHNldCB0byB0cnVlIHRvIG1ha2UgdGhlIHNlZ21lbnRzIHB1cmVseSBlc3RoZXRpY2FsXG4gICAgICAvLyB0aGlzIGFsbG93cyBzZWxlY3Rpb24gb2ZmIGFsbCBjb2xsb3JzLCBhbHNvXG4gICAgICAvLyBpbnRlcnBvbGF0ZWQgYmV0d2VlbiB0aGUgc2VnbWVudHNcbiAgICAgIGlnbm9yZVNlZ21lbnRzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIC8vIHRocm90dGxlIHRlIGFtb3VudCBvZiAnY29sb3JzZWxlY3RlZCcgZXZlbnRzIGZpcmVkXG4gICAgICAvLyB2YWx1ZSBpcyB0aW1lb3V0IGluIG1pbGxpc2Vjb25kc1xuICAgICAgdGhyb3R0bGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogNTAwLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLnNldHVwTGF5ZXJzKCk7XG4gICAgdGhpcy5kcmF3Q29sb3JXaGVlbCgpO1xuICAgIHRoaXMuZHJhd01hcmtlcigpO1xuXG4gICAgdGhpcy5pbnRlcmFjdGlvbkxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PlxuICAgICAgdGhpcy5vbk1vdXNlRG93bihldilcbiAgICApO1xuICAgIHRoaXMuaW50ZXJhY3Rpb25MYXllci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXYpID0+XG4gICAgICB0aGlzLm9uVG91Y2hTdGFydChldilcbiAgICApO1xuICB9XG5cbiAgLy8gY29udmVydHMgYnJvd3NlciBjb29yZGluYXRlcyB0byBjYW52YXMgY2FudmFzIGNvb3JkaW5hdGVzXG4gIC8vIG9yaWdpbiBpcyB3aGVlbCBjZW50ZXJcbiAgLy8gcmV0dXJucyB7eDogWCwgeTogWX0gb2JqZWN0XG4gIGNvbnZlcnRUb0NhbnZhc0Nvb3JkaW5hdGVzKGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICB2YXIgc3ZnUG9pbnQgPSB0aGlzLmludGVyYWN0aW9uTGF5ZXIuY3JlYXRlU1ZHUG9pbnQoKTtcbiAgICBzdmdQb2ludC54ID0gY2xpZW50WDtcbiAgICBzdmdQb2ludC55ID0gY2xpZW50WTtcbiAgICB2YXIgY2MgPSBzdmdQb2ludC5tYXRyaXhUcmFuc2Zvcm0oXG4gICAgICB0aGlzLmludGVyYWN0aW9uTGF5ZXIuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpXG4gICAgKTtcbiAgICByZXR1cm4geyB4OiBjYy54LCB5OiBjYy55IH07XG4gIH1cblxuICAvLyBNb3VzZSBldmVudHNcblxuICBvbk1vdXNlRG93bihldikge1xuICAgIGNvbnN0IGNjID0gdGhpcy5jb252ZXJ0VG9DYW52YXNDb29yZGluYXRlcyhldi5jbGllbnRYLCBldi5jbGllbnRZKTtcbiAgICAvLyByZXR1cm4gaWYgd2UncmUgbm90IG9uIHRoZSB3aGVlbFxuICAgIGlmICghdGhpcy5pc0luV2hlZWwoY2MueCwgY2MueSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYSBtb3VzZWRvd24gaW4gd2hlZWwgaXMgYWx3YXlzIGEgY29sb3Igc2VsZWN0IGFjdGlvblxuICAgIHRoaXMub25Nb3VzZVNlbGVjdChldik7XG4gICAgLy8gYWxsb3cgZHJhZ2dpbmdcbiAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwibW91c2VcIiwgXCJkcmFnZ2luZ1wiKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlU2VsZWN0KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMub25Nb3VzZVVwKTtcbiAgfVxuXG4gIG9uTW91c2VVcCgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwibW91c2VcIiwgXCJkcmFnZ2luZ1wiKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlU2VsZWN0KTtcbiAgfVxuXG4gIG9uTW91c2VTZWxlY3QoZXYpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5wcm9jZXNzVXNlclNlbGVjdChldikpO1xuICB9XG5cbiAgLy8gVG91Y2ggZXZlbnRzXG5cbiAgb25Ub3VjaFN0YXJ0KGV2KSB7XG4gICAgdmFyIHRvdWNoID0gZXYuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgY29uc3QgY2MgPSB0aGlzLmNvbnZlcnRUb0NhbnZhc0Nvb3JkaW5hdGVzKHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpO1xuICAgIC8vIHJldHVybiBpZiB3ZSdyZSBub3Qgb24gdGhlIHdoZWVsXG4gICAgaWYgKCF0aGlzLmlzSW5XaGVlbChjYy54LCBjYy55KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXYudGFyZ2V0ID09PSB0aGlzLm1hcmtlcikge1xuICAgICAgLy8gZHJhZyBtYXJrZXJcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwidG91Y2hcIiwgXCJkcmFnZ2luZ1wiKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm9uVG91Y2hTZWxlY3QpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5vblRvdWNoRW5kKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZG9uJ3QgZmlyZSBjb2xvciBzZWxlY3Rpb24gaW1tZWRpYXRlbHksXG4gICAgLy8gd2FpdCBmb3IgdG91Y2hlbmQgYW5kIGludmFsaWRhdGUgd2hlbiB3ZSBzY3JvbGxcbiAgICB0aGlzLnRhcEJlY2FtZVNjcm9sbCA9IGZhbHNlO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMub25UYXApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwidG91Y2htb3ZlXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMudGFwQmVjYW1lU2Nyb2xsID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICB7IHBhc3NpdmU6IHRydWUgfVxuICAgICk7XG4gIH1cblxuICBvblRhcChldikge1xuICAgIGlmICh0aGlzLnRhcEJlY2FtZVNjcm9sbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub25Ub3VjaFNlbGVjdChldik7XG4gIH1cblxuICBvblRvdWNoRW5kKCkge1xuICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b3VjaFwiLCBcImRyYWdnaW5nXCIpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm9uVG91Y2hTZWxlY3QpO1xuICB9XG5cbiAgb25Ub3VjaFNlbGVjdChldikge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnByb2Nlc3NVc2VyU2VsZWN0KGV2LmNoYW5nZWRUb3VjaGVzWzBdKSk7XG4gIH1cblxuICAvKlxuICAgKiBHZW5lcmFsIGV2ZW50L3NlbGVjdGlvbiBoYW5kbGluZ1xuICAgKi9cblxuICAvLyBQcm9jZXNzIHVzZXIgaW5wdXQgdG8gY29sb3JcbiAgcHJvY2Vzc1VzZXJTZWxlY3QoZXYpIHtcbiAgICB2YXIgY2FudmFzWFkgPSB0aGlzLmNvbnZlcnRUb0NhbnZhc0Nvb3JkaW5hdGVzKGV2LmNsaWVudFgsIGV2LmNsaWVudFkpO1xuICAgIHZhciBocyA9IHRoaXMuZ2V0Q29sb3IoY2FudmFzWFkueCwgY2FudmFzWFkueSk7XG4gICAgdGhpcy5vbkNvbG9yU2VsZWN0KGhzKTtcbiAgfVxuXG4gIC8vIGFwcGx5IGNvbG9yIHRvIG1hcmtlciBwb3NpdGlvbiBhbmQgY2FudmFzXG4gIG9uQ29sb3JTZWxlY3QoaHMpIHtcbiAgICB0aGlzLnNldE1hcmtlck9uQ29sb3IoaHMpOyAvLyBtYXJrZXIgYWx3YXlzIGZvbGxvd3MgbW91bnNlICdyYXcnIGhzIHZhbHVlICg9IG1vdXNlIHBvc2l0aW9uKVxuICAgIGlmICghdGhpcy5pZ25vcmVTZWdtZW50cykge1xuICAgICAgLy8gYXBwbHkgc2VnbWVudHMgaWYgbmVlZGVkXG4gICAgICBocyA9IHRoaXMuYXBwbHlTZWdtZW50RmlsdGVyKGhzKTtcbiAgICB9XG4gICAgLy8gYWx3YXlzIGFwcGx5IHRoZSBuZXcgY29sb3IgdG8gdGhlIGludGVyZmFjZSAvIGNhbnZhc1xuICAgIHRoaXMuYXBwbHlDb2xvclRvQ2FudmFzKGhzKTtcbiAgICAvLyB0aHJvdHRsaW5nIGlzIGFwcGxpZWQgdG8gdXBkYXRpbmcgdGhlIGV4cG9zZWQgY29sb3JzIChwcm9wZXJ0aWVzKVxuICAgIC8vIGFuZCBmaXJpbmcgb2YgZXZlbnRzXG4gICAgaWYgKHRoaXMuY29sb3JTZWxlY3RJc1Rocm90dGxlZCkge1xuICAgICAgLy8gbWFrZSBzdXJlIHdlIGFwcGx5IHRoZSBsYXN0IHNlbGVjdGVkIGNvbG9yXG4gICAgICAvLyBldmVudHVhbGx5IGFmdGVyIHRocm90dGxlIGxpbWl0IGhhcyBwYXNzZWRcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmVuc3VyZUZpbmFsU2VsZWN0KTtcbiAgICAgIHRoaXMuZW5zdXJlRmluYWxTZWxlY3QgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maXJlQ29sb3JTZWxlY3RlZChocyk7IC8vIGRvIGl0IGZvciB0aGUgZmluYWwgdGltZVxuICAgICAgfSwgdGhpcy50aHJvdHRsZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmlyZUNvbG9yU2VsZWN0ZWQoaHMpOyAvLyBkbyBpdFxuICAgIHRoaXMuY29sb3JTZWxlY3RJc1Rocm90dGxlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvbG9yU2VsZWN0SXNUaHJvdHRsZWQgPSBmYWxzZTtcbiAgICB9LCB0aGlzLnRocm90dGxlKTtcbiAgfVxuXG4gIC8vIHNldCBjb2xvciB2YWx1ZXMgYW5kIGZpcmUgY29sb3JzZWxlY3RlZCBldmVudFxuICBmaXJlQ29sb3JTZWxlY3RlZChocykge1xuICAgIHRoaXMuaHNDb2xvciA9IGhzO1xuICAgIHRoaXMuZmlyZShcImNvbG9yc2VsZWN0ZWRcIiwgeyBoczogeyBoOiBocy5oLCBzOiBocy5zIH0gfSk7XG4gIH1cblxuICAvKlxuICAgKiBJbnRlcmZhY2UgdXBkYXRpbmdcbiAgICovXG5cbiAgLy8gc2V0IG1hcmtlciBwb3NpdGlvbiB0byB0aGUgZ2l2ZW4gY29sb3JcbiAgc2V0TWFya2VyT25Db2xvcihocykge1xuICAgIHZhciBkaXN0ID0gaHMucyAqIHRoaXMucmFkaXVzO1xuICAgIHZhciB0aGV0YSA9ICgoaHMuaCAtIDE4MCkgLyAxODApICogTWF0aC5QSTtcbiAgICB2YXIgbWFya2VyZFggPSAtZGlzdCAqIE1hdGguY29zKHRoZXRhKTtcbiAgICB2YXIgbWFya2VyZFkgPSAtZGlzdCAqIE1hdGguc2luKHRoZXRhKTtcbiAgICB2YXIgdHJhbnNsYXRlU3RyaW5nID0gYHRyYW5zbGF0ZSgke21hcmtlcmRYfSwke21hcmtlcmRZfSlgO1xuICAgIHRoaXMubWFya2VyLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB0cmFuc2xhdGVTdHJpbmcpO1xuICAgIHRoaXMudG9vbHRpcC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNsYXRlU3RyaW5nKTtcbiAgfVxuXG4gIC8vIGFwcGx5IGdpdmVuIGNvbG9yIHRvIGludGVyZmFjZSBlbGVtZW50c1xuICBhcHBseUNvbG9yVG9DYW52YXMoaHMpIHtcbiAgICAvLyB3ZSdyZSBub3QgcmVhbGx5IGNvbnZlcnRpbmcgaHMgdG8gaHNsIGhlcmUsIGJ1dCB3ZSBrZWVwIGl0IGNoZWFwXG4gICAgLy8gc2V0dGluZyB0aGUgY29sb3Igb24gdGhlIGludGVyYWN0aW9uTGF5ZXIsIHRoZSBzdmcgZWxlbWVudHMgY2FuIGluaGVyaXRcbiAgICB0aGlzLmludGVyYWN0aW9uTGF5ZXIuc3R5bGUuY29sb3IgPSBgaHNsKCR7aHMuaH0sIDEwMCUsICR7MTAwIC1cbiAgICAgIGhzLnMgKiA1MH0lKWA7XG4gIH1cblxuICBhcHBseUhzQ29sb3IoaHMpIHtcbiAgICAvLyBkbyBub3RoaW5nIGlzIHdlIGFscmVhZHkgaGF2ZSB0aGUgc2FtZSBjb2xvclxuICAgIGlmICh0aGlzLmhzQ29sb3IgJiYgdGhpcy5oc0NvbG9yLmggPT09IGhzLmggJiYgdGhpcy5oc0NvbG9yLnMgPT09IGhzLnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRNYXJrZXJPbkNvbG9yKGhzKTsgLy8gbWFya2VyIGlzIGFsd2F5cyBzZXQgb24gJ3JhdycgaHMgcG9zaXRpb25cbiAgICBpZiAoIXRoaXMuaWdub3JlU2VnbWVudHMpIHtcbiAgICAgIC8vIGFwcGx5IHNlZ21lbnRzIGlmIG5lZWRlZFxuICAgICAgaHMgPSB0aGlzLmFwcGx5U2VnbWVudEZpbHRlcihocyk7XG4gICAgfVxuICAgIHRoaXMuaHNDb2xvciA9IGhzO1xuICAgIC8vIGFsd2F5cyBhcHBseSB0aGUgbmV3IGNvbG9yIHRvIHRoZSBpbnRlcmZhY2UgLyBjYW52YXNcbiAgICB0aGlzLmFwcGx5Q29sb3JUb0NhbnZhcyhocyk7XG4gIH1cblxuICAvKlxuICAgKiBpbnB1dCBwcm9jZXNzaW5nIGhlbHBlcnNcbiAgICovXG5cbiAgLy8gZ2V0IGFuZ2xlIChkZWdyZWVzKVxuICBnZXRBbmdsZShkWCwgZFkpIHtcbiAgICB2YXIgdGhldGEgPSBNYXRoLmF0YW4yKC1kWSwgLWRYKTsgLy8gcmFkaWFucyBmcm9tIHRoZSBsZWZ0IGVkZ2UsIGNsb2Nrd2lzZSA9IHBvc2l0aXZlXG4gICAgdmFyIGFuZ2xlID0gKHRoZXRhIC8gTWF0aC5QSSkgKiAxODAgKyAxODA7IC8vIGRlZ3JlZXMsIGNsb2Nrd2lzZSBmcm9tIHJpZ2h0XG4gICAgcmV0dXJuIGFuZ2xlO1xuICB9XG5cbiAgLy8gcmV0dXJucyB0cnVlIHdoZW4gY29vcmRpbmF0ZXMgYXJlIGluIHRoZSBjb2xvcndoZWVsXG4gIGlzSW5XaGVlbCh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGlzdGFuY2UoeCwgeSkgPD0gMTtcbiAgfVxuXG4gIC8vIHJldHVybnMgZGlzdGFuY2UgZnJvbSB3aGVlbCBjZW50ZXIsIDAgPSBjZW50ZXIsIDEgPSBlZGdlLCA+MSA9IG91dHNpZGVcbiAgZ2V0RGlzdGFuY2UoZFgsIGRZKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChkWCAqIGRYICsgZFkgKiBkWSkgLyB0aGlzLnJhZGl1cztcbiAgfVxuXG4gIC8qXG4gICAqIEdldHRpbmcgY29sb3JzXG4gICAqL1xuXG4gIGdldENvbG9yKHgsIHkpIHtcbiAgICB2YXIgaHVlID0gdGhpcy5nZXRBbmdsZSh4LCB5KTsgLy8gZGVncmVlcywgY2xvY2t3aXNlIGZyb20gcmlnaHRcbiAgICB2YXIgcmVsYXRpdmVEaXN0YW5jZSA9IHRoaXMuZ2V0RGlzdGFuY2UoeCwgeSk7IC8vIGVkZ2Ugb2YgcmFkaXVzID0gMVxuICAgIHZhciBzYXQgPSBNYXRoLm1pbihyZWxhdGl2ZURpc3RhbmNlLCAxKTsgLy8gRGlzdGFuY2UgZnJvbSBjZW50ZXJcbiAgICByZXR1cm4geyBoOiBodWUsIHM6IHNhdCB9O1xuICB9XG5cbiAgYXBwbHlTZWdtZW50RmlsdGVyKGhzKSB7XG4gICAgLy8gYXBwbHkgaHVlIHNlZ21lbnQgc3RlcHNcbiAgICBpZiAodGhpcy5odWVTZWdtZW50cykge1xuICAgICAgY29uc3QgYW5nbGVTdGVwID0gMzYwIC8gdGhpcy5odWVTZWdtZW50cztcbiAgICAgIGNvbnN0IGhhbGZBbmdsZVN0ZXAgPSBhbmdsZVN0ZXAgLyAyO1xuICAgICAgaHMuaCAtPSBoYWxmQW5nbGVTdGVwOyAvLyB0YWtlIHRoZSAnY2VudGVyZWQgc2VnZW1udHMnIGludG8gYWNjb3VudFxuICAgICAgaWYgKGhzLmggPCAwKSB7XG4gICAgICAgIGhzLmggKz0gMzYwO1xuICAgICAgfSAvLyBkb24ndCBlbmQgdXAgYmVsb3cgMFxuICAgICAgY29uc3QgcmVzdCA9IGhzLmggJSBhbmdsZVN0ZXA7XG4gICAgICBocy5oIC09IHJlc3QgLSBhbmdsZVN0ZXA7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgc2F0dXJhdGlvbiBzZWdtZW50IHN0ZXBzXG4gICAgaWYgKHRoaXMuc2F0dXJhdGlvblNlZ21lbnRzKSB7XG4gICAgICBpZiAodGhpcy5zYXR1cmF0aW9uU2VnbWVudHMgPT09IDEpIHtcbiAgICAgICAgaHMucyA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2VnbWVudFNpemUgPSAxIC8gdGhpcy5zYXR1cmF0aW9uU2VnbWVudHM7XG4gICAgICAgIHZhciBzYXR1cmF0aW9uU3RlcCA9IDEgLyAodGhpcy5zYXR1cmF0aW9uU2VnbWVudHMgLSAxKTtcbiAgICAgICAgdmFyIGNhbGN1bGF0ZWRTYXQgPSBNYXRoLmZsb29yKGhzLnMgLyBzZWdtZW50U2l6ZSkgKiBzYXR1cmF0aW9uU3RlcDtcbiAgICAgICAgaHMucyA9IE1hdGgubWluKGNhbGN1bGF0ZWRTYXQsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaHM7XG4gIH1cblxuICAvKlxuICAgKiBEcmF3aW5nIHJlbGF0ZWQgc3R1ZmZcbiAgICovXG5cbiAgc2V0dXBMYXllcnMoKSB7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLiQuY2FudmFzO1xuICAgIHRoaXMuYmFja2dyb3VuZExheWVyID0gdGhpcy4kLmJhY2tncm91bmRMYXllcjtcbiAgICB0aGlzLmludGVyYWN0aW9uTGF5ZXIgPSB0aGlzLiQuaW50ZXJhY3Rpb25MYXllcjtcblxuICAgIC8vIGNvb3JkaW5hdGUgb3JpZ2luIHBvc2l0aW9uIChjZW50ZXIgb2YgdGhlIHdoZWVsKVxuICAgIHRoaXMub3JpZ2luWCA9IHRoaXMud2lkdGggLyAyO1xuICAgIHRoaXMub3JpZ2luWSA9IHRoaXMub3JpZ2luWDtcblxuICAgIC8vIHN5bmNocm9uaXNlIHdpZHRoL2hlaWdodCBjb29yZGluYXRlc1xuICAgIHRoaXMuYmFja2dyb3VuZExheWVyLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICB0aGlzLmJhY2tncm91bmRMYXllci5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB0aGlzLmludGVyYWN0aW9uTGF5ZXIuc2V0QXR0cmlidXRlKFxuICAgICAgXCJ2aWV3Qm94XCIsXG4gICAgICBgJHstdGhpcy5vcmlnaW5YfSAkey10aGlzLm9yaWdpbll9ICR7dGhpcy53aWR0aH0gJHt0aGlzLmhlaWdodH1gXG4gICAgKTtcbiAgfVxuXG4gIGRyYXdDb2xvcldoZWVsKCkge1xuICAgIC8qXG4gICAgICogIFNldHRpbmcgdXAgYWxsIHBhcmVtZXRlcnNcbiAgICAgKi9cbiAgICBsZXQgc2hhZG93Q29sb3I7XG4gICAgbGV0IHNoYWRvd09mZnNldFg7XG4gICAgbGV0IHNoYWRvd09mZnNldFk7XG4gICAgbGV0IHNoYWRvd0JsdXI7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuYmFja2dyb3VuZExheWVyLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvLyBwb3N0aW9uaW5nIGFuZCBzaXppbmdcbiAgICBjb25zdCBjWCA9IHRoaXMub3JpZ2luWDtcbiAgICBjb25zdCBjWSA9IHRoaXMub3JpZ2luWTtcbiAgICBjb25zdCByYWRpdXMgPSB0aGlzLnJhZGl1cztcbiAgICBjb25zdCBjb3VudGVyQ2xvY2t3aXNlID0gZmFsc2U7XG4gICAgLy8gc3R5bGluZyBvZiB0aGUgd2hlZWxcbiAgICBjb25zdCB3aGVlbFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5iYWNrZ3JvdW5kTGF5ZXIsIG51bGwpO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gcGFyc2VJbnQoXG4gICAgICB3aGVlbFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItLXdoZWVsLWJvcmRlcndpZHRoXCIpLFxuICAgICAgMTBcbiAgICApO1xuICAgIGNvbnN0IGJvcmRlckNvbG9yID0gd2hlZWxTdHlsZVxuICAgICAgLmdldFByb3BlcnR5VmFsdWUoXCItLXdoZWVsLWJvcmRlcmNvbG9yXCIpXG4gICAgICAudHJpbSgpO1xuICAgIGNvbnN0IHdoZWVsU2hhZG93ID0gd2hlZWxTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS13aGVlbC1zaGFkb3dcIikudHJpbSgpO1xuICAgIC8vIGV4dHJhY3Qgc2hhZG93IHByb3BlcnRpZXMgZnJvbSAgQ0NTIHZhcmlhYmxlXG4gICAgLy8gdGhlIHNoYWRvdyBzaG91bGQgYmUgZGVmaW5lZCBhczogXCIxMHB4IDVweCA1cHggMHB4IENPTE9SXCJcbiAgICBpZiAod2hlZWxTaGFkb3cgIT09IFwibm9uZVwiKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSB3aGVlbFNoYWRvdy5zcGxpdChcInB4IFwiKTtcbiAgICAgIHNoYWRvd0NvbG9yID0gdmFsdWVzLnBvcCgpO1xuICAgICAgc2hhZG93T2Zmc2V0WCA9IHBhcnNlSW50KHZhbHVlc1swXSwgMTApO1xuICAgICAgc2hhZG93T2Zmc2V0WSA9IHBhcnNlSW50KHZhbHVlc1sxXSwgMTApO1xuICAgICAgc2hhZG93Qmx1ciA9IHBhcnNlSW50KHZhbHVlc1syXSwgMTApIHx8IDA7XG4gICAgfVxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHJhZGl1cyArIGJvcmRlcldpZHRoIC8gMjtcbiAgICBjb25zdCB3aGVlbFJhZGl1cyA9IHJhZGl1cztcbiAgICBjb25zdCBzaGFkb3dSYWRpdXMgPSByYWRpdXMgKyBib3JkZXJXaWR0aDtcblxuICAgIC8qXG4gICAgICogIERyYXdpbmcgZnVuY3Rpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gZHJhd0NpcmNsZShodWVTZWdtZW50cywgc2F0dXJhdGlvblNlZ21lbnRzKSB7XG4gICAgICBodWVTZWdtZW50cyA9IGh1ZVNlZ21lbnRzIHx8IDM2MDsgLy8gcmVzZXQgMCBzZWdtZW50cyB0byAzNjBcbiAgICAgIGNvbnN0IGFuZ2xlU3RlcCA9IDM2MCAvIGh1ZVNlZ21lbnRzO1xuICAgICAgY29uc3QgaGFsZkFuZ2xlU3RlcCA9IGFuZ2xlU3RlcCAvIDI7IC8vIGNlbnRlciBzZWdtZW50cyBvbiBjb2xvclxuICAgICAgZm9yICh2YXIgYW5nbGUgPSAwOyBhbmdsZSA8PSAzNjA7IGFuZ2xlICs9IGFuZ2xlU3RlcCkge1xuICAgICAgICB2YXIgc3RhcnRBbmdsZSA9IChhbmdsZSAtIGhhbGZBbmdsZVN0ZXApICogKE1hdGguUEkgLyAxODApO1xuICAgICAgICB2YXIgZW5kQW5nbGUgPSAoYW5nbGUgKyBoYWxmQW5nbGVTdGVwICsgMSkgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKGNYLCBjWSk7XG4gICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgIGNYLFxuICAgICAgICAgIGNZLFxuICAgICAgICAgIHdoZWVsUmFkaXVzLFxuICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgY291bnRlckNsb2Nrd2lzZVxuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAvLyBncmFkaWVudFxuICAgICAgICB2YXIgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KFxuICAgICAgICAgIGNYLFxuICAgICAgICAgIGNZLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgY1gsXG4gICAgICAgICAgY1ksXG4gICAgICAgICAgd2hlZWxSYWRpdXNcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGxpZ2h0bmVzcyA9IDEwMDtcbiAgICAgICAgLy8gZmlyc3QgZ3JhZGllbnQgc3RvcFxuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgYGhzbCgke2FuZ2xlfSwgMTAwJSwgJHtsaWdodG5lc3N9JSlgKTtcbiAgICAgICAgLy8gc2VnbWVudCBncmFkaWVudCBzdG9wc1xuICAgICAgICBpZiAoc2F0dXJhdGlvblNlZ21lbnRzID4gMCkge1xuICAgICAgICAgIGNvbnN0IHJhdGlvU3RlcCA9IDEgLyBzYXR1cmF0aW9uU2VnbWVudHM7XG4gICAgICAgICAgbGV0IHJhdGlvID0gMDtcbiAgICAgICAgICBmb3IgKHZhciBzdG9wID0gMTsgc3RvcCA8IHNhdHVyYXRpb25TZWdtZW50czsgc3RvcCArPSAxKSB7XG4gICAgICAgICAgICB2YXIgcHJldkxpZ2huZXNzID0gbGlnaHRuZXNzO1xuICAgICAgICAgICAgcmF0aW8gPSBzdG9wICogcmF0aW9TdGVwO1xuICAgICAgICAgICAgbGlnaHRuZXNzID0gMTAwIC0gNTAgKiByYXRpbztcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcbiAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgIGBoc2woJHthbmdsZX0sIDEwMCUsICR7cHJldkxpZ2huZXNzfSUpYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChyYXRpbywgYGhzbCgke2FuZ2xlfSwgMTAwJSwgJHtsaWdodG5lc3N9JSlgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKHJhdGlvLCBgaHNsKCR7YW5nbGV9LCAxMDAlLCA1MCUpYCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGFzdCBncmFkaWVudCBzdG9wXG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBgaHNsKCR7YW5nbGV9LCAxMDAlLCA1MCUpYCk7XG5cbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhd1NoYWRvdygpIHtcbiAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIGNvbnRleHQuYXJjKGNYLCBjWSwgc2hhZG93UmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgY29udGV4dC5zaGFkb3dDb2xvciA9IHNoYWRvd0NvbG9yO1xuICAgICAgY29udGV4dC5zaGFkb3dPZmZzZXRYID0gc2hhZG93T2Zmc2V0WDtcbiAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IHNoYWRvd09mZnNldFk7XG4gICAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSBzaGFkb3dCbHVyO1xuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYXdCb3JkZXIoKSB7XG4gICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgY29udGV4dC5hcmMoY1gsIGNZLCBib3JkZXJSYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqICAgQ2FsbCB0aGUgZHJhd2luZyBmdW5jdGlvbnNcbiAgICAgKiAgIGRyYXdzIHRoZSBzaGFkb3csIHdoZWVsIGFuZCBib3JkZXJcbiAgICAgKi9cbiAgICBpZiAod2hlZWxTdHlsZS5zaGFkb3cgIT09IFwibm9uZVwiKSB7XG4gICAgICBkcmF3U2hhZG93KCk7XG4gICAgfVxuICAgIGRyYXdDaXJjbGUodGhpcy5odWVTZWdtZW50cywgdGhpcy5zYXR1cmF0aW9uU2VnbWVudHMpO1xuICAgIGlmIChib3JkZXJXaWR0aCA+IDApIHtcbiAgICAgIGRyYXdCb3JkZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiAgIERyYXcgdGhlIChkcmFnZ2FibGUpIG1hcmtlciBhbmQgdG9vbHRpcFxuICAgKiAgIG9uIHRoZSBpbnRlcmFjdGlvbkxheWVyKVxuICAgKi9cblxuICBkcmF3TWFya2VyKCkge1xuICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSB0aGlzLmludGVyYWN0aW9uTGF5ZXI7XG4gICAgY29uc3QgbWFya2VycmFkaXVzID0gdGhpcy5yYWRpdXMgKiAwLjA4O1xuICAgIGNvbnN0IHRvb2x0aXByYWRpdXMgPSB0aGlzLnJhZGl1cyAqIDAuMTU7XG4gICAgY29uc3QgVG9vbHRpcE9mZnNldFkgPSAtKHRvb2x0aXByYWRpdXMgKiAzKTtcbiAgICBjb25zdCBUb29sdGlwT2Zmc2V0WCA9IDA7XG5cbiAgICBzdmdFbGVtZW50Lm1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwiY2lyY2xlXCJcbiAgICApO1xuICAgIHN2Z0VsZW1lbnQubWFya2VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFya2VyXCIpO1xuICAgIHN2Z0VsZW1lbnQubWFya2VyLnNldEF0dHJpYnV0ZShcInJcIiwgbWFya2VycmFkaXVzKTtcbiAgICB0aGlzLm1hcmtlciA9IHN2Z0VsZW1lbnQubWFya2VyO1xuICAgIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudC5tYXJrZXIpO1xuXG4gICAgc3ZnRWxlbWVudC50b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgXCJjaXJjbGVcIlxuICAgICk7XG4gICAgc3ZnRWxlbWVudC50b29sdGlwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29sb3JUb29sdGlwXCIpO1xuICAgIHN2Z0VsZW1lbnQudG9vbHRpcC5zZXRBdHRyaWJ1dGUoXCJyXCIsIHRvb2x0aXByYWRpdXMpO1xuICAgIHN2Z0VsZW1lbnQudG9vbHRpcC5zZXRBdHRyaWJ1dGUoXCJjeFwiLCBUb29sdGlwT2Zmc2V0WCk7XG4gICAgc3ZnRWxlbWVudC50b29sdGlwLnNldEF0dHJpYnV0ZShcImN5XCIsIFRvb2x0aXBPZmZzZXRZKTtcbiAgICB0aGlzLnRvb2x0aXAgPSBzdmdFbGVtZW50LnRvb2x0aXA7XG4gICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChzdmdFbGVtZW50LnRvb2x0aXApO1xuICB9XG5cbiAgc2VnbWVudGF0aW9uQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmJhY2tncm91bmRMYXllcikge1xuICAgICAgdGhpcy5kcmF3Q29sb3JXaGVlbCgpO1xuICAgIH1cbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29sb3ItcGlja2VyXCIsIEhhQ29sb3JQaWNrZXIpO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLXBhcGVyLXNsaWRlclwiO1xuaW1wb3J0IFwiLi9oYS1pY29uXCI7XG5cbmNsYXNzIEhhTGFiZWxlZFNsaWRlciBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWljb24ge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXNlY29uZGFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXBhcGVyLXNsaWRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0taGEtc2xpZGVyLWJhY2tncm91bmQpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5bW2NhcHRpb25dXTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLWNvbnRhaW5lclwiPjxzbG90IG5hbWU9XCJleHRyYVwiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxoYS1pY29uIGljb249XCJbW2ljb25dXVwiIGhpZGRlbiQ9XCJbWyFpY29uXV1cIj48L2hhLWljb24+XG4gICAgICAgIDxoYS1wYXBlci1zbGlkZXJcbiAgICAgICAgICBtaW49XCJbW21pbl1dXCJcbiAgICAgICAgICBtYXg9XCJbW21heF1dXCJcbiAgICAgICAgICBzdGVwPVwiW1tzdGVwXV1cIlxuICAgICAgICAgIHBpbj1cIltbcGluXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbZGlzYWJsZWRdXVwiXG4gICAgICAgICAgdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgICA+PC9oYS1wYXBlci1zbGlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXB0aW9uOiBTdHJpbmcsXG4gICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgIG1pbjogTnVtYmVyLFxuICAgICAgbWF4OiBOdW1iZXIsXG4gICAgICBwaW46IEJvb2xlYW4sXG4gICAgICBzdGVwOiBOdW1iZXIsXG5cbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBpZ25vcmVCYXJUb3VjaDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBpY29uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbGFiZWxlZC1zbGlkZXJcIiwgSGFMYWJlbGVkU2xpZGVyKTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlckljb25CdXR0b25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5cbmNvbnN0IHBhcGVySWNvbkJ1dHRvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFxuICBcInBhcGVyLWljb24tYnV0dG9uXCJcbikgYXMgQ29uc3RydWN0b3I8UGFwZXJJY29uQnV0dG9uRWxlbWVudD47XG5cbmV4cG9ydCBjbGFzcyBIYVBhcGVySWNvbkJ1dHRvbkFycm93UHJldiBleHRlbmRzIHBhcGVySWNvbkJ1dHRvbkNsYXNzIHtcbiAgcHVibGljIGhhc3Npbz86IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAvLyB3YWl0IHRvIGNoZWNrIGZvciBkaXJlY3Rpb24gc2luY2Ugb3RoZXJ3aXNlIGRpcmVjdGlvbiBpcyB3cm9uZyBldmVuIHRob3VnaCB0b3AgbGV2ZWwgaXMgUlRMXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmljb24gPVxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwibHRyXCJcbiAgICAgICAgICA/IHRoaXMuaGFzc2lvXG4gICAgICAgICAgICA/IFwiaGFzc2lvOmFycm93LWxlZnRcIlxuICAgICAgICAgICAgOiBcImhhc3M6YXJyb3ctbGVmdFwiXG4gICAgICAgICAgOiB0aGlzLmhhc3Npb1xuICAgICAgICAgID8gXCJoYXNzaW86YXJyb3ctcmlnaHRcIlxuICAgICAgICAgIDogXCJoYXNzOmFycm93LXJpZ2h0XCI7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiOiBIYVBhcGVySWNvbkJ1dHRvbkFycm93UHJldjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gIFwiaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiLFxuICBIYVBhcGVySWNvbkJ1dHRvbkFycm93UHJldlxuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNsaWRlci9wYXBlci1zbGlkZXJcIjtcblxuLyoqXG4gKiBAcG9seW1lclxuICogQGN1c3RvbUVsZW1lbnRcbiAqIEBhcHBsaWVzTWl4aW4gcGFwZXItc2xpZGVyXG4gKi9cbmNvbnN0IFBhcGVyU2xpZGVyQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1zbGlkZXJcIik7XG5cbmNsYXNzIEhhUGFwZXJTbGlkZXIgZXh0ZW5kcyBQYXBlclNsaWRlckNsYXNzIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBjb25zdCB0cGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4gICAgdHBsLmlubmVySFRNTCA9IFBhcGVyU2xpZGVyQ2xhc3MudGVtcGxhdGUuaW5uZXJIVE1MO1xuICAgIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgc3R5bGVFbC5pbm5lckhUTUwgPSBgXG4gICAgICAucGluID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAgdmFyKC0taGEtcGFwZXItc2xpZGVyLXBpbi1mb250LXNpemUsIDEwcHgpO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgfVxuXG4gICAgICAucGluID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjpiZWZvcmUge1xuICAgICAgICB0b3A6IHVuc2V0O1xuICAgICAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG5cbiAgICAgICAgYm90dG9tOiBjYWxjKDE1cHggKyB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXNsaWRlci1oZWlnaHQpLzIpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHdpZHRoOiAyLjJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjJlbTtcblxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICB9XG5cbiAgICAgIC5waW4uZXhwYW5kID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjpiZWZvcmUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKDdweCwgLTdweCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKDdweCwgLTdweCk7XG4gICAgICB9XG5cbiAgICAgIC5waW4gPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgdG9wOiB1bnNldDtcbiAgICAgICAgZm9udC1zaXplOiB1bnNldDtcblxuICAgICAgICBib3R0b206IGNhbGMoMTVweCArIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCkvMik7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xLjFlbTtcbiAgICAgICAgd2lkdGg6IDIuMmVtO1xuICAgICAgICBoZWlnaHQ6IDIuMWVtO1xuXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICB9XG5cbiAgICAgIC5waW4uZXhwYW5kID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTEwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTBweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXI9XCJydGxcIl0pIC5waW4uZXhwYW5kID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTE3cHgpIHNjYWxlWCgtMSkgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTE3cHgpIHNjYWxlWCgtMSkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIGA7XG4gICAgdHBsLmNvbnRlbnQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XG4gICAgcmV0dXJuIHRwbDtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFwZXItc2xpZGVyXCIsIEhhUGFwZXJTbGlkZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhV2F0ZXJIZWF0ZXJDb250cm9sIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAvKiBsb2NhbCBET00gc3R5bGVzIGdvIGhlcmUgKi9cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1qdXN0aWZpZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLmluLWZsdXgjdGFyZ2V0X3RlbXBlcmF0dXJlIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICAgICN0YXJnZXRfdGVtcGVyYXR1cmUge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1zZWxmLWNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDIwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2wtYnV0dG9ucyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwhLS0gbG9jYWwgRE9NIGdvZXMgaGVyZSAtLT5cbiAgICAgIDxkaXYgaWQ9XCJ0YXJnZXRfdGVtcGVyYXR1cmVcIj5bW3ZhbHVlXV0gW1t1bml0c11dPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC1idXR0b25zXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpjaGV2cm9uLXVwXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwiaW5jcmVtZW50VmFsdWVcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249XCJoYXNzOmNoZXZyb24tZG93blwiXG4gICAgICAgICAgICBvbi1jbGljaz1cImRlY3JlbWVudFZhbHVlXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG9ic2VydmVyOiBcInZhbHVlQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgfSxcbiAgICAgIG1heDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB9LFxuICAgICAgc3RlcDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdGVtcGVyYXR1cmVTdGF0ZUluRmx1eChpbkZsdXgpIHtcbiAgICB0aGlzLiQudGFyZ2V0X3RlbXBlcmF0dXJlLmNsYXNzTGlzdC50b2dnbGUoXCJpbi1mbHV4XCIsIGluRmx1eCk7XG4gIH1cblxuICBpbmNyZW1lbnRWYWx1ZSgpIHtcbiAgICBjb25zdCBuZXd2YWwgPSB0aGlzLnZhbHVlICsgdGhpcy5zdGVwO1xuICAgIGlmICh0aGlzLnZhbHVlIDwgdGhpcy5tYXgpIHtcbiAgICAgIHRoaXMubGFzdF9jaGFuZ2VkID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMudGVtcGVyYXR1cmVTdGF0ZUluRmx1eCh0cnVlKTtcbiAgICB9XG4gICAgaWYgKG5ld3ZhbCA8PSB0aGlzLm1heCkge1xuICAgICAgLy8gSWYgbm8gaW5pdGlhbCB0YXJnZXRfdGVtcFxuICAgICAgLy8gdGhpcyBmb3JjZXMgY29udHJvbCB0byBzdGFydFxuICAgICAgLy8gZnJvbSB0aGUgbWluIGNvbmZpZ3VyZWQgaW5zdGVhZCBvZiAwXG4gICAgICBpZiAobmV3dmFsIDw9IHRoaXMubWluKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1pbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXd2YWw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1heDtcbiAgICB9XG4gIH1cblxuICBkZWNyZW1lbnRWYWx1ZSgpIHtcbiAgICBjb25zdCBuZXd2YWwgPSB0aGlzLnZhbHVlIC0gdGhpcy5zdGVwO1xuICAgIGlmICh0aGlzLnZhbHVlID4gdGhpcy5taW4pIHtcbiAgICAgIHRoaXMubGFzdF9jaGFuZ2VkID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMudGVtcGVyYXR1cmVTdGF0ZUluRmx1eCh0cnVlKTtcbiAgICB9XG4gICAgaWYgKG5ld3ZhbCA+PSB0aGlzLm1pbikge1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld3ZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWluO1xuICAgIH1cbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZCgpIHtcbiAgICAvLyB3aGVuIHRoZSBsYXN0X2NoYW5nZWQgdGltZXN0YW1wIGlzIGNoYW5nZWQsXG4gICAgLy8gdHJpZ2dlciBhIHBvdGVudGlhbCBldmVudCBmaXJlIGluXG4gICAgLy8gdGhlIGZ1dHVyZSwgYXMgbG9uZyBhcyBsYXN0IGNoYW5nZWQgaXMgZmFyIGVub3VnaCBpbiB0aGVcbiAgICAvLyBwYXN0LlxuICAgIGlmICh0aGlzLmxhc3RfY2hhbmdlZCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAobm93IC0gdGhpcy5sYXN0X2NoYW5nZWQgPj0gMjAwMCkge1xuICAgICAgICAgIHRoaXMuZmlyZShcImNoYW5nZVwiKTtcbiAgICAgICAgICB0aGlzLnRlbXBlcmF0dXJlU3RhdGVJbkZsdXgoZmFsc2UpO1xuICAgICAgICAgIHRoaXMubGFzdF9jaGFuZ2VkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSwgMjAxMCk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXdhdGVyX2hlYXRlci1jb250cm9sXCIsIEhhV2F0ZXJIZWF0ZXJDb250cm9sKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctc2hhcmVkLXN0eWxlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgXCIuL21vcmUtaW5mby9tb3JlLWluZm8tY29udHJvbHNcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvL21vcmUtaW5mby1zZXR0aW5nc1wiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IGlzQ29tcG9uZW50TG9hZGVkIGZyb20gXCIuLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcblxuaW1wb3J0IERpYWxvZ01peGluIGZyb20gXCIuLi9taXhpbnMvZGlhbG9nLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIERpYWxvZ01peGluXG4gKi9cbmNsYXNzIEhhTW9yZUluZm9EaWFsb2cgZXh0ZW5kcyBEaWFsb2dNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZS1kaWFsb2cgcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXNcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB3aWR0aDogMzY1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbW9yZS1pbmZvLWNvbnRyb2xzLFxuICAgICAgICBtb3JlLWluZm8tc2V0dGluZ3Mge1xuICAgICAgICAgIC0tbW9yZS1pbmZvLWhlYWRlci1iYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgLS1tb3JlLWluZm8taGVhZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIC0taGEtbW9yZS1pbmZvLWFwcC10b29sYmFyLXRpdGxlOiB7XG4gICAgICAgICAgICAvKiBEZXNpZ24gZ3VpZGVsaW5lIHN0YXRlcyAyNHB4LCBjaGFuZ2VkIHRvIDE2IHRvIGFsaWduIHdpdGggc3RhdGUgaW5mbyAqL1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyLjZlbTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAvKiB3ZWJraXQgYW5kIGJsaW5rIHN0aWxsIHN1cHBvcnQgc2ltcGxlIG11bHRpbGluZSB0ZXh0LW92ZXJmbG93ICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBvdmVycnVsZSB0aGUgaGEtc3R5bGUtZGlhbG9nIG1heC1oZWlnaHQgb24gc21hbGwgc2NyZWVucyAqL1xuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCksIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgICAgICAgbW9yZS1pbmZvLWNvbnRyb2xzLFxuICAgICAgICAgIG1vcmUtaW5mby1zZXR0aW5ncyB7XG4gICAgICAgICAgICAtLW1vcmUtaW5mby1oZWFkZXItYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAtLW1vcmUtaW5mby1oZWFkZXItY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2RhdGEtZG9tYWluPVwiY2FtZXJhXCJdKSB7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZGF0YS1kb21haW49XCJoaXN0b3J5X2dyYXBoXCJdKSxcbiAgICAgICAgOmhvc3QoW2xhcmdlXSkge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX3BhZ2VdXVwiPlxuICAgICAgICA8bW9yZS1pbmZvLWNvbnRyb2xzXG4gICAgICAgICAgY2xhc3M9XCJuby1wYWRkaW5nXCJcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgZGlhbG9nLWVsZW1lbnQ9XCJbW19kaWFsb2dFbGVtZW50XV1cIlxuICAgICAgICAgIGNhbi1jb25maWd1cmU9XCJbW19yZWdpc3RyeUluZm9dXVwiXG4gICAgICAgICAgbGFyZ2U9XCJ7e2xhcmdlfX1cIlxuICAgICAgICA+PC9tb3JlLWluZm8tY29udHJvbHM+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9J1tbX2VxdWFscyhfcGFnZSwgXCJzZXR0aW5nc1wiKV1dJz5cbiAgICAgICAgPG1vcmUtaW5mby1zZXR0aW5nc1xuICAgICAgICAgIGNsYXNzPVwibm8tcGFkZGluZ1wiXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgIHJlZ2lzdHJ5LWluZm89XCJ7e19yZWdpc3RyeUluZm99fVwiXG4gICAgICAgID48L21vcmUtaW5mby1zZXR0aW5ncz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVN0YXRlT2JqKGhhc3MpXCIsXG4gICAgICAgIG9ic2VydmVyOiBcIl9zdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGxhcmdlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2xhcmdlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgX2RpYWxvZ0VsZW1lbnQ6IE9iamVjdCxcbiAgICAgIF9yZWdpc3RyeUluZm86IE9iamVjdCxcblxuICAgICAgX3BhZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIGRhdGFEb21haW46IHtcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVEb21haW4oc3RhdGVPYmopXCIsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfZGlhbG9nT3BlbkNoYW5nZWQob3BlbmVkKVwiXTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fZGlhbG9nRWxlbWVudCA9IHRoaXM7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW9yZS1pbmZvLXBhZ2VcIiwgKGV2KSA9PiB7XG4gICAgICB0aGlzLl9wYWdlID0gZXYuZGV0YWlsLnBhZ2U7XG4gICAgfSk7XG4gIH1cblxuICBfY29tcHV0ZURvbWFpbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iaiA/IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikgOiBcIlwiO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU9iaihoYXNzKSB7XG4gICAgcmV0dXJuIGhhc3Muc3RhdGVzW2hhc3MubW9yZUluZm9FbnRpdHlJZF0gfHwgbnVsbDtcbiAgfVxuXG4gIGFzeW5jIF9zdGF0ZU9iakNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgX3BhZ2U6IG51bGwsXG4gICAgICAgIF9yZWdpc3RyeUluZm86IG51bGwsXG4gICAgICAgIGxhcmdlOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgLy8gYWxsb3cgZGlhbG9nIHRvIHJlbmRlciBjb250ZW50IGJlZm9yZSBzaG93aW5nIGl0IHNvIGl0IHdpbGwgYmVcbiAgICAgICAgLy8gcG9zaXRpb25lZCBjb3JyZWN0bHkuXG4gICAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgICFpc0NvbXBvbmVudExvYWRlZCh0aGlzLmhhc3MsIFwiY29uZmlnXCIpIHx8XG4gICAgICAob2xkVmFsICYmIG9sZFZhbC5lbnRpdHlfaWQgPT09IG5ld1ZhbC5lbnRpdHlfaWQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzcy51c2VyLmlzX2FkbWluKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICAgICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2dldFwiLFxuICAgICAgICAgIGVudGl0eV9pZDogbmV3VmFsLmVudGl0eV9pZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5SW5mbyA9IGluZm87XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cnlJbmZvID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZGlhbG9nT3BlbkNoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKCFuZXdWYWwgJiYgdGhpcy5zdGF0ZU9iaikge1xuICAgICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogbnVsbCB9KTtcbiAgICB9XG4gIH1cblxuICBfZXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIF9sYXJnZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5ub3RpZnlSZXNpemUoKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbW9yZS1pbmZvLWRpYWxvZ1wiLCBIYU1vcmVJbmZvRGlhbG9nKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuY2xhc3MgTW9yZUluZm9BbGFybUNvbnRyb2xQYW5lbCBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wYWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuICAgICAgICAucGFkIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5wYWQgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbnMgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24uZGlzYXJtIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2NvZGVGb3JtYXRdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQuYWxhcm1fY29udHJvbF9wYW5lbC5jb2RlJyldXVwiXG4gICAgICAgICAgdmFsdWU9XCJ7e19lbnRlcmVkQ29kZX19XCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19pc051bWJlcihfY29kZUZvcm1hdCldXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjFcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID4xPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiNFwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjQ8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI3XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+NzwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjJcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID4yPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiNVwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjU8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI4XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+ODwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjBcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID4wPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiM1wiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjM8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI2XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+NjwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjlcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID45PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9jbGVhckVudGVyZWRDb2RlXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLmFsYXJtX2NvbnRyb2xfcGFuZWwuY2xlYXJfY29kZScpXV1cbiAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IGhvcml6b250YWwgY2VudGVyLWp1c3RpZmllZCBhY3Rpb25zXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZGlzYXJtVmlzaWJsZV1dXCI+XG4gICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgY2xhc3M9XCJkaXNhcm1cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJfY2FsbFNlcnZpY2VcIlxuICAgICAgICAgICAgZGF0YS1zZXJ2aWNlPVwiYWxhcm1fZGlzYXJtXCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2NvZGVWYWxpZF1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLmFsYXJtX2NvbnRyb2xfcGFuZWwuZGlzYXJtJyldXVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19hcm1WaXNpYmxlXV1cIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiXG4gICAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJhbGFybV9hcm1faG9tZVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9jb2RlVmFsaWRdXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hbGFybV9jb250cm9sX3BhbmVsLmFybV9ob21lJyldXVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiXG4gICAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJhbGFybV9hcm1fYXdheVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9jb2RlVmFsaWRdXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hbGFybV9jb250cm9sX3BhbmVsLmFybV9hd2F5JyldXVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3N0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIF9lbnRlcmVkQ29kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIF9jb2RlRm9ybWF0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgX2NvZGVWYWxpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDpcbiAgICAgICAgICBcIl92YWxpZGF0ZUNvZGUoX2VudGVyZWRDb2RlLCAgX2NvZGVGb3JtYXQsICBfYXJtVmlzaWJsZSwgX2NvZGVBcm1SZXF1aXJlZClcIixcbiAgICAgIH0sXG4gICAgICBfZGlzYXJtVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgX2FybVZpc2libGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIF9pbnB1dEVuYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9hcm1lZFN0YXRlcyA9IFtcbiAgICAgIFwiYXJtZWRfaG9tZVwiLFxuICAgICAgXCJhcm1lZF9hd2F5XCIsXG4gICAgICBcImFybWVkX25pZ2h0XCIsXG4gICAgICBcImFybWVkX2N1c3RvbV9ieXBhc3NcIixcbiAgICBdO1xuICB9XG5cbiAgX3N0YXRlT2JqQ2hhbmdlZChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gbmV3VmFsLnN0YXRlO1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIF9jb2RlRm9ybWF0OiBuZXdWYWwuYXR0cmlidXRlcy5jb2RlX2Zvcm1hdCxcbiAgICAgICAgX2FybVZpc2libGU6IHN0YXRlID09PSBcImRpc2FybWVkXCIsXG4gICAgICAgIF9jb2RlQXJtUmVxdWlyZWQ6IG5ld1ZhbC5hdHRyaWJ1dGVzLmNvZGVfYXJtX3JlcXVpcmVkLFxuICAgICAgICBfZGlzYXJtVmlzaWJsZTpcbiAgICAgICAgICB0aGlzLl9hcm1lZFN0YXRlcy5pbmNsdWRlcyhzdGF0ZSkgfHxcbiAgICAgICAgICBzdGF0ZSA9PT0gXCJwZW5kaW5nXCIgfHxcbiAgICAgICAgICBzdGF0ZSA9PT0gXCJ0cmlnZ2VyZWRcIiB8fFxuICAgICAgICAgIHN0YXRlID09PSBcImFybWluZ1wiLFxuICAgICAgfTtcbiAgICAgIHByb3BzLl9pbnB1dEVuYWJsZWQgPSBwcm9wcy5fZGlzYXJtVmlzaWJsZSB8fCBwcm9wcy5fYXJtVmlzaWJsZTtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wcyk7XG4gICAgfVxuICAgIGlmIChvbGRWYWwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgX2lzTnVtYmVyKGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXQgPT09IFwiTnVtYmVyXCI7XG4gIH1cblxuICBfdmFsaWRhdGVDb2RlKGNvZGUsIGZvcm1hdCwgYXJtVmlzaWJsZSwgY29kZUFybVJlcXVpcmVkKSB7XG4gICAgcmV0dXJuICFmb3JtYXQgfHwgY29kZS5sZW5ndGggPiAwIHx8IChhcm1WaXNpYmxlICYmICFjb2RlQXJtUmVxdWlyZWQpO1xuICB9XG5cbiAgX2RpZ2l0Q2xpY2tlZChldikge1xuICAgIHRoaXMuX2VudGVyZWRDb2RlICs9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRpZ2l0XCIpO1xuICB9XG5cbiAgX2NsZWFyRW50ZXJlZENvZGUoKSB7XG4gICAgdGhpcy5fZW50ZXJlZENvZGUgPSBcIlwiO1xuICB9XG5cbiAgX2NhbGxTZXJ2aWNlKGV2KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlcnZpY2VcIik7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBjb2RlOiB0aGlzLl9lbnRlcmVkQ29kZSxcbiAgICB9O1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImFsYXJtX2NvbnRyb2xfcGFuZWxcIiwgc2VydmljZSwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9lbnRlcmVkQ29kZSA9IFwiXCI7XG4gICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgXCJtb3JlLWluZm8tYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBNb3JlSW5mb0FsYXJtQ29udHJvbFBhbmVsXG4pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcmVsYXRpdmUtdGltZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmNsYXNzIE1vcmVJbmZvQXV0b21hdGlvbiBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICBtYXJnaW46IDM2cHggMCA4cHggMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgPGRpdj5bW2xvY2FsaXplKCd1aS5jYXJkLmF1dG9tYXRpb24ubGFzdF90cmlnZ2VyZWQnKV1dOjwvZGl2PlxuICAgICAgICA8aGEtcmVsYXRpdmUtdGltZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgZGF0ZXRpbWU9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubGFzdF90cmlnZ2VyZWRdXVwiXG4gICAgICAgID48L2hhLXJlbGF0aXZlLXRpbWU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJoYW5kbGVUcmlnZ2VyVGFwcGVkXCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hdXRvbWF0aW9uLnRyaWdnZXInKV1dXG4gICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVRyaWdnZXJUYXBwZWQoKSB7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiYXV0b21hdGlvblwiLCBcInRyaWdnZXJcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tYXV0b21hdGlvblwiLCBNb3JlSW5mb0F1dG9tYXRpb24pO1xuIiwiaW1wb3J0IHtcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBDYW1lcmFFbnRpdHkgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIENBTUVSQV9TVVBQT1JUX1NUUkVBTSxcbiAgQ2FtZXJhUHJlZmVyZW5jZXMsXG4gIGZldGNoQ2FtZXJhUHJlZnMsXG4gIHVwZGF0ZUNhbWVyYVByZWZzLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jYW1lcmFcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FtZXJhLXN0cmVhbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbi8vIE5vdCBkdXBsaWNhdGUgaW1wb3J0LCBpdCdzIGZvciB0eXBpbmdcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJDaGVja2JveEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcblxuY2xhc3MgTW9yZUluZm9DYW1lcmEgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmo/OiBDYW1lcmFFbnRpdHk7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NhbWVyYVByZWZzPzogQ2FtZXJhUHJlZmVyZW5jZXM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2F0dGFjaGVkID0gZmFsc2U7XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2F0dGFjaGVkIHx8ICF0aGlzLmhhc3MgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FtZXJhLXN0cmVhbVxuICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgIC5zdGF0ZU9iaj1cIiR7dGhpcy5zdGF0ZU9ian1cIlxuICAgICAgICBzaG93Y29udHJvbHNcbiAgICAgID48L2hhLWNhbWVyYS1zdHJlYW0+XG4gICAgICAke3RoaXMuX2NhbWVyYVByZWZzXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxwYXBlci1jaGVja2JveFxuICAgICAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX2NhbWVyYVByZWZzLnByZWxvYWRfc3RyZWFtfVxuICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5faGFuZGxlQ2hlY2tib3hDaGFuZ2VkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmVsb2FkIHN0cmVhbVxuICAgICAgICAgICAgPC9wYXBlci1jaGVja2JveD5cbiAgICAgICAgICBgXG4gICAgICAgIDogdW5kZWZpbmVkfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvbGRTdGF0ZSA9IGNoYW5nZWRQcm9wcy5nZXQoXCJzdGF0ZU9ialwiKSBhcyB0aGlzW1wic3RhdGVPYmpcIl07XG4gICAgY29uc3Qgb2xkRW50aXR5SWQgPSBvbGRTdGF0ZSA/IG9sZFN0YXRlLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjdXJFbnRpdHlJZCA9IHRoaXMuc3RhdGVPYmogPyB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcblxuICAgIC8vIFNhbWUgZW50aXR5LCBpZ25vcmUuXG4gICAgaWYgKGN1ckVudGl0eUlkID09PSBvbGRFbnRpdHlJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGN1ckVudGl0eUlkICYmXG4gICAgICB0aGlzLmhhc3MhLmNvbmZpZy5jb21wb25lbnRzLmluY2x1ZGVzKFwic3RyZWFtXCIpICYmXG4gICAgICBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiEsIENBTUVSQV9TVVBQT1JUX1NUUkVBTSlcbiAgICApIHtcbiAgICAgIC8vIEZldGNoIGluIGJhY2tncm91bmQgd2hpbGUgd2Ugc2V0IHVwIHRoZSB2aWRlby5cbiAgICAgIHRoaXMuX2ZldGNoQ2FtZXJhUHJlZnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaENhbWVyYVByZWZzKCkge1xuICAgIHRoaXMuX2NhbWVyYVByZWZzID0gYXdhaXQgZmV0Y2hDYW1lcmFQcmVmcyhcbiAgICAgIHRoaXMuaGFzcyEsXG4gICAgICB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWRcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlQ2hlY2tib3hDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBldi5jdXJyZW50VGFyZ2V0IGFzIFBhcGVyQ2hlY2tib3hFbGVtZW50O1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9jYW1lcmFQcmVmcyA9IGF3YWl0IHVwZGF0ZUNhbWVyYVByZWZzKFxuICAgICAgICB0aGlzLmhhc3MhLFxuICAgICAgICB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQsXG4gICAgICAgIHtcbiAgICAgICAgICBwcmVsb2FkX3N0cmVhbTogY2hlY2tib3guY2hlY2tlZCEsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gIWNoZWNrYm94LmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItY2hlY2tib3gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY2FtZXJhXCIsIE1vcmVJbmZvQ2FtZXJhKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNsaW1hdGUtY29udHJvbFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1zbGlkZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcblxuaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlUlRMRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBDbGltYXRlRW50aXR5LFxuICBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFLFxuICBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFX1JBTkdFLFxuICBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX0hVTUlESVRZLFxuICBDTElNQVRFX1NVUFBPUlRfRkFOX01PREUsXG4gIENMSU1BVEVfU1VQUE9SVF9TV0lOR19NT0RFLFxuICBDTElNQVRFX1NVUFBPUlRfQVVYX0hFQVQsXG4gIENMSU1BVEVfU1VQUE9SVF9QUkVTRVRfTU9ERSxcbiAgY29tcGFyZUNsaW1hdGVIdmFjTW9kZXMsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NsaW1hdGVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5cbmNsYXNzIE1vcmVJbmZvQ2xpbWF0ZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZU9iaj86IENsaW1hdGVFbnRpdHk7XG4gIHByaXZhdGUgX3Jlc2l6ZURlYm91bmNlPzogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuc3RhdGVPYmo7XG5cbiAgICBjb25zdCBzdXBwb3J0VGFyZ2V0VGVtcGVyYXR1cmUgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRUYXJnZXRUZW1wZXJhdHVyZVJhbmdlID0gc3VwcG9ydHNGZWF0dXJlKFxuICAgICAgc3RhdGVPYmosXG4gICAgICBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFX1JBTkdFXG4gICAgKTtcbiAgICBjb25zdCBzdXBwb3J0VGFyZ2V0SHVtaWRpdHkgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfSFVNSURJVFlcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRGYW5Nb2RlID0gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCBDTElNQVRFX1NVUFBPUlRfRkFOX01PREUpO1xuICAgIGNvbnN0IHN1cHBvcnRQcmVzZXRNb2RlID0gc3VwcG9ydHNGZWF0dXJlKFxuICAgICAgc3RhdGVPYmosXG4gICAgICBDTElNQVRFX1NVUFBPUlRfUFJFU0VUX01PREVcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRTd2luZ01vZGUgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9TV0lOR19NT0RFXG4gICAgKTtcbiAgICBjb25zdCBzdXBwb3J0QXV4SGVhdCA9IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgQ0xJTUFURV9TVVBQT1JUX0FVWF9IRUFUKTtcblxuICAgIGNvbnN0IHRlbXBlcmF0dXJlU3RlcFNpemUgPVxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9zdGVwIHx8XG4gICAgICAoaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmUuaW5kZXhPZihcIkZcIikgPT09IC0xID8gMC41IDogMSk7XG5cbiAgICBjb25zdCBydGxEaXJlY3Rpb24gPSBjb21wdXRlUlRMRGlyZWN0aW9uKGhhc3MpO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPSR7Y2xhc3NNYXAoe1xuICAgICAgICAgIFwiaGFzLWN1cnJlbnRfdGVtcGVyYXR1cmVcIjpcbiAgICAgICAgICAgIFwiY3VycmVudF90ZW1wZXJhdHVyZVwiIGluIHN0YXRlT2JqLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgXCJoYXMtY3VycmVudF9odW1pZGl0eVwiOiBcImN1cnJlbnRfaHVtaWRpdHlcIiBpbiBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgICAgIFwiaGFzLXRhcmdldF90ZW1wZXJhdHVyZVwiOiBzdXBwb3J0VGFyZ2V0VGVtcGVyYXR1cmUsXG4gICAgICAgICAgXCJoYXMtdGFyZ2V0X3RlbXBlcmF0dXJlX3JhbmdlXCI6IHN1cHBvcnRUYXJnZXRUZW1wZXJhdHVyZVJhbmdlLFxuICAgICAgICAgIFwiaGFzLXRhcmdldF9odW1pZGl0eVwiOiBzdXBwb3J0VGFyZ2V0SHVtaWRpdHksXG4gICAgICAgICAgXCJoYXMtZmFuX21vZGVcIjogc3VwcG9ydEZhbk1vZGUsXG4gICAgICAgICAgXCJoYXMtc3dpbmdfbW9kZVwiOiBzdXBwb3J0U3dpbmdNb2RlLFxuICAgICAgICAgIFwiaGFzLWF1eF9oZWF0XCI6IHN1cHBvcnRBdXhIZWF0LFxuICAgICAgICAgIFwiaGFzLXByZXNldF9tb2RlXCI6IHN1cHBvcnRQcmVzZXRNb2RlLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci10ZW1wZXJhdHVyZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9JHtzdGF0ZU9iai5zdGF0ZX0+XG4gICAgICAgICAgICAke3N1cHBvcnRUYXJnZXRUZW1wZXJhdHVyZSB8fCBzdXBwb3J0VGFyZ2V0VGVtcGVyYXR1cmVSYW5nZVxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUudGFyZ2V0X3RlbXBlcmF0dXJlXCIpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmVcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGhhLWNsaW1hdGUtY29udHJvbFxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlfVxuICAgICAgICAgICAgICAgICAgICAudW5pdHM9JHtoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgLnN0ZXA9JHt0ZW1wZXJhdHVyZVN0ZXBTaXplfVxuICAgICAgICAgICAgICAgICAgICAubWluPSR7c3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcH1cbiAgICAgICAgICAgICAgICAgICAgLm1heD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXB9XG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl90YXJnZXRUZW1wZXJhdHVyZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+PC9oYS1jbGltYXRlLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93IHx8XG4gICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2hcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGhhLWNsaW1hdGUtY29udHJvbFxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvd31cbiAgICAgICAgICAgICAgICAgICAgLnVuaXRzPSR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9XG4gICAgICAgICAgICAgICAgICAgIC5zdGVwPSR7dGVtcGVyYXR1cmVTdGVwU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgLm1pbj0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWluX3RlbXB9XG4gICAgICAgICAgICAgICAgICAgIC5tYXg9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2h9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmFuZ2UtY29udHJvbC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3RhcmdldFRlbXBlcmF0dXJlTG93Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID48L2hhLWNsaW1hdGUtY29udHJvbD5cbiAgICAgICAgICAgICAgICAgIDxoYS1jbGltYXRlLWNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdofVxuICAgICAgICAgICAgICAgICAgICAudW5pdHM9JHtoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgLnN0ZXA9JHt0ZW1wZXJhdHVyZVN0ZXBTaXplfVxuICAgICAgICAgICAgICAgICAgICAubWluPSR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3d9XG4gICAgICAgICAgICAgICAgICAgIC5tYXg9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heF90ZW1wfVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJhbmdlLWNvbnRyb2wtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fdGFyZ2V0VGVtcGVyYXR1cmVIaWdoQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID48L2hhLWNsaW1hdGUtY29udHJvbD5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgJHtzdXBwb3J0VGFyZ2V0SHVtaWRpdHlcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItaHVtaWRpdHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PiR7aGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS50YXJnZXRfaHVtaWRpdHlcIil9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXJnZXQtaHVtaWRpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5fSAlXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoYS1wYXBlci1zbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJodW1pZGl0eVwiXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgcGluXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZS1iYXItdG91Y2hcbiAgICAgICAgICAgICAgICAgICAgZGlyPSR7cnRsRGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAubWluPSR7c3RhdGVPYmouYXR0cmlidXRlcy5taW5faHVtaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgIC5tYXg9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heF9odW1pZGl0eX1cbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeVByb2dyZXNzPSR7c3RhdGVPYmouYXR0cmlidXRlcy5tYXhfaHVtaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl90YXJnZXRIdW1pZGl0eVNsaWRlckNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2hhLXBhcGVyLXNsaWRlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItaHZhY19tb2Rlc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICAubGFiZWw9JHtoYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLm9wZXJhdGlvblwiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3N0YXRlT2JqLnN0YXRlfVxuICAgICAgICAgICAgICAgIEBzZWxlY3RlZC1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlT3BlcmF0aW9ubW9kZUNoYW5nZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHZhY19tb2Rlc1xuICAgICAgICAgICAgICAgICAgLmNvbmNhdCgpXG4gICAgICAgICAgICAgICAgICAuc29ydChjb21wYXJlQ2xpbWF0ZUh2YWNNb2RlcylcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChtb2RlKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZT0ke21vZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKGBzdGF0ZS5jbGltYXRlLiR7bW9kZX1gKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgJHtzdXBwb3J0UHJlc2V0TW9kZVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1wcmVzZXRfbW9kZXNcIj5cbiAgICAgICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgICAgbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgICAgIC5sYWJlbD0ke2hhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUucHJlc2V0X21vZGVcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMucHJlc2V0X21vZGV9XG4gICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZC1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlUHJlc2V0bW9kZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5wcmVzZXRfbW9kZXMhLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAobW9kZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZT0ke21vZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHN0YXRlX2F0dHJpYnV0ZXMuY2xpbWF0ZS5wcmVzZXRfbW9kZS4ke21vZGV9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHx8IG1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3N1cHBvcnRGYW5Nb2RlXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZhbl9saXN0XCI+XG4gICAgICAgICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgICAgIGxhYmVsLWZsb2F0XG4gICAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduXG4gICAgICAgICAgICAgICAgICAubGFiZWw9JHtoYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLmZhbl9tb2RlXCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9tb2RlfVxuICAgICAgICAgICAgICAgICAgICBAc2VsZWN0ZWQtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUZhbm1vZGVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuZmFuX21vZGVzIS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgKG1vZGUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWU9JHttb2RlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzdGF0ZV9hdHRyaWJ1dGVzLmNsaW1hdGUuZmFuX21vZGUuJHttb2RlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB8fCBtb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHtzdXBwb3J0U3dpbmdNb2RlXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXN3aW5nX2xpc3RcIj5cbiAgICAgICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgICAgbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgICAgIC5sYWJlbD0ke2hhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUuc3dpbmdfbW9kZVwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7c3RhdGVPYmouYXR0cmlidXRlcy5zd2luZ19tb2RlfVxuICAgICAgICAgICAgICAgICAgICBAc2VsZWN0ZWQtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZVN3aW5nbW9kZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5zd2luZ19tb2RlcyEubWFwKFxuICAgICAgICAgICAgICAgICAgICAgIChtb2RlKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lPSR7bW9kZX0+JHttb2RlfTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICR7c3VwcG9ydEF1eEhlYXRcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItYXV4X2hlYXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyIGhvcml6b250YWwgbGF5b3V0IHNpbmdsZS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS5hdXhfaGVhdFwiKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tlZD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMuYXV4X2hlYXQgPT09IFwib25cIn1cbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2F1eFRvZ2dsZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmICghY2hhbmdlZFByb3BzLmhhcyhcInN0YXRlT2JqXCIpIHx8ICF0aGlzLnN0YXRlT2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Jlc2l6ZURlYm91bmNlKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVzaXplRGVib3VuY2UpO1xuICAgIH1cbiAgICB0aGlzLl9yZXNpemVEZWJvdW5jZSA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuICAgICAgdGhpcy5fcmVzaXplRGVib3VuY2UgPSB1bmRlZmluZWQ7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RhcmdldFRlbXBlcmF0dXJlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcihcbiAgICAgIHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUsXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF90ZW1wZXJhdHVyZVwiLFxuICAgICAgeyB0ZW1wZXJhdHVyZTogbmV3VmFsIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGFyZ2V0VGVtcGVyYXR1cmVMb3dDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcihcbiAgICAgIHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93LFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfdGVtcGVyYXR1cmVcIixcbiAgICAgIHtcbiAgICAgICAgdGFyZ2V0X3RlbXBfbG93OiBuZXdWYWwsXG4gICAgICAgIHRhcmdldF90ZW1wX2hpZ2g6IHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaCxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGFyZ2V0VGVtcGVyYXR1cmVIaWdoQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgdGhpcy5fY2FsbFNlcnZpY2VIZWxwZXIoXG4gICAgICB0aGlzLnN0YXRlT2JqIS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2gsXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF90ZW1wZXJhdHVyZVwiLFxuICAgICAge1xuICAgICAgICB0YXJnZXRfdGVtcF9sb3c6IHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93LFxuICAgICAgICB0YXJnZXRfdGVtcF9oaWdoOiBuZXdWYWwsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RhcmdldEh1bWlkaXR5U2xpZGVyQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcihcbiAgICAgIHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMuaHVtaWRpdHksXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF9odW1pZGl0eVwiLFxuICAgICAgeyBodW1pZGl0eTogbmV3VmFsIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXV4VG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5hdXhfaGVhdCA9PT0gXCJvblwiLFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfYXV4X2hlYXRcIixcbiAgICAgIHsgYXV4X2hlYXQ6IG5ld1ZhbCB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUZhbm1vZGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5mYW5fbW9kZSxcbiAgICAgIG5ld1ZhbCxcbiAgICAgIFwic2V0X2Zhbl9tb2RlXCIsXG4gICAgICB7IGZhbl9tb2RlOiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVPcGVyYXRpb25tb2RlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcih0aGlzLnN0YXRlT2JqIS5zdGF0ZSwgbmV3VmFsLCBcInNldF9odmFjX21vZGVcIiwge1xuICAgICAgaHZhY19tb2RlOiBuZXdWYWwsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVTd2luZ21vZGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5zd2luZ19tb2RlLFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfc3dpbmdfbW9kZVwiLFxuICAgICAgeyBzd2luZ19tb2RlOiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVQcmVzZXRtb2RlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZSB8fCBudWxsO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5wcmVzZXRfbW9kZSxcbiAgICAgIG5ld1ZhbCxcbiAgICAgIFwic2V0X3ByZXNldF9tb2RlXCIsXG4gICAgICB7IHByZXNldF9tb2RlOiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9jYWxsU2VydmljZUhlbHBlcihcbiAgICBvbGRWYWw6IHVua25vd24sXG4gICAgbmV3VmFsOiB1bmtub3duLFxuICAgIHNlcnZpY2U6IHN0cmluZyxcbiAgICBkYXRhOiB7XG4gICAgICBlbnRpdHlfaWQ/OiBzdHJpbmc7XG4gICAgICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xuICAgIH1cbiAgKSB7XG4gICAgaWYgKG9sZFZhbCA9PT0gbmV3VmFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YS5lbnRpdHlfaWQgPSB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQ7XG4gICAgY29uc3QgY3VyU3RhdGUgPSB0aGlzLnN0YXRlT2JqO1xuXG4gICAgYXdhaXQgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiY2xpbWF0ZVwiLCBzZXJ2aWNlLCBkYXRhKTtcblxuICAgIC8vIFdlIHJlc2V0IHN0YXRlT2JqIHRvIHJlLXN5bmMgdGhlIGlucHV0cyB3aXRoIHRoZSBzdGF0ZS4gSXQgd2lsbCBiZSBvdXRcbiAgICAvLyBvZiBzeW5jIGlmIG91ciBzZXJ2aWNlIGNhbGwgZGlkIG5vdCByZXN1bHQgaW4gdGhlIGVudGl0eSB0byBiZSB0dXJuZWRcbiAgICAvLyBvbi4gU2luY2UgdGhlIHN0YXRlIGlzIG5vdCBjaGFuZ2luZywgdGhlIHJlc3luYyBpcyBub3QgY2FsbGVkIGF1dG9tYXRpYy5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDAwKSk7XG5cbiAgICAvLyBObyBuZWVkIHRvIHJlc3luYyBpZiB3ZSByZWNlaXZlZCBhIG5ldyBzdGF0ZS5cbiAgICBpZiAodGhpcy5zdGF0ZU9iaiAhPT0gY3VyU3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlT2JqID0gdW5kZWZpbmVkO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgLy8gT25seSByZXN0b3JlIGlmIG5vdCBzZXQgeWV0IGJ5IGEgc3RhdGUgY2hhbmdlXG4gICAgaWYgKHRoaXMuc3RhdGVPYmogPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdGF0ZU9iaiA9IGN1clN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXItaHZhY19tb2RlcyBpcm9uLWljb24sXG4gICAgICAuY29udGFpbmVyLWZhbl9saXN0IGlyb24taWNvbixcbiAgICAgIC5jb250YWluZXItc3dpbmdfbGlzdCBpcm9uLWljb24ge1xuICAgICAgICBtYXJnaW46IDIycHggMTZweCAwIDA7XG4gICAgICB9XG5cbiAgICAgIGhhLXBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgaGEtcGFwZXItc2xpZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXItaHVtaWRpdHkgLnNpbmdsZS1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICB9XG5cbiAgICAgIC50YXJnZXQtaHVtaWRpdHkge1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgfVxuXG4gICAgICBoYS1jbGltYXRlLWNvbnRyb2wucmFuZ2UtY29udHJvbC1sZWZ0LFxuICAgICAgaGEtY2xpbWF0ZS1jb250cm9sLnJhbmdlLWNvbnRyb2wtcmlnaHQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDQ2JTtcbiAgICAgIH1cbiAgICAgIGhhLWNsaW1hdGUtY29udHJvbC5yYW5nZS1jb250cm9sLWxlZnQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgICAgfVxuICAgICAgaGEtY2xpbWF0ZS1jb250cm9sLnJhbmdlLWNvbnRyb2wtcmlnaHQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICB9XG5cbiAgICAgIC5odW1pZGl0eSB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWFjdGl2ZS1jb2xvcjogdmFyKC0tcGFwZXItYmx1ZS00MDApO1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBhcGVyLWJsdWUtNDAwKTtcbiAgICAgIH1cblxuICAgICAgLnNpbmdsZS1yb3cge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1jbGltYXRlXCIsIE1vcmVJbmZvQ2xpbWF0ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pbnB1dC9pcm9uLWlucHV0XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1tYXJrZG93blwiO1xuXG5jbGFzcyBNb3JlSW5mb0NvbmZpZ3VyYXRvciBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAgPiBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAuY2VudGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBwLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogI2M2MjgyODtcbiAgICAgICAgfVxuXG4gICAgICAgIHAuc3VibWl0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiA0MXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IHZlcnRpY2FsXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tpc0NvbmZpZ3VyYWJsZV1dXCI+XG4gICAgICAgICAgPGhhLW1hcmtkb3duXG4gICAgICAgICAgICBjb250ZW50PVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uXV1cIlxuICAgICAgICAgID48L2hhLW1hcmtkb3duPlxuXG4gICAgICAgICAgPHAgY2xhc3M9XCJlcnJvclwiIGhpZGRlbiQ9XCJbWyFzdGF0ZU9iai5hdHRyaWJ1dGVzLmVycm9yc11dXCI+XG4gICAgICAgICAgICBbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZXJyb3JzXV1cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZmllbGRzXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIltbaXRlbS5uYW1lXV1cIlxuICAgICAgICAgICAgICBuYW1lPVwiW1tpdGVtLmlkXV1cIlxuICAgICAgICAgICAgICB0eXBlPVwiW1tpdGVtLnR5cGVdXVwiXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cImZpZWxkQ2hhbmdlZFwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPHAgY2xhc3M9XCJzdWJtaXRcIiBoaWRkZW4kPVwiW1shc3RhdGVPYmouYXR0cmlidXRlcy5zdWJtaXRfY2FwdGlvbl1dXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICByYWlzZWQ9XCJcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbaXNDb25maWd1cmluZ11dXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJzdWJtaXRDbGlja2VkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgICAgICBhY3RpdmU9XCJbW2lzQ29uZmlndXJpbmddXVwiXG4gICAgICAgICAgICAgICAgaGlkZGVuPVwiW1shaXNDb25maWd1cmluZ11dXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDb25maWd1cmluZ1wiXG4gICAgICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5zdWJtaXRfY2FwdGlvbl1dXG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiZGlzcGxheVwiLFxuICAgICAgfSxcblxuICAgICAgaXNDb25maWd1cmFibGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUlzQ29uZmlndXJhYmxlKHN0YXRlT2JqKVwiLFxuICAgICAgfSxcblxuICAgICAgaXNDb25maWd1cmluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBmaWVsZElucHV0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVJc0NvbmZpZ3VyYWJsZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJjb25maWd1cmVcIjtcbiAgfVxuXG4gIGZpZWxkQ2hhbmdlZChldikge1xuICAgIHZhciBlbCA9IGV2LnRhcmdldDtcbiAgICB0aGlzLmZpZWxkSW5wdXRbZWwubmFtZV0gPSBlbC52YWx1ZTtcbiAgfVxuXG4gIHN1Ym1pdENsaWNrZWQoKSB7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBjb25maWd1cmVfaWQ6IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5jb25maWd1cmVfaWQsXG4gICAgICBmaWVsZHM6IHRoaXMuZmllbGRJbnB1dCxcbiAgICB9O1xuXG4gICAgdGhpcy5pc0NvbmZpZ3VyaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImNvbmZpZ3VyYXRvclwiLCBcImNvbmZpZ3VyZVwiLCBkYXRhKS50aGVuKFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaXNDb25maWd1cmluZyA9IGZhbHNlO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaXNDb25maWd1cmluZyA9IGZhbHNlO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY29uZmlndXJhdG9yXCIsIE1vcmVJbmZvQ29uZmlndXJhdG9yKTtcbiIsImltcG9ydCB7XG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVXBkYXRpbmdFbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCBcIi4vbW9yZS1pbmZvLWFsYXJtX2NvbnRyb2xfcGFuZWxcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWF1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWNhbWVyYVwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tY2xpbWF0ZVwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tY29uZmlndXJhdG9yXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1jb3ZlclwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tZGVmYXVsdFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tZmFuXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1ncm91cFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8taGlzdG9yeV9ncmFwaFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8taW5wdXRfZGF0ZXRpbWVcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWxpZ2h0XCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1sb2NrXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1tZWRpYV9wbGF5ZXJcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLXNjcmlwdFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tc3VuXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby10aW1lclwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tdXBkYXRlclwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tdmFjdXVtXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby13YXRlcl9oZWF0ZXJcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLXdlYXRoZXJcIjtcblxuaW1wb3J0IHsgc3RhdGVNb3JlSW5mb1R5cGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9tb3JlX2luZm9fdHlwZVwiO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlclwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jbGFzcyBNb3JlSW5mb0NvbnRlbnQgZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIHB1YmxpYyBzdGF0ZU9iaj86IEhhc3NFbnRpdHk7XG4gIHByaXZhdGUgX2RldGFjaGVkQ2hpbGQ/OiBDaGlsZE5vZGU7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBzdGF0ZU9iajoge30sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICAvLyBUaGlzIGlzIG5vdCBhIGxpdCBlbGVtZW50LCBidXQgYW4gdXBkYXRpbmcgZWxlbWVudCwgc28gd2UgaW1wbGVtZW50IHVwZGF0ZVxuICBwcm90ZWN0ZWQgdXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BzKTtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuc3RhdGVPYmo7XG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcblxuICAgIGlmICghc3RhdGVPYmogfHwgIWhhc3MpIHtcbiAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCkge1xuICAgICAgICB0aGlzLl9kZXRhY2hlZENoaWxkID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgIC8vIERldGFjaCBjaGlsZCB0byBwcmV2ZW50IGl0IGZyb20gZG9pbmcgd29yay5cbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RldGFjaGVkQ2hpbGQpIHtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5fZGV0YWNoZWRDaGlsZCk7XG4gICAgICB0aGlzLl9kZXRhY2hlZENoaWxkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IG1vcmVJbmZvVHlwZSA9XG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzICYmIFwiY3VzdG9tX3VpX21vcmVfaW5mb1wiIGluIHN0YXRlT2JqLmF0dHJpYnV0ZXNcbiAgICAgICAgPyBzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1c3RvbV91aV9tb3JlX2luZm9cbiAgICAgICAgOiBcIm1vcmUtaW5mby1cIiArIHN0YXRlTW9yZUluZm9UeXBlKHN0YXRlT2JqKTtcblxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcih0aGlzLCBtb3JlSW5mb1R5cGUudG9VcHBlckNhc2UoKSwge1xuICAgICAgaGFzcyxcbiAgICAgIHN0YXRlT2JqLFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1jb250ZW50XCIsIE1vcmVJbmZvQ29udGVudCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY292ZXItdGlsdC1jb250cm9sc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1sYWJlbGVkLXNsaWRlclwiO1xuXG5pbXBvcnQgQ292ZXJFbnRpdHkgZnJvbSBcIi4uLy4uLy4uL3V0aWwvY292ZXItbW9kZWxcIjtcbmltcG9ydCB7IGZlYXR1cmVDbGFzc05hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvZmVhdHVyZV9jbGFzc19uYW1lc1wiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgeyBhdHRyaWJ1dGVDbGFzc05hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvYXR0cmlidXRlX2NsYXNzX25hbWVzXCI7XG5cbmNvbnN0IEZFQVRVUkVfQ0xBU1NfTkFNRVMgPSB7XG4gIDEyODogXCJoYXMtc2V0X3RpbHRfcG9zaXRpb25cIixcbn07XG5jbGFzcyBNb3JlSW5mb0NvdmVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXhcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY3VycmVudF9wb3NpdGlvbixcbiAgICAgICAgLnRpbHQge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1jdXJyZW50X3Bvc2l0aW9uIC5jdXJyZW50X3Bvc2l0aW9uLFxuICAgICAgICAuaGFzLXNldF90aWx0X3Bvc2l0aW9uIC50aWx0LFxuICAgICAgICAuaGFzLWN1cnJlbnRfdGlsdF9wb3NpdGlvbiAudGlsdCB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMjA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBbaW52aXNpYmxlXSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnRfcG9zaXRpb25cIj5cbiAgICAgICAgICA8aGEtbGFiZWxlZC1zbGlkZXJcbiAgICAgICAgICAgIGNhcHRpb249XCJbW2xvY2FsaXplKCd1aS5jYXJkLmNvdmVyLnBvc2l0aW9uJyldXVwiXG4gICAgICAgICAgICBwaW49XCJcIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2NvdmVyUG9zaXRpb25TbGlkZXJWYWx1ZX19XCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzU2V0UG9zaXRpb25dXVwiXG4gICAgICAgICAgICBvbi1jaGFuZ2U9XCJjb3ZlclBvc2l0aW9uU2xpZGVyQ2hhbmdlZFwiXG4gICAgICAgICAgPjwvaGEtbGFiZWxlZC1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aWx0XCI+XG4gICAgICAgICAgPGhhLWxhYmVsZWQtc2xpZGVyXG4gICAgICAgICAgICBjYXB0aW9uPVwiW1tsb2NhbGl6ZSgndWkuY2FyZC5jb3Zlci50aWx0X3Bvc2l0aW9uJyldXVwiXG4gICAgICAgICAgICBwaW49XCJcIlxuICAgICAgICAgICAgZXh0cmE9XCJcIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2NvdmVyVGlsdFBvc2l0aW9uU2xpZGVyVmFsdWV9fVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbIWVudGl0eU9iai5zdXBwb3J0c1NldFRpbHRQb3NpdGlvbl1dXCJcbiAgICAgICAgICAgIG9uLWNoYW5nZT1cImNvdmVyVGlsdFBvc2l0aW9uU2xpZGVyQ2hhbmdlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGhhLWNvdmVyLXRpbHQtY29udHJvbHNcbiAgICAgICAgICAgICAgc2xvdD1cImV4dHJhXCJcbiAgICAgICAgICAgICAgaGlkZGVuJD1cIltbZW50aXR5T2JqLmlzVGlsdE9ubHldXVwiXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgICA+PC9oYS1jb3Zlci10aWx0LWNvbnRyb2xzPlxuICAgICAgICAgIDwvaGEtbGFiZWxlZC1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBlbnRpdHlPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgfSxcbiAgICAgIGNvdmVyUG9zaXRpb25TbGlkZXJWYWx1ZTogTnVtYmVyLFxuICAgICAgY292ZXJUaWx0UG9zaXRpb25TbGlkZXJWYWx1ZTogTnVtYmVyLFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBDb3ZlckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgY292ZXJQb3NpdGlvblNsaWRlclZhbHVlOiBuZXdWYWwuYXR0cmlidXRlcy5jdXJyZW50X3Bvc2l0aW9uLFxuICAgICAgICBjb3ZlclRpbHRQb3NpdGlvblNsaWRlclZhbHVlOiBuZXdWYWwuYXR0cmlidXRlcy5jdXJyZW50X3RpbHRfcG9zaXRpb24sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIHZhciBjbGFzc2VzID0gW1xuICAgICAgYXR0cmlidXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaiwgW1xuICAgICAgICBcImN1cnJlbnRfcG9zaXRpb25cIixcbiAgICAgICAgXCJjdXJyZW50X3RpbHRfcG9zaXRpb25cIixcbiAgICAgIF0pLFxuICAgICAgZmVhdHVyZUNsYXNzTmFtZXMoc3RhdGVPYmosIEZFQVRVUkVfQ0xBU1NfTkFNRVMpLFxuICAgIF07XG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbihcIiBcIik7XG4gIH1cblxuICBjb3ZlclBvc2l0aW9uU2xpZGVyQ2hhbmdlZChldikge1xuICAgIHRoaXMuZW50aXR5T2JqLnNldENvdmVyUG9zaXRpb24oZXYudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvdmVyVGlsdFBvc2l0aW9uU2xpZGVyQ2hhbmdlZChldikge1xuICAgIHRoaXMuZW50aXR5T2JqLnNldENvdmVyVGlsdFBvc2l0aW9uKGV2LnRhcmdldC52YWx1ZSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWNvdmVyXCIsIE1vcmVJbmZvQ292ZXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzXCI7XG5cbmNsYXNzIE1vcmVJbmZvRGVmYXVsdCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1hdHRyaWJ1dGVzIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiPjwvaGEtYXR0cmlidXRlcz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWRlZmF1bHRcIiwgTW9yZUluZm9EZWZhdWx0KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtYXR0cmlidXRlc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgeyBhdHRyaWJ1dGVDbGFzc05hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvYXR0cmlidXRlX2NsYXNzX25hbWVzXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9GYW4gZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXhcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY29udGFpbmVyLXNwZWVkX2xpc3QsXG4gICAgICAgIC5jb250YWluZXItZGlyZWN0aW9uLFxuICAgICAgICAuY29udGFpbmVyLW9zY2lsbGF0aW5nIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1zcGVlZF9saXN0IC5jb250YWluZXItc3BlZWRfbGlzdCxcbiAgICAgICAgLmhhcy1kaXJlY3Rpb24gLmNvbnRhaW5lci1kaXJlY3Rpb24sXG4gICAgICAgIC5oYXMtb3NjaWxsYXRpbmcgLmNvbnRhaW5lci1vc2NpbGxhdGluZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1wYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItc3BlZWRfbGlzdFwiPlxuICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICBsYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuY2FyZC5mYW4uc3BlZWQnKV1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnNwZWVkXV1cIlxuICAgICAgICAgICAgICBvbi1zZWxlY3RlZC1jaGFuZ2VkPVwic3BlZWRDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgICAgIGl0ZW1zPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnNwZWVkX2xpc3RdXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWUkPVwiW1tpdGVtXV1cIj5bW2l0ZW1dXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItb3NjaWxsYXRpbmdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyIGhvcml6b250YWwgbGF5b3V0IHNpbmdsZS1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+W1tsb2NhbGl6ZSgndWkuY2FyZC5mYW4ub3NjaWxsYXRlJyldXTwvZGl2PlxuICAgICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgICBjaGVja2VkPVwiW1tvc2NpbGxhdGlvblRvZ2dsZUNoZWNrZWRdXVwiXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cIm9zY2lsbGF0aW9uVG9nZ2xlQ2hhbmdlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2hhLXN3aXRjaD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1kaXJlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlyZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2PltbbG9jYWxpemUoJ3VpLmNhcmQuZmFuLmRpcmVjdGlvbicpXV08L2Rpdj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpyb3RhdGUtbGVmdFwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25EaXJlY3Rpb25SZXZlcnNlXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJbW2xvY2FsaXplKCd1aS5jYXJkLmZhbi5yZXZlcnNlJyldXVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlSXNSb3RhdGluZ1JldmVyc2Uoc3RhdGVPYmopXV1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cm90YXRlLXJpZ2h0XCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJvbkRpcmVjdGlvbkZvcndhcmRcIlxuICAgICAgICAgICAgICB0aXRsZT1cIltbbG9jYWxpemUoJ3VpLmNhcmQuZmFuLmZvcndhcmQnKV1dXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVJc1JvdGF0aW5nRm9yd2FyZChzdGF0ZU9iaildXVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGhhLWF0dHJpYnV0ZXNcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgZXh0cmEtZmlsdGVycz1cInNwZWVkLHNwZWVkX2xpc3Qsb3NjaWxsYXRpbmcsZGlyZWN0aW9uXCJcbiAgICAgID48L2hhLWF0dHJpYnV0ZXM+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgb3NjaWxsYXRpb25Ub2dnbGVDaGVja2VkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBvc2NpbGxhdGlvblRvZ2dsZUNoZWNrZWQ6IG5ld1ZhbC5hdHRyaWJ1dGVzLm9zY2lsbGF0aW5nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9sZFZhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBcIm1vcmUtaW5mby1mYW4gXCIgK1xuICAgICAgYXR0cmlidXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaiwgW1wib3NjaWxsYXRpbmdcIiwgXCJzcGVlZF9saXN0XCIsIFwiZGlyZWN0aW9uXCJdKVxuICAgICk7XG4gIH1cblxuICBzcGVlZENoYW5nZWQoZXYpIHtcbiAgICB2YXIgb2xkVmFsID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLnNwZWVkO1xuICAgIHZhciBuZXdWYWwgPSBldi5kZXRhaWwudmFsdWU7XG5cbiAgICBpZiAoIW5ld1ZhbCB8fCBvbGRWYWwgPT09IG5ld1ZhbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiZmFuXCIsIFwidHVybl9vblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgc3BlZWQ6IG5ld1ZhbCxcbiAgICB9KTtcbiAgfVxuXG4gIG9zY2lsbGF0aW9uVG9nZ2xlQ2hhbmdlZChldikge1xuICAgIHZhciBvbGRWYWwgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMub3NjaWxsYXRpbmc7XG4gICAgdmFyIG5ld1ZhbCA9IGV2LnRhcmdldC5jaGVja2VkO1xuXG4gICAgaWYgKG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJmYW5cIiwgXCJvc2NpbGxhdGVcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIG9zY2lsbGF0aW5nOiBuZXdWYWwsXG4gICAgfSk7XG4gIH1cblxuICBvbkRpcmVjdGlvblJldmVyc2UoKSB7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiZmFuXCIsIFwic2V0X2RpcmVjdGlvblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgZGlyZWN0aW9uOiBcInJldmVyc2VcIixcbiAgICB9KTtcbiAgfVxuXG4gIG9uRGlyZWN0aW9uRm9yd2FyZCgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJmYW5cIiwgXCJzZXRfZGlyZWN0aW9uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBkaXJlY3Rpb246IFwiZm9yd2FyZFwiLFxuICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZUlzUm90YXRpbmdSZXZlcnNlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGlyZWN0aW9uID09PSBcInJldmVyc2VcIjtcbiAgfVxuXG4gIGNvbXB1dGVJc1JvdGF0aW5nRm9yd2FyZChzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRpcmVjdGlvbiA9PT0gXCJmb3J3YXJkXCI7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWZhblwiLCBNb3JlSW5mb0Zhbik7XG4iLCJpbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtY29udGVudFwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlclwiO1xuXG5jbGFzcyBNb3JlSW5mb0dyb3VwIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY2hpbGQtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLWNhcmQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cImdyb3VwZWRDb250cm9sRGV0YWlsc1wiPjwvZGl2PlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tzdGF0ZXNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkLWNhcmRcIj5cbiAgICAgICAgICA8c3RhdGUtY2FyZC1jb250ZW50XG4gICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlXV1cIlxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICA+PC9zdGF0ZS1jYXJkLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVN0YXRlcyhzdGF0ZU9iaiwgaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJzdGF0ZXNDaGFuZ2VkKHN0YXRlT2JqLCBzdGF0ZXMpXCJdO1xuICB9XG5cbiAgY29tcHV0ZVN0YXRlcyhzdGF0ZU9iaiwgaGFzcykge1xuICAgIHZhciBzdGF0ZXMgPSBbXTtcbiAgICB2YXIgZW50SWRzID0gc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfaWQgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudElkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHN0YXRlID0gaGFzcy5zdGF0ZXNbZW50SWRzW2ldXTtcblxuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVzO1xuICB9XG5cbiAgc3RhdGVzQ2hhbmdlZChzdGF0ZU9iaiwgc3RhdGVzKSB7XG4gICAgbGV0IGdyb3VwRG9tYWluU3RhdGVPYmogPSBmYWxzZTtcbiAgICBsZXQgZ3JvdXBEb21haW4gPSBmYWxzZTtcblxuICAgIGlmIChzdGF0ZXMgJiYgc3RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGJhc2VTdGF0ZU9iaiA9IHN0YXRlcy5maW5kKChzKSA9PiBzLnN0YXRlID09PSBcIm9uXCIpIHx8IHN0YXRlc1swXTtcbiAgICAgIGdyb3VwRG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKGJhc2VTdGF0ZU9iaik7XG5cbiAgICAgIC8vIEdyb3VwcyBuZWVkIHRvIGJlIGZpbHRlcmVkIG91dCBvciB3ZSdsbCBzaG93IGNvbnRlbnQgb2ZcbiAgICAgIC8vIGZpcnN0IGNoaWxkIGFib3ZlIHRoZSBjaGlsZHJlbiBvZiB0aGUgY3VycmVudCBncm91cFxuICAgICAgaWYgKGdyb3VwRG9tYWluICE9PSBcImdyb3VwXCIpIHtcbiAgICAgICAgZ3JvdXBEb21haW5TdGF0ZU9iaiA9IHtcbiAgICAgICAgICAuLi5iYXNlU3RhdGVPYmosXG4gICAgICAgICAgZW50aXR5X2lkOiBzdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICAgICAgYXR0cmlidXRlczogeyAuLi5iYXNlU3RhdGVPYmouYXR0cmlidXRlcyB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGdyb3VwRG9tYWluICE9PSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVzW2ldKSkge1xuICAgICAgICAgICAgZ3JvdXBEb21haW5TdGF0ZU9iaiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFncm91cERvbWFpblN0YXRlT2JqKSB7XG4gICAgICBjb25zdCBlbCA9IGRvbSh0aGlzLiQuZ3JvdXBlZENvbnRyb2xEZXRhaWxzKTtcbiAgICAgIGlmIChlbC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgZWwucmVtb3ZlQ2hpbGQoZWwubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgICB0aGlzLiQuZ3JvdXBlZENvbnRyb2xEZXRhaWxzLFxuICAgICAgICBcIk1PUkUtSU5GTy1cIiArIGdyb3VwRG9tYWluLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIHsgc3RhdGVPYmo6IGdyb3VwRG9tYWluU3RhdGVPYmosIGhhc3M6IHRoaXMuaGFzcyB9XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tZ3JvdXBcIiwgTW9yZUluZm9Hcm91cCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jYXJkcy9oYS1oaXN0b3J5X2dyYXBoLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtYXR0cmlidXRlc1wiO1xuXG5jbGFzcyBNb3JlSW5mb0hpc3RvcnlHcmFwaCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1oaXN0b3J5X2dyYXBoLWNhcmRcbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiXCJcbiAgICAgID5cbiAgICAgICAgPGhhLWF0dHJpYnV0ZXMgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCI+PC9oYS1hdHRyaWJ1dGVzPlxuICAgICAgPC9oYS1oaXN0b3J5X2dyYXBoLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8taGlzdG9yeV9ncmFwaFwiLCBNb3JlSW5mb0hpc3RvcnlHcmFwaCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci92YWFkaW4tZGF0ZS1waWNrZXJcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL3BhcGVyLXRpbWUtaW5wdXRcIjtcblxuaW1wb3J0IHsgYXR0cmlidXRlQ2xhc3NOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2F0dHJpYnV0ZV9jbGFzc19uYW1lc1wiO1xuXG5jbGFzcyBEYXRldGltZUlucHV0IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tkb2VzSGF2ZURhdGUoc3RhdGVPYmopXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx2YWFkaW4tZGF0ZS1waWNrZXJcbiAgICAgICAgICAgICAgaWQ9XCJkYXRlSW5wdXRcIlxuICAgICAgICAgICAgICBvbi12YWx1ZS1jaGFuZ2VkPVwiZGF0ZVRpbWVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e3NlbGVjdGVkRGF0ZX19XCJcbiAgICAgICAgICAgID48L3ZhYWRpbi1kYXRlLXBpY2tlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2RvZXNIYXZlVGltZShzdGF0ZU9iaildXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHBhcGVyLXRpbWUtaW5wdXRcbiAgICAgICAgICAgICAgaG91cj1cInt7c2VsZWN0ZWRIb3VyfX1cIlxuICAgICAgICAgICAgICBtaW49XCJ7e3NlbGVjdGVkTWludXRlfX1cIlxuICAgICAgICAgICAgICBmb3JtYXQ9XCIyNFwiXG4gICAgICAgICAgICA+PC9wYXBlci10aW1lLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pc19yZWFkeSA9IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic3RhdGVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBzZWxlY3RlZERhdGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRlVGltZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHNlbGVjdGVkSG91cjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGVUaW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgc2VsZWN0ZWRNaW51dGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRlVGltZUNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5pc19yZWFkeSA9IHRydWU7XG4gIH1cblxuICAvKiBDb252ZXJ0IHRoZSBkYXRlIGluIHRoZSBzdGF0ZU9iaiBpbnRvIGEgc3RyaW5nIHVzZWFibGUgYnkgdmFhZGluLWRhdGUtcGlja2VyICovXG4gIGdldERhdGVTdHJpbmcoc3RhdGVPYmopIHtcbiAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFwidW5rbm93blwiKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgdmFyIG1vbnRoRmlsbGVyO1xuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLm1vbnRoIDwgMTApIHtcbiAgICAgIG1vbnRoRmlsbGVyID0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vbnRoRmlsbGVyID0gXCJcIjtcbiAgICB9XG5cbiAgICB2YXIgZGF5RmlsbGVyO1xuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmRheSA8IDEwKSB7XG4gICAgICBkYXlGaWxsZXIgPSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5RmlsbGVyID0gXCJcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy55ZWFyICtcbiAgICAgIFwiLVwiICtcbiAgICAgIG1vbnRoRmlsbGVyICtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGggK1xuICAgICAgXCItXCIgK1xuICAgICAgZGF5RmlsbGVyICtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGF5XG4gICAgKTtcbiAgfVxuXG4gIC8qIFNob3VsZCBmaXJlIHdoZW4gYW55IHZhbHVlIHdhcyBjaGFuZ2VkICpieSB0aGUgdXNlciosIG5vdCBiL2Mgb2Ygc2V0dGluZ1xuICAgKiBpbml0aWFsIHZhbHVlcy4gKi9cbiAgZGF0ZVRpbWVDaGFuZ2VkKCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBjaGFuZ2UgaXMgcmVhbGx5IGNvbWluZyBmcm9tIHRoZSB1c2VyXG4gICAgaWYgKCF0aGlzLmlzX3JlYWR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICBsZXQgbWludXRlRmlsbGVyO1xuXG4gICAgY29uc3Qgc2VydmljZURhdGEgPSB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmhhc190aW1lKSB7XG4gICAgICBjaGFuZ2VkIHw9XG4gICAgICAgIHBhcnNlSW50KHRoaXMuc2VsZWN0ZWRNaW51dGUpICE9PSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMubWludXRlO1xuICAgICAgY2hhbmdlZCB8PSBwYXJzZUludCh0aGlzLnNlbGVjdGVkSG91cikgIT09IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5ob3VyO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNaW51dGUgPCAxMCkge1xuICAgICAgICBtaW51dGVGaWxsZXIgPSBcIjBcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pbnV0ZUZpbGxlciA9IFwiXCI7XG4gICAgICB9XG4gICAgICB2YXIgdGltZVN0ciA9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIb3VyICsgXCI6XCIgKyBtaW51dGVGaWxsZXIgKyB0aGlzLnNlbGVjdGVkTWludXRlO1xuICAgICAgc2VydmljZURhdGEudGltZSA9IHRpbWVTdHI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47IC8vIERhdGUgd2FzIG5vdCBzZXRcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0ZVZhbElucHV0ID0gbmV3IERhdGUodGhpcy5zZWxlY3RlZERhdGUpO1xuICAgICAgY29uc3QgZGF0ZVZhbFN0YXRlID0gbmV3IERhdGUoXG4gICAgICAgIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy55ZWFyLFxuICAgICAgICB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGggLSAxLFxuICAgICAgICB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuZGF5XG4gICAgICApO1xuXG4gICAgICBjaGFuZ2VkIHw9IGRhdGVWYWxTdGF0ZSAhPT0gZGF0ZVZhbElucHV0O1xuXG4gICAgICBzZXJ2aWNlRGF0YS5kYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImlucHV0X2RhdGV0aW1lXCIsIFwic2V0X2RhdGV0aW1lXCIsIHNlcnZpY2VEYXRhKTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQobmV3VmFsKSB7XG4gICAgLy8gU2V0IHRvIG5vbi1yZWFkeSBzLnQuIGRhdGVUaW1lQ2hhbmdlZCBkb2VzIG5vdCBmaXJlXG4gICAgdGhpcy5pc19yZWFkeSA9IGZhbHNlO1xuXG4gICAgaWYgKG5ld1ZhbC5hdHRyaWJ1dGVzLmhhc190aW1lKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSG91ciA9IG5ld1ZhbC5hdHRyaWJ1dGVzLmhvdXI7XG4gICAgICB0aGlzLnNlbGVjdGVkTWludXRlID0gbmV3VmFsLmF0dHJpYnV0ZXMubWludXRlO1xuICAgIH1cblxuICAgIGlmIChuZXdWYWwuYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB0aGlzLmdldERhdGVTdHJpbmcobmV3VmFsKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzX3JlYWR5ID0gdHJ1ZTtcbiAgfVxuXG4gIGRvZXNIYXZlRGF0ZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhhc19kYXRlO1xuICB9XG5cbiAgZG9lc0hhdmVUaW1lKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX3RpbWU7XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBcIm1vcmUtaW5mby1pbnB1dF9kYXRldGltZSBcIiArXG4gICAgICBhdHRyaWJ1dGVDbGFzc05hbWVzKHN0YXRlT2JqLCBbXCJoYXNfdGltZVwiLCBcImhhc19kYXRlXCJdKVxuICAgICk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWlucHV0X2RhdGV0aW1lXCIsIERhdGV0aW1lSW5wdXQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5cbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtYXR0cmlidXRlc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jb2xvci1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtbGFiZWxlZC1zbGlkZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuXG5pbXBvcnQgeyBmZWF0dXJlQ2xhc3NOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2ZlYXR1cmVfY2xhc3NfbmFtZXNcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY29uc3QgRkVBVFVSRV9DTEFTU19OQU1FUyA9IHtcbiAgMTogXCJoYXMtYnJpZ2h0bmVzc1wiLFxuICAyOiBcImhhcy1jb2xvcl90ZW1wXCIsXG4gIDQ6IFwiaGFzLWVmZmVjdF9saXN0XCIsXG4gIDE2OiBcImhhcy1jb2xvclwiLFxuICAxMjg6IFwiaGFzLXdoaXRlX3ZhbHVlXCIsXG59O1xuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9MaWdodCBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5lZmZlY3RfbGlzdCxcbiAgICAgICAgLmJyaWdodG5lc3MsXG4gICAgICAgIC5jb2xvcl90ZW1wLFxuICAgICAgICAud2hpdGVfdmFsdWUge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbG9yX3RlbXAge1xuICAgICAgICAgIC0taGEtc2xpZGVyLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgcmlnaHQsXG4gICAgICAgICAgICByZ2IoMjU1LCAxNjAsIDApIDAlLFxuICAgICAgICAgICAgd2hpdGUgNTAlLFxuICAgICAgICAgICAgcmdiKDE2NiwgMjA5LCAyNTUpIDEwMCVcbiAgICAgICAgICApO1xuICAgICAgICAgIC8qIFRoZSBjb2xvciB0ZW1wIG1pbmltdW0gdmFsdWUgc2hvdWxkbid0IGJlIHJlbmRlcmVkIGRpZmZlcmVudGx5LiBJdCdzIG5vdCBcIm9mZlwiLiAqL1xuICAgICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWdtZW50YXRpb25Db250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNvbG9yLXBpY2tlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWdtZW50YXRpb25CdXR0b24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDExJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgd2lkdGg6IDIzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstc2Vjb25kYXJ5LW9wYWNpdHkpO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLWNvbG9yLmlzLW9uIC5zZWdtZW50YXRpb25Db250YWluZXIgLnNlZ21lbnRhdGlvbkJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTElO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gICAgICAgICAgd2lkdGg6IDIzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXNlY29uZGFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtZWZmZWN0X2xpc3QuaXMtb24gLmVmZmVjdF9saXN0LFxuICAgICAgICAuaGFzLWJyaWdodG5lc3MgLmJyaWdodG5lc3MsXG4gICAgICAgIC5oYXMtY29sb3JfdGVtcC5pcy1vbiAuY29sb3JfdGVtcCxcbiAgICAgICAgLmhhcy13aGl0ZV92YWx1ZS5pcy1vbiAud2hpdGVfdmFsdWUge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDg0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLWJyaWdodG5lc3MgLmhhcy1jb2xvcl90ZW1wLmlzLW9uLFxuICAgICAgICAuaGFzLXdoaXRlX3ZhbHVlLmlzLW9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtYnJpZ2h0bmVzcyAuYnJpZ2h0bmVzcyxcbiAgICAgICAgLmhhcy1jb2xvcl90ZW1wLmlzLW9uIC5jb2xvcl90ZW1wLFxuICAgICAgICAuaGFzLXdoaXRlX3ZhbHVlLmlzLW9uIC53aGl0ZV92YWx1ZSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLWNvbG9yLmlzLW9uIC5zZWdtZW50YXRpb25CdXR0b24ge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1jb2xvci5pcy1vbiBoYS1jb2xvci1waWNrZXIge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAgIC0taGEtY29sb3ItcGlja2VyLXdoZWVsLWJvcmRlcndpZHRoOiA1O1xuICAgICAgICAgIC0taGEtY29sb3ItcGlja2VyLXdoZWVsLWJvcmRlcmNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAtLWhhLWNvbG9yLXBpY2tlci13aGVlbC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgLS1oYS1jb2xvci1waWNrZXItbWFya2VyLWJvcmRlcndpZHRoOiAyO1xuICAgICAgICAgIC0taGEtY29sb3ItcGlja2VyLW1hcmtlci1ib3JkZXJjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuaXMtdW5hdmFpbGFibGUgLmNvbnRyb2wge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGJyaWdodG5lc3NcIj5cbiAgICAgICAgICA8aGEtbGFiZWxlZC1zbGlkZXJcbiAgICAgICAgICAgIGNhcHRpb249XCJbW2xvY2FsaXplKCd1aS5jYXJkLmxpZ2h0LmJyaWdodG5lc3MnKV1dXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmJyaWdodG5lc3MtNVwiXG4gICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgIG1heD1cIjI1NVwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7YnJpZ2h0bmVzc1NsaWRlclZhbHVlfX1cIlxuICAgICAgICAgICAgb24tY2hhbmdlPVwiYnJpZ2h0bmVzc1NsaWRlckNoYW5nZWRcIlxuICAgICAgICAgID48L2hhLWxhYmVsZWQtc2xpZGVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbCBjb2xvcl90ZW1wXCI+XG4gICAgICAgICAgPGhhLWxhYmVsZWQtc2xpZGVyXG4gICAgICAgICAgICBjYXB0aW9uPVwiW1tsb2NhbGl6ZSgndWkuY2FyZC5saWdodC5jb2xvcl90ZW1wZXJhdHVyZScpXV1cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6dGhlcm1vbWV0ZXJcIlxuICAgICAgICAgICAgbWluPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl9taXJlZHNdXVwiXG4gICAgICAgICAgICBtYXg9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X21pcmVkc11dXCJcbiAgICAgICAgICAgIHZhbHVlPVwie3tjdFNsaWRlclZhbHVlfX1cIlxuICAgICAgICAgICAgb24tY2hhbmdlPVwiY3RTbGlkZXJDaGFuZ2VkXCJcbiAgICAgICAgICA+PC9oYS1sYWJlbGVkLXNsaWRlcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgd2hpdGVfdmFsdWVcIj5cbiAgICAgICAgICA8aGEtbGFiZWxlZC1zbGlkZXJcbiAgICAgICAgICAgIGNhcHRpb249XCJbW2xvY2FsaXplKCd1aS5jYXJkLmxpZ2h0LndoaXRlX3ZhbHVlJyldXVwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczpmaWxlLXdvcmQtYm94XCJcbiAgICAgICAgICAgIG1heD1cIjI1NVwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7d3ZTbGlkZXJWYWx1ZX19XCJcbiAgICAgICAgICAgIG9uLWNoYW5nZT1cInd2U2xpZGVyQ2hhbmdlZFwiXG4gICAgICAgICAgPjwvaGEtbGFiZWxlZC1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VnbWVudGF0aW9uQ29udGFpbmVyXCI+XG4gICAgICAgICAgPGhhLWNvbG9yLXBpY2tlclxuICAgICAgICAgICAgY2xhc3M9XCJjb250cm9sIGNvbG9yXCJcbiAgICAgICAgICAgIG9uLWNvbG9yc2VsZWN0ZWQ9XCJjb2xvclBpY2tlZFwiXG4gICAgICAgICAgICBkZXNpcmVkLWhzLWNvbG9yPVwie3tjb2xvclBpY2tlckNvbG9yfX1cIlxuICAgICAgICAgICAgdGhyb3R0bGU9XCI1MDBcIlxuICAgICAgICAgICAgaHVlLXNlZ21lbnRzPVwie3todWVTZWdtZW50c319XCJcbiAgICAgICAgICAgIHNhdHVyYXRpb24tc2VnbWVudHM9XCJ7e3NhdHVyYXRpb25TZWdtZW50c319XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9oYS1jb2xvci1waWNrZXI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwibWRpOnBhbGV0dGVcIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJzZWdtZW50Q2xpY2tcIlxuICAgICAgICAgICAgY2xhc3M9XCJjb250cm9sIHNlZ21lbnRhdGlvbkJ1dHRvblwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGVmZmVjdF9saXN0XCI+XG4gICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgIGxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jYXJkLmxpZ2h0LmVmZmVjdCcpXV1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZWZmZWN0XV1cIlxuICAgICAgICAgICAgICBvbi1zZWxlY3RlZC1jaGFuZ2VkPVwiZWZmZWN0Q2hhbmdlZFwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICBpdGVtcz1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5lZmZlY3RfbGlzdF1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiPltbaXRlbV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGhhLWF0dHJpYnV0ZXNcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgIGV4dHJhLWZpbHRlcnM9XCJicmlnaHRuZXNzLGNvbG9yX3RlbXAsd2hpdGVfdmFsdWUsZWZmZWN0X2xpc3QsZWZmZWN0LGhzX2NvbG9yLHJnYl9jb2xvcix4eV9jb2xvcixtaW5fbWlyZWRzLG1heF9taXJlZHNcIlxuICAgICAgICA+PC9oYS1hdHRyaWJ1dGVzPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgYnJpZ2h0bmVzc1NsaWRlclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuXG4gICAgICBjdFNsaWRlclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuXG4gICAgICB3dlNsaWRlclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuXG4gICAgICBodWVTZWdtZW50czoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAyNCxcbiAgICAgIH0sXG5cbiAgICAgIHNhdHVyYXRpb25TZWdtZW50czoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiA4LFxuICAgICAgfSxcblxuICAgICAgY29sb3JQaWNrZXJDb2xvcjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIGJyaWdodG5lc3NTbGlkZXJWYWx1ZTogMCxcbiAgICB9O1xuXG4gICAgaWYgKG5ld1ZhbCAmJiBuZXdWYWwuc3RhdGUgPT09IFwib25cIikge1xuICAgICAgcHJvcHMuYnJpZ2h0bmVzc1NsaWRlclZhbHVlID0gbmV3VmFsLmF0dHJpYnV0ZXMuYnJpZ2h0bmVzcztcbiAgICAgIHByb3BzLmN0U2xpZGVyVmFsdWUgPSBuZXdWYWwuYXR0cmlidXRlcy5jb2xvcl90ZW1wO1xuICAgICAgcHJvcHMud3ZTbGlkZXJWYWx1ZSA9IG5ld1ZhbC5hdHRyaWJ1dGVzLndoaXRlX3ZhbHVlO1xuICAgICAgaWYgKG5ld1ZhbC5hdHRyaWJ1dGVzLmhzX2NvbG9yKSB7XG4gICAgICAgIHByb3BzLmNvbG9yUGlja2VyQ29sb3IgPSB7XG4gICAgICAgICAgaDogbmV3VmFsLmF0dHJpYnV0ZXMuaHNfY29sb3JbMF0sXG4gICAgICAgICAgczogbmV3VmFsLmF0dHJpYnV0ZXMuaHNfY29sb3JbMV0gLyAxMDAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHByb3BzKTtcblxuICAgIGlmIChvbGRWYWwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpcmUoXCJpcm9uLXJlc2l6ZVwiKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopIHtcbiAgICBjb25zdCBjbGFzc2VzID0gW2ZlYXR1cmVDbGFzc05hbWVzKHN0YXRlT2JqLCBGRUFUVVJFX0NMQVNTX05BTUVTKV07XG4gICAgaWYgKHN0YXRlT2JqICYmIHN0YXRlT2JqLnN0YXRlID09PSBcIm9uXCIpIHtcbiAgICAgIGNsYXNzZXMucHVzaChcImlzLW9uXCIpO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmogJiYgc3RhdGVPYmouc3RhdGUgPT09IFwidW5hdmFpbGFibGVcIikge1xuICAgICAgY2xhc3Nlcy5wdXNoKFwiaXMtdW5hdmFpbGFibGVcIik7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgZWZmZWN0Q2hhbmdlZChldikge1xuICAgIHZhciBvbGRWYWwgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuZWZmZWN0O1xuICAgIHZhciBuZXdWYWwgPSBldi5kZXRhaWwudmFsdWU7XG5cbiAgICBpZiAoIW5ld1ZhbCB8fCBvbGRWYWwgPT09IG5ld1ZhbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwibGlnaHRcIiwgXCJ0dXJuX29uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBlZmZlY3Q6IG5ld1ZhbCxcbiAgICB9KTtcbiAgfVxuXG4gIGJyaWdodG5lc3NTbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgdmFyIGJyaSA9IHBhcnNlSW50KGV2LnRhcmdldC52YWx1ZSwgMTApO1xuXG4gICAgaWYgKGlzTmFOKGJyaSkpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImxpZ2h0XCIsIFwidHVybl9vblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgYnJpZ2h0bmVzczogYnJpLFxuICAgIH0pO1xuICB9XG5cbiAgY3RTbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgdmFyIGN0ID0gcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlLCAxMCk7XG5cbiAgICBpZiAoaXNOYU4oY3QpKSByZXR1cm47XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJsaWdodFwiLCBcInR1cm5fb25cIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIGNvbG9yX3RlbXA6IGN0LFxuICAgIH0pO1xuICB9XG5cbiAgd3ZTbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgdmFyIHd2ID0gcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlLCAxMCk7XG5cbiAgICBpZiAoaXNOYU4od3YpKSByZXR1cm47XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJsaWdodFwiLCBcInR1cm5fb25cIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIHdoaXRlX3ZhbHVlOiB3dixcbiAgICB9KTtcbiAgfVxuXG4gIHNlZ21lbnRDbGljaygpIHtcbiAgICBpZiAodGhpcy5odWVTZWdtZW50cyA9PT0gMjQgJiYgdGhpcy5zYXR1cmF0aW9uU2VnbWVudHMgPT09IDgpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IGh1ZVNlZ21lbnRzOiAwLCBzYXR1cmF0aW9uU2VnbWVudHM6IDAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IGh1ZVNlZ21lbnRzOiAyNCwgc2F0dXJhdGlvblNlZ21lbnRzOiA4IH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlcnZpY2VDaGFuZ2VDb2xvcihoYXNzLCBlbnRpdHlJZCwgY29sb3IpIHtcbiAgICBoYXNzLmNhbGxTZXJ2aWNlKFwibGlnaHRcIiwgXCJ0dXJuX29uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgICBoc19jb2xvcjogW2NvbG9yLmgsIGNvbG9yLnMgKiAxMDBdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgbmV3IGNvbG9yIGhhcyBiZWVuIHBpY2tlZC5cbiAgICogc2hvdWxkIGJlIHRocm90dGxlZCB3aXRoIHRoZSAndGhyb3R0bGU9JyBhdHRyaWJ1dGUgb2YgdGhlIGNvbG9yIHBpY2tlclxuICAgKi9cbiAgY29sb3JQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnNlcnZpY2VDaGFuZ2VDb2xvcih0aGlzLmhhc3MsIHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLCBldi5kZXRhaWwuaHMpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1saWdodFwiLCBNb3JlSW5mb0xpZ2h0KTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb0xvY2sgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvZGVfZm9ybWF0XV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jYXJkLmxvY2suY29kZScpXV1cIlxuICAgICAgICAgIHZhbHVlPVwie3tlbnRlcmVkQ29kZX19XCJcbiAgICAgICAgICBwYXR0ZXJuPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvZGVfZm9ybWF0XV1cIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIG9uLWNsaWNrPVwiY2FsbFNlcnZpY2VcIlxuICAgICAgICAgIGRhdGEtc2VydmljZT1cInVubG9ja1wiXG4gICAgICAgICAgaGlkZGVuJD1cIltbIWlzTG9ja2VkXV1cIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5jYXJkLmxvY2sudW5sb2NrJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgb24tY2xpY2s9XCJjYWxsU2VydmljZVwiXG4gICAgICAgICAgZGF0YS1zZXJ2aWNlPVwibG9ja1wiXG4gICAgICAgICAgaGlkZGVuJD1cIltbaXNMb2NrZWRdXVwiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmNhcmQubG9jay5sb2NrJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPGhhLWF0dHJpYnV0ZXNcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgZXh0cmEtZmlsdGVycz1cImNvZGVfZm9ybWF0XCJcbiAgICAgID48L2hhLWF0dHJpYnV0ZXM+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBlbnRlcmVkQ29kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIGlzTG9ja2VkOiBCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5pc0xvY2tlZCA9IG5ld1ZhbC5zdGF0ZSA9PT0gXCJsb2NrZWRcIjtcbiAgICB9XG4gIH1cblxuICBjYWxsU2VydmljZShldikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zZXJ2aWNlXCIpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgY29kZTogdGhpcy5lbnRlcmVkQ29kZSxcbiAgICB9O1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImxvY2tcIiwgc2VydmljZSwgZGF0YSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWxvY2tcIiwgTW9yZUluZm9Mb2NrKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItc2xpZGVyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBIYXNzTWVkaWFQbGF5ZXJFbnRpdHkgZnJvbSBcIi4uLy4uLy4uL3V0aWwvaGFzcy1tZWRpYS1wbGF5ZXItbW9kZWxcIjtcblxuaW1wb3J0IHsgYXR0cmlidXRlQ2xhc3NOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2F0dHJpYnV0ZV9jbGFzc19uYW1lc1wiO1xuaW1wb3J0IGlzQ29tcG9uZW50TG9hZGVkIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGNvbXB1dGVSVExEaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb01lZGlhUGxheWVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAubWVkaWEtc3RhdGUge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b25baGlnaGxpZ2h0XSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAudm9sdW1lIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtdm9sdW1lX2xldmVsIC52b2x1bWUge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpcm9uLWljb24uc291cmNlLWlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXBhcGVyLWRyb3Bkb3duLW1lbnUuc291cmNlLWlucHV0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaildXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IGhvcml6b250YWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOnBvd2VyXCJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0JD1cIltbcGxheWVyT2JqLmlzT2ZmXV1cIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZVRvZ2dsZVBvd2VyXCJcbiAgICAgICAgICAgICAgaGlkZGVuJD1cIltbY29tcHV0ZUhpZGVQb3dlckJ1dHRvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICAgIGlmPVwiW1tjb21wdXRlU2hvd1BsYXliYWNrQ29udHJvbHMocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6c2tpcC1wcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVQcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXBsYXllck9iai5zdXBwb3J0c1ByZXZpb3VzVHJhY2tdXVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiW1tjb21wdXRlUGxheWJhY2tDb250cm9sSWNvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiaGFuZGxlUGxheWJhY2tDb250cm9sXCJcbiAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shY29tcHV0ZVBsYXliYWNrQ29udHJvbEljb24ocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICAgICAgICBoaWdobGlnaHQ9XCJcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6c2tpcC1uZXh0XCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZU5leHRcIlxuICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFwbGF5ZXJPYmouc3VwcG9ydHNOZXh0VHJhY2tdXVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gVk9MVU1FIC0tPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ2b2x1bWVfYnV0dG9ucyBjZW50ZXIgaG9yaXpvbnRhbCBsYXlvdXRcIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbW2NvbXB1dGVIaWRlVm9sdW1lQnV0dG9ucyhwbGF5ZXJPYmopXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZVZvbHVtZVRhcFwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczp2b2x1bWUtb2ZmXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGlkPVwidm9sdW1lRG93blwiXG4gICAgICAgICAgICBkaXNhYmxlZCQ9XCJbW3BsYXllck9iai5pc011dGVkXV1cIlxuICAgICAgICAgICAgb24tbW91c2Vkb3duPVwiaGFuZGxlVm9sdW1lRG93blwiXG4gICAgICAgICAgICBvbi10b3VjaHN0YXJ0PVwiaGFuZGxlVm9sdW1lRG93blwiXG4gICAgICAgICAgICBvbi10b3VjaGVuZD1cImhhbmRsZVZvbHVtZVRvdWNoRW5kXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOnZvbHVtZS1tZWRpdW1cIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJ2b2x1bWVVcFwiXG4gICAgICAgICAgICBkaXNhYmxlZCQ9XCJbW3BsYXllck9iai5pc011dGVkXV1cIlxuICAgICAgICAgICAgb24tbW91c2Vkb3duPVwiaGFuZGxlVm9sdW1lVXBcIlxuICAgICAgICAgICAgb24tdG91Y2hzdGFydD1cImhhbmRsZVZvbHVtZVVwXCJcbiAgICAgICAgICAgIG9uLXRvdWNoZW5kPVwiaGFuZGxlVm9sdW1lVG91Y2hFbmRcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6dm9sdW1lLWhpZ2hcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidm9sdW1lIGNlbnRlciBob3Jpem9udGFsIGxheW91dFwiXG4gICAgICAgICAgaGlkZGVuJD1cIltbIXBsYXllck9iai5zdXBwb3J0c1ZvbHVtZVNldF1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVWb2x1bWVUYXBcIlxuICAgICAgICAgICAgaGlkZGVuJD1cIltbcGxheWVyT2JqLnN1cHBvcnRzVm9sdW1lQnV0dG9uc11dXCJcbiAgICAgICAgICAgIGljb249XCJbW2NvbXB1dGVNdXRlVm9sdW1lSWNvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxoYS1wYXBlci1zbGlkZXJcbiAgICAgICAgICAgIGRpc2FibGVkJD1cIltbcGxheWVyT2JqLmlzTXV0ZWRdXVwiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjEwMFwiXG4gICAgICAgICAgICB2YWx1ZT1cIltbcGxheWVyT2JqLnZvbHVtZVNsaWRlclZhbHVlXV1cIlxuICAgICAgICAgICAgb24tY2hhbmdlPVwidm9sdW1lU2xpZGVyQ2hhbmdlZFwiXG4gICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgaWdub3JlLWJhci10b3VjaD1cIlwiXG4gICAgICAgICAgICBkaXI9XCJ7e3J0bH19XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9oYS1wYXBlci1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIFNPVVJDRSBQSUNLRVIgLS0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImNvbnRyb2xzIGxheW91dCBob3Jpem9udGFsIGp1c3RpZmllZFwiXG4gICAgICAgICAgaGlkZGVuJD1cIltbY29tcHV0ZUhpZGVTZWxlY3RTb3VyY2UocGxheWVyT2JqKV1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpcm9uLWljb24gY2xhc3M9XCJzb3VyY2UtaW5wdXRcIiBpY29uPVwiaGFzczpsb2dpbi12YXJpYW50XCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCBzb3VyY2UtaW5wdXRcIlxuICAgICAgICAgICAgZHluYW1pYy1hbGlnbj1cIlwiXG4gICAgICAgICAgICBsYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQubWVkaWFfcGxheWVyLnNvdXJjZScpXV1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICBzZWxlY3RlZD1cIltbcGxheWVyT2JqLnNvdXJjZV1dXCJcbiAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtY2hhbmdlZD1cImhhbmRsZVNvdXJjZUNoYW5nZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3BsYXllck9iai5zb3VyY2VMaXN0XV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWUkPVwiW1tpdGVtXV1cIj5bW2l0ZW1dXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIFNPVU5EIE1PREUgUElDS0VSIC0tPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWNvbXB1dGVIaWRlU2VsZWN0U291bmRNb2RlKHBsYXllck9iaildXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9scyBsYXlvdXQgaG9yaXpvbnRhbCBqdXN0aWZpZWRcIj5cbiAgICAgICAgICAgIDxpcm9uLWljb24gY2xhc3M9XCJzb3VyY2UtaW5wdXRcIiBpY29uPVwiaGFzczptdXNpYy1ub3RlXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXggc291cmNlLWlucHV0XCJcbiAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICBsYWJlbC1mbG9hdFxuICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQubWVkaWFfcGxheWVyLnNvdW5kX21vZGUnKV1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1twbGF5ZXJPYmouc291bmRNb2RlXV1cIlxuICAgICAgICAgICAgICAgIG9uLXNlbGVjdGVkLWNoYW5nZWQ9XCJoYW5kbGVTb3VuZE1vZGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbcGxheWVyT2JqLnNvdW5kTW9kZUxpc3RdXVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lJD1cIltbaXRlbV1dXCI+W1tpdGVtXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8IS0tIFRUUyAtLT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGhpZGRlbiQ9XCJbW2NvbXB1dGVIaWRlVFRTKHR0c0xvYWRlZCwgcGxheWVyT2JqKV1dXCJcbiAgICAgICAgICBjbGFzcz1cImxheW91dCBob3Jpem9udGFsIGVuZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIGlkPVwidHRzSW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jYXJkLm1lZGlhX3BsYXllci50ZXh0X3RvX3NwZWFrJyldXVwiXG4gICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e3R0c01lc3NhZ2V9fVwiXG4gICAgICAgICAgICBvbi1rZXlkb3duPVwidHRzQ2hlY2tGb3JFbnRlclwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpzZW5kXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwic2VuZFRUU1wiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIHBsYXllck9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVQbGF5ZXJPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICAgIG9ic2VydmVyOiBcInBsYXllck9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHR0c0xvYWRlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlVFRTTG9hZGVkKGhhc3MpXCIsXG4gICAgICB9LFxuXG4gICAgICB0dHNNZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTERpcmVjdGlvbihoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVBsYXllck9iaihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHJldHVybiBuZXcgSGFzc01lZGlhUGxheWVyRW50aXR5KGhhc3MsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIHBsYXllck9iakNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBpZiAob2xkVmFsKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maXJlKFwiaXJvbi1yZXNpemVcIik7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZUNsYXNzTmFtZXMoc3RhdGVPYmosIFtcInZvbHVtZV9sZXZlbFwiXSk7XG4gIH1cblxuICBjb21wdXRlTXV0ZVZvbHVtZUljb24ocGxheWVyT2JqKSB7XG4gICAgcmV0dXJuIHBsYXllck9iai5pc011dGVkID8gXCJoYXNzOnZvbHVtZS1vZmZcIiA6IFwiaGFzczp2b2x1bWUtaGlnaFwiO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVWb2x1bWVCdXR0b25zKHBsYXllck9iaikge1xuICAgIHJldHVybiAhcGxheWVyT2JqLnN1cHBvcnRzVm9sdW1lQnV0dG9ucyB8fCBwbGF5ZXJPYmouaXNPZmY7XG4gIH1cblxuICBjb21wdXRlU2hvd1BsYXliYWNrQ29udHJvbHMocGxheWVyT2JqKSB7XG4gICAgcmV0dXJuICFwbGF5ZXJPYmouaXNPZmYgJiYgcGxheWVyT2JqLmhhc01lZGlhQ29udHJvbDtcbiAgfVxuXG4gIGNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iaikge1xuICAgIGlmIChwbGF5ZXJPYmouaXNQbGF5aW5nKSB7XG4gICAgICByZXR1cm4gcGxheWVyT2JqLnN1cHBvcnRzUGF1c2UgPyBcImhhc3M6cGF1c2VcIiA6IFwiaGFzczpzdG9wXCI7XG4gICAgfVxuICAgIGlmIChwbGF5ZXJPYmouaGFzTWVkaWFDb250cm9sIHx8IHBsYXllck9iai5pc09mZiB8fCBwbGF5ZXJPYmouaXNJZGxlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllck9iai5oYXNNZWRpYUNvbnRyb2wgJiZcbiAgICAgICAgcGxheWVyT2JqLnN1cHBvcnRzUGF1c2UgJiZcbiAgICAgICAgIXBsYXllck9iai5pc1BhdXNlZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBcImhhc3M6cGxheS1wYXVzZVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBsYXllck9iai5zdXBwb3J0c1BsYXkgPyBcImhhc3M6cGxheVwiIDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBjb21wdXRlSGlkZVBvd2VyQnV0dG9uKHBsYXllck9iaikge1xuICAgIHJldHVybiBwbGF5ZXJPYmouaXNPZmZcbiAgICAgID8gIXBsYXllck9iai5zdXBwb3J0c1R1cm5PblxuICAgICAgOiAhcGxheWVyT2JqLnN1cHBvcnRzVHVybk9mZjtcbiAgfVxuXG4gIGNvbXB1dGVIaWRlU2VsZWN0U291cmNlKHBsYXllck9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBwbGF5ZXJPYmouaXNPZmYgfHxcbiAgICAgICFwbGF5ZXJPYmouc3VwcG9ydHNTZWxlY3RTb3VyY2UgfHxcbiAgICAgICFwbGF5ZXJPYmouc291cmNlTGlzdFxuICAgICk7XG4gIH1cblxuICBjb21wdXRlSGlkZVNlbGVjdFNvdW5kTW9kZShwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgcGxheWVyT2JqLmlzT2ZmIHx8XG4gICAgICAhcGxheWVyT2JqLnN1cHBvcnRzU2VsZWN0U291bmRNb2RlIHx8XG4gICAgICAhcGxheWVyT2JqLnNvdW5kTW9kZUxpc3RcbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVUVFModHRzTG9hZGVkLCBwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gIXR0c0xvYWRlZCB8fCAhcGxheWVyT2JqLnN1cHBvcnRzUGxheU1lZGlhO1xuICB9XG5cbiAgY29tcHV0ZVRUU0xvYWRlZChoYXNzKSB7XG4gICAgcmV0dXJuIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwidHRzXCIpO1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlUG93ZXIoKSB7XG4gICAgdGhpcy5wbGF5ZXJPYmoudG9nZ2xlUG93ZXIoKTtcbiAgfVxuXG4gIGhhbmRsZVByZXZpb3VzKCkge1xuICAgIHRoaXMucGxheWVyT2JqLnByZXZpb3VzVHJhY2soKTtcbiAgfVxuXG4gIGhhbmRsZVBsYXliYWNrQ29udHJvbCgpIHtcbiAgICB0aGlzLnBsYXllck9iai5tZWRpYVBsYXlQYXVzZSgpO1xuICB9XG5cbiAgaGFuZGxlTmV4dCgpIHtcbiAgICB0aGlzLnBsYXllck9iai5uZXh0VHJhY2soKTtcbiAgfVxuXG4gIGhhbmRsZVNvdXJjZUNoYW5nZWQoZXYpIHtcbiAgICBpZiAoIXRoaXMucGxheWVyT2JqKSByZXR1cm47XG5cbiAgICB2YXIgb2xkVmFsID0gdGhpcy5wbGF5ZXJPYmouc291cmNlO1xuICAgIHZhciBuZXdWYWwgPSBldi5kZXRhaWwudmFsdWU7XG5cbiAgICBpZiAoIW5ld1ZhbCB8fCBvbGRWYWwgPT09IG5ld1ZhbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5wbGF5ZXJPYmouc2VsZWN0U291cmNlKG5ld1ZhbCk7XG4gIH1cblxuICBoYW5kbGVTb3VuZE1vZGVDaGFuZ2VkKGV2KSB7XG4gICAgaWYgKCF0aGlzLnBsYXllck9iaikgcmV0dXJuO1xuXG4gICAgdmFyIG9sZFZhbCA9IHRoaXMucGxheWVyT2JqLnNvdW5kTW9kZTtcbiAgICB2YXIgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKCFuZXdWYWwgfHwgb2xkVmFsID09PSBuZXdWYWwpIHJldHVybjtcblxuICAgIHRoaXMucGxheWVyT2JqLnNlbGVjdFNvdW5kTW9kZShuZXdWYWwpO1xuICB9XG5cbiAgaGFuZGxlVm9sdW1lVGFwKCkge1xuICAgIGlmICghdGhpcy5wbGF5ZXJPYmouc3VwcG9ydHNWb2x1bWVNdXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGxheWVyT2JqLnZvbHVtZU11dGUoIXRoaXMucGxheWVyT2JqLmlzTXV0ZWQpO1xuICB9XG5cbiAgaGFuZGxlVm9sdW1lVG91Y2hFbmQoZXYpIHtcbiAgICAvKiB3aGVuIHRvdWNoIGVuZHMsIHdlIG11c3QgcHJldmVudCB0aGlzIGZyb21cbiAgICAgKiBiZWNvbWluZyBhIG1vdXNlZG93biwgdXAsIGNsaWNrIGJ5IGVtdWxhdGlvbiAqL1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVWb2x1bWVVcCgpIHtcbiAgICBjb25zdCBvYmogPSB0aGlzLiQudm9sdW1lVXA7XG4gICAgdGhpcy5oYW5kbGVWb2x1bWVXb3JrZXIoXCJ2b2x1bWVfdXBcIiwgb2JqLCB0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZVZvbHVtZURvd24oKSB7XG4gICAgY29uc3Qgb2JqID0gdGhpcy4kLnZvbHVtZURvd247XG4gICAgdGhpcy5oYW5kbGVWb2x1bWVXb3JrZXIoXCJ2b2x1bWVfZG93blwiLCBvYmosIHRydWUpO1xuICB9XG5cbiAgaGFuZGxlVm9sdW1lV29ya2VyKHNlcnZpY2UsIG9iaiwgZm9yY2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgKG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iai5wb2ludGVyRG93bikpIHtcbiAgICAgIHRoaXMucGxheWVyT2JqLmNhbGxTZXJ2aWNlKHNlcnZpY2UpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhhbmRsZVZvbHVtZVdvcmtlcihzZXJ2aWNlLCBvYmosIGZhbHNlKSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICB2b2x1bWVTbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3Qgdm9sUGVyY2VudGFnZSA9IHBhcnNlRmxvYXQoZXYudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCB2b2x1bWUgPSB2b2xQZXJjZW50YWdlID4gMCA/IHZvbFBlcmNlbnRhZ2UgLyAxMDAgOiAwO1xuICAgIHRoaXMucGxheWVyT2JqLnNldFZvbHVtZSh2b2x1bWUpO1xuICB9XG5cbiAgdHRzQ2hlY2tGb3JFbnRlcihldikge1xuICAgIGlmIChldi5rZXlDb2RlID09PSAxMykgdGhpcy5zZW5kVFRTKCk7XG4gIH1cblxuICBzZW5kVFRTKCkge1xuICAgIGNvbnN0IHNlcnZpY2VzID0gdGhpcy5oYXNzLnNlcnZpY2VzLnR0cztcbiAgICBjb25zdCBzZXJ2aWNlS2V5cyA9IE9iamVjdC5rZXlzKHNlcnZpY2VzKS5zb3J0KCk7XG4gICAgbGV0IHNlcnZpY2U7XG4gICAgbGV0IGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc2VydmljZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzZXJ2aWNlS2V5c1tpXS5pbmRleE9mKFwiX3NheVwiKSAhPT0gLTEpIHtcbiAgICAgICAgc2VydmljZSA9IHNlcnZpY2VLZXlzW2ldO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXNlcnZpY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ0dHNcIiwgc2VydmljZSwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHRzTWVzc2FnZSxcbiAgICB9KTtcbiAgICB0aGlzLnR0c01lc3NhZ2UgPSBcIlwiO1xuICAgIHRoaXMuJC50dHNJbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgX2NvbXB1dGVSVExEaXJlY3Rpb24oaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMRGlyZWN0aW9uKGhhc3MpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1tZWRpYV9wbGF5ZXJcIiwgTW9yZUluZm9NZWRpYVBsYXllcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgTW9yZUluZm9TY3JpcHQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImxheW91dCB2ZXJ0aWNhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1lbnRyeSBsYXlvdXQganVzdGlmaWVkIGhvcml6b250YWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnNjcmlwdC5sYXN0X2FjdGlvbicpXV1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMubGFzdF9hY3Rpb25dXTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tc2NyaXB0XCIsIE1vcmVJbmZvU2NyaXB0KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXJlbGF0aXZlLXRpbWVcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IGZvcm1hdFRpbWUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZVwiO1xuXG5jbGFzcyBNb3JlSW5mb1N1biBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuXG4gICAgICA8dGVtcGxhdGVcbiAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgaXRlbXM9XCJbW2NvbXB1dGVPcmRlcihyaXNpbmdEYXRlLCBzZXR0aW5nRGF0ZSldXVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWVudHJ5IGxheW91dCBqdXN0aWZpZWQgaG9yaXpvbnRhbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIj5cbiAgICAgICAgICAgIDxzcGFuPltbaXRlbUNhcHRpb24oaXRlbSldXTwvc3Bhbj5cbiAgICAgICAgICAgIDxoYS1yZWxhdGl2ZS10aW1lXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGRhdGV0aW1lLW9iaj1cIltbaXRlbURhdGUoaXRlbSldXVwiXG4gICAgICAgICAgICA+PC9oYS1yZWxhdGl2ZS10aW1lPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZVwiPltbaXRlbVZhbHVlKGl0ZW0pXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGEtZW50cnkgbGF5b3V0IGp1c3RpZmllZCBob3Jpem9udGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnN1bi5lbGV2YXRpb24nKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZWxldmF0aW9uXV08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICByaXNpbmdEYXRlOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVJpc2luZyhzdGF0ZU9iailcIixcbiAgICAgIH0sXG5cbiAgICAgIHNldHRpbmdEYXRlOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVNldHRpbmcoc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlUmlzaW5nKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHN0YXRlT2JqLmF0dHJpYnV0ZXMubmV4dF9yaXNpbmcpO1xuICB9XG5cbiAgY29tcHV0ZVNldHRpbmcoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IERhdGUoc3RhdGVPYmouYXR0cmlidXRlcy5uZXh0X3NldHRpbmcpO1xuICB9XG5cbiAgY29tcHV0ZU9yZGVyKHJpc2luZ0RhdGUsIHNldHRpbmdEYXRlKSB7XG4gICAgcmV0dXJuIHJpc2luZ0RhdGUgPiBzZXR0aW5nRGF0ZSA/IFtcInNldFwiLCBcInJpc1wiXSA6IFtcInJpc1wiLCBcInNldFwiXTtcbiAgfVxuXG4gIGl0ZW1DYXB0aW9uKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJyaXNcIikge1xuICAgICAgcmV0dXJuIHRoaXMubG9jYWxpemUoXCJ1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnN1bi5yaXNpbmdcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxvY2FsaXplKFwidWkuZGlhbG9ncy5tb3JlX2luZm9fY29udHJvbC5zdW4uc2V0dGluZ1wiKTtcbiAgfVxuXG4gIGl0ZW1EYXRlKHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZSA9PT0gXCJyaXNcIiA/IHRoaXMucmlzaW5nRGF0ZSA6IHRoaXMuc2V0dGluZ0RhdGU7XG4gIH1cblxuICBpdGVtVmFsdWUodHlwZSkge1xuICAgIHJldHVybiBmb3JtYXRUaW1lKHRoaXMuaXRlbURhdGUodHlwZSksIHRoaXMuaGFzcy5sYW5ndWFnZSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLXN1blwiLCBNb3JlSW5mb1N1bik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBUaW1lckVudGl0eSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3RpbWVyXCI7XG5cbkBjdXN0b21FbGVtZW50KFwibW9yZS1pbmZvLXRpbWVyXCIpXG5jbGFzcyBNb3JlSW5mb1RpbWVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmo/OiBUaW1lckVudGl0eTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICAuc3RhdGVPYmo9JHt0aGlzLnN0YXRlT2JqfVxuICAgICAgICAuZXh0cmFGaWx0ZXJzPSR7XCJyZW1haW5pbmdcIn1cbiAgICAgID48L2hhLWF0dHJpYnV0ZXM+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICAke3RoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiaWRsZVwiIHx8IHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwicGF1c2VkXCJcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgLmFjdGlvbj1cIiR7XCJzdGFydFwifVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVBY3Rpb25DbGlja31cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY2FyZC50aW1lci5hY3Rpb25zLnN0YXJ0XCIpfVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3RoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiYWN0aXZlXCJcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgLmFjdGlvbj1cIiR7XCJwYXVzZVwifVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVBY3Rpb25DbGlja31cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY2FyZC50aW1lci5hY3Rpb25zLnBhdXNlXCIpfVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3RoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiYWN0aXZlXCIgfHwgdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJwYXVzZWRcIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICAuYWN0aW9uPVwiJHtcImNhbmNlbFwifVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVBY3Rpb25DbGlja31cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY2FyZC50aW1lci5hY3Rpb25zLmNhbmNlbFwiKX1cbiAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIC5hY3Rpb249XCIke1wiZmluaXNoXCJ9XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2hhbmRsZUFjdGlvbkNsaWNrfVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jYXJkLnRpbWVyLmFjdGlvbnMuZmluaXNoXCIpfVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIikgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVBY3Rpb25DbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgYWN0aW9uID0gKGUuY3VycmVudFRhcmdldCBhcyBhbnkpLmFjdGlvbjtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ0aW1lclwiLCBhY3Rpb24sIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iaiEuZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmFjdGlvbnMge1xuICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJtb3JlLWluZm8tdGltZXJcIjogTW9yZUluZm9UaW1lcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgTW9yZUluZm9VcGRhdGVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAubGluayB7XG4gICAgICAgICAgY29sb3I6ICMwM2E5ZjQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9pbnN0YWxsYXRpb24vdXBkYXRpbmcvXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnVwZGF0ZXIudGl0bGUnKV1dPC9hXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVSZWxlYXNlTm90ZXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5yZWxlYXNlX25vdGVzIHx8XG4gICAgICBcImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2RvY3MvaW5zdGFsbGF0aW9uL3VwZGF0aW5nL1wiXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tdXBkYXRlclwiLCBNb3JlSW5mb1VwZGF0ZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuY2xhc3MgTW9yZUluZm9WYWN1dW0gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0dXMtc3VidGl0bGUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNTdGF0dXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXR1cy1zdWJ0aXRsZVwiPlN0YXR1czogPC9zcGFuXG4gICAgICAgICAgPjxzcGFuPjxzdHJvbmc+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXR1c11dPC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNCYXR0ZXJ5KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgID48aXJvbi1pY29uIGljb249XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuYmF0dGVyeV9pY29uXV1cIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5iYXR0ZXJ5X2xldmVsXV0gJTwvc3BhblxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzQ29tbWFuZEJhcihzdGF0ZU9iaildXVwiPlxuICAgICAgICA8cD48L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtc3VidGl0bGVcIj5WYWN1dW0gY2xlYW5lciBjb21tYW5kczo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzdXBwb3J0c1N0YXJ0KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbGF5XCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uU3RhcnRcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU3RhcnRcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNQYXVzZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwYXVzZVwiXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJvblBhdXNlXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhdXNlXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shc3VwcG9ydHNTdGFydChzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNQYXVzZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbGF5LXBhdXNlXCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uUGxheVBhdXNlXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhdXNlXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNTdG9wKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6c3RvcFwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25TdG9wXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTdG9wXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzQ2xlYW5TcG90KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6YnJvb21cIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uQ2xlYW5TcG90XCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDbGVhbiBzcG90XCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzTG9jYXRlKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6bWFwLW1hcmtlclwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25Mb2NhdGVcIlxuICAgICAgICAgICAgICB0aXRsZT1cIkxvY2F0ZVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGhpZGRlbiQ9XCJbWyFzdXBwb3J0c1JldHVybkhvbWUoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpob21lLW1hcC1tYXJrZXJcIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uUmV0dXJuSG9tZVwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiUmV0dXJuIGhvbWVcIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzRmFuU3BlZWQoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICBsYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmFuIHNwZWVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9zcGVlZF1dXCJcbiAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtY2hhbmdlZD1cImZhblNwZWVkQ2hhbmdlZFwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICBpdGVtcz1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5mYW5fc3BlZWRfbGlzdF1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiPltbaXRlbV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1zZWxmOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxLjNlbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgPjxpcm9uLWljb24gaWNvbj1cImhhc3M6ZmFuXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5mYW5fc3BlZWRdXTwvc3BhblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBleHRyYS1maWx0ZXJzPVwiZmFuX3NwZWVkLGZhbl9zcGVlZF9saXN0LHN0YXR1cyxiYXR0ZXJ5X2xldmVsLGJhdHRlcnlfaWNvblwiXG4gICAgICA+PC9oYS1hdHRyaWJ1dGVzPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3VwcG9ydHNQYXVzZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpO1xuICB9XG5cbiAgc3VwcG9ydHNTdG9wKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCk7XG4gIH1cblxuICBzdXBwb3J0c1JldHVybkhvbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxNik7XG4gIH1cblxuICBzdXBwb3J0c0ZhblNwZWVkKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMzIpO1xuICB9XG5cbiAgc3VwcG9ydHNCYXR0ZXJ5KHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNjQpO1xuICB9XG5cbiAgc3VwcG9ydHNTdGF0dXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxMjgpO1xuICB9XG5cbiAgc3VwcG9ydHNMb2NhdGUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA1MTIpO1xuICB9XG5cbiAgc3VwcG9ydHNDbGVhblNwb3Qoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxMDI0KTtcbiAgfVxuXG4gIHN1cHBvcnRzU3RhcnQoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA4MTkyKTtcbiAgfVxuXG4gIHN1cHBvcnRzQ29tbWFuZEJhcihzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpIHxcbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCkgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxNikgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA1MTIpIHxcbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMTAyNCkgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA4MTkyKVxuICAgICk7XG4gIH1cblxuICBmYW5TcGVlZENoYW5nZWQoZXYpIHtcbiAgICB2YXIgb2xkVmFsID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9zcGVlZDtcbiAgICB2YXIgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKCFuZXdWYWwgfHwgb2xkVmFsID09PSBuZXdWYWwpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInNldF9mYW5fc3BlZWRcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIGZhbl9zcGVlZDogbmV3VmFsLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0b3BcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uUGxheVBhdXNlKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0YXJ0X3BhdXNlXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvblBhdXNlKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInBhdXNlXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0YXJ0XCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvbkxvY2F0ZSgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ2YWN1dW1cIiwgXCJsb2NhdGVcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xlYW5TcG90KCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcImNsZWFuX3Nwb3RcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uUmV0dXJuSG9tZSgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ2YWN1dW1cIiwgXCJyZXR1cm5fdG9fYmFzZVwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby12YWN1dW1cIiwgTW9yZUluZm9WYWN1dW0pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2xcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItc2xpZGVyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuaW1wb3J0IHsgZmVhdHVyZUNsYXNzTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9mZWF0dXJlX2NsYXNzX25hbWVzXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9XYXRlckhlYXRlciBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItYXdheV9tb2RlLFxuICAgICAgICAuY29udGFpbmVyLXRlbXBlcmF0dXJlLFxuICAgICAgICAuY29udGFpbmVyLW9wZXJhdGlvbl9saXN0LFxuXG4gICAgICAgIC5oYXMtYXdheV9tb2RlIC5jb250YWluZXItYXdheV9tb2RlLFxuICAgICAgICAuaGFzLXRhcmdldF90ZW1wZXJhdHVyZSAuY29udGFpbmVyLXRlbXBlcmF0dXJlLFxuICAgICAgICAuaGFzLW9wZXJhdGlvbl9tb2RlIC5jb250YWluZXItb3BlcmF0aW9uX2xpc3QsXG5cbiAgICAgICAgLmNvbnRhaW5lci1vcGVyYXRpb25fbGlzdCBpcm9uLWljb24sXG5cbiAgICAgICAgaGEtcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1wYXBlci1zbGlkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2wucmFuZ2UtY29udHJvbC1sZWZ0LFxuICAgICAgICBoYS13YXRlcl9oZWF0ZXItY29udHJvbC5yYW5nZS1jb250cm9sLXJpZ2h0IHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB3aWR0aDogNDYlO1xuICAgICAgICB9XG4gICAgICAgIGhhLXdhdGVyX2hlYXRlci1jb250cm9sLnJhbmdlLWNvbnRyb2wtbGVmdCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICAgICAgfVxuICAgICAgICBoYS13YXRlcl9oZWF0ZXItY29udHJvbC5yYW5nZS1jb250cm9sLXJpZ2h0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2luZ2xlLXJvdyB7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItdGVtcGVyYXR1cmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzJD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5vcGVyYXRpb25fbW9kZV1dXCI+XG4gICAgICAgICAgICA8ZGl2IGhpZGRlbiQ9XCJbWyFzdXBwb3J0c1RlbXBlcmF0dXJlQ29udHJvbHMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53YXRlcl9oZWF0ZXIudGFyZ2V0X3RlbXBlcmF0dXJlJyldXVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc3VwcG9ydHNUZW1wZXJhdHVyZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8aGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2xcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIltbc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZV1dXCJcbiAgICAgICAgICAgICAgICB1bml0cz1cIltbaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmVdXVwiXG4gICAgICAgICAgICAgICAgc3RlcD1cIltbY29tcHV0ZVRlbXBlcmF0dXJlU3RlcFNpemUoaGFzcywgc3RhdGVPYmopXV1cIlxuICAgICAgICAgICAgICAgIG1pbj1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcF1dXCJcbiAgICAgICAgICAgICAgICBtYXg9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXBdXVwiXG4gICAgICAgICAgICAgICAgb24tY2hhbmdlPVwidGFyZ2V0VGVtcGVyYXR1cmVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2hhLXdhdGVyX2hlYXRlci1jb250cm9sPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N1cHBvcnRzT3BlcmF0aW9uTW9kZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItb3BlcmF0aW9uX2xpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgIGxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQud2F0ZXJfaGVhdGVyLm9wZXJhdGlvbicpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLm9wZXJhdGlvbl9tb2RlXV1cIlxuICAgICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtY2hhbmdlZD1cImhhbmRsZU9wZXJhdGlvbm1vZGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMub3BlcmF0aW9uX2xpc3RdXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiXG4gICAgICAgICAgICAgICAgICAgICAgPltbX2xvY2FsaXplT3BlcmF0aW9uTW9kZShsb2NhbGl6ZSwgaXRlbSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N1cHBvcnRzQXdheU1vZGUoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWF3YXlfbW9kZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlciBob3Jpem9udGFsIGxheW91dCBzaW5nbGUtcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53YXRlcl9oZWF0ZXIuYXdheV9tb2RlJyldXVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9XCJbW2F3YXlUb2dnbGVDaGVja2VkXV1cIlxuICAgICAgICAgICAgICAgIG9uLWNoYW5nZT1cImF3YXlUb2dnbGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2hhLXN3aXRjaD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgYXdheVRvZ2dsZUNoZWNrZWQ6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIGF3YXlUb2dnbGVDaGVja2VkOiBuZXdWYWwuYXR0cmlidXRlcy5hd2F5X21vZGUgPT09IFwib25cIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChvbGRWYWwpIHtcbiAgICAgIHRoaXMuX2RlYm91bmNlciA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgICAgdGhpcy5fZGVib3VuY2VyLFxuICAgICAgICB0aW1lT3V0LmFmdGVyKDUwMCksXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmZpcmUoXCJpcm9uLXJlc2l6ZVwiKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlVGVtcGVyYXR1cmVTdGVwU2l6ZShoYXNzLCBzdGF0ZU9iaikge1xuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX3N0ZXApIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX3N0ZXA7XG4gICAgfVxuICAgIGlmIChoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZS5pbmRleE9mKFwiRlwiKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMC41O1xuICB9XG5cbiAgc3VwcG9ydHNUZW1wZXJhdHVyZUNvbnRyb2xzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9ydHNUZW1wZXJhdHVyZShzdGF0ZU9iaik7XG4gIH1cblxuICBzdXBwb3J0c1RlbXBlcmF0dXJlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMSkgJiZcbiAgICAgIHR5cGVvZiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlID09PSBcIm51bWJlclwiXG4gICAgKTtcbiAgfVxuXG4gIHN1cHBvcnRzT3BlcmF0aW9uTW9kZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDIpO1xuICB9XG5cbiAgc3VwcG9ydHNBd2F5TW9kZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopIHtcbiAgICBjb25zdCBfZmVhdHVyZUNsYXNzTmFtZXMgPSB7XG4gICAgICAxOiBcImhhcy10YXJnZXRfdGVtcGVyYXR1cmVcIixcbiAgICAgIDI6IFwiaGFzLW9wZXJhdGlvbl9tb2RlXCIsXG4gICAgICA0OiBcImhhcy1hd2F5X21vZGVcIixcbiAgICB9O1xuXG4gICAgdmFyIGNsYXNzZXMgPSBbZmVhdHVyZUNsYXNzTmFtZXMoc3RhdGVPYmosIF9mZWF0dXJlQ2xhc3NOYW1lcyldO1xuXG4gICAgY2xhc3Nlcy5wdXNoKFwibW9yZS1pbmZvLXdhdGVyX2hlYXRlclwiKTtcblxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgdGFyZ2V0VGVtcGVyYXR1cmVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBldi50YXJnZXQudmFsdWU7XG4gICAgaWYgKHRlbXBlcmF0dXJlID09PSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUpIHJldHVybjtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlSGVscGVyKFwic2V0X3RlbXBlcmF0dXJlXCIsIHsgdGVtcGVyYXR1cmU6IHRlbXBlcmF0dXJlIH0pO1xuICB9XG5cbiAgYXdheVRvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBvbGRWYWwgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYXdheV9tb2RlID09PSBcIm9uXCI7XG4gICAgY29uc3QgbmV3VmFsID0gZXYudGFyZ2V0LmNoZWNrZWQ7XG4gICAgaWYgKG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG4gICAgdGhpcy5jYWxsU2VydmljZUhlbHBlcihcInNldF9hd2F5X21vZGVcIiwgeyBhd2F5X21vZGU6IG5ld1ZhbCB9KTtcbiAgfVxuXG4gIGhhbmRsZU9wZXJhdGlvbm1vZGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3Qgb2xkVmFsID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLm9wZXJhdGlvbl9tb2RlO1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAoIW5ld1ZhbCB8fCBvbGRWYWwgPT09IG5ld1ZhbCkgcmV0dXJuO1xuICAgIHRoaXMuY2FsbFNlcnZpY2VIZWxwZXIoXCJzZXRfb3BlcmF0aW9uX21vZGVcIiwge1xuICAgICAgb3BlcmF0aW9uX21vZGU6IG5ld1ZhbCxcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGxTZXJ2aWNlSGVscGVyKHNlcnZpY2UsIGRhdGEpIHtcbiAgICAvLyBXZSBjYWxsIHN0YXRlQ2hhbmdlZCBhZnRlciBhIHN1Y2Nlc3NmdWwgY2FsbCB0byByZS1zeW5jIHRoZSBpbnB1dHNcbiAgICAvLyB3aXRoIHRoZSBzdGF0ZS4gSXQgd2lsbCBiZSBvdXQgb2Ygc3luYyBpZiBvdXIgc2VydmljZSBjYWxsIGRpZCBub3RcbiAgICAvLyByZXN1bHQgaW4gdGhlIGVudGl0eSB0byBiZSB0dXJuZWQgb24uIFNpbmNlIHRoZSBzdGF0ZSBpcyBub3QgY2hhbmdpbmcsXG4gICAgLy8gdGhlIHJlc3luYyBpcyBub3QgY2FsbGVkIGF1dG9tYXRpYy5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIGRhdGEuZW50aXR5X2lkID0gdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQ7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcIndhdGVyX2hlYXRlclwiLCBzZXJ2aWNlLCBkYXRhKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGVPYmpDaGFuZ2VkKHRoaXMuc3RhdGVPYmopO1xuICAgIH0pO1xuICB9XG5cbiAgX2xvY2FsaXplT3BlcmF0aW9uTW9kZShsb2NhbGl6ZSwgbW9kZSkge1xuICAgIHJldHVybiBsb2NhbGl6ZShgc3RhdGUud2F0ZXJfaGVhdGVyLiR7bW9kZX1gKSB8fCBtb2RlO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby13YXRlcl9oZWF0ZXJcIiwgTW9yZUluZm9XYXRlckhlYXRlcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9XZWF0aGVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBpcm9uLWljb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWljb24tY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uIHtcbiAgICAgICAgICBtYXJnaW46IDE2cHggMCA4cHggMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZW1wLFxuICAgICAgICAudGVtcGxvdyB7XG4gICAgICAgICAgbWluLXdpZHRoOiA0OHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRlbXBsb3cge1xuICAgICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRpb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICA8aXJvbi1pY29uIGljb249XCJoYXNzOnRoZXJtb21ldGVyXCI+PC9pcm9uLWljb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53ZWF0aGVyLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUnKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZV1dIFtbZ2V0VW5pdCgndGVtcGVyYXR1cmUnKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNzdXJlKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiaGFzczpnYXVnZVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy5haXJfcHJlc3N1cmUnKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5wcmVzc3VyZV1dIFtbZ2V0VW5pdCgnYWlyX3ByZXNzdXJlJyldXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5KV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiaGFzczp3YXRlci1wZXJjZW50XCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLmh1bWlkaXR5JyldXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5XV0gJTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLndpbmRfc3BlZWQpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJoYXNzOndlYXRoZXItd2luZHlcIj48L2lyb24taWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53ZWF0aGVyLmF0dHJpYnV0ZXMud2luZF9zcGVlZCcpXV1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgW1tnZXRXaW5kKHN0YXRlT2JqLmF0dHJpYnV0ZXMud2luZF9zcGVlZCxcbiAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMud2luZF9iZWFyaW5nLCBsb2NhbGl6ZSldXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLnZpc2liaWxpdHkpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJoYXNzOmV5ZVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy52aXNpYmlsaXR5JyldXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnZpc2liaWxpdHldXSBbW2dldFVuaXQoJ2xlbmd0aCcpXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5mb3JlY2FzdF1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+W1tsb2NhbGl6ZSgndWkuY2FyZC53ZWF0aGVyLmZvcmVjYXN0JyldXTo8L2Rpdj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmZvcmVjYXN0XV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19zaG93VmFsdWUoaXRlbS5jb25kaXRpb24pXV1cIj5cbiAgICAgICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiW1tnZXRXZWF0aGVySWNvbihpdGVtLmNvbmRpdGlvbildXVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX3Nob3dWYWx1ZShpdGVtLnRlbXBsb3cpXV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5bW2NvbXB1dGVEYXRlVGltZShpdGVtLmRhdGV0aW1lKV1dPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19zaG93VmFsdWUoaXRlbS50ZW1wbG93KV1dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+W1tjb21wdXRlRGF0ZShpdGVtLmRhdGV0aW1lKV1dPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wbG93XCI+XG4gICAgICAgICAgICAgICAgW1tpdGVtLnRlbXBsb3ddXSBbW2dldFVuaXQoJ3RlbXBlcmF0dXJlJyldXVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcFwiPlxuICAgICAgICAgICAgICBbW2l0ZW0udGVtcGVyYXR1cmVdXSBbW2dldFVuaXQoJ3RlbXBlcmF0dXJlJyldXVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cInN0YXRlT2JqLmF0dHJpYnV0ZXMuYXR0cmlidXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImF0dHJpYnV0aW9uXCI+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmF0dHJpYnV0aW9uXV08L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNhcmRpbmFsRGlyZWN0aW9ucyA9IFtcbiAgICAgIFwiTlwiLFxuICAgICAgXCJOTkVcIixcbiAgICAgIFwiTkVcIixcbiAgICAgIFwiRU5FXCIsXG4gICAgICBcIkVcIixcbiAgICAgIFwiRVNFXCIsXG4gICAgICBcIlNFXCIsXG4gICAgICBcIlNTRVwiLFxuICAgICAgXCJTXCIsXG4gICAgICBcIlNTV1wiLFxuICAgICAgXCJTV1wiLFxuICAgICAgXCJXU1dcIixcbiAgICAgIFwiV1wiLFxuICAgICAgXCJXTldcIixcbiAgICAgIFwiTldcIixcbiAgICAgIFwiTk5XXCIsXG4gICAgICBcIk5cIixcbiAgICBdO1xuICAgIHRoaXMud2VhdGhlckljb25zID0ge1xuICAgICAgXCJjbGVhci1uaWdodFwiOiBcImhhc3M6d2VhdGhlci1uaWdodFwiLFxuICAgICAgY2xvdWR5OiBcImhhc3M6d2VhdGhlci1jbG91ZHlcIixcbiAgICAgIGV4Y2VwdGlvbmFsOiBcImhhc3M6YWxlcnQtY2lyY2xlLW91dGxpbmVcIixcbiAgICAgIGZvZzogXCJoYXNzOndlYXRoZXItZm9nXCIsXG4gICAgICBoYWlsOiBcImhhc3M6d2VhdGhlci1oYWlsXCIsXG4gICAgICBsaWdodG5pbmc6IFwiaGFzczp3ZWF0aGVyLWxpZ2h0bmluZ1wiLFxuICAgICAgXCJsaWdodG5pbmctcmFpbnlcIjogXCJoYXNzOndlYXRoZXItbGlnaHRuaW5nLXJhaW55XCIsXG4gICAgICBwYXJ0bHljbG91ZHk6IFwiaGFzczp3ZWF0aGVyLXBhcnRseS1jbG91ZHlcIixcbiAgICAgIHBvdXJpbmc6IFwiaGFzczp3ZWF0aGVyLXBvdXJpbmdcIixcbiAgICAgIHJhaW55OiBcImhhc3M6d2VhdGhlci1yYWlueVwiLFxuICAgICAgc25vd3k6IFwiaGFzczp3ZWF0aGVyLXNub3d5XCIsXG4gICAgICBcInNub3d5LXJhaW55XCI6IFwiaGFzczp3ZWF0aGVyLXNub3d5LXJhaW55XCIsXG4gICAgICBzdW5ueTogXCJoYXNzOndlYXRoZXItc3VubnlcIixcbiAgICAgIHdpbmR5OiBcImhhc3M6d2VhdGhlci13aW5keVwiLFxuICAgICAgXCJ3aW5keS12YXJpYW50XCI6IFwiaGFzczp3ZWF0aGVyLXdpbmR5LXZhcmlhbnRcIixcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZURhdGUoZGF0YSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRhKTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5oYXNzLmxhbmd1YWdlLCB7XG4gICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZURhdGVUaW1lKGRhdGEpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0YSk7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuaGFzcy5sYW5ndWFnZSwge1xuICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVuaXQobWVhc3VyZSkge1xuICAgIGNvbnN0IGxlbmd0aFVuaXQgPSB0aGlzLmhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLmxlbmd0aCB8fCBcIlwiO1xuICAgIHN3aXRjaCAobWVhc3VyZSkge1xuICAgICAgY2FzZSBcImFpcl9wcmVzc3VyZVwiOlxuICAgICAgICByZXR1cm4gbGVuZ3RoVW5pdCA9PT0gXCJrbVwiID8gXCJoUGFcIiA6IFwiaW5IZ1wiO1xuICAgICAgY2FzZSBcImxlbmd0aFwiOlxuICAgICAgICByZXR1cm4gbGVuZ3RoVW5pdDtcbiAgICAgIGNhc2UgXCJwcmVjaXBpdGF0aW9uXCI6XG4gICAgICAgIHJldHVybiBsZW5ndGhVbml0ID09PSBcImttXCIgPyBcIm1tXCIgOiBcImluXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5oYXNzLmNvbmZpZy51bml0X3N5c3RlbVttZWFzdXJlXSB8fCBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIHdpbmRCZWFyaW5nVG9UZXh0KGRlZ3JlZSkge1xuICAgIGNvbnN0IGRlZ3JlZW51bSA9IHBhcnNlSW50KGRlZ3JlZSk7XG4gICAgaWYgKGlzRmluaXRlKGRlZ3JlZW51bSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhcmRpbmFsRGlyZWN0aW9uc1soKChkZWdyZWVudW0gKyAxMS4yNSkgLyAyMi41KSB8IDApICUgMTZdO1xuICAgIH1cbiAgICByZXR1cm4gZGVncmVlO1xuICB9XG5cbiAgZ2V0V2luZChzcGVlZCwgYmVhcmluZywgbG9jYWxpemUpIHtcbiAgICBpZiAoYmVhcmluZyAhPSBudWxsKSB7XG4gICAgICBjb25zdCBjYXJkaW5hbERpcmVjdGlvbiA9IHRoaXMud2luZEJlYXJpbmdUb1RleHQoYmVhcmluZyk7XG4gICAgICByZXR1cm4gYCR7c3BlZWR9ICR7dGhpcy5nZXRVbml0KFwibGVuZ3RoXCIpfS9oICgke2xvY2FsaXplKFxuICAgICAgICBgdWkuY2FyZC53ZWF0aGVyLmNhcmRpbmFsX2RpcmVjdGlvbi4ke2NhcmRpbmFsRGlyZWN0aW9uLnRvTG93ZXJDYXNlKCl9YFxuICAgICAgKSB8fCBjYXJkaW5hbERpcmVjdGlvbn0pYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3NwZWVkfSAke3RoaXMuZ2V0VW5pdChcImxlbmd0aFwiKX0vaGA7XG4gIH1cblxuICBnZXRXZWF0aGVySWNvbihjb25kaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy53ZWF0aGVySWNvbnNbY29uZGl0aW9uXTtcbiAgfVxuXG4gIF9zaG93VmFsdWUoaXRlbSkge1xuICAgIHJldHVybiB0eXBlb2YgaXRlbSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVtICE9PSBudWxsO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby13ZWF0aGVyXCIsIE1vcmVJbmZvV2VhdGhlcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc3RhdGUtaGlzdG9yeS1jaGFydHNcIjtcbmltcG9ydCBcIi4uLy4uL2RhdGEvaGEtc3RhdGUtaGlzdG9yeS1kYXRhXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1jb250ZW50XCI7XG5cbmltcG9ydCBcIi4vY29udHJvbHMvbW9yZS1pbmZvLWNvbnRlbnRcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCBpc0NvbXBvbmVudExvYWRlZCBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5pbXBvcnQgeyBET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25zdFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5jb25zdCBET01BSU5TX05PX0lORk8gPSBbXCJjYW1lcmFcIiwgXCJjb25maWd1cmF0b3JcIiwgXCJoaXN0b3J5X2dyYXBoXCJdO1xuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9Db250cm9scyBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlLWRpYWxvZ1wiPlxuICAgICAgICBhcHAtdG9vbGJhciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLW1vcmUtaW5mby1oZWFkZXItY29sb3IpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vcmUtaW5mby1oZWFkZXItYmFja2dyb3VuZCk7XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtdG9vbGJhciBbbWFpbi10aXRsZV0ge1xuICAgICAgICAgIEBhcHBseSAtLWhhLW1vcmUtaW5mby1hcHAtdG9vbGJhci10aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLWhpc3RvcnktY2hhcnRzIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ1MXB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMXB4KSB7XG4gICAgICAgICAgLm1haW4tdGl0bGUge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZGlhbG9nLXNjcm9sbGFibGUge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2RvbWFpbj1cImNhbWVyYVwiXSkgcGFwZXItZGlhbG9nLXNjcm9sbGFibGUge1xuICAgICAgICAgIG1hcmdpbjogMCAtMjRweCAtMjFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSBhcHAtdG9vbGJhciB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkRpc21pc3MgZGlhbG9nXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgZGlhbG9nLWRpc21pc3NcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXRpdGxlXCIgbWFpbi10aXRsZT1cIlwiIG9uLWNsaWNrPVwiZW5sYXJnZVwiPlxuICAgICAgICAgIFtbX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjYW5Db25maWd1cmVdXVwiPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6c2V0dGluZ3NcIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJfZ290b1NldHRpbmdzXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvYXBwLXRvb2xiYXI+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfY29tcHV0ZVNob3dTdGF0ZUluZm8oc3RhdGVPYmopXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgIDxzdGF0ZS1jYXJkLWNvbnRlbnRcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgaW4tZGlhbG9nPVwiXCJcbiAgICAgICAgPjwvc3RhdGUtY2FyZC1jb250ZW50PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSBkaWFsb2ctZWxlbWVudD1cIltbZGlhbG9nRWxlbWVudF1dXCI+XG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICBpZj1cIltbX2NvbXB1dGVTaG93SGlzdG9yeUNvbXBvbmVudChoYXNzLCBzdGF0ZU9iaildXVwiXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8aGEtc3RhdGUtaGlzdG9yeS1kYXRhXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgZmlsdGVyLXR5cGU9XCJyZWNlbnQtZW50aXR5XCJcbiAgICAgICAgICAgIGVudGl0eS1pZD1cIltbc3RhdGVPYmouZW50aXR5X2lkXV1cIlxuICAgICAgICAgICAgZGF0YT1cInt7X3N0YXRlSGlzdG9yeX19XCJcbiAgICAgICAgICAgIGlzLWxvYWRpbmc9XCJ7e19zdGF0ZUhpc3RvcnlMb2FkaW5nfX1cIlxuICAgICAgICAgICAgY2FjaGUtY29uZmlnPVwiW1tfY2FjaGVDb25maWddXVwiXG4gICAgICAgICAgPjwvaGEtc3RhdGUtaGlzdG9yeS1kYXRhPlxuICAgICAgICAgIDxzdGF0ZS1oaXN0b3J5LWNoYXJ0c1xuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIGhpc3RvcnktZGF0YT1cIltbX3N0YXRlSGlzdG9yeV1dXCJcbiAgICAgICAgICAgIGlzLWxvYWRpbmctZGF0YT1cIltbX3N0YXRlSGlzdG9yeUxvYWRpbmddXVwiXG4gICAgICAgICAgICB1cC10by1ub3dcbiAgICAgICAgICA+PC9zdGF0ZS1oaXN0b3J5LWNoYXJ0cz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPG1vcmUtaW5mby1jb250ZW50XG4gICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICA+PC9tb3JlLWluZm8tY29udGVudD5cbiAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcIl9zdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGRpYWxvZ0VsZW1lbnQ6IE9iamVjdCxcbiAgICAgIGNhbkNvbmZpZ3VyZTogQm9vbGVhbixcblxuICAgICAgZG9tYWluOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZURvbWFpbihzdGF0ZU9iailcIixcbiAgICAgIH0sXG5cbiAgICAgIF9zdGF0ZUhpc3Rvcnk6IE9iamVjdCxcbiAgICAgIF9zdGF0ZUhpc3RvcnlMb2FkaW5nOiBCb29sZWFuLFxuXG4gICAgICBsYXJnZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIF9jYWNoZUNvbmZpZzoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgcmVmcmVzaDogNjAsXG4gICAgICAgICAgY2FjaGVLZXk6IG51bGwsXG4gICAgICAgICAgaG91cnNUb1Nob3c6IDI0LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBlbmxhcmdlKCkge1xuICAgIHRoaXMubGFyZ2UgPSAhdGhpcy5sYXJnZTtcbiAgfVxuXG4gIF9jb21wdXRlU2hvd1N0YXRlSW5mbyhzdGF0ZU9iaikge1xuICAgIHJldHVybiAhc3RhdGVPYmogfHwgIURPTUFJTlNfTk9fSU5GTy5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopKTtcbiAgfVxuXG4gIF9jb21wdXRlU2hvd0hpc3RvcnlDb21wb25lbnQoaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgaGFzcyAmJlxuICAgICAgc3RhdGVPYmogJiZcbiAgICAgIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwiaGlzdG9yeVwiKSAmJlxuICAgICAgIURPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkuaW5jbHVkZXMoY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSlcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVEb21haW4oc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmogPyBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopIDogXCJcIjtcbiAgfVxuXG4gIF9jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikgOiBcIlwiO1xuICB9XG5cbiAgX3N0YXRlT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jYWNoZUNvbmZpZy5jYWNoZUtleSAhPT0gYG1vcmVfaW5mby4ke25ld1ZhbC5lbnRpdHlfaWR9YCkge1xuICAgICAgdGhpcy5fY2FjaGVDb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuX2NhY2hlQ29uZmlnLFxuICAgICAgICBjYWNoZUtleTogYG1vcmVfaW5mby4ke25ld1ZhbC5lbnRpdHlfaWR9YCxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgX2dvdG9TZXR0aW5ncygpIHtcbiAgICB0aGlzLmZpcmUoXCJtb3JlLWluZm8tcGFnZVwiLCB7IHBhZ2U6IFwic2V0dGluZ3NcIiB9KTtcbiAgfVxuXG4gIF9jb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWNvbnRyb2xzXCIsIE1vcmVJbmZvQ29udHJvbHMpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IHVwZGF0ZUVudGl0eVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcbmltcG9ydCB7IHNob3dTYXZlU3VjY2Vzc1RvYXN0IH0gZnJvbSBcIi4uLy4uL3V0aWwvdG9hc3Qtc2F2ZWQtc3VjY2Vzc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIjtcbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9TZXR0aW5ncyBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGFwcC10b29sYmFyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbW9yZS1pbmZvLWhlYWRlci1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9yZS1pbmZvLWhlYWRlci1iYWNrZ3JvdW5kKTtcblxuICAgICAgICAgIC8qIHRvIGZpdCBzYXZlIGJ1dHRvbiAqL1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtdG9vbGJhciBbbWFpbi10aXRsZV0ge1xuICAgICAgICAgIEBhcHBseSAtLWhhLW1vcmUtaW5mby1hcHAtdG9vbGJhci10aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcC10b29sYmFyIG13Yy1idXR0b24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIC0tbWRjLXRoZW1lLXByaW1hcnk6IHZhcigtLW1vcmUtaW5mby1oZWFkZXItY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjRweCAyNHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgIDxoYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XG4gICAgICAgICAgb24tY2xpY2s9XCJfYmFja1RhcHBlZFwiXG4gICAgICAgID48L2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXY+XG4gICAgICAgIDxkaXYgbWFpbi10aXRsZT1cIlwiPltbX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfc2F2ZVwiIGRpc2FibGVkPVwiW1tfY29tcHV0ZUludmFsaWQoX2VudGl0eUlkKV1dXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuZGlhbG9ncy5tb3JlX2luZm9fc2V0dGluZ3Muc2F2ZScpXV08L213Yy1idXR0b25cbiAgICAgICAgPlxuICAgICAgPC9hcHAtdG9vbGJhcj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgdmFsdWU9XCJ7e19uYW1lfX1cIlxuICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuZGlhbG9ncy5tb3JlX2luZm9fc2V0dGluZ3MubmFtZScpXV1cIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgdmFsdWU9XCJ7e19lbnRpdHlJZH19XCJcbiAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmRpYWxvZ3MubW9yZV9pbmZvX3NldHRpbmdzLmVudGl0eV9pZCcpXV1cIlxuICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJEb21haW4gbmVlZHMgdG8gc3RheSB0aGUgc2FtZVwiXG4gICAgICAgICAgaW52YWxpZD1cIltbX2NvbXB1dGVJbnZhbGlkKF9lbnRpdHlJZCldXVwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcblxuICAgICAgcmVnaXN0cnlJbmZvOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3JlZ2lzdHJ5SW5mb0NoYW5nZWRcIixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgX25hbWU6IFN0cmluZyxcbiAgICAgIF9lbnRpdHlJZDogU3RyaW5nLFxuICAgIH07XG4gIH1cblxuICBfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikge1xuICAgIGlmICghc3RhdGVPYmopIHJldHVybiBcIlwiO1xuICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIF9jb21wdXRlSW52YWxpZChlbnRpdHlJZCkge1xuICAgIHJldHVybiBjb21wdXRlRG9tYWluKHRoaXMuc3RhdGVPYmouZW50aXR5X2lkKSAhPT0gY29tcHV0ZURvbWFpbihlbnRpdHlJZCk7XG4gIH1cblxuICBfcmVnaXN0cnlJbmZvQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBfbmFtZTogbmV3VmFsLm5hbWUsXG4gICAgICAgIF9lbnRpdHlJZDogbmV3VmFsLmVudGl0eV9pZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBfbmFtZTogXCJcIixcbiAgICAgICAgX2VudGl0eUlkOiBcIlwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX2JhY2tUYXBwZWQoKSB7XG4gICAgdGhpcy5maXJlKFwibW9yZS1pbmZvLXBhZ2VcIiwgeyBwYWdlOiBudWxsIH0pO1xuICB9XG5cbiAgYXN5bmMgX3NhdmUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5KFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogdGhpcy5fbmFtZSxcbiAgICAgICAgICBuZXdfZW50aXR5X2lkOiB0aGlzLl9lbnRpdHlJZCxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgc2hvd1NhdmVTdWNjZXNzVG9hc3QodGhpcywgdGhpcy5oYXNzKTtcblxuICAgICAgdGhpcy5yZWdpc3RyeUluZm8gPSBpbmZvO1xuXG4gICAgICAvLyBLZWVwIHRoZSBtb3JlIGluZm8gZGlhbG9nIG9wZW4gYXQgdGhlIG5ldyBlbnRpdHkuXG4gICAgICBpZiAodGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQgIT09IHRoaXMuX2VudGl0eUlkKSB7XG4gICAgICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuX2VudGl0eUlkIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoYHNhdmUgZmFpbGVkOiAke2Vyci5tZXNzYWdlfWApO1xuICAgIH1cbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLXNldHRpbmdzXCIsIE1vcmVJbmZvU2V0dGluZ3MpO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgUGFwZXJEaWFsb2dCZWhhdmlvciB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLWJlaGF2aW9yXCI7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4vZXZlbnRzLW1peGluXCI7XG4vKipcbiAqIEBwb2x5bWVyTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gUGFwZXJEaWFsb2dCZWhhdmlvclxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIG1peGluQmVoYXZpb3JzKFxuICAgICAgW0V2ZW50c01peGluLCBQYXBlckRpYWxvZ0JlaGF2aW9yXSxcbiAgICAgIHN1cGVyQ2xhc3NcbiAgICApIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3aXRoQmFja2Ryb3A6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJjb25zdCBoYXNzQXR0cmlidXRlVXRpbCA9IHt9O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTID0ge1xuICBiaW5hcnlfc2Vuc29yOiBbXG4gICAgXCJiYXR0ZXJ5XCIsXG4gICAgXCJjb2xkXCIsXG4gICAgXCJjb25uZWN0aXZpdHlcIixcbiAgICBcImRvb3JcIixcbiAgICBcImdhcmFnZV9kb29yXCIsXG4gICAgXCJnYXNcIixcbiAgICBcImhlYXRcIixcbiAgICBcImxpZ2h0XCIsXG4gICAgXCJsb2NrXCIsXG4gICAgXCJtb2lzdHVyZVwiLFxuICAgIFwibW90aW9uXCIsXG4gICAgXCJtb3ZpbmdcIixcbiAgICBcIm9jY3VwYW5jeVwiLFxuICAgIFwib3BlbmluZ1wiLFxuICAgIFwicGx1Z1wiLFxuICAgIFwicG93ZXJcIixcbiAgICBcInByZXNlbmNlXCIsXG4gICAgXCJwcm9ibGVtXCIsXG4gICAgXCJzYWZldHlcIixcbiAgICBcInNtb2tlXCIsXG4gICAgXCJzb3VuZFwiLFxuICAgIFwidmlicmF0aW9uXCIsXG4gICAgXCJ3aW5kb3dcIixcbiAgXSxcbiAgY292ZXI6IFtcbiAgICBcImF3bmluZ1wiLFxuICAgIFwiYmxpbmRcIixcbiAgICBcImN1cnRhaW5cIixcbiAgICBcImRhbXBlclwiLFxuICAgIFwiZG9vclwiLFxuICAgIFwiZ2FyYWdlXCIsXG4gICAgXCJzaGFkZVwiLFxuICAgIFwic2h1dHRlclwiLFxuICAgIFwid2luZG93XCIsXG4gIF0sXG4gIHNlbnNvcjogW1xuICAgIFwiYmF0dGVyeVwiLFxuICAgIFwiaHVtaWRpdHlcIixcbiAgICBcImlsbHVtaW5hbmNlXCIsXG4gICAgXCJ0ZW1wZXJhdHVyZVwiLFxuICAgIFwicHJlc3N1cmVcIixcbiAgICBcInBvd2VyXCIsXG4gICAgXCJzaWduYWxfc3RyZW5ndGhcIixcbiAgXSxcbiAgc3dpdGNoOiBbXCJzd2l0Y2hcIiwgXCJvdXRsZXRcIl0sXG59O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgPSBcImpzb25cIjtcbmhhc3NBdHRyaWJ1dGVVdGlsLkFERF9UWVBFID0gXCJrZXktdmFsdWVcIjtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVFlQRV9UT19UQUcgPSB7XG4gIHN0cmluZzogXCJoYS1jdXN0b21pemUtc3RyaW5nXCIsXG4gIGpzb246IFwiaGEtY3VzdG9taXplLXN0cmluZ1wiLFxuICBpY29uOiBcImhhLWN1c3RvbWl6ZS1pY29uXCIsXG4gIGJvb2xlYW46IFwiaGEtY3VzdG9taXplLWJvb2xlYW5cIixcbiAgYXJyYXk6IFwiaGEtY3VzdG9taXplLWFycmF5XCIsXG4gIFwia2V5LXZhbHVlXCI6IFwiaGEtY3VzdG9taXplLWtleS12YWx1ZVwiLFxufTtcblxuLy8gQXR0cmlidXRlcyBoZXJlIHNlcnZlIGR1YWwgcHVycG9zZTpcbi8vIDEpIEFueSBrZXkgb2YgdGhpcyBvYmplY3Qgd29uJ3QgYmUgc2hvd24gaW4gbW9yZS1pbmZvIHdpbmRvdy5cbi8vIDIpIEFueSBrZXkgd2hpY2ggaGFzIHZhbHVlIG90aGVyIHRoYW4gdW5kZWZpbmVkIHdpbGwgYXBwZWFyIGluIGN1c3RvbWl6YXRpb25cbi8vICAgIGNvbmZpZyBhY2NvcmRpbmcgdG8gaXRzIHZhbHVlLlxuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyA9IGhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgfHwge1xuICBlbnRpdHlfcGljdHVyZTogdW5kZWZpbmVkLFxuICBmcmllbmRseV9uYW1lOiB7IHR5cGU6IFwic3RyaW5nXCIsIGRlc2NyaXB0aW9uOiBcIk5hbWVcIiB9LFxuICBpY29uOiB7IHR5cGU6IFwiaWNvblwiIH0sXG4gIGVtdWxhdGVkX2h1ZToge1xuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgIGRvbWFpbnM6IFtcImVtdWxhdGVkX2h1ZVwiXSxcbiAgfSxcbiAgZW11bGF0ZWRfaHVlX25hbWU6IHtcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgIGRvbWFpbnM6IFtcImVtdWxhdGVkX2h1ZVwiXSxcbiAgfSxcbiAgaGFhc2thX2hpZGRlbjogdW5kZWZpbmVkLFxuICBoYWFza2FfbmFtZTogdW5kZWZpbmVkLFxuICBob21lYnJpZGdlX2hpZGRlbjogeyB0eXBlOiBcImJvb2xlYW5cIiB9LFxuICBob21lYnJpZGdlX25hbWU6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICBzdXBwb3J0ZWRfZmVhdHVyZXM6IHVuZGVmaW5lZCxcbiAgYXR0cmlidXRpb246IHVuZGVmaW5lZCxcbiAgY3VzdG9tX3VpX21vcmVfaW5mbzogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgZGV2aWNlX2NsYXNzOiB7XG4gICAgdHlwZTogXCJhcnJheVwiLFxuICAgIG9wdGlvbnM6IGhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MsXG4gICAgZGVzY3JpcHRpb246IFwiRGV2aWNlIGNsYXNzXCIsXG4gICAgZG9tYWluczogW1wiYmluYXJ5X3NlbnNvclwiLCBcImNvdmVyXCIsIFwic2Vuc29yXCIsIFwic3dpdGNoXCJdLFxuICB9LFxuICBoaWRkZW46IHsgdHlwZTogXCJib29sZWFuXCIsIGRlc2NyaXB0aW9uOiBcIkhpZGUgZnJvbSBVSVwiIH0sXG4gIGFzc3VtZWRfc3RhdGU6IHtcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICBkb21haW5zOiBbXG4gICAgICBcInN3aXRjaFwiLFxuICAgICAgXCJsaWdodFwiLFxuICAgICAgXCJjb3ZlclwiLFxuICAgICAgXCJjbGltYXRlXCIsXG4gICAgICBcImZhblwiLFxuICAgICAgXCJncm91cFwiLFxuICAgICAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgICBdLFxuICB9LFxuICBpbml0aWFsX3N0YXRlOiB7XG4gICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICBkb21haW5zOiBbXCJhdXRvbWF0aW9uXCJdLFxuICB9LFxuICB1bml0X29mX21lYXN1cmVtZW50OiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhc3NBdHRyaWJ1dGVVdGlsO1xuIiwiaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSBcIi4vdG9hc3RcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHNob3dTYXZlU3VjY2Vzc1RvYXN0ID0gKGVsOiBIVE1MRWxlbWVudCwgaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgc2hvd1RvYXN0KGVsLCB7XG4gICAgbWVzc2FnZTogaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24uc3VjY2Vzc2Z1bGx5X3NhdmVkXCIpLFxuICB9KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFoRkE7QUFDQTtBQStCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBOzs7O0FBakRBO0FBQ0E7QUFtRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBV0E7QUFFQTtBQUNBO0FBS0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBK0tBO0FBNUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBcUJBO0FBbkJBO0FBS0E7QUFHQTtBQUpBO0FBQ0E7QUFnQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7OztBQUVBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBOztBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFFQTtBQUVBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQURBO0FBR0E7Ozs7O0FBQ0E7QUFFQTtBQUVBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQVlBOzs7QUFBQTtBQXBMQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFQQTtBQURBO0FBQ0E7QUFzTEE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFzRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFoSUE7QUFDQTtBQTRDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFkQTtBQW1CQTs7OztBQXBFQTtBQUNBO0FBbUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlJQTtBQUNBO0FBRUE7QUFFQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7QUFrS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7OztBQUlBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7O0FBSUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBSUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTVrQkE7QUFDQTtBQTBGQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBNURBO0FBaUVBOzs7O0FBaEtBO0FBQ0E7QUE4a0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hsQkE7QUFLQTtBQUlBO0FBRUE7QUFBQTtBQUFBOztBQWVBO0FBWkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQXFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBcEJBO0FBeUJBOzs7O0FBbkVBO0FBQ0E7QUFxRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBS0E7QUFJQTtBQUFBO0FBQUE7O0FBa0JBO0FBZkE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFvREE7QUFDQTtBQUNBOzs7O0FBM0RBO0FBQ0E7QUE0REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQXFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUF4SEE7QUFDQTtBQTJDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFkQTtBQW1CQTs7OztBQW5FQTtBQUNBO0FBMkhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQXNIQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUVBOzs7Ozs7OztBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7OztBQVNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFRQTs7Ozs7Ozs7QUFNQTs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7O0FBREE7QUFJQTs7Ozs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUF4TEE7QUFDQTtBQWdGQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQXRCQTtBQTJCQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBcEhBO0FBQ0E7QUEwTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUE2SkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBM0JBO0FBZ0NBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBUUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7OztBQTlQQTtBQUNBO0FBK1BBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6UUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFxQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBeENBO0FBQ0E7QUEwQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7OztBQW5DQTtBQUNBO0FBMkNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQVdBO0FBTUE7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUErRkE7QUE3RkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFlQTtBQVJBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFBQTs7QUFBQTs7Ozs7QUFJQTtBQUVBOzs7Ozs7QUFDQTs7OztBQUVBO0FBQUE7QUFJQTtBQUNBOztBQUxBOzs7O0FBUUE7QUFDQTs7Ozs7O0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFVQTs7O0FBQUE7QUFqR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBK0ZBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFXQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQTJjQTtBQXRjQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBSUE7QUFJQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBYUE7QUFVQTtBQVlBO0FBdUJBO0FBNEJBO0FBd0JBO0FBaUNBO0FBNEJBO0FBd0JBO0FBZUE7QUEvTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQU9BO0FBWUE7QUFDQTtBQXlCQTtBQXVDQTtBQUNBO0FBQ0E7QUFhQTtBQXFCQTtBQUhBO0FBVUE7QUFxQkE7QUFIQTtBQVVBO0FBaUJBO0FBT0E7QUFnQkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUVBOzs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBd0RBOzs7QUFBQTtBQXpjQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUF5Y0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQTZHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQXJJQTtBQUNBO0FBMkVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBcEJBO0FBMkJBOzs7O0FBM0dBO0FBQ0E7QUF3SUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25KQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7O0FBK0NBO0FBMUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFxRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBT0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQWxHQTtBQUNBO0FBaURBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVhBO0FBYUE7Ozs7QUFuRUE7QUFDQTtBQXFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTs7OztBQWJBO0FBQ0E7QUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBdUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUF2S0E7QUFDQTtBQWtGQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBVkE7QUFjQTs7OztBQXJHQTtBQUNBO0FBMEtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUxBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7QUFsR0E7QUFDQTtBQXFCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFjQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBNUNBO0FBQ0E7QUFxR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFlQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7O0FBeEJBO0FBQ0E7QUF5QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBdUJBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBNkJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBRUE7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBOzs7QUEvSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBcEJBO0FBeUJBOzs7O0FBMURBO0FBQ0E7QUFpTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBaU9BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQXZVQTtBQUNBO0FBbUxBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBbkNBO0FBdUNBOzs7O0FBL05BO0FBQ0E7QUEwVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyV0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUEvREE7QUFDQTtBQWdDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVkE7QUFZQTs7OztBQWpEQTtBQUNBO0FBa0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBMk5BO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUE5WUE7QUFDQTtBQTRMQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBbkJBO0FBd0JBOzs7O0FBek5BO0FBQ0E7QUFpWkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFZQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7Ozs7QUF0QkE7QUFDQTtBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBNkNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBckVBO0FBQ0E7QUF5QkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7Ozs7QUEzQ0E7QUFDQTtBQXdFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFVQTtBQU1BO0FBQUE7QUFBQTs7QUFpRkE7QUE1RUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWVBO0FBVUE7QUFnQkE7QUFsQ0E7QUFVQTtBQVVBO0FBaUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBU0E7OztBQUFBO0FBL0VBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFDQTtBQWlGQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQTRCQTtBQUNBO0FBSUE7OztBQWhDQTtBQUNBO0FBZ0JBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTs7OztBQTFCQTtBQUNBO0FBbUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFvSkE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQXRQQTtBQUNBO0FBK0hBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFWQTtBQWNBOzs7O0FBbEpBO0FBQ0E7QUF5UEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUFrSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBbk9BO0FBQ0E7QUErR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBVkE7QUFZQTs7OztBQWhJQTtBQUNBO0FBc09BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlQQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7QUFDQTtBQUNBO0FBb0hBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFyQkE7QUFzQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVJBO0FBVUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUE5TkE7QUFDQTtBQWdPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUE0SUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBdkxBO0FBQ0E7QUE2RkE7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBbENBO0FBd0NBOzs7O0FBMUlBO0FBQ0E7QUF5TEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBb0VBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUlBO0FBSUE7QUFDQTtBQUZBO0FBQ0E7O0FBSkE7QUFTQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQW5IQTtBQUNBO0FBZ0RBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBWEE7QUFhQTs7OztBQWxFQTtBQUNBO0FBc0hBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVpBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFoQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBRUE7QUFDQTtBQXlCQTtBQVdBO0FBU0E7QUE5Q0E7QUFpREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFZQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQTNDQTtBQThDQTs7Ozs7Ozs7Ozs7O0FDakhBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==