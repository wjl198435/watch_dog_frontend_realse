(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-core"],{

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  <style include=\"paper-spinner-styles\"></style>\n\n  <div id=\"spinnerContainer\" class-name=\"[[__computeContainerClasses(active, __coolingDown)]]\" on-animationend=\"__reset\" on-webkit-animation-end=\"__reset\">\n    <div class=\"spinner-layer layer-1\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-2\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-3\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-4\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n  </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/






var template = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
template.setAttribute('strip-whitespace', '');
/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,
  is: 'paper-spinner',
  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});

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

/***/ "./src/components/map/ha-location-editor.ts":
/*!**************************************************!*\
  !*** ./src/components/map/ha-location-editor.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");




var LocationEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocationEditor, _super);
    function LocationEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fitZoom = 16;
        return _this;
    }
    LocationEditor.prototype.fitMap = function () {
        if (!this._leafletMap || !this.location) {
            return;
        }
        this._leafletMap.setView(this.location, this.fitZoom);
    };
    LocationEditor.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div id=\"map\"></div>\n    "], ["\n      <div id=\"map\"></div>\n    "])));
    };
    LocationEditor.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        this._initMap();
    };
    LocationEditor.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        // Still loading.
        if (!this.Leaflet) {
            return;
        }
        this._updateMarker();
        if (!this._ignoreFitToMap || this._ignoreFitToMap !== this.location) {
            this.fitMap();
        }
        this._ignoreFitToMap = undefined;
    };
    Object.defineProperty(LocationEditor.prototype, "_mapEl", {
        get: function () {
            return this.shadowRoot.querySelector("div");
        },
        enumerable: true,
        configurable: true
    });
    LocationEditor.prototype._initMap = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_2__["setupLeafletMap"])(this._mapEl)];
                    case 1:
                        _a = _b.sent(), this._leafletMap = _a[0], this.Leaflet = _a[1];
                        this._leafletMap.addEventListener("click", 
                        // @ts-ignore
                        function (ev) { return _this._updateLocation(ev.latlng); });
                        this._updateMarker();
                        this.fitMap();
                        this._leafletMap.invalidateSize();
                        return [2 /*return*/];
                }
            });
        });
    };
    LocationEditor.prototype._updateLocation = function (latlng) {
        var longitude = latlng.lng;
        if (Math.abs(longitude) > 180.0) {
            // Normalize longitude if map provides values beyond -180 to +180 degrees.
            longitude = (((longitude % 360.0) + 540.0) % 360.0) - 180.0;
        }
        this.location = this._ignoreFitToMap = [latlng.lat, longitude];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "change", undefined, { bubbles: false });
    };
    LocationEditor.prototype._updateMarker = function () {
        var _this = this;
        if (!this.location) {
            if (this._locationMarker) {
                this._locationMarker.remove();
                this._locationMarker = undefined;
            }
            return;
        }
        if (this._locationMarker) {
            this._locationMarker.setLatLng(this.location);
            return;
        }
        this._locationMarker = this.Leaflet.marker(this.location, {
            draggable: true,
        });
        this._locationMarker.addEventListener("dragend", 
        // @ts-ignore
        function (ev) { return _this._updateLocation(ev.target.getLatLng()); });
        this._leafletMap.addLayer(this._locationMarker);
    };
    Object.defineProperty(LocationEditor, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: block;\n        height: 300px;\n      }\n      #map {\n        height: 100%;\n      }\n    "], ["\n      :host {\n        display: block;\n        height: 300px;\n      }\n      #map {\n        height: 100%;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], LocationEditor.prototype, "location", void 0);
    LocationEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-location-editor")
    ], LocationEditor);
    return LocationEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/timezone-datalist.ts":
/*!*********************************************!*\
  !*** ./src/components/timezone-datalist.ts ***!
  \*********************************************/
/*! exports provided: createTimezoneListEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTimezoneListEl", function() { return createTimezoneListEl; });
/* harmony import */ var google_timezones_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-timezones-json */ "./node_modules/google-timezones-json/index.js");
/* harmony import */ var google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_timezones_json__WEBPACK_IMPORTED_MODULE_0__);

var createTimezoneListEl = function () {
    var list = document.createElement("datalist");
    list.id = "timezones";
    Object.keys(google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default.a).forEach(function (key) {
        var option = document.createElement("option");
        option.value = key;
        option.innerHTML = google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default.a[key];
        list.appendChild(option);
    });
    return list;
};


/***/ }),

/***/ "./src/data/core.ts":
/*!**************************!*\
  !*** ./src/data/core.ts ***!
  \**************************/
/*! exports provided: saveCoreConfig, detectCoreConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCoreConfig", function() { return saveCoreConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectCoreConfig", function() { return detectCoreConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var saveCoreConfig = function (hass, values) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/core/update" }, values));
};
var detectCoreConfig = function (hass) {
    return hass.callWS({
        type: "config/core/detect",
    });
};


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

/***/ "./src/panels/config/core/ha-config-core-form.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/core/ha-config-core-form.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _data_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/core */ "./src/data/core.ts");
/* harmony import */ var _components_timezone_datalist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/timezone-datalist */ "./src/components/timezone-datalist.ts");
/* harmony import */ var _components_map_ha_location_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/map/ha-location-editor */ "./src/components/map/ha-location-editor.ts");











var ConfigCoreForm = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConfigCoreForm, _super);
    function ConfigCoreForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._working = false;
        return _this;
    }
    ConfigCoreForm.prototype.render = function () {
        var canEdit = ["storage", "default"].includes(this.hass.config.config_source);
        var disabled = this._working || !canEdit;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card\n        .header=", "\n      >\n        <div class=\"card-content\">\n          ", "\n\n          <div class=\"row\">\n            <ha-location-editor\n              class=\"flex\"\n              .location=", "\n              @change=", "\n            ></ha-location-editor>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"flex\">\n              ", "\n            </div>\n\n            <paper-input\n              class=\"flex\"\n              .label=", "\n              name=\"timeZone\"\n              list=\"timezones\"\n              .disabled=", "\n              .value=", "\n              @value-changed=", "\n            ></paper-input>\n          </div>\n          <div class=\"row\">\n            <div class=\"flex\">\n              ", "\n            </div>\n\n            <paper-input\n              class=\"flex\"\n              .label=", "\n              name=\"elevation\"\n              type=\"number\"\n              .disabled=", "\n              .value=", "\n              @value-changed=", "\n            >\n              <span slot=\"suffix\">\n                ", "\n              </span>\n            </paper-input>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"flex\">\n              ", "\n            </div>\n            <paper-radio-group\n              class=\"flex\"\n              .selected=", "\n              @selected-changed=", "\n            >\n              <paper-radio-button name=\"metric\" .disabled=", ">\n                ", "\n                <div class=\"secondary\">\n                  ", "\n                </div>\n              </paper-radio-button>\n              <paper-radio-button name=\"imperial\" .disabled=", ">\n                ", "\n                <div class=\"secondary\">\n                  ", "\n                </div>\n              </paper-radio-button>\n            </paper-radio-group>\n          </div>\n        </div>\n        <div class=\"card-actions\">\n          <mwc-button @click=", " .disabled=", ">\n            ", "\n          </mwc-button>\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card\n        .header=",
            "\n      >\n        <div class=\"card-content\">\n          ",
            "\n\n          <div class=\"row\">\n            <ha-location-editor\n              class=\"flex\"\n              .location=", "\n              @change=", "\n            ></ha-location-editor>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"flex\">\n              ",
            "\n            </div>\n\n            <paper-input\n              class=\"flex\"\n              .label=",
            "\n              name=\"timeZone\"\n              list=\"timezones\"\n              .disabled=", "\n              .value=", "\n              @value-changed=", "\n            ></paper-input>\n          </div>\n          <div class=\"row\">\n            <div class=\"flex\">\n              ",
            "\n            </div>\n\n            <paper-input\n              class=\"flex\"\n              .label=",
            "\n              name=\"elevation\"\n              type=\"number\"\n              .disabled=", "\n              .value=", "\n              @value-changed=", "\n            >\n              <span slot=\"suffix\">\n                ",
            "\n              </span>\n            </paper-input>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"flex\">\n              ",
            "\n            </div>\n            <paper-radio-group\n              class=\"flex\"\n              .selected=", "\n              @selected-changed=", "\n            >\n              <paper-radio-button name=\"metric\" .disabled=", ">\n                ",
            "\n                <div class=\"secondary\">\n                  ",
            "\n                </div>\n              </paper-radio-button>\n              <paper-radio-button name=\"imperial\" .disabled=", ">\n                ",
            "\n                <div class=\"secondary\">\n                  ",
            "\n                </div>\n              </paper-radio-button>\n            </paper-radio-group>\n          </div>\n        </div>\n        <div class=\"card-actions\">\n          <mwc-button @click=", " .disabled=", ">\n            ",
            "\n          </mwc-button>\n        </div>\n      </ha-card>\n    "])), this.hass.localize("ui.panel.config.core.section.core.form.heading"), !canEdit
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <p>\n                  ", "\n                </p>\n              "], ["\n                <p>\n                  ",
                "\n                </p>\n              "])), this.hass.localize("ui.panel.config.core.section.core.core_config.edit_requires_storage")) : "", this._locationValue, this._locationChanged, this.hass.localize("ui.panel.config.core.section.core.core_config.time_zone"), this.hass.localize("ui.panel.config.core.section.core.core_config.time_zone"), disabled, this._timeZoneValue, this._handleChange, this.hass.localize("ui.panel.config.core.section.core.core_config.elevation"), this.hass.localize("ui.panel.config.core.section.core.core_config.elevation"), disabled, this._elevationValue, this._handleChange, this.hass.localize("ui.panel.config.core.section.core.core_config.elevation_meters"), this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system"), this._unitSystemValue, this._unitSystemChanged, disabled, this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_metric"), this.hass.localize("ui.panel.config.core.section.core.core_config.metric_example"), disabled, this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_imperial"), this.hass.localize("ui.panel.config.core.section.core.core_config.imperial_example"), this._save, disabled, this.hass.localize("ui.panel.config.core.section.core.core_config.save_button"));
    };
    ConfigCoreForm.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        var input = this.shadowRoot.querySelector("[name=timeZone]");
        input.inputElement.appendChild(Object(_components_timezone_datalist__WEBPACK_IMPORTED_MODULE_9__["createTimezoneListEl"])());
    };
    Object.defineProperty(ConfigCoreForm.prototype, "_locationValue", {
        get: function () {
            return this._location !== undefined
                ? this._location
                : [Number(this.hass.config.latitude), Number(this.hass.config.longitude)];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigCoreForm.prototype, "_elevationValue", {
        get: function () {
            return this._elevation !== undefined
                ? this._elevation
                : this.hass.config.elevation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigCoreForm.prototype, "_timeZoneValue", {
        get: function () {
            return this._timeZone !== undefined
                ? this._timeZone
                : this.hass.config.time_zone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigCoreForm.prototype, "_unitSystemValue", {
        get: function () {
            return this._unitSystem !== undefined
                ? this._unitSystem
                : this.hass.config.unit_system.temperature === _common_const__WEBPACK_IMPORTED_MODULE_7__["UNIT_C"]
                    ? "metric"
                    : "imperial";
        },
        enumerable: true,
        configurable: true
    });
    ConfigCoreForm.prototype._handleChange = function (ev) {
        var target = ev.currentTarget;
        this["_" + target.name] = target.value;
    };
    ConfigCoreForm.prototype._locationChanged = function (ev) {
        this._location = ev.currentTarget.location;
    };
    ConfigCoreForm.prototype._unitSystemChanged = function (ev) {
        this._unitSystem = ev.detail.value;
    };
    ConfigCoreForm.prototype._save = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var location_1, err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._working = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        location_1 = this._locationValue;
                        return [4 /*yield*/, Object(_data_core__WEBPACK_IMPORTED_MODULE_8__["saveCoreConfig"])(this.hass, {
                                latitude: location_1[0],
                                longitude: location_1[1],
                                elevation: Number(this._elevationValue),
                                unit_system: this._unitSystemValue,
                                time_zone: this._timeZoneValue,
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        alert("FAIL");
                        return [3 /*break*/, 5];
                    case 4:
                        this._working = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ConfigCoreForm, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .row {\n        display: flex;\n        flex-direction: row;\n        margin: 0 -8px;\n        align-items: center;\n      }\n\n      .secondary {\n        color: var(--secondary-text-color);\n      }\n\n      .flex {\n        flex: 1;\n      }\n\n      .row > * {\n        margin: 0 8px;\n      }\n    "], ["\n      .row {\n        display: flex;\n        flex-direction: row;\n        margin: 0 -8px;\n        align-items: center;\n      }\n\n      .secondary {\n        color: var(--secondary-text-color);\n      }\n\n      .flex {\n        flex: 1;\n      }\n\n      .row > * {\n        margin: 0 8px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], ConfigCoreForm.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], ConfigCoreForm.prototype, "_working", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], ConfigCoreForm.prototype, "_location", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], ConfigCoreForm.prototype, "_elevation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], ConfigCoreForm.prototype, "_unitSystem", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], ConfigCoreForm.prototype, "_timeZone", void 0);
    ConfigCoreForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-config-core-form")
    ], ConfigCoreForm);
    return ConfigCoreForm;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/config/core/ha-config-core.js":
/*!**************************************************!*\
  !*** ./src/panels/config/core/ha-config-core.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-config-section-core */ "./src/panels/config/core/ha-config-section-core.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          padding-bottom: 32px;\n        }\n\n        .border {\n          margin: 32px auto 0;\n          border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n          max-width: 1040px;\n        }\n\n        .narrow .border {\n          max-width: 640px;\n        }\n      </style>\n\n      <hass-subpage header=\"[[localize('ui.panel.config.core.caption')]]\">\n        <div class$=\"[[computeClasses(isWide)]]\">\n          <ha-config-section-core\n            is-wide=\"[[isWide]]\"\n            show-advanced=\"[[showAdvanced]]\"\n            hass=\"[[hass]]\"\n          ></ha-config-section-core>\n        </div>\n      </hass-subpage>\n    "]);

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

var HaConfigCore =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaConfigCore, _LocalizeMixin);

  function HaConfigCore() {
    _classCallCheck(this, HaConfigCore);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigCore).apply(this, arguments));
  }

  _createClass(HaConfigCore, [{
    key: "computeClasses",
    value: function computeClasses(isWide) {
      return isWide ? "content" : "content narrow";
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
        isWide: Boolean,
        showAdvanced: Boolean
      };
    }
  }]);

  return HaConfigCore;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]));

customElements.define("ha-config-core", HaConfigCore);

/***/ }),

/***/ "./src/panels/config/core/ha-config-name-form.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/core/ha-config-name-form.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _data_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/core */ "./src/data/core.ts");








var ConfigNameForm = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConfigNameForm, _super);
    function ConfigNameForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._working = false;
        return _this;
    }
    ConfigNameForm.prototype.render = function () {
        var canEdit = ["storage", "default"].includes(this.hass.config.config_source);
        var disabled = this._working || !canEdit;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card>\n        <div class=\"card-content\">\n          ", "\n          <paper-input\n            class=\"flex\"\n            .label=", "\n            name=\"name\"\n            .disabled=", "\n            .value=", "\n            @value-changed=", "\n          ></paper-input>\n        </div>\n        <div class=\"card-actions\">\n          <mwc-button @click=", " .disabled=", ">\n            ", "\n          </mwc-button>\n        </div>\n      </ha-card>\n    "], ["\n      <ha-card>\n        <div class=\"card-content\">\n          ",
            "\n          <paper-input\n            class=\"flex\"\n            .label=",
            "\n            name=\"name\"\n            .disabled=", "\n            .value=", "\n            @value-changed=", "\n          ></paper-input>\n        </div>\n        <div class=\"card-actions\">\n          <mwc-button @click=", " .disabled=", ">\n            ",
            "\n          </mwc-button>\n        </div>\n      </ha-card>\n    "])), !canEdit
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <p>\n                  ", "\n                </p>\n              "], ["\n                <p>\n                  ",
                "\n                </p>\n              "])), this.hass.localize("ui.panel.config.core.section.core.core_config.edit_requires_storage")) : "", this.hass.localize("ui.panel.config.core.section.core.core_config.location_name"), disabled, this._nameValue, this._handleChange, this._save, disabled, this.hass.localize("ui.panel.config.core.section.core.core_config.save_button"));
    };
    Object.defineProperty(ConfigNameForm.prototype, "_nameValue", {
        get: function () {
            return this._name !== undefined
                ? this._name
                : this.hass.config.location_name;
        },
        enumerable: true,
        configurable: true
    });
    ConfigNameForm.prototype._handleChange = function (ev) {
        var target = ev.currentTarget;
        this["_" + target.name] = target.value;
    };
    ConfigNameForm.prototype._save = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._working = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, Object(_data_core__WEBPACK_IMPORTED_MODULE_7__["saveCoreConfig"])(this.hass, {
                                location_name: this._nameValue,
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        alert("FAIL");
                        return [3 /*break*/, 5];
                    case 4:
                        this._working = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], ConfigNameForm.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], ConfigNameForm.prototype, "_working", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], ConfigNameForm.prototype, "_name", void 0);
    ConfigNameForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-config-name-form")
    ], ConfigNameForm);
    return ConfigNameForm;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/panels/config/core/ha-config-section-core.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/core/ha-config-section-core.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_config_name_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ha-config-name-form */ "./src/panels/config/core/ha-config-name-form.ts");
/* harmony import */ var _ha_config_core_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ha-config-core-form */ "./src/panels/config/core/ha-config-core-form.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .validate-container {\n          @apply --layout-vertical;\n          @apply --layout-center-center;\n          height: 140px;\n        }\n\n        .validate-result {\n          color: var(--google-green-500);\n          font-weight: 500;\n          margin-bottom: 1em;\n        }\n\n        .config-invalid {\n          margin: 1em 0;\n        }\n\n        .config-invalid .text {\n          color: var(--google-red-500);\n          font-weight: 500;\n        }\n\n        .config-invalid mwc-button {\n          float: right;\n        }\n\n        .validate-log {\n          white-space: pre-wrap;\n          direction: ltr;\n        }\n      </style>\n      <ha-config-section is-wide=\"[[isWide]]\">\n        <span slot=\"header\"\n          >[[localize('ui.panel.config.core.section.core.header')]]</span\n        >\n        <span slot=\"introduction\"\n          >[[localize('ui.panel.config.core.section.core.introduction')]]</span\n        >\n\n        <ha-config-name-form hass=\"[[hass]]\"></ha-config-name-form>\n        <ha-config-core-form hass=\"[[hass]]\"></ha-config-core-form>\n      </ha-config-section>\n    "]);

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

var HaConfigSectionCore =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaConfigSectionCore, _LocalizeMixin);

  function HaConfigSectionCore() {
    _classCallCheck(this, HaConfigSectionCore);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigSectionCore).apply(this, arguments));
  }

  _createClass(HaConfigSectionCore, [{
    key: "groupLoaded",
    value: function groupLoaded(hass) {
      return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(hass, "group");
    }
  }, {
    key: "automationLoaded",
    value: function automationLoaded(hass) {
      return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(hass, "automation");
    }
  }, {
    key: "scriptLoaded",
    value: function scriptLoaded(hass) {
      return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(hass, "script");
    }
  }, {
    key: "validateConfig",
    value: function validateConfig() {
      var _this = this;

      this.validating = true;
      this.validateLog = "";
      this.isValid = null;
      this.hass.callApi("POST", "config/core/check_config").then(function (result) {
        _this.validating = false;
        _this.isValid = result.result === "valid";

        if (!_this.isValid) {
          _this.validateLog = result.errors;
        }
      });
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
        isWide: {
          type: Boolean,
          value: false
        },
        validating: {
          type: Boolean,
          value: false
        },
        isValid: {
          type: Boolean,
          value: null
        },
        validateLog: {
          type: String,
          value: ""
        },
        showAdvanced: Boolean
      };
    }
  }]);

  return HaConfigSectionCore;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("ha-config-section-core", HaConfigSectionCore);

/***/ }),

/***/ "./src/panels/config/ha-config-section.js":
/*!************************************************!*\
  !*** ./src/panels/config/ha-config-section.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          padding: 28px 20px 0;\n          max-width: 1040px;\n          margin: 0 auto;\n        }\n\n        .header {\n          @apply --paper-font-display1;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .together {\n          margin-top: 32px;\n        }\n\n        .intro {\n          @apply --paper-font-subhead;\n          width: 100%;\n          max-width: 400px;\n          margin-right: 40px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .panel {\n          margin-top: -24px;\n        }\n\n        .panel ::slotted(*) {\n          margin-top: 24px;\n          display: block;\n        }\n\n        .narrow.content {\n          max-width: 640px;\n        }\n        .narrow .together {\n          margin-top: 20px;\n        }\n        .narrow .header {\n          @apply --paper-font-headline;\n        }\n        .narrow .intro {\n          font-size: 14px;\n          padding-bottom: 20px;\n          margin-right: 0;\n          max-width: 500px;\n        }\n      </style>\n      <div class$=\"[[computeContentClasses(isWide)]]\">\n        <div class=\"header\"><slot name=\"header\"></slot></div>\n        <div class$=\"[[computeClasses(isWide)]]\">\n          <div class=\"intro\"><slot name=\"introduction\"></slot></div>\n          <div class=\"panel flex-auto\"><slot></slot></div>\n        </div>\n      </div>\n    "]);

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





var HaConfigSection =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaConfigSection, _PolymerElement);

  function HaConfigSection() {
    _classCallCheck(this, HaConfigSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigSection).apply(this, arguments));
  }

  _createClass(HaConfigSection, [{
    key: "computeContentClasses",
    value: function computeContentClasses(isWide) {
      var classes = "content ";
      return isWide ? classes : classes + "narrow";
    }
  }, {
    key: "computeClasses",
    value: function computeClasses(isWide) {
      var classes = "together layout ";
      return classes + (isWide ? "horizontal" : "vertical narrow");
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
        narrow: {
          type: Boolean
        },
        isWide: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return HaConfigSection;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-config-section", HaConfigSection);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWNvcmUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZG9tL3NldHVwLWxlYWZsZXQtbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvaGEtbG9jYXRpb24tZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbWV6b25lLWRhdGFsaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jb3JlL2hhLWNvbmZpZy1jb3JlLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY29yZS9oYS1jb25maWctY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jb3JlL2hhLWNvbmZpZy1uYW1lLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY29yZS9oYS1jb25maWctc2VjdGlvbi1jb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWNvbmZpZy1zZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnLi9wYXBlci1zcGlubmVyLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJTcGlubmVyQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItc3Bpbm5lci1iZWhhdmlvci5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbiAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1zcGlubmVyLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgPGRpdiBpZD1cInNwaW5uZXJDb250YWluZXJcIiBjbGFzcy1uYW1lPVwiW1tfX2NvbXB1dGVDb250YWluZXJDbGFzc2VzKGFjdGl2ZSwgX19jb29saW5nRG93bildXVwiIG9uLWFuaW1hdGlvbmVuZD1cIl9fcmVzZXRcIiBvbi13ZWJraXQtYW5pbWF0aW9uLWVuZD1cIl9fcmVzZXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0xXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHJpcC13aGl0ZXNwYWNlJywgJycpO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1Byb2dyZXNzICZcbmFjdGl2aXR5XShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYWN0aXZpdHkuaHRtbClcblxuRWxlbWVudCBwcm92aWRpbmcgYSBtdWx0aXBsZSBjb2xvciBtYXRlcmlhbCBkZXNpZ24gY2lyY3VsYXIgc3Bpbm5lci5cblxuICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cblRoZSBkZWZhdWx0IHNwaW5uZXIgY3ljbGVzIGJldHdlZW4gZm91ciBsYXllcnMgb2YgY29sb3JzOyBieSBkZWZhdWx0IHRoZXkgYXJlXG5ibHVlLCByZWQsIHllbGxvdyBhbmQgZ3JlZW4uIEl0IGNhbiBiZSBjdXN0b21pemVkIHRvIGN5Y2xlIGJldHdlZW4gZm91clxuZGlmZmVyZW50IGNvbG9ycy4gVXNlIDxwYXBlci1zcGlubmVyLWxpdGU+IGZvciBzaW5nbGUgY29sb3Igc3Bpbm5lcnMuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbkFsdCBhdHRyaWJ1dGUgc2hvdWxkIGJlIHNldCB0byBwcm92aWRlIGFkZXF1YXRlIGNvbnRleHQgZm9yIGFjY2Vzc2liaWxpdHkuIElmXG5ub3QgcHJvdmlkZWQsIGl0IGRlZmF1bHRzIHRvICdsb2FkaW5nJy4gRW1wdHkgYWx0IGNhbiBiZSBwcm92aWRlZCB0byBtYXJrIHRoZVxuZWxlbWVudCBhcyBkZWNvcmF0aXZlIGlmIGFsdGVybmF0aXZlIGNvbnRlbnQgaXMgcHJvdmlkZWQgaW4gYW5vdGhlciBmb3JtIChlLmcuIGFcbnRleHQgYmxvY2sgZm9sbG93aW5nIHRoZSBzcGlubmVyKS5cblxuICAgIDxwYXBlci1zcGlubmVyIGFsdD1cIkxvYWRpbmcgY29udGFjdHMgbGlzdFwiIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTEtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZpcnN0IHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtYmx1ZS01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTItY29sb3JgIHwgQ29sb3Igb2YgdGhlIHNlY29uZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXJlZC01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTMtY29sb3JgIHwgQ29sb3Igb2YgdGhlIHRoaXJkIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUteWVsbG93LTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItNC1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZm91cnRoIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtZ3JlZW4tNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1zdHJva2Utd2lkdGhgIHwgVGhlIHdpZHRoIG9mIHRoZSBzcGlubmVyIHN0cm9rZSB8IDNweFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXNwaW5uZXJcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiB0ZW1wbGF0ZSxcblxuICBpczogJ3BhcGVyLXNwaW5uZXInLFxuXG4gIGJlaGF2aW9yczogW1BhcGVyU3Bpbm5lckJlaGF2aW9yXVxufSk7XG4iLCJpbXBvcnQgeyBNYXAgfSBmcm9tIFwibGVhZmxldFwiO1xuXG4vLyBTZXRzIHVwIGEgTGVhZmxldCBtYXAgb24gdGhlIHByb3ZpZGVkIERPTSBlbGVtZW50XG5leHBvcnQgdHlwZSBMZWFmbGV0TW9kdWxlVHlwZSA9IHR5cGVvZiBpbXBvcnQoXCJsZWFmbGV0XCIpO1xuXG5leHBvcnQgY29uc3Qgc2V0dXBMZWFmbGV0TWFwID0gYXN5bmMgKFxuICBtYXBFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGFya01vZGUgPSBmYWxzZVxuKTogUHJvbWlzZTxbTWFwLCBMZWFmbGV0TW9kdWxlVHlwZV0+ID0+IHtcbiAgaWYgKCFtYXBFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc2V0dXAgTGVhZmxldCBtYXAgb24gZGlzY29ubmVjdGVkIGVsZW1lbnRcIik7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IExlYWZsZXQgPSAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibGVhZmxldFwiICovIFwibGVhZmxldFwiKSkgYXMgTGVhZmxldE1vZHVsZVR5cGU7XG4gIExlYWZsZXQuSWNvbi5EZWZhdWx0LmltYWdlUGF0aCA9IFwiL3N0YXRpYy9pbWFnZXMvbGVhZmxldC9pbWFnZXMvXCI7XG5cbiAgY29uc3QgbWFwID0gTGVhZmxldC5tYXAobWFwRWxlbWVudCk7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIvc3RhdGljL2ltYWdlcy9sZWFmbGV0L2xlYWZsZXQuY3NzXCIpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICBtYXBFbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICBtYXAuc2V0VmlldyhbNTIuMzczMTMzOSwgNC44OTAzMTQ3XSwgMTMpO1xuICBjcmVhdGVUaWxlTGF5ZXIoTGVhZmxldCwgZGFya01vZGUpLmFkZFRvKG1hcCk7XG5cbiAgcmV0dXJuIFttYXAsIExlYWZsZXRdO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRpbGVMYXllciA9IChcbiAgbGVhZmxldDogTGVhZmxldE1vZHVsZVR5cGUsXG4gIGRhcmtNb2RlOiBib29sZWFuXG4pID0+IHtcbiAgcmV0dXJuIGxlYWZsZXQudGlsZUxheWVyKFxuICAgIGBodHRwczovL3tzfS5iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vJHtcbiAgICAgIGRhcmtNb2RlID8gXCJkYXJrX2FsbFwiIDogXCJsaWdodF9hbGxcIlxuICAgIH0ve3p9L3t4fS97eX0ke2xlYWZsZXQuQnJvd3Nlci5yZXRpbmEgPyBcIkAyeC5wbmdcIiA6IFwiLnBuZ1wifWAsXG4gICAge1xuICAgICAgYXR0cmlidXRpb246XG4gICAgICAgICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+LCAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vY2FydG8uY29tL2F0dHJpYnV0aW9uc1wiPkNBUlRPPC9hPicsXG4gICAgICBzdWJkb21haW5zOiBcImFiY2RcIixcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAyMCxcbiAgICB9XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1wcm9ncmVzcy1idXR0b25cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFDYWxsU2VydmljZUJ1dHRvbiBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtcHJvZ3Jlc3MtYnV0dG9uXG4gICAgICAgIGlkPVwicHJvZ3Jlc3NcIlxuICAgICAgICBwcm9ncmVzcz1cIltbcHJvZ3Jlc3NdXVwiXG4gICAgICAgIG9uLWNsaWNrPVwiYnV0dG9uVGFwcGVkXCJcbiAgICAgICAgPjxzbG90Pjwvc2xvdFxuICAgICAgPjwvaGEtcHJvZ3Jlc3MtYnV0dG9uPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZG9tYWluOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZpY2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcblxuICAgICAgc2VydmljZURhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZToge30sXG4gICAgICB9LFxuXG4gICAgICBjb25maXJtYXRpb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgYnV0dG9uVGFwcGVkKCkge1xuICAgIGlmICh0aGlzLmNvbmZpcm1hdGlvbiAmJiAhd2luZG93LmNvbmZpcm0odGhpcy5jb25maXJtYXRpb24pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvZ3Jlc3MgPSB0cnVlO1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgdmFyIGV2ZW50RGF0YSA9IHtcbiAgICAgIGRvbWFpbjogdGhpcy5kb21haW4sXG4gICAgICBzZXJ2aWNlOiB0aGlzLnNlcnZpY2UsXG4gICAgICBzZXJ2aWNlRGF0YTogdGhpcy5zZXJ2aWNlRGF0YSxcbiAgICB9O1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZSwgdGhpcy5zZXJ2aWNlRGF0YSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBlbC5wcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgIGVsLiQucHJvZ3Jlc3MuYWN0aW9uU3VjY2VzcygpO1xuICAgICAgICAgIGV2ZW50RGF0YS5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZWwucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBlbC4kLnByb2dyZXNzLmFjdGlvbkVycm9yKCk7XG4gICAgICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsLmZpcmUoXCJoYXNzLXNlcnZpY2UtY2FsbGVkXCIsIGV2ZW50RGF0YSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCIsIEhhQ2FsbFNlcnZpY2VCdXR0b24pO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgTWFya2VyLCBNYXAsIExlYWZsZXRNb3VzZUV2ZW50LCBEcmFnRW5kRXZlbnQsIExhdExuZyB9IGZyb20gXCJsZWFmbGV0XCI7XG5pbXBvcnQge1xuICBzZXR1cExlYWZsZXRNYXAsXG4gIExlYWZsZXRNb2R1bGVUeXBlLFxufSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9zZXR1cC1sZWFmbGV0LW1hcFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWxvY2F0aW9uLWVkaXRvclwiKVxuY2xhc3MgTG9jYXRpb25FZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxvY2F0aW9uPzogW251bWJlciwgbnVtYmVyXTtcbiAgcHVibGljIGZpdFpvb20gPSAxNjtcblxuICBwcml2YXRlIF9pZ25vcmVGaXRUb01hcD86IFtudW1iZXIsIG51bWJlcl07XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHByaXZhdGUgTGVhZmxldD86IExlYWZsZXRNb2R1bGVUeXBlO1xuICBwcml2YXRlIF9sZWFmbGV0TWFwPzogTWFwO1xuICBwcml2YXRlIF9sb2NhdGlvbk1hcmtlcj86IE1hcmtlcjtcblxuICBwdWJsaWMgZml0TWFwKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fbGVhZmxldE1hcCB8fCAhdGhpcy5sb2NhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9sZWFmbGV0TWFwLnNldFZpZXcodGhpcy5sb2NhdGlvbiwgdGhpcy5maXRab29tKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgaWQ9XCJtYXBcIj48L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5faW5pdE1hcCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIFN0aWxsIGxvYWRpbmcuXG4gICAgaWYgKCF0aGlzLkxlYWZsZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGVNYXJrZXIoKTtcbiAgICBpZiAoIXRoaXMuX2lnbm9yZUZpdFRvTWFwIHx8IHRoaXMuX2lnbm9yZUZpdFRvTWFwICE9PSB0aGlzLmxvY2F0aW9uKSB7XG4gICAgICB0aGlzLmZpdE1hcCgpO1xuICAgIH1cbiAgICB0aGlzLl9pZ25vcmVGaXRUb01hcCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9tYXBFbCgpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImRpdlwiKSE7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9pbml0TWFwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIFt0aGlzLl9sZWFmbGV0TWFwLCB0aGlzLkxlYWZsZXRdID0gYXdhaXQgc2V0dXBMZWFmbGV0TWFwKHRoaXMuX21hcEVsKTtcbiAgICB0aGlzLl9sZWFmbGV0TWFwLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAoZXY6IExlYWZsZXRNb3VzZUV2ZW50KSA9PiB0aGlzLl91cGRhdGVMb2NhdGlvbihldi5sYXRsbmcpXG4gICAgKTtcbiAgICB0aGlzLl91cGRhdGVNYXJrZXIoKTtcbiAgICB0aGlzLmZpdE1hcCgpO1xuICAgIHRoaXMuX2xlYWZsZXRNYXAuaW52YWxpZGF0ZVNpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUxvY2F0aW9uKGxhdGxuZzogTGF0TG5nKSB7XG4gICAgbGV0IGxvbmdpdHVkZSA9IGxhdGxuZy5sbmc7XG4gICAgaWYgKE1hdGguYWJzKGxvbmdpdHVkZSkgPiAxODAuMCkge1xuICAgICAgLy8gTm9ybWFsaXplIGxvbmdpdHVkZSBpZiBtYXAgcHJvdmlkZXMgdmFsdWVzIGJleW9uZCAtMTgwIHRvICsxODAgZGVncmVlcy5cbiAgICAgIGxvbmdpdHVkZSA9ICgoKGxvbmdpdHVkZSAlIDM2MC4wKSArIDU0MC4wKSAlIDM2MC4wKSAtIDE4MC4wO1xuICAgIH1cbiAgICB0aGlzLmxvY2F0aW9uID0gdGhpcy5faWdub3JlRml0VG9NYXAgPSBbbGF0bG5nLmxhdCwgbG9uZ2l0dWRlXTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJjaGFuZ2VcIiwgdW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlTWFya2VyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5sb2NhdGlvbikge1xuICAgICAgaWYgKHRoaXMuX2xvY2F0aW9uTWFya2VyKSB7XG4gICAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9sb2NhdGlvbk1hcmtlciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbG9jYXRpb25NYXJrZXIpIHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyLnNldExhdExuZyh0aGlzLmxvY2F0aW9uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYXRpb25NYXJrZXIgPSB0aGlzLkxlYWZsZXQhLm1hcmtlcih0aGlzLmxvY2F0aW9uLCB7XG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5fbG9jYXRpb25NYXJrZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiZHJhZ2VuZFwiLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgKGV2OiBEcmFnRW5kRXZlbnQpID0+IHRoaXMuX3VwZGF0ZUxvY2F0aW9uKGV2LnRhcmdldC5nZXRMYXRMbmcoKSlcbiAgICApO1xuICAgIHRoaXMuX2xlYWZsZXRNYXAhLmFkZExheWVyKHRoaXMuX2xvY2F0aW9uTWFya2VyKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICB9XG4gICAgICAjbWFwIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWxvY2F0aW9uLWVkaXRvclwiOiBMb2NhdGlvbkVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHRpbWV6b25lcyBmcm9tIFwiZ29vZ2xlLXRpbWV6b25lcy1qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUaW1lem9uZUxpc3RFbCA9ICgpID0+IHtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKTtcbiAgbGlzdC5pZCA9IFwidGltZXpvbmVzXCI7XG4gIE9iamVjdC5rZXlzKHRpbWV6b25lcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBrZXk7XG4gICAgb3B0aW9uLmlubmVySFRNTCA9IHRpbWV6b25lc1trZXldO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG4gIHJldHVybiBsaXN0O1xufTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhhc3NDb25maWcgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnVXBkYXRlVmFsdWVzIHtcbiAgbG9jYXRpb25fbmFtZTogc3RyaW5nO1xuICBsYXRpdHVkZTogbnVtYmVyO1xuICBsb25naXR1ZGU6IG51bWJlcjtcbiAgZWxldmF0aW9uOiBudW1iZXI7XG4gIHVuaXRfc3lzdGVtOiBcIm1ldHJpY1wiIHwgXCJpbXBlcmlhbFwiO1xuICB0aW1lX3pvbmU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVDb3JlQ29uZmlnID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB2YWx1ZXM6IFBhcnRpYWw8Q29uZmlnVXBkYXRlVmFsdWVzPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxIYXNzQ29uZmlnPih7XG4gICAgdHlwZTogXCJjb25maWcvY29yZS91cGRhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGV0ZWN0Q29yZUNvbmZpZyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxQYXJ0aWFsPENvbmZpZ1VwZGF0ZVZhbHVlcz4+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9jb3JlL2RldGVjdFwiLFxuICB9KTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b24vbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1idXR0b24vcGFwZXItcmFkaW8tYnV0dG9uXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vcG9seW1lci10eXBlc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgUGFwZXJJbnB1dEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IFVOSVRfQyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RcIjtcbmltcG9ydCB7IENvbmZpZ1VwZGF0ZVZhbHVlcywgc2F2ZUNvcmVDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb3JlXCI7XG5pbXBvcnQgeyBjcmVhdGVUaW1lem9uZUxpc3RFbCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3RpbWV6b25lLWRhdGFsaXN0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL21hcC9oYS1sb2NhdGlvbi1lZGl0b3JcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb25maWctY29yZS1mb3JtXCIpXG5jbGFzcyBDb25maWdDb3JlRm9ybSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfd29ya2luZyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2xvY2F0aW9uITogW251bWJlciwgbnVtYmVyXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbGV2YXRpb24hOiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3VuaXRTeXN0ZW0hOiBDb25maWdVcGRhdGVWYWx1ZXNbXCJ1bml0X3N5c3RlbVwiXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdGltZVpvbmUhOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IGNhbkVkaXQgPSBbXCJzdG9yYWdlXCIsIFwiZGVmYXVsdFwiXS5pbmNsdWRlcyhcbiAgICAgIHRoaXMuaGFzcy5jb25maWcuY29uZmlnX3NvdXJjZVxuICAgICk7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLl93b3JraW5nIHx8ICFjYW5FZGl0O1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZFxuICAgICAgICAuaGVhZGVyPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmZvcm0uaGVhZGluZ1wiXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAkeyFjYW5FZGl0XG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcuZWRpdF9yZXF1aXJlc19zdG9yYWdlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8aGEtbG9jYXRpb24tZWRpdG9yXG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICAgIC5sb2NhdGlvbj0ke3RoaXMuX2xvY2F0aW9uVmFsdWV9XG4gICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9sb2NhdGlvbkNoYW5nZWR9XG4gICAgICAgICAgICA+PC9oYS1sb2NhdGlvbi1lZGl0b3I+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy50aW1lX3pvbmVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcudGltZV96b25lXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbmFtZT1cInRpbWVab25lXCJcbiAgICAgICAgICAgICAgbGlzdD1cInRpbWV6b25lc1wiXG4gICAgICAgICAgICAgIC5kaXNhYmxlZD0ke2Rpc2FibGVkfVxuICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl90aW1lWm9uZVZhbHVlfVxuICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLmVsZXZhdGlvblwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy5lbGV2YXRpb25cIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBuYW1lPVwiZWxldmF0aW9uXCJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIC5kaXNhYmxlZD0ke2Rpc2FibGVkfVxuICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9lbGV2YXRpb25WYWx1ZX1cbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJzdWZmaXhcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLmVsZXZhdGlvbl9tZXRlcnNcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy51bml0X3N5c3RlbVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwYXBlci1yYWRpby1ncm91cFxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl91bml0U3lzdGVtVmFsdWV9XG4gICAgICAgICAgICAgIEBzZWxlY3RlZC1jaGFuZ2VkPSR7dGhpcy5fdW5pdFN5c3RlbUNoYW5nZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cIm1ldHJpY1wiIC5kaXNhYmxlZD0ke2Rpc2FibGVkfT5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLnVuaXRfc3lzdGVtX21ldHJpY1wiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcubWV0cmljX2V4YW1wbGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cImltcGVyaWFsXCIgLmRpc2FibGVkPSR7ZGlzYWJsZWR9PlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcudW5pdF9zeXN0ZW1faW1wZXJpYWxcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLmltcGVyaWFsX2V4YW1wbGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgICA8L3BhcGVyLXJhZGlvLWdyb3VwPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX3NhdmV9IC5kaXNhYmxlZD0ke2Rpc2FibGVkfT5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy5zYXZlX2J1dHRvblwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIltuYW1lPXRpbWVab25lXVwiXG4gICAgKSBhcyBQYXBlcklucHV0RWxlbWVudDtcbiAgICBpbnB1dC5pbnB1dEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGltZXpvbmVMaXN0RWwoKSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbG9jYXRpb25WYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb24gIT09IHVuZGVmaW5lZFxuICAgICAgPyB0aGlzLl9sb2NhdGlvblxuICAgICAgOiBbTnVtYmVyKHRoaXMuaGFzcy5jb25maWcubGF0aXR1ZGUpLCBOdW1iZXIodGhpcy5oYXNzLmNvbmZpZy5sb25naXR1ZGUpXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9lbGV2YXRpb25WYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxldmF0aW9uICE9PSB1bmRlZmluZWRcbiAgICAgID8gdGhpcy5fZWxldmF0aW9uXG4gICAgICA6IHRoaXMuaGFzcy5jb25maWcuZWxldmF0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3RpbWVab25lVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVab25lICE9PSB1bmRlZmluZWRcbiAgICAgID8gdGhpcy5fdGltZVpvbmVcbiAgICAgIDogdGhpcy5oYXNzLmNvbmZpZy50aW1lX3pvbmU7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdW5pdFN5c3RlbVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl91bml0U3lzdGVtICE9PSB1bmRlZmluZWRcbiAgICAgID8gdGhpcy5fdW5pdFN5c3RlbVxuICAgICAgOiB0aGlzLmhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlID09PSBVTklUX0NcbiAgICAgID8gXCJtZXRyaWNcIlxuICAgICAgOiBcImltcGVyaWFsXCI7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDaGFuZ2UoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgdGhpc1tgXyR7dGFyZ2V0Lm5hbWV9YF0gPSB0YXJnZXQudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9sb2NhdGlvbkNoYW5nZWQoZXYpIHtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IGV2LmN1cnJlbnRUYXJnZXQubG9jYXRpb247XG4gIH1cblxuICBwcml2YXRlIF91bml0U3lzdGVtQ2hhbmdlZChcbiAgICBldjogUG9seW1lckNoYW5nZWRFdmVudDxDb25maWdVcGRhdGVWYWx1ZXNbXCJ1bml0X3N5c3RlbVwiXT5cbiAgKSB7XG4gICAgdGhpcy5fdW5pdFN5c3RlbSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3NhdmUoKSB7XG4gICAgdGhpcy5fd29ya2luZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5fbG9jYXRpb25WYWx1ZTtcbiAgICAgIGF3YWl0IHNhdmVDb3JlQ29uZmlnKHRoaXMuaGFzcywge1xuICAgICAgICBsYXRpdHVkZTogbG9jYXRpb25bMF0sXG4gICAgICAgIGxvbmdpdHVkZTogbG9jYXRpb25bMV0sXG4gICAgICAgIGVsZXZhdGlvbjogTnVtYmVyKHRoaXMuX2VsZXZhdGlvblZhbHVlKSxcbiAgICAgICAgdW5pdF9zeXN0ZW06IHRoaXMuX3VuaXRTeXN0ZW1WYWx1ZSxcbiAgICAgICAgdGltZV96b25lOiB0aGlzLl90aW1lWm9uZVZhbHVlLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcIkZBSUxcIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3dvcmtpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAucm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgbWFyZ2luOiAwIC04cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5zZWNvbmRhcnkge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuZmxleCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIC5yb3cgPiAqIHtcbiAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jb25maWctY29yZS1mb3JtXCI6IENvbmZpZ0NvcmVGb3JtO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuaW1wb3J0IFwiLi9oYS1jb25maWctc2VjdGlvbi1jb3JlXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYUNvbmZpZ0NvcmUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYm9yZGVyIHtcbiAgICAgICAgICBtYXJnaW46IDMycHggYXV0byAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hcnJvdyAuYm9yZGVyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jb3JlLmNhcHRpb24nKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24tY29yZVxuICAgICAgICAgICAgaXMtd2lkZT1cIltbaXNXaWRlXV1cIlxuICAgICAgICAgICAgc2hvdy1hZHZhbmNlZD1cIltbc2hvd0FkdmFuY2VkXV1cIlxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICA+PC9oYS1jb25maWctc2VjdGlvbi1jb3JlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIHNob3dBZHZhbmNlZDogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzZXMoaXNXaWRlKSB7XG4gICAgcmV0dXJuIGlzV2lkZSA/IFwiY29udGVudFwiIDogXCJjb250ZW50IG5hcnJvd1wiO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1jb3JlXCIsIEhhQ29uZmlnQ29yZSk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b24vbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1idXR0b24vcGFwZXItcmFkaW8tYnV0dG9uXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vcG9seW1lci10eXBlc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgUGFwZXJJbnB1dEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IENvbmZpZ1VwZGF0ZVZhbHVlcywgc2F2ZUNvcmVDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb3JlXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY29uZmlnLW5hbWUtZm9ybVwiKVxuY2xhc3MgQ29uZmlnTmFtZUZvcm0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3dvcmtpbmcgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9uYW1lITogQ29uZmlnVXBkYXRlVmFsdWVzW1wibG9jYXRpb25fbmFtZVwiXTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgY29uc3QgY2FuRWRpdCA9IFtcInN0b3JhZ2VcIiwgXCJkZWZhdWx0XCJdLmluY2x1ZGVzKFxuICAgICAgdGhpcy5oYXNzLmNvbmZpZy5jb25maWdfc291cmNlXG4gICAgKTtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuX3dvcmtpbmcgfHwgIWNhbkVkaXQ7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgJHshY2FuRWRpdFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLmVkaXRfcmVxdWlyZXNfc3RvcmFnZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcubG9jYXRpb25fbmFtZVwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgLmRpc2FibGVkPSR7ZGlzYWJsZWR9XG4gICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9uYW1lVmFsdWV9XG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9zYXZlfSAuZGlzYWJsZWQ9JHtkaXNhYmxlZH0+XG4gICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcuc2F2ZV9idXR0b25cIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbmFtZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lICE9PSB1bmRlZmluZWRcbiAgICAgID8gdGhpcy5fbmFtZVxuICAgICAgOiB0aGlzLmhhc3MuY29uZmlnLmxvY2F0aW9uX25hbWU7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDaGFuZ2UoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgdGhpc1tgXyR7dGFyZ2V0Lm5hbWV9YF0gPSB0YXJnZXQudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zYXZlKCkge1xuICAgIHRoaXMuX3dvcmtpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzYXZlQ29yZUNvbmZpZyh0aGlzLmhhc3MsIHtcbiAgICAgICAgbG9jYXRpb25fbmFtZTogdGhpcy5fbmFtZVZhbHVlLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcIkZBSUxcIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3dvcmtpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNvbmZpZy1uYW1lLWZvcm1cIjogQ29uZmlnTmFtZUZvcm07XG4gIH1cbn1cbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5cbmltcG9ydCBpc0NvbXBvbmVudExvYWRlZCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmltcG9ydCBcIi4vaGEtY29uZmlnLW5hbWUtZm9ybVwiO1xuaW1wb3J0IFwiLi9oYS1jb25maWctY29yZS1mb3JtXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFDb25maWdTZWN0aW9uQ29yZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC52YWxpZGF0ZS1jb250YWluZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhbGlkYXRlLXJlc3VsdCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1ncmVlbi01MDApO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbmZpZy1pbnZhbGlkIHtcbiAgICAgICAgICBtYXJnaW46IDFlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbmZpZy1pbnZhbGlkIC50ZXh0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY29uZmlnLWludmFsaWQgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhbGlkYXRlLWxvZyB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuaGVhZGVyJyldXTwvc3BhblxuICAgICAgICA+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuaW50cm9kdWN0aW9uJyldXTwvc3BhblxuICAgICAgICA+XG5cbiAgICAgICAgPGhhLWNvbmZpZy1uYW1lLWZvcm0gaGFzcz1cIltbaGFzc11dXCI+PC9oYS1jb25maWctbmFtZS1mb3JtPlxuICAgICAgICA8aGEtY29uZmlnLWNvcmUtZm9ybSBoYXNzPVwiW1toYXNzXV1cIj48L2hhLWNvbmZpZy1jb3JlLWZvcm0+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgaXNXaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHZhbGlkYXRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgaXNWYWxpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIHZhbGlkYXRlTG9nOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBzaG93QWR2YW5jZWQ6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIGdyb3VwTG9hZGVkKGhhc3MpIHtcbiAgICByZXR1cm4gaXNDb21wb25lbnRMb2FkZWQoaGFzcywgXCJncm91cFwiKTtcbiAgfVxuXG4gIGF1dG9tYXRpb25Mb2FkZWQoaGFzcykge1xuICAgIHJldHVybiBpc0NvbXBvbmVudExvYWRlZChoYXNzLCBcImF1dG9tYXRpb25cIik7XG4gIH1cblxuICBzY3JpcHRMb2FkZWQoaGFzcykge1xuICAgIHJldHVybiBpc0NvbXBvbmVudExvYWRlZChoYXNzLCBcInNjcmlwdFwiKTtcbiAgfVxuXG4gIHZhbGlkYXRlQ29uZmlnKCkge1xuICAgIHRoaXMudmFsaWRhdGluZyA9IHRydWU7XG4gICAgdGhpcy52YWxpZGF0ZUxvZyA9IFwiXCI7XG4gICAgdGhpcy5pc1ZhbGlkID0gbnVsbDtcblxuICAgIHRoaXMuaGFzcy5jYWxsQXBpKFwiUE9TVFwiLCBcImNvbmZpZy9jb3JlL2NoZWNrX2NvbmZpZ1wiKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1ZhbGlkID0gcmVzdWx0LnJlc3VsdCA9PT0gXCJ2YWxpZFwiO1xuXG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRlTG9nID0gcmVzdWx0LmVycm9ycztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctc2VjdGlvbi1jb3JlXCIsIEhhQ29uZmlnU2VjdGlvbkNvcmUpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmNsYXNzIEhhQ29uZmlnU2VjdGlvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAyOHB4IDIwcHggMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtZGlzcGxheTE7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCA6OnNsb3R0ZWQoKikge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAubmFycm93LmNvbnRlbnQge1xuICAgICAgICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmludHJvIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+PHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyb1wiPjxzbG90IG5hbWU9XCJpbnRyb2R1Y3Rpb25cIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGZsZXgtYXV0b1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIG5hcnJvdzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgfSxcblxuICAgICAgaXNXaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwiY29udGVudCBcIjtcblxuICAgIHJldHVybiBpc1dpZGUgPyBjbGFzc2VzIDogY2xhc3NlcyArIFwibmFycm93XCI7XG4gIH1cblxuICBjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwidG9nZXRoZXIgbGF5b3V0IFwiO1xuXG4gICAgcmV0dXJuIGNsYXNzZXMgKyAoaXNXaWRlID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsIG5hcnJvd1wiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctc2VjdGlvblwiLCBIYUNvbmZpZ1NlY3Rpb24pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBeUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQTtBQUNBO0FBRUE7QUFFQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9GQTtBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUNBO0FBRUE7QUFJQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7OztBQXRFQTtBQUNBO0FBUUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBdkJBO0FBMkJBOzs7O0FBeENBO0FBQ0E7QUF5RUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQVdBO0FBSUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQXVHQTtBQTlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7Ozs7QUFDQTs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQVNBOzs7QUFBQTtBQXZHQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUF5R0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBSUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFoQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQTBOQTtBQWxOQTtBQUNBO0FBR0E7QUFFQTtBQUlBO0FBV0E7QUFjQTtBQU9BO0FBWUE7QUFPQTtBQVVBO0FBU0E7QUFVQTtBQUlBO0FBTUE7QUFJQTtBQVVBO0FBcEdBO0FBSUE7QUFxR0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBOzs7Ozs7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTkE7Ozs7QUFRQTs7O0FBRUE7Ozs7OztBQUVBO0FBRUE7QUFBQTtBQUNBO0FBb0JBOzs7QUFBQTtBQTNOQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFUQTtBQURBO0FBQ0E7QUE2TkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7QUFDQTtBQUNBOzs7QUF4Q0E7QUFDQTtBQTJCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7QUFyQ0E7QUFDQTtBQTJDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBbUVBO0FBL0RBO0FBQ0E7QUFHQTtBQUVBO0FBV0E7QUFLQTtBQVdBO0FBdkJBO0FBSUE7QUF3QkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBRkE7Ozs7QUFJQTs7O0FBRUE7Ozs7OztBQUVBO0FBcEVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUxBO0FBREE7QUFDQTtBQXNFQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQThFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXRHQTtBQUNBO0FBNENBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQXpCQTtBQTJCQTs7OztBQTVFQTtBQUNBO0FBeUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUhBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUErRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUF4RkE7QUFDQTtBQTBEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFjQTs7OztBQTdFQTtBQUNBO0FBMkZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=